"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Menu, X } from "lucide-react";
import FilteredLogo from "@/public/Logos/onlyLogoIcon.png";
import LanguageSelector from "../ui/languageSelector";

// 1. Defined Interfaces for strict type safety
interface NavLink {
  title: string;
  href: string;
}

const NAVIGATION_LINKS: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Real Estates", href: "/estates" }, // Fixed typo
  { title: "Virtual Touring", href: "/touring" },
  { title: "News and Blog", href: "/news" },
  { title: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-800 bg-purple-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO - Always Left */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
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

        {/* DESKTOP NAVIGATION - Hidden on Mobile */}
        <nav className="hidden xl:flex items-center gap-1 bg-purple-500/10 border border-white/10 px-4 py-1.5 rounded-full">
          {NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* RIGHT SECTION: Language + CTA (Desktop) / Language + Menu (Mobile) */}
        <div className="flex items-center gap-3 md:gap-6">
          <LanguageSelector />

          {/* Phone CTA - Hidden on Mobile/Small tablets to save space */}
          <a
            href="tel:+251975612114"
            className="hidden md:flex items-center gap-2 bg-yellow-400 text-purple-950 px-4 py-2 rounded-lg font-bold transition-all hover:bg-yellow-300 active:scale-95"
          >
            <PhoneCall size={18} />
            <span className="text-sm tracking-tight">(+251) 975 6121 14</span>
          </a>

          {/* MOBILE MENU TOGGLE - Visible only on Mobile/Tablet */}
          <button
            onClick={toggleMenu}
            className="p-1 xl:hidden text-white transition-colors hover:text-yellow-300"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN - Simple, professional slide-down */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-purple-800 bg-purple-950">
          <nav className="flex flex-col p-4 space-y-4">
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium border-b border-purple-900/50 pb-2 active:text-yellow-400"
              >
                {item.title}
              </Link>
            ))}
            <a
              href="tel:+251975612114"
              className="flex items-center justify-center gap-3 bg-yellow-400 text-purple-950 py-3 rounded-lg font-bold"
            >
              <PhoneCall size={20} /> Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
