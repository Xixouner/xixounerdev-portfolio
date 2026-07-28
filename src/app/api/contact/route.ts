import { NextResponse } from "next/server";
import { Resend } from "resend";

// --- Rate limiting (in-memory, 5 req / 60s / IP) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 60 secondes
const RATE_LIMIT_MAX = 5;

function getClientIP(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  // Skip rate limiting in test environment
  if (process.env.NODE_ENV === "test" || process.env.VITEST) return { allowed: true };

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count++;
  return { allowed: true };
}

// Nettoie la map toutes les 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(ip);
  }
}, 300_000);

export async function POST(request: Request) {
  try {
    // Rate limit
    const ip = getClientIP(request);
    const { allowed, retryAfter } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: `Trop de requêtes. Réessayez dans ${retryAfter} secondes.` },
        { status: 429, headers: retryAfter ? { "Retry-After": String(retryAfter) } : {} }
      );
    }

    const body = await request.json();
    const { name, email, projectType, budget, description, source, website, rgpdConsent } = body;

    // --- Honeypot check ---
    if (website && String(website).trim().length > 0) {
      // Champ honeypot rempli → bot détecté (on répond 200 pour ne pas alerter le bot)
      console.warn("Honeypot déclenché — soumission ignorée (IP:", ip, ")");
      return NextResponse.json({ success: true });
    }

    // --- RGPD consent check ---
    if (rgpdConsent !== true) {
      return NextResponse.json(
        { error: "Vous devez accepter la politique de confidentialité." },
        { status: 400 }
      );
    }

    // Validation basique serveur
    if (!name || !email || !projectType || !budget || !description) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires sont requis." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.warn("RESEND_API_KEY non configurée — requête loguée uniquement.");
      console.log("Nouveau lead:", { name, email, projectType, budget, description, source });
      return NextResponse.json({ success: true, mode: "log-only" });
    }

    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "XixounerDev <contact@xixouner.com>",
      to: process.env.CONTACT_EMAIL ?? "alexistrechot@gmail.com",
      subject: `Nouveau devis — ${projectType} — ${name}`,
      replyTo: email,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        `Type de projet : ${projectType}`,
        `Budget : ${budget}`,
        `Source : ${source ?? "Non renseigné"}`,
        ``,
        `Description :`,
        description,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur route contact:", err);
    return NextResponse.json(
      { error: "Erreur interne. Réessayez ou contactez-moi par email." },
      { status: 500 }
    );
  }
}
