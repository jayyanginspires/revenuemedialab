import { ImageResponse } from "next/og";
import { HERO, SITE } from "@/lib/content";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#12181A";
const ACCENT = "#1F8F5C";
const PAPER = "#F7F9F7";
const MUTED = "#5B6663";
const BORDER = "#DCE5E0";

// The real mark, inlined. Satori has no access to the theme tokens the live
// component uses, so the values are resolved here.
function Mark({ size: s }: { size: number }) {
  const h = Math.round((s * 92) / 86);
  return (
    <svg width={s} height={h} viewBox="0 0 86 92">
      <defs>
        <clipPath id="m1">
          <rect x="2" y="8" width="22" height="76" rx="11" />
        </clipPath>
        <clipPath id="m2">
          <rect x="32" y="8" width="22" height="76" rx="11" />
        </clipPath>
        <clipPath id="m3">
          <rect x="62" y="8" width="22" height="76" rx="11" />
        </clipPath>
      </defs>
      <g clipPath="url(#m1)">
        <rect x="2" y="60" width="22" height="30" fill={ACCENT} />
      </g>
      <g clipPath="url(#m2)">
        <rect x="32" y="46" width="22" height="44" fill={ACCENT} />
      </g>
      <g clipPath="url(#m3)">
        <rect x="62" y="32" width="22" height="58" fill={ACCENT} />
      </g>
      <rect x="2" y="8" width="22" height="76" rx="11" fill="none" stroke={INK} strokeWidth="4" />
      <rect x="32" y="8" width="22" height="76" rx="11" fill="none" stroke={INK} strokeWidth="4" />
      <rect x="62" y="8" width="22" height="76" rx="11" fill="none" stroke={INK} strokeWidth="4" />
      <rect x="0" y="4" width="26" height="5" rx="2.5" fill={INK} />
      <rect x="30" y="4" width="26" height="5" rx="2.5" fill={INK} />
      <rect x="60" y="4" width="26" height="5" rx="2.5" fill={INK} />
    </svg>
  );
}

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          background: PAPER,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Mark size={46} />
          <div
            style={{
              display: "flex",
              color: INK,
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            Revenue Media&nbsp;<span style={{ color: ACCENT }}>Lab</span>
          </div>
        </div>

        {/* proof strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 12,
            marginTop: 44,
            padding: "10px 22px",
            borderRadius: 999,
            border: `1px solid ${BORDER}`,
            background: "#FFFFFF",
          }}
        >
          <div style={{ width: 11, height: 11, borderRadius: 999, background: ACCENT }} />
          <div
            style={{
              display: "flex",
              color: MUTED,
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {HERO.badge}
          </div>
        </div>

        {/* headline. Lines are explicit so "with" can't orphan onto its own line. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 40,
            color: INK,
            fontSize: 70,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          <div style={{ display: "flex" }}>We help founders scale with</div>
          <div style={{ display: "flex", color: ACCENT }}>organic content</div>
        </div>

        {/* footer rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 28,
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <div style={{ display: "flex", color: MUTED, fontSize: 22, fontWeight: 600 }}>
            revenuemedialab.com
          </div>
          <div style={{ display: "flex", color: INK, fontSize: 22, fontWeight: 700 }}>
            16-week install
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
