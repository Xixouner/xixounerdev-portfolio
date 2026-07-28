---
title: "Next.js vs WordPress : ce que personne ne vous dit (et pourquoi je facture 400€ un site qui coûterait 3000€)"
date: "2026-07-10"
category: "dev-web"
description: "Comparaison honnête et chiffrée entre Next.js et WordPress. Performance, sécurité, coût réel, maintenance : le match complet sans langue de bois par un dev qui utilise les deux."
image: "/blog/og-default.svg"
---

## Le mythe du site à 400€

« Un site internet professionnel pour 400€ ? Impossible. »

C'est ce que m'a dit un prospect la semaine dernière, habitué aux devis à 2 500€ de ses agences WordPress locales. Et pourtant, c'est exactement ce que je facture pour un site vitrine Next.js. Pas parce que je travaille au rabais. Mais parce que **mes outils sont plus efficaces**.

Cet article n'est pas un énième « WordPress c'est nul, Next.js c'est le futur ». Les deux ont leur place. WordPress fait tourner 43% du web pour une raison. Mais si vous êtes une TPE, un freelance, une asso qui cherche un site vitrine rapide et évolutif sans vous ruiner, laissez-moi vous expliquer pourquoi Next.js change la donne.

## Le match en un coup d'œil

| Critère | WordPress | Next.js |
|---------|-----------|--------|
| Performance (Lighthouse) | 50-80 (sans optimisation) | 95-100 par défaut |
| Sécurité | Plugins = surface d'attaque | Pas de plugins, pas de DB publique |
| Maintenance | Mises à jour, backups, conflits | Une fois déployé, ça tourne |
| Hébergement | Mutualisé 5-15€/mois ou VPS | VPS 5€/mois ou static gratuit |
| Prix site vitrine (agence) | 1 500€ - 3 000€ | 500€ - 1 500€ |
| Prix site vitrine (moi) | 1 200€ (si je devais) | 400€ - 800€ |

## Pourquoi WordPress coûte cher (et ce n'est pas la licence)

WordPress est gratuit. La GPL, tout ça. Alors pourquoi un site WordPress coûte-t-il 2 000€ en moyenne ?

### Le prix caché des plugins

Un site WordPress "simple" nécessite :
- Un plugin de cache (WP Rocket : 59€/an)
- Un plugin SEO (Yoast Premium : 99€/an)
- Un plugin de backup (UpdraftPlus Premium : 70€/an)
- Un plugin de sécurité (Wordfence : 119€/an)
- Un constructeur de page (Elementor Pro : 59€/an)
- Un thème premium : 60€

Total abonnements annuels : **~450€/an**. Juste pour que le site fonctionne correctement. Sans compter le temps de config et de maintenance.

Et si vous ne prenez pas ces plugins ? Votre site est lent, mal référencé, et vulnérable. Le « gratuit » devient vite très cher.

### La maintenance, ce poste invisible

Un site WordPress, ça se maintient :
- Mise à jour du core (tous les 1-2 mois)
- Mise à jour des plugins (toutes les semaines)
- Mise à jour du thème
- Vérification des conflits post-mise à jour
- Backups avant chaque mise à jour
- Correction quand un plugin casse le site (oui, ça arrive)

Je dirais en moyenne **2 à 4 heures par mois** pour maintenir un site WordPress correctement. À 70€/h, c'est 140-280€/mois de maintenance. Juste pour que le site ne tombe pas en panne.

### La sécurité : le talon d'Achille

WordPress est la cible n°1 des hackers. Pourquoi ? Parce que 43% des sites tournent dessus. Trouver une faille dans un plugin populaire, c'est le jackpot : des millions de sites à compromettre d'un coup.

En 2025, plus de 4 000 vulnérabilités ont été découvertes dans les plugins WordPress. Chaque plugin supplémentaire est une porte potentielle. Et un site WordPress moyen a 15 à 20 plugins actifs.

