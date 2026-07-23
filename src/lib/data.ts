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
        body: "Google adore les sites rapides. Vos clients aussi. J'optimise tout : code, images, serveur. Score Lighthouse > 95, SEO au top.",
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
        body: "Pas d'hébergement low-cost qui rame. Vos projets tournent sur des serveurs pros (Hetzner), configurés avec Docker, monitorés 24/7.",
        highlight: "Pic de trafic ? Aucun problème.",
      },
    ],
  },

  portfolio: {
    title: "Ce que je fais, avec des vrais chiffres",
    project: {
      badge: "Étude de cas",
      name: "Les Acacias — Site vitrine pour une association d'aide aux seniors",
      context:
        "Un site vieillissant, illisible, invisible sur Google. L'association perdait des familles qui ne la trouvaient tout simplement pas en ligne.",
      solution: [
        "Refonte complète avec design sur-mesure et accessible",
        "Développement Next.js optimisé pour la performance",
        "Hébergement VPS Hetzner avec Docker et sauvegardes",
        "Certificat SSL automatique et monitoring 24/7",
      ],
      results: [
        { label: "Performance Lighthouse", value: "98/100" },
        { label: "Score SEO", value: "100/100" },
        { label: "Incidents depuis mise en ligne", value: "0" },
        { label: "Responsive", value: "100%" },
        { label: "Temps de chargement", value: "< 0.8s" },
      ],
      url: "https://lesacacias.org",
    },
    placeholder: {
      title: "Votre projet ici",
      body: "Le prochain projet mis en avant, c'est peut-être le vôtre.",
      cta: "Parlons-en",
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
