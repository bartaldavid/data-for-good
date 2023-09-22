"use client";

import Link from "next-intl/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link href={href} className={isActive ? "font-bold underline" : ""}>
      {label}
    </Link>
  );
}
