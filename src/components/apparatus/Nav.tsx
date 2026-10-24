"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HEADER_LINKS, QUALIFY_CTA } from "@/lib/apparatus";
import { RmlLockup } from "./RmlLogo";

// `minimal` is the funnel-page variant: logo only, no links or CTA.
// `linkBase` prefixes the in-page (#) links ("/" on pages other than home).
export function Nav({ minimal = false, linkBase = "" }: { minimal?: boolean; linkBase?: string }) {
  const [open, setOpen] = useState(false);
  const hrefFor = (href: string) => (href.startsWith("#") ? `${linkBase}${href}` : href);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="relative z-20 mx-auto flex max-w-[1320px] items-center justify-between gap-2 px-4 py-[22px] sm:gap-4 sm:px-6">
      <RmlLockup />
      {!minimal && (
        <>
          {/* Links and CTA sit together on the right; nothing in the middle. */}
          <div className="flex items-center gap-2 lg:gap-7">
            <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
              {HEADER_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={hrefFor(l.href)}
                  className="py-2.5 text-[15px] font-semibold text-ink transition-colors hover:text-solution-dark"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href={`${linkBase}#apply`}
                className="btn-primary btn-primary--sm whitespace-nowrap max-sm:!px-4 max-sm:!text-[14px]"
              >
                {QUALIFY_CTA}
              </Link>
              <button
                type="button"
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((o) => !o)}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-glass lg:hidden"
              >
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                  {open ? (
                    <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  ) : (
                    <path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {open && (
            <nav
              id="mobile-nav"
              aria-label="Main"
              className="absolute inset-x-4 top-full rounded-[28px] border-2 border-ink bg-glass p-3 shadow-[0_8px_0_var(--ink)] sm:inset-x-6 lg:hidden"
            >
              <ul className="m-0 flex list-none flex-col p-0">
                {HEADER_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={hrefFor(l.href)}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center rounded-full px-5 text-[17px] font-semibold text-ink hover:bg-glass-tint"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </>
      )}
    </header>
  );
}
