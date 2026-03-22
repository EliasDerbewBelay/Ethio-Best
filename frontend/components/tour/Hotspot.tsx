"use client";

import { Html } from "@react-three/drei";
import { useState } from "react";
import { Hotspot as HotspotType } from "@/types/tour";

/**
 * 3D Hotspot Component
 * 
 * Represents an interactive point in the 3D scene.
 * It uses a simple mesh for the 3D position and the R3F Drei <Html /> 
 * component to render a high-quality React/Tailwind UI on top of it.
 */

interface HotspotProps {
  hotspot: HotspotType;
  onNavigate: (targetId: string) => void;
}

export default function Hotspot({ hotspot, onNavigate }: HotspotProps) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (hotspot.targetSceneId) {
      onNavigate(hotspot.targetSceneId);
    } else {
      console.log(`Clicked hotspot: ${hotspot.label} - ${hotspot.description || "No description"}`);
      alert(`${hotspot.label}\n\n${hotspot.description || "Additional details coming soon!"}`);
    }
  };

  return (
    <group position={hotspot.position}>
      {/* Invisible interaction sphere to make it easier to click */}
      <mesh 
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        visible={false}
      >
        <sphereGeometry args={[1, 16, 16]} />
      </mesh>

      {/* HTML UI Element projected onto 3D position */}
      <Html center distanceFactor={15}>
        <div 
          className={`flex flex-col items-center gap-2 transition-all duration-300 transform ${
            hovered ? "scale-110" : "scale-100"
          }`}
        >
          {/* Pulse animation for visibility */}
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-50" />
            <button
              onClick={handleClick}
              className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg border-2 border-white transition-colors duration-300 ${
                hotspot.targetSceneId ? "bg-purple-600 hover:bg-purple-700" : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {hotspot.targetSceneId ? (
                <span className="text-white text-lg font-bold">→</span>
              ) : (
                <span className="text-white text-lg font-bold">i</span>
              )}
            </button>
          </div>

          {/* Label that appears on hover or always if it's a target */}
          <div 
            className={`px-3 py-1 bg-black/80 backdrop-blur-md rounded-lg whitespace-nowrap transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-white text-xs font-bold uppercase tracking-wider">
              {hotspot.label}
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
}
