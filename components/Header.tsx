"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavLink } from "./NavLink";

import Image from "next/image";
import logo from "@/public/logo/08.svg";

export default function Header() {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-slate-50">
      <nav className="flex max-w-screen-xl mx-auto flex-wrap justify-between p-2 w-full">
        {/* <div className="flex items-center w-full justify-between"> */}
        <a href="/" className="order-1 self-center font-bold">
          <Image src={logo} alt="logo" height={30} />
        </a>

        <div className="flex flex-row gap-1 order-2 sm:order-3">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex sm:hidden hover:bg-gray-100 p-2 rounded-md "
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        {/* </div> */}

        <div
          className={`sm:block sm:items-center order-3 sm:order-2 w-full sm:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <div className="flex flex-col sm:flex-row sm:gap-2">
            <NavLink href="/news" label={t("news")} />
            <NavLink href="/projects" label={t("projects")} />
            <NavLink href="/teaching" label={t("teaching")} />
            <NavLink href="/team" label={t("team")} />
          </div>
        </div>
      </nav>
    </header>
  );
}
