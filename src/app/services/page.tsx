import type { Metadata } from "next";
import Link from "next/link";
import { servicesDetail } from "~/lib/data-services";
import { Button } from "~/ui/primitives/button";
import { Reveal } from "~/components/scroll-reveal";
import { Icon } from "~/components/icon";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Développement Web, DevOps & Outils sur-mesure | XixounerDev",
  description:
    "Création de sites web, applications sur-mesure, hébergement DevOps. Des prestations claires, des prix transparents. Développeur freelance à Clermont-Ferrand.",
  openGraph: {
    type: "website", locale: "fr_FR", url: "https://xixouner.com/services", siteName: "XixounerDev",
    title: "Services — Développement Web, DevOps & Outils sur-mesure",
    description: "Sites web, apps métier, hébergement pro : des offres transparentes, des prix justes.",
  },
  alternates: { canonical: "https://xixouner.com/services" },
};

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Mes services</h1>
          <p className="mt-3 max-w-2xl text-text-light">Trois offres claires, des processus transparents, des prix justes. Pas de surprise, pas de jargon — juste des solutions qui marchent.</p>
        </Reveal>

        <div className="mt-14 space-y-24">
          {servicesDetail.map((svc, i) => (
            <Reveal key={svc.title} variant="fadeUp" delay={i * 0.1}>
              <section>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10">
                    <Icon name={svc.icon} size={28} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{svc.title}</h2>
                    <p className="text-text-light">{svc.subtitle}</p>
                  </div>
                </div>

                <p className="mt-4 text-text-light">{svc.description}</p>

                <h3 className="mt-8 text-lg font-bold text-primary">Comment ça se passe</h3>
                <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                  {svc.process.map((p) => (
                    <div key={p.step} className="rounded-xl border border-border bg-white p-4">
                      <p className="text-sm font-bold text-primary">{p.step}</p>
                      <p className="mt-1 text-xs text-text-light">{p.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Ce qui est inclus</h3>
                    <ul className="mt-2 space-y-1.5">
                      {svc.included.map((item) => (<li key={item} className="flex items-start gap-2 text-sm text-text-light"><CheckCircle size={14} className="mt-0.5 shrink-0 text-accent" />{item}</li>))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-text-muted">Ce qui n&apos;est pas inclus</h3>
                    <ul className="mt-2 space-y-1.5">
                      {svc.notIncluded.map((item) => (<li key={item} className="flex items-start gap-2 text-sm text-text-muted"><span className="mt-0.5 shrink-0 text-xs">✕</span>{item}</li>))}
                    </ul>
                  </div>
                </div>

                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-text-muted">Stack technique</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {svc.techStack.map((t) => (<span key={t.name} title={t.reason} className="cursor-help rounded-lg bg-accent/5 px-3 py-1.5 text-sm font-medium text-primary">{t.name}</span>))}
                </div>

                <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-2xl font-extrabold text-accent">{svc.price}</span>
                    <Button asChild size="sm"><Link href="/#contact">Devis gratuit <ArrowRight size={14} /></Link></Button>
                  </div>
                  <p className="mt-2 text-sm text-text-muted">{svc.priceNote}</p>
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fadeUp" delay={0.3}>
          <div className="mt-24 rounded-2xl border border-border bg-white p-10 text-center">
            <h2 className="text-xl font-bold text-primary">Une question sur mes services ?</h2>
            <p className="mt-2 text-text-light">Le premier échange est gratuit et sans engagement. Devis sous 24h.</p>
            <Button asChild className="mt-5" variant="secondary"><Link href="/#contact">Me contacter</Link></Button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
