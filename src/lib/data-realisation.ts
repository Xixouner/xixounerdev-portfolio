export interface Realisation {
  slug: string;
  title: string;
  client: string;
  category: "Site vitrine" | "Application web" | "DevOps & Hébergement";
  image: string;
  context: string;
  problem: string;
  solution: string[];
  techs: string[];
  results: { label: string; value: string }[];
  testimonial?: { text: string; author: string; role: string };
  url?: string;
}

export const realisations: Realisation[] = [
  {
    slug: "les-acacias",
    title: "Les Acacias — Site vitrine pour une association d'aide aux seniors",
    client: "Association Les Acacias",
    category: "Site vitrine",
    image: "/blog/og-default.svg",
    context:
      "L'association Les Acacias accompagne les seniors à domicile dans le Puy-de-Dôme. Leur ancien site WordPress était devenu illisible, lent, et invisible sur Google.",
    problem:
      "Site WordPress vieillissant avec 12 plugins, temps de chargement de 3.8s, score Lighthouse de 62. L'association perdait des familles chaque mois.",
    solution: [
      "Refonte complète avec design accessible (contraste renforcé, polices ≥ 16px)",
      "Développement Next.js avec Static Site Generation : temps de chargement divisé par 5",
      "Hébergement VPS Hetzner avec Docker : zéro risque de hack via plugin",
      "Caddy en reverse proxy avec SSL automatique Let's Encrypt",
      "Monitoring 24/7 via Healthchecks.io",
    ],
    techs: ["Next.js", "Tailwind CSS", "Docker", "Caddy", "Hetzner"],
    results: [
      { label: "Performance Lighthouse", value: "98/100" },
      { label: "Score SEO", value: "100/100" },
      { label: "Temps de chargement", value: "< 0.8s" },
      { label: "Incidents depuis mise en ligne", value: "0" },
    ],
    testimonial: {
      text: "Alexis a refait notre site en un temps record. Il est rapide, facile à utiliser pour nos bénéficiaires, et on apparaît enfin dans Google.",
      author: "La présidente",
      role: "Les Acacias",
    },
    url: "https://lesacacias.org",
  },
  {
    slug: "migration-devops-saas",
    title: "Migration DevOps complète pour une startup SaaS",
    client: "Startup SaaS B2B (secteur RH)",
    category: "DevOps & Hébergement",
    image: "/blog/og-default.svg",
    context:
      "Une startup SaaS en croissance : app qui plantait aux pics d'utilisation, déploiements de 45 minutes, infra à 350 €/mois pour 200 utilisateurs.",
    problem:
      "Tout tournait en processus natifs sur un VPS unique (Node.js, PostgreSQL, Redis). Pas d'isolation, pas de rollback. Un crash API faisait tomber la base.",
    solution: [
      "Dockerisation complète : 4 conteneurs isolés via Docker Compose",
      "CI/CD GitHub Actions : build, test, déploiement auto en 3 minutes",
      "Migration VPS Hetzner CX32 : coût divisé par 5 (70 €/mois au lieu de 350 €)",
      "Caddy reverse proxy avec load balancing et health checks",
      "Backup PostgreSQL quotidien, rotation 30 jours, chiffré",
    ],
    techs: ["Docker", "Docker Compose", "GitHub Actions", "Caddy", "PostgreSQL", "Redis", "Hetzner"],
    results: [
      { label: "Temps de déploiement", value: "< 3 min" },
      { label: "Disponibilité (uptime)", value: "99.97%" },
      { label: "Coût mensuel", value: "70 €" },
      { label: "Économie annuelle", value: "3 360 €" },
    ],
    testimonial: {
      text: "Avant, chaque déploiement me stressait. Maintenant je push sur main et c'est en ligne. Alexis a sauvé nos nuits.",
      author: "Le CTO",
      role: "Startup SaaS RH",
    },
  },
  {
    slug: "outil-interne-productivite",
    title: "Outil interne de gestion pour une PME de 30 employés",
    client: "PME industrielle (secteur métallurgie)",
    category: "Application web",
    image: "/blog/og-default.svg",
    context:
      "Une PME gérait devis, plannings et production via Excel + Google Sheets. Erreurs, conflits de version, 6h/semaine perdues par le responsable.",
    problem:
      "3 fichiers Excel pour les devis, 2 Google Sheets pour les plannings, erreurs de ressaisie constantes. Aucun historique consolidé.",
    solution: [
      "Application web sur mesure : devis, planning, suivi de chantier en temps réel",
      "Interface intuitive pour non-techniciens (formation 30 min)",
      "Base PostgreSQL unique : plus de conflits, plus de doubles saisies",
      "Dashboard avec KPI : devis en cours, plannings, retards, CA prévisionnel",
      "Déploiement sur VPS existant, accessible depuis tous les postes",
    ],
    techs: ["Next.js", "Prisma", "PostgreSQL", "Docker", "Tailwind CSS", "React Hook Form"],
    results: [
      { label: "Temps gagné / semaine", value: "6h" },
      { label: "Gain annuel estimé", value: "~12 500 €" },
      { label: "Erreurs de saisie", value: "→ 0" },
      { label: "Délai de mise en place", value: "3 semaines" },
    ],
    testimonial: {
      text: "En 3 semaines, Alexis nous a livré exactement ce dont on avait besoin. Notre responsable a gagné un jour par semaine.",
      author: "Le dirigeant",
      role: "PME métallurgie",
    },
  },
  {
    slug: "landing-page-conversion",
    title: "Landing page haute conversion pour un lancement de produit",
    client: "Entrepreneur e-commerce (secteur bien-être)",
    category: "Site vitrine",
    image: "/blog/og-default.svg",
    context:
      "Un entrepreneur lançait un complément alimentaire. Son ancienne page Wix était lente (4.2s), buggait sur mobile, taux de conversion < 1%.",
    problem:
      "Page Wix lente, formulaire buggé sur mobile, aucun tracking. Taux de conversion estimé sous 1%.",
    solution: [
      "Landing page Next.js ultra-rapide (Lighthouse 99) avec design centré conversion",
      "Formulaire React Hook Form + Zod : validation instantanée, zéro bug mobile",
      "Intégration Stripe pour précommandes sécurisées",
      "Tracking Matomo : taux de conversion, temps passé, rebond",
      "A/B testing basique sur les CTA pour optimiser le taux de clic",
    ],
    techs: ["Next.js", "Tailwind CSS", "Stripe", "React Hook Form", "Zod", "Matomo"],
    results: [
      { label: "Taux de conversion", value: "4.8%" },
      { label: "Temps de chargement", value: "< 0.6s" },
      { label: "Précommandes (30j)", value: "340" },
      { label: "Score Lighthouse", value: "99/100" },
    ],
    testimonial: {
      text: "340 précommandes en un mois — bien au-delà de mes objectifs. Le site est magnifique et charge instantanément.",
      author: "Le fondateur",
      role: "E-commerce bien-être",
    },
  },
] as const;
