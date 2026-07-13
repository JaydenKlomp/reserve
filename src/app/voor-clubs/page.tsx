import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import { clubsPage } from "@/content/site";

export const metadata: Metadata = {
  title: clubsPage.title,
  description: clubsPage.description,
};

export default function VoorClubsPage() {
  return (
    <>
      <PageHeader kicker={clubsPage.kicker} heading={clubsPage.heading} intro={clubsPage.intro} />

      {/* Voordelen */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {clubsPage.benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line bg-paper-soft p-8">
                  <h2 className="text-xl font-bold text-ink">{benefit.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wat vraagt het van de club */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {clubsPage.process.heading}
            </h2>
            <p className="mt-4 text-lg text-muted-dark">{clubsPage.process.sub}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {clubsPage.process.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line-dark bg-ink-soft p-8">
                  <span className="text-2xl font-extrabold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-dark">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {clubsPage.faq.heading}
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {clubsPage.faq.items.map((item, i) => (
              <Reveal key={item.question} delay={i * 80}>
                <details className="group rounded-2xl border border-line bg-paper-soft p-6">
                  <summary className="cursor-pointer list-none text-lg font-bold text-ink marker:content-none">
                    <span className="flex items-center justify-between gap-4">
                      {item.question}
                      <span className="text-accent transition-transform group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-ink-soft">{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner {...clubsPage.cta} />
      <ContactSection />
    </>
  );
}
