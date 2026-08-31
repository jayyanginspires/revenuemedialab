import { NextRequest, NextResponse } from "next/server";
import {
  UTM_COOKIE_MAX_AGE_SECONDS,
  UTM_COOKIE_NAME,
  parseUtmFromSearchParams,
  safeParseUtmCookie,
} from "@/lib/utm";

// Captures utm_source/utm_medium/utm_campaign/fbclid/gclid off any incoming
// request and persists them in a first-party cookie so they survive
// navigation across /, /apply, /book, and /book/thank-you even when a page
// doesn't carry the query string itself.
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const incoming = parseUtmFromSearchParams(request.nextUrl.searchParams);

  if (Object.keys(incoming).length === 0) {
    return response;
  }

  const existing = safeParseUtmCookie(
    request.cookies.get(UTM_COOKIE_NAME)?.value
  );
  const merged = { ...existing, ...incoming };

  response.cookies.set(UTM_COOKIE_NAME, JSON.stringify(merged), {
    path: "/",
    maxAge: UTM_COOKIE_MAX_AGE_SECONDS,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
