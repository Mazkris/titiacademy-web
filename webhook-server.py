#!/usr/bin/env python3
# Auto-deploy webhook listener for titiacademy-web
# Listens on port 9000, triggers docker compose up -d --build on push

import os
import subprocess
import hmac
import hashlib
from http.server import HTTPServer, BaseHTTPRequestHandler

PROJECT_DIR = "/root/titiacademy-web"
SECRET = os.environ.get("WEBHOOK_SECRET", "titiacademy-deploy-2026")
BRANCH = "main"

class DeployHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)
        sig = self.headers.get("X-Hub-Signature-256", "")

        # Validate signature
        expected = "sha256=" + hmac.new(SECRET.encode(), body, hashlib.sha256).hexdigest()
        if not hmac.compare_digest(sig, expected):
            self.send_response(403)
            self.end_headers()
            self.wfile.write(b"Invalid signature")
            return

        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"OK - deploying\n")

        # Deploy in background
        subprocess.Popen([
            "bash", "-c",
            f"cd {PROJECT_DIR} && git pull origin {BRANCH} && docker compose up -d --build "
            f">> {PROJECT_DIR}/deploy.log 2>&1"
        ])

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"titiacademy-webhook alive\n")

    def log_message(self, format, *args):
        pass  # silent

if __name__ == "__main__":
    server = HTTPServer(("0.0.0.0", 9000), DeployHandler)
    print("Webhook listener on :9000")
    server.serve_forever()
