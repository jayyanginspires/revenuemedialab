import type { Metadata } from "next";
import { Instrument_Sans, Anton, Caveat, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { GTMBody, GTMHead } from "@/components/GoogleTagManager";
import { HERO, SITE } from "@/lib/content";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const title = `${SITE.name} — ${HERO.headline}`;
const description =
  "We design and install the same revenue media systems used to scale the biggest brands in the world, into your business, in 16 weeks. For founder-led businesses doing $1–10M in revenue.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${anton.variable} ${caveat.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        <GTMHead />
      </head>
      <body className="min-h-full flex flex-col">
        <GTMBody />
        {children}
      </body>
    </html>
  );
}
