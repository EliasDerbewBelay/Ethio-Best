"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";
import BrandLogo from "@/public/Logos/ella-man-logo.png";
import { BRAND_SHORT_NAME, BRAND_TAGLINE } from "@/constants/brand";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import LanguageSelector from "../ui/languageSelector";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-purple-800 bg-purple-900 text-white shadow-md"
      style={{ height: "var(--header-height)" }}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 transition-transform active:scale-95 min-w-0"
        >
          <Image
            src={BrandLogo}
            alt="Ella Man Real Estate Logo"
            height={40}
            width={40}
            className="h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10 object-contain shrink-0"
            priority
          />
          <div className="flex flex-col leading-none min-w-0">
            <span className="text-caption sm:text-body-sm font-bold tracking-tight truncate">
              {BRAND_SHORT_NAME}
            </span>
            <span className="hidden xs:block text-[10px] text-purple-200 md:text-xs truncate">
              {BRAND_TAGLINE}
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1 bg-purple-950/40 border border-white/5 px-2 py-1 rounded-full">
          {NAVIGATION_ITEMS.map((item) => {
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

        <div className="flex items-center gap-2 sm:gap-3 md:gap-5 shrink-0">
          <LanguageSelector />

          <a
            href="tel:+251975612114"
            className="hidden lg:flex items-center gap-2 bg-yellow-400 text-purple-950 px-4 xl:px-5 py-2.5 rounded-full font-bold transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 active:scale-95 text-sm"
          >
            <PhoneCall size={18} />
            <span className="tracking-tight whitespace-nowrap">
              (+251) 975 6121 14
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
