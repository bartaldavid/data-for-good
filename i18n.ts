import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getRequestConfig } from "next-intl/server";
import { LOCALES } from "./constants";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));

export const { Link, useRouter, usePathname } = createSharedPathnamesNavigation(
  { locales: LOCALES }
);
