import { ImageResponse } from "next/og";
import { HERO, SITE } from "@/lib/content";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0E1210",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "#1F8F5C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ color: "white", fontSize: 26, fontWeight: 700 }}>
            {SITE.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {HERO.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
