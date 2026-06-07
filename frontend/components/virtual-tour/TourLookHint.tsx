"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand, MousePointer2 } from "lucide-react";

interface TourLookHintProps {
  visible: boolean;
}

function TourLookHint({ visible }: TourLookHintProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-1/2 z-[15] flex -translate-y-1/2 justify-center px-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="vt-glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-400">
              <Hand className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Drag to look left, right, up &amp; down
              </p>
              <p className="text-xs text-purple-200/70 flex items-center gap-1.5 mt-0.5">
                <MousePointer2 className="h-3.5 w-3.5" />
                Desktop: click &amp; drag · Mobile: swipe with one finger
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(TourLookHint);
