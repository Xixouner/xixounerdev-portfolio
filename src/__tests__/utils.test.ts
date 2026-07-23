import { describe, it, expect } from "vitest";
import { cn } from "~/lib/utils";

describe("cn() — utilitaire de fusion de classes", () => {
  it("retourne une string vide sans argument", () => {
    expect(cn()).toBe("");
  });

  it("retourne la classe unique", () => {
    expect(cn("text-red-500")).toBe("text-red-500");
  });

  it("fusionne plusieurs classes", () => {
    expect(cn("text-red-500", "bg-blue-500")).toBe(
      "text-red-500 bg-blue-500"
    );
  });

  it("gère les conditionnels falsy", () => {
    expect(cn("base", false && "hidden", undefined, null, "")).toBe("base");
  });

  it("gère les conditionnels truthy", () => {
    expect(cn("base", true && "active")).toBe("base active");
  });

  it("merge les conflits Tailwind (dernière classe gagne)", () => {
    const result = cn("px-4", "px-6");
    expect(result).toBe("px-6");
    expect(result).not.toContain("px-4");
  });

  it("merge les conflits de couleur", () => {
    const result = cn("text-red-500", "text-blue-500");
    expect(result).toBe("text-blue-500");
  });

  it("gère un mélange complexe", () => {
    const result = cn(
      "text-sm",
      false && "hidden",
      "font-bold",
      undefined,
      "text-lg"
    );
    expect(result).toBe("font-bold text-lg");
  });
});
