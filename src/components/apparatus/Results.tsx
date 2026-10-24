"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";
import { RESULTS, RESULTS_FILL, formatResult, type ResultTube } from "@/lib/apparatus";
import { PlatformLogo } from "./PlatformLogo";
import { POUR_EVENT } from "./Pipe";

// Before/after rack. Each tube is one client account: the amber line is
// where they started (RESULTS_FILL ÷ multiplier), the green fill is where
// they are now. Final values ship in the HTML. With motion allowed, each
// tube starts holding amber "before" liquid up to its line; when the pipe
// pours into it (POUR_EVENT) the amber turns green and surges to
// RESULTS_FILL while the number counts up, then a slow idle bubble. On the mobile swipe row a tube plays
// when it's swiped into view instead.
//
// The section and rack panel stay unpositioned so the pipe overlay (drawn
// at z-0 before them) shows over the panel's dark background.

// Tube geometry, in viewBox units (104×270; 1:1 with CSS px on desktop).
// The glass is 80 wide with the before line overhanging 12 on each side.
const VB_W = 104;
const VB_H = 270;
const TOP = 10;
const BOTTOM = 260;
const SPAN = BOTTOM - TOP;
const RAIL_ABOVE_BOTTOM = 36;
const yAt = (pct: number) => BOTTOM - (pct / 100) * SPAN;
const FILL_Y = yAt(RESULTS_FILL);
const GLASS = "M12 10 V220 A40 40 0 0 0 92 220 V10";
const INTERIOR = "M18 10 V220 A34 34 0 0 0 86 220 V10 Z";
// Wider than the interior so the hover wobble never shows a gap at the walls.
const LIQUID = `M4 ${FILL_Y} Q52 ${FILL_Y + 5} 100 ${FILL_Y} V266 H4 Z`;
const BUBBLE_X = [36, 54, 70];
// After the sequence, a slow idle bubble loop (CSS, .tube-idle).
const IDLE_BUBBLES = [
  { x: 40, r: 3.5, dur: "6.4s", delay: "0s" },
  { x: 62, r: 2.5, dur: "7.6s", delay: "2.3s" },
  { x: 50, r: 4, dur: "8.2s", delay: "4.7s" },
];

const beforePct = (t: ResultTube) => (t.multiplier ? Math.round(RESULTS_FILL / t.multiplier) : 0);
const startValue = (t: ResultTube) => (t.format === "count" ? 0 : 1);
// y offset that drops the full-height liquid down to a given level.
const offsetFor = (pct: number) => ((RESULTS_FILL - pct) / 100) * SPAN;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function goToCase(e: MouseEvent, id: string) {
  const card = document.getElementById(id);
  if (!card) return;
  e.preventDefault();
  const reduce = prefersReducedMotion();
  card.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  window.setTimeout(
    () => {
      card.classList.remove("case-card--flash");
      void card.offsetWidth; // restart the transition if clicked twice
      card.classList.add("case-card--flash");
      window.setTimeout(() => card.classList.remove("case-card--flash"), 800);
    },
    reduce ? 0 : 650
  );
}

