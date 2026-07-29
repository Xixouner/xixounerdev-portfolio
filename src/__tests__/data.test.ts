import { describe, it, expect } from "vitest";
import { siteData } from "~/lib/data";
import { contactData, footerData, navLinks } from "~/lib/data-contact";

describe("Données du site", () => {
  describe("siteData", () => {
    it("contient toutes les sections requises", () => {
      expect(siteData).toHaveProperty("hero");
      expect(siteData).toHaveProperty("difference");
      expect(siteData).toHaveProperty("portfolio");
      expect(siteData).toHaveProperty("services");
    });

    it("hero a un titre, sous-titre, 2 CTAs, et 3 réassurances", () => {
      const h = siteData.hero;
      expect(h.title.length).toBeGreaterThan(5);
      expect(h.subtitle.length).toBeGreaterThan(10);
      expect(h.ctaPrimary.length).toBeGreaterThan(0);
      expect(h.ctaSecondary.length).toBeGreaterThan(0);
      expect(h.reassurances).toHaveLength(3);
    });

    it("difference a exactement 4 cartes", () => {
      expect(siteData.difference.cards).toHaveLength(4);
    });

    it("chaque carte difference a un icon, title, body, highlight", () => {
      for (const card of siteData.difference.cards) {
        expect(card.icon.length).toBeGreaterThan(0);
        expect(card.title.length).toBeGreaterThan(0);
        expect(card.body.length).toBeGreaterThan(0);
        expect(card.highlight.length).toBeGreaterThan(0);
      }
    });

    it("portfolio a des projets avec des URLs valides", () => {
      const projects = siteData.portfolio.projects;
      expect(projects.length).toBeGreaterThanOrEqual(3);
      const firstUrl = projects[0].url;
      expect(firstUrl).toMatch(/^https?:\/\//);
      expect(firstUrl).toContain("lesacacias.org");
    });

    it("chaque projet portfolio a les champs requis", () => {
      for (const project of siteData.portfolio.projects) {
        expect(project.badge.length).toBeGreaterThan(0);
        expect(project.name.length).toBeGreaterThan(0);
        expect(project.context.length).toBeGreaterThan(0);
        expect(project.solution.length).toBeGreaterThan(0);
        expect(project.results.length).toBeGreaterThan(0);
      }
    });

    it("les projets publics ont une URL valide", () => {
      const publicProjects = siteData.portfolio.projects.filter((p) => p.url);
      expect(publicProjects.length).toBeGreaterThanOrEqual(2);
      for (const project of publicProjects) {
        expect(project.url).toBeTruthy();
        expect(project.url).toMatch(/^https?:\/\//);
      }
    });

    it("services a exactement 3 cartes", () => {
      expect(siteData.services.cards).toHaveLength(3);
    });

    it("chaque service a un prix commençant par 'À partir de'", () => {
      for (const card of siteData.services.cards) {
        expect(card.price).toMatch(/^À partir de/);
      }
    });

    it("chaque service a exactement 5 bullets", () => {
      for (const card of siteData.services.cards) {
        expect(card.bullets).toHaveLength(5);
      }
    });
  });

  describe("contactData", () => {
    it("a 5 étapes", () => {
      expect(contactData.steps).toHaveLength(5);
    });

    it("a 5 types de projet", () => {
      expect(contactData.projectTypes).toHaveLength(5);
    });

    it("a 6 options de budget", () => {
      expect(contactData.budgets).toHaveLength(6);
    });

    it("a 5 sources de découverte", () => {
      expect(contactData.sources).toHaveLength(5);
    });

    it("a une mention RGPD non vide", () => {
      expect(contactData.rgpd.length).toBeGreaterThan(10);
    });
  });

  describe("footerData", () => {
    it("contient toutes les infos obligatoires", () => {
      expect(footerData.email).toContain("@");
      expect(footerData.siret.replace(/\s/g, "")).toHaveLength(14);
      expect(footerData.malt).toContain("malt.fr");
      expect(footerData.linkedin).toContain("linkedin.com");
      expect(footerData.github).toContain("github.com");
      expect(footerData.location).toContain("Clermont-Ferrand");
    });
  });

  describe("navLinks", () => {
    it("a 6 liens de navigation", () => {
      expect(navLinks).toHaveLength(6);
    });

    it("tous les href sont valides (ancre ou chemin)", () => {
      for (const link of navLinks) {
        expect(link.href).toMatch(/^(#|\/)/);
      }
    });

    it("les liens Réalisations et Services pointent vers des pages dédiées", () => {
      const realisations = navLinks.find((l) => l.label === "Réalisations");
      const services = navLinks.find((l) => l.label === "Services");
      expect(realisations?.href).toBe("/realisations");
      expect(services?.href).toBe("/services");
    });

    it("chaque lien a un label non vide", () => {
      for (const link of navLinks) {
        expect(link.label.length).toBeGreaterThan(0);
      }
    });
  });
});
