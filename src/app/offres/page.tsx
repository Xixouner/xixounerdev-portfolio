import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { Reveal } from "~/components/scroll-reveal";
import {
  CheckCircle,
  ArrowRight,
  Globe,
  Server,
  Activity,
  Rocket,
  ShieldCheck,
  Layers,
  Minus,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Offres & Tarifs — Sites Web, Hébergement, Monitoring | XixounerDev",
  description:
    "Création de site web dès 500 €, hébergement pro 15 €/mois, monitoring 24/7 dès 9 €/mois. Composez votre offre selon votre situation. Sans engagement, mise en place sous 24h.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xixouner.com/offres",
    siteName: "XixounerDev",
    title: "Offres & Tarifs — Sites Web, Hébergement, Monitoring",
    description:
      "Des offres claires et combinables : création de site, hébergement pro, monitoring 24/7. Un seul interlocuteur, zéro surprise.",
  },
  alternates: { canonical: "https://xixouner.com/offres" },
};

interface Brick {
  icon: typeof Globe;
  title: string;
  price: string;
  period: string;
  desc: string;
  items: string[];
  link?: string;
}

interface Package {
  icon: typeof Globe;
  name: string;
  target: string;
  price: string;
  period: string;
  items: string[];
  highlight: boolean;
}

const bricks: Brick[] = [
  {
    icon: Globe,
    title: "Création de site web",
    price: "500 €",
    period: "one-shot HT",
    desc: "Un site sur-mesure qui attire des clients : design, SEO, performance. Pas de template.",
    items: [
      "Site vitrine responsive (mobile + desktop)",
      "Optimisé SEO — visible sur Google",
      "Formulaire de contact fonctionnel",
      "Formation prise en main (30 min)",
      "1 mois de support offert",
    ],
  },
  {
    icon: Server,
    title: "Hébergement pro & maintenance",
    price: "15 €",
    period: "/ mois HT",
    desc: "Votre site sur un serveur professionnel, sécurisé et entretenu. Vous ne touchez à rien.",
    items: [
      "VPS Hetzner (Europe, RGPD)",
      "Nom de domaine inclus",
      "Certificat SSL automatique",
      "Sauvegardes quotidiennes (30 j)",
      "Mises à jour sécurité automatiques",
      "Support — réponse < 4h",
    ],
  },
  {
    icon: Activity,
    title: "Monitoring 24/7",
    price: "9 €",
    period: "/ mois HT (Pro 19 €)",
    desc: "Votre site surveillé en permanence, avec alerte immédiate en cas de panne. Même si le site n'a pas été créé par moi.",
    items: [
      "Vérification uptime toutes les 5 min",
      "Alerte immédiate sur Telegram",
      "Surveillance certificat SSL",
      "Rapport quotidien (formule Pro)",
      "Multi-sites & white-label (Agence 39 €)",
    ],
    link: "https://monitoring.xixouner.com",
  },
];

const packages: Package[] = [
  {
    icon: Layers,
    name: "Vitrine",
    target: "Vous voulez juste un site",
    price: "500 €",
    period: "one-shot",
    items: [
      "Site web sur-mesure",
      "Design responsive + SEO",
      "1 mois de support offert",
      "Hébergement en option",
    ],
    highlight: false,
  },
  {
    icon: ShieldCheck,
    name: "Sérénité",
    target: "Le site + tout le reste",
    price: "500 € + 15 €/mois",
    period: "création + hébergement",
    items: [
      "Création du site incluse",
      "Hébergement pro + domaine",
      "SSL + sauvegardes auto",
      "Maintenance sans effort",
    ],
    highlight: false,
  },
  {
    icon: Activity,
    name: "Surveillance",
    target: "Vous avez déjà un site",
    price: "24 €/mois",
    period: "hébergement + monitoring",
    items: [
      "Hébergement pro + domaine",
      "Monitoring 24/7 + alertes",
      "SSL + sauvegardes auto",
      "Sans création de site",
    ],
    highlight: false,
  },
  {
    icon: Rocket,
    name: "Tout-en-un",
    target: "Je m'occupe de tout",
    price: "500 € + 24 €/mois",
    period: "création + hébergement + monitoring",
    items: [
      "Création du site incluse",
      "Hébergement pro + domaine",
      "Monitoring 24/7 + alertes",
      "Sauvegardes + support",
    ],
    highlight: true,
  },
];

