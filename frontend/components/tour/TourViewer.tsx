"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useState, useEffect } from "react";
import { TourScene } from "@/types/tour";
import Hotspot from "./Hotspot";

/**
 * 360 Environment Component
 * 
 * This component renders the internal sphere with the panoramic texture.
 * We use useLoader instead of useTexture directly to have more control over the texture.
 */
function Environment({ scene, onNavigate }: { scene: TourScene; onNavigate: (id: string) => void }) {
  const texture = useLoader(THREE.TextureLoader, scene.image);
  
  // Basic optimization: ensure texture is filtered correctly
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <group>
      {/* 
        The Sphere. 
        Note scale=[-1, 1, 1] which effectively flips the sphere inside out,
        allowing the texture to be visible from the internal camera position.
      */}
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>

      {/* Render Hotspots for current scene */}
      {scene.hotspots.map((hs) => (
        <Hotspot key={hs.id} hotspot={hs} onNavigate={onNavigate} />
      ))}
    </group>
  );
}

interface TourViewerProps {
  scenes: TourScene[];
  initialSceneId: string;
}

export default function TourViewer({ scenes, initialSceneId }: TourViewerProps) {
  const [activeSceneId, setActiveSceneId] = useState(initialSceneId);
  const activeScene = scenes.find((s) => s.id === activeSceneId) || scenes[0];

  const handleNavigate = (id: string) => {
    setActiveSceneId(id);
    console.log(`Navigating to scene: ${id}`);
  };

  return (
    <div className="w-full h-full bg-slate-900 ring-4 ring-purple-900/20 rounded-[2rem] overflow-hidden shadow-2xl relative">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault fov={75} position={[0, 0, 0]} />
          
          {/* 
            OrbitControls for 360 dragging behavior.
            enableZoom={true} allows user to zoom.
            enablePan={false} keeps the camera centered in the sphere.
          */}
          <OrbitControls 
            enableZoom={true} 
            enablePan={false} 
            rotateSpeed={-0.4} // Negative for natural 'drag-the-scene' feel
            dampingFactor={0.05}
            enableDamping={true}
            minDistance={1}
            maxDistance={200}
          />

          <Environment scene={activeScene} onNavigate={handleNavigate} />
        </Suspense>
      </Canvas>

      {/* Internal Overlay for Room Name */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="bg-black/40 backdrop-blur-xl px-8 py-3 rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 hover:bg-black/60">
           <h2 className="text-white font-extrabold text-xl tracking-[0.2em] uppercase text-center">
             {activeScene.name}
           </h2>
        </div>
      </div>
      
      {/* Loading Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60 pointer-events-none">
        <p className="text-white/80 text-[10px] font-bold tracking-[0.3em] uppercase animate-pulse">
           Drag to look around • Scroll to zoom
        </p>
      </div>
    </div>
  );
}
