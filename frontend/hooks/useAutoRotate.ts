"use client";

import { useCallback, useEffect, useRef } from "react";
import type { PannellumViewer } from "@/lib/tourTypes";

const IDLE_MS = 3000;
const ROTATE_SPEED = -2;

export function useAutoRotate(
  enabled: boolean,
  viewerRef: React.RefObject<PannellumViewer | null>,
  isInteracting: boolean
) {
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rotating = useRef(false);

  const stopRotate = useCallback(() => {
    const viewer = viewerRef.current;
    if (viewer && rotating.current) {
      viewer.stopAutoRotate();
      rotating.current = false;
    }
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
  }, [viewerRef]);

  const startRotate = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer || !enabled || isInteracting) return;
    if (!rotating.current) {
      viewer.startAutoRotate(ROTATE_SPEED);
      rotating.current = true;
    }
  }, [enabled, isInteracting, viewerRef]);

  const resetIdleTimer = useCallback(() => {
    stopRotate();
    if (!enabled) return;
    idleTimer.current = setTimeout(startRotate, IDLE_MS);
  }, [enabled, startRotate, stopRotate]);

  useEffect(() => {
    if (!enabled) {
      stopRotate();
      return;
    }
    resetIdleTimer();
    return () => stopRotate();
  }, [enabled, isInteracting, resetIdleTimer, stopRotate]);

  return { resetIdleTimer, stopRotate };
}
