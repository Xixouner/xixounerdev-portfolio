# XixounerDev Portfolio

## Purpose
Site portfolio multi-pages pour Alexis Trechot, développeur fullstack & DevOps freelance (Clermont-Ferrand). Génération de leads qualifiés via formulaire de demande de devis. Blog SEO (articles markdown statiques) pour l'acquisition organique.

## Tech Stack
- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS v4
- **UI Primitives**: Shadcn UI (button, custom primitives)
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion (scroll-reveal, fadeUp, scaleIn, staggered children)
- **Resend**: Resend API (log-only fallback)
- **Blog**: Markdown statique → unified (remark-parse, remark-gfm, remark-rehype, rehype-slug, rehype-stringify) + gray-matter + @tailwindcss/typography
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
├── app/                      # Next.js App Router
│   ├── api/contact/          # Route API formulaire de contact
│   ├── a-propos/             # Page à propos
│   ├── blog/                 # Blog : listing, [slug], category/[cat], feed.xml (RSS)
│   ├── offres/               # Page offres & tarifs
│   ├── realisations/         # Page portfolio détaillé
│   ├── services/             # Page services
│   ├── mentions-legales/     # Page mentions légales
│   ├── confidentialite/      # Page politique confidentialité
│   ├── layout.tsx            # Layout racine (metadata, JSON-LD, fonts)
│   ├── page.tsx              # Page d'accueil (compose les sections)
│   ├── loading.tsx           # Suspense fallback
│   ├── not-found.tsx         # Page 404
│   └── sitemap.ts            # Sitemap dynamique
├── components/               # Composants React
│   ├── header/hero/difference/portfolio/services/contact-form/footer
│   ├── blog-card.tsx / blog-article-content.tsx / category-pills.tsx / pagination.tsx
│   ├── icon.tsx              # Icônes Lucide + SVG Docker (mapping string → composant)
│   └── scroll-reveal.tsx     # Framer Motion wrappers
├── lib/                      # Utilitaires et données
│   ├── utils.ts              # cn() helper
│   ├── markdown.ts           # Pipeline Markdown → HTML (lit content/blog/)
│   ├── blog-data.ts          # Types, catégories, auteur du blog
│   ├── data*.ts              # Copywriting (home, contact, services, réalisations)
│   └── icon-sizes.ts
├── ui/primitives/            # Shadcn-style primitives
│   └── button.tsx
└── __tests__/                # Tests Vitest
content/blog/                  # Articles .md (dev-web/, devops-vps/, seo-web/)
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
- Blog sans CMS : articles `.md` dans `content/blog/`, rendus en HTML statique au build, injectés via `dangerouslySetInnerHTML`

## Gotchas
- `output: "standalone"` dans next.config.ts requis pour Docker
- Les polices Geist sont importées depuis `next/font/google` (pas besoin de les installer)
- Resend nécessite un domaine vérifié pour l'envoi en production (xixouner.com)
- Le formulaire fonctionne sans RESEND_API_KEY (log console uniquement)
- Photo pro : intégrée via next/image (photo_pro.jpg dans public/)
- Icônes : mapping string → Lucide/SVG dans icon.tsx (data.ts stocke des clés comme "target", "zap", "lock", "globe", "docker", "refresh")
- SEO : méta keywords ciblés, robots indexation, 8 blocs JSON-LD sur la home, sitemap.ts, robots.txt, llms.txt
- ⚠️ Pipeline markdown (`src/lib/markdown.ts`) : `allowDangerousHtml: true` sans rehype-sanitize — le HTML brut des `.md` est injecté tel quel. OK tant que les `.md` sont authorés localement ; ajouter `rehype-sanitize` si la source devient externe (CMS, API, génération IA)
- Titre home (78 car.) et meta description (>160 car.) trop longs — à raccourcir dans `src/app/layout.tsx`
