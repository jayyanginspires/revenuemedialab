import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { HERO } from "@/lib/apparatus";

// Share card that mirrors the hero: the tag, the headline with the X and
// LinkedIn app icons in place of the platform names, and the subhead.
export const alt = "Revenue Media Lab: your fractional content department for X and LinkedIn";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#12181A";
const SOLUTION = "#1F8F5C";
const BENCH = "#F4F8F6";
const INK_SOFT = "#2E3A37";

// The same app icons the hero uses, as data URLs for <img>.
const icon = async (name: string) =>
  `data:image/svg+xml;base64,${(await readFile(join(process.cwd(), "public/brand/platforms", `${name}.svg`))).toString("base64")}`;

const TUBES = [
  { x: 4, y: 34, h: 54, fill: 0.39 },
  { x: 34, y: 18, h: 70, fill: 0.58 },
  { x: 64, y: 4, h: 84, fill: 0.76 },
];

function Mark({ size: s }: { size: number }) {
  return (
    <svg width={s} height={Math.round((s * 92) / 86)} viewBox="0 0 86 92">
      {TUBES.map((t) => {
        const fillH = Math.round((t.h - 4) * t.fill);
        return <rect key={`f${t.x}`} x={t.x + 2} y={t.y + t.h - 2 - fillH} width="14" height={fillH} rx="7" fill={SOLUTION} />;
      })}
      {TUBES.map((t) => (
        <rect key={`o${t.x}`} x={t.x} y={t.y} width="18" height={t.h} rx="9" fill="none" stroke={INK} strokeWidth="4" />
      ))}
    </svg>
  );
}

async function loadFont(family: string) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}&display=swap`).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format/)?.[1];
  return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
}

export default async function OpengraphImage() {
  const [anton, body, bodyBold, x, linkedin] = await Promise.all([
    loadFont("Anton").catch(() => null),
    loadFont("Instrument+Sans:wght@400").catch(() => null),
    loadFont("Instrument+Sans:wght@700").catch(() => null),
    icon("x"),
    icon("linkedin"),
  ]);
  const display = anton ? "Anton" : "Arial, Helvetica, sans-serif";
  const iconSize = 84;
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 72px",
          background: BENCH,
          fontFamily: body ? "Instrument Sans" : "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Mark size={42} />
          <div style={{ display: "flex", color: INK, fontSize: 30, fontFamily: display }}>
            REVENUE MEDIA&nbsp;<span style={{ color: SOLUTION }}>LAB</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            marginTop: 40,
            padding: "10px 24px",
            border: `3px solid ${INK}`,
            borderRadius: 999,
            color: INK,
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          {HERO.tag}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 26,
            color: INK,
            fontFamily: display,
            fontSize: 92,
            lineHeight: 1,
          }}
        >
          <div style={{ display: "flex" }}>YOUR FRACTIONAL CONTENT</div>
          <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
            DEPARTMENT FOR
            <img src={x} width={iconSize} height={iconSize} alt="" />
            AND
            <img src={linkedin} width={iconSize} height={iconSize} alt="" />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "auto", maxWidth: 1000, color: INK_SOFT, fontSize: 28, lineHeight: 1.4 }}>
          {HERO.subhead}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        anton && { name: "Anton", data: anton, style: "normal" as const, weight: 400 as const },
        body && { name: "Instrument Sans", data: body, style: "normal" as const, weight: 400 as const },
        bodyBold && { name: "Instrument Sans", data: bodyBold, style: "normal" as const, weight: 700 as const },
      ].filter((f) => !!f),
    }
  );
}
