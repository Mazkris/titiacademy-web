#!/bin/bash
# Setup SSL dengan Let's Encrypt untuk titiacademy.id
set -e

# Hentikan nginx sementara
docker compose stop nginx

# Generate certificate
docker run --rm \
  -v "$(pwd)/certbot/conf:/etc/letsencrypt" \
  -v "$(pwd)/certbot/www:/var/www/certbot" \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --email admin@titiacademy.id \
  --agree-tos --no-eff-email \
  -d titiacademy.id -d www.titiacademy.id

# Update nginx config untuk HTTPS
cat > nginx.conf << 'NGINX_SSL'
server {
    listen 80;
    server_name titiacademy.id www.titiacademy.id;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name titiacademy.id www.titiacademy.id;

    ssl_certificate /etc/letsencrypt/live/titiacademy.id/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/titiacademy.id/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://titiacademy:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX_SSL

# Restart dengan SSL
docker compose up -d nginx

echo "✓ SSL aktif!"
echo "  https://titiacademy.id"

# Auto-renewal cron
(crontab -l 2>/dev/null; echo "0 3 * * * docker run --rm -v $(pwd)/certbot/conf:/etc/letsencrypt -v $(pwd)/certbot/www:/var/www/certbot certbot/certbot renew --quiet && docker compose restart nginx") | crontab -

echo "✓ Auto-renewal cron disetup (tiap jam 3 pagi)"
