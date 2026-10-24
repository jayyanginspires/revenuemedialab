import Image from "next/image";
import { TESTIMONIALS } from "@/lib/apparatus";

// Wall of proof: real client messages as screenshots, framed like the
// site's speech bubbles (ink outline, one tight corner, solid shadow, a
// slight tilt). Two masonry columns on desktop, one on mobile.
const TILT = ["-1.5deg", "1deg", "1.25deg", "-1deg"];
const CORNER = ["22px 22px 22px 6px", "22px 22px 6px 22px"];

export function Testimonials() {
  return (
    <section aria-label="What clients say" className="mx-auto max-w-[1320px] px-4 pb-14 sm:px-6 md:pb-16">
      <ul className="mx-auto m-0 max-w-[960px] list-none columns-1 gap-8 p-0 md:columns-2">
        {TESTIMONIALS.map((t, i) => (
          <li key={t.src} className="mb-8 break-inside-avoid px-1 pt-1">
            <figure
              className="m-0 overflow-hidden border-2 border-ink bg-ink shadow-[0_6px_0_var(--ink)]"
              style={{ borderRadius: CORNER[i % 2], transform: `rotate(${TILT[i % TILT.length]})` }}
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={t.width}
                height={t.height}
                sizes="(min-width: 768px) 460px, 100vw"
                className="block h-auto w-full"
              />
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
