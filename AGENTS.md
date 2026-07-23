# XixounerDev Portfolio

## Purpose
Site portfolio one-page pour Alexis Trechot, développeur fullstack & DevOps freelance (Clermont-Ferrand). Génération de leads qualifiés via formulaire de demande de devis.

## Tech Stack
- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS v4
- **UI Primitives**: Shadcn UI (button, custom primitives)
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion (scroll-reveal, fadeUp, scaleIn, staggered children)
- **Resend**: Resend API (log-only fallback)
- **Tests**: Vitest + @testing-library/react (81 tests unitaires)
- **Icons**: Lucide React
- **Deployment**: Docker → Hetzner VPS
- **Domain**: xixouner.com

## Getting Started

### Dev (Docker)
```bash
docker compose -f docker-compose.dev.yml up --build
# Access http://localhost:3000
```

### Dev (Local)
```bash
cp .env.example .env
npm install
npm run dev
```

### Production
```bash
docker compose up -d --build
```

## Architecture

```
src/
├── app/                  # Next.js App Router
│   ├── api/contact/      # Route API formulaire de contact
│   ├── mentions-legales/ # Page mentions légales
│   ├── confidentialite/  # Page politique confidentialité
│   ├── layout.tsx        # Layout racine (metadata, fonts)
│   ├── page.tsx          # Page d'accueil (compose les sections)
│   ├── loading.tsx       # Suspense fallback
│   └── not-found.tsx     # Page 404
├── components/           # Composants React (sections one-page)
│   ├── header.tsx
│   ├── hero.tsx
│   ├── difference.tsx
│   ├── portfolio.tsx
│   ├── services.tsx
│   ├── contact-form.tsx
│   ├── footer.tsx
│   ├── icon.tsx            # Icônes Lucide + SVG Docker (mapping string → composant)
│   └── scroll-reveal.tsx   # Framer Motion wrappers
├── lib/                  # Utilitaires et données
│   ├── utils.ts          # cn() helper
│   ├── data.ts           # Données copywriting (hero, diff, portfolio, services)
│   └── data-contact.ts   # Données contact, footer, navigation
└── ui/primitives/        # Shadcn-style primitives
    └── button.tsx
```

## Conventions
- Imports: `~/` alias → `./src/`
- Components: PascalCase, un composant par fichier
- Client components: `"use client"` en haut de fichier
- Data-driven: tout le copywriting dans `src/lib/data*.ts`
- Tailwind: classes utilitaires, pas de CSS custom (sauf globals.css pour le theme)

## Key Decisions
- Next.js App Router pour SEO natif et rendu serveur
- Tailwind v4 pour le design system (pas de config JS, tout dans CSS `@theme`)
- Shadcn UI primitives custom (Button, select, input) plutôt que dépendance complète → contrôle total
- Docker multi-stage pour build léger en production (standalone output)
- Pas de base de données : formulaire → email Resend (simplicité, pas de gestion de stockage)

## Gotchas
- `output: "standalone"` dans next.config.ts requis pour Docker
- Les polices Geist sont importées depuis `next/font/google` (pas besoin de les installer)
- Resend nécessite un domaine vérifié pour l'envoi en production (xixouner.com)
- Le formulaire fonctionne sans RESEND_API_KEY (log console uniquement)
- Photo pro : intégrée via next/image (photo_pro.jpg dans public/)
- Icônes : mapping string → Lucide/SVG dans icon.tsx (data.ts stocke des clés comme "target", "zap", "lock", "globe", "docker", "refresh")
- SEO : méta keywords ciblés, robots indexation, JSON-LD ProfessionalService, titre optimisé "Développeur Web Freelance Pas Cher & Rapide"
