import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import HowItWorks from "@/components/HowItWorks";
import EarlyAdopter from "@/components/EarlyAdopter";
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

      <HowItWorks />
      <EarlyAdopter />
      <ContactSection />
    </>
  );
}
