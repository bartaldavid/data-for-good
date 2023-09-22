export const SITE_TITLE = "Data for Good";
export const DEFAULT_LANG = "hu";

export const LOCALES = ["hu", "en"] as const;

export type Locale = (typeof LOCALES)[number];
