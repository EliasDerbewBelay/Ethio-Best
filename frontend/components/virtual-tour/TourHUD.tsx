"use client";

import { memo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Play,
  Pause,
  Smartphone,
  Map,
  Share2,
  List,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { useVirtualTour } from "@/hooks/useVirtualTour";
import { useGyroscopeSupported } from "@/hooks/useGyroscope";

function TourHUD() {
  const gyroSupported = useGyroscopeSupported();
  const {
    config,
    property,
    currentSceneId,
    isLoading,
    showEndScreen,
    autoRotate,
    gyroEnabled,
    isFullscreen,
    closeTour,
    toggleAutoRotate,
    toggleMinimap,
    toggleRoomList,
    setGyroEnabled,
    setFullscreen,
    showToast,
    goToPrevScene,
    goToNextScene,
    lookControls,
  } = useVirtualTour();

  const currentScene = config?.scenes.find((s) => s.id === currentSceneId);
  const sceneIndex = config?.scenes.findIndex((s) => s.id === currentSceneId) ?? 0;

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().then(() => setFullscreen(true));
    } else {
      document.exitFullscreen?.().then(() => setFullscreen(false));
    }
  }, [setFullscreen]);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showToast("Tour link copied to clipboard");
    } catch {
      showToast(url);
    }
  }, [showToast]);

  const handleGyro = useCallback(() => {
    const next = !gyroEnabled;
    setGyroEnabled(next);
    if (next) showToast("Tilt your phone to look around");
  }, [gyroEnabled, setGyroEnabled, showToast]);

  if (!config || isLoading || showEndScreen) return null;

  const propertyName = property?.title ?? config.propertyName;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col">
      {/* Top bar */}
      <motion.header
        className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 sm:px-6"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="min-w-0">
          <p
            className="truncate text-base text-white sm:text-lg"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            {propertyName}
            <span className="text-yellow-400"> · </span>
            <span className="text-white/80">{currentScene?.label}</span>
          </p>
          <div className="mt-1.5 flex items-center gap-1.5">
            {config.scenes.map((scene, i) => (
              <span
                key={scene.id}
                className={`h-1.5 rounded-full transition-all ${
                  i === sceneIndex
                    ? "w-4 bg-yellow-400"
                    : "w-1.5 bg-white/30"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={closeTour}
          className="vt-glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/80 transition hover:text-white"
          aria-label="Close virtual tour"
        >
          <X className="h-5 w-5" />
        </button>
      </motion.header>

      <div className="flex-1" />

      {/* Bottom control bar */}
      <motion.footer
        className="pointer-events-auto mx-3 mb-4 sm:mx-5 sm:mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="vt-glass flex flex-wrap items-center justify-between gap-2 rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={goToPrevScene}
              className="rounded-xl p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Previous room"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="hidden min-w-[5rem] text-center text-xs font-medium text-white/80 sm:inline sm:text-sm">
              {currentScene?.label}
            </span>
            <button
              type="button"
              onClick={goToNextScene}
              className="rounded-xl p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Next room"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-0.5 sm:gap-1">
            <HudButton
              onClick={() => lookControls?.zoomIn()}
              label="Zoom in"
              icon={<ZoomIn className="h-4 w-4" />}
            />
            <HudButton
              onClick={() => lookControls?.zoomOut()}
              label="Zoom out"
              icon={<ZoomOut className="h-4 w-4" />}
            />
            <HudButton
              onClick={toggleRoomList}
              label="Room list"
              icon={<List className="h-4 w-4" />}
            />
            <HudButton
              onClick={toggleAutoRotate}
              label={autoRotate ? "Pause auto-rotate" : "Start auto-rotate"}
              icon={
                autoRotate ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )
              }
              active={autoRotate}
            />
            <HudButton
              onClick={toggleFullscreen}
              label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              icon={
                isFullscreen ? (
                  <Minimize className="h-4 w-4" />
                ) : (
                  <Maximize className="h-4 w-4" />
                )
              }
            />
            {gyroSupported && (
              <HudButton
                onClick={handleGyro}
                label="VR / Gyroscope mode"
                icon={<Smartphone className="h-4 w-4" />}
                active={gyroEnabled}
              />
            )}
            <HudButton
              onClick={toggleMinimap}
              label="Toggle minimap"
              icon={<Map className="h-4 w-4" />}
            />
            <HudButton
              onClick={handleShare}
              label="Share tour"
              icon={<Share2 className="h-4 w-4" />}
            />
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

function HudButton({
  onClick,
  label,
  icon,
  active,
}: {
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`rounded-xl p-2 transition ${
        active
          ? "bg-yellow-400/20 text-yellow-400"
          : "text-white/70 hover:bg-white/10 hover:text-white"
      }`}
    >
      {icon}
    </button>
  );
}

export default memo(TourHUD);
