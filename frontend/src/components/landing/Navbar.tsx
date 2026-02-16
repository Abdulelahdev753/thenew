"use client";

import { useState } from "react";
import Image from "next/image";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavContent {
  links: NavLink[];
  login: string;
}

interface NavbarProps {
  lang: "en" | "ar";
  setLang: (lang: "en" | "ar") => void;
  content: NavContent;
}

export default function Navbar({ lang, setLang, content }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div className="relative w-full max-w-[1100px]">
        <nav className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-md">
          {/* Brand */}
          <div className="flex items-center gap-1.5">
            <Image
              src="/images/logo.svg"
              alt="GuiderPlan logo"
              width={24}
              height={24}
              className="shrink-0"
            />
            <span className="text-sm font-semibold leading-none text-white">GuiderPlan</span>
          </div>

          {/* Center links — hidden on mobile */}
          <ul className="hidden items-center gap-6 md:flex">
            {content.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="relative flex h-8 w-8 items-center justify-center md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`absolute h-0.5 w-4 bg-white transition-transform ${menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
              />
              <span
                className={`absolute h-0.5 w-4 bg-white transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute h-0.5 w-4 bg-white transition-transform ${menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
              />
            </button>

            <button
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a
              href="#"
              className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {content.login}
            </a>
          </div>
        </nav>

        {/* Mobile dropdown panel */}
        {menuOpen && (
          <div className="absolute left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md md:hidden">
            <ul className="flex flex-col p-3">
              {content.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
