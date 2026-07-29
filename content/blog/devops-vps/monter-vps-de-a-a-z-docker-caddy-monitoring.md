---
title: "Monter un VPS de A à Z : Docker, Caddy et monitoring — le guide complet"
date: "2026-07-15"
category: "devops-vps"
description: "Guide pas à pas pour configurer un VPS Hetzner de zéro : sécurité SSH, Docker, Caddy reverse proxy avec SSL automatique, monitoring et backups. Pour développeurs qui veulent héberger leurs projets comme des pros."
image: "/blog/og-default.svg"
---

## Pourquoi un VPS plutôt qu'un hébergement mutualisé ?

J'ai commencé comme tout le monde : hébergement mutualisé à 3€ par mois chez o2switch. Et franchement, pour un site WordPress basique, ça fait le taf. Mais le jour où j'ai voulu héberger une app Node.js, un Docker, ou simplement avoir un vrai contrôle sur mon serveur, j'ai compris les limites.

Un VPS (Virtual Private Server), c'est un serveur virtuel rien qu'à vous. Vous avez les pleins pouvoirs : vous installez ce que vous voulez, vous configurez comme vous voulez, et surtout, les performances ne dépendent pas des 400 autres sites sur le même serveur.

Pour 5€ par mois chez Hetzner, vous avez :
- 2 vCPU
- 2 Go de RAM
- 20 Go de SSD
- 20 To de trafic

C'est largement suffisant pour héberger 5 à 10 sites vitrine ou applications légères. Et si vous avez besoin de plus, vous scalez en deux clics.

## Étape 1 : Acheter et sécuriser le VPS

### Commande du serveur

Allez sur Hetzner Cloud, créez un compte, commandez un VPS CX22 (le plus petit). Choisissez :
- **Image** : Ubuntu 24.04 LTS
- **Datacenter** : Nuremberg ou Helsinki (le plus proche de vos utilisateurs)
- **SSH key** : ajoutez votre clé publique SSH (NE PAS utiliser de mot de passe root)

### Première connexion et sécurisation

```bash
ssh root@votre-ip
```

Première chose à faire : créer un utilisateur non-root et désactiver la connexion root.

```bash
# Créer un utilisateur
adduser alexis
usermod -aG sudo alexis

# Copier la clé SSH
mkdir -p /home/alexis/.ssh
cp /root/.ssh/authorized_keys /home/alexis/.ssh/
chown -R alexis:alexis /home/alexis/.ssh
```

Modifier `/etc/ssh/sshd_config` :

```
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
```

Puis `systemctl restart sshd`. Testez la connexion avec le nouvel utilisateur avant de fermer la session root.

### Pare-feu avec UFW

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### Mises à jour automatiques

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

Dites oui. Votre serveur se mettra à jour tout seul pour les patchs de sécurité.

## Étape 2 : Installer Docker

```bash
# Désinstaller les vieilles versions
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do
  sudo apt-get remove $pkg
done

# Ajouter le repo officiel Docker
sudo apt-get update
sudo apt-get install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] \
  https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Vérifier
sudo docker run hello-world
```

Ajoutez votre utilisateur au groupe docker :

```bash
sudo usermod -aG docker alexis
newgrp docker
```

## Étape 3 : Caddy comme reverse proxy

J'ai utilisé Nginx pendant des années. Puis j'ai découvert Caddy. La différence ? **Caddy gère les certificats SSL automatiquement.** Plus besoin de configurer Certbot, de renouveler manuellement, de debugger des erreurs obscures. Caddy fait tout tout seul via Let's Encrypt.

### Installation

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | \
  sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | \
  sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### Configuration

Éditez `/etc/caddy/Caddyfile` :

```caddy
monsite.fr {
    reverse_proxy localhost:3000
    encode gzip zstd
    header {
        X-Frame-Options "SAMEORIGIN"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
    }
}

api.monsite.fr {
    reverse_proxy localhost:8080
    encode gzip
}
```

Redémarrez Caddy : `sudo systemctl reload caddy`.

Et voilà. Votre site est en HTTPS avec un certificat valide, renouvelé automatiquement. Zéro configuration SSL. C'est ça que j'appelle dormir tranquille.

## Étape 4 : Déployer vos apps avec Docker Compose

Créez un dossier par projet dans `/opt/` :

```bash
sudo mkdir -p /opt/mon-site
```

Exemple de `docker-compose.yml` pour un site Next.js :

