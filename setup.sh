#!/usr/bin/env bash
set -e

# ============================================
# Setup initial — À lancer UNE fois sur le VPS
# Usage : ./setup.sh
# ============================================

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "=== Setup XixounerDev Portfolio ==="
echo "→ Dossier : $PROJECT_DIR"

# 2. Fichier .env
if [ ! -f ".env" ]; then
  cp .env.example .env
  echo "[!] Fichier .env créé depuis .env.example."
  echo "    → Pense à éditer .env avec tes vraies clés : nano .env"
else
  echo "[✓] .env existe déjà."
fi

# 3. Build & start
echo "=== Build & start Docker ==="
docker compose up -d --build

# 4. Vérification
sleep 4
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ "$HTTP_CODE" = "200" ]; then
  echo ""
  echo "========================================"
  echo "  Déploiement réussi !"
  echo "  → http://localhost:3000 (HTTP $HTTP_CODE)"
  echo "  → https://xixouner.com (via reverse proxy)"
  echo "========================================"
else
  echo "[!] Serveur pas prêt (HTTP $HTTP_CODE) — vérifie avec : docker compose logs"
fi
