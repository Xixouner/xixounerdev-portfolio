#!/usr/bin/env bash
set -e

# ============================================
# Deploy / Update — Rebuild après git pull
# ============================================

PROJECT_DIR="/var/www/projects/xixounerdev-portfolio"

cd "$PROJECT_DIR"

echo "=== Mise à jour XixounerDev Portfolio ==="

# 1. Pull
echo "[1/3] git pull..."
git pull

# 2. Rebuild
echo "[2/3] docker compose build..."
docker compose up -d --build

# 3. Nettoyage vieilles images
echo "[3/3] docker image prune -f..."
docker image prune -f

# 4. Vérification
sleep 3
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ "$HTTP_CODE" = "200" ]; then
  echo ""
  echo "========================================"
  echo "  Mise à jour réussie ! (HTTP $HTTP_CODE)"
  echo "========================================"
else
  echo "[!] Attention : HTTP $HTTP_CODE — vérifie les logs :"
  echo "    docker compose logs --tail 30"
fi
