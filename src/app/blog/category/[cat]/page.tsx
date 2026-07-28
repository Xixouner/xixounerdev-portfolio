import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsByCategory, getAllPosts } from "~/lib/markdown";
import {
  categories,
  POSTS_PER_PAGE,
  type BlogPostFrontmatter,
} from "~/lib/blog-data";
import { BlogCard } from "~/components/blog-card";
import { CategoryPills } from "~/components/category-pills";
import { Reveal } from "~/components/scroll-reveal";

// ── Static generation ──────────────────────────────────────────────────
export async function generateStaticParams() {
  return categories.map((c) => ({ cat: c.slug }));
}

// ── Head ────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ cat: string }>;
}): Promise<Metadata> {
  const { cat } = await params;
  const category = categories.find((c) => c.slug === cat);
  if (!category) return {};

  const url = `https://xixouner.com/blog/category/${cat}`;

  return {
    title: `${category.label} — Blog XixounerDev`,
    description: category.description,
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: "XixounerDev",
      title: `${category.label} — Blog XixounerDev`,
      description: category.description,
    },
    twitter: {
      card: "summary",
      title: category.label,
      description: category.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

// ── Page ────────────────────────────────────────────────────────────────
export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  const category = categories.find((c) => c.slug === cat);
  if (!category) notFound();

  const posts = await getPostsByCategory(cat as BlogPostFrontmatter["category"]);
  const pagePosts = posts.slice(0, POSTS_PER_PAGE);

  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://xixouner.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://xixouner.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: category.label,
              },
            ],
          }),
        }}
      />

      <Reveal variant="fadeUp">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
          {category.label}
        </h1>
        <p className="mt-3 max-w-2xl text-text-light">
          {category.description}
        </p>
      </Reveal>

      <Reveal variant="fadeUp" delay={0.1}>
        <CategoryPills active={cat as BlogPostFrontmatter["category"]} className="mt-8" />
      </Reveal>

      {pagePosts.length === 0 ? (
        <p className="mt-16 text-center text-text-muted">
          Aucun article dans cette catégorie pour le moment.
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
    </>
  );
}
