"use client";

import { create } from "zustand";
import type {
  TourConfig,
  TourHotspotInfo,
  TourPropertySummary,
  TourTransitionPhase,
} from "@/lib/tourTypes";
import { buildTourConfig, INITIAL_PANORAMA_URL } from "@/lib/tourData";
import { preloadPannellum, preloadPanoramaImage } from "@/lib/pannellumLoader";

interface VirtualTourState {
  isOpen: boolean;
  isLoading: boolean;
  loadProgress: number;
  config: TourConfig | null;
  property: TourPropertySummary | null;
  currentSceneId: string;
  visitedSceneIds: Set<string>;
  showMinimap: boolean;
  showRoomList: boolean;
  autoRotate: boolean;
  gyroEnabled: boolean;
  isFullscreen: boolean;
  transitionPhase: TourTransitionPhase;
  transitionLabel: string;
  showEndScreen: boolean;
  activeInfo: TourHotspotInfo | null;
  activeInfoId: string | null;
  toastMessage: string | null;
  isLookDragging: boolean;
  hasLookInteracted: boolean;
  lookControls: { zoomIn: () => void; zoomOut: () => void } | null;

  openTour: (property: TourPropertySummary) => void;
  closeTour: () => void;
  setLoading: (loading: boolean) => void;
  setLoadProgress: (progress: number) => void;
  setCurrentScene: (sceneId: string) => void;
  markVisited: (sceneId: string) => void;
  toggleMinimap: () => void;
  toggleRoomList: () => void;
  toggleAutoRotate: () => void;
  setGyroEnabled: (enabled: boolean) => void;
  setFullscreen: (fullscreen: boolean) => void;
  startTransition: (label: string) => void;
  setTransitionPhase: (phase: TourTransitionPhase) => void;
  finishTransition: () => void;
  checkTourComplete: () => void;
  setActiveInfo: (id: string | null, info: TourHotspotInfo | null) => void;
  showToast: (message: string) => void;
  clearToast: () => void;
  restartTour: () => void;
  navigateToScene: (sceneId: string) => void;
  goToPrevScene: () => void;
  goToNextScene: () => void;
  setLookDragging: (dragging: boolean) => void;
  setHasLookInteracted: (interacted: boolean) => void;
  setLookControls: (
    controls: { zoomIn: () => void; zoomOut: () => void } | null
  ) => void;
}

const initialState = {
  isOpen: false,
  isLoading: true,
  loadProgress: 0,
  config: null as TourConfig | null,
  property: null as TourPropertySummary | null,
  currentSceneId: "living-room",
  visitedSceneIds: new Set<string>(),
  showMinimap: true,
  showRoomList: false,
  autoRotate: true,
  gyroEnabled: false,
  isFullscreen: false,
  transitionPhase: "idle" as TourTransitionPhase,
  transitionLabel: "",
  showEndScreen: false,
  activeInfo: null as TourHotspotInfo | null,
  activeInfoId: null as string | null,
  toastMessage: null as string | null,
  isLookDragging: false,
  hasLookInteracted: false,
  lookControls: null as { zoomIn: () => void; zoomOut: () => void } | null,
};

