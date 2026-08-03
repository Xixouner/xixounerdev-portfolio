import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { Reveal } from "~/components/scroll-reveal";
import {
  CheckCircle,
  ArrowRight,
  FileSpreadsheet,
  RefreshCcw,
  ShieldCheck,
  Utensils,
  Wrench,
  Scissors,
  Car,
  Cake,
  Stethoscope,
  Hammer,
  Building2,
  BadgeCheck,
  Clock,
  Database,
  Gift,
  MapPin,
  Mail,
  Phone,
  Search,
} from "lucide-react";

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

const sectors = [
  { icon: Utensils, label: "Restaurants & cafés" },
  { icon: Wrench, label: "Plombiers & chauffagistes" },
  { icon: Scissors, label: "Coiffeurs & barbiers" },
  { icon: Car, label: "Garages & carrossiers" },
  { icon: Cake, label: "Boulangeries & pâtisseries" },
  { icon: Stethoscope, label: "Kinés & infirmiers" },
  { icon: Hammer, label: "Artisans du BTP" },
  { icon: Building2, label: "Agences & commerces" },
] as const;

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

const verificationSteps = [
  {
    icon: Search,
    step: "1",
    title: "On collecte",
    detail:
      "Scraping des sources publiques : Google Maps, Pages Jaunes, annuaires professionnels. Chaque établissement est identifié par son activité et sa zone.",
  },
  {
    icon: BadgeCheck,
    step: "2",
    title: "On vérifie",
    detail:
      "Chaque fiche est contrôlée : nom, adresse, téléphone, site web quand il existe. Les emails sont ajoutés uniquement s'ils sont publics (site, mentions légales).",
  },
  {
    icon: Gift,
    step: "3",
    title: "Vous prospectez",
    detail:
      "Fichier CSV livré sous 24h, prêt pour vos appels, emails ou import dans votre CRM. Un échantillon gratuit de 10 prospects avant toute commande.",
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

const sampleRows = [
  { n: "Le Trésor", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "restaurant-letresor.fr" },
  { n: "L'Ostal", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "lostal-restaurant.fr" },
  { n: "Au BDV", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "aubdv.fr" },
  { n: "Babka Family", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "babka-family.com" },
  { n: "Le Duguesclin", a: "Clermont-Ferrand", t: "+33 4 73 ...", s: "le-duguesclin.fr" },
] as const;

export default function LeadsPage() {
  return (
    <main className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Hero : texte + mockup ─────────────── */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal variant="fadeUp">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                <Clock size={14} /> Fichiers générés sous 24h
              </span>
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Des leads B2B qualifiés, prêts à prospecter
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-text-light">
                Des fichiers de prospects vérifiés — téléphone, email, site web —
                livrés en CSV. Arrêtez de chercher des heures, commencez à vendre.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/#contact">
                    Demander un échantillon gratuit <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#packs">Voir les packs</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-text-light">
                <span className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-accent" /> Données vérifiées
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-accent" /> Conforme RGPD
                </span>
                <span className="flex items-center gap-2">
                  <RefreshCcw size={16} className="text-accent" /> Mise à jour garantie
                </span>
              </div>
            </div>
          </Reveal>

          {/* Mockup fiche vérifiée */}
          <Reveal variant="scaleIn" delay={0.15}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/15 to-transparent blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-white p-6 shadow-xl shadow-accent/5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    <FileSpreadsheet size={18} className="text-accent" />
                    restaurants-clermont.csv
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    <BadgeCheck size={12} /> 79 vérifiés
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {sampleRows.map((r) => (
                    <div
                      key={r.n}
                      className="flex items-center justify-between rounded-lg border border-border/60 bg-surface/40 px-3.5 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-primary">{r.n}</p>
                        <p className="flex items-center gap-1 text-xs text-text-muted">
                          <MapPin size={11} /> {r.a}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2.5 text-xs text-text-light">
                        <Phone size={12} className="text-text-muted" />
                        <Mail size={12} className="text-text-muted" />
                        <span className="rounded-md bg-accent/10 px-1.5 py-0.5 font-medium text-accent">
                          site ✓
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-accent/30 py-2 text-xs font-medium text-text-muted">
                    + 74 autres fiches dans le fichier
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── Secteurs disponibles ──────────────── */}
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 className="mt-24 text-center text-2xl font-bold text-primary">
            Secteurs disponibles
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-text-light">
            Chaque pack est généré à la demande : votre ville, votre métier, votre zone.
            Voici les secteurs les plus demandés — la liste n&apos;est pas limitative.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s.label} variant="fadeUp" delay={i * 0.05}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-white p-5 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <s.icon size={26} className="text-accent" />
                <span className="text-sm font-semibold text-primary">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Packs ──────────────────────────────── */}
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 id="packs" className="mt-24 scroll-mt-24 text-center text-2xl font-bold text-primary">
            Trois packs, un même standard de qualité
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-text-light">
            Tous les packs incluent la vérification des fiches, la livraison CSV sous 24h
            et la garantie de fraîcheur des données.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                <h3 className="mt-4 text-lg font-bold text-primary">{p.name}</h3>
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

        {/* ── Exemple de fichier ─────────────────── */}
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 className="mt-24 text-center text-2xl font-bold text-primary">
            À quoi ressemble un fichier ?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-text-light">
            Un fichier type : 79 restaurants de Clermont-Ferrand — nom, adresse,
            téléphone, site web. Chaque ligne est vérifiée avant livraison.
          </p>
        </Reveal>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white">
          <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
            <span className="flex items-center gap-2 text-sm font-bold text-primary">
              <Database size={16} className="text-accent" /> Aperçu (5 premières lignes)
            </span>
            <span className="text-xs font-medium text-text-muted">79 lignes au total</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/60">
                  <th className="px-5 py-3 font-semibold text-primary">Nom</th>
                  <th className="px-5 py-3 font-semibold text-primary">Adresse</th>
                  <th className="px-5 py-3 font-semibold text-primary">Téléphone</th>
                  <th className="px-5 py-3 font-semibold text-primary">Site web</th>
                </tr>
              </thead>
              <tbody>
                {sampleRows.map((r) => (
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

        {/* ── Comment ça marche ─────────────────── */}
        <Reveal variant="fadeUp" delay={0.1}>
          <h2 className="mt-24 text-center text-2xl font-bold text-primary">
            Comment ça marche
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {verificationSteps.map((s, i) => (
            <Reveal key={s.step} variant="fadeUp" delay={i * 0.08}>
              <div className="relative h-full rounded-xl border border-border bg-white p-6">
                <span className="absolute right-5 top-5 text-4xl font-extrabold text-border/80">
                  {s.step}
                </span>
                <s.icon size={26} className="text-accent" />
                <h3 className="mt-3 font-bold text-primary">{s.title}</h3>
                <p className="mt-1 text-sm text-text-light">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Bandeau confiance ─────────────────── */}
        <Reveal variant="fadeUp" delay={0.15}>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-brand p-10 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-white">
                Échantillon gratuit avant toute commande
              </h2>
              <p className="mt-2 max-w-xl text-sm text-text-inverse/80">
                Dites-nous votre ville et votre métier cible : on vous envoie un
                échantillon de 10 prospects vérifiés, gratuitement. Réponse sous 24h,
                sans engagement.
              </p>
            </div>
            <Button asChild size="lg" className="shrink-0">
              <Link href="/#contact">
                Recevoir mon échantillon <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </Reveal>

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
      </div>
    </main>
  );
}
