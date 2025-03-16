"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ locale: string }>();

  return (
    <div className="flex gap-1">
      {routing.locales.map((lang) => (
        <button
          key={lang}
          onClick={() => router.replace(pathname, { locale: lang })}
          className={params.locale === lang ? "font-semibold" : ""}
        >
          {lang.toLocaleUpperCase()}
        </button>
      ))}
    </div>
  );
}
