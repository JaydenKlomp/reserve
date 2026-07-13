import { hero } from "@/content/site";
import VatShowcase from "./VatShowcase";

export default function Hero() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        <div>
          <p className="mb-4 inline-block rounded-full border border-line-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            {hero.kicker}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Samen maken we padel{" "}
            <span className="text-accent">duurzamer</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark">
            {hero.sub}
          </p>
          {/* Onder 400px passen de knoppen niet naast elkaar: dan gestapeld op volle breedte */}
          <div className="mt-10 flex flex-wrap gap-4 max-[400px]:flex-col">
            <a
              href={hero.ctaPrimary.href}
              className="rounded-full bg-accent px-8 py-4 text-center text-base font-bold text-accent-ink transition-transform hover:scale-105"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="rounded-full border-2 border-white px-8 py-4 text-center text-base font-bold text-white transition-colors hover:border-accent hover:text-accent"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <VatShowcase className="w-64 sm:w-80 lg:w-96" />
        </div>
      </div>
    </section>
  );
}
