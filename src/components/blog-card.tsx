import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "~/lib/blog-data";
import { categories } from "~/lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  const catLabel = categories.find((c) => c.slug === post.category)?.label ?? post.category;

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg">
      <Link
        href={`/blog/${post.slug}`}
        className="block aspect-[1200/630] w-full overflow-hidden bg-primary-dark/5"
      >
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          width={600}
          height={315}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-5">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
          {catLabel}
        </span>
        <h2 className="mt-3 text-lg font-bold leading-snug text-primary">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-accent"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-2 text-sm text-text-light">
          {post.description}
        </p>
        <footer className="mt-4 flex items-center gap-4 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar size={12} aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} aria-hidden="true" />
            {post.readingTime} min
          </span>
        </footer>
      </div>
    </article>
  );
}
