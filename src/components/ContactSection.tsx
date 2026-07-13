"use client";

import { useState, type FormEvent } from "react";
import { contact, site } from "@/content/site";

type Audience = "club" | "merk" | "verwerker";
type Status = "idle" | "sending" | "sent" | "error";

const audiences: Array<{ key: Audience; label: string; intro: string }> = [
  { key: "club", label: contact.club.label, intro: contact.club.intro },
  { key: "merk", label: contact.brand.label, intro: contact.brand.intro },
  { key: "verwerker", label: contact.processor.label, intro: contact.processor.intro },
];

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted focus:border-ink focus:outline-none";

export default function ContactSection({
  initialAudience = "club",
  showHeader = true,
}: {
  initialAudience?: Audience;
  showHeader?: boolean;
}) {
  const [audience, setAudience] = useState<Audience>(initialAudience);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: audience, ...data }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function switchAudience(next: Audience) {
    setAudience(next);
    setStatus("idle");
  }

  const active = audiences.find((a) => a.key === audience)!;

  return (
    <section id="contact" className="bg-paper scroll-mt-16">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        {showHeader && (
          <>
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-muted">
              {contact.heading}
            </p>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Doe mee met ReServe
            </h2>
            <p className="mt-4 text-center text-lg text-ink-soft">{contact.sub}</p>
          </>
        )}

        {/* Keuze club / merk / verwerker */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3" role="tablist" aria-label="Kies wie je bent">
          {audiences.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={audience === key}
              onClick={() => switchAudience(key)}
              className={`rounded-full px-6 py-3.5 text-base font-bold transition-colors ${
                audience === key
                  ? "bg-ink text-white"
                  : "border border-line bg-paper text-ink hover:border-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-ink-soft">{active.intro}</p>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl border border-line bg-paper-soft p-8 text-center">
            <p className="text-2xl font-extrabold text-ink">Bedankt! 🎾</p>
            <p className="mt-2 text-ink-soft">
              We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.
              {audience === "club" && " Je ontvangt ook een bevestiging per e-mail."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            {audience === "club" ? (
              <>
                <input name="clubNaam" required placeholder="Naam club" className={inputClass} />
                <input name="contactpersoon" required placeholder="Contactpersoon" className={inputClass} />
                <input name="email" type="email" required placeholder="E-mailadres" className={inputClass} />
                <input name="adres" required placeholder="Adres van de club" className={inputClass} />
              </>
            ) : (
              <>
                <input name="naam" required placeholder="Naam" className={inputClass} />
                <input name="bedrijf" required placeholder="Bedrijf" className={inputClass} />
                <input name="email" type="email" required placeholder="E-mailadres" className={inputClass} />
                <textarea name="bericht" required placeholder="Bericht" rows={4} className={inputClass} />
              </>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-ink transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "sending" ? "Versturen..." : "Verstuur"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm font-medium text-red-600">
                Er ging iets mis bij het versturen. Probeer het opnieuw of mail ons direct via{" "}
                <a href={`mailto:${site.email}`} className="underline">
                  {site.email}
                </a>
                .
              </p>
            )}
          </form>
        )}

        <p className="mt-10 text-center text-ink-soft">
          Liever direct mailen?{" "}
          <a href={`mailto:${site.email}`} className="font-bold underline decoration-accent decoration-2 underline-offset-4">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}
