/**
 * Virtual Tour Type Definitions
 * 
 * These types ensure strict type safety throughout the 3D viewer and UI.
 * We use Vector3 arrays or tuples for Three.js positions to maintain precision.
 */

export interface Hotspot {
  id: string;
  position: [number, number, number]; // [x, y, z] coordinates in 3D space
  label: string;
  description?: string;
  targetSceneId?: string; // For navigating between rooms
}

export interface TourScene {
  id: string;
  name: string;
  image: string; // URL to the equirectangular panoramic image
  hotspots: Hotspot[];
}

export interface TourData {
  id: string;
  propertyName: string;
  initialSceneId: string;
  scenes: TourScene[];
}
