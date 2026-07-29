import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { Reveal } from "~/components/scroll-reveal";
import { MapPin, Briefcase, Code, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Alexis Trechot, Développeur Web Freelance | XixounerDev",
  description: "Développeur fullstack & DevOps freelance à Clermont-Ferrand. Next.js, Docker, PostgreSQL. Sites sur-mesure dès 500€. Découvrez mon parcours.",
  openGraph: {
    type: "profile", locale: "fr_FR", url: "https://xixouner.com/a-propos", siteName: "XixounerDev",
    title: "À propos — Alexis Trechot, Développeur Freelance",
    description: "Fullstack & DevOps à Clermont-Ferrand. Next.js, Docker, PostgreSQL.",
  },
  alternates: { canonical: "https://xixouner.com/a-propos" },
};

export default function AProposPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Person",
        name: "Alexis Trechot", alternateName: "XixounerDev",
        jobTitle: "Développeur Web Freelance Fullstack & DevOps",
        url: "https://xixouner.com",
        sameAs: [
          "https://www.malt.fr/profile/alexistrechot?overview",
          "https://www.linkedin.com/in/alexis-trechot-7b33b1280",
          "https://github.com/Xixouner",
        ],
        knowsAbout: ["Next.js", "React", "TypeScript", "Docker", "PostgreSQL", "DevOps", "SEO", "Tailwind CSS"],
        address: { "@type": "PostalAddress", addressLocality: "Clermont-Ferrand", addressRegion: "Auvergne", addressCountry: "FR" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://xixouner.com" },
          { "@type": "ListItem", position: 2, name: "À propos", item: "https://xixouner.com/a-propos" },
        ],
      }) }} />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal variant="fadeUp">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">À propos</h1>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.1}>
            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-accent/10 text-3xl font-bold text-accent">AT</div>
              <div>
                <p className="text-2xl font-bold text-primary">Alexis Trechot</p>
                <p className="text-text-light">Développeur Web Freelance Fullstack & DevOps</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-text-muted"><MapPin size={14} />Clermont-Ferrand, Auvergne</p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.2}>
            <section className="mt-12">
              <h2 className="text-xl font-bold text-primary">Ce que je fais</h2>
              <p className="mt-3 leading-relaxed text-text-light">
                Je crée des sites et applications web sur-mesure pour des TPE, PME, associations et startups.
                Mon truc : livrer des projets rapides, sécurisés, optimisés SEO — sans le bloat des agences et sans le prix qui va avec.
              </p>
              <p className="mt-3 leading-relaxed text-text-light">
                Je ne suis pas juste développeur. Je m&apos;occupe de tout : du code au serveur.
                Docker, Caddy, CI/CD, monitoring, backups. Vous avez un seul interlocuteur, de la première ligne de code au déploiement.
              </p>
            </section>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.3}>
            <section className="mt-10">
              <h2 className="text-xl font-bold text-primary">Ma stack</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  { icon: Code, label: "Next.js / React", detail: "Framework principal" },
                  { icon: Code, label: "TypeScript", detail: "Typage strict" },
                  { icon: Code, label: "Tailwind CSS", detail: "Design system" },
                  { icon: Server, label: "Docker", detail: "Conteneurisation" },
                  { icon: Server, label: "Caddy", detail: "Reverse proxy SSL" },
                  { icon: Server, label: "PostgreSQL", detail: "Base de données" },
                  { icon: Server, label: "Hetzner", detail: "Hébergement VPS" },
                  { icon: Code, label: "Prisma", detail: "ORM TypeScript" },
                  { icon: Server, label: "CI/CD", detail: "GitHub Actions" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2 rounded-xl border border-border bg-white p-3">
                    <s.icon size={16} className="shrink-0 text-accent" />
                    <div><p className="text-sm font-semibold text-primary">{s.label}</p><p className="text-xs text-text-muted">{s.detail}</p></div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.4}>
            <section className="mt-10">
              <h2 className="text-xl font-bold text-primary">Pourquoi travailler avec moi</h2>
              <ul className="mt-3 space-y-3">
                {[
                  { icon: Briefcase, text: "Un seul interlocuteur : du code au serveur, je gère tout." },
                  { icon: Briefcase, text: "Des prix transparents : pas de frais cachés, pas d'abonnement surprise." },
                  { icon: Briefcase, text: "Réponse en moins de 24h : vous n'attendez pas 3 jours un devis." },
                  { icon: Briefcase, text: "Du sur-mesure : pas de template, pas de WordPress administré à bout de plugins." },
                  { icon: Briefcase, text: "Basé à Clermont-Ferrand : on peut se rencontrer, échanger, bosser ensemble." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-light">
                    <item.icon size={16} className="mt-0.5 shrink-0 text-accent" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.5}>
            <div className="mt-14 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 p-8 text-center">
              <h2 className="text-xl font-bold text-primary">On travaille ensemble ?</h2>
              <p className="mt-2 text-text-light">Devis gratuit, réponse sous 24h, zéro engagement.</p>
              <Button asChild className="mt-5"><Link href="/#contact">Me contacter</Link></Button>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
