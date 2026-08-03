---
title: "J'ai construit mon propre tracker de clics d'affiliation — voici pourquoi (et comment)"
date: "2026-08-03"
category: "devops-vps"
description: "Pourquoi j'ai remplacé le dashboard Amazon par mon propre tracker de clics : une redirection /go/ de 50 lignes qui logge chaque clic produit, avec rapport Telegram quotidien. Le code et l'architecture expliqués."
image: "/blog/og-default.svg"
---

## Pourquoi j'ai arrêté de dépendre du dashboard Amazon

Quand on a un site d'affiliation, la question la plus importante est : **quels articles génèrent des clics ?**

Le dashboard Amazon répond… avec 24 à 48 heures de retard, et sans le détail par article. Vous savez que vous avez eu des clics, mais pas lesquels, ni d'où venaient les visiteurs. Pour orienter sa production de contenu, c'est insuffisant.

J'ai donc construit mon propre tracker. Il tient dans un fichier de 50 lignes.

## L'architecture : une redirection qui compte

Le principe est simple : au lieu de lier directement vers Amazon, chaque bouton « Voir le prix » du site pointe vers une URL du type :

```
https://monsite.com/go/pB0BWSFGQ49
```

Le serveur fait trois choses :
1. **Logge le clic** (produit, page d'origine, date, user-agent) dans un fichier JSONL
2. **Redirige en 302** vers l'URL Amazon avec le tag d'affiliation intact

L'affiliation n'est pas affectée : le tag reste dans l'URL finale, donc le clic est bien attribué. On garde juste une copie locale du trajet.

```js
const m = req.url.match(/^\/go\/([A-Za-z0-9_-]+)$/);
if (!m) return notFound();
const link = links[m[1]];
logClick(m[1], req);                    // 1. on logge
res.writeHead(302, { Location: link.url });  // 2. on redirige
res.end();
```

## Le mapping : généré automatiquement

Le générateur de site associe chaque URL Amazon à un identifiant court (`p` + ASIN) et écrit un fichier `go-links.json`. Le serveur le recharge toutes les 10 secondes — donc dès qu'un article est publié, ses liens sont trackés, sans intervention.

## Le rapport quotidien Telegram

Chaque soir, un script agrège les clics du jour et envoie un message Telegram :

```
📊 TopProduits — clics du jour
Total : 12 clic(s) Amazon

Top produits :
1. Delonghi Magnifica — 4
2. Nespresso Essenza — 3
…

Provenance :
• /articles/machines-a-cafe — 8
```

On sait en 5 secondes ce qui marche. C'est ce qui permet de produire plus de ce qui convertit, et d'abandonner ce qui ne convertit pas.

## Les détails techniques qui comptent

- **Anti-spam** : pas de doublon de log, les id inconnus redirigent vers une recherche générique
- **RGPD-friendly** : les logs sont locaux, pas de cookie, pas de traceur tiers
- **Cache-Control: no-store** sur les redirections pour ne pas fausser les stats
- **Service systemd** : le tracker tourne en permanence, redémarre tout seul en cas de crash

## Pourquoi c'est mieux que le dashboard Amazon

| | Dashboard Amazon | Tracker maison |
|---|---|---|
| Délai | 24-48h | Temps réel |
| Par article | Non | Oui |
| Provenance | Non | Oui |
| Rapport auto | Non | Telegram quotidien |

Le tracker fait partie du système complet que j'ai packagé : générateur de site, variantes longue traîne, tracking, pins Pinterest, publication programmée.

👉 [Affiliate Site Machine](https://xixouner3.gumroad.com/l/fsitcb)