## Pourquoi Next.js est plus rapide

Next.js est un framework React. Là où WordPress génère la page à chaque requête (PHP + base de données), Next.js peut :

1. **Générer les pages au build** (Static Site Generation) : le HTML est prêt, servi directement. Aucun calcul au moment de la visite.
2. **Régénérer en arrière-plan** (ISR) : la page est mise à jour périodiquement sans perturber les visiteurs.
3. **Faire du rendu serveur** si nécessaire (SSR).

Résultat : une page Next.js bien faite charge en **moins de 0.5 seconde**. Un WordPress bien optimisé, avec cache, CDN, et les bons réglages, descend rarement sous 1.5 seconde.

Cette différence de 1 seconde, c'est :
- **7% de conversion en moins** (Amazon)
- **11% de pages vues en moins** (BBC)
- **Un classement Google dégradé** (Core Web Vitals)

## Cas concret : le site vitrine d'une association

J'ai refait le site d'une association d'aide aux seniors. L'ancien site était sous WordPress avec un thème premium et 12 plugins. Résultats :

| Métrique | WordPress (avant) | Next.js (après) |
|----------|-------------------|-----------------|
| Temps de chargement | 3.8s | 0.7s |
| Score Lighthouse | 62 | 98 |
| Score SEO | 78 | 100 |
| Coût maintenance/mois | 80€ | 5€ (hébergement) |
| Incidents/an | 3-4 (plugins, màj) | 0 |
| Coût total la 1ère année | ~3 500€ | ~800€ |

En un an, l'association a économisé 2 700€. Et le site est plus rapide, plus visible, et plus sécurisé.

## Next.js n'a pas que des avantages

Soyons honnêtes. Next.js a aussi ses inconvénients :

### La barrière technique

WordPress, une secrétaire peut ajouter un article de blog après 30 minutes de formation. Next.js, c'est du code. Pour modifier le contenu, il faut soit passer par un CMS headless (Strapi, Sanity), soit toucher au Markdown. C'est moins accessible pour les non-développeurs.

**Ma solution** : pour les clients qui veulent modifier leur contenu, je mets en place un mini-CMS avec un fichier de config simple (un formulaire Google ou Notion en base). Pour les autres, je gère les modifications moi-même — c'est inclus dans la maintenance à 5€/mois.

### L'absence d'écosystème de plugins

WordPress a 60 000 plugins. Besoin d'une boutique, d'un forum, d'un LMS ? Il y a un plugin. Next.js, vous codez. Ou vous intégrez une solution tierce (Stripe pour le paiement, Discourse pour le forum).

Mais c'est aussi une force : vous ne dépendez pas d'un plugin qui sera peut-être abandonné dans 6 mois. Votre code, c'est le vôtre.

### L'hébergement est moins « clé en main »

WordPress, vous achetez un hébergement chez o2switch, vous cliquez sur « Installer WordPress », c'est fait. Next.js, il faut un VPS ou une plateforme comme Vercel. C'est une étape supplémentaire.

**Ma solution** : je gère l'hébergement pour mes clients. 5€/mois, VPS Hetzner, Docker, Caddy, SSL auto. Le client n'a rien à faire.

## Quand choisir WordPress ?

WordPress reste pertinent dans ces cas :

- **E-commerce complexe** : WooCommerce a 10 ans de maturité. Pour une boutique avec 500 produits, des variations, des coupons, des emails transactionnels, WooCommerce est plus rapide à mettre en place qu'un Next.js + Stripe from scratch.
- **Blog pur avec beaucoup de contributeurs** : l'interface d'admin WordPress est mature. Si votre métier c'est de publier 5 articles par jour avec une équipe de rédacteurs, WordPress + un bon thème est plus productif.
- **Client qui veut absolument tout gérer lui-même** : si votre client insiste pour modifier les couleurs, les polices, les mises en page, WordPress + Elementor lui donnera ce pouvoir (au prix de la performance).

