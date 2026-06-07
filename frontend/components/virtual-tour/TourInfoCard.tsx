"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Tv, Gem, Sun, Cpu, Droplet, TreePine, Info, type LucideIcon } from "lucide-react";
import { useVirtualTour } from "@/hooks/useVirtualTour";

const ICON_MAP: Record<string, LucideIcon> = {
  tv: Tv,
  gem: Gem,
  sun: Sun,
  cpu: Cpu,
  droplet: Droplet,
  tree: TreePine,
};

function TourInfoCard() {
  const { activeInfo, activeInfoId, setActiveInfo } = useVirtualTour();

  const Icon = activeInfo?.icon
    ? (ICON_MAP[activeInfo.icon] ?? Info)
    : Info;

  return (
    <AnimatePresence>
      {activeInfo && activeInfoId && (
        <motion.div
          key={activeInfoId}
          className="pointer-events-auto absolute top-1/2 left-1/2 z-40 w-[min(90vw,22rem)] -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.97 }}
          transition={{ duration: 0.25 }}
        >
          <div className="vt-glass rounded-2xl p-5 shadow-2xl">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  className="text-lg text-white"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {activeInfo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveInfo(null, null)}
                className="rounded-lg p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white"
                aria-label="Close info card"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {activeInfo.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(TourInfoCard);
