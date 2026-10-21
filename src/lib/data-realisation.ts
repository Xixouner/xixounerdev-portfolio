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
    slug: "speed-elec-amberieu",
    title: "Speed Elec — Site vitrine électricité & climatisation",
    client: "Speed Elec Ambérieu",
    category: "Site vitrine",
    image: "/blog/og-default.svg",
    context:
      "Électricien-climatisation à Ambérieu-en-Bugey, premier client signé : ancien site WordPress obsolète, nouvelle activité de climatisation à mettre en avant et aucune visibilité locale sur Google.",
    problem:
      "Site daté et lent, deux activités mal présentées, formulaire de contact peu fiable. Objectif : refonte complète, crédibilité locale et demandes de devis entrantes.",
    solution: [
      "7 pages codées sur mesure (HTML/CSS/JS), mises en ligne le 14/08/2026",
      "SEO local : données structurées JSON-LD, sitemap, pages par activité et communes desservies",
      "Avis Google 5,0/5 affichés en direct via Places API, avec cache serveur et plafond de quota",
      "Formulaire de devis relié à Resend, statistiques privées Matomo filtrées des robots",
      "TLS et en-têtes de sécurité (Caddy), batterie de tests avant chaque passage en production",
    ],
    techs: ["HTML/CSS/JS", "Caddy", "Matomo", "Resend", "Google Places API", "Hetzner"],
    results: [
      { label: "Lighthouse", value: "100/100/100/100" },
      { label: "Pages livrées", value: "7" },
      { label: "Avis Google", value: "5,0/5 — 253 avis" },
      { label: "Mise en ligne", value: "14/08/2026" },
    ],
    url: "https://speed-elec-amberieu.com",
  },
  {
    slug: "les-acacias",
    title: "Les Acacias — Site et back-office d'une association",
    client: "Association Les Acacias (Vichy)",
    category: "Site vitrine",
    image: "/blog/og-default.svg",
    context:
      "Association d'aide à la santé mentale à Vichy : elle avait besoin d'un site pour présenter ses activités et, surtout, d'un back-office que les bénévoles peuvent administrer sans développeur.",
    problem:
      "Contenu à rendre autonome (pages, actualités), hébergement et sauvegardes à sécuriser, le tout sans dépendance à un développeur pour chaque modification de texte.",
    solution: [
      "Front Next.js et back-office Directus dans des conteneurs Docker dédiés",
      "PostgreSQL et Redis avec healthchecks, déploiement reproductible en une commande",
      "TLS automatique (Caddy), sauvegarde quotidienne de la base et des fichiers",
      "Instance isolée par client : aucune donnée partagée entre deux projets",
      "Prise en main par les bénévoles : ajout de pages, modification de textes, publication",
    ],
    techs: ["Next.js", "Directus", "PostgreSQL", "Redis", "Docker Compose", "Caddy"],
    results: [
      { label: "Back-office", value: "Autonome" },
      { label: "TLS", value: "Automatique" },
      { label: "Sauvegarde", value: "Quotidienne" },
      { label: "Supervision", value: "Toutes les 5 min" },
    ],
    url: "https://lesacacias.org",
  },
  {
    slug: "crm-xixouner",
    title: "CRM de prospection — Node.js, verrous et tests",
    client: "Usage interne — pipeline commercial",
    category: "Application web",
    image: "/blog/og-default.svg",
    context:
      "Pour piloter ma prospection B2B sans dépendre d'un SaaS, j'ai construit mon propre CRM : base de prospects, campagnes par métier et par ville, relances, registre d'emails et journal d'événements.",
    problem:
      "Les écritures concurrentes (serveur + crons + webhooks) corrompaient les fichiers : 120 317 entrées pour 5 973 ids réels. Il fallait un verrou inter-process, des écritures atomiques et une suite de non-régression.",
    solution: [
      "Node.js : verrou inter-process (mkdir atomique + backoff), transaction read-modify-write, écriture atomique par rename",
      "147 contrôles de non-régression, 26 tâches planifiées, garde-fou d'écriture prod explicite",
      "45 501 emails suivis et 70 688 événements dans un journal append-only",
      "Double écriture vers SQLite et comparaison quotidienne JSON ↔ SQLite (shadow, sans impact prod)",
    ],
    techs: ["Node.js", "SQLite", "Resend", "Matomo", "Caddy", "systemd"],
    results: [
      { label: "Prospects actifs", value: "9 258" },
      { label: "Emails suivis", value: "45 501" },
      { label: "Contrôles", value: "147" },
      { label: "Tâches planifiées", value: "26" },
    ],
  },
  {
    slug: "socle-infra",
    title: "Socle d'hébergement & supervision",
    client: "Usage interne — 9 domaines en production",
    category: "DevOps & Hébergement",
    image: "/blog/og-default.svg",
    context:
      "Tous mes projets (sites clients, outils internes, stats, monitoring) tournent sur un VPS Hetzner, avec un objectif : pouvoir livrer et exploiter sans y passer mes nuits.",
    problem:
      "Sans socle commun : déploiements manuels, certificats à renouveler, sauvegardes oubliées, aucun moyen de savoir qu'un site est tombé.",
    solution: [
      "Docker Compose par projet, Caddy en reverse proxy avec TLS et en-têtes de sécurité",
      "Déploiement scripté : source → dev → tests → confirmation → prod, snapshot et rollback disponibles",
      "Surveillance HTTP + TLS toutes les 5 minutes, alertes Telegram sur transition",
      "Sauvegardes quotidiennes chiffrées (GPG) vers Backblaze B2, rotation locale 7 jours",
    ],
    techs: ["Docker", "Caddy", "Hetzner", "Backblaze B2", "GitHub Actions", "Node.js"],
    results: [
      { label: "Domaines en prod", value: "9" },
      { label: "Supervision", value: "5 min" },
      { label: "Sauvegarde", value: "Chiffrée + B2" },
      { label: "Déploiement", value: "Rollback prêt" },
    ],
  },
] as const;
