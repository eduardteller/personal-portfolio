export const locales = ["en", "et"] as const;

export type Locale = (typeof locales)[number];

// Remembers the language of the last page viewed, so "/" sends people back to it
export const localeCookie = "lang";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

// Estonian when any preferred language is Estonian ("et", "et-EE") or uses the
// Estonian region ("en-EE"); English otherwise
export function detectLocale(acceptLanguage: string | null): Locale {
  const tags = (acceptLanguage ?? "")
    .split(",")
    .map((part) => part.trim().toLowerCase().split(";"))
    .filter(([, q]) => !q || parseFloat(q.split("=")[1]) > 0)
    .map(([tag]) => tag);

  return tags.some(
    (tag) => tag === "et" || tag.startsWith("et-") || tag.endsWith("-ee"),
  )
    ? "et"
    : "en";
}
