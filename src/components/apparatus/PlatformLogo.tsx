import { PLATFORM_LOGO_SRC } from "@/lib/apparatus";

const NAMES = { x: "X", linkedin: "LinkedIn" } as const;

// X / LinkedIn app icons from PLATFORM_LOGO_SRC; a visible
// placeholder if a path is unset. `labelled` when the logo stands in for
// the word itself (screen readers then hear "X"/"LinkedIn"); otherwise it's
// decorative next to the name.
export function PlatformLogo({
  platform,
  size = "1em",
  labelled = false,
  className = "align-[-0.22em]",
}: {
  platform: keyof typeof NAMES;
  size?: string;
  labelled?: boolean;
  className?: string;
}) {
  const src = PLATFORM_LOGO_SRC[platform];
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- tiny inline SVG mark
      <img
        src={src}
        alt={labelled ? NAMES[platform] : ""}
        aria-hidden={labelled ? undefined : true}
        style={{ height: size, width: "auto" }}
        className={`inline-block ${className}`}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="inline-block whitespace-nowrap rounded-full border border-dashed border-muted px-1.5 align-[0.1em] text-[0.62em] font-semibold leading-[1.5] text-muted"
    >
      [[{NAMES[platform]} logo]]
    </span>
  );
}
