---
title: "Créer un site web avec l'IA en 2026 : la méthode en 20 prompts que j'utilise"
date: "2026-08-03"
category: "dev-web"
description: "J'ai testé ChatGPT, Claude et Cursor pour créer un site vitrine complet sans écrire une ligne de code. Voici la méthode en 20 prompts qui fonctionne vraiment, et les erreurs qui font perdre une journée."
image: "/blog/og-creer-site-web-ia-prompts.png"
---

## Le sujet que tout le monde me pose

Depuis que je construis des sites pour les pros de Clermont-Ferrand, la question revient sans arrêt : « Et toi, tu utilises l'IA ? »

La vraie question derrière, c'est : **est-ce que je peux créer mon site moi-même avec l'IA ?** Sans payer un dev. Sans apprendre à coder.

J'ai décidé de répondre sérieusement. Pendant deux semaines, j'ai testé ChatGPT, Claude et Cursor pour créer des sites vitrines complets, comme ceux que je livre à mes clients. Voici ce que j'ai appris — le vrai, pas le bullshit des vidéos YouTube.

## Ce que l'IA fait très bien

Soyons honnêtes : une IA seule, à qui tu dis « fais-moi un site », ça donne un résultat moyen. Parfois moche, parfois cassé, souvent générique.

Mais une IA **guidée pas à pas**, avec des prompts précis dans le bon ordre, ça change tout. Concrètement :

- Le design : les couleurs, la mise en page, le responsive — l'IA gère très bien
- Le texte : les sections, les titres, les appels à l'action — impeccable en français
- Le SEO : titre, meta description, données structurées — elle connaît les bonnes pratiques
- Le formulaire de contact : elle le branche sur Formspree gratuit en 2 minutes

J'ai été surpris par la qualité du responsive. Sur mobile, les sites générés tiennent la route, ce qui est loin d'être acquis même chez certains devs.

## Ce que l'IA fait mal (et comment l'éviter)

Les échecs que j'ai rencontrés, dans l'ordre :

1. **Elle oublie des sections** — tu demandes 7 sections, elle en livre 5. Solution : lui faire valider le plan AVANT de coder (prompt 3 de ma méthode).
2. **Elle donne du code incomplet** — « voici le CSS, le HTML est dans le message précédent ». Solution : lui demander explicitement le code complet en UN SEUL fichier à la fin.
3. **Elle utilise des images externes** qui peuvent disparaître — une photo hébergée sur un site tiers, si le site ferme, ton image casse. Solution : tout en SVG inline, rien d'externe.
4. **Elle mélange les langues** — des fois du texte reste en anglais. Solution : lui rappeler la règle « réponds en français » à chaque début de phase.

Toutes ces erreurs sont contournées par la méthode que je détaille plus bas. C'est la différence entre « je bidouille avec l'IA » et « je construis méthodiquement avec l'IA ».

## La méthode en 20 prompts (celle que j'utilise)

Après mes tests, j'ai figé une séquence de **20 prompts** qui fonctionne de bout en bout. La logique est simple : 4 phases.

**Phase 1 — Préparation (prompts 1-2)**
Présenter le projet à l'IA (activité, ville, nom), puis lui faire choisir la palette de couleurs et le style. On valide avant de coder. C'est l'étape que tout le monde saute — et c'est celle qui fait la différence entre un site générique et un site qui te ressemble.

**Phase 2 — Construction (prompts 3-10)**
Le plan d'abord (prompt 3), puis chaque section une par une : navigation, accueil, services, à propos, témoignages, contact, pied de page. Une section par prompt, dans la même conversation, pour que l'IA garde le contexte.

**Phase 3 — SEO (prompts 11-15)**
Titre optimisé, meta description, données structurées LocalBusiness (le truc qui fait afficher ta fiche en grand sur Google), favicon, optimisation vitesse.

**Phase 4 — Finalisation (prompts 16-20)**
Revue complète, correction des textes, code complet en un fichier, vérification finale, et mise en ligne pas à pas sur Netlify.

## Pourquoi ça marche (et pas « fais-moi un site »)

La différence entre les deux approches, c'est le **contrôle**. Quand tu enchaînes 20 prompts dans le bon ordre :

- Tu valides chaque étape avant de continuer (les couleurs, le plan, les textes)
- L'IA garde le contexte dans la même conversation, donc elle ne se contredit pas
- Tu finis avec UN fichier HTML complet, vérifié, prêt à mettre en ligne

À l'inverse, « fais-moi un site » en un seul prompt, c'est comme demander à un apprenti de construire une maison sans plan. Ça peut marcher pour un cabanon, pas pour une maison.

## Le résultat final

Avec cette méthode, en 1 heure, j'obtiens un site vitrine :

- Moderne et responsive (mobile + ordinateur)
- Optimisé Google (SEO + données structurées)
- Avec formulaire de contact fonctionnel
- Dans un seul fichier HTML, sans dépendance externe
- Prêt à mettre en ligne sur Netlify en 15 minutes

Et le meilleur : **je peux le refaire pour n'importe quel métier** — plombier, coiffeuse, restaurant, avocat. Il suffit de changer les réponses du prompt 1.

## Et dans Cursor, Claude Code, Codex ?

Depuis, j'ai aussi testé avec les éditeurs agentic : Cursor, Claude Code, Codex, Cline. La méthode fonctionne encore mieux : au lieu de copier-coller le code, l'IA écrit le fichier directement sur ton disque. Le secret : un fichier AGENTS.md à la racine du dossier, qui donne les règles (français, un seul fichier, pas d'emoji, responsive, SEO). L'éditeur le lit automatiquement et applique les consignes tout seul.

## La machine, packagée

J'ai tout packagé : les 20 prompts en 4 phases, le guide de mise en ligne, la checklist, et les fichiers AGENTS.md pour les éditeurs agentic. Testé sur ChatGPT, Claude, Cursor et Codex.

👉 [Pack « Crée ton site web en 1 heure » — 20 prompts IA](https://xixouner3.gumroad.com/l/ybizyi)

*Méthode utilisée et validée sur mes propres tests d'août 2026. Garantie 30 jours : si les prompts ne te servent à rien, remboursement intégral.*
---

**📖 À lire aussi :**
- [Site vitrine en un seul fichier HTML : le template que je livre](/blog/site-vitrine-un-seul-fichier-html)
- [Un site d'affiliation qui publie tout seul : la machine](/blog/site-affiliation-qui-publie-tout-seul)
- [Création site internet pas cher — à partir de 500€](/blog/creation-site-internet-pas-cher)
