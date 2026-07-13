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

export const nav = [
  { label: "Hoe het werkt", href: "/hoe-het-werkt" },
  { label: "Voor clubs", href: "/voor-clubs" },
  { label: "Voor merken", href: "/voor-merken" },
  { label: "Pilot", href: "/pilot" },
  { label: "Over ReServe", href: "/over-reserve" },
  { label: "Contact", href: "/contact" },
];

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
  // body = korte versie (kaarten), detail = extra uitleg (alleen op /hoe-het-werkt)
  items: [
    {
      title: "Vat op locatie",
      body: "De club ontvangt een ReServe-inzamelvat op een zichtbare plek.",
      detail:
        "We stemmen samen een goede plek af — bij de banen, de bar of de entree. Het vat is direct herkenbaar en meteen klaar voor gebruik.",
    },
    {
      title: "Spelers leveren in",
      body: "Spelers leveren gebruikte padelballen en kokers eenvoudig in.",
      detail:
        "Geen gedoe: gebruikte ballen en lege kokers gaan door de inworpopening. De communicatie richting leden pakken we samen met de club op.",
    },
    {
      title: "Ophaalmoment",
      body: "Zodra het vat vol is, plant ReServe een ophaalmoment.",
      detail:
        "De club geeft een seintje of we plannen het periodiek in. ReServe komt langs en leegt of wisselt het vat — de club heeft er geen werk aan.",
    },
    {
      title: "Onderzoek & verwerking",
      body: "ReServe werkt met partners aan de best passende route voor hergebruik of recycling.",
      detail:
        "Ingezameld materiaal wordt geregistreerd en opgeslagen. Samen met partners onderzoeken we per stroom welke route voor hergebruik of recycling het beste past.",
    },
    {
      title: "Zichtbare impact",
      body: "De club draagt zichtbaar bij aan een circulaire padelsport.",
      detail:
        "Wat jouw club inzamelt telt mee in de cijfers en in het verhaal richting leden, bezoekers en partners.",
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
  cta: { label: "Word partner", href: "/contact" },
};

export const howItWorksPage = {
  title: "Hoe het werkt",
  description:
    "Zo werkt inzamelen met ReServe: van een inzamelvat op jouw club tot onderzoek naar de beste route voor hergebruik en recycling.",
  kicker: "Stappenplan",
  heading: "Hoe het werkt",
  intro:
    "Van gebruikte bal tot mogelijke nieuwe grondstof: zo werkt inzamelen met ReServe, stap voor stap.",
  cta: {
    heading: "Klaar om in te zamelen op jouw club?",
    sub: "Bekijk wat ReServe voor jouw club betekent en wat het van je vraagt.",
    label: "Voor clubs",
    href: "/voor-clubs",
  },
};

export const clubsPage = {
  title: "Voor clubs",
  description:
    "Plaats een ReServe-inzamelvat bij jouw padelclub en maak duurzaamheid zichtbaar voor leden en bezoekers.",
  kicker: "Voor clubs",
  heading: "Maak duurzaamheid zichtbaar op jouw club",
  intro:
    "Met een herkenbaar ReServe-inzamelpunt voor gebruikte padelballen en kokers laat jouw club zien dat duurzaamheid meer is dan een woord.",
  benefits: [
    {
      title: "Zichtbaar duurzaam",
      body: "Het ReServe-vat staat op een zichtbare plek en laat leden en bezoekers direct zien dat jouw club werk maakt van duurzaamheid.",
    },
    {
      title: "Geen omkijken",
      body: "ReServe levert het vat, plant de ophaalmomenten en registreert wat er wordt ingezameld. Jouw club hoeft er niets extra's voor te doen.",
    },
    {
      title: "Vooroplopen",
      body: "Als één van de eerste ReServe-clubs bouw je mee aan een circulaire padelsport — een verhaal dat je als club mag uitdragen.",
    },
  ],
  process: {
    heading: "Wat vraagt het van jouw club?",
    sub: "Weinig — dat is precies het idee.",
    items: [
      {
        title: "Een zichtbare plek",
        body: "Meer dan een goede plek voor het vat is er niet nodig: bij de bar, de entree of de banen.",
      },
      {
        title: "Samen communiceren",
        body: "We denken mee over hoe je leden informeert; de club deelt het via de eigen kanalen.",
      },
      {
        title: "Wij doen de rest",
        body: "Leveren, ophalen, registreren en het vervolgtraject — daar heeft de club geen omkijken naar.",
      },
    ],
  },
  faq: {
    heading: "Veelgestelde vragen",
    items: [
      {
        question: "Wat mag er in het vat?",
        answer:
          "Gebruikte padelballen en lege kunststof kokers. Ander afval hoort er niet in — zo houden we de stroom schoon voor hergebruik en recycling.",
      },
      {
        question: "Wie leegt het vat?",
        answer: "ReServe. Zodra het vat vol raakt, plannen we samen een ophaalmoment.",
      },
      {
        question: "Wat kost het onze club?",
        answer:
          "Daar maken we samen afspraken over. Neem contact op en we bespreken wat past bij jouw club.",
      },
      {
        question: "Wat levert het onze club op?",
        answer:
          "Een zichtbare duurzame stap richting leden en bezoekers, en een verhaal dat je als club mag uitdragen — inclusief cijfers over wat er is ingezameld.",
      },
    ],
  },
  cta: {
    heading: "Plaats een ReServe-vat op jouw club",
    sub: "Sluit je aan bij The Padellers en Arenal — en loop voorop in een duurzamere padelsport.",
    label: "Vul het formulier in",
    href: "#contact",
  },
};

export const brandsPage = {
  title: "Voor merken",
  description:
    "Werk als merk of sponsor samen met ReServe aan zichtbare circulariteit binnen de padelsport.",
  kicker: "Voor merken",
  heading: "Werk samen aan zichtbare circulariteit",
  intro:
    "Padel groeit hard — en de afvalstroom groeit mee. ReServe biedt merken een geloofwaardige plek in het duurzame verhaal van de sport.",
  offers: [
    {
      title: "Zichtbaarheid op locatie",
      body: "De inzamelvaten staan op zichtbare plekken bij padelclubs. Een plek waar jouw merk onderdeel kan zijn van het circulaire verhaal.",
    },
    {
      title: "Circulaire samenwerking",
      body: "Denk mee over hergebruik en herbestemming van ballen en kokers, en verbind jouw merk aan concrete uitkomsten.",
    },
    {
      title: "Samen groeien",
      body: "ReServe staat aan het begin van de groei. Partners van het eerste uur groeien mee met elke club die aansluit.",
    },
  ],
  note: "De sponsorpakketten worden op dit moment vormgegeven. Interesse? Laat je gegevens achter, dan plannen we een gesprek en denken we samen na over een passende invulling.",
};

export const aboutPage = {
  title: "Over ReServe",
  description:
    "ReServe is een initiatief van Délan Klomp dat gebruikte padelballen en kokers inzamelt bij padelclubs en werkt aan een circulaire route voor hergebruik en recycling.",
  kicker: "Over ReServe",
  heading: "Waarom ReServe bestaat",
  paragraphs: [
    "Padel is de snelst groeiende sport van Nederland — en elke wedstrijd, training en toernooi laat hetzelfde achter: gebruikte ballen en lege kokers. Jaarlijks verdwijnen er honderdduizenden padelballen in het restafval.",
    "ReServe, een initiatief van Délan Klomp, wil die stroom zichtbaar maken én verminderen. Samen met padelclubs plaatsen we herkenbare inzamelpunten waar spelers hun gebruikte ballen en kokers eenvoudig kwijt kunnen.",
    "We staan bewust aan het begin: tijdens de pilotfase onderzoeken we hoeveel er binnenkomt, in welke staat, en welke routes voor hergebruik en recycling het beste passen. Die kennis delen we met clubs, merken en verwerkers die mee willen bouwen aan een circulaire padelsport.",
  ],
  cta: {
    heading: "Kennismaken of meedenken?",
    sub: "Of je nu een club, merk of verwerker bent — we horen graag van je.",
    label: "Neem contact op",
    href: "/contact",
  },
};

export const pilotPage = {
  title: "Pilot",
  description:
    "In juli 2026 startte ReServe een pilot in Kerkrade, samen met The Padellers en Arenal. Dit is wat we doen en meten.",
  kicker: "Pilot",
  heading: "De pilot in Kerkrade",
  intro:
    "In juli 2026 startte ReServe een pilot bij The Padellers en Arenal in Kerkrade. Hier staan de eerste inzamelvaten, en hier leren we wat er nodig is om padel circulair te maken.",
  goals: [
    "Hoeveel ballen en kokers komen er binnen, en hoe snel?",
    "In welke staat zijn de materialen — en wat betekent dat voor hergebruik of recycling?",
    "Wat werkt er in de praktijk voor clubs en spelers?",
  ],
  timeline: [
    {
      period: "Juli 2026",
      title: "Start van de pilot",
      body: "De eerste inzamelvaten staan bij The Padellers en Arenal in Kerkrade.",
    },
    {
      period: "Zomer 2026",
      title: "Inzamelen & meten",
      body: "We volgen hoe snel de vaten vullen en registreren het volume en de staat van de materialen.",
    },
    {
      period: "Najaar 2026",
      title: "Evalueren & opschalen",
      body: "Op basis van de resultaten bepalen we samen met partners de verwerkingsroute en openen we voor meer clubs.",
    },
  ],
  photosNote: "Foto's van de vaten op locatie volgen binnenkort.",
  cta: {
    heading: "Wil jouw club meedoen met het vervolg?",
    sub: "Na de pilotfase sluiten we nieuwe clubs aan. Meld je interesse alvast.",
    label: "Word partner",
    href: "/contact",
  },
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
