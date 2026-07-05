/**
 * Alle sitecontent op één plek. In fase 2 kan dit bestand vervangen worden
 * door een headless CMS (bijv. Sanity) — de componenten lezen alleen uit
 * deze structuur en hoeven dan niet te veranderen.
 */

export const site = {
  name: "ReServe",
  domain: "https://reservepadel.nl",
  tagline: "Samen maken we padel duurzamer.",
  description:
    "ReServe geeft gebruikte padelballen en kokers een tweede leven. Padelclubs plaatsen een ReServe-inzamelvat, spelers leveren hun gebruikte materialen in en ReServe verwerkt alles duurzaam.",
  email: "info@reservepadel.nl",
  socials: {
    // Handles/links volgen nog — placeholders
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

export const hero = {
  kicker: "Circulair initiatief voor padel",
  tagline: "Samen maken we padel duurzamer.",
  sub: "ReServe geeft gebruikte padelballen en kokers een tweede leven. Plaats een inzamelvat bij jouw club en draag zichtbaar bij aan een circulaire padelsport.",
  ctaPrimary: { label: "Word partner", href: "#contact" },
  ctaSecondary: { label: "Samenwerken", href: "#contact" },
};

export const concept = {
  heading: "Het concept",
  body: "ReServe geeft gebruikte padelballen én kokers een tweede leven. Samen met padelclubs plaatsen wij herkenbare inzamelpunten waar spelers hun gebruikte materialen eenvoudig kunnen inleveren. Vervolgens zorgen wij ervoor dat deze materialen worden ingezameld en verwerkt voor hergebruik of recycling. Zo maken we padel stap voor stap duurzamer.",
};

export const steps = {
  heading: "Hoe het werkt",
  sub: "Van vol vat tot tweede leven — in vijf stappen.",
  items: [
    {
      title: "Vat op locatie",
      body: "De club ontvangt een ReServe-inzamelvat op een zichtbare plek.",
    },
    {
      title: "Spelers leveren in",
      body: "Spelers leveren gebruikte padelballen en kokers eenvoudig in.",
    },
    {
      title: "Ophaalmoment",
      body: "Zodra het vat vol is, plant ReServe een ophaalmoment.",
    },
    {
      title: "Duurzame verwerking",
      body: "ReServe verwerkt de materialen voor hergebruik of recycling.",
    },
    {
      title: "Zichtbare impact",
      body: "De club draagt zichtbaar bij aan een circulaire padelsport.",
    },
  ],
};

export const impact = {
  heading: "Impact",
  facts: [
    {
      icon: "🎾",
      title: "Honderdduizenden ballen",
      body: "Jaarlijks worden honderdduizenden padelballen weggegooid in Nederland.",
    },
    {
      icon: "♻️",
      title: "Zichtbaar minder afval",
      body: "ReServe wil deze afvalstroom zichtbaar en meetbaar verminderen.",
    },
  ],
  pilot: {
    label: "Pilot gestart bij",
    club: "The Padellers",
    city: "Kerkrade",
  },
  // Cijfers volgen zodra de pilot loopt — nu bewust placeholders
  counters: [
    { label: "Ballen ingezameld", value: null },
    { label: "Kokers ingezameld", value: null },
    { label: "Deelnemende clubs", value: 1 },
  ],
};

export const earlyAdopter = {
  heading: "Word één van de eerste ReServe-clubs",
  sub: "Bouw samen met ons aan een duurzamere padelsport.",
  cta: { label: "Word partner", href: "#contact" },
};

export const contact = {
  heading: "Contact",
  sub: "Word partner of laten we samenwerken — we nemen snel contact op.",
  club: {
    label: "Ik ben een club",
    intro: "Plaats een ReServe-vat bij jouw club. Vul je gegevens in en we nemen contact op.",
  },
  brand: {
    label: "Ik ben een merk",
    intro: "Ondersteun ReServe als merk of sponsor. Laat je gegevens achter en we plannen een gesprek.",
  },
};
