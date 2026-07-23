"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { footerData, navLinks } from "~/lib/data-contact";
import { Reveal } from "~/components/scroll-reveal";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-text-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal variant="fadeUp">
            <div>
              <p className="text-lg font-bold text-white">
                Xixouner<span className="text-accent-light">Dev</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed">{footerData.tagline}</p>
              <p className="mt-1 text-sm">{footerData.location}</p>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-light">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-light">
                Plateformes
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href={footerData.malt} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm transition-colors hover:text-white">
                    Malt <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href={footerData.linkedin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm transition-colors hover:text-white">
                    LinkedIn <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a href={footerData.github} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm transition-colors hover:text-white">
                    GitHub <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.3}>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-text-light">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${footerData.email}`} className="text-sm transition-colors hover:text-white">
                    {footerData.email}
                  </a>
                </li>
                <li className="text-sm">Entrepreneur individuel</li>
                <li className="text-sm">SIRET : {footerData.siret}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-center text-xs sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Alexis Trechot — XixounerDev — xixouner.com
          </p>
          <p>
            <Link href="/mentions-legales" className="underline-offset-4 hover:text-white hover:underline">
              Mentions légales
            </Link>
            {" · "}
            <Link href="/confidentialite" className="underline-offset-4 hover:text-white hover:underline">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

