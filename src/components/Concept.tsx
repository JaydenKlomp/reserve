import Link from "next/link";
import { concept } from "@/content/site";
import Reveal from "./Reveal";

export default function Concept() {
  return (
    <section id="concept" className="bg-paper scroll-mt-16">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-muted">
            {concept.heading}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Een tweede leven voor elke bal en koker
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">{concept.body}</p>
          <Link
            href="/hoe-het-werkt"
            className="mt-8 inline-block font-bold text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-ink-soft"
          >
            Bekijk hoe het werkt
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
