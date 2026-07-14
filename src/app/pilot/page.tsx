import type { Metadata } from "next";
import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/Reveal";
import { impact, pilotPage } from "@/content/site";

export const metadata: Metadata = {
  title: pilotPage.title,
  description: pilotPage.description,
};

export default function PilotPage() {
  return (
    <>
      <PageHeader kicker={pilotPage.kicker} heading={pilotPage.heading} intro={pilotPage.intro} />

      {/* Wat we willen leren */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Wat we willen leren
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pilotPage.goals.map((goal, i) => (
              <Reveal key={goal} delay={i * 100}>
                <div className="h-full rounded-2xl border border-line bg-paper-soft p-8">
                  <span className="text-3xl font-extrabold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-4 leading-relaxed text-ink-soft">{goal}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Partners + tellers */}
          <Reveal delay={200}>
            <div className="mt-6 rounded-2xl bg-ink p-8 text-white md:flex md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-accent">
                  {impact.pilot.label}
                </p>
                {impact.pilot.partners.map((partner) => (
                  <p key={partner.name} className="mt-2 text-2xl font-extrabold">
                    {partner.name}, {partner.city}
                  </p>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6 md:mt-0">
                {impact.counters.map((counter) => (
                  <div key={counter.label} className="text-center">
                    <p className="text-3xl font-extrabold text-accent">{counter.value ?? "–"}</p>
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

      {/* Tijdlijn */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">De planning</h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {pilotPage.timeline.map((item, i) => (
              <Reveal key={item.period} delay={i * 100}>
                <li className="h-full rounded-2xl border border-line-dark bg-ink-soft p-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">{item.period}</p>
                  <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-dark">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* Pilotfoto's: ontbrekende bestanden tonen automatisch een placeholder */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {pilotPage.photos.map((photo, i) => {
              const exists = existsSync(path.join(process.cwd(), "public", photo.src));
              return (
                <Reveal key={photo.src} delay={i * 100}>
                  <figure>
                    {exists ? (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={800}
                        height={1000}
                        className="aspect-[4/5] w-full rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="flex aspect-[4/5] w-full items-center justify-center rounded-2xl border-2 border-dashed border-line-dark">
                        <p className="px-6 text-center text-sm text-muted-dark">Foto volgt binnenkort</p>
                      </div>
                    )}
                    <figcaption className="mt-3 text-sm font-medium text-muted-dark">
                      {photo.caption}
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner {...pilotPage.cta} />
    </>
  );
}