export const useVirtualTourStore = create<VirtualTourState>((set, get) => ({
  ...initialState,

  openTour: (property) => {
    preloadPannellum().catch(() => {});
    preloadPanoramaImage(INITIAL_PANORAMA_URL).catch(() => {});

    const config = buildTourConfig(property.id, property.title);
    set({
      isOpen: true,
      isLoading: true,
      loadProgress: 0,
      config,
      property,
      currentSceneId: config.initialSceneId,
      visitedSceneIds: new Set([config.initialSceneId]),
      showEndScreen: false,
      transitionPhase: "idle",
      activeInfo: null,
      activeInfoId: null,
      showRoomList: false,
      hasLookInteracted: false,
      isLookDragging: false,
    });
    document.body.style.overflow = "hidden";
  },

  closeTour: () => {
    set({
      ...initialState,
      visitedSceneIds: new Set<string>(),
      lookControls: null,
    });
    document.body.style.overflow = "";
  },

  setLookDragging: (dragging) => set({ isLookDragging: dragging }),
  setHasLookInteracted: (interacted) => set({ hasLookInteracted: interacted }),
  setLookControls: (controls) => set({ lookControls: controls }),

  setLoading: (loading) => set({ isLoading: loading }),
  setLoadProgress: (progress) =>
    set({ loadProgress: Math.min(100, Math.max(0, progress)) }),

  setCurrentScene: (sceneId) => {
    const { config, visitedSceneIds } = get();
    if (!config) return;
    const nextVisited = new Set(visitedSceneIds);
    nextVisited.add(sceneId);
    set({ currentSceneId: sceneId, visitedSceneIds: nextVisited });
    get().checkTourComplete();
  },

  markVisited: (sceneId) => {
    const next = new Set(get().visitedSceneIds);
    next.add(sceneId);
    set({ visitedSceneIds: next });
    get().checkTourComplete();
  },

  toggleMinimap: () => set((s) => ({ showMinimap: !s.showMinimap })),
  toggleRoomList: () => set((s) => ({ showRoomList: !s.showRoomList })),
  toggleAutoRotate: () => set((s) => ({ autoRotate: !s.autoRotate })),
  setGyroEnabled: (enabled) => set({ gyroEnabled: enabled }),
  setFullscreen: (fullscreen) => set({ isFullscreen: fullscreen }),

  startTransition: (label) => {
    set({ transitionPhase: "blur-out", transitionLabel: label });
    setTimeout(() => set({ transitionPhase: "title-card" }), 400);
    setTimeout(() => set({ transitionPhase: "fade-in" }), 1000);
    setTimeout(() => get().finishTransition(), 1200);
  },

  setTransitionPhase: (phase) => set({ transitionPhase: phase }),

  finishTransition: () =>
    set({ transitionPhase: "idle", transitionLabel: "" }),

  checkTourComplete: () => {
    const { config, visitedSceneIds, showEndScreen } = get();
    if (!config || showEndScreen) return;
    const allVisited = config.scenes.every((s) => visitedSceneIds.has(s.id));
    if (allVisited) {
      setTimeout(() => set({ showEndScreen: true }), 600);
    }
  },

  setActiveInfo: (id, info) => set({ activeInfoId: id, activeInfo: info }),

  showToast: (message) => {
    set({ toastMessage: message });
    setTimeout(() => get().clearToast(), 3500);
  },

  clearToast: () => set({ toastMessage: null }),

  restartTour: () => {
    const { config } = get();
    if (!config) return;
    set({
      currentSceneId: config.initialSceneId,
      visitedSceneIds: new Set([config.initialSceneId]),
      showEndScreen: false,
      activeInfo: null,
      activeInfoId: null,
      hasLookInteracted: false,
      isLookDragging: false,
    });
  },

  navigateToScene: (sceneId) => {
    const { config, currentSceneId } = get();
    if (!config || sceneId === currentSceneId) return;
    set({ currentSceneId: sceneId, activeInfo: null, activeInfoId: null });
  },

  goToPrevScene: () => {
    const { config, currentSceneId } = get();
    if (!config) return;
    const idx = config.scenes.findIndex((s) => s.id === currentSceneId);
    const prev = config.scenes[(idx - 1 + config.scenes.length) % config.scenes.length];
    get().navigateToScene(prev.id);
  },

  goToNextScene: () => {
    const { config, currentSceneId } = get();
    if (!config) return;
    const idx = config.scenes.findIndex((s) => s.id === currentSceneId);
    const next = config.scenes[(idx + 1) % config.scenes.length];
    get().navigateToScene(next.id);
  },
}));

export function useVirtualTour() {
  return useVirtualTourStore();
}
