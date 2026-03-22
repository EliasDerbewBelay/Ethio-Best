"use client";

import { 
  Maximize, 
  Minus, 
  Plus, 
  RotateCcw, 
  X, 
  Navigation,
  Box,
  LayoutGrid
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TourScene } from "@/types/tour";

/**
 * Tour Controls Overlay
 * 
 * Implements the professional purple + yellow theme.
 * Now includes a Room Selection menu for quick toggling between areas.
 */

interface TourControlsProps {
  propertyName: string;
  scenes: TourScene[];
  activeSceneId: string;
  onNavigate: (id: string) => void;
}

export default function TourControls({ 
  propertyName, 
  scenes, 
  activeSceneId, 
  onNavigate 
}: TourControlsProps) {
  const [showRoomMenu, setShowRoomMenu] = useState(false);
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="absolute inset-x-0 inset-y-0 pointer-events-none flex flex-col justify-between p-6 sm:p-10">
      
      {/* Header Area */}
      <div className="flex justify-between items-start pointer-events-auto">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-400/20 ring-4 ring-yellow-400/10">
                <Box className="w-6 h-6 text-black" />
             </div>
             <h1 className="text-2xl font-black text-white drop-shadow-lg tracking-tight">
               ETHIO BEST <span className="text-yellow-400">360°</span>
             </h1>
          </div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest pl-1">
            {propertyName}
          </p>
        </div>

        <Link 
          href="/estates" 
          className="bg-white/10 hover:bg-white text-white hover:text-black w-12 h-12 rounded-2xl flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-xl border border-white/20 active:scale-95 group"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
        </Link>
      </div>

      {/* Center Area: Room Selection Menu */}
      {showRoomMenu && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-lg pointer-events-auto">
          <div className="bg-purple-950/80 border border-purple-500/30 p-8 rounded-[3rem] shadow-2xl max-w-2xl w-full animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-white text-2xl font-black uppercase tracking-widest">Select Room</h2>
               <button 
                 onClick={() => setShowRoomMenu(false)}
                 className="p-2 border border-white/10 rounded-full hover:bg-white/10 text-white transition-colors"
               >
                 <X className="w-6 h-6" />
               </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {scenes.map((scene) => (
                 <button
                   key={scene.id}
                   onClick={() => {
                     onNavigate(scene.id);
                     setShowRoomMenu(false);
                   }}
                   className={`relative group h-32 rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                     activeSceneId === scene.id 
                       ? "border-yellow-400 scale-[1.02] shadow-lg shadow-yellow-400/20" 
                       : "border-white/10 hover:border-purple-400"
                   }`}
                 >
                   <img 
                     src={scene.image} 
                     alt={scene.name} 
                     className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                   <div className="absolute bottom-4 inset-x-4">
                     <p className="text-white text-xs font-black uppercase tracking-widest text-center truncate">
                       {scene.name}
                     </p>
                   </div>
                   {activeSceneId === scene.id && (
                     <div className="absolute top-3 right-3 w-3 h-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50" />
                   )}
                 </button>
               ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Controls Panel (Bottom) */}
      <div className="flex flex-row items-end justify-between pointer-events-auto">
        
        {/* Left: Room Switcher Button */}
        <div className="flex flex-col gap-4">
           <button 
             onClick={() => setShowRoomMenu(true)}
             className="flex items-center gap-3 py-3 px-6 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl shadow-xl shadow-purple-600/20 border border-purple-400/30 transition-all hover:-translate-y-1 active:scale-95 group"
           >
             <LayoutGrid className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
             <span className="font-black text-sm uppercase tracking-widest">Toggle Room</span>
           </button>

           {/* Navigation Indicator & Helpers */}
           <div className="hidden lg:flex flex-col gap-3">
             <div className="bg-purple-900/40 backdrop-blur-xl p-5 rounded-[2rem] border border-purple-500/20 shadow-2xl max-w-[240px]">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                   <Navigation className="w-4 h-4 text-black" />
                 </div>
                 <span className="text-white font-black text-sm uppercase tracking-wide">Tour Guide</span>
               </div>
               <p className="text-white/70 text-xs leading-relaxed font-medium">
                 Use the room toggle or click <span className="text-purple-400 font-bold">purple arrows</span>. Yellow markers for info.
               </p>
             </div>
           </div>
        </div>

        {/* Right side group: Zoom & Tools */}
        <div className="flex flex-col items-center gap-4">
          
          <div className="flex flex-col gap-2 p-2 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
            <button 
              className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white transition-all active:scale-90"
              title="Zoom In"
            >
              <Plus className="w-6 h-6" />
            </button>
            <button 
              className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white transition-all active:scale-90"
              title="Zoom Out"
            >
              <Minus className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-4 items-center">
            <button 
              onClick={toggleFullscreen}
              className="w-14 h-14 bg-yellow-400 hover:bg-yellow-300 text-black rounded-2xl flex items-center justify-center shadow-xl shadow-yellow-400/20 transition-all hover:scale-110 active:scale-95"
              title="Toggle Fullscreen"
            >
              <Maximize className="w-6 h-6 font-bold" />
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="w-14 h-14 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-purple-600/20 transition-all hover:scale-110 active:scale-95"
              title="Reset View"
            >
              <RotateCcw className="w-6 h-6 font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
