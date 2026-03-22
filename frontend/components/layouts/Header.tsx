"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Added for active state
import { PhoneCall, Menu, X } from "lucide-react";
import FilteredLogo from "@/public/Logos/onlyLogoIcon.png";
import LanguageSelector from "../ui/languageSelector";

interface NavLink {
  title: string;
  href: string;
}

const NAVIGATION_LINKS: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Real Estates", href: "/estates" },
  { title: "News and Blog", href: "/news" },
  { title: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-800 bg-purple-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 transition-transform active:scale-95"
        >
          <Image
            src={FilteredLogo}
            alt="Ethio Best Logo"
            height={45}
            width={45}
            className="h-auto w-10 md:w-12 object-contain"
            priority
          />
          <div className="flex flex-col leading-none">
            <h1 className="text-sm font-bold tracking-tight md:text-base">
              ETHIO BEST
            </h1>
            <p className="text-[10px] text-purple-200 md:text-xs">
              Real Estate
            </p>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-1 bg-purple-950/40 border border-white/5 px-2 py-1 rounded-full">
          {NAVIGATION_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${
                    isActive
                      ? "text-yellow-400 bg-white/10"
                      : "text-purple-100 hover:text-white hover:bg-white/5 active:scale-90"
                  }
                `}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3 md:gap-6">
          <LanguageSelector />

          {/* Phone CTA */}
          <a
            href="tel:+251975612114"
            className="hidden md:flex items-center gap-2 bg-yellow-400 text-purple-950 px-5 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95"
          >
            <PhoneCall size={18} />
            <span className="text-sm tracking-tight">(+251) 975 6121 14</span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={toggleMenu}
            className="p-2 xl:hidden text-white transition-all hover:bg-white/10 rounded-full active:scale-90"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`
        xl:hidden border-t border-purple-800 bg-purple-950 transition-all duration-300 overflow-hidden
        ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {NAVIGATION_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  text-lg font-medium p-3 rounded-xl transition-all active:scale-[0.98]
                  ${
                    isActive
                      ? "bg-purple-800 text-yellow-400"
                      : "text-purple-100 hover:bg-white/5"
                  }
                `}
              >
                {item.title}
              </Link>
            );
          })}
          <div className="pt-4">
            <a
              href="tel:+251975612114"
              className="flex items-center justify-center gap-3 bg-yellow-400 text-purple-950 py-4 rounded-xl font-bold transition-all active:scale-95"
            >
              <PhoneCall size={20} /> Call Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
