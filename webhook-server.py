#!/usr/bin/env python3
# Auto-deploy webhook listener for titiacademy-web
# Listener :9000. HANYA event `push` dengan tanda tangan sah yang memicu deploy.
# 22 Sep 2026: ditambah penyaring event + catatan permintaan masuk
#   (/var/log/titiacademy-webhook.log). Sebelumnya listener ini bisu: log_message
#   dimatikan dan tidak ada catatan, sehingga tidak ada jejak audit sama sekali.

import hashlib
import hmac
import os
import subprocess
from datetime import datetime, timezone
from http.server import HTTPServer, BaseHTTPRequestHandler

PROJECT_DIR = "/root/titiacademy-web"
SECRET = os.environ.get("WEBHOOK_SECRET")
BRANCH = "main"
LOG_FILE = "/var/log/titiacademy-webhook.log"


def catat(baris):
    try:
        with open(LOG_FILE, "a", encoding="utf-8") as f:
            stempel = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
            f.write(f"[{stempel} UTC] {baris}\n")
    except Exception:
        pass  # kegagalan mencatat tidak boleh menghentikan layanan


class DeployHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        panjang = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(panjang)
        sig = self.headers.get("X-Hub-Signature-256", "")
        event = self.headers.get("X-GitHub-Event", "(tanpa header)")
        asal = self.client_address[0]

        harapan = "sha256=" + hmac.new(SECRET.encode(), body, hashlib.sha256).hexdigest()
        if not hmac.compare_digest(sig, harapan):
            catat(f"DITOLAK tanda tangan (event={event}, dari={asal}, panjang={panjang})")
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b"Invalid signature")
            return

        if event != "push":
            catat(f"diabaikan: event={event} dari={asal} (hanya 'push' yang memicu deploy)")
            self.send_response(200)
            self.end_headers()
            self.wfile.write(("event '" + event + "' diabaikan\n").encode())
            return

        catat(f"DEPLOY dipicu: event=push dari={asal}")
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"OK - deploying\n")
        subprocess.Popen([
            "bash", "-c",
            "cd %s && git pull origin %s && docker compose up -d --build "
            ">> %s/deploy.log 2>&1" % (PROJECT_DIR, BRANCH, PROJECT_DIR)
        ])

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"titiacademy-webhook alive\n")

    def log_message(self, format, *args):
        pass


if __name__ == "__main__":
    catat("layanan dijalankan (listener :9000)")
    HTTPServer(("0.0.0.0", 9000), DeployHandler).serve_forever()
