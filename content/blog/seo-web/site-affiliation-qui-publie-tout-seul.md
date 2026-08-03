---
title: "J'ai créé un site d'affiliation qui publie 5 articles par jour sans écrire une ligne — voici la machine"
date: "2026-08-03"
category: "seo-web"
description: "Comment j'ai automatisé un site d'affiliation Amazon de A à Z : générateur d'articles SEO, variantes longue traîne automatiques, tracking de clics, pins Pinterest. Premier clic Amazon en 3 jours. La machine complète, expliquée avec les vrais chiffres."
image: "/blog/og-site-affiliation-qui-publie-tout-seul.png"
---

## Le problème

Les sites d'affiliation ont un problème de fond : **le contenu**. Pour ranker sur Google, il faut des dizaines d'articles. Les rédiger à la main, c'est des semaines de travail. Les sous-traiter, c'est 30 à 80€ par article. Résultat : la plupart des gens abandonnent avant d'avoir publié 10 articles — et donc avant d'avoir le moindre trafic.

J'ai pris le problème à l'envers : **et si le site se remplissait tout seul ?**

## Ce que j'ai construit

Un système complet qui transforme une simple liste de produits en site d'affiliation complet :

**1. Le générateur de site** — je décris un produit dans un fichier Markdown (nom, prix, points forts, limites, lien Amazon), et le générateur produit une page HTML complète : design responsive, SEO (meta, Open Graph, JSON-LD, sitemap), maillage interne, FAQ. Cinq gabarits différents : top 5, comparatif, guide, accessoires, page.

**2. Les variantes longue traîne** — chaque article est automatiquement décliné en versions « petit budget », « haut de gamme » et « débutant », avec les produits filtrés par prix. 3 articles de base deviennent 9 pages ciblées. Et tout est **étalé dans le temps** (5 publications/jour) pour ne pas déclencher les filtres spam de Google.

**3. Le tracker de clics** — chaque bouton « Voir le prix » passe par une redirection `/go/…` qui logge le clic avant d'envoyer l'acheteur sur Amazon avec mon tag d'affiliation. Je reçois un rapport Telegram quotidien : quels produits sont cliqués, d'où viennent les visiteurs.

**4. Les pins Pinterest automatiques** — chaque article génère une image 1000×1500 et l'épingle automatiquement via l'API Pinterest. Du trafic visuel sans effort.

## Les vrais chiffres (pas des promesses)

- **J+3** après la mise en ligne : **premier clic Amazon** et première commission (même symbolique — c'est la preuve que le modèle fonctionne)
- **188 variantes longue traîne** générées en quelques minutes, publiées automatiquement sur ~6 semaines
- **Zéro heure de rédaction** : j'écris les listes de produits, la machine fait le reste
- **102 articles** programmés au total, qui sortent tout seuls

## Ce que j'aurais aimé savoir avant

1. **Le SEO d'un site neuf prend du temps.** En 3 jours, j'étais en position ~75 sur Google en moyenne. C'est normal — Google a besoin de semaines pour faire confiance à un nouveau domaine. La machine sert à **préparer le terrain** : quand l'indexation démarre, il y a déjà 50+ articles en ligne.

2. **Le contenu reste votre valeur ajoutée.** La machine génère la structure, le SEO et l'automatisation — mais la sélection des produits et la qualité des descriptions, c'est vous. C'est ça qui fait la différence entre un site utile et un site poubelle.

3. **Le tracking change tout.** Sans savoir quels articles cliquent, vous avancez à l'aveugle. Avec le rapport quotidien, je vois en temps réel ce qui fonctionne — et j'oriente la production vers ce qui convertit.

## La machine complète

J'ai package le système entier dans un produit autonome : générateur de site, variantes longue traîne, tracker de clics, pins Pinterest, publication programmée, et un guide de personnalisation complet (nom, couleurs, logo, catégories — sans coder).

👉 **Affiliate Site Machine** — avec une démo live du site généré, un auto-test d'installation, et 30 jours de garantie.

[Voir le produit →](https://xixouner3.gumroad.com/l/fsitcb)

## Et pour la prospection ?

Pendant que le site se remplissait tout seul, j'ai appliqué la même logique à la prospection : scraper Google Maps, enrichir les emails, envoyer des messages personnalisés, relancer automatiquement. Le résultat est dans un deuxième produit — mais ça, c'est une autre histoire.

*Article écrit à partir de la vraie expérience de mise en production du 03/08/2026 — chiffres réels, pas des projections.*
---

**📖 À lire aussi :**
- [De 0 à son premier clic Amazon : combien de temps ça prend ?](/blog/premier-clic-amazon-combien-de-temps)
- [Comment j'automatise ma prospection B2B de A à Z](/blog/prospection-b2b-automatisee-de-a-a-z)
- [J'ai construit mon propre tracker de clics d'affiliation](/blog/tracker-clics-affiliation-maison)
