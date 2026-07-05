import Image from "next/image";
import { site } from "@/content/site";

const navItems = [
  { label: "Concept", href: "#concept" },
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-line-dark">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" aria-label={`${site.name} — naar boven`}>
          <Image src="/brand/logo.png" alt={site.name} width={900} height={420} priority className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdnavigatie">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-dark transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-ink transition-transform hover:scale-105"
        >
          Word partner
        </a>
      </div>
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
