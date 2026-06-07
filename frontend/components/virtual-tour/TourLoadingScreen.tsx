"use client";

import { motion } from "framer-motion";
import { useVirtualTour } from "@/hooks/useVirtualTour";

export default function TourLoadingScreen() {
  const { isLoading, loadProgress, property, config } = useVirtualTour();

  if (!isLoading) return null;

  const title = property?.title ?? config?.propertyName ?? "Property";

  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <p className="mb-6 text-center text-lg text-white sm:text-xl font-semibold">
        {title}
        <span className="mt-1 block text-xs font-bold tracking-[0.2em] text-yellow-400 uppercase">
          Virtual Tour
        </span>
      </p>

      <div className="relative mb-6 h-12 w-12">
        <div className="absolute inset-0 rounded-full border-2 border-purple-700/50" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-yellow-400" />
      </div>

      <div className="mb-2 w-48 overflow-hidden rounded-full bg-purple-800/50 sm:w-64">
        <motion.div
          className="h-1 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400"
          initial={{ width: "10%" }}
          animate={{ width: `${Math.max(loadProgress, 12)}%` }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </div>

      <p className="text-[10px] tracking-widest text-purple-200/60 uppercase">
        Loading 360° view…
      </p>
    </motion.div>
  );
}
