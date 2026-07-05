# ReServe — reservepadel.nl

One-pager voor ReServe: gebruikte padelballen en kokers een tweede leven geven.
Gebouwd met Next.js (App Router) + Tailwind CSS v4, gehost op Vercel.

## Lokaal draaien

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # productie-build ter controle
```

## Hosting & e-mail

De site draait op Vercel (repo: github.com/JaydenKlomp/reserve, elke push naar `master`
deployt automatisch). Het domein reservepadel.nl staat bij TransIP en wijst via DNS naar Vercel.

Het contactformulier mailt via de **SMTP-server van TransIP** (de info@-mailbox).
Environment variables in Vercel (zie `.env.example`):

- `SMTP_PASS` — wachtwoord van de info@-mailbox (verplicht om te kunnen mailen)
- `SMTP_USER` / `SMTP_HOST` / `SMTP_PORT` — optioneel, defaults: `info@reservepadel.nl` / `smtp.transip.email` / `465`
- `CONTACT_TO` — optioneel, ontvanger van aanvragen (default `info@reservepadel.nl`)

**Zonder `SMTP_PASS` blijft het formulier gewoon werken** — aanvragen verschijnen dan alleen
in de Vercel-functielogs in plaats van in de mailbox.

## Assets

De brand-assets staan in `public/brand/` als PNG's, geëxporteerd (bijgesneden en verkleind)
uit de aangeleverde ontwerp-SVG's ("Boven/Midden/Onder", de wrap-panelen van het vat):

- `logo.png` — ReServe-wordmark met racket (header, footer en bovenste band van het vat)
- `band-midden.png` — "Padelballen & kokers"-paneel (middelste band)
- `band-onder.png` — lime slogan-band (onderste band)

Het vat in de hero (`src/components/VatVisual.tsx`) is met deze panelen opgebouwd.
De accentkleur is definitief: `#B3C524` (in `src/app/globals.css` → `--brand-accent`).

### Nog openstaande placeholders

| Placeholder | Waar | Vervangen door |
|---|---|---|
| Instagram/LinkedIn-links | `src/content/site.ts` → `socials` | Echte handles |
| Impact-cijfers | `src/content/site.ts` → `impact.counters` | Echte aantallen zodra de pilot loopt |
| Favicon | `src/app/favicon.ico` | Icoon-variant van het logo |

## Structuur (met oog op fase 2)

- **Alle content** staat in `src/content/site.ts` — componenten lezen alleen uit die structuur. In fase 2 kan dit bestand vervangen worden door een headless CMS (bijv. Sanity) zonder de componenten te herschrijven.
- **Secties** zijn losse componenten in `src/components/` en kunnen later hergebruikt worden op losse pagina's (Voor clubs, Voor merken, etc.).
- **Contactformulier**: `src/app/api/contact/route.ts` — stuurt een notificatie naar ReServe en (voor clubs) een automatische bevestigingsmail.
