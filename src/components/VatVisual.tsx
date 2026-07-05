/**
 * Placeholder-weergave van het ReServe-inzamelvat.
 * Vervang dit door een echte foto (of het 3D-model) zodra die beschikbaar is:
 * zet de foto in /public en render hier een <Image /> in plaats van de SVG.
 */
export default function VatVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 480"
      className={className}
      role="img"
      aria-label="ReServe-inzamelvat voor gebruikte padelballen en kokers"
    >
      {/* Gloed achter het vat */}
      <ellipse cx="180" cy="250" rx="170" ry="200" fill="var(--brand-accent)" opacity="0.08" />

      {/* Romp */}
      <rect x="80" y="90" width="200" height="330" rx="18" fill="#171717" />
      <rect x="80" y="90" width="200" height="330" rx="18" fill="none" stroke="#2e2e2e" strokeWidth="2" />

      {/* Deksel */}
      <rect x="68" y="60" width="224" height="46" rx="14" fill="var(--brand-accent)" />
      {/* Inworpsleuf */}
      <rect x="120" y="76" width="120" height="14" rx="7" fill="var(--brand-accent-ink)" />

      {/* Banden */}
      <rect x="80" y="180" width="200" height="4" fill="#2e2e2e" />
      <rect x="80" y="330" width="200" height="4" fill="#2e2e2e" />

      {/* Wordmark */}
      <text
        x="180"
        y="272"
        textAnchor="middle"
        fill="var(--brand-accent)"
        fontFamily="var(--font-archivo), sans-serif"
        fontWeight="800"
        fontSize="40"
        letterSpacing="1"
      >
        ReServe
      </text>
      <text
        x="180"
        y="300"
        textAnchor="middle"
        fill="#a3a3a3"
        fontFamily="var(--font-archivo), sans-serif"
        fontWeight="500"
        fontSize="13"
        letterSpacing="3"
      >
        BALLEN &amp; KOKERS
      </text>

      {/* Padelballen bij de voet */}
      <g>
        <circle cx="60" cy="440" r="20" fill="var(--brand-accent)" />
        <path d="M42 432 q18 8 36 0" stroke="var(--brand-accent-ink)" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M42 448 q18 -8 36 0" stroke="var(--brand-accent-ink)" strokeWidth="2" fill="none" opacity="0.5" />
      </g>
      <g>
        <circle cx="305" cy="445" r="15" fill="var(--brand-accent)" opacity="0.85" />
        <path d="M292 439 q13 6 26 0" stroke="var(--brand-accent-ink)" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M292 451 q13 -6 26 0" stroke="var(--brand-accent-ink)" strokeWidth="1.5" fill="none" opacity="0.5" />
      </g>

      {/* Schaduw */}
      <ellipse cx="180" cy="446" rx="120" ry="14" fill="#000" opacity="0.35" />
    </svg>
  );
}
