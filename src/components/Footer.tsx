import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-lg font-extrabold">
            Re<span className="text-accent">Serve</span>
          </p>
          <p className="mt-1 text-sm text-muted-dark">{site.tagline}</p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a href={`mailto:${site.email}`} className="text-muted-dark transition-colors hover:text-accent">
            {site.email}
          </a>
          {/* Social-links zijn placeholders — echte handles volgen */}
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-dark transition-colors hover:text-accent"
          >
            Instagram
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-dark transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-line-dark py-4 text-center text-xs text-muted-dark">
        © {new Date().getFullYear()} {site.name} — reservepadel.nl
      </div>
    </footer>
  );
}
