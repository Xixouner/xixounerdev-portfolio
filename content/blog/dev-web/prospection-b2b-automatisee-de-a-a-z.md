---
title: "Comment j'automatise ma prospection B2B de A à Z : scraper, emails, relances"
date: "2026-08-03"
category: "dev-web"
description: "Le pipeline complet que j'utilise pour trouver des prospects, récupérer leurs emails, envoyer des messages personnalisés et relancer automatiquement. 14 prospects contactés en une matinée, zéro saisie manuelle."
image: "/blog/og-prospection-b2b-automatisee-de-a-a-z.png"
---

## Le problème : la prospection manuelle est une hémorragie

Chercher des prospects, c'est le travail le plus répétitif qui existe :

1. Ouvrir Google Maps, chercher « plombier Lyon »
2. Noter le nom, le téléphone, le site web de chacun
3. Chercher leur email sur leur site
4. Rédiger un message personnalisé
5. Envoyer, attendre, relancer dans 7 jours ceux qui n'ont pas répondu

Pour 50 prospects, c'est une journée entière. Et c'est tellement pénible qu'on finit par le repousser — donc par ne plus prospecter du tout.

J'ai automatisé chaque étape. Voici le pipeline exact que j'utilise.

## Étape 1 — Scraper Google Maps (la collecte)

Une commande : `node scraper.mjs "restaurant" "Clermont-Ferrand" --max=50`

Le script fait une **double passe** : il collecte d'abord tous les résultats de la recherche, puis visite chaque fiche pour extraire le site web, Facebook, Instagram, le téléphone et l'adresse. Résultat : un CSV propre, prêt à l'emploi.

En une matinée, j'ai collecté 79 restaurants, 55 avec leur site web.

## Étape 2 — Enrichir les emails

Tous les prospects n'ont pas leur email sur Google Maps. Le script `email-finder` va les chercher ailleurs : PagesJaunes, Societe.com, et les pages contact des sites. En une passe, j'ai récupéré les emails manquants de 5 prospects sur 15 testés — les autres sont joignables par téléphone.

## Étape 3 — Messages personnalisés (pas du spam)

Le générateur de messages reprend chaque prospect et produit un email avec **son nom, son métier, sa ville** — et un angle concret. Pas de « cher professionnel » générique : on parle de SON activité.

Le tout est contrôlé en **dry-run** par défaut : on vérifie ce qui va partir avant d'envoyer quoi que ce soit.

## Étape 4 — Envoi et relances automatiques

L'envoi passe par Resend (fiable, délivrabilité propre). Et surtout : les **relances sont automatiques**. À J+7, les prospects sans réponse reçoivent une relance courte et polie, avec une porte de sortie claire (« répondez simplement non et je ne vous écrirai plus »). Une seule relance, jamais de harcèlement.

## Le CRM intégré

Chaque prospect est suivi dans un CRM local : statut (contacté, intéressé, refusé), date d'envoi, réponse. Export CSV à tout moment. Zéro prospect oublié, zéro doublon.

## Le résultat concret

- **14 prospects contactés en une matinée**, chacun avec un message personnalisé
- **5 emails retrouvés automatiquement** sur des prospects qui n'en avaient pas
- **Zéro saisie manuelle** entre le scraping et l'envoi
- Les relances J+7 se déclenchent toutes seules, avec suivi dans le CRM

## La machine complète

J'ai package ce pipeline (scraper Google Maps, enrichisseur d'emails, générateur de messages, envoi Resend, relances auto, CRM) dans un produit autonome avec guide de déploiement et documentation pour IA.

👉 [Prospecting Machine](https://xixouner3.gumroad.com/l/igqbaw)

*Pipeline réel utilisé pour la campagne du 03/08/2026. À utiliser dans le respect du RGPD (données professionnelles publiques, désinscription possible).*
---

**📖 À lire aussi :**
- [De 0 à son premier clic Amazon : combien de temps ça prend ?](/blog/premier-clic-amazon-combien-de-temps)
- [Un site d'affiliation qui publie tout seul : la machine](/blog/site-affiliation-qui-publie-tout-seul)
- [Création site internet pas cher — à partir de 500€](/blog/creation-site-internet-pas-cher)
