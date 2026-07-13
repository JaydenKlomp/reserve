import Link from "next/link";
import { steps } from "@/content/site";
import Reveal from "./Reveal";

/**
 * Stappenplan in twee varianten:
 * - compact (homepage): alleen nummers + titels, met link naar /hoe-het-werkt
 * - detailed (/hoe-het-werkt): volledige kaarten met extra uitleg per stap
 */
export default function HowItWorks({ variant = "compact" }: { variant?: "compact" | "detailed" }) {
  if (variant === "compact") {
    return (
      <section id="hoe-het-werkt" className="bg-ink text-white scroll-mt-16">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              Stappenplan
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{steps.heading}</h2>
            <p className="mt-4 max-w-xl text-lg text-muted-dark">{steps.sub}</p>
          </Reveal>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.items.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <li className="flex h-full items-center gap-4 rounded-2xl border border-line-dark bg-ink-soft px-5 py-4 lg:flex-col lg:items-start lg:gap-3">
                  <span className="text-2xl font-extrabold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold">{step.title}</h3>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={400}>
            <Link
              href="/hoe-het-werkt"
              className="mt-10 inline-block font-bold text-white underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              Bekijk het volledige stappenplan
            </Link>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="hoe-het-werkt" className="bg-ink text-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="h-full rounded-2xl border border-line-dark bg-ink-soft p-8">
                <span className="text-3xl font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-xl font-bold">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-dark">{step.detail}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
