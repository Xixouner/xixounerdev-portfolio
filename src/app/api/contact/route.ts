import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, budget, description, source } = body;

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
