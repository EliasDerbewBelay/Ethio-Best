"use client";

import { ExternalLink, PlayCircle } from "lucide-react";

interface VirtualTourButtonProps {
  url?: string;
}

export default function VirtualTourButton({ url }: VirtualTourButtonProps) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-5 px-8 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      
      <PlayCircle className="w-8 h-8 animate-pulse" />
      <span className="tracking-wide">VISIT VIRTUALLY NOW</span>
      <ExternalLink className="w-5 h-5 opacity-70" />
      
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-16 h-16 bg-black/10 rounded-full blur-xl" />
    </a>
  );
}