const faqs = [
  {
    q: "Y a-t-il un engagement ?",
    a: "Non. Toutes les formules mensuelles sont sans engagement et résiliables à tout moment. Le paiement se fait par virement simple. La mise en place prend moins de 24h.",
  },
  {
    q: "J'ai déjà un site, je peux prendre juste le monitoring ?",
    a: "Oui, dès 9 €/mois, même si votre site n'a pas été créé par moi. Je surveille l'uptime, le certificat SSL et je vous alerte immédiatement en cas de panne. Mise en place sous 24h.",
  },
  {
    q: "Mon site actuel peut être migré chez vous ?",
    a: "Oui. Avec la formule Surveillance ou Tout-en-un, la migration de votre site existant est incluse : je déplace le site, je configure SSL et sauvegardes, vous n'avez rien à faire.",
  },
  {
    q: "Je peux commencer par quoi ?",
    a: "Par un échange gratuit. Décrivez-moi votre situation en 2 minutes via le formulaire, je vous réponds sous 24h avec une recommandation claire — pas de pression, pas de jargon.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Création de site web",
        description: "Site vitrine sur-mesure, responsive et optimisé SEO.",
        offers: { "@type": "Offer", price: "500", priceCurrency: "EUR" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Hébergement pro & maintenance",
        description: "VPS Hetzner, SSL automatique, sauvegardes quotidiennes.",
        offers: { "@type": "Offer", price: "15", priceCurrency: "EUR" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Monitoring 24/7",
        description: "Surveillance uptime, alertes Telegram, surveillance SSL.",
        offers: { "@type": "Offer", price: "9", priceCurrency: "EUR" },
      },
    },
  ],
};

