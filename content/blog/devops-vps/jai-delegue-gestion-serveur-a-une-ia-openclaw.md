---
title: "J'ai délégué la gestion de mon serveur à une IA — voici comment (et pourquoi)"
date: "2026-07-28"
category: "devops-vps"
description: "Comment j'utilise OpenClaw, un agent IA auto-hébergé, pour gérer l'infrastructure de mes 4 sites : monitoring, déploiements, backups, diagnostics. 10h/semaine économisées, 0 incident non détecté."
image: "/blog/og-default.svg"
---

## Le problème que tout freelance connaît

Je gère 4 sites en production : mon portfolio (celui que vous lisez), un SaaS d'audit de sécurité (AuditBot), le site d'une association, et un dashboard analytics maison. Le tout tourne sur un seul VPS Hetzner avec Docker, Caddy, PostgreSQL, MariaDB, Redis, et une poignée de scripts bash.

Avant, ma routine ressemblait à ça :

- 8h30 : café, check des uptimes (5 onglets)
- 8h45 : vérifier les backups de la veille
- 9h00 : déployer la dernière version d'AuditBot (15 minutes à pull, build, restart)
- 9h20 : un client signale que son site rame → diagnostic manuel
- 10h00 : enfin je peux coder... jusqu'au prochain imprévu

Bilan : **~10 heures par semaine** passées sur de la maintenance. Pas du code. Pas du business. De la plomberie.

Je suis développeur, pas admin sys. Mais j'héberge mes projets moi-même parce que les solutions clé-en-main coûtent un rein (Vercel Pro à 20€/mois/site, times 4 = 80€). Mon VPS Hetzner me coûte 5€. Le gap est trop grand pour l'ignorer.

Alors j'ai cherché un **co-pilote**. Pas un humain (trop cher), pas un SaaS (mes données partent chez eux). Un agent IA que je peux faire tourner sur mon propre serveur, qui comprend le langage naturel, et qui peut exécuter des actions concrètes.

J'ai trouvé **OpenClaw**.

## C'est quoi OpenClaw ?

OpenClaw est un agent IA open source que vous hébergez vous-même. Il se connecte à votre serveur via SSH, lit vos logs, exécute des commandes, et vous répond en français (ou en anglais) via Telegram, Discord, ou une interface web.

Ce n'est pas un chatbot qui vous dit « je suis désolé, je ne peux pas faire ça ». C'est un agent qui **agit**. Il peut :

- Lire l'état de vos conteneurs Docker (`docker ps`, `docker stats`)
- Analyser les logs applicatifs (`docker logs --tail 200`)
- Exécuter des commandes de diagnostic (`df -h`, `htop`, `journalctl`)
- Relancer un service qui a crashé
- Faire un `docker system prune` pour nettoyer le cache
- Déclencher un build CI/CD via webhook GitHub
- Vous envoyer une alerte Telegram si un site ne répond pas

Et tout ça, **depuis mon téléphone**, en pleine nuit, sans ouvrir un terminal.

## Ce qu'OpenClaw gère concrètement chez moi

### 1. Monitoring uptime 24/7

Un script bash tourne en crontab toutes les 5 minutes. Il ping mes 4 endpoints :

```bash
#!/bin/bash
SITES=("xixouner.com" "auditbot.xixouner.com" "lesacacias.org" "status.xixouner.com")

for site in "${SITES[@]}"; do
  status=$(curl -o /dev/null -s -w "%{http_code}" "https://$site")
  if [ "$status" != "200" ]; then
    echo "ALERTE: $site retourne $status" | tee -a /var/log/monitor.log
  fi
done
```

Si un site tombe, le script log l'erreur. OpenClaw surveille ce fichier de log. Dès qu'une ligne "ALERTE" apparaît, il m'envoie un message Telegram :

> 🚨 ALERTE — auditbot.xixouner.com retourne 502
> Dernier déploiement : il y a 12 min
> Logs du container : `Error: connection refused on port 5432`
> Action suggérée : restart container PostgreSQL

