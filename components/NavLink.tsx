"use client";

import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${
        isActive ? "font-semibold bg-slate-100" : ""
      } w-full sm:w-auto hover:bg-slate-50 p-2 rounded hover:shadow-md transition-all ease-in-out`}
    >
      {label}
    </Link>
  );
}
