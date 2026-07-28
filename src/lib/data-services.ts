export interface ServiceDetail {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  process: { step: string; detail: string }[];
  included: string[];
  notIncluded: string[];
  techStack: { name: string; reason: string }[];
  price: string;
  priceNote: string;
}

export const servicesDetail: ServiceDetail[] = [
  {
    icon: "globe",
    title: "Création de site web",
    subtitle: "Un site professionnel qui attire des clients, pas juste un joli design.",
    description:
      "Je crée des sites web sur-mesure conçus pour convertir vos visiteurs en clients. Pas de template — chaque site est développé main pour répondre à vos objectifs. Rapide, optimisé SEO, accessible.",
    process: [
      { step: "1. Brief & cadrage (gratuit)", detail: "On échange sur votre projet, vos objectifs, votre cible. Je vous envoie un devis détaillé sous 24h." },
      { step: "2. Design & maquettage", detail: "Maquettes desktop + mobile avec votre identité. 2 allers-retours inclus pour ajuster." },
      { step: "3. Développement", detail: "Code Next.js/Tailwind — performant, responsive, SEO-ready. Preview accessible pour suivre l'avancement." },
      { step: "4. Mise en ligne", detail: "Déploiement VPS Hetzner. SSL, monitoring, backups auto. Vous n'avez rien à faire." },
      { step: "5. Suivi & formation", detail: "1 mois de suivi offert + formation 30 min. Modifications simples ou je les fais pour vous." },
    ],
    included: [
      "Design responsive sur-mesure (mobile, tablette, desktop)",
      "Développement Next.js optimisé SEO (Lighthouse > 95 garanti)",
      "Formulaire de contact fonctionnel (React Hook Form + Resend)",
      "Hébergement et déploiement (SSL, monitoring, backups)",
      "1 mois de support et corrections post-lancement",
      "Formation à la prise en main (30 min en visio)",
      "Optimisation des images (WebP, lazy loading, srcset)",
    ],
    notIncluded: [
      "Rédaction de contenu (je peux recommander des rédacteurs)",
      "Photos et visuels (je travaille avec vos assets)",
      "Hébergement long terme (à partir de 5 €/mois)",
    ],
    techStack: [
      { name: "Next.js", reason: "Performance native, SEO impeccable, rendu hybride" },
      { name: "Tailwind CSS", reason: "Design system cohérent, pas de CSS inutilisé" },
      { name: "Docker + Caddy", reason: "Déploiement reproductible, SSL automatique" },
      { name: "React Hook Form + Zod", reason: "Formulaires robustes, validation client/serveur" },
    ],
    price: "À partir de 500 € HT",
    priceNote:
      "Le prix dépend de la complexité (nombre de pages, fonctionnalités spécifiques). Devis détaillé et transparent avant toute chose.",
  },
  {
    icon: "wrench",
    title: "Outils sur-mesure & Productivité",
    subtitle: "Automatisez vos process métier avec une application web taillée pour vous.",
    description:
      "Vos équipes perdent du temps sur des Excel partagés, des ressaisies, des process manuels ? Je développe des applis web internes qui automatisent vos process, centralisent vos données et vous font gagner des heures.",
    process: [
      { step: "1. Audit & spécifications", detail: "J'analyse vos process, j'identifie les goulots d'étranglement. On définit le périmètre exact." },
      { step: "2. Prototype rapide", detail: "En 1 semaine max, un prototype fonctionnel pour valider le concept. Vous testez, vous ajustez." },
      { step: "3. Développement itératif", detail: "Sprints courts — chaque semaine une nouvelle fonctionnalité livrée et testable." },
      { step: "4. Tests & déploiement", detail: "Tests automatisés, recette utilisateur, mise en production. Tout est documenté." },
      { step: "5. Maintenance évolutive", detail: "L'outil vit avec votre entreprise. Je reste disponible pour évolutions et corrections." },
    ],
    included: [
      "Analyse de vos process et recommandations",
      "Développement sur-mesure (Next.js + Prisma + PostgreSQL)",
      "Interface d'administration intuitive",
      "Dashboard avec KPI personnalisés",
      "Authentification sécurisée (email/mot de passe ou magic link)",
      "Export des données (CSV, Excel, PDF)",
      "Déploiement et hébergement",
      "Documentation utilisateur (1 page, en français)",
    ],
    notIncluded: [
      "Refonte de vos process métier (je les digitalise)",
      "Intégration avec logiciels propriétaires sans API",
      "Développement mobile natif iOS/Android",
    ],
    techStack: [
      { name: "Next.js", reason: "Frontend moderne, API Routes intégrées" },
      { name: "Prisma", reason: "ORM TypeScript, migrations sans prise de tête" },
      { name: "PostgreSQL", reason: "Base robuste, gratuite, scalable" },
      { name: "Tailwind CSS", reason: "UI propre sans designer, thème sombre/clair" },
    ],
    price: "À partir de 1 000 € HT",
    priceNote:
      "Le prix dépend du périmètre. La plupart des outils internes coûtent entre 1 500 € et 5 000 €. ROI typique : 2 à 6 mois.",
  },
  {
    icon: "docker",
    title: "Hébergement & DevOps",
    subtitle: "Votre site ou application hébergé comme un pro, pour 5 € par mois.",
    description:
      "J'héberge vos projets sur des serveurs pros (Hetzner) avec Docker, Caddy, monitoring et backups. Zéro casse-tête technique — vous gardez le contrôle sans devenir admin sys.",
    process: [
      { step: "1. Audit de l'existant", detail: "J'analyse votre infra actuelle. On détermine la configuration adaptée." },
      { step: "2. Mise en place", detail: "VPS configuré de A à Z : sécurité SSH, Docker, Caddy, pare-feu, monitoring." },
      { step: "3. Automatisation", detail: "CI/CD GitHub Actions : push → en ligne en 3 min. Backups auto quotidiens." },
      { step: "4. Monitoring & alertes", detail: "Dashboards, alertes incident, supervision disque/RAM/CPU." },
      { step: "5. Maintenance", detail: "Je surveille, mets à jour, interviens en cas d'incident. Rapport mensuel." },
    ],
    included: [
      "Hébergement sur VPS Hetzner (Allemagne, RGPD)",
      "Docker & Docker Compose : isolation parfaite",
      "Caddy reverse proxy : SSL automatique Let's Encrypt",
      "CI/CD GitHub Actions : déploiement automatique",
      "Monitoring 24/7 : alertes incident",
      "Backups automatiques quotidiens (rotation 30j)",
      "MàJ sécurité automatiques (OS + conteneurs)",
      "Support email — réponse < 4h en semaine",
    ],
    notIncluded: [
      "Infrastructure multi-datacenter (haute dispo)",
      "SLA 99.99% (disponible sur demande)",
      "Gestion de noms de domaine (je peux guider)",
    ],
    techStack: [
      { name: "Hetzner", reason: "VPS allemand 5 €/mois, datacenters UE" },
      { name: "Docker & Compose", reason: "Isolation, reproductibilité, pas de surprise" },
      { name: "Caddy", reason: "SSL auto, HTTP/3, reverse proxy fiable" },
      { name: "GitHub Actions", reason: "CI/CD gratuit, intégration native" },
    ],
    price: "À partir de 5 € / mois",
    priceNote:
      "Varie selon le nombre de projets et ressources. Site vitrine = 5 €/mois. Plusieurs apps + DB = 15-30 €/mois.",
  },
] as const;
