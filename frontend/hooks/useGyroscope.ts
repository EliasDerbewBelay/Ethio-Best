"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PannellumViewer } from "@/lib/tourTypes";

export function useGyroscopeSupported(): boolean {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    const hasOrientation =
      typeof window !== "undefined" &&
      ("DeviceOrientationEvent" in window ||
        "ondeviceorientation" in window);
    setSupported(hasOrientation);
  }, []);

  return supported;
}

export function useGyroscope(
  enabled: boolean,
  viewerRef: React.RefObject<PannellumViewer | null>
) {
  const baseOrientation = useRef({ alpha: 0, beta: 0, gamma: 0 });
  const initialized = useRef(false);

  const handleOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      const viewer = viewerRef.current;
      if (!viewer || !enabled) return;

      const { alpha, beta, gamma } = event;
      if (alpha == null || beta == null || gamma == null) return;

      if (!initialized.current) {
        baseOrientation.current = { alpha, beta, gamma };
        initialized.current = true;
        return;
      }

      const yawDelta = alpha - baseOrientation.current.alpha;
      const pitchDelta = beta - baseOrientation.current.beta;

      viewer.setYaw(viewer.getYaw() + yawDelta * 0.15);
      viewer.setPitch(
        Math.max(-85, Math.min(85, viewer.getPitch() + pitchDelta * 0.1))
      );

      baseOrientation.current = { alpha, beta, gamma };
    },
    [enabled, viewerRef]
  );

  useEffect(() => {
    if (!enabled) {
      initialized.current = false;
      return;
    }

    const requestPermission = async () => {
      const DOE = DeviceOrientationEvent as typeof DeviceOrientationEvent & {
        requestPermission?: () => Promise<"granted" | "denied">;
      };

      if (typeof DOE.requestPermission === "function") {
        try {
          const result = await DOE.requestPermission();
          if (result !== "granted") return;
        } catch {
          return;
        }
      }

      window.addEventListener("deviceorientation", handleOrientation, true);
    };

    requestPermission();

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
      initialized.current = false;
    };
  }, [enabled, handleOrientation]);
}