export default function OffresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* ── Hero ─────────────────────────────── */}
          <Reveal variant="fadeUp">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Des offres claires, pour chaque situation
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Création de site, hébergement pro, monitoring 24/7 — prenez une brique
                ou combinez-les. Un seul interlocuteur, des prix fixes, zéro surprise.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-text-light">
                <span className="rounded-full border border-border bg-white px-4 py-1.5">
                  Sans engagement
                </span>
                <span className="rounded-full border border-border bg-white px-4 py-1.5">
                  Mise en place sous 24h
                </span>
                <span className="rounded-full border border-border bg-white px-4 py-1.5">
                  Paiement par virement
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Briques à la carte ───────────────── */}
          <Reveal variant="fadeUp" delay={0.1}>
            <h2 className="mt-20 text-center text-2xl font-bold text-primary">
              Composez votre offre
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-text-light">
              Trois briques indépendantes, aux prix fixes. Combinez-les selon vos besoins.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bricks.map((b, i) => (
              <Reveal key={b.title} variant="fadeUp" delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <b.icon size={32} className="text-accent" />
                  <h3 className="mt-4 text-lg font-bold text-primary">{b.title}</h3>
                  <p className="mt-1 text-sm text-text-light">{b.desc}</p>
                  <p className="mt-5">
                    <span className="text-3xl font-extrabold text-accent">{b.price}</span>
                    <span className="text-sm text-text-muted"> {b.period}</span>
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-light">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={b.link ? "secondary" : "primary"}
                    size="sm"
                    className="mt-6 w-full"
                    asChild
                  >
                    {b.link ? (
                      <a href={b.link} target="_blank" rel="noopener noreferrer">
                        Voir les formules <ArrowRight size={14} />
                      </a>
                    ) : (
                      <Link href="/#contact">Demander un devis <ArrowRight size={14} /></Link>
                    )}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── Formules prêtes à l'emploi ───────── */}
          <Reveal variant="fadeUp" delay={0.1}>
            <h2 className="mt-24 text-center text-2xl font-bold text-primary">
              Formules prêtes à l&apos;emploi
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-text-light">
              Pas envie de composer ? Comparez et choisissez la combinaison qui vous correspond.
            </p>
          </Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-5 py-4 font-semibold text-text-muted">Formule</th>
                  {packages.map((p) => (
                    <th key={p.name} className={"px-5 py-4 " + (p.highlight ? "bg-accent/5" : "")}>
                      <div className="flex flex-col items-start gap-1">
                        <span className="flex items-center gap-2 font-bold text-primary">
                          {p.name}
                          {p.highlight && (
                            <span className="rounded-full bg-gradient-to-r from-accent to-accent-light px-2 py-0.5 text-[10px] font-bold text-primary-dark">
                              Le plus complet
                            </span>
                          )}
                        </span>
                        <span className="text-xs font-normal text-text-muted">{p.target}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Création du site", values: [true, true, false, true] },
                  { label: "Hébergement pro + domaine", values: [false, true, true, true] },
                  { label: "Monitoring 24/7 + alertes", values: [false, false, true, true] },
                  { label: "SSL + sauvegardes auto", values: [false, true, true, true] },
                  { label: "Support & maintenance", values: [false, true, true, true] },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-border/60 last:border-0">
                    <td className="px-5 py-3.5 font-medium text-primary">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={"px-5 py-3.5 text-center " + (packages[i].highlight ? "bg-accent/5" : "")}>
                        {v ? (
                          <CheckCircle size={16} className="mx-auto text-accent" aria-label="Inclus" />
                        ) : (
                          <Minus size={16} className="mx-auto text-text-muted/40" aria-label="Non inclus" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-surface/60">
                  <td className="px-5 py-4 font-bold text-primary">Prix</td>
                  {packages.map((p, i) => (
                    <td key={p.name} className={"px-5 py-4 text-center " + (p.highlight ? "bg-accent/5" : "")}>
                      <span className="text-sm font-extrabold text-primary">{p.price}</span>
                      <span className="block text-xs text-text-muted">{p.period}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {packages.map((p, i) => (
              <Reveal key={p.name} variant="fadeUp" delay={i * 0.06}>
                <Button
                  variant={p.highlight ? "primary" : "secondary"}
                  size="sm"
                  asChild
                >
                  <Link href="/#contact">Choisir {p.name} <ArrowRight size={13} /></Link>
                </Button>
              </Reveal>
            ))}
          </div>

          {/* ── Bandeau : vous avez déjà un site ── */}
          <Reveal variant="fadeUp" delay={0.15}>
            <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-brand p-10 text-center sm:flex-row sm:text-left">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Vous avez déjà un site ?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-text-inverse/80">
                  Prenez juste le monitoring : dès 9 €/mois, votre site est surveillé
                  24/7 avec alerte immédiate en cas de panne. Même si le site n&apos;a pas
                  été créé par moi.
                </p>
              </div>
              <Button asChild size="lg" className="shrink-0">
                <a
                  href="https://monitoring.xixouner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Découvrir le monitoring <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </Reveal>

          {/* ── Section AuditBot ───────────────── */}
          <Reveal variant="fadeUp" delay={0.1}>
            <h2 className="mt-24 text-center text-2xl font-bold text-primary">
              Et en plus : l&apos;audit de sécurité
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-center text-text-light">
              AuditBot analyse votre site ou votre code en 8 secondes : SSL, headers,
              secrets exposés, dépendances vulnérables. Score de A+ à F, rapport PDF.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Gratuit", price: "0 €", desc: "Pour tester", items: ["5 audits / mois", "Score A+ à F", "Rapport complet", "PDF, CSV, JSON"] },
              { name: "Mini", price: "5 €", desc: "/mois", items: ["100 audits / mois", "IA Mistral", "PDF, CSV, JSON", "API + 7j historique"], highlight: false },
              { name: "Pro", price: "19 €", desc: "/mois — populaire", items: ["500 audits / mois", "IA Mistral", "PDF, CSV, JSON", "API + 90j historique"], highlight: true },
              { name: "Business", price: "49 €", desc: "/mois", items: ["2000 audits / mois", "IA Mistral Large", "Historique illimité", "3 comptes"], highlight: false },
            ].map((t, i) => (
              <Reveal key={t.name} variant="fadeUp" delay={i * 0.08}>
                <div
                  className={
                    "relative flex h-full flex-col rounded-2xl border bg-white p-7 transition-all duration-300 " +
                    (t.highlight
                      ? "border-accent shadow-xl shadow-accent/10 ring-1 ring-accent/30"
                      : "border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5")
                  }
                >
                  {t.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-light px-3 py-1 text-xs font-bold text-primary-dark">
                      Recommandé
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-primary">{t.name}</h3>
                  <p className="mt-2">
                    <span className="text-2xl font-extrabold text-primary">{t.price}</span>
                    <span className="block text-xs text-text-muted">{t.desc}</span>
                  </p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-light">
                        <CheckCircle size={13} className="mt-0.5 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={t.highlight ? "primary" : "secondary"}
                    size="sm"
                    className="mt-5 w-full"
                    asChild
                  >
                    <a href="https://auditbot.xixouner.com" target="_blank" rel="noopener noreferrer">
                      Essayer gratuitement <ArrowRight size={14} />
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ── FAQ ──────────────────────────────── */}
          <Reveal variant="fadeUp" delay={0.1}>
            <h2 className="mt-24 text-center text-2xl font-bold text-primary">
              Questions fréquentes
            </h2>
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} variant="fadeUp" delay={i * 0.05}>
                <details className="group rounded-xl border border-border bg-white">
                  <summary className="cursor-pointer px-6 py-4 text-left font-semibold text-primary transition-colors hover:text-accent">
                    {f.q}
                  </summary>
                  <p className="px-6 pb-4 text-text-light">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>

          {/* ── CTA final ────────────────────────── */}
          <Reveal variant="fadeUp" delay={0.2}>
            <div className="mt-24 rounded-2xl border border-border bg-white p-10 text-center">
              <h2 className="text-xl font-bold text-primary">
                Pas sûr de la formule qu&apos;il vous faut ?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-text-light">
                Décrivez-moi votre situation en 2 minutes, je vous recommande la formule
                adaptée — gratuitement et sans engagement. Réponse sous 24h.
              </p>
              <Button asChild className="mt-6" size="lg">
                <Link href="/#contact">
                  Obtenir ma recommandation gratuite <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
