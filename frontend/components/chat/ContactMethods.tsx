"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { BRAND_CONTACT_METHODS } from "@/constants/brand";

const ICONS = {
  phone: Phone,
  email: Mail,
  visit: MapPin,
} as const;

interface ContactMethodsProps {
  variant?: "cards" | "compact" | "inline";
}

export default function ContactMethods({
  variant = "cards",
}: ContactMethodsProps) {
  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-1.5">
        {BRAND_CONTACT_METHODS.map((method) => {
          const Icon = ICONS[method.id];
          const isExternal =
            method.href.startsWith("http") ||
            method.href.startsWith("tel") ||
            method.href.startsWith("mailto");

          const className =
            "inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-purple-800 shadow-sm transition-all hover:border-yellow-300 hover:bg-yellow-50 active:scale-95";

          const inner = (
            <>
              <Icon size={12} className="shrink-0 text-purple-600" />
              <span>{method.label}</span>
            </>
          );

          return isExternal ? (
            <a key={method.id} href={method.href} className={className}>
              {inner}
            </a>
          ) : (
            <Link key={method.id} href={method.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-2">
      {BRAND_CONTACT_METHODS.map((method) => {
        const Icon = ICONS[method.id];
        const isExternal =
          method.href.startsWith("http") ||
          method.href.startsWith("tel") ||
          method.href.startsWith("mailto");
        const isCompact = variant === "compact";

        const inner = (
          <>
            <div
              className={`flex shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-700 ${
                isCompact ? "h-8 w-8" : "h-9 w-9"
              }`}
            >
              <Icon size={isCompact ? 14 : 16} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-purple-700">
                {method.label}
              </p>
              <p
                className={`truncate font-semibold text-slate-800 ${
                  isCompact ? "text-xs" : "text-sm"
                }`}
              >
                {method.value}
              </p>
              {!isCompact && (
                <p className="text-[11px] text-slate-500">{method.description}</p>
              )}
            </div>
            <ArrowUpRight size={14} className="shrink-0 text-purple-400" />
          </>
        );

        const className = `group flex items-center gap-2.5 rounded-xl border border-purple-100 bg-white shadow-sm transition-all hover:border-yellow-300 hover:bg-yellow-50/40 active:scale-[0.98] ${
          isCompact ? "p-2.5" : "p-3"
        }`;

        return isExternal ? (
          <a key={method.id} href={method.href} className={className}>
            {inner}
          </a>
        ) : (
          <Link key={method.id} href={method.href} className={className}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
