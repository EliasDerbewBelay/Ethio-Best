"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { useVirtualTour } from "@/hooks/useVirtualTour";
import TourViewer from "./TourViewer";
import TourHUD from "./TourHUD";
import TourLoadingScreen from "./TourLoadingScreen";
import TourInfoCard from "./TourInfoCard";
import TourRoomList from "./TourRoomList";
import TourMinimap from "./TourMinimap";
import TourEndScreen from "./TourEndScreen";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-tour-serif",
});

export default function VirtualTourModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    isOpen,
    closeTour,
    transitionPhase,
    transitionLabel,
    toastMessage,
    clearToast,
    goToPrevScene,
    goToNextScene,
    config,
    currentSceneId,
    navigateToScene,
  } = useVirtualTour();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        closeTour();
        return;
      }
      if (e.key === "ArrowLeft") goToPrevScene();
      if (e.key === "ArrowRight") goToNextScene();
      if (!config) return;
      const idx = config.scenes.findIndex((s) => s.id === currentSceneId);
      if (e.key >= "1" && e.key <= "5") {
        const target = config.scenes[parseInt(e.key, 10) - 1];
        if (target) navigateToScene(target.id);
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [
      isOpen,
      closeTour,
      goToPrevScene,
      goToNextScene,
      config,
      currentSceneId,
      navigateToScene,
    ]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-label="Virtual property tour"
          tabIndex={-1}
          className={`fixed inset-0 z-[9999] bg-purple-950 ${cormorant.variable}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <TourViewer />

          <AnimatePresence>
            <TourLoadingScreen />
          </AnimatePresence>

          {/* Room transition overlay */}
          <AnimatePresence>
            {transitionPhase !== "idle" && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-[25] flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {transitionPhase === "blur-out" && (
                  <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                {(transitionPhase === "title-card" ||
                  transitionPhase === "fade-in") && (
                  <motion.h2
                    className="text-center text-3xl text-white sm:text-4xl"
                    style={{
                      fontFamily: "var(--font-tour-serif), Georgia, serif",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    {transitionLabel}
                  </motion.h2>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <TourHUD />
          <TourRoomList />
          <TourMinimap />
          <TourInfoCard />
          <TourEndScreen />

          {/* Toast */}
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                className="pointer-events-none absolute top-20 left-1/2 z-50 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onAnimationComplete={() => {
                  setTimeout(clearToast, 3000);
                }}
              >
                <div className="vt-glass rounded-full px-5 py-2 text-sm text-white">
                  {toastMessage}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
