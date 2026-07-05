import { impact } from "@/content/site";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section id="impact" className="bg-paper-soft scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-muted">
            {impact.heading}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Waarom dit nodig is
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {impact.facts.map((fact, i) => (
            <Reveal key={fact.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-paper p-8">
                <span className="text-4xl" aria-hidden>
                  {fact.icon}
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{fact.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{fact.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-6 rounded-2xl bg-ink p-8 text-white md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                {impact.pilot.label}
              </p>
              <p className="mt-2 text-2xl font-extrabold">
                {impact.pilot.club}, {impact.pilot.city}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 md:mt-0">
              {impact.counters.map((counter) => (
                <div key={counter.label} className="text-center">
                  <p className="text-3xl font-extrabold text-accent">
                    {counter.value ?? "–"}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-dark">
                    {counter.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
