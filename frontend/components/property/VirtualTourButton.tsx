"use client";

import { ExternalLink, PlayCircle } from "lucide-react";
import Link from "next/link";

interface VirtualTourButtonProps {
  url?: string;
}

export default function VirtualTourButton({ url }: VirtualTourButtonProps) {
  if (!url) return null;

  return (
    <Link
      href="/tour/1"
      className="relative group w-full flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white py-3.5 sm:py-4 px-5 sm:px-6 rounded-xl font-bold text-body-sm shadow-lg transition-all active:scale-[0.98] overflow-hidden"
    >
      <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
      <span className="tracking-wide">Visit Virtually</span>
      <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 shrink-0" />
    </Link>
  );
}
