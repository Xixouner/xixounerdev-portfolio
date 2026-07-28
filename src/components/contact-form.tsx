"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "~/ui/primitives/button";
import { contactData } from "~/lib/data-contact";
import { Reveal } from "~/components/scroll-reveal";

const formSchema = z.object({
  name: z.string().min(2, "Nom requis (min 2 caractères)"),
  email: z.string().email("Email valide requis"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Choisissez un type de projet"),
  budget: z.string().min(1, "Choisissez une fourchette"),
  description: z.string().min(10, "Décrivez votre projet (min 10 caractères)"),
  source: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormValues) {
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi");
      // Tracking Matomo : devis demandé
      if (typeof window !== 'undefined' && (window as any)._paq) {
        (window as any)._paq.push(['trackGoal', 1]);
        (window as any)._paq.push(['trackEvent', 'Contact', 'Formulaire soumis', data.projectType]);
      }
      setSent(true);
    } catch {
      setError("Une erreur est survenue. Réessayez ou envoyez-moi un email directement à alexistrechot@gmail.com");
    }
  }

  if (sent) {
    return (
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <CheckCircle2 size={48} className="mx-auto text-success" />
          <h2 className="mt-4 text-2xl font-bold text-primary">
            Demande envoyée !
          </h2>
          <p className="mt-2 text-text-light">
            Merci ! Je vous réponds d&apos;abord par email sous 24h, puis on s&apos;appelle si besoin pour approfondir.
            À très vite !
          </p>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fadeUp">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              {contactData.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-light">
              {contactData.intro}
            </p>
          </div>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.1}>
          <div className="mb-12 grid gap-4 sm:grid-cols-5">
          {contactData.steps.map((step, i) => (
            <div key={i} className="text-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="mt-2 text-xs leading-snug text-text-muted">
                {step}
              </p>
            </div>
          ))}
        </div>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.2}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-2xl space-y-6 rounded-3xl border border-border bg-white p-8 shadow-sm sm:p-10"
          noValidate
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-text">Nom & Prénom *</span>
              <input {...register("name")} placeholder="Marie Laurent" className={inputClass} />
              {errors.name?.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.name.message}</p>}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-text">Email *</span>
              <input {...register("email")} type="email" placeholder="marie@entreprise.fr" className={inputClass} />
              {errors.email?.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.email.message}</p>}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-text">Téléphone</span>
              <input {...register("phone")} type="tel" placeholder="06 12 34 56 78" className={inputClass} />
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-text">Type de projet *</span>
              <select {...register("projectType")} className={inputClass}>
                <option value="">— Choisissez —</option>
                {contactData.projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.projectType?.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.projectType.message}</p>}
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-text">Budget estimé *</span>
              <select {...register("budget")} className={inputClass}>
                <option value="">— Choisissez —</option>
                {contactData.budgets.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
              {errors.budget?.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.budget.message}</p>}
            </label>
          </div>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-text">Parlez-moi de votre projet *</span>
            <textarea {...register("description")} rows={5} placeholder="Qui êtes-vous ? Quels sont vos objectifs ?" className={inputClass} />
            {errors.description?.message && <p className="mt-1 text-xs text-red-500" role="alert">{errors.description.message}</p>}
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-text">Comment m&apos;avez-vous trouvé ?</span>
            <select {...register("source")} className={inputClass}>
              <option value="">— Choisissez —</option>
              {contactData.sources.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>

          {error && <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</p>}

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? <><Loader2 size={16} className="animate-spin" /> Envoi en cours…</> : <><Send size={16} /> Recevoir mon devis gratuit</>}
          </Button>

          <p className="text-center text-xs text-text-muted">{contactData.rgpd}</p>
        </form>
        </Reveal>
      </div>
    </section>
  );
}

