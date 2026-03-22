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
      href="/tour/1" // Simulated tour ID
      className="relative group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      
      <div className="flex items-center gap-2">
        <PlayCircle className="w-6 h-6 animate-pulse" />
        <span className="tracking-wide">VISIT VIRTUALLY NOW</span>
      </div>
      
      <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
}
