"use client";

import { ExternalLink, CheckCircle2, Trophy, ArrowRight } from "lucide-react";
import { Button } from "~/ui/primitives/button";
import { siteData } from "~/lib/data";
import { Reveal, RevealItem, RevealStagger } from "~/components/scroll-reveal";

export function Portfolio() {
  const { portfolio } = siteData;
  const { project } = portfolio;

  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp">
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {portfolio.title}
          </h2>
        </Reveal>

        <Reveal variant="scaleIn">
          <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
            <div className="grid md:grid-cols-5">
              <div className="col-span-3 p-8 sm:p-12">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  <Trophy size={14} />
                  {project.badge}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-primary">
                  {project.name}
                </h3>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                      Le besoin
                    </h4>
                    <p className="mt-1 leading-relaxed text-text-light">
                      {project.context}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                      La solution
                    </h4>
                    <ul className="mt-2 space-y-2">
                      {project.solution.map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-light">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="mt-8" variant="secondary" asChild>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Voir le site en direct
                  </a>
                </Button>
              </div>

              <div className="col-span-2 flex items-center bg-gradient-to-br from-primary to-primary-light p-8 sm:p-12">
                <div className="w-full space-y-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                    Résultats
                  </h4>
                  <RevealStagger>
                    {project.results.map((r, i) => (
                      <RevealItem key={i}>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                          <p className="text-3xl font-bold text-accent-light">{r.value}</p>
                          <p className="mt-1 text-sm text-text-muted">{r.label}</p>
                        </div>
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.2}>
          <div className="mt-12 rounded-3xl border-2 border-dashed border-border p-12 text-center">
            <p className="text-xl font-semibold text-primary">
              {portfolio.placeholder.title}
            </p>
            <p className="mt-2 text-text-light">{portfolio.placeholder.body}</p>
            <Button className="mt-6" variant="ghost" size="lg" asChild>
              <a href="#contact">
                {portfolio.placeholder.cta}
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

