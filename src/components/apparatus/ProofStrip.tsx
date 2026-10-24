import Image from "next/image";
import { PROOF } from "@/lib/apparatus";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function Account({ name, avatar }: { name: string; avatar: string | null }) {
  return (
    <span className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
      {avatar ? (
        <Image
          src={avatar}
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 rounded-full border-2 border-ink object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-glass-tint text-[12px] font-bold"
        >
          {initials(name)}
        </span>
      )}
      <span className="text-[15px] font-semibold text-ink">{name}</span>
    </span>
  );
}

// One pill: a fixed label, then the accounts scrolling past on a loop
// (pauses on hover/focus; with reduced motion it stops and scrolls by hand).
export function ProofStrip() {
  return (
    <section aria-label="Clients" className="relative z-[2] mx-auto max-w-[1320px] px-4 pb-14 pt-6 sm:px-6 sm:pb-[72px]">
      <div className="flex items-center gap-5 overflow-hidden rounded-full border-2 border-ink bg-glass py-2.5 pl-5 md:gap-8 md:pl-9">
        <span className="shrink-0 text-[15px] font-bold text-ink md:text-[16px]">{PROOF.label}</span>
        <div
          className="marquee relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]"
          tabIndex={0}
          aria-label="Accounts we write for"
        >
          <ul className="marquee-track m-0 flex w-max list-none items-center gap-10 p-0 pr-10">
            {[...PROOF.accounts, ...PROOF.accounts].map((a, i) => (
              <li key={i} aria-hidden={i >= PROOF.accounts.length || undefined}>
                <Account {...a} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