Je réponds `oui` depuis Telegram, il exécute le restart. Temps total entre l'incident et la résolution : moins de 2 minutes. Avant, je découvrais qu'un site était down quand un client m'envoyait un email. Le lendemain.

### 2. CI/CD automatisé

Mon pipeline est simple : je push sur `main`, un webhook GitHub appelle un endpoint Node.js sur mon VPS, qui pull la nouvelle version, rebuild le container Docker, et le redémarre.

Avant, je faisais ça manuellement :

```bash
ssh user@vps
cd /opt/auditbot
git pull
docker compose up -d --build
```

Aujourd'hui, je tape dans Telegram :

> Déploie la dernière version d'AuditBot

OpenClaw exécute le webhook. 40 secondes plus tard :

> ✅ AuditBot déployé — commit a3f8b2c
> Build time : 38s
> Container : healthy

Temps gagné à chaque déploiement : ~15 minutes → 40 secondes. Multiplié par 3-4 déploiements par semaine, ça fait **~3h/semaine économisées** rien que sur le CI/CD.

### 3. Backups automatiques

Mes backups tournent en cron la nuit. OpenClaw les supervise :

- **MariaDB** (Matomo, apps diverses) : dump quotidien
- **PostgreSQL** (AuditBot) : pg_dump quotidien
- **Redis** : snapshot RDB
- **Rotation** : 7 jours de rétention, les backups de +7 jours sont supprimés

Chaque matin à 7h, OpenClaw m'envoie un récapitulatif :

> 📊 Résumé backups — 28/07/2026
> ✅ MariaDB dump : 2.1 Mo
> ✅ PostgreSQL dump : 4.7 Mo
> ✅ Redis snapshot : 340 Ko
> 🗑️ Backups supprimés (J+8) : 3 fichiers

Je n'ai plus jamais à me demander « est-ce que les backups ont bien tourné cette nuit ? ».

### 4. Diagnostics intelligents

C'est là qu'OpenClaw brille vraiment. Un exemple réel :

La semaine dernière, mon déploiement AuditBot a échoué avec une erreur obscure :

```
Error: ENOSPC: no space left on device
```

Avant, j'aurais passé 20 minutes à SSH, `df -h`, `du -sh`, chercher quel dossier bouffe l'espace. À la place, j'ai demandé à OpenClaw :

> Pourquoi mon disque est plein ?

Sa réponse en 8 secondes :

> 📊 Analyse disque VPS :
> - /dev/sda1 : 92% utilisé (38 Go)
> - /var/lib/docker/overlay2 : 17 Go
> - /var/lib/docker/containers : 2 Go
> - Images Docker non utilisées : 8 Go
> - Logs Docker non compressés : 3 Go
> **Action recommandée** : `docker system prune -a --volumes` (libérera ~11 Go)

J'ai répondu `oui`. 30 secondes plus tard, 11 Go de cache Docker étaient nettoyés, et le déploiement a fonctionné. 11 Go récupérés en une commande, sans transpirer.

### 5. Sécurité proactive

OpenClaw surveille mes logs d'accès Caddy et mes tentatives de connexion SSH. Quand il détecte un pattern suspect (ex : 50 tentatives SSH échouées depuis une IP inconnue), il m'alerte et propose de bannir l'IP via UFW.

La stack sécurité qu'il supervise :
- **Caddy** : HTTPS automatique, Let's Encrypt, renouvellement sans intervention
- **Headers CSP** : Content-Security-Policy, X-Frame-Options, Referrer-Policy
- **Basic auth** : sur les endpoints sensibles (dashboard, API admin)
- **UFW** : ports 22, 80, 443 uniquement
- **Fail2ban** : bannissement automatique après 5 échecs SSH

## La stack technique complète

Voici ce qui tourne sur le VPS, orchestré par OpenClaw :

