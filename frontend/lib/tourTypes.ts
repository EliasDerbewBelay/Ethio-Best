export interface TourHotspotInfo {
  title: string;
  description: string;
  icon?: string;
}

export interface TourHotspot {
  id: string;
  type: "navigation" | "info";
  pitch: number;
  yaw: number;
  targetSceneId?: string;
  label?: string;
  info?: TourHotspotInfo;
}

export interface TourScene {
  id: string;
  label: string;
  panoramaUrl: string;
  thumbnailUrl: string;
  initialYaw: number;
  initialPitch: number;
  hotspots: TourHotspot[];
  /** Minimap position (0–100 percentage) */
  minimap: { x: number; y: number; w: number; h: number };
}

export interface TourPropertySummary {
  id: number;
  title: string;
  price: number;
  priceType: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

export interface TourConfig {
  propertyId: number;
  propertyName: string;
  initialSceneId: string;
  scenes: TourScene[];
}

export interface MinimapRoom {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export type TourTransitionPhase = "idle" | "blur-out" | "title-card" | "fade-in";

export interface PannellumViewer {
  destroy: () => void;
  loadScene: (sceneId: string, pitch?: number, yaw?: number, hfov?: number) => void;
  getScene: () => string;
  getPitch: () => number;
  getYaw: () => number;
  getHfov: () => number;
  setPitch: (pitch: number) => void;
  setYaw: (yaw: number) => void;
  setHfov: (hfov: number) => void;
  startAutoRotate: (speed: number) => void;
  stopAutoRotate: () => void;
  isLoaded: () => boolean;
  on: (event: string, callback: (...args: unknown[]) => void) => void;
  off?: (event: string, callback: (...args: unknown[]) => void) => void;
}

export interface PannellumApi {
  viewer: (container: HTMLElement | string, config: Record<string, unknown>) => PannellumViewer;
}

declare global {
  interface Window {
    pannellum?: PannellumApi;
  }
}
