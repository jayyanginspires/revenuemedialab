import Link from "next/link";
import { DISCLAIMER, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-pale">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="max-w-4xl text-xs leading-relaxed text-muted">{DISCLAIMER}</p>
        <div className="mt-6 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms
            </Link>
            <a href="mailto:jay@revenuemedialab.com" className="hover:text-accent">
              Contact
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
