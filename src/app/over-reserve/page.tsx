import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EarlyAdopter from "@/components/EarlyAdopter";
import Reveal from "@/components/Reveal";
import { aboutPage } from "@/content/site";

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
};

export default function OverReservePage() {
  return (
    <>
      <PageHeader kicker={aboutPage.kicker} heading={aboutPage.heading} />

      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
          <Reveal>
            {aboutPage.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-6 text-lg leading-relaxed text-ink-soft first:mt-0">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <EarlyAdopter />
    </>
  );
}
