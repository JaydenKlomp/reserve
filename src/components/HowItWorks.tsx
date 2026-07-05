import { steps } from "@/content/site";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="bg-ink text-white scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            Stappenplan
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {steps.heading}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-muted-dark">{steps.sub}</p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.items.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <li className="h-full rounded-2xl border border-line-dark bg-ink-soft p-6">
                <span className="text-3xl font-extrabold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-dark">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
