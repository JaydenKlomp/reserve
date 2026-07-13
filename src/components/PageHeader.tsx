/** Donkere paginakop voor de subpagina's, in lijn met de hero op de homepage. */
export default function PageHeader({
  kicker,
  heading,
  intro,
}: {
  kicker: string;
  heading: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="mb-4 inline-block rounded-full border border-line-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          {kicker}
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {heading}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-dark">{intro}</p>}
      </div>
    </section>
  );
}
