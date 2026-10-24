"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { STAGE_COLORS } from "@/lib/apparatus";

// The liquid pipe. One continuous SVG path measured off anchors in the
// page ([data-pipe=…]): it leaves the hero flask, turns along above the
// process headline, drops down the gutter past the four valves and the
// results headline, then runs along a manifold above the results rack and
// drops through a coupling into each tube. Fill is tied to scroll; liquid
// color is a vertical gradient between the first and last valve, so it
// shifts raw → mid-1 → mid-2 → solution as it descends.
//
// When the liquid lands in a tube, the pipe fires a POUR_EVENT with that
// tube's index; Results plays the tube's own sequence from there. On the
// mobile swipe row there's a single drop into the rack instead, and the
// tubes play as they're swiped into view.

export const POUR_EVENT = "rml:pour";

type Pt = { x: number; y: number };
type Geom = {
  w: number;
  h: number;
  main: string;
  taps: { x: number; d: string }[];
  couplings: Pt[];
  manifoldY: number;
  valves: Pt[];
  mobile: boolean;
  row: boolean; // tubes laid out side by side, one drop each
};

const FRONT = 0.62; // liquid front rides at 62% of the viewport height
const HORIZONTAL_WEIGHT = 0.12; // horizontal runs take little scroll, so the front stays near FRONT
const GLASS = "#FFFFFF";

function roundedPath(raw: Pt[], r: number) {
  const pts = raw.filter((p, i) => i === 0 || Math.hypot(p.x - raw[i - 1].x, p.y - raw[i - 1].y) > 0.5);
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [a, p, b] = [pts[i - 1], pts[i], pts[i + 1]];
    const la = Math.hypot(p.x - a.x, p.y - a.y);
    const lb = Math.hypot(b.x - p.x, b.y - p.y);
    const rr = Math.min(r, la / 2, lb / 2);
    const s = { x: p.x + ((a.x - p.x) / la) * rr, y: p.y + ((a.y - p.y) / la) * rr };
    const e = { x: p.x + ((b.x - p.x) / lb) * rr, y: p.y + ((b.y - p.y) / lb) * rr };
    d += ` L${s.x} ${s.y} Q${p.x} ${p.y} ${e.x} ${e.y}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${last.x} ${last.y}`;
}

function measure(root: HTMLElement): Geom | null {
  const box = root.getBoundingClientRect();
  const center = (el: Element | null): Pt | null => {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: Math.round(r.left + r.width / 2 - box.left), y: Math.round(r.top + r.height / 2 - box.top) };
  };
  const start = center(root.querySelector('[data-pipe="start"]'));
  const turn = center(root.querySelector('[data-pipe="turn"]'));
  const rackEl = root.querySelector('[data-pipe="rack"]');
  const valves = [...root.querySelectorAll('[data-pipe="valve"]')].map(center) as Pt[];
  const drops = [...root.querySelectorAll('[data-pipe="drop"]')].map(center) as Pt[];
  if (!start || !turn || !rackEl || valves.length !== 4 || drops.length === 0) return null;

  const rackBox = rackEl.getBoundingClientRect();
  const rackTop = Math.round(rackBox.top - box.top);
  const rackX = Math.round(rackBox.left + rackBox.width / 2 - box.left);

  const mobile = box.width < 768;
  const row = window.matchMedia("(min-width: 640px)").matches;
  const gutterX = valves[0].x;
  const manifoldY = rackTop - (mobile ? 36 : 44);
  const into = 14; // how far each drop reaches into the tube mouth
  const head = [start, { x: start.x, y: turn.y }, { x: gutterX, y: turn.y }, { x: gutterX, y: manifoldY }];
  const r = mobile ? 18 : 28;

  if (row) {
    const last = drops[drops.length - 1];
    return {
      w: Math.round(box.width),
      h: Math.round(box.height),
      main: roundedPath([...head, { x: last.x, y: manifoldY }, { x: last.x, y: last.y + into }], r),
      taps: drops.slice(0, -1).map((d) => ({ x: d.x, d: `M${d.x} ${manifoldY} L${d.x} ${d.y + into}` })),
      couplings: drops.map((d) => ({ x: d.x, y: rackTop })),
      manifoldY,
      valves,
      mobile,
      row,
    };
  }
  return {
    w: Math.round(box.width),
    h: Math.round(box.height),
    main: roundedPath([...head, { x: rackX, y: manifoldY }, { x: rackX, y: rackTop + 4 }], r),
    taps: [],
    couplings: [{ x: rackX, y: rackTop }],
    manifoldY,
    valves,
    mobile,
    row,
  };
}

