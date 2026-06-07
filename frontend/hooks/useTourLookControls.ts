"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PannellumViewer } from "@/lib/tourTypes";

const DRAG_SENSITIVITY = 0.14;
const MIN_PITCH = -65;
const MAX_PITCH = 65;

interface DragState {
  active: boolean;
  pointerId: number;
  startX: number;
  startY: number;
  startYaw: number;
  startPitch: number;
}

export function useTourLookControls(
  viewerRef: React.RefObject<PannellumViewer | null>,
  containerRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean
) {
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const dragRef = useRef<DragState>({
    active: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    startYaw: 0,
    startPitch: 0,
  });

  const onLookStart = useCallback(() => {
    setIsDragging(true);
    setHasInteracted(true);
  }, []);

  const onLookEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const markInteracted = useCallback(() => {
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    if (!container) return;

    const isHotspot = (target: EventTarget | null) =>
      target instanceof Element && Boolean(target.closest(".pnlm-hotspot"));

    const onPointerDown = (event: PointerEvent) => {
      const viewer = viewerRef.current;
      if (!viewer || isHotspot(event.target)) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;

      dragRef.current = {
        active: true,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        startYaw: viewer.getYaw(),
        startPitch: viewer.getPitch(),
      };

      setIsDragging(true);
      setHasInteracted(true);
      container.setPointerCapture(event.pointerId);
      event.preventDefault();
    };

    const onPointerMove = (event: PointerEvent) => {
      const viewer = viewerRef.current;
      const drag = dragRef.current;
      if (!viewer || !drag.active || event.pointerId !== drag.pointerId) return;

      const deltaX = event.clientX - drag.startX;
      const deltaY = event.clientY - drag.startY;

      viewer.setYaw(drag.startYaw - deltaX * DRAG_SENSITIVITY);
      viewer.setPitch(
        Math.max(
          MIN_PITCH,
          Math.min(MAX_PITCH, drag.startPitch + deltaY * DRAG_SENSITIVITY)
        )
      );

      event.preventDefault();
    };

    const endDrag = (event: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag.active || event.pointerId !== drag.pointerId) return;

      dragRef.current.active = false;
      setIsDragging(false);

      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", endDrag);
    container.addEventListener("pointercancel", endDrag);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", endDrag);
      container.removeEventListener("pointercancel", endDrag);
    };
  }, [enabled, viewerRef, containerRef]);

  useEffect(() => {
    if (!enabled) return;

    const onWindowUp = () => {
      dragRef.current.active = false;
      setIsDragging(false);
    };

    window.addEventListener("mouseup", onWindowUp);
    window.addEventListener("touchend", onWindowUp);

    return () => {
      window.removeEventListener("mouseup", onWindowUp);
      window.removeEventListener("touchend", onWindowUp);
    };
  }, [enabled]);

  const zoomIn = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer?.getHfov || !viewer?.setHfov) return;
    viewer.setHfov(Math.max(55, viewer.getHfov() - 12));
    setHasInteracted(true);
  }, [viewerRef]);

  const zoomOut = useCallback(() => {
    const viewer = viewerRef.current;
    if (!viewer?.getHfov || !viewer?.setHfov) return;
    viewer.setHfov(Math.min(120, viewer.getHfov() + 12));
    setHasInteracted(true);
  }, [viewerRef]);

  return {
    isDragging,
    hasInteracted,
    onLookStart,
    onLookEnd,
    markInteracted,
    zoomIn,
    zoomOut,
  };
}
