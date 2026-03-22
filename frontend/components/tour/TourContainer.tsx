"use client";

import { useState } from "react";
import { TourData } from "@/types/tour";
import TourViewer from "./TourViewer";
import TourControls from "./TourControls";

interface TourContainerProps {
  tourData: TourData;
}

/**
 * Tour Container (Client-Side Wrapper)
 * 
 * Manages the shared state between the 3D TourViewer and the TourControls UI.
 * This allows the Quick-Switch menu in the controls to update the 3D scene.
 */
export default function TourContainer({ tourData }: TourContainerProps) {
  const [activeSceneId, setActiveSceneId] = useState(tourData.initialSceneId);
  const activeScene = tourData.scenes.find((s) => s.id === activeSceneId) || tourData.scenes[0];

  const handleNavigate = (id: string) => {
    setActiveSceneId(id);
  };

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col">
      <div className="flex-1 relative">
        {/* 3D Viewer */}
        <TourViewer 
          scenes={tourData.scenes} 
          activeSceneId={activeSceneId} 
          onNavigate={handleNavigate}
        />
        
        {/* UI Overlay with Room Selection */}
        <TourControls 
          propertyName={tourData.propertyName} 
          scenes={tourData.scenes}
          activeSceneId={activeSceneId}
          onNavigate={handleNavigate}
        />
      </div>

      <div className="sr-only">
        <h1>Virtual Tour of {tourData.propertyName}</h1>
        <p>Explore the property in 360° with interactive hotspots and room-to-room navigation.</p>
      </div>
    </div>
  );
}
