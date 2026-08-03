export const contactData = {
  title: "Prêt à démarrer ? Moi aussi.",
  intro:
    "Vous avez un projet. J'ai les compétences pour le réaliser. Décrivez-moi votre besoin en 2 minutes, je vous réponds par email sous 24h avec une proposition chiffrée, claire et sans engagement. Si besoin, on s'appelle pour approfondir. Pas de jargon. Pas de pression. Juste une solution qui marche.",
  steps: [
    "Vous remplissez le formulaire (2 min)",
    "Je vous réponds par email sous 24h",
    "On échange par téléphone si nécessaire",
    "Je vous envoie un devis gratuit et détaillé",
    "On se met d'accord, je commence",
  ],
  projectTypes: [
    "Création d'un site web",
    "Refonte d'un site existant",
    "Dockerisation / Hébergement / DevOps",
    "Audit, conseil ou maintenance",
    "Autre",
  ],
  budgets: [
    "< 1 500 €",
    "1 500 € – 3 000 €",
    "3 000 € – 5 000 €",
    "5 000 € – 10 000 €",
    "> 10 000 €",
    "Je ne sais pas encore",
  ],
  sources: [
    "Malt",
    "Recherche Google",
    "Recommandation",
    "LinkedIn / Réseaux sociaux",
    "Autre",
  ],
  rgpd: "Vos données sont strictement confidentielles, jamais revendues. Conformes RGPD, suppression sur simple demande.",
} as const;

export const footerData = {
  tagline: "Développement web & DevOps — Clermont-Ferrand",
  siret: "999 699 101 00013",
  email: "alexistrechot@gmail.com",
  location: "Clermont-Ferrand, France",
  malt: "https://www.malt.fr/profile/alexistrechot?overview",
  linkedin: "https://www.linkedin.com/in/alexis-trechot-7b33b1280",
  github: "https://github.com/Xixouner",
} as const;

export const navLinks = [
  { label: "Accueil", href: "/#hero" },
  { label: "Blog", href: "/blog" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Services", href: "/services" },
  { label: "Offres", href: "/offres" },
  { label: "À propos", href: "/a-propos" },
  { label: "Devis gratuit", href: "/#contact" },
] as const;
