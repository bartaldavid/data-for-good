"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();

  return (
    <div className="flex gap-1">
      {routing.locales.map((lang) => (
        <button
          key={lang}
          onClick={() => router.replace(pathname, { locale: lang })}
          className={locale === lang ? "font-semibold" : ""}
        >
          {lang.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  );
}
