import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Image src="/brand/logo.png" alt={site.name} width={900} height={420} className="h-9 w-auto" />
          <p className="text-sm text-muted-dark">{site.tagline}</p>
        </div>

        <nav className="flex flex-col items-center gap-2 text-sm font-medium md:items-start" aria-label="Footer-navigatie">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-dark transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-2 text-sm font-medium md:items-start">
          <a href={`mailto:${site.email}`} className="text-muted-dark transition-colors hover:text-accent">
            {site.email}
          </a>
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
