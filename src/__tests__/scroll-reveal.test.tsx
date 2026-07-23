import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reveal, RevealStagger, RevealItem } from "~/components/scroll-reveal";

// Mock framer-motion pour tests unitaires
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: Record<string, unknown>) => (
      <div data-motion="true" {...props}>
        {children as React.ReactNode}
      </div>
    ),
  },
  useReducedMotion: vi.fn(() => false),
}));

import { useReducedMotion } from "framer-motion";

describe("Reveal", () => {
  it("affiche les enfants", () => {
    render(
      <Reveal>
        <p data-testid="content">Visible</p>
      </Reveal>
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  it("utilise motion.div par défaut (pas de reduced motion)", () => {
    vi.mocked(useReducedMotion).mockReturnValue(false);
    render(<Reveal><span data-testid="el">Test</span></Reveal>);
    const wrapper = screen.getByTestId("el").parentElement;
    expect(wrapper?.getAttribute("data-motion")).toBe("true");
  });

  it("fallback sur div simple quand prefers-reduced-motion", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    render(<Reveal><span data-testid="el">Test</span></Reveal>);
    const wrapper = screen.getByTestId("el").parentElement;
    expect(wrapper?.getAttribute("data-motion")).toBeNull();
  });

  it("accepte la variante fadeUp", () => {
    render(<Reveal variant="fadeUp"><span>OK</span></Reveal>);
    expect(screen.getByText("OK")).toBeInTheDocument();
  });

  it("accepte la variante scaleIn", () => {
    render(<Reveal variant="scaleIn"><span>OK</span></Reveal>);
    expect(screen.getByText("OK")).toBeInTheDocument();
  });

  it("accepte la variante fadeIn", () => {
    render(<Reveal variant="fadeIn"><span>OK</span></Reveal>);
    expect(screen.getByText("OK")).toBeInTheDocument();
  });

  it("passe className au wrapper", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    render(<Reveal className="my-custom"><span>OK</span></Reveal>);
    const wrapper = screen.getByText("OK").parentElement;
    expect(wrapper?.className).toContain("my-custom");
  });
});

describe("RevealStagger + RevealItem", () => {
  it("affiche les enfants dans un stagger", () => {
    render(
      <RevealStagger>
        <RevealItem><span data-testid="a">A</span></RevealItem>
        <RevealItem><span data-testid="b">B</span></RevealItem>
      </RevealStagger>
    );
    expect(screen.getByTestId("a")).toBeInTheDocument();
    expect(screen.getByTestId("b")).toBeInTheDocument();
  });

  it("fallback quand reduced motion", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    render(
      <RevealStagger className="grid">
        <RevealItem><span>A</span></RevealItem>
      </RevealStagger>
    );
    const wrapper = screen.getByText("A").parentElement?.parentElement;
    expect(wrapper?.className).toContain("grid");
    expect(wrapper?.getAttribute("data-motion")).toBeNull();
  });
});