| Composant | Rôle |
|-----------|------|
| 🐳 Docker + Compose | Isolation des 4 projets dans leurs conteneurs |
| 🔒 Caddy | Reverse proxy, SSL Let's Encrypt automatique |
| 📊 Matomo | Analytics auto-hébergé (zéro donnée chez Google) |
| 🗄️ PostgreSQL | Base de données principale (AuditBot) |
| 🗄️ MariaDB | Base Matomo + apps secondaires |
| ⚡ Redis | Cache, sessions, queues |
| 🤖 OpenClaw | Agent IA qui orchestre le tout |
| 🔄 GitHub Webhooks | CI/CD : push → build Docker → déploiement |
| 📈 Script bash + cron | Monitoring uptime toutes les 5 min |

Le tout sur un **VPS Hetzner à 5 €/mois** (2 vCPU, 2 Go RAM, 20 Go SSD). Oui, 4 sites en production pour le prix d'un kebab.

## Pourquoi OpenClaw plutôt qu'un autre outil ?

J'ai testé plusieurs approches avant d'atterrir sur OpenClaw :

| Solution | Pourquoi j'ai écarté |
|----------|---------------------|
| **Datadog / New Relic** | 15€/mois/serveur minimum, données chez eux |
| **Grafana + Prometheus** | Puissant mais lourd (2 Go de RAM), overkill pour 4 sites |
| **UptimeRobot** (gratuit) | Monitoring seulement, pas d'actions, pas de diag |
| **Scripts bash maison** | Fonctionnent, mais aucune intelligence — je dois tout lire et interpréter |

OpenClaw coche toutes les cases qui comptent pour un freelance solo :

- **Open source** : le code est sur GitHub, je peux l'auditer
- **Auto-hébergé** : mes logs, mes backups, mes données d'infra ne quittent jamais mon VPS
- **Langage naturel** : je lui parle comme à un collègue, pas besoin d'apprendre une syntaxe
- **Multi-canal** : Telegram sur mon tel, interface web sur le dashboard, Discord si besoin
- **Léger** : ~150 Mo de RAM, tourne dans un container Docker comme le reste
- **Actionnable** : il ne se contente pas de dire « y'a un problème », il propose et exécute des solutions

## Ce que ça m'a apporté (les vrais chiffres)

| Métrique | Avant | Après |
|----------|-------|-------|
| Temps maintenance / semaine | ~10h | ~1h (supervision) |
| Temps de déploiement | 15 min | 40 secondes |
| Détection incident | Le lendemain (email client) | < 5 min (alerte Telegram) |
| Incidents non détectés | 2-3 / mois | 0 |
| Stress « est-ce que tout tourne ? » | Permanent | Zéro |

**~10 heures par semaine économisées.** À 70€/h, c'est 700€ de temps facturable que je ne perds plus en maintenance. L'équivalent de 2 jours de travail par mois. Récupérés.

## Ce que j'utilise chez moi

La stack exacte, sans les détails sensibles :

- **Hetzner CX22** : VPS 5€/mois, Ubuntu 24.04, Docker
- **Caddy** : reverse proxy, SSL auto, basicauth sur endpoints sensibles
- **Docker Compose** : 1 fichier par projet, isolation parfaite
- **GitHub Webhooks + Node.js** : CI/CD maison, rebuild auto
- **Matomo** : analytics cookieless, auto-hébergé
- **OpenClaw** : agent IA, exécution de commandes, alertes Telegram
- **Scripts bash + crontab** : monitoring 5 min, backups quotidiens
- **Telegram Bot API** : canal de communication principal avec l'IA

Pas d'IP, tokens, endpoints internes ou mots de passe affichés ici — vous comprenez.

## Est-ce que je recommande à tout le monde ?

Honnêtement : **si vous gérez plus de 2 sites**, oui. Si vous avez un seul site vitrine sur un hébergement mutualisé, un UptimeRobot gratuit suffit.

Mais dès que vous avez plusieurs projets, des bases de données, des déploiements fréquents, et que vous voulez dormir la nuit sans check de uptime à 2h du matin — un agent IA auto-hébergé change la donne.

Ce n'est pas de la magie. C'est juste le bon outil au bon endroit.

---

**Vous voulez la même stack pour votre projet ?** Je configure, déploie et maintiens des infrastructures Docker complètes avec monitoring IA, CI/CD et backups — le tout pour quelques euros par mois. [Parlons-en →](https://xixouner.com/#contact)
