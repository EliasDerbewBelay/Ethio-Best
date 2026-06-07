"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  sceneToPannellumConfig,
  getAdjacentSceneIds,
  INITIAL_PANORAMA_URL,
} from "@/lib/tourData";
import { useVirtualTour } from "@/hooks/useVirtualTour";
import { useAutoRotate } from "@/hooks/useAutoRotate";
import { useGyroscope } from "@/hooks/useGyroscope";
import { useTourLookControls } from "@/hooks/useTourLookControls";
import {
  preloadPannellum,
  preloadPanoramaImage,
} from "@/lib/pannellumLoader";
import type { PannellumViewer } from "@/lib/tourTypes";
import TourLookHint from "./TourLookHint";

interface TourViewerProps {
  onViewerReady?: (viewer: PannellumViewer) => void;
}

export default function TourViewer({ onViewerReady }: TourViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<PannellumViewer | null>(null);
  const {
    config,
    currentSceneId,
    autoRotate,
    gyroEnabled,
    isLoading,
    isLookDragging,
    hasLookInteracted,
    setCurrentScene,
    setLoading,
    setLoadProgress,
    startTransition,
    setActiveInfo,
    markVisited,
    setLookDragging,
    setHasLookInteracted,
    setLookControls,
  } = useVirtualTour();

  const [isInteracting, setIsInteracting] = useState(false);

  const {
    isDragging,
    hasInteracted,
    markInteracted,
    zoomIn,
    zoomOut,
  } = useTourLookControls(viewerRef, containerRef, !isLoading);

  const { resetIdleTimer, stopRotate } = useAutoRotate(
    autoRotate,
    viewerRef,
    isInteracting || isDragging
  );

  useGyroscope(gyroEnabled, viewerRef);

  const handleInteraction = useCallback(() => {
    setIsInteracting(true);
    stopRotate();
    resetIdleTimer();
    setTimeout(() => setIsInteracting(false), 500);
  }, [resetIdleTimer, stopRotate]);

  const wasDraggingRef = useRef(false);

  useEffect(() => {
    setLookDragging(isDragging);
    if (isDragging && !wasDraggingRef.current) {
      handleInteraction();
    }
    wasDraggingRef.current = isDragging;
  }, [isDragging, setLookDragging, handleInteraction]);

  useEffect(() => {
    if (hasInteracted) setHasLookInteracted(true);
  }, [hasInteracted, setHasLookInteracted]);

  useEffect(() => {
    setLookControls({ zoomIn, zoomOut });
    return () => setLookControls(null);
  }, [zoomIn, zoomOut, setLookControls]);

  useEffect(() => {
    if (!config || !containerRef.current) return;

    let destroyed = false;
    let wheelHandler: (() => void) | null = null;

    const init = async () => {
      try {
        setLoading(true);
        setLoadProgress(10);
        setHasLookInteracted(false);

        const initialScene = config.scenes.find(
          (s) => s.id === config.initialSceneId
        );
        const firstPanoramaUrl =
          initialScene?.panoramaUrl ?? INITIAL_PANORAMA_URL;

        await Promise.all([
          preloadPannellum(),
          preloadPanoramaImage(firstPanoramaUrl),
        ]);

        if (destroyed || !window.pannellum || !containerRef.current) return;

        setLoadProgress(75);

        const pannellumConfig = sceneToPannellumConfig(
          config.scenes,
          config.initialSceneId
        );

        const viewer = window.pannellum.viewer(containerRef.current, {
          ...pannellumConfig,
          autoRotate: 0,
          showControls: false,
          compass: false,
          mouseZoom: true,
          draggable: false,
          keyboardZoom: false,
          friction: 0.15,
          hfov: 100,
          minHfov: 55,
          maxHfov: 120,
          minPitch: -65,
          maxPitch: 65,
          sceneFadeDuration: 500,
        });

        viewerRef.current = viewer;
        onViewerReady?.(viewer);

        viewer.on("load", () => {
          setLoadProgress(100);
          setLoading(false);

          getAdjacentSceneIds(config.initialSceneId).forEach((id) => {
            const adj = config.scenes.find((s) => s.id === id);
            if (adj) preloadPanoramaImage(adj.panoramaUrl).catch(() => {});
          });
        });

        viewer.on("scenechange", (sceneId: unknown) => {
          if (typeof sceneId !== "string") return;
          setCurrentScene(sceneId);
          markVisited(sceneId);
          const scene = config.scenes.find((s) => s.id === sceneId);
          if (scene) startTransition(scene.label);

          getAdjacentSceneIds(sceneId).forEach((id) => {
            const adj = config.scenes.find((s) => s.id === id);
            if (adj) preloadPanoramaImage(adj.panoramaUrl).catch(() => {});
          });
        });

        viewer.on("hotspotclick", (hotspot: unknown) => {
          markInteracted();
          handleInteraction();
          const hs = hotspot as { id?: string };
          if (!hs?.id) return;
          const sceneId = viewer.getScene?.() ?? config.initialSceneId;
          const scene = config.scenes.find((s) => s.id === sceneId);
          const infoHs = scene?.hotspots.find(
            (h) => h.id === hs.id && h.type === "info"
          );
          if (infoHs?.info) setActiveInfo(hs.id, infoHs.info);
        });

        const container = containerRef.current;
        wheelHandler = () => {
          markInteracted();
          handleInteraction();
        };
        container?.addEventListener("wheel", wheelHandler, { passive: true });

        setLoadProgress(85);
      } catch {
        setLoadProgress(100);
        setLoading(false);
      }
    };

    init();

    return () => {
      destroyed = true;
      if (wheelHandler && containerRef.current) {
        containerRef.current.removeEventListener("wheel", wheelHandler);
      }
      if (viewerRef.current) {
        viewerRef.current.destroy();
        viewerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config?.propertyId]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !config) return;
    const current = viewer.getScene?.() ?? currentSceneId;
    if (current !== currentSceneId) {
      viewer.loadScene(currentSceneId);
    }
  }, [currentSceneId, config]);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    if (autoRotate && !isInteracting && !isDragging) resetIdleTimer();
    else stopRotate();
  }, [autoRotate, isInteracting, isDragging, resetIdleTimer, stopRotate]);

  return (
    <>
      <div
        className={`absolute inset-0 z-0 bg-purple-950 vt-panorama-shell ${
          isLookDragging ? "vt-dragging" : ""
        }`}
      >
        <div
          ref={containerRef}
          className="h-full w-full touch-none select-none"
          id="vt-pannellum"
          role="application"
          aria-label="360 degree room viewer. Drag or swipe to look left, right, up, and down."
        />
      </div>

      <TourLookHint visible={!isLoading && !hasLookInteracted} />
    </>
  );
}
