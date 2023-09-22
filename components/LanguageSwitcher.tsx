"use client";

import { usePathname, useRouter } from "next-intl/client";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex gap-1">
      <button onClick={() => router.replace(pathname, { locale: "en" })}>
        EN
      </button>
      <button onClick={() => router.replace(pathname, { locale: "hu" })}>
        HU
      </button>
    </div>
  );
}
