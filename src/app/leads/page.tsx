import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { Reveal } from "~/components/scroll-reveal";
import { CheckCircle, ArrowRight, FileSpreadsheet, RefreshCcw, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Leads B2B Qualifiés — Fichiers de Prospection Prêts à l'Emploi | XixounerDev",
  description:
    "Fichiers de prospects qualifiés : restaurants, plombiers, artisans avec téléphone, email et site web. Données vérifiées, livrées en CSV, conformes RGPD. Gagnez des heures de prospection.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://xixouner.com/leads",
    siteName: "XixounerDev",
    title: "Leads B2B Qualifiés — Fichiers de Prospection",
    description:
      "Des fichiers de prospects vérifiés (téléphone, email, site web) pour prospecter sans perdre des heures. Livrés en CSV.",
  },
  alternates: { canonical: "https://xixouner.com/leads" },
};

const packs = [
  {
    icon: FileSpreadsheet,
    name: "Pack Découverte",
    target: "1 secteur géographique",
    price: "49 €",
    period: "un secteur",
    items: [
      "30 à 80 prospects vérifiés",
      "Nom, adresse, téléphone",
      "Site web quand disponible",
      "Livraison CSV sous 24h",
      "Mise à jour gratuite 1 mois",
    ],
    highlight: false,
  },
  {
    icon: RefreshCcw,
    name: "Pack Pro",
    target: "2-3 secteurs d'activité",
    price: "99 €",
    period: "2-3 secteurs",
    items: [
      "100 à 250 prospects vérifiés",
      "Emails quand disponibles",
      "Nom, adresse, téléphone, site",
      "Livraison CSV sous 24h",
      "Mise à jour gratuite 3 mois",
    ],
    highlight: true,
  },
  {
    icon: ShieldCheck,
    name: "Pack Agence",
    target: "Sur-mesure (toute la France)",
    price: "299 €",
    period: "sur-mesure",
    items: [
      "500+ prospects qualifiés",
      "Filtres par ville, métier, zone",
      "Enrichissement email inclus",
      "Format CSV / Excel / CRM",
      "Accompagnement à la prospection",
    ],
    highlight: false,
  },
] as const;

const faqs = [
  {
    q: "D'où viennent ces données ?",
    a: "Les données proviennent de sources publiques (Google Maps, Pages Jaunes, annuaires professionnels). Chaque fiche est vérifiée : nom, adresse, téléphone, et site web quand il existe. Les emails sont ajoutés quand ils sont publics (site, mentions légales).",
  },
  {
    q: "Est-ce conforme au RGPD ?",
    a: "Oui. Nous ne collectons que des données professionnelles publiques, destinées à un usage de prospection B2B légitime (intérêt légitime, art. 6.1.f RGPD). Chaque fichier inclut un modèle de mention de prospection et la procédure de suppression sur demande.",
  },
  {
    q: "À qui s'adressent ces fichiers ?",
    a: "Aux agences web, freelances, et équipes commerciales qui prospectent des pros (artisans, commerçants, indépendants). Au lieu de passer des heures à chercher, vous recevez un fichier prêt à l'emploi pour vos campagnes d'appels ou d'emails.",
  },
  {
    q: "Les données sont-elles fraîches ?",
    a: "Oui. Les fichiers sont générés à la demande et vérifiés au moment de la commande. En cas de numéro ou d'email invalide signalé dans le mois (Pack Découverte) ou les 3 mois (Pack Pro), on remplace gratuitement.",
  },
] as const;

