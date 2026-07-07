#!/bin/bash
# Deploy Titi Academy ke VPS Hostinger
# Usage: bash deploy.sh <VPS_IP>

set -e

VPS_IP="${1:?Harap masukkan IP VPS, contoh: bash deploy.sh 123.45.67.89}"
VPS_USER="root"
PROJECT_DIR="/root/titiacademy-web"
SSH="ssh -o StrictHostKeyChecking=no"

echo "=== 1. Upload project ke VPS ==="
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  ./ ${VPS_USER}@${VPS_IP}:${PROJECT_DIR}/

echo ""
echo "=== 2. Install Docker & dependencies di VPS ==="
${SSH} ${VPS_USER}@${VPS_IP} bash -s << 'REMOTE'
  # Install Docker jika belum
  if ! command -v docker &> /dev/null; then
    apt-get update && apt-get install -y docker.io docker-compose
    systemctl enable docker && systemctl start docker
  fi

  # Install Node.js 22 jika belum
  if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
    apt-get install -y nodejs
  fi

  echo "✓ Docker dan Node.js siap"
REMOTE

echo ""
echo "=== 3. Build dan jalankan ==="
${SSH} ${VPS_USER}@${VPS_IP} "cd ${PROJECT_DIR} && docker compose up -d --build"

echo ""
echo "=== 4. Verifikasi ==="
sleep 5
${SSH} ${VPS_USER}@${VPS_IP} "docker compose -f ${PROJECT_DIR}/docker-compose.yml ps"
echo ""
echo "Test: curl http://${VPS_IP}"
curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://${VPS_IP}/ || echo "Belum respond (wajar, tunggu beberapa detik)"

echo ""
echo "=== DONE ==="
echo "Aplikasi berjalan di http://${VPS_IP}"
echo ""
echo "Setelah DNS diarahkan:"
echo "  SSH ke VPS: ssh root@${VPS_IP}"
echo "  Setup SSL:  bash ${PROJECT_DIR}/setup-ssl.sh"
