import type { MetadataRoute } from "next";
import { getAllPosts } from "~/lib/markdown";
import { categories } from "~/lib/blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://xixouner.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://xixouner.com/realisations",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://xixouner.com/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://xixouner.com/offres",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://xixouner.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://xixouner.com/a-propos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://xixouner.com/mentions-legales",
      lastModified: new Date("2026-07-23"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://xixouner.com/confidentialite",
      lastModified: new Date("2026-07-23"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `https://xixouner.com/blog/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Pages de pagination du blog : indexables (canonical auto-référent), donc
  // elles doivent figurer au sitemap (SITEMAP-006).
  const POSTS_PER_PAGE = 12;
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const pagedRoutes: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, totalPages - 1) },
    (_, i) => ({
      url: `https://xixouner.com/blog/page/${i + 2}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })
  );

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://xixouner.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...pagedRoutes, ...postRoutes];
}