export default function LeadsPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Hero ─────────────────────────────── */}
        <Reveal variant="fadeUp">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Des leads B2B qualifiés, prêts à prospecter
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-text-light">
              Fichiers de prospects vérifiés (téléphone, email, site web) livrés en CSV.
              Arrêtez de chercher des heures — commencez à vendre.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-text-light">
              <span className="rounded-full border border-border bg-white px-4 py-1.5">
                Livraison sous 24h
              </span>
              <span className="rounded-full border border-border bg-white px-4 py-1.5">
                Données vérifiées
              </span>
              <span className="rounded-full border border-border bg-white px-4 py-1.5">
                Conforme RGPD
              </span>
            </div>
          </div>
        </Reveal>

        {/* ── Packs ─────────────────────────────── */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {packs.map((p, i) => (
            <Reveal key={p.name} variant="fadeUp" delay={i * 0.08}>
              <div
                className={
                  "relative flex h-full flex-col rounded-2xl border bg-white p-8 transition-all duration-300 " +
                  (p.highlight
                    ? "border-accent shadow-xl shadow-accent/10 ring-1 ring-accent/30"
                    : "border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5")
                }
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-light px-3 py-1 text-xs font-bold text-primary-dark">
                    Le plus demandé
                  </span>
                )}
                <p.icon size={30} className="text-accent" />
                <h2 className="mt-4 text-lg font-bold text-primary">{p.name}</h2>
                <p className="text-xs font-medium uppercase tracking-wide text-text-muted">{p.target}</p>
                <p className="mt-4">
                  <span className="text-3xl font-extrabold text-primary">{p.price}</span>
                  <span className="text-sm text-text-muted"> {p.period}</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-light">
                      <CheckCircle size={14} className="mt-0.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant={p.highlight ? "primary" : "secondary"} size="sm" className="mt-6 w-full" asChild>
                  <Link href="/#contact">Commander ce pack <ArrowRight size={14} /></Link>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Exemples de secteurs ─────────────── */}
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 className="mt-20 text-center text-2xl font-bold text-primary">
            Secteurs disponibles (exemples)
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-text-light">
            Un fichier type : 79 restaurants de Clermont-Ferrand — nom, adresse, téléphone,
            site web. Chaque pack est généré à la demande pour votre ville et votre métier.
          </p>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="px-5 py-3 font-semibold text-primary">Nom</th>
                  <th className="px-5 py-3 font-semibold text-primary">Adresse</th>
                  <th className="px-5 py-3 font-semibold text-primary">Téléphone</th>
                  <th className="px-5 py-3 font-semibold text-primary">Site web</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "Le Trésor", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "restaurant-letresor.fr" },
                  { n: "L'Ostal", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "lostal-restaurant.fr" },
                  { n: "Au BDV", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "aubdv.fr" },
                  { n: "Babka Family", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "babka-family.com" },
                  { n: "Le Duguesclin", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "le-duguesclin.fr" },
                ].map((r) => (
                  <tr key={r.n} className="border-b border-border/60 last:border-0">
                    <td className="px-5 py-3 font-medium text-primary">{r.n}</td>
                    <td className="px-5 py-3 text-text-light">{r.a}</td>
                    <td className="px-5 py-3 text-text-light">{r.t}</td>
                    <td className="px-5 py-3 text-accent">{r.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Comment ça marche ────────────────── */}
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 className="mt-20 text-center text-2xl font-bold text-primary">
            Comment ça marche
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { step: "1", title: "Vous commandez", detail: "Choisissez le pack, la ville et le métier ciblé (plombiers, restaurants, coiffeurs…)." },
            { step: "2", title: "On collecte et vérifie", detail: "Scraping des sources publiques + vérification manuelle des fiches (téléphone, site, email)." },
            { step: "3", title: "Vous prospectez", detail: "Fichier CSV livré sous 24h, prêt pour vos appels, emails ou import dans votre CRM." },
          ].map((s, i) => (
            <Reveal key={s.step} variant="fadeUp" delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {s.step}
                </span>
                <h3 className="mt-3 font-bold text-primary">{s.title}</h3>
                <p className="mt-1 text-sm text-text-light">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── FAQ ──────────────────────────────── */}
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 className="mt-20 text-center text-2xl font-bold text-primary">
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
              Vous voulez un fichier pour votre secteur ?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-text-light">
              Dites-nous votre ville et votre métier cible : on vous envoie un échantillon
              gratuit de 10 prospects avant toute commande. Réponse sous 24h.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/#contact">
                Demander un échantillon gratuit <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
