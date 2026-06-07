"use client";

/**
 * Hotspots are rendered by Pannellum via CSS classes (vt-nav-hotspot, vt-info-hotspot).
 * This module exports style helpers referenced in globals.css.
 * Info card popups are handled by TourInfoCard via hotspotclick events.
 */
export const TOUR_HOTSPOT_CSS = {
  navigation: "vt-nav-hotspot",
  info: "vt-info-hotspot",
} as const;