```yaml
services:
  app:
    build: .
    container_name: mon-site
    restart: unless-stopped
    ports:
      - "127.0.0.1:3000:3000"
    environment:
      - NODE_ENV=production
    networks:
      - app

  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    restart: unless-stopped
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    command: --interval 86400 mon-site
    networks:
      - app

networks:
  app:
    driver: bridge
```

Notez le `127.0.0.1:3000:3000` — ça bind le port uniquement sur localhost. Caddy fait le reste. Votre app n'est jamais exposée directement sur Internet.

**Watchtower** met à jour automatiquement vos conteneurs Docker (une fois par jour). Pratique pour les patchs de sécurité sans y penser.

## Étape 5 : Monitoring minimaliste mais efficace

Pas besoin d'un Grafana + Prometheus + AlertManager à 15 Go de RAM. Pour un petit serveur, voici ce qui suffit :

### Docker stats en direct

```bash
docker stats --no-stream
```

### Logs centralisés avec Dozzle

```yaml
dozzle:
  image: amir20/dozzle:latest
  container_name: dozzle
  restart: unless-stopped
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  ports:
    - "127.0.0.1:9999:8080"
```

Accessible via Caddy avec une authentification basique, Dozzle vous donne une interface web pour lire les logs de tous vos conteneurs en temps réel.

### Check de santé avec Healthchecks.io

Healthchecks.io (gratuit pour 20 checks) envoie une requête à intervalle régulier vers vos services. Si le service ne répond pas, vous recevez un email.

### Alertes disque

```bash
#!/bin/bash
# /opt/scripts/check-disk.sh
USAGE=$(df -h / | awk 'NR==2 {print $5}' | sed 's/%//')
if [ "$USAGE" -gt 80 ]; then
  echo "Alerte disque : $USAGE% utilisés" | mail -s "VPS Disk Alert" votre@email.com
fi
```

Ajoutez ça dans la crontab : `0 8 * * * /opt/scripts/check-disk.sh`

## Étape 6 : Backups automatiques

Hetzner propose des snapshots automatiques (payants). Mais vous pouvez faire vos propres backups gratos :

```bash
#!/bin/bash
# /opt/scripts/backup.sh
BACKUP_DIR="/opt/backups/$(date +%Y-%m-%d)"
mkdir -p "$BACKUP_DIR"

# Backup des docker-compose et configs
cp -r /opt/mon-site "$BACKUP_DIR/"
cp /etc/caddy/Caddyfile "$BACKUP_DIR/"

# Cleanup : garder 7 jours
find /opt/backups -maxdepth 1 -type d -mtime +7 -exec rm -rf {} \;
```

Pour les bases de données, utilisez `pg_dump` ou `mysqldump` dans le script.

## Ce que j'utilise chez moi

Voici ma stack exacte, sans les détails sensibles :

- **Hetzner CX22** : VPS à ~5€, Ubuntu 24.04 LTS.
- **Docker + Docker Compose** : tous mes projets tournent en conteneurs. Isolation parfaite, déploiement reproductible.
- **Caddy** : reverse proxy, SSL automatique, headers de sécurité. Zéro maintenance.
- **Watchtower** : mise à jour automatique des conteneurs une fois par jour.
- **Dozzle** : logs en temps réel, interface web simple.
- **UFW** : pare-feu minimal, ports 22/80/443 uniquement.
- **Healthchecks.io** (gratuit) : monitoring par heartbeat.
- **Script bash + cron** : backup quotidien, rotation sur 7 jours.
- **Next.js standalone** : build minimal, image Docker légère (~150 Mo).

Pas d'IP, credentials, endpoints internes ni tokens affichés ici — question de bon sens.

## Combien ça coûte vraiment ?

| Service | Prix/mois |
|---------|----------|
| VPS Hetzner CX22 | 5 € |
| Nom de domaine (OVH) | ~1 € |
| Healthchecks.io | Gratuit |
| Dozzle | Gratuit |
| **Total** | **~6 € / mois** |

Pour 6€ par mois, vous hébergez plusieurs sites avec HTTPS, monitoring, backups et mises à jour automatiques. Comparez ça à un hébergement WordPress à 15€/mois qui rame dès que vous avez 50 visiteurs simultanés...

## Pour résumer

