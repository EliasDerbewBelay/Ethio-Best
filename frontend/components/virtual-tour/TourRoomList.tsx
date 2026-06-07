"use client";

import { memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useVirtualTour } from "@/hooks/useVirtualTour";

function TourRoomList() {
  const {
    config,
    currentSceneId,
    showRoomList,
    visitedSceneIds,
    toggleRoomList,
    navigateToScene,
  } = useVirtualTour();

  if (!config) return null;

  return (
    <AnimatePresence>
      {showRoomList && (
        <>
          <motion.div
            className="absolute inset-0 z-30 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleRoomList}
          />
          <motion.aside
            className="vt-glass pointer-events-auto absolute top-0 left-0 z-40 flex h-full w-[min(18rem,80vw)] flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            role="navigation"
            aria-label="Room list"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <h2 className="text-sm font-semibold tracking-widest text-white/80 uppercase">
                All Rooms
              </h2>
              <button
                type="button"
                onClick={toggleRoomList}
                className="rounded-lg p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
                aria-label="Close room list"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <ul className="flex-1 overflow-y-auto p-3 space-y-2">
              {config.scenes.map((scene, idx) => {
                const isActive = scene.id === currentSceneId;
                const isVisited = visitedSceneIds.has(scene.id);
                return (
                  <li key={scene.id}>
                    <button
                      type="button"
                      onClick={() => {
                        navigateToScene(scene.id);
                        toggleRoomList();
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl p-2.5 text-left transition ${
                        isActive
                          ? "bg-yellow-400/20 ring-1 ring-yellow-400/50"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                        <Image
                          src={scene.thumbnailUrl}
                          alt={scene.label}
                          fill
                          className="object-cover"
                          loading="lazy"
                          unoptimized
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">
                          {idx + 1}. {scene.label}
                        </p>
                        {isVisited && (
                          <span className="flex items-center gap-1 text-[10px] text-yellow-400">
                            <Check className="h-3 w-3" /> Visited
                          </span>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default memo(TourRoomList);
