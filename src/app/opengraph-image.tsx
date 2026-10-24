import { ImageResponse } from "next/og";
import { HERO } from "@/lib/apparatus";

// [[OG IMAGE]] Stand-in share card built from the live hero copy until a
// designed image is supplied.
export const alt = "Revenue Media Lab";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#12181A";
const SOLUTION = "#1F8F5C";
const BENCH = "#F4F8F6";
const INK_SOFT = "#2E3A37";

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

async function loadAnton() {
  const css = await fetch("https://fonts.googleapis.com/css2?family=Anton&display=swap").then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format/)?.[1];
  return url ? fetch(url).then((r) => r.arrayBuffer()) : null;
}

export default async function OpengraphImage() {
  const anton = await loadAnton().catch(() => null);
  const display = anton ? "Anton" : "Arial, Helvetica, sans-serif";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "60px 72px",
          background: BENCH,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Mark size={46} />
          <div style={{ display: "flex", color: INK, fontSize: 32, fontFamily: display }}>
            REVENUE MEDIA&nbsp;<span style={{ color: SOLUTION }}>LAB</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            color: INK,
            fontFamily: display,
            fontSize: 96,
            lineHeight: 0.95,
            maxWidth: 1000,
          }}
        >
          {HERO.headline}
        </div>
        <div style={{ display: "flex", marginTop: "auto", color: INK_SOFT, fontSize: 28, fontWeight: 600 }}>
          Your fractional content department for X and LinkedIn.
        </div>
      </div>
    ),
    { ...size, fonts: anton ? [{ name: "Anton", data: anton, style: "normal", weight: 400 }] : undefined }
  );
}
