"use client";

import { siteData } from "~/lib/data";
import { Icon } from "~/components/icon";
import {
  Reveal,
  RevealStagger,
  RevealItem,
} from "~/components/scroll-reveal";

export function Difference() {
  const { difference } = siteData;

  return (
    <section id="difference" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {difference.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-accent">
              {difference.hook}
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-light">
              {difference.intro}
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-8 sm:grid-cols-2">
          {difference.cards.map((card, i) => (
            <RevealItem key={i}>
              <div className="group rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <Icon name={card.icon} />
                <h3 className="mb-3 mt-4 text-lg font-bold text-primary">
                  {card.title}
                </h3>
                <p className="mb-4 leading-relaxed text-text-light">
                  {card.body}
                </p>
                <p className="font-semibold text-accent">{card.highlight}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

