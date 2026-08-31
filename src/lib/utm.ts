export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "fbclid",
  "gclid",
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmData = Partial<Record<UtmKey, string>>;

export const UTM_COOKIE_NAME = "rml_attribution";
export const UTM_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days

export function parseUtmFromSearchParams(
  params: URLSearchParams | Record<string, string | string[] | undefined>
): UtmData {
  const data: UtmData = {};
  const get = (key: string): string | undefined => {
    if (params instanceof URLSearchParams) {
      return params.get(key) ?? undefined;
    }
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
  };

  for (const key of UTM_KEYS) {
    const value = get(key);
    if (value) data[key] = value;
  }
  return data;
}

export function safeParseUtmCookie(raw: string | undefined | null): UtmData {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    if (parsed && typeof parsed === "object") {
      const data: UtmData = {};
      for (const key of UTM_KEYS) {
        if (typeof parsed[key] === "string") data[key] = parsed[key];
      }
      return data;
    }
  } catch {
    // ignore malformed cookie value
  }
  return {};
}

export function buildQueryString(data: UtmData): string {
  const params = new URLSearchParams();
  for (const key of UTM_KEYS) {
    if (data[key]) params.set(key, data[key] as string);
  }
  return params.toString();
}

/** Client-only: read the persisted attribution cookie set by middleware. */
export function readClientUtmCookie(): UtmData {
  if (typeof document === "undefined") return {};
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${UTM_COOKIE_NAME}=([^;]*)`)
  );
  return safeParseUtmCookie(match?.[1]);
}

/** Client-only: append the persisted UTM/click-id bundle to an internal path. */
export function withPersistedUtm(path: string): string {
  const utm = readClientUtmCookie();
  const qs = buildQueryString(utm);
  if (!qs) return path;
  return path.includes("?") ? `${path}&${qs}` : `${path}?${qs}`;
}