function Tube({ tube, i }: { tube: ResultTube; i: number }) {
  const lineY = yAt(beforePct(tube));
  return (
    <li data-tube={i} className="rack-col group flex w-[72%] shrink-0 snap-center flex-col items-center sm:w-auto">
      <div className="relative flex w-full cursor-pointer justify-center" onClick={(e) => goToCase(e, tube.caseId)}>
        <span data-pipe="drop" className="absolute left-1/2 top-0 h-0 w-0" />
        <span
          aria-hidden="true"
          className="rail absolute inset-x-6 h-[20px] border-[3px] border-bench-dark-ink bg-bench-dark-rail sm:inset-x-0"
          style={{ bottom: `calc(${((VB_H - BOTTOM + RAIL_ABOVE_BOTTOM) / VB_H) * 100}% - 10px)` }}
        />
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          aria-hidden="true"
          className="relative z-10 h-auto w-[104px] overflow-visible sm:w-[88px] lg:w-[104px]"
        >
          <defs>
            <clipPath id={`rk-in-${i}`}>
              <path d={INTERIOR} />
            </clipPath>
          </defs>
          <path d={`${GLASS} Z`} fill="var(--ink)" />
          <g clipPath={`url(#rk-in-${i})`}>
            <g data-liquid>
              <path className="tube-surface" d={LIQUID} fill="var(--solution)" />
            </g>
            {BUBBLE_X.map((x, k) => (
              <circle
                key={k}
                data-bubble
                cx={x}
                cy={lineY - 8}
                r={3 + (k % 2) * 1.5}
                fill="var(--glass)"
                stroke="var(--ink)"
                strokeWidth="1.5"
                opacity="0"
              />
            ))}
            {IDLE_BUBBLES.map((b, k) => (
              <circle
                key={`idle-${k}`}
                className="tube-idle"
                cx={b.x}
                cy={BOTTOM - 16}
                r={b.r}
                fill="var(--glass)"
                stroke="var(--ink)"
                strokeWidth="1.5"
                style={
                  { "--dur": b.dur, "--delay": b.delay, "--rise": `${FILL_Y - BOTTOM + 22}px` } as unknown as React.CSSProperties
                }
              />
            ))}
            <rect x="24" y="30" width="7" height="140" rx="3.5" fill="#fff" opacity="0.3" />
          </g>
          <path d={GLASS} fill="none" stroke="var(--bench-dark-ink)" strokeWidth="3" strokeLinecap="round" />
          <line
            x1="0"
            x2={VB_W}
            y1={lineY}
            y2={lineY}
            stroke="var(--raw)"
            strokeWidth="3"
            strokeDasharray="6 4"
          />
          <text
            x={VB_W + 6}
            // Very low before lines sit level with the rack rail, so their
            // label drops just under the line to stay clear of it.
            y={beforePct(tube) > 0 && beforePct(tube) < 12 ? lineY + 20 : lineY + 7}
            transform={`rotate(-4 ${VB_W + 6} ${lineY})`}
            className="font-script"
            fontSize="22"
            fontWeight="600"
            fill="var(--raw)"
          >
            {tube.beforeLabel}
          </text>
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1 px-3 pt-4 text-center">
        <span data-number className="font-display text-[48px] leading-none text-bench-dark-ink lg:text-[56px]">
          {formatResult(tube.value, tube.format)}
        </span>
        <span className="max-w-[260px] text-[17px] font-semibold leading-snug text-bench-dark-ink">{tube.label}</span>
        <span className="flex items-center gap-1.5 text-[15px] text-bench-dark-muted">
          <PlatformLogo platform={tube.platform} size="15px" />
          {tube.source}
        </span>
        <a
          href={`#${tube.caseId}`}
          onClick={(e) => goToCase(e, tube.caseId)}
          className="mt-1 inline-flex min-h-11 items-center text-[15px] font-bold text-mid-2 underline underline-offset-4 hover:decoration-2 focus-visible:decoration-2 group-hover:decoration-2"
        >
          {RESULTS.link}
        </a>
      </div>
    </li>
  );
}

