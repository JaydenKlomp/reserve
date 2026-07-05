import Image from "next/image";

/**
 * Het ReServe-inzamelvat, opgebouwd uit de echte wrap-panelen
 * (public/brand/*.png, geëxporteerd uit de aangeleverde ontwerp-SVG's).
 */
export default function VatVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Gloed achter het vat */}
      <div className="absolute -inset-10 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        role="img"
        aria-label="ReServe-inzamelvat voor gebruikte padelballen en kokers"
      >
        {/* Metalen rand met spansluiting */}
        <div className="h-5 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600" />
        <div className="h-1.5 bg-zinc-900" />

        {/* Band 1: logo */}
        <div className="flex items-center justify-center bg-[#0d0d0d] px-8 py-8">
          <Image
            src="/brand/logo.png"
            alt=""
            width={900}
            height={420}
            priority
            className="h-auto w-4/5"
          />
        </div>

        {/* Rolrand */}
        <div className="h-2 bg-gradient-to-b from-black via-zinc-700 to-black" />

        {/* Band 2: padelballen & kokers */}
        <div className="flex items-center justify-center bg-[#0d0d0d] px-8 py-8">
          <Image
            src="/brand/band-midden.png"
            alt=""
            width={900}
            height={391}
            priority
            className="h-auto w-4/5"
          />
        </div>

        {/* Rolrand */}
        <div className="h-2 bg-gradient-to-b from-black via-zinc-700 to-black" />

        {/* Band 3: lime slogan-band (full-bleed) */}
        <Image
          src="/brand/band-onder.png"
          alt=""
          width={900}
          height={440}
          priority
          className="h-auto w-full"
        />

        {/* Cilinder-schaduw voor een rond effect */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-black/45 via-transparent to-black/45"
          aria-hidden
        />
      </div>
    </div>
  );
}
