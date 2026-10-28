export const locales = ["en", "et"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Languages visitors can see. Estonian is translated but switched off for now;
// add "et" back here to turn it on again
export const enabledLocales: readonly Locale[] = ["en"];

// With a single language the site is served at plain URLs without a prefix
export const isMultilingual = enabledLocales.length > 1;

// Remembers the language of the last page viewed, so "/" sends people back to it
export const localeCookie = "lang";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function isEnabledLocale(value: string | undefined): value is Locale {
  return enabledLocales.includes(value as Locale);
}

// Estonian when any preferred language is Estonian ("et", "et-EE") or uses the
// Estonian region ("en-EE") and Estonian is enabled; the default otherwise
export function detectLocale(acceptLanguage: string | null): Locale {
  const tags = (acceptLanguage ?? "")
    .split(",")
    .map((part) => part.trim().toLowerCase().split(";"))
    .filter(([, q]) => !q || parseFloat(q.split("=")[1]) > 0)
    .map(([tag]) => tag);

  const prefersEstonian = tags.some(
    (tag) => tag === "et" || tag.startsWith("et-") || tag.endsWith("-ee"),
  );

  return prefersEstonian && isEnabledLocale("et") ? "et" : defaultLocale;
}
