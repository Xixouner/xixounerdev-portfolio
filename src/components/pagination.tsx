import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath: string; // ex: "/blog" ou "/blog/category/seo-web"
  /**
   * "query" (défaut) : /blog?page=2 — la route lit `searchParams`, Next la rend
   *   dynamiquement et impose `Cache-Control: private, no-store`.
   * "segment" : /blog/page/2 — route statique (ISR), cache normal et canonical
   *   auto-référent. C'est le mode utilisé par le blog.
   */
  mode?: "query" | "segment";
}

export function Pagination({
  page,
  totalPages,
  basePath,
  mode = "query",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageUrl = (p: number) => {
    if (p === 1) return basePath;
    return mode === "segment" ? `${basePath}/page/${p}` : `${basePath}?page=${p}`;
  };

  return (
    <nav
      aria-label="Pagination"
      className="mt-14 flex items-center justify-center gap-4"
    >
      {page > 1 ? (
        <Link
          href={pageUrl(page - 1)}
          className="inline-flex items-center gap-1.5 rounded-xl border-2 border-border px-4 py-2 text-sm font-semibold text-text-light transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronLeft size={16} /> Précédent
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 rounded-xl border-2 border-border/50 px-4 py-2 text-sm font-semibold text-text-muted/50">
          <ChevronLeft size={16} /> Précédent
        </span>
      )}

      <span className="text-sm font-medium text-text-muted">
        Page {page} sur {totalPages}
      </span>

      {page < totalPages ? (
        <Link
          href={pageUrl(page + 1)}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-xl border-2 border-accent px-4 py-2 text-sm font-semibold text-accent transition-colors",
            "hover:bg-accent/10"
          )}
        >
          Suivant <ChevronRight size={16} />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-1.5 rounded-xl border-2 border-border/50 px-4 py-2 text-sm font-semibold text-text-muted/50">
          Suivant <ChevronRight size={16} />
        </span>
      )}
    </nav>
  );
}
