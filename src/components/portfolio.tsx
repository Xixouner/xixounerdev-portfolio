"use client";

import Link from "next/link";
import { ExternalLink, CheckCircle2, Trophy, ArrowRight } from "lucide-react";
import { Button } from "~/ui/primitives/button";
import { siteData } from "~/lib/data";
import { Icon } from "~/components/icon";
import { Reveal, RevealItem, RevealStagger } from "~/components/scroll-reveal";

const categoryBadgeClass: Record<string, string> = {
  "Site vitrine": "bg-blue-100 text-blue-700",
  "Application web": "bg-purple-100 text-purple-700",
  default: "bg-emerald-100 text-emerald-700",
};

function CategoryBadge({ cat }: { cat?: string }) {
  if (!cat) return null;
  const cls = categoryBadgeClass[cat] ?? categoryBadgeClass.default;
  return <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${cls}`}>{cat}</span>;
}

export function Portfolio() {
  const { portfolio } = siteData;
  const { projects, infra, placeholder } = portfolio;

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">{portfolio.title}</h2>
          <p className="mx-auto mb-16 max-w-xl text-center text-text-light">{projects.length} projets en production, hébergés sur la même infra.</p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} variant="fadeUp" delay={i * 0.1}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="p-6 pb-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                      <Trophy size={12} />{project.badge}
                    </span>
                    <CategoryBadge cat={project.category} />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-light">{project.context}</p>
                </div>

                <div className="border-t border-border px-6 py-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-text-muted">Solution</h4>
                  <ul className="mt-2 space-y-1.5">
                    {project.solution.slice(0, 3).map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-xs text-text-light">
                        <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-accent" />{s}
                      </li>
                    ))}
                    {project.solution.length > 3 && <li className="text-xs text-text-muted italic">+{project.solution.length - 3} autres</li>}
                  </ul>
                </div>

                <div className="mt-auto border-t border-border bg-gradient-to-br from-primary to-primary-light p-5">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-text-muted">Résultats</h4>
                  <RevealStagger>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.slice(0, 4).map((r, idx) => (
                        <RevealItem key={idx}>
                          <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center">
                            <p className="text-lg font-bold text-accent-light">{r.value}</p>
                            <p className="text-[10px] leading-tight text-text-muted">{r.label}</p>
                          </div>
                        </RevealItem>
                      ))}
                    </div>
                  </RevealStagger>
                  {"url" in project && project.url ? (
                    <Button className="mt-4 w-full" variant="secondary" size="sm" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />Voir le site
                      </a>
                    </Button>
                  ) : (
                    <div className="mt-4 rounded-lg bg-white/10 py-2 text-center text-xs text-text-muted">
                      🔒 Usage interne
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {infra && (
          <Reveal variant="fadeUp" delay={0.3}>
            <div className="mt-16 rounded-3xl border border-border bg-white p-8 sm:p-12">
              <h3 className="text-center text-xl font-bold text-primary">{infra.title}</h3>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {infra.items.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface/50 p-4 text-center transition-colors hover:border-accent/30">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10"><Icon name={item.icon} size={20} /></div>
                    <p className="text-xs font-semibold text-primary">{item.label}</p>
                    <p className="text-[10px] leading-tight text-text-muted">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <Reveal variant="fadeUp" delay={0.4}>
          <div className="mt-12 rounded-3xl border-2 border-dashed border-border p-12 text-center">
            <p className="text-xl font-semibold text-primary">{placeholder.title}</p>
            <p className="mt-2 text-text-light">{placeholder.body}</p>
            <Button className="mt-6" variant="ghost" size="lg" asChild>
              <Link href="/#contact">{placeholder.cta}<ArrowRight size={16} /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
