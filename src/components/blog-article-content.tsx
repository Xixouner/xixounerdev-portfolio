import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "~/ui/primitives/button";
import type { BlogPost } from "~/lib/blog-data";
import { categories, author } from "~/lib/blog-data";

interface BlogArticleContentProps {
  post: BlogPost;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogArticleContent({ post }: BlogArticleContentProps) {
  const catLabel = categories.find((c) => c.slug === post.category)?.label ?? post.category;

  return (
    <article>
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-text-light transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Retour au blog
      </Link>

      {/* Category pill */}
      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
        {catLabel}
      </span>

      {/* Title */}
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={14} aria-hidden="true" />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={14} aria-hidden="true" />
          {post.readingTime} min de lecture
        </span>
        <span>Par {author.name}</span>
      </div>

      {/* Featured image */}
      <figure className="mt-8 overflow-hidden rounded-xl">
        <img
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full object-cover"
          fetchPriority="high"
        />
      </figure>

      {/* Body */}
      <div
        className="prose prose-slate mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* CTA — Contact subtle */}
      <div className="mt-16 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 p-8 text-center">
        <h2 className="text-xl font-bold text-primary">
          Un projet en tête ?
        </h2>
        <p className="mt-2 text-text-light">
          Je suis disponible pour en parler. Devis gratuit, réponse sous 24h,
          zéro engagement.
        </p>
        <Button asChild className="mt-5">
          <Link href="/#contact">
            Demander mon devis gratuit
          </Link>
        </Button>
      </div>

      {/* Author bio */}
      <div className="mt-12 flex items-center gap-4 rounded-xl border border-border bg-white p-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent">
          AT
        </div>
        <div>
          <p className="font-semibold text-primary">{author.name}</p>
          <p className="text-sm text-text-light">{author.jobTitle}</p>
        </div>
      </div>
    </article>
  );
}
