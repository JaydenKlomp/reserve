"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function linkClass(href: string) {
    return pathname === href ? "text-accent" : "text-muted-dark hover:text-white";
  }

  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-line-dark">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" aria-label={`${site.name}, home`} onClick={() => setOpen(false)}>
          <Image src="/brand/logo.png" alt={site.name} width={900} height={420} priority className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdnavigatie">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${linkClass(item.href)}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-ink transition-transform hover:scale-105 sm:inline-block"
          >
            Word partner
          </Link>

          {/* Hamburger (mobiel/tablet) */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-white lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              {open ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="flex flex-col gap-1 border-t border-line-dark bg-ink px-5 py-4 lg:hidden"
          aria-label="Mobiele navigatie"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                pathname === item.href ? "bg-ink-soft text-accent" : "text-muted-dark hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-base font-bold text-accent-ink"
          >
            Word partner
          </Link>
        </nav>
      )}
    </header>
  );
}
