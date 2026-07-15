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
        </div>
      </section>

      <ContactSection initialAudience="merk" />
    </>
  );
}
