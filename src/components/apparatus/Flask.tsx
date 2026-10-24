import { HERO } from "@/lib/apparatus";

// Round-bottom flask: neck + 200px-radius body, joined where the circle
// meets the neck walls (x = 188 / 252).
const FLASK_OUTLINE =
  "M188 14 Q188 0 202 0 H238 Q252 0 252 14 V163 A200 200 0 1 1 188 163 V14 Z";

const BUBBLES = [
  { cx: 132, cy: 470, r: 7, dur: "7s", delay: "0s" },
  { cx: 304, cy: 440, r: 5, dur: "8.5s", delay: "2.4s" },
  { cx: 246, cy: 540, r: 9, dur: "6.2s", delay: "4.1s" },
];

// Fragments sit as HTML over the SVG so their text wraps and scales with
// the flask (container query units). Positions are % of the 440×600 box.
const FRAGMENTS = [
  { style: { left: "12%", top: "48%" }, rot: -4, radius: "22px 22px 22px 6px", dur: "5.2s", delay: "0s", amp: "5px" },
  { style: { right: "7%", top: "61%" }, rot: 3, radius: "22px 22px 6px 22px", dur: "6.4s", delay: "-2s", amp: "7px" },
  { style: { left: "14%", top: "74%" }, rot: -2, radius: "22px 22px 22px 6px", dur: "5.8s", delay: "-4s", amp: "4px" },
];

export function Flask() {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div
        aria-hidden="true"
        className="relative w-full max-w-[440px] [container-type:inline-size]"
        style={{ aspectRatio: "440 / 620" }}
      >
        <svg viewBox="0 0 440 620" className="absolute inset-0 h-full w-full overflow-visible">
          <defs>
            <clipPath id="flask-body">
              <path d={FLASK_OUTLINE} />
            </clipPath>
          </defs>

          {/* outlet stem through the base plate; the pipe leaves from here */}
          <rect x="207" y="548" width="26" height="72" rx="4" fill="var(--glass)" stroke="var(--ink)" strokeWidth="3" />

          <path d={FLASK_OUTLINE} fill="var(--glass)" />
          <g clipPath="url(#flask-body)">
            <g className="flask-liquid">
              <path
                d="M0 236 C 70 224, 140 248, 220 236 S 370 224, 440 236 V620 H0 Z"
                fill="var(--raw-light)"
              />
              <path
                d="M0 432 C 80 422, 150 444, 220 432 S 360 422, 440 432 V620 H0 Z"
                fill="var(--raw)"
              />
              {BUBBLES.map((b) => (
                <circle
                  key={b.cx}
                  className="flask-bubble"
                  cx={b.cx}
                  cy={b.cy}
                  r={b.r}
                  fill="var(--glass)"
                  stroke="var(--ink)"
                  strokeWidth="2"
                  style={{ "--dur": b.dur, "--delay": b.delay } as React.CSSProperties}
                />
              ))}
            </g>
            {/* glass sheen */}
            <rect x="58" y="230" width="10" height="150" rx="5" fill="#fff" opacity="0.85" />
          </g>
          <path d={FLASK_OUTLINE} fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
          <rect x="110" y="572" width="220" height="18" rx="9" fill="var(--ink)" />
        </svg>

        {HERO.fragments.map((text, i) => {
          const f = FRAGMENTS[i];
          return (
            <span
              key={text}
              className="fragment-drift absolute max-w-[78%]"
              style={{ ...f.style, "--dur": f.dur, "--delay": f.delay, "--amp": f.amp } as unknown as React.CSSProperties}
            >
              <span
                className="block border-2 border-ink bg-glass px-3.5 py-2.5 font-semibold leading-tight text-ink shadow-[0_4px_0_var(--ink)]"
                style={{
                  borderRadius: f.radius,
                  transform: `rotate(${f.rot}deg)`,
                  fontSize: "clamp(11px, 3.2cqw, 14px)",
                }}
              >
                &ldquo;{text}&rdquo;
              </span>
            </span>
          );
        })}

        <p
          className="margin-note absolute right-0 top-[20%] m-0 w-[34%] rotate-[6deg] text-right"
          style={{ fontSize: "clamp(22px, 6cqw, 28px)" }}
        >
          {HERO.note}
        </p>

        {/* where the pipe leaves the flask */}
        <span data-pipe="start" className="absolute bottom-0 left-1/2 h-0 w-0" />
      </div>
    </div>
  );
}
