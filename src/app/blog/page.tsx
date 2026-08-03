import type { Metadata } from "next";
import { getAllPosts } from "~/lib/markdown";
import { POSTS_PER_PAGE } from "~/lib/blog-data";
import { BlogCard } from "~/components/blog-card";
import { CategoryPills } from "~/components/category-pills";
import { Pagination } from "~/components/pagination";
import { Reveal } from "~/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Blog — Conseils SEO, DevOps & Dev Web | XixounerDev",
  description:
    "Articles concrets sur le référencement, l'hébergement VPS, le développement web et les technos qui marchent. Par Alexis Trechot, dev freelance à Clermont-Ferrand.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const allPosts = await getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  const pagePosts = allPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

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

      {/* Pagination */}
      <Pagination page={page} totalPages={totalPages} basePath="/blog" />

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
