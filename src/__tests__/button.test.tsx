import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "~/ui/primitives/button";

describe("Button", () => {
  it("affiche le texte du bouton", () => {
    render(<Button>Cliquez ici</Button>);
    expect(screen.getByText("Cliquez ici")).toBeInTheDocument();
  });

  it("applique la classe par défaut (primary, md)", () => {
    render(<Button>Test</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("bg-gradient-to-r");
    expect(btn.className).toContain("h-11");
  });

  it("applique la variante secondary", () => {
    render(<Button variant="secondary">Test</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("border-2");
  });

  it("applique la variante ghost", () => {
    render(<Button variant="ghost">Test</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("text-text-light");
  });

  it("applique la variante outline", () => {
    render(<Button variant="outline">Test</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("border-border");
  });

  it("applique la taille sm", () => {
    render(<Button size="sm">Test</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("h-9");
  });

  it("applique la taille lg", () => {
    render(<Button size="lg">Test</Button>);
    const btn = screen.getByRole("button");
    expect(btn.className).toContain("h-12");
  });

  it("gère le clic", async () => {
    let clicked = false;
    render(<Button onClick={() => (clicked = true)}>Test</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(clicked).toBe(true);
  });

  it("est désactivé quand disabled", () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("ne déclenche pas onClick quand désactivé", async () => {
    let clicked = false;
    render(
      <Button disabled onClick={() => (clicked = true)}>
        Test
      </Button>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(clicked).toBe(false);
  });

  it("supporte le type submit", () => {
    render(<Button type="submit">Envoyer</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("fusionne les classes custom via className", () => {
    render(<Button className="custom-class">Test</Button>);
    expect(screen.getByRole("button").className).toContain("custom-class");
  });

  it("a un attribut data-slot pour Shadcn", () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("data-slot", "button");
  });
});
