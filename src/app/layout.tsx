import type { Metadata } from "next";
import { Instrument_Sans, Anton, Caveat, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { GTMBody, GTMHead } from "@/components/GoogleTagManager";

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

const siteName = "Revenue Media Lab";
const title = "Revenue Media Lab | Founder content for X and LinkedIn";
const description =
  "Your fractional content department for X and LinkedIn. We take the raw thinking out of your founder's head, distill it, and ship it every day.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName,
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
