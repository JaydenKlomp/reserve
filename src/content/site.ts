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
    instagram: "https://www.instagram.com/joinreserve/",
    linkedin: "https://www.linkedin.com/in/reserve-padel-261338417/",
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
  body: "ReServe zamelt gebruikte padelballen en kokers in bij padelclubs en werkt aan een circulaire route voor hergebruik en recycling. Samen met padelclubs plaatsen wij herkenbare inzamelpunten waar spelers hun gebruikte materialen eenvoudig kunnen inleveren. Zo maken we padel stap voor stap duurzamer.",
};

export const steps = {
  heading: "Hoe het werkt",
  sub: "Van vol vat tot tweede leven in vijf stappen.",
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
      title: "Onderzoek & verwerking",
      body: "ReServe werkt met partners aan de best passende route voor hergebruik of recycling.",
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
    label: "In samenwerking met",
    partners: [
      { name: "The Padellers", city: "Kerkrade" },
      { name: "Arenal", city: "Kerkrade" },
    ],
  },
  // Cijfers volgen zodra de pilot loopt — nu bewust placeholders
  counters: [
    { label: "Ballen ingezameld", value: null },
    { label: "Kokers ingezameld", value: null },
    { label: "Deelnemende clubs", value: 2 },
  ],
};

export const materials = {
  heading: "Wat gebeurt er met de ingezamelde materialen?",
  paragraphs: [
    "Tijdens de pilotfase verzamelt ReServe gebruikte padelballen en kokers bij aangesloten clubs. De materialen worden apart geregistreerd en tijdelijk opgeslagen, zodat we inzicht krijgen in volume, vervuiling en verwerkingsmogelijkheden.",
    "Op basis daarvan werken we aan samenwerkingen met recyclingbedrijven, merken en circulaire partners.",
  ],
};

export const earlyAdopter = {
  heading: "Word één van de eerste ReServe-clubs",
  sub: "Bouw samen met ons aan een duurzamere padelsport.",
  cta: { label: "Word partner", href: "#contact" },
};

export const contact = {
  heading: "Contact",
  sub: "Ben je een padelclub, merk of potentiële partner? Laat je gegevens achter en we nemen snel contact met je op.",
  club: {
    label: "Ik ben een club",
    intro:
      "Maak duurzaamheid zichtbaar op jouw club met een herkenbaar inzamelpunt voor gebruikte padelballen en kokers.",
  },
  brand: {
    label: "Ik ben een merk",
    intro: "Werk samen aan zichtbare circulariteit binnen de padelsport.",
  },
  processor: {
    label: "Ik ben een verwerker",
    intro:
      "Denk mee over de verwerking of herbestemming van gebruikte padelballen en kunststof kokers uit de padelbranche.",
  },
};
