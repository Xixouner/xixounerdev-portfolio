export interface Realisation {
  slug: string;
  title: string;
  client: string;
  category: "Site vitrine" | "Application web" | "SaaS" | "DevOps & Hébergement" | "Bientôt";
  image: string;
  context: string;
  problem: string;
  solution: string[];
  techs: string[];
  results: { label: string; value: string }[];
  testimonial?: { text: string; author: string; role: string };
  url?: string;
  comingSoon?: boolean;
}

export const realisations: Realisation[] = [
  {
    slug: "les-acacias",
    title: "Les Acacias — Site vitrine pour une association d'aide aux seniors",
    client: "Association Les Acacias",
    category: "Site vitrine",
    image: "/blog/og-default.svg",
    context: "L'association Les Acacias accompagne les seniors à domicile dans le Puy-de-Dôme. Leur ancien site WordPress, vieux de 8 ans, était lent, illisible sur mobile et invisible sur Google. Les familles ne les trouvaient pas.",
    problem: "Site WordPress avec 12 plugins, 3.8s de chargement, score Lighthouse 62/100. Accessibilité inexistante pour un public senior. Aucune visite organique.",
    solution: [
      "Refonte Next.js complète avec design accessible : contrastes renforcés, polices ≥ 16px, navigation simplifiée",
      "Static Site Generation : HTML pré-rendu, temps de chargement divisé par 5",
      "Hébergement VPS Hetzner avec Docker : zéro maintenance, zéro risque de hack via plugin",
      "Caddy reverse proxy avec SSL Let's Encrypt automatique, monitoring 24/7",
    ],
    techs: ["Next.js", "Tailwind CSS", "Docker", "Caddy", "Hetzner"],
    results: [
      { label: "Performance Lighthouse", value: "98/100" },
      { label: "Score SEO", value: "100/100" },
      { label: "Temps de chargement", value: "< 0.8s" },
      { label: "Incidents", value: "0 depuis lancement" },
    ],
    testimonial: {
      text: "Alexis a refait notre site en un temps record. Il est rapide, facile à utiliser pour nos bénéficiaires, et on apparaît enfin dans Google. On reçoit des demandes toutes les semaines.",
      author: "La présidente",
      role: "Les Acacias",
    },
    url: "https://lesacacias.org",
  },
  {
    slug: "auditbot",
    title: "AuditBot — SaaS d'audit de sécurité web & code par IA",
    client: "Projet personnel × clients TPE/PME",
    category: "SaaS",
    image: "/blog/og-default.svg",
    context: "Les TPE et PME n'ont ni le budget ni les compétences pour auditer la sécurité de leur site ou de leur code. Un audit pro coûte 500 à 2 000 €. AuditBot démocratise l'audit : analyse gratuite en 8 secondes avec un score de A+ à F.",
    problem: "Audits de sécurité inaccessibles aux petites structures. Solutions existantes trop chères, trop complexes, ou basées sur des IA américaines (GDPR incompatible).",
    solution: [
      "Application Next.js fullstack : authentification, dashboard, historique d'audits",
      "3 plans tarifaires : Gratuit (5 audits/mois), Mini (5 €/mois), Pro (19 €/mois)",
      "IA Mistral (souveraine européenne, RGPD-friendly) pour l'analyse de code et de configurations",
      "Intégration Stripe pour les paiements, PostgreSQL pour le stockage, Docker pour le déploiement",
      "Score A+ à F avec recommandations actionnables et export PDF",
    ],
    techs: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL", "Docker", "Mistral AI", "Caddy"],
    results: [
      { label: "Temps d'audit", value: "8 secondes" },
      { label: "Plans", value: "3 (dont gratuit)" },
      { label: "IA", value: "Souveraine UE" },
      { label: "Vulnérabilités", value: "0 connue" },
    ],
    url: "https://auditbot.xixouner.com",
  },
  {
    slug: "dashboard-xixouner",
    title: "Dashboard Xixouner — Monitoring & analytics centralisé",
    client: "Usage interne — gestion de mes 5 sites",
    category: "Application web",
    image: "/blog/og-default.svg",
    context: "Avec 5 sites à gérer (Les Acacias, AuditBot, XixounerDev, et 2 autres projets), j'avais besoin d'un tableau de bord unique pour suivre l'uptime, les déploiements CI/CD, les statistiques de visites Matomo, le tout sans ouvrir 10 onglets.",
    problem: "Pas d'outil gratuit qui centralise uptime + CI/CD + analytics en un seul écran. Les solutions existantes sont payantes, complexes, ou ne correspondent pas à mon stack (Hetzner, Docker, Caddy, Matomo).",
    solution: [
      "Serveur Node.js autonome : requête directe des bases (Matomo, MariaDB), pas d'API externe",
      "Interface SVG animée avec jauges de statut en temps réel, auto-refresh toutes les 60 secondes",
      "Suivi CI/CD : état du dernier build GitHub Actions par projet, logs accessibles en 1 clic",
      "Authentification via Caddy basic auth : simple, sécurisé, zéro code d'auth à maintenir",
      "Statistiques Matomo : visites, conversions (formulaires), pages les plus visitées, taux de rebond",
    ],
    techs: ["Node.js", "SVG", "Matomo API", "MariaDB", "Caddy", "Docker", "Hetzner"],
    results: [
      { label: "Sites monitorés", value: "5" },
      { label: "Temps de check", value: "< 5s vs 5 min" },
      { label: "CI/CD", value: "Tracké en direct" },
      { label: "Alertes", value: "Telegram si down" },
    ],
    url: undefined,
  },
  {
    slug: "crm-xixouner",
    title: "CRM Xixouner — CRM de prospection maison",
    client: "Usage interne — pipeline commercial",
    category: "Bientôt",
    image: "/blog/og-default.svg",
    context: "Pour structurer ma prospection commerciale, je développe mon propre CRM. Fini les Google Sheets éparpillés : un outil unique pour suivre mes prospects, mes relances et mes devis.",
    problem: "Les CRM du marché (HubSpot, Pipedrive) sont trop chers pour un freelance solo (> 50 €/mois). Les versions gratuites sont limitées en fonctionnalités. Aucun n'est pensé pour le cycle de vente d'un développeur freelance.",
    solution: [
      "Stack : Node.js + PostgreSQL + Docker, déployé sur le VPS existant",
      "Fiches prospects avec historique des échanges, source (Malt, Google, recommandation)",
      "Pipeline de vente visuel : Nouveau → Contacté → Devis envoyé → Signé → Perdu",
      "Système de relances automatiques : rappel si pas de réponse sous 5 jours",
      "Génération d'emails de relance assistée par IA (Mistral), personnalisable",
    ],
    techs: ["Node.js", "PostgreSQL", "Docker", "Mistral AI", "Tailwind CSS", "Caddy"],
    results: [
      { label: "Statut", value: "En développement" },
      { label: "Stack", value: "Node.js + PG" },
      { label: "Fonctionnalités", value: "5 modules" },
      { label: "Cible", value: "Freelances" },
    ],
    comingSoon: true,
  },
] as const;