## Quand choisir Next.js ?

Next.js est imbattable pour :

- **Site vitrine** : le cas parfait. Rapide, sécurisé, pas de maintenance. La page d'accueil, les services, un formulaire de contact, et c'est tout.
- **Site à fort trafic** : un Next.js statique sur CDN encaisse des millions de visites sans broncher. Pas de base de données à interroger, pas de PHP à exécuter.
- **Application web sur mesure** : dashboard, SaaS, outil interne. Next.js + API Routes ou tRPC, c'est un environnement de dev moderne et productif.
- **SEO prioritaire** : Next.js génère un HTML parfait, score Lighthouse 100 par défaut. Pas besoin de plugin SEO, pas de bloat.
- **Budget serré** : le coût total sur 3 ans (développement + hébergement + maintenance) est 2 à 3 fois inférieur à WordPress.

## Pourquoi je facture 400€ un site qui coûterait 3 000€

Ce n'est pas de la magie. C'est de l'efficacité :

1. **Pas de plugins à configurer** : je code exactement ce qu'il faut, pas une ligne de plus. Un formulaire de contact ? 50 lignes de React Hook Form. Un slider ? 30 lignes de Framer Motion. Pas besoin d'un plugin payant + sa config + sa doc.
2. **Pas de thème à adapter** : je pars de zéro avec Tailwind CSS. Le design s'adapte au client, pas l'inverse.
3. **Déploiement automatisé** : Docker + Caddy + GitHub Actions. Je pousse sur main, c'est en ligne en 2 minutes. Pas de FTP, pas de panel d'admin, pas de « fichier corrompu pendant le transfert ».
4. **Pas de maintenance mensuelle** : pas de mises à jour de sécurité à appliquer. Le site est un HTML statique servi par Caddy. Y'a rien à hacker.
5. **Réutilisabilité** : j'ai mon boilerplate Next.js avec SEO, formulaire, design system. Chaque nouveau projet part avec 80% du boulot déjà fait. Je facture la customisation, pas la fondation.

## Ce que j'utilise chez moi

Ma stack Next.js typique pour un site client :

- **Next.js 15+ (App Router)** : SEO natif, ISR, sitemap auto.
- **Tailwind CSS v4** : design system sur mesure en 2h.
- **Shadcn UI** : composants accessibles, copiés-collés (pas de dépendance npm).
- **React Hook Form + Zod** : formulaires typés, validation côté client et serveur.
- **Framer Motion** : animations légères, scroll reveal, transitions.
- **Resend** : envoi d'emails transactionnels (formulaire de contact).
- **Vercel ou Hetzner** : déploiement gratuit sur Vercel (hobby) ou VPS 5€/mois.
- **Caddy** : reverse proxy, SSL Let's Encrypt automatique.
- **Docker** : isolation parfaite entre projets sur le même serveur.

Pas d'IP, pas de tokens, pas de endpoints internes affichés ici. Juste la stack.

## Le verdict

| Besoin | Mon conseil |
|--------|-------------|
| Site vitrine 1-5 pages | Next.js |
| Blog personnel | Next.js (ou WordPress si vous voulez l'admin UI) |
| E-commerce < 100 produits | Shopify ou Next.js + Stripe |
| E-commerce > 500 produits | WooCommerce |
| SaaS / app web | Next.js |
| Site avec beaucoup de contributeurs non-tech | WordPress |
| Landing page | Next.js |

WordPress n'est pas mort. Il reste le roi du e-commerce (via WooCommerce) et le meilleur choix pour les sites gérés par des non-développeurs. Mais pour tout le reste, Next.js fait mieux, plus vite, pour moins cher.

---

**Envie d'un site Next.js qui cartonne ?** C'est ce que je fais tous les jours. Design sur-mesure, performance max, SEO au top, hébergement pro. À partir de 400€. [Devis gratuit →](https://xixouner.com/#contact)
