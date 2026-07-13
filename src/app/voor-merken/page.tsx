import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import Reveal from "@/components/Reveal";
import { brandsPage } from "@/content/site";

export const metadata: Metadata = {
  title: brandsPage.title,
  description: brandsPage.description,
};

export default function VoorMerkenPage() {
  return (
    <>
      <PageHeader kicker={brandsPage.kicker} heading={brandsPage.heading} intro={brandsPage.intro} />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-3">
            {brandsPage.offers.map((offer, i) => (
              <Reveal key={offer.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line bg-paper-soft p-8">
                  <h2 className="text-xl font-bold text-ink">{offer.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{offer.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-6 rounded-2xl bg-ink p-8 text-white">
              <p className="text-lg leading-relaxed">{brandsPage.note}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection initialAudience="merk" />
    </>
  );
}
