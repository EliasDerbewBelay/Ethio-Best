"use client";

import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useVirtualTour } from "@/hooks/useVirtualTour";
import type { TourPropertySummary } from "@/lib/tourTypes";

interface VirtualTourButtonProps {
  property: TourPropertySummary;
  url?: string;
}

export default function VirtualTourButton({ property }: VirtualTourButtonProps) {
  const { openTour, isOpen } = useVirtualTour();

  return (
    <motion.button
      type="button"
      layoutId={isOpen ? undefined : `vt-trigger-${property.id}`}
      onClick={() => openTour(property)}
      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-purple-700 to-purple-800 px-5 py-3.5 text-white shadow-lg transition-all active:scale-[0.98] sm:gap-3 sm:py-4 sm:px-6 ring-1 ring-yellow-400/30 hover:ring-yellow-400/60 hover:from-purple-800 hover:to-purple-900"
      aria-label={`Start virtual tour of ${property.title}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 transition group-hover:opacity-100" />
      <PlayCircle className="relative h-5 w-5 shrink-0 text-yellow-400 sm:h-6 sm:w-6" />
      <span className="relative text-body-sm font-bold tracking-wide">
        Start Virtual Tour
      </span>
    </motion.button>
  );
}
