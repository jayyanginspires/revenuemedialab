import Link from "next/link";
import { FOOTER, NAV_LINKS } from "@/lib/apparatus";
import { RmlLockup } from "./RmlLogo";

export function SiteFooter() {
  // Section links are absolute so they also work from the funnel pages.
  const links = [
    ...NAV_LINKS.map((l) => ({ href: `/${l.href}`, label: l.label })),
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];
  return (
    <footer className="border-t-2 border-ink bg-bench">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <RmlLockup />
          <nav aria-label="Footer">
            <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-1 p-0">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center text-[15px] font-semibold text-ink hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 text-[14px] leading-relaxed text-muted">
          <p className="m-0">{FOOTER.disclaimer}</p>
          <p className="m-0">© {new Date().getFullYear()} Revenue Media Lab LLC</p>
        </div>
      </div>
    </footer>
  );
}
