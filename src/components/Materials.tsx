import { materials } from "@/content/site";
import Reveal from "./Reveal";

export default function Materials() {
  return (
    <section id="materialen" className="bg-paper scroll-mt-16">
      <div className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {materials.heading}
          </h2>
          {materials.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
