import type { Metadata } from "next";
import { getAllPosts } from "~/lib/markdown";
import { POSTS_PER_PAGE } from "~/lib/blog-data";
import { BlogCard } from "~/components/blog-card";
import { CategoryPills } from "~/components/category-pills";
import { Pagination } from "~/components/pagination";
import { Reveal } from "~/components/scroll-reveal";

// Page 1 du blog — route STATIQUE (aucun `searchParams` lu ici).
// La pagination vit dans /blog/page/[page] : une route qui lit `searchParams`
// est rendue dynamiquement par Next, qui impose alors
// `Cache-Control: private, no-cache, no-store` (PERF-004) ; `revalidate` ne
// peut rien y changer. D'où la pagination en segments d'URL.
export const revalidate = 300;

const BASE = "https://xixouner.com/blog";

export const metadata: Metadata = {
  title: "Blog — Conseils SEO, DevOps & Dev Web | XixounerDev",
  description:
    "Articles concrets sur le référencement, l'hébergement VPS et le développement web. Par Alexis Trechot, dev freelance à Clermont-Ferrand.",
  // canonical auto-référent (retiré du layout.tsx qui le forçait sur la home).
  alternates: { canonical: BASE },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: BASE,
    siteName: "XixounerDev",
    title: "Blog — Conseils SEO, DevOps & Dev Web | XixounerDev",
    description:
      "Articles concrets sur le référencement, l'hébergement VPS, le développement web et les technos qui marchent.",
    images: [{ url: "https://xixouner.com/og-home.svg", width: 1200, height: 630 }],
  },
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const pagePosts = allPosts.slice(0, POSTS_PER_PAGE);

  return (
    <>
      {/* Header */}
      <Reveal variant="fadeUp">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
          Le blog
        </h1>
        <p className="mt-3 max-w-2xl text-text-light">
          SEO, DevOps, développement web — des articles concrets, sans bullshit,
          par un développeur de terrain.
        </p>
      </Reveal>

      {/* Filters */}
      <Reveal variant="fadeUp" delay={0.1}>
        <CategoryPills className="mt-8" />
      </Reveal>

      {/* Grid */}
      {pagePosts.length === 0 ? (
        <p className="mt-16 text-center text-text-muted">
          Aucun article pour le moment. Revenez bientôt !
        </p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pagePosts.map((post, i) => (
            <Reveal key={post.slug} variant="fadeUp" delay={i * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      )}

      {/* Pagination — en segments d'URL (/blog/page/2) */}
      <Pagination page={1} totalPages={totalPages} basePath="/blog" mode="segment" />

      {/* SEO content (cache-cache SEO-friendly) */}
      <section className="mt-20 border-t border-border pt-10">
        <h2 className="text-xl font-bold text-primary">
          Blog développement web freelance
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-text-muted">
          Retrouvez ici mes retours d&apos;expérience et conseils pratiques
          sur le développement web, le référencement naturel (SEO),
          l&apos;hébergement VPS avec Docker, et les technologies modernes
          comme Next.js. Chaque article est écrit pour être directement
          applicable — que vous soyez client, entrepreneur ou développeur.
        </p>
      </section>
    </>
  );
}
