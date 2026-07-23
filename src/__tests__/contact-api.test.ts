import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock Resend avant l'import
vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: "msg_123" }),
    },
  })),
}));

import { POST } from "~/app/api/contact/route";

function buildRequest(body: unknown): Request {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const validBody = {
  name: "Marie Laurent",
  email: "marie@entreprise.fr",
  projectType: "Création d'un site web",
  budget: "1 500 € – 3 000 €",
  description: "Je souhaite un site vitrine moderne pour mon activité.",
  source: "Malt",
};

describe("POST /api/contact", () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it("retourne 400 si name manquant", async () => {
    const { name: _name, ...body } = validBody;
    const res = await POST(buildRequest(body));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBeDefined();
  });

  it("retourne 400 si email manquant", async () => {
    const { email: _email, ...body } = validBody;
    const res = await POST(buildRequest(body));
    expect(res.status).toBe(400);
  });

  it("retourne 400 si projectType manquant", async () => {
    const { projectType: _projectType, ...body } = validBody;
    const res = await POST(buildRequest(body));
    expect(res.status).toBe(400);
  });

  it("retourne 400 si budget manquant", async () => {
    const { budget: _budget, ...body } = validBody;
    const res = await POST(buildRequest(body));
    expect(res.status).toBe(400);
  });

  it("retourne 400 si description manquante", async () => {
    const { description: _description, ...body } = validBody;
    const res = await POST(buildRequest(body));
    expect(res.status).toBe(400);
  });

  it("retourne 400 si body vide", async () => {
    const res = await POST(buildRequest({}));
    expect(res.status).toBe(400);
  });

  it("mode log-only quand RESEND_API_KEY est absente", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const res = await POST(buildRequest(validBody));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect(json.mode).toBe("log-only");
  });

  it("appelle Resend quand RESEND_API_KEY est configurée", async () => {
    vi.stubEnv("RESEND_API_KEY", "re_test123");
    vi.stubEnv("CONTACT_EMAIL", "alexistrechot@gmail.com");
    const res = await POST(buildRequest(validBody));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
    expect((json as Record<string, unknown>).mode).toBeUndefined();
  });

  it("accepte source optionnel", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const { source: _source, ...body } = validBody;
    const res = await POST(buildRequest(body));
    expect(res.status).toBe(200);
  });
});
