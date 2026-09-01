import Link from "next/link";
import { LinkButton } from "./Button";
import { LogoMark, Wordmark } from "./Logo";
import { SITE } from "@/lib/content";

export function Header({ showCta = true }: { showCta?: boolean }) {
  return (
    <header className="border-b border-border bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoMark className="h-6 w-auto" />
          <Wordmark className="text-[15px] sm:text-lg" />
        </Link>
        {showCta && (
          <LinkButton href="/#apply" className="!px-5 !py-2.5 text-[14px] sm:text-[15px]">
            {SITE.qualifyCta}
          </LinkButton>
        )}
      </div>
    </header>
  );
}
