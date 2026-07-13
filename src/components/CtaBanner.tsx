import Link from "next/link";
import Reveal from "./Reveal";

/** Lime call-to-action-banner met per pagina eigen tekst. */
export default function CtaBanner({
  heading,
  sub,
  label,
  href,
}: {
  heading: string;
  sub?: string;
  label: string;
  href: string;
}) {
  return (
    <section className="bg-accent text-accent-ink">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{heading}</h2>
          {sub && <p className="mt-5 text-lg font-medium">{sub}</p>}
          <Link
            href={href}
            className="mt-10 inline-block rounded-full bg-ink px-10 py-4 text-base font-bold text-white transition-transform hover:scale-105"
          >
            {label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
