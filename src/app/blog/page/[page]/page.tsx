import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "~/lib/markdown";
import { POSTS_PER_PAGE } from "~/lib/blog-data";
import { BlogCard } from "~/components/blog-card";
import { CategoryPills } from "~/components/category-pills";
import { Pagination } from "~/components/pagination";
import { Reveal } from "~/components/scroll-reveal";

// Pagination en SEGMENTS D'URL (/blog/page/2) et non en query (?page=2).
// Une route qui lit `searchParams` est rendue dynamiquement par Next, qui
// impose alors `Cache-Control: private, no-cache, no-store` ; `revalidate`
// ne peut rien y changer. En segment, la route redevient statique (ISR) et
// le canonical est auto-référent — plus de doublon META-002/META-006.
export const revalidate = 300;

const BASE = "https://xixouner.com/blog";
const pageUrl = (p: number) => (p === 1 ? BASE : `${BASE}/page/${p}`);

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  // Page 1 = /blog (pas de segment), donc on ne génère qu'à partir de 2.
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: pageRaw } = await params;
  const page = Math.max(1, parseInt(pageRaw, 10) || 1);
  const title = `Blog — Conseils SEO, DevOps & Dev Web | XixounerDev`;
  const description =
    "Articles concrets sur le référencement, l'hébergement VPS, le développement web et les technos qui marchent. Par Alexis Trechot, dev freelance à Clermont-Ferrand.";

  return {
    title,
    description,
    // canonical auto-référent : /blog/page/2 se canonise lui-même (pas la home).
    alternates: { canonical: pageUrl(page) },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: pageUrl(page),
      siteName: "XixounerDev",
      title,
      description,
      images: [{ url: "https://xixouner.com/og-home.svg", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPagedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageRaw } = await params;
  const page = Math.max(1, parseInt(pageRaw, 10) || 1);

  const allPosts = await getAllPosts();
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE));
  // Page 1 appartient à /blog : on évite le doublon /blog et /blog/page/1.
  if (page === 1 || page > totalPages) notFound();

  const pagePosts = allPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <>
      <Reveal variant="fadeUp">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
          Le blog
        </h1>
        <p className="mt-3 max-w-2xl text-text-light">
          SEO, DevOps, développement web — des articles concrets, sans bullshit,
          par un développeur de terrain.
        </p>
      </Reveal>

      <Reveal variant="fadeUp" delay={0.1}>
        <CategoryPills className="mt-8" />
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {pagePosts.map((post, i) => (
          <Reveal key={post.slug} variant="fadeUp" delay={i * 0.08}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} basePath="/blog" />

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
