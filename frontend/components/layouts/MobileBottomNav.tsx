"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/constants/navigation";

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 xl:hidden border-t border-purple-800/80 bg-purple-950/95 backdrop-blur-lg shadow-[0_-4px_24px_rgba(0,0,0,0.2)]"
      style={{
        paddingBottom: "var(--safe-bottom)",
        height: "calc(var(--bottom-nav-height) + var(--safe-bottom))",
      }}
    >
      <ul className="grid h-[var(--bottom-nav-height)] grid-cols-5 items-stretch">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex">
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative flex flex-1 flex-col items-center justify-center gap-0.5 px-1 transition-colors active:scale-95 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-purple-200/80 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-yellow-400" />
                )}

                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-xl transition-colors ${
                    isActive
                      ? "bg-yellow-400/15 text-yellow-400"
                      : "text-purple-200 group-hover:bg-white/5 group-hover:text-white"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 2}
                    aria-hidden="true"
                  />
                </span>

                <span
                  className={`text-[10px] font-semibold leading-none ${
                    isActive ? "text-yellow-400" : "text-purple-300/90"
                  }`}
                >
                  {item.shortLabel}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
