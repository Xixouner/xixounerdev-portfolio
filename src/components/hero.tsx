"use client";

import Image from "next/image";
import { Send, Check, ArrowDown } from "lucide-react";
import { Button } from "~/ui/primitives/button";
import { siteData } from "~/lib/data";
import { Reveal } from "~/components/scroll-reveal";

export function Hero() {
  const { hero } = siteData;

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex justify-center md:hidden">
          <Reveal variant="scaleIn">
            <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-accent/20 shadow-xl shadow-accent/5">
              <Image
                src="/photo_pro.jpg"
                alt="Alexis Trechot — Développeur Fullstack & DevOps Freelance"
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
          <div className="text-center md:text-left">
            <Reveal variant="fadeUp">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-success" />
                {hero.badge}
              </span>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.1}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
                {hero.subtitle}
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button size="lg" asChild>
                  <a href="#contact">
                    <Send size={16} />
                    {hero.ctaPrimary}
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="#portfolio">
                    {hero.ctaSecondary}
                    <ArrowDown size={16} />
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.4}>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-muted md:justify-start">
                {hero.reassurances.map((r) => (
                  <li key={r} className="flex items-center gap-1.5">
                    <Check size={14} className="text-success" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="hidden md:flex md:justify-center">
            <Reveal variant="scaleIn" delay={0.2}>
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl ring-1 ring-accent/20 shadow-xl shadow-accent/5">
                <Image
                  src="/photo_pro.jpg"
                  alt="Alexis Trechot — Développeur Fullstack & DevOps Freelance"
                  fill
                  sizes="288px"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