export function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // Mobile dots follow whichever slide is snapped into view.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.tube));
        }
      },
      { root: scroller, threshold: 0.6 }
    );
    scroller.querySelectorAll("[data-tube]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    const scroller = scrollerRef.current;
    if (!root || !scroller || prefersReducedMotion()) return;

    const cols = [...root.querySelectorAll<HTMLElement>("[data-tube]")];
    const parts = cols.map((col) => ({
      liquid: col.querySelector<SVGGElement>("[data-liquid]")!,
      surface: col.querySelector<SVGPathElement>(".tube-surface")!,
      bubbles: [...col.querySelectorAll<SVGCircleElement>("[data-bubble]")],
      number: col.querySelector<HTMLElement>("[data-number]")!,
    }));

    // Start state, set before the rack can be seen (it's well below the
    // fold): each tube holds its own amber "before" liquid up to the before
    // line, with the line and label already showing. GSAP can't tween
    // var(--…), so the two liquid colors are resolved to hex.
    const css = getComputedStyle(document.documentElement);
    const RAW = css.getPropertyValue("--raw").trim();
    const SOLUTION = css.getPropertyValue("--solution").trim();
    RESULTS.tubes.forEach((tube, i) => {
      const p = parts[i];
      p.liquid.setAttribute("transform", `translate(0 ${offsetFor(beforePct(tube))})`);
      p.surface.setAttribute("fill", RAW);
      p.number.textContent = formatResult(startValue(tube), tube.format);
    });

    const played = new Set<number>();
    let entered = false;
    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      parts.forEach((p, i) => gsap.set(p.liquid, { y: offsetFor(beforePct(RESULTS.tubes[i])) }));

      const play = (i: number, delay = 0) => {
        if (played.has(i)) return;
        played.add(i);
        const tube = RESULTS.tubes[i];
        const p = parts[i];
        const before = beforePct(tube);
        // The pour lands: our liquid mixes in and the amber turns green,
        // then it surges up from the before line.
        const surgeAt = 0.45;
        const tl = gsap.timeline({ delay });
        tl.to(p.surface, { attr: { fill: SOLUTION }, duration: 0.5, ease: "power1.inOut" }, 0);
        const surge = (tube.surgeMs ?? 900) / 1000;
        tl.to(p.liquid, { y: 0, duration: surge, ease: "back.out(1.4)" }, surgeAt);
        p.bubbles.forEach((b, k) => {
          tl.fromTo(
            b,
            { attr: { cy: yAt(before) - 8 }, opacity: 1 },
            { attr: { cy: FILL_Y + 8 }, duration: 0.7, ease: "power1.in" },
            surgeAt + 0.1 + k * 0.15
          ).to(b, { opacity: 0, attr: { r: 7 }, duration: 0.12 });
        });
        tl.call(() => cols[i].classList.add("is-bubbling"));
        const n = { v: startValue(tube) };
        tl.to(
          n,
          {
            v: tube.value,
            duration: surge,
            ease: "power3.out",
            onUpdate: () => (p.number.textContent = formatResult(n.v, tube.format)),
          },
          surgeAt
        );
      };

      const isSwipeRow = () => window.matchMedia("(max-width: 639px)").matches;
      const visibleInRow = () =>
        cols.filter((c) => {
          const r = c.getBoundingClientRect();
          const s = scroller.getBoundingClientRect();
          return r.left >= s.left - r.width * 0.4 && r.right <= s.right + r.width * 0.4;
        });

      // Side by side: each tube starts when the pipe pours into it.
      const onPour = (e: Event) => {
        if (!isSwipeRow()) play((e as CustomEvent<number>).detail);
      };
      window.addEventListener(POUR_EVENT, onPour);

      const st = ScrollTrigger.create({
        trigger: scroller,
        start: "top 70%",
        once: true,
        onEnter: () => {
          entered = true;
          if (isSwipeRow()) visibleInRow().forEach((c) => play(Number(c.dataset.tube)));
        },
      });
      // Safety net if a pour never arrives (e.g. the pipe couldn't measure):
      // once the rack is well into view, play whatever hasn't played.
      const fallback = ScrollTrigger.create({
        trigger: scroller,
        start: "top 15%",
        once: true,
        onEnter: () => {
          if (!isSwipeRow()) RESULTS.tubes.forEach((_, i) => play(i, i * 0.25));
        },
      });

      // On the swipe row each tube plays when it snaps into view.
      const io = new IntersectionObserver(
        (entries) => {
          if (!entered || !isSwipeRow()) return;
          for (const e of entries) if (e.isIntersecting) play(Number((e.target as HTMLElement).dataset.tube));
        },
        { root: scroller, threshold: 0.6 }
      );
      cols.forEach((c) => io.observe(c));

      cleanup = () => {
        st.kill();
        fallback.kill();
        io.disconnect();
        window.removeEventListener(POUR_EVENT, onPour);
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  const showSlide = (i: number) => {
    const scroller = scrollerRef.current;
    const slide = scroller?.querySelector<HTMLElement>(`[data-tube="${i}"]`);
    if (!scroller || !slide) return;
    scroller.scrollTo({
      left: slide.offsetLeft - (scroller.clientWidth - slide.clientWidth) / 2,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <section ref={sectionRef} id="results" className="mx-auto max-w-[1320px] scroll-mt-6 px-4 pb-14 sm:px-6 md:pb-16">
      <h2 className="display-h2 m-0 max-w-[760px] pl-10 md:pl-[104px]">{RESULTS.headline}</h2>

      <div
        data-pipe="rack"
        className="mt-20 flex flex-col gap-5 overflow-hidden rounded-[32px] bg-ink px-4 pb-8 pt-8 text-bench-dark-ink sm:px-8 md:pt-10"
      >
        <ul
          ref={scrollerRef}
          // Spacers at both ends of the swipe row are (100% - tube width) / 2, so
          // every tube, first and last included, snaps to the panel's center
          // with its neighbors peeking evenly on each side.
          className="no-scrollbar relative -mx-4 my-0 flex list-none snap-x snap-mandatory gap-0 overflow-x-auto pb-2 before:block before:w-[14%] before:shrink-0 before:content-[''] after:block after:w-[14%] after:shrink-0 after:content-[''] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:before:hidden sm:after:hidden"
        >
          {RESULTS.tubes.map((tube, i) => (
            <Tube key={i} tube={tube} i={i} />
          ))}
        </ul>
        <div className="flex justify-center gap-1 sm:hidden">
          {RESULTS.tubes.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show result ${i + 1} of ${RESULTS.tubes.length}`}
              aria-current={active === i ? "true" : undefined}
              onClick={() => showSlide(i)}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`block h-2.5 rounded-full transition-all ${
                  active === i ? "w-6 bg-bench-dark-ink" : "w-2.5 bg-bench-dark-rail ring-2 ring-bench-dark-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
