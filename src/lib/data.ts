export const siteData = {
  hero: {
    badge: "Disponible — Je commence votre projet cette semaine",
    title: "Un site qui vend, pas juste un site qui existe.",
    subtitle:
      "Je suis développeur web freelance, pas cher et rapide. Je crée des sites sur-mesure qui chargent en moins d'une seconde, passent premier sur Google et tiennent la charge. Développement + Hébergement : un seul interlocuteur, zéro casse-tête.",
    ctaPrimary: "Demander mon devis gratuit",
    ctaSecondary: "Voir mes réalisations",
    reassurances: [
      "Sans engagement",
      "Réponse en moins de 24h",
      "Devis transparent",
    ],
  },

  difference: {
    title: "Pourquoi mes clients ne reviennent pas en arrière",
    hook: "Un freelance qui vous fait un joli site, vous en trouvez dix. Un freelance qui le développe, le sécurise et l'héberge comme un pro : vous venez d'en trouver un.",
    intro:
      "La vérité ? Un site mal hébergé, c'est un site invisible. Mal sécurisé, c'est une bombe à retardement. Mal optimisé, c'est un client perdu toutes les 3 secondes de chargement. Moi, je m'occupe de tout. Du code au serveur. Vous, vous vous occupez de votre business.",
    cards: [
      {
        icon: "target",
        title: "Pas de template, pas de bullshit",
        body: "Chaque projet part d'une feuille blanche. Votre charte, votre identité, vos objectifs. Je code exactement ce dont vous avez besoin — pas plus, pas moins.",
        highlight: "Un site unique qui vous ressemble.",
      },
      {
        icon: "zap",
        title: "Votre site charge en moins d'une seconde",
        body: "Google adore les sites rapides. Vos clients aussi. J'optimise code, images et serveur : le dernier site livré (Speed Elec) a été mesuré à 100/100/100/100 sur Lighthouse.",
        highlight: "Plus de trafic, plus de clients.",
      },
      {
        icon: "lock",
        title: "Sécurité pro, tranquillité totale",
        body: "SSL, pare-feu, sauvegardes automatiques, mises à jour de sécurité. Votre site est blindé. Pas de hack, pas de panne, pas de stress.",
        highlight: "Dormez tranquille, je veille.",
      },
      {
        icon: "monitor",
        title: "Hébergement qui encaisse tout",
        body: "Pas d'hébergement low-cost qui rame. Vos projets tournent sur des serveurs pros (Hetzner), configurés avec Docker et surveillés toutes les 5 minutes (HTTP + TLS).",
        highlight: "Pic de trafic ? Aucun problème.",
      },
    ],
  },

  portfolio: {
    title: "Ce que je fais, avec des vrais chiffres",
    projects: [
      {
        badge: "Étude de cas",
        name: "Les Acacias — Site et back-office pour une association",
        category: "Site vitrine",
        context:
          "L'association d'aide à la santé mentale Les Acacias (Vichy) avait besoin d'un site et d'un back-office que les bénévoles administrent sans développeur.",
        solution: [
          "Front Next.js et back-office Directus dans des conteneurs Docker dédiés",
          "PostgreSQL et Redis avec healthchecks, déploiement reproductible",
          "TLS automatique (Caddy), sauvegarde quotidienne de la base",
          "Instance isolée par client : aucune donnée partagée entre deux projets",
        ],
        results: [
          { label: "Back-office", value: "Autonome" },
          { label: "TLS", value: "Automatique" },
          { label: "Sauvegarde", value: "Quotidienne" },
          { label: "Supervision", value: "5 min" },
        ],
        url: "https://lesacacias.org",
      },
      {
        badge: "Étude de cas",
        name: "Speed Elec — Site vitrine électricité & climatisation",
        category: "Site vitrine",
        context:
          "Électricien-climatisation à Ambérieu-en-Bugey : ancien site obsolète, nouvelle activité à mettre en avant, aucune visibilité locale sur Google.",
        solution: [
          "7 pages codées sur mesure, mises en ligne le 14/08/2026",
          "SEO local (JSON-LD, sitemap) et avis Google en direct via Places API",
          "Formulaire de devis (Resend) et statistiques privées Matomo filtrées",
          "Lighthouse 100/100/100/100 relevé à la livraison",
        ],
        results: [
          { label: "Lighthouse", value: "100/100/100/100" },
          { label: "Pages livrées", value: "7" },
          { label: "Avis Google", value: "5,0/5" },
          { label: "Mise en ligne", value: "14/08/2026" },
        ],
        url: "https://speed-elec-amberieu.com",
      },
      {
        badge: "Interne",
        name: "CRM de prospection — Node.js, verrous et tests",
        category: "Application web",
        context:
          "Mon CRM maison pilote 9 258 prospects, 24 campagnes et les relances, sans dépendre d'un SaaS : verrous inter-process, écriture atomique et double écriture SQLite.",
        solution: [
          "Node.js : verrou inter-process, transaction et écriture atomique",
          "147 contrôles de non-régression, 26 tâches planifiées",
          "45 501 emails suivis, journal append-only de 70 688 événements",
          "Miroir SQLite en double écriture, comparé chaque jour aux JSON",
        ],
        results: [
          { label: "Prospects actifs", value: "9 258" },
          { label: "Emails suivis", value: "45 501" },
          { label: "Contrôles", value: "147" },
          { label: "Tâches planifiées", value: "26" },
        ],
      },
    ],
    placeholder: {
      title: "Votre projet ici",
      body: "Le prochain projet mis en avant, c'est peut-être le vôtre.",
      cta: "Parlons-en",
    },
    /** Section infrastructure — affichée sous les projets */
    infra: {
      title: "Comment c'est hébergé ?",
      items: [
        { icon: "docker", label: "Docker + Compose", detail: "Chaque projet dans son container isolé" },
        { icon: "lock", label: "Caddy", detail: "Reverse proxy HTTPS auto, Let's Encrypt, basic auth" },
        { icon: "globe", label: "Matomo", detail: "Analytics auto-hébergé, pas de Google Analytics" },
        { icon: "refresh", label: "CI/CD", detail: "GitHub Actions (tests) + déploiement scripté avec confirmation, snapshot et rollback" },
        { icon: "zap", label: "Monitoring", detail: "Sonde HTTP + TLS toutes les 5 min, alertes Telegram sur transition" },
        { icon: "lock", label: "Backups", detail: "Bases, configs et secrets chiffrés GPG — rotation 7 j + copie Backblaze B2" },
        { icon: "monitor", label: "Dashboard", detail: "status.xixouner.com : uptime, HTTPS et services" },
        { icon: "globe", label: "Resend", detail: "API email pour les formulaires de contact" },
        { icon: "monitor", label: "Hetzner VPS", detail: "8 Go RAM, 75 Go SSD" },
      ],
    },
  },
  services: {
    title: "Ce que je peux faire pour vous",
    intro:
      "Chaque projet est unique. Les prix ci-dessous sont indicatifs — seul un devis détaillé après échange permet de déterminer le tarif exact.",
    cards: [
      {
        icon: "globe",
        title: "Création de site web",
        bullets: [
          "Site vitrine, corporate ou associatif",
          "Design responsive sur-mesure",
          "SEO optimisé, performance max",
          "Formation à la prise en main",
          "1 mois de suivi offert",
        ],
        price: "À partir de 500 € HT",
      },
      {
        icon: "wrench",
        title: "Outils sur-mesure & Productivité",
        bullets: [
          "Applications web pour automatiser vos process",
          "Dashboards, CRM léger, outils internes",
          "Gain de temps immédiat pour vos équipes",
          "Solution adaptée à votre métier",
          "Interface simple, zéro bloat",
        ],
        price: "À partir de 500 € HT",
      },
      {
        icon: "docker",
        title: "Hébergement & DevOps",
        bullets: [
          "Hébergement pro dès 5 € / mois",
          "Sites vitrine, e-commerce, applicatifs",
          "Scalable selon votre trafic",
          "Dockerisation, CI/CD, monitoring",
          "Sécurité, SSL, backups automatiques",
        ],
        price: "À partir de 5 € / mois",
      },
    ],
    closing:
      "Les prix exacts dépendent de votre besoin. Un devis personnalisé et transparent vous sera envoyé après notre premier échange. Le premier appel est gratuit. Toujours.",
  },
} as const;
