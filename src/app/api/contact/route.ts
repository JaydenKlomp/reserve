import { NextResponse } from "next/server";
import { site } from "@/content/site";

/**
 * Contactformulier-endpoint.
 *
 * E-mail gaat via Resend (https://resend.com) — zet in Vercel de env-vars:
 *   RESEND_API_KEY  – API-key van Resend
 *   CONTACT_TO      – ontvanger van aanvragen (default: info@reservepadel.nl)
 *   CONTACT_FROM    – afzender; moet een geverifieerd domein zijn.
 *                     Zolang reservepadel.nl nog niet geverifieerd is kun je
 *                     "ReServe <onboarding@resend.dev>" gebruiken.
 *
 * Zonder RESEND_API_KEY wordt de aanvraag alleen gelogd (zichtbaar in de
 * Vercel-logs) zodat het formulier nooit stuk is voor de bezoeker.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type Payload = Record<string, string>;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fieldRows(fields: Array<[label: string, value: string]>) {
  return fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#737373;">${label}</td><td style="padding:4px 0;font-weight:600;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
}

async function sendEmail(apiKey: string, payload: {
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend gaf status ${res.status}: ${body}`);
  }
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag" }, { status: 400 });
  }

  const type = data.type === "merk" ? "merk" : data.type === "club" ? "club" : null;
  if (!type) {
    return NextResponse.json({ error: "Ongeldig type" }, { status: 400 });
  }

  const requiredFields =
    type === "club"
      ? ["clubNaam", "contactpersoon", "email", "adres"]
      : ["naam", "bedrijf", "email", "bericht"];

  for (const field of requiredFields) {
    const value = data[field];
    if (typeof value !== "string" || value.trim() === "" || value.length > 2000) {
      return NextResponse.json({ error: `Veld "${field}" ontbreekt of is ongeldig` }, { status: 400 });
    }
  }

  const email = data.email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ongeldig e-mailadres" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM ?? `ReServe <onboarding@resend.dev>`;

  const rows =
    type === "club"
      ? fieldRows([
          ["Naam club", data.clubNaam],
          ["Contactpersoon", data.contactpersoon],
          ["E-mail", email],
          ["Adres", data.adres],
        ])
      : fieldRows([
          ["Naam", data.naam],
          ["Bedrijf", data.bedrijf],
          ["E-mail", email],
          ["Bericht", data.bericht],
        ]);

  const notificationHtml = `
    <h2>Nieuwe ${type === "club" ? "club" : "merk"}-aanvraag via reservepadel.nl</h2>
    <table style="font-family:sans-serif;font-size:14px;">${rows}</table>
  `;

  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY ontbreekt — aanvraag alleen gelogd:", JSON.stringify(data));
    return NextResponse.json({ ok: true });
  }

  try {
    await sendEmail(apiKey, {
      from,
      to,
      replyTo: email,
      subject: `Nieuwe ${type === "club" ? "club" : "merk"}-aanvraag — ${type === "club" ? data.clubNaam : data.bedrijf}`,
      html: notificationHtml,
    });

    if (type === "club") {
      await sendEmail(apiKey, {
        from,
        to: email,
        subject: "We hebben je aanvraag ontvangen — ReServe",
        html: `
          <div style="font-family:sans-serif;font-size:15px;line-height:1.6;">
            <h2>Bedankt voor je aanvraag, ${escapeHtml(data.contactpersoon)}!</h2>
            <p>We hebben de aanvraag van <strong>${escapeHtml(data.clubNaam)}</strong> goed ontvangen.
            ReServe neemt zo snel mogelijk persoonlijk contact met je op om de plaatsing van een
            inzamelvat te bespreken.</p>
            <p>Samen maken we padel duurzamer. 🎾</p>
            <p>— Team ReServe<br/><a href="mailto:${site.email}">${site.email}</a></p>
          </div>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Versturen mislukt:", error);
    return NextResponse.json({ error: "Versturen mislukt" }, { status: 502 });
  }
}
