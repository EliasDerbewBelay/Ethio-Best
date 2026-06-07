import type { TourConfig, TourScene } from "./tourTypes";

/**
 * Real-estate 360° panoramas — locally hosted in /public/panoramas/
 *
 * All scenes are residential interiors/outdoor spaces (CC0, Poly Haven):
 * - Living Room: open-plan lounge & living area
 * - Master Bedroom: furnished hotel-style bedroom
 * - Kitchen: sunlit kitchen with counters & appliances
 * - Bathroom: en-suite with shower, basin & toilet
 * - Garden Terrace: residential apartment courtyard
 *
 * @see https://polyhaven.com/hdris
 */

/** Web-optimized 2560px equirectangular JPEGs (~0.4–0.8MB each) */
const PANORAMAS = {
  livingRoom: "/panoramas/living-room-opt.jpg",
  masterBedroom: "/panoramas/master-bedroom-opt.jpg",
  kitchen: "/panoramas/kitchen-opt.jpg",
  bathroom: "/panoramas/bathroom-opt.jpg",
  outdoor: "/panoramas/outdoor-opt.jpg",
} as const;

export const INITIAL_PANORAMA_URL = PANORAMAS.livingRoom;

export const DEMO_SCENES: TourScene[] = [
  {
    id: "living-room",
    label: "Living Room",
    panoramaUrl: PANORAMAS.livingRoom,
    thumbnailUrl: PANORAMAS.livingRoom,
    initialYaw: 0,
    initialPitch: 0,
    minimap: { x: 8, y: 28, w: 42, h: 38 },
    hotspots: [
      {
        id: "lr-kitchen",
        type: "navigation",
        pitch: -8,
        yaw: 85,
        targetSceneId: "kitchen",
        label: "→ Kitchen",
      },
      {
        id: "lr-bedroom",
        type: "navigation",
        pitch: -5,
        yaw: -75,
        targetSceneId: "master-bedroom",
        label: "→ Master Bedroom",
      },
      {
        id: "lr-outdoor",
        type: "navigation",
        pitch: -2,
        yaw: 175,
        targetSceneId: "outdoor",
        label: "→ Garden Terrace",
      },
      {
        id: "lr-info-sofa",
        type: "info",
        pitch: 4,
        yaw: -30,
        label: "Living Area",
        info: {
          title: "Open-Plan Living Area",
          description:
            "Spacious lounge with designer seating, natural light, and seamless flow to the kitchen and dining zone.",
          icon: "tv",
        },
      },
      {
        id: "lr-info-flooring",
        type: "info",
        pitch: -15,
        yaw: 40,
        label: "Flooring",
        info: {
          title: "Premium Tile Flooring",
          description:
            "Large-format porcelain tiles with underfloor heating — durable, elegant, and easy to maintain.",
          icon: "gem",
        },
      },
    ],
  },
  {
    id: "master-bedroom",
    label: "Master Bedroom",
    panoramaUrl: PANORAMAS.masterBedroom,
    thumbnailUrl: PANORAMAS.masterBedroom,
    initialYaw: 30,
    initialPitch: 0,
    minimap: { x: 54, y: 8, w: 38, h: 32 },
    hotspots: [
      {
        id: "mb-living",
        type: "navigation",
        pitch: -10,
        yaw: -120,
        targetSceneId: "living-room",
        label: "→ Living Room",
      },
      {
        id: "mb-bathroom",
        type: "navigation",
        pitch: -5,
        yaw: 95,
        targetSceneId: "bathroom",
        label: "→ En-suite Bathroom",
      },
      {
        id: "mb-info-bed",
        type: "info",
        pitch: 8,
        yaw: -20,
        label: "Master Suite",
        info: {
          title: "King-Size Master Suite",
          description:
            "Furnished bedroom with premium mattress, bedside lighting, built-in wardrobe space, and blackout curtains.",
          icon: "sun",
        },
      },
      {
        id: "mb-info-view",
        type: "info",
        pitch: 2,
        yaw: 60,
        label: "Windows",
        info: {
          title: "Garden-Facing Windows",
          description:
            "Large windows with garden views, double glazing, and morning sunlight throughout the suite.",
          icon: "sun",
        },
      },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen",
    panoramaUrl: PANORAMAS.kitchen,
    thumbnailUrl: PANORAMAS.kitchen,
    initialYaw: -20,
    initialPitch: 0,
    minimap: { x: 54, y: 44, w: 38, h: 30 },
    hotspots: [
      {
        id: "kit-living",
        type: "navigation",
        pitch: -8,
        yaw: -90,
        targetSceneId: "living-room",
        label: "→ Living Room",
      },
      {
        id: "kit-bathroom",
        type: "navigation",
        pitch: -5,
        yaw: 60,
        targetSceneId: "bathroom",
        label: "→ Bathroom",
      },
      {
        id: "kit-info-appliances",
        type: "info",
        pitch: 0,
        yaw: 15,
        label: "Appliances",
        info: {
          title: "Fully Fitted Kitchen",
          description:
            "Modern counters, integrated appliances, ample cabinetry, and a layout designed for everyday cooking and entertaining.",
          icon: "cpu",
        },
      },
      {
        id: "kit-info-light",
        type: "info",
        pitch: -8,
        yaw: -15,
        label: "Natural Light",
        info: {
          title: "Sunlit Work Surfaces",
          description:
            "Morning light through window blinds keeps the kitchen bright while maintaining privacy from the street.",
          icon: "sun",
        },
      },
    ],
  },
  {
    id: "bathroom",
    label: "En-suite Bathroom",
    panoramaUrl: PANORAMAS.bathroom,
    thumbnailUrl: PANORAMAS.bathroom,
    initialYaw: 10,
    initialPitch: 0,
    minimap: { x: 54, y: 78, w: 38, h: 32 },
    hotspots: [
      {
        id: "bath-bedroom",
        type: "navigation",
        pitch: -8,
        yaw: -100,
        targetSceneId: "master-bedroom",
        label: "→ Bedroom",
      },
      {
        id: "bath-kitchen",
        type: "navigation",
        pitch: -5,
        yaw: 130,
        targetSceneId: "kitchen",
        label: "→ Kitchen",
      },
      {
        id: "bath-info-shower",
        type: "info",
        pitch: 2,
        yaw: 0,
        label: "Shower",
        info: {
          title: "Walk-in Shower",
          description:
            "Glass-enclosed shower with rainfall head, wall-mounted basin, and premium chrome fixtures throughout.",
          icon: "droplet",
        },
      },
      {
        id: "bath-info-tiles",
        type: "info",
        pitch: -10,
        yaw: 45,
        label: "Finishes",
        info: {
          title: "Spa-Grade Finishes",
          description:
            "Neutral wall tiles, heated mirror, and soft artificial lighting for a clean, hotel-quality bathroom experience.",
          icon: "gem",
        },
      },
    ],
  },
  {
    id: "outdoor",
    label: "Garden Terrace",
    panoramaUrl: PANORAMAS.outdoor,
    thumbnailUrl: PANORAMAS.outdoor,
    initialYaw: 0,
    initialPitch: -5,
    minimap: { x: 8, y: 70, w: 42, h: 26 },
    hotspots: [
      {
        id: "out-living",
        type: "navigation",
        pitch: -3,
        yaw: 0,
        targetSceneId: "living-room",
        label: "→ Enter Home",
      },
      {
        id: "out-info-garden",
        type: "info",
        pitch: -8,
        yaw: 45,
        label: "Courtyard",
        info: {
          title: "Residential Courtyard",
          description:
            "Private apartment garden with lawn, mature planting, and peaceful outdoor space for families.",
          icon: "tree",
        },
      },
      {
        id: "out-info-building",
        type: "info",
        pitch: -5,
        yaw: -60,
        label: "Exterior",
        info: {
          title: "Apartment Exterior",
          description:
            "Well-maintained residential building with secure access, landscaped grounds, and neighbourhood amenities.",
          icon: "sun",
        },
      },
    ],
  },
];

export function buildTourConfig(
  propertyId: number,
  propertyName: string
): TourConfig {
  return {
    propertyId,
    propertyName,
    initialSceneId: "living-room",
    scenes: DEMO_SCENES,
  };
}

export function getAdjacentSceneIds(sceneId: string): string[] {
  const scene = DEMO_SCENES.find((s) => s.id === sceneId);
  if (!scene) return [];
  return [
    ...new Set(
      scene.hotspots
        .filter((h) => h.type === "navigation" && h.targetSceneId)
        .map((h) => h.targetSceneId as string)
    ),
  ];
}

export function sceneToPannellumConfig(
  scenes: TourScene[],
  initialSceneId: string
): Record<string, unknown> {
  const pannellumScenes: Record<string, unknown> = {};

  for (const scene of scenes) {
    pannellumScenes[scene.id] = {
      title: scene.label,
      type: "equirectangular",
      panorama: scene.panoramaUrl,
      yaw: scene.initialYaw,
      pitch: scene.initialPitch,
      hotSpots: scene.hotspots.map((hs) => {
        if (hs.type === "navigation" && hs.targetSceneId) {
          return {
            pitch: hs.pitch,
            yaw: hs.yaw,
            type: "scene",
            text: hs.label ?? scene.label,
            sceneId: hs.targetSceneId,
            targetPitch: 0,
            targetYaw: 0,
            cssClass: "vt-nav-hotspot",
            id: hs.id,
          };
        }
        return {
          pitch: hs.pitch,
          yaw: hs.yaw,
          type: "info",
          text: hs.info?.title ?? hs.label ?? "Info",
          cssClass: "vt-info-hotspot",
          id: hs.id,
        };
      }),
    };
  }

  return {
    default: {
      firstScene: initialSceneId,
      sceneFadeDuration: 800,
      autoLoad: true,
    },
    scenes: pannellumScenes,
  };
}
