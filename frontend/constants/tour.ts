import { TourData } from "@/types/tour";

/**
 * Mock Tour Data
 * 
 * Using high-quality panoramic placeholders from Unsplash.
 * In a real-world app, these would be fetched from a CMS or Backend.
 */

export const MOCK_TOUR_DATA: TourData = {
  id: "tour-1",
  propertyName: "Equestrian Family Home",
  initialSceneId: "living-room",
  scenes: [
    {
      id: "living-room",
      name: "Main Living Area",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop", // Elegant living room pano
      hotspots: [
        {
          id: "hs-1",
          position: [10, 0, -5],
          label: "View Kitchen",
          targetSceneId: "kitchen",
        },
        {
          id: "hs-2",
          position: [-8, 2, 10],
          label: "Master Bedroom",
          description: "Spacious master suite with balcony access",
        },
      ],
    },
    {
      id: "kitchen",
      name: "Modern Gourmet Kitchen",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop", // Modern kitchen pano
      hotspots: [
        {
          id: "hs-3",
          position: [-10, 0, 5],
          label: "Back to Living Room",
          targetSceneId: "living-room",
        },
      ],
    },
  ],
};
