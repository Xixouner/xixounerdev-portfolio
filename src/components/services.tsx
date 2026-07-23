"use client";

import { siteData } from "~/lib/data";
import { Icon } from "~/components/icon";
import { Button } from "~/ui/primitives/button";
import {
  Reveal,
  RevealStagger,
  RevealItem,
} from "~/components/scroll-reveal";

export function Services() {
  const { services } = siteData;

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {services.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-light">
              {services.intro}
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-8 md:grid-cols-3">
          {services.cards.map((card, i) => (
            <RevealItem key={i}>
              <div className="flex flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 h-full">
                <Icon name={card.icon} size={32} />
                <h3 className="mb-4 mt-4 text-lg font-bold text-primary">
                  {card.title}
                </h3>
                <ul className="mb-6 flex-1 space-y-2.5">
                  {card.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-light"
                    >
                      <span className="mt-0.5 text-accent">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mb-4 text-center text-xl font-bold text-accent">
                  {card.price}
                </p>
                <Button variant="secondary" size="sm" className="w-full" asChild>
                  <a href="#contact">Demander un devis</a>
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal variant="fadeUp" delay={0.1}>
          <p className="mt-12 text-center text-sm text-text-muted">
            {services.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