1. Prenez un VPS chez Hetzner (5€/mois, Ubuntu 24.04).
2. Sécurisez : SSH par clé, pas de root, UFW, màj auto.
3. Installez Docker pour isoler vos applis.
4. Configurez Caddy : SSL auto, reverse proxy, headers sécurité.
5. Déployez avec Docker Compose + Watchtower.
6. Ajoutez monitoring (Dozzle + Healthchecks.io) et backups.

En 2 heures de taf, vous avez une infra pro qui tient la route pour 6€/mois. Pas besoin d'être admin sys senior. Juste de la méthode.

---

**Vous voulez déléguer l'hébergement et le DevOps ?** Je configure, déploie et maintiens vos projets sur VPS. Docker, SSL, monitoring, backups — je gère tout. [Parlons-en →](https://xixouner.com/#contact)

## Bonus : Débugger quand ça plante

Parce que ça va planter. C'est le jeu. Voici mes réflexes quand un site ne répond plus :

### Check n°1 : Est-ce que le conteneur tourne ?

```bash
docker ps -a | grep mon-site
```

Si le statut est `Exited`, regardez les logs :

```bash
docker logs mon-site --tail 50
```

Dans 80% des cas, c'est une variable d'environnement manquante ou un port déjà utilisé.

### Check n°2 : Est-ce que Caddy répond ?

```bash
sudo systemctl status caddy
sudo journalctl -u caddy --since "10 minutes ago"
```

Si Caddy tourne mais le site est inaccessible, vérifiez que le port dans le Caddyfile correspond bien au port exposé par Docker (`docker port mon-site`).

### Check n°3 : Le disque est-il plein ?

```bash
df -h
```

Docker peut bouffer de l'espace disque avec les images non utilisées :

```bash
docker system prune -a --volumes
```

Attention, ça supprime tout ce qui n'est pas utilisé. À faire en connaissance de cause, idéalement après un backup.

### Check n°4 : La RAM est-elle saturée ?

```bash
free -h
docker stats --no-stream
```

Si votre VPS a 2 Go de RAM et que chaque conteneur en prend 500 Mo, à 4 conteneurs vous êtes à genoux. Solution : limitez la mémoire dans le docker-compose :

```yaml
services:
  app:
    deploy:
      resources:
        limits:
          memory: 256M
```

### Check n°5 : Le certificat SSL a expiré ?

Théoriquement, Caddy renouvelle automatiquement. Mais vérifiez quand même :

```bash
sudo journalctl -u caddy | grep -i certificate
```

## Sécurité avancée : aller plus loin que le minimum

Le minimum (SSH par clé, UFW, pas de root) couvre 95% des risques. Pour les paranoïaques (comme moi), voici les couches supplémentaires :

- **Fail2ban** : bannit automatiquement les IP qui font du brute-force SSH. Installation en 2 minutes, config par défaut déjà bonne.
- **CrowdSec** : version moderne de Fail2ban, collaborative (les IP malveillantes sont partagées entre utilisateurs). Plus lourd mais plus efficace.
- **Auditd** : log tous les accès fichiers sensibles. Utile pour du forensic après incident.
- **Port knocking** : le port SSH est fermé par défaut. Vous envoyez une séquence de paquets sur des ports spécifiques pour l'ouvrir. Overkill pour 99% des cas, mais élégant.

## Checklist récapitulative

Avant de dormir tranquille, vérifiez que :

- [ ] SSH désactivé pour root, authentification par clé uniquement
- [ ] UFW activé, ports 22/80/443 uniquement
- [ ] Mises à jour automatiques de sécurité (unattended-upgrades)
- [ ] Docker en place, conteneurs isolés
- [ ] Caddy configuré avec SSL auto + headers sécurité
- [ ] Watchtower pour màj auto des conteneurs
- [ ] Healthchecks.io pour être alerté si ça tombe
- [ ] Backup quotidien avec rotation 7 jours
- [ ] Fail2ban ou CrowdSec configuré
- [ ] `docker system prune` en cron hebdomadaire

Cochez tout ça, et vous pouvez partir en vacances l'esprit tranquille. Votre serveur tournera sans vous.

---

**📖 À lire aussi :**
- [J'ai délégué la gestion de mon serveur à une IA — voici comment](/blog/jai-delegue-gestion-serveur-a-une-ia-openclaw)
- [Création site internet pas cher — à partir de 500€](/blog/creation-site-internet-pas-cher)
- [Prix création site web 2026 : combien ça coûte vraiment ?](/blog/prix-creation-site-web)
