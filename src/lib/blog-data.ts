export interface BlogPostFrontmatter {
  title: string;
  date: string; // ISO 8601 — "2026-07-28"
  category: "seo-web" | "devops-vps" | "dev-web";
  description: string;
  image: string; // chemin relatif depuis public/ — ex: "/blog/mon-image.webp"
  /** Optionnel — surcharge le temps de lecture calculé automatiquement */
  readingTime?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory["slug"];
  description: string;
  image: string;
  readingTime: number; // en minutes
  content: string; // HTML brut
  rawContent: string; // Markdown source
}

export interface BlogCategory {
  slug: BlogPostFrontmatter["category"];
  label: string;
  description: string;
}

export const categories: BlogCategory[] = [
  {
    slug: "seo-web",
    label: "SEO & Web",
    description:
      "Référencement, performance et visibilité en ligne — sans bullshit marketing.",
  },
  {
    slug: "devops-vps",
    label: "DevOps / VPS",
    description:
      "Hébergement pro, Docker, monitoring : tout ce qu'il faut pour dormir tranquille.",
  },
  {
    slug: "dev-web",
    label: "Dev Web",
    description:
      "Technos, frameworks, comparatifs et retours d'expérience d'un dev de terrain.",
  },
] as const;

/** Mapping catégorie → dossier dans content/blog/ */
export const categoryDirMap: Record<BlogPostFrontmatter["category"], string> = {
  "seo-web": "seo-web",
  "devops-vps": "devops-vps",
  "dev-web": "dev-web",
};

export const POSTS_PER_PAGE = 6;

export const author = {
  name: "Alexis Trechot",
  url: "https://xixouner.com",
  jobTitle: "Développeur Web Freelance Fullstack & DevOps",
  sameAs: [
    "https://www.linkedin.com/in/alexis-trechot-7b33b1280",
    "https://www.malt.fr/profile/alexistrechot?overview",
    "https://github.com/Xixouner",
  ],
} as const;
