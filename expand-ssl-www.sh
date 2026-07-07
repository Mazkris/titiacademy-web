#!/bin/bash
# Auto-expand SSL untuk www.titiacademy.id
set -e
DOMAIN="www.titiacademy.id"
PROJECT_DIR="/root/titiacademy-web"

echo "[$(date)] Waiting for www DNS propagation..."
while true; do
  RESOLVED=$(dig +short $DOMAIN @8.8.8.8 2>/dev/null)
  if [ "$RESOLVED" = "212.85.26.154" ]; then
    echo "[$(date)] DNS propagated: $DOMAIN -> $RESOLVED"
    break
  fi
  echo "[$(date)] Still: $RESOLVED"
  sleep 60
done

cd $PROJECT_DIR
docker run --rm \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --email admin@titiacademy.id \
  --agree-tos --no-eff-email \
  -d titiacademy.id -d www.titiacademy.id \
  --expand

docker compose restart nginx
echo "[$(date)] SSL expanded: https://www.titiacademy.id"
