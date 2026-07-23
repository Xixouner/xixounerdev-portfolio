# XixounerDev — Portfolio

Site one-page portfolio d'Alexis Trechot, développeur fullstack & DevOps freelance (Clermont-Ferrand).

## Stack

- **Framework** : Next.js 15 (App Router, React 19)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **Formulaires** : React Hook Form + Zod
- **Email** : Resend (fallback log-only si pas de clé API)
- **Icônes** : Lucide React
- **Tests** : Vitest + @testing-library/react (81 tests)

## Développement local

```bash
cp .env.example .env
npm install
npm run dev
# → http://localhost:3000
```

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm start` | Serveur production (après build) |
| `npm test` | Tests unitaires (vitest) |
| `npm run lint` | Lint (ESLint + TypeScript) |

## Déploiement — Hetzner VPS

### Prérequis serveur

- Docker 29+
- Docker Compose
- Ubuntu 26.04 (ou équivalent)

### Setup initial (première fois)

```bash
# 1. Cloner le repo et lancer
git clone git@github.com:Xixouner/xixounerdev-portfolio.git
cd xixounerdev-portfolio
./setup.sh

# 2. Éditer .env avec la vraie clé Resend (optionnel)
nano .env
docker compose up -d
```

### Mise à jour

```bash
cd xixounerdev-portfolio
./deploy.sh
```

### Logs & diagnostic

```bash
docker compose logs --tail 50
docker compose ps
```

## Variables d'environnement

| Variable | Obligatoire | Description |
|---|---|---|
| `RESEND_API_KEY` | Non | Clé API Resend pour l'envoi d'emails |
| `CONTACT_EMAIL` | Non | Email de destination des devis |

Sans `RESEND_API_KEY`, les demandes de devis sont loggées en console uniquement (mode développement).

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── api/contact/        # Route API formulaire contact
│   ├── mentions-legales/   # Mentions légales
│   ├── confidentialite/    # Politique de confidentialité
│   ├── layout.tsx          # Layout racine (metadata, fonts)
│   ├── page.tsx            # Page d'accueil
│   ├── loading.tsx         # Suspense fallback
│   └── not-found.tsx       # 404
├── components/             # Composants React
│   ├── header.tsx          # Navigation fixe
│   ├── hero.tsx            # Section héro (photo pro + CTAs)
│   ├── difference.tsx      # Pourquoi travailler ensemble
│   ├── portfolio.tsx       # Étude de cas lesacacias.org
│   ├── services.tsx        # Services & tarifs
│   ├── contact-form.tsx    # Formulaire de devis
│   ├── footer.tsx          # Footer (liens, mentions)
│   ├── icon.tsx            # Mapping icônes Lucide + SVG Docker
│   └── scroll-reveal.tsx   # Wrappers Framer Motion
├── lib/
│   ├── data.ts             # Copywriting du site
│   ├── data-contact.ts     # Données contact, footer, navigation
│   └── utils.ts            # cn() helper
├── ui/primitives/
│   └── button.tsx          # Bouton Shadcn-style
└── __tests__/              # Tests unitaires (81 tests)
```

## Licence

Propriétaire — Tous droits réservés.
