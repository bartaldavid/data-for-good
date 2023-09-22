import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavLink } from "./NavLink";
import { SITE_TITLE } from "@/constants";

export default function Header() {
  const t = useTranslations("Nav");
  return (
    <header className="mx-1 h-12 flex items-center">
      <nav className="flex items-center justify-between w-full">
        <h2>
          <a href="/">{SITE_TITLE}</a>
        </h2>
        <div className="flex gap-2">
          <NavLink href="/" label={t("home")} />
          <NavLink href="/news" label={t("news")} />
          <NavLink href="/projects" label={t("projects")} />
          <NavLink href="/teaching" label={t("teaching")} />
          <NavLink href="/team" label={t("team")} />
        </div>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
