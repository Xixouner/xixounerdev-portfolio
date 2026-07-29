import type { Metadata } from "next";
import Link from "next/link";
import { realisations } from "~/lib/data-realisation";
import { Button } from "~/ui/primitives/button";
import { Reveal } from "~/components/scroll-reveal";
import { CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Réalisations — Portfolio Développeur Web Freelance | XixounerDev",
  description: "Découvrez mes projets : sites vitrine, SaaS, applications web. Des vraies réalisations avec des vrais chiffres.",
  openGraph: {
    type: "website", locale: "fr_FR", url: "https://xixouner.com/realisations", siteName: "XixounerDev",
    title: "Réalisations — Portfolio Développeur Web | XixounerDev",
    description: "Sites vitrine, SaaS, apps web : mes projets avec chiffres et résultats.",
  },
  alternates: { canonical: "https://xixouner.com/realisations" },
};

function getCatColor(cat: string) {
  if (cat === "Site vitrine") return "bg-blue-100 text-blue-700";
  if (cat === "Application web") return "bg-purple-100 text-purple-700";
  if (cat === "SaaS") return "bg-emerald-100 text-emerald-700";
  if (cat === "Bientôt") return "bg-amber-100 text-amber-700";
  return "bg-emerald-100 text-emerald-700";
}

export default function RealisationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList",
        itemListElement: realisations.map((p, i) => ({
          "@type": "ListItem", position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            description: p.context,
            url: p.url || `https://xixouner.com/realisations`,
            about: p.category,
            author: { "@type": "Person", name: "Alexis Trechot", url: "https://xixouner.com" },
          },
        })),
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://xixouner.com" },
          { "@type": "ListItem", position: 2, name: "Réalisations", item: "https://xixouner.com/realisations" },
        ],
      }) }} />
      <main className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">Mes réalisations</h1>
          <p className="mt-3 max-w-2xl text-text-light">Des projets concrets, des vrais chiffres, zéro bullshit. Voici ce que je fais pour mes clients.</p>
        </Reveal>
        <div className="mt-12 space-y-20">
          {realisations.map((project, i) => (
            <Reveal key={project.slug} variant="fadeUp" delay={i * 0.1}>
              <article className="grid gap-8 lg:grid-cols-5">
                <div className="lg:col-span-2"><div className="overflow-hidden rounded-2xl border border-border"><img src={project.image} alt={project.title} className="w-full object-cover" loading="lazy" width={600} height={400} /></div></div>
                <div className="lg:col-span-3">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getCatColor(project.category)}`}>{project.category}</span>
                  <h2 className="mt-2 text-2xl font-bold text-primary">{project.title}</h2>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-text-muted">Le problème</h3>
                  <p className="mt-1 text-text-light">{project.problem}</p>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-text-muted">Ma solution</h3>
                  <ul className="mt-1 space-y-1">{project.solution.map((s) => (<li key={s} className="flex items-start gap-2 text-sm text-text-light"><CheckCircle size={14} className="mt-0.5 shrink-0 text-accent" />{s}</li>))}</ul>
                  <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-text-muted">Résultats</h3>
                  <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">{project.results.map((r) => (<div key={r.label} className="rounded-lg bg-accent/5 px-3 py-2 text-center"><p className="text-lg font-bold text-accent">{r.value}</p><p className="text-xs text-text-muted">{r.label}</p></div>))}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">{project.techs.map((t) => (<span key={t} className="rounded-md bg-border/50 px-2 py-0.5 text-xs text-text-light">{t}</span>))}</div>
                  {project.testimonial && (<blockquote className="mt-4 border-l-4 border-accent pl-4 italic text-text-light">« {project.testimonial.text} »<footer className="mt-1 text-xs font-medium not-italic text-text-muted">— {project.testimonial.author}, {project.testimonial.role}</footer></blockquote>)}
                  {project.comingSoon ? (<span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">🚧 Bientôt disponible</span>) : project.url ? (<a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">Voir le site <ExternalLink size={12} /></a>) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fadeUp" delay={0.4}>
          <div className="mt-20 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-accent/10 p-10 text-center">
            <h2 className="text-2xl font-bold text-primary">Votre projet ici ?</h2>
            <p className="mt-2 text-text-light">Le prochain projet que je mets en avant, c&apos;est peut-être le vôtre. Parlons-en.</p>
            <Button asChild className="mt-5"><Link href="/#contact">Demander mon devis gratuit</Link></Button>
          </div>
        </Reveal>
      </div>
    </main>
    </>
  );
}
