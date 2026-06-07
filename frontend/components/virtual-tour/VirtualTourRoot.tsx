"use client";

import { useEffect } from "react";
import VirtualTourModal from "./VirtualTourModal";
import { preloadPannellum, preloadPanoramaImage } from "@/lib/pannellumLoader";
import { INITIAL_PANORAMA_URL } from "@/lib/tourData";

/** Mount once in the app layout — warms Pannellum + first panorama in the background */
export default function VirtualTourRoot() {
  useEffect(() => {
    const warm = () => {
      preloadPannellum().catch(() => {});
      preloadPanoramaImage(INITIAL_PANORAMA_URL).catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(warm, { timeout: 4000 });
      return () => cancelIdleCallback(id);
    }

    const t = setTimeout(warm, 1500);
    return () => clearTimeout(t);
  }, []);

  return <VirtualTourModal />;
}