export function Pipe() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [geom, setGeom] = useState<Geom | null>(null);
  // Stage reveals and pours happen once; valves and taps follow the liquid.
  const state = useRef({
    primed: false,
    revealed: [false, false, false, false],
    valveOn: [false, false, false, false],
    poured: new Set<number>(),
  });

  useLayoutEffect(() => {
    const root = svgRef.current?.parentElement;
    if (!root) return;
    let frame = 0;
    let lastKey = "";
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const g = measure(root);
        if (!g) return;
        const key = `${g.main}|${g.w}|${g.h}|${g.taps.length}`;
        if (key === lastKey) return;
        lastKey = key;
        setGeom(g);
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(root);
    root.setAttribute("data-pipe-ready", "");
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      root.removeAttribute("data-pipe-ready");
    };
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    const root = svg?.parentElement;
    if (!geom || !svg || !root) return;
    const liquid = svg.querySelector<SVGPathElement>("[data-liquid=main]")!;
    const tapLiquids = [...svg.querySelectorAll<SVGPathElement>("[data-liquid=tap]")];
    const valveEls = [...svg.querySelectorAll<SVGGElement>("[data-valve]")];
    const stages = [...root.querySelectorAll<HTMLElement>("[data-stage]")];
    const s = state.current;
    // GSAP can't tween toward var(--…), so resolve the stage tokens to hex.
    const rootStyle = getComputedStyle(document.documentElement);
    const stageHex = STAGE_COLORS.map((c) => rootStyle.getPropertyValue(c.slice(4, -1)).trim());

    // Sample the path once: length → weighted scroll distance.
    const L = liquid.getTotalLength();
    const step = 6;
    const lens: number[] = [0];
    const ds: number[] = [0];
    let prev = liquid.getPointAtLength(0);
    for (let l = step; l < L + step; l += step) {
      const len = Math.min(l, L);
      const p = liquid.getPointAtLength(len);
      ds.push(ds[ds.length - 1] + Math.abs(p.y - prev.y) + HORIZONTAL_WEIGHT * Math.abs(p.x - prev.x));
      lens.push(len);
      prev = p;
    }
    const D = ds[ds.length - 1];
    const lenAt = (pt: Pt) => {
      let best = 0;
      let bestDist = Infinity;
      for (let l = 0; l <= L; l += 2) {
        const p = liquid.getPointAtLength(l);
        const dist = Math.hypot(p.x - pt.x, p.y - pt.y);
        if (dist < bestDist) [best, bestDist] = [l, dist];
      }
      return best;
    };
    const valveLens = geom.valves.map(lenAt);
    const tapLens = geom.taps.map((t) => lenAt({ x: t.x, y: geom.manifoldY }));
    const lenForD = (d: number) => {
      if (d <= 0) return 0;
      if (d >= D) return L;
      let lo = 0;
      let hi = ds.length - 1;
      while (hi - lo > 1) {
        const mid = (lo + hi) >> 1;
        if (ds[mid] < d) lo = mid;
        else hi = mid;
      }
      const t = (d - ds[lo]) / (ds[hi] - ds[lo] || 1);
      return lens[lo] + t * (lens[hi] - lens[lo]);
    };

    liquid.style.strokeDasharray = `${L} ${L}`;
    const tapLs = tapLiquids.map((t) => {
      const tl = t.getTotalLength();
      t.style.strokeDasharray = `${tl} ${tl}`;
      return tl;
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      liquid.style.strokeDashoffset = "0";
      tapLiquids.forEach((t) => (t.style.strokeDashoffset = "0"));
      valveEls.forEach((v, i) => v.querySelector("circle")!.setAttribute("fill", stageHex[i]));
      return;
    }

    const pour = (i: number) => {
      if (!geom.row || s.poured.has(i)) return;
      s.poured.add(i);
      window.dispatchEvent(new CustomEvent(POUR_EVENT, { detail: i }));
    };

    let cancelled = false;
    let cleanup = () => {};
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const q = (i: number, sel: string) => stages[i]?.querySelectorAll<HTMLElement>(sel) ?? [];

      if (!s.primed) {
        s.primed = true;
        stages.forEach((_, i) => gsap.set(q(i, "[data-reveal]"), { autoAlpha: 0, y: 12 }));
        gsap.set(q(0, '[data-anim="chip"]'), { autoAlpha: 0, y: -28 });
        gsap.set(q(1, '[data-anim="status-final"]'), { autoAlpha: 0 });
        gsap.set(q(1, '[data-anim="status-pending"]'), { autoAlpha: 1 });
        gsap.set(q(2, '[data-anim="strike"]'), { backgroundSize: "0% 1.5px" });
        gsap.set(q(2, '[data-anim="post"]'), { autoAlpha: 0, y: 36 });
        gsap.set(q(3, '[data-anim="post-row"]'), { autoAlpha: 0, x: 16 });
      }
      valveEls.forEach((v, i) =>
        v.querySelector("circle")!.setAttribute("fill", s.valveOn[i] ? stageHex[i] : GLASS)
      );

      const reveal = (i: number) => {
        s.revealed[i] = true;
        const tl = gsap.timeline();
        tl.to(q(i, "[data-reveal]"), { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" });
        if (i === 0) {
          tl.to(q(0, '[data-anim="chip"]'), { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.09, ease: "back.out(2.2)" }, 0.25);
        } else if (i === 1) {
          const finals = q(1, '[data-anim="status-final"]');
          const pendings = q(1, '[data-anim="status-pending"]');
          finals.forEach((f, k) => {
            const at = 0.5 + k * 0.45;
            tl.to(pendings[k], { autoAlpha: 0, duration: 0.15 }, at);
            tl.fromTo(f, { autoAlpha: 0, scale: 0.8 }, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "back.out(3)" }, at + 0.1);
          });
        } else if (i === 2) {
          tl.to(q(2, '[data-anim="strike"]'), { backgroundSize: "100% 1.5px", duration: 0.4, stagger: 0.45, ease: "power1.inOut" }, 0.4);
          tl.to(q(2, '[data-anim="post"]'), { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }, "+=0.2");
        } else if (i === 3) {
          // Scheduled posts land one by one.
          tl.to(q(3, '[data-anim="post-row"]'), { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.25, ease: "power2.out" }, 0.35);
        }
      };

      const tapOn = geom.taps.map(() => false);
      const apply = (len: number) => {
        liquid.style.strokeDashoffset = String(L - len);
        valveLens.forEach((vl, i) => {
          const on = len >= vl;
          if (on === s.valveOn[i]) return;
          s.valveOn[i] = on;
          const circle = valveEls[i].querySelector("circle")!;
          gsap.to(circle, { attr: { fill: on ? stageHex[i] : GLASS }, duration: 0.2 });
          if (on) {
            gsap.fromTo(valveEls[i], { scale: 1 }, { scale: 1.12, duration: 0.14, yoyo: true, repeat: 1, ease: "power1.out", svgOrigin: `${geom.valves[i].x} ${geom.valves[i].y}` });
            if (!s.revealed[i]) reveal(i);
          }
        });
        // Each drop fills once the manifold liquid passes it, then pours.
        tapLens.forEach((tl, k) => {
          const on = len >= tl;
          if (on === tapOn[k]) return;
          tapOn[k] = on;
          gsap.to(tapLiquids[k], {
            strokeDashoffset: on ? 0 : tapLs[k],
            duration: 0.35,
            ease: "none",
            onComplete: on ? () => pour(k) : undefined,
          });
        });
        if (len >= L - 1) pour(geom.taps.length);
      };

      const rootTop = root.getBoundingClientRect().top + window.scrollY;
      const startPt = liquid.getPointAtLength(0);
      const s0 = rootTop + startPt.y - window.innerHeight * FRONT;
      // If the page ends before the front reaches the rack, compress the
      // range so the pour still completes at the bottom of the page.
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const s1 = Math.max(Math.min(s0 + D, maxScroll), s0 + 1);
      const proxy = { d: 0 };
      const initial = Math.min(Math.max((window.scrollY - s0) / (s1 - s0), 0), 1) * D;
      proxy.d = initial;
      tapLiquids.forEach((t, k) => (t.style.strokeDashoffset = String(tapLs[k])));
      apply(lenForD(initial));

      const tween = gsap.to(proxy, {
        d: D,
        ease: "none",
        immediateRender: false,
        onUpdate: () => apply(lenForD(proxy.d)),
        scrollTrigger: { start: s0, end: s1, scrub: true },
      });
      // Pick up the current scroll position (e.g. after a reload mid-page).
      tween.scrollTrigger?.refresh();

      cleanup = () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [geom]);

  const outer = geom?.mobile ? 24 : 28;
  const inner = outer - 6;
  const fluid = geom?.mobile ? 12 : 14;
  const valveR = geom?.mobile ? 13 : 22;

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-0 overflow-visible"
      width={geom?.w ?? 0}
      height={geom?.h ?? 0}
      viewBox={geom ? `0 0 ${geom.w} ${geom.h}` : undefined}
    >
      {geom && (
        <>
          <defs>
            <linearGradient
              id="pipe-liquid"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1={geom.valves[0].y}
              x2="0"
              y2={geom.valves[3].y}
            >
              {STAGE_COLORS.map((c, i) => (
                <stop key={c} offset={i / 3} stopColor={c} />
              ))}
            </linearGradient>
          </defs>
          {/* walls, then glass, so each T off the manifold reads as one fitting */}
          {geom.taps.map((t) => (
            <path key={`w${t.x}`} d={t.d} fill="none" stroke="var(--ink)" strokeWidth={outer} />
          ))}
          <path d={geom.main} fill="none" stroke="var(--ink)" strokeWidth={outer} strokeLinejoin="round" />
          {geom.taps.map((t) => (
            <path key={`g${t.x}`} d={t.d} fill="none" stroke={GLASS} strokeWidth={inner} />
          ))}
          <path d={geom.main} fill="none" stroke={GLASS} strokeWidth={inner} strokeLinejoin="round" />
          {geom.taps.map((t) => (
            <path key={`l${t.x}`} data-liquid="tap" d={t.d} fill="none" stroke="var(--solution)" strokeWidth={fluid} />
          ))}
          <path
            data-liquid="main"
            d={geom.main}
            fill="none"
            stroke="url(#pipe-liquid)"
            strokeWidth={fluid}
            strokeLinejoin="round"
          />
          {geom.couplings.map((c) => (
            <rect
              key={`c${c.x}`}
              x={c.x - outer / 2 - 5}
              y={c.y - 6}
              width={outer + 10}
              height="12"
              rx="3"
              fill="var(--ink)"
              stroke="var(--bench-dark-ink)"
              strokeWidth="2"
            />
          ))}
          {geom.valves.map((v, i) => (
            <g key={i} data-valve={i}>
              <circle cx={v.x} cy={v.y} r={valveR} fill={GLASS} stroke="var(--ink)" strokeWidth="3" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}
