import { earlyAdopter } from "@/content/site";
import Reveal from "./Reveal";

export default function EarlyAdopter() {
  return (
    <section className="bg-accent text-accent-ink">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            {earlyAdopter.heading}
          </h2>
          <p className="mt-5 text-lg font-medium">{earlyAdopter.sub}</p>
          <a
            href={earlyAdopter.cta.href}
            className="mt-10 inline-block rounded-full bg-ink px-10 py-4 text-base font-bold text-white transition-transform hover:scale-105"
          >
            {earlyAdopter.cta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
