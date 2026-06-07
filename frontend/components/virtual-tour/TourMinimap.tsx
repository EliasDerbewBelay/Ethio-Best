"use client";

import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVirtualTour } from "@/hooks/useVirtualTour";

function TourMinimap() {
  const { config, currentSceneId, showMinimap, navigateToScene } =
    useVirtualTour();

  if (!config) return null;

  return (
    <AnimatePresence>
      {showMinimap && (
        <motion.div
          className="pointer-events-auto absolute right-3 bottom-24 z-30 sm:right-5 sm:bottom-28"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="vt-glass overflow-hidden rounded-xl p-2">
            <p className="mb-1.5 text-center text-[9px] tracking-widest text-white/50 uppercase">
              Floor Plan
            </p>
            <svg
              viewBox="0 0 100 100"
              className="h-20 w-24 sm:h-24 sm:w-28"
              role="img"
              aria-label="Floor plan minimap"
            >
              <rect
                x="2"
                y="2"
                width="96"
                height="96"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                rx="4"
              />
              {config.scenes.map((scene) => {
                const { x, y, w, h } = scene.minimap;
                const isActive = scene.id === currentSceneId;
                return (
                  <g key={scene.id}>
                    <rect
                      x={x}
                      y={y}
                      width={w}
                      height={h}
                      rx="2"
                      fill={
                        isActive
                          ? "rgba(201,168,76,0.55)"
                          : "rgba(255,255,255,0.08)"
                      }
                      stroke={
                        isActive ? "#facc15" : "rgba(255,255,255,0.2)"
                      }
                      strokeWidth={isActive ? 1.5 : 0.8}
                      className="cursor-pointer transition-all hover:fill-[rgba(201,168,76,0.3)]"
                      onClick={() => navigateToScene(scene.id)}
                    />
                    <text
                      x={x + w / 2}
                      y={y + h / 2 + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isActive ? "#fff" : "rgba(255,255,255,0.5)"}
                      fontSize="4"
                      fontWeight={isActive ? "600" : "400"}
                      pointerEvents="none"
                    >
                      {scene.label.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default memo(TourMinimap);
