import { describe, it, expect } from "vitest";
import { z } from "zod";

// Réplique du schéma de validation du formulaire (doit matcher contact-form.tsx)
const formSchema = z.object({
  name: z.string().min(2, "Nom requis (min 2 caractères)"),
  email: z.string().email("Email valide requis"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Choisissez un type de projet"),
  budget: z.string().min(1, "Choisissez une fourchette"),
  description: z.string().min(10, "Décrivez votre projet (min 10 caractères)"),
  source: z.string().optional(),
  rgpdConsent: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter la politique de confidentialité." }),
  }),
});

const validData = {
  name: "Marie Laurent",
  email: "marie@entreprise.fr",
  projectType: "Création d'un site web",
  budget: "1 500 € – 3 000 €",
  description: "Je souhaite un site vitrine pour mon cabinet.",
  rgpdConsent: true as const,
};

describe("Formulaire de devis — validation Zod", () => {
  it("accepte des données valides complètes", () => {
    const result = formSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("accepte des données valides sans source", () => {
    const { source: _source, ...withoutSource } = validData;
    const result = formSchema.safeParse(withoutSource);
    expect(result.success).toBe(true);
  });

  it("rejette un nom vide", () => {
    const result = formSchema.safeParse({ ...validData, name: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain("name");
    }
  });

  it("rejette un nom trop court (1 caractère)", () => {
    const result = formSchema.safeParse({ ...validData, name: "A" });
    expect(result.success).toBe(false);
  });

  it("rejette un email invalide", () => {
    const result = formSchema.safeParse({ ...validData, email: "pas-un-email" });
    expect(result.success).toBe(false);
  });

  it("rejette un email vide", () => {
    const result = formSchema.safeParse({ ...validData, email: "" });
    expect(result.success).toBe(false);
  });

  it("rejette un projetType vide", () => {
    const result = formSchema.safeParse({ ...validData, projectType: "" });
    expect(result.success).toBe(false);
  });

  it("rejette un budget vide", () => {
    const result = formSchema.safeParse({ ...validData, budget: "" });
    expect(result.success).toBe(false);
  });

  it("rejette une description trop courte (< 10 caractères)", () => {
    const result = formSchema.safeParse({ ...validData, description: "Court" });
    expect(result.success).toBe(false);
  });

  it("rejette une description vide", () => {
    const result = formSchema.safeParse({ ...validData, description: "" });
    expect(result.success).toBe(false);
  });

  it("accepte la description minimale (10 caractères)", () => {
    const result = formSchema.safeParse({
      ...validData,
      description: "0123456789",
    });
    expect(result.success).toBe(true);
  });

  it("accepte un budget 'Je ne sais pas encore'", () => {
    const result = formSchema.safeParse({
      ...validData,
      budget: "Je ne sais pas encore",
    });
    expect(result.success).toBe(true);
  });

  it("rejette un objet vide", () => {
    const result = formSchema.safeParse({});
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.length).toBeGreaterThanOrEqual(6);
    }
  });

  it("rejette null", () => {
    const result = formSchema.safeParse(null);
    expect(result.success).toBe(false);
  });
});
