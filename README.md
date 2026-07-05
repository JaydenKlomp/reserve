# ReServe — reservepadel.nl

One-pager voor ReServe: gebruikte padelballen en kokers een tweede leven geven.
Gebouwd met Next.js (App Router) + Tailwind CSS v4, gehost op Vercel.

## Lokaal draaien

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # productie-build ter controle
```

## Deployen naar Vercel

1. Push deze repo naar GitHub (of gebruik `npx vercel` direct vanuit deze map).
2. Importeer het project in Vercel — framework wordt automatisch herkend, geen extra instellingen nodig.
3. Zet de environment variables (zie `.env.example`):
   - `RESEND_API_KEY` — API-key van [Resend](https://resend.com) voor het contactformulier.
   - `CONTACT_TO` — optioneel, default `info@reservepadel.nl`.
   - `CONTACT_FROM` — optioneel; zolang reservepadel.nl nog niet bij Resend geverifieerd is wordt `onboarding@resend.dev` gebruikt.
4. Domein: voeg `reservepadel.nl` toe onder Project → Settings → Domains, en zet bij TransIP de DNS om (A-record naar `76.76.21.21` of CNAME `cname.vercel-dns.com` voor www).

**Zonder `RESEND_API_KEY` blijft het formulier gewoon werken** — aanvragen verschijnen dan alleen in de Vercel-functielogs in plaats van in de mailbox. Zet de key er dus zo snel mogelijk in.

## Assets vervangen (placeholders)

| Placeholder | Waar | Vervangen door |
|---|---|---|
| Vat-illustratie | `src/components/VatVisual.tsx` | Echte foto van het vat: zet die in `public/` en render een `<Image>` in `Hero.tsx` |
| Logo (tekst "ReServe") | `src/components/Header.tsx` en `Footer.tsx` | `<Image src="/logo.svg" />` |
| Accentkleur `#D4FF00` | `src/app/globals.css` → `--brand-accent` | Definitieve hexcode (één regel aanpassen) |
| Instagram/LinkedIn-links | `src/content/site.ts` → `socials` | Echte handles |
| Impact-cijfers | `src/content/site.ts` → `impact.counters` | Echte aantallen zodra de pilot loopt |

## Structuur (met oog op fase 2)

- **Alle content** staat in `src/content/site.ts` — componenten lezen alleen uit die structuur. In fase 2 kan dit bestand vervangen worden door een headless CMS (bijv. Sanity) zonder de componenten te herschrijven.
- **Secties** zijn losse componenten in `src/components/` en kunnen later hergebruikt worden op losse pagina's (Voor clubs, Voor merken, etc.).
- **Contactformulier**: `src/app/api/contact/route.ts` — stuurt een notificatie naar ReServe en (voor clubs) een automatische bevestigingsmail.
