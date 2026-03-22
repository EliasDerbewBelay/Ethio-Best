import { TourData } from "@/types/tour";

/**
 * Enhanced Mock Tour Data
 * 
 * Now includes multiple rooms: Living Room, Dining Room, Kitchen, 
 * Master Bedroom, luxury Bathroom, and Parking Lot.
 */

export const MOCK_TOUR_DATA: TourData = {
  id: "tour-1",
  propertyName: "Equestrian Family Home",
  initialSceneId: "living-room",
  scenes: [
    {
      id: "living-room",
      name: "Main Living Area",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop",
      hotspots: [
        { id: "hs-1", position: [10, 0, -5], label: "Go to Kitchen", targetSceneId: "kitchen" },
        { id: "hs-2", position: [-10, 0, 5], label: "Go to Dining Room", targetSceneId: "dining-room" },
        { id: "hs-3", position: [0, 0, 10], label: "Go to Bedroom", targetSceneId: "bedroom" },
      ],
    },
    {
      id: "dining-room",
      name: "Elegant Dining Room",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2070&auto=format&fit=crop",
      hotspots: [
        { id: "hs-4", position: [10, 0, 0], label: "Back to Living Room", targetSceneId: "living-room" },
      ],
    },
    {
      id: "kitchen",
      name: "Modern Gourmet Kitchen",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop",
      hotspots: [
        { id: "hs-5", position: [-10, 0, 5], label: "Return to Living Room", targetSceneId: "living-room" },
      ],
    },
    {
      id: "bedroom",
      name: "Master Suite",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop",
      hotspots: [
        { id: "hs-6", position: [0, 0, -10], label: "Back to Living Room", targetSceneId: "living-room" },
        { id: "hs-7", position: [10, 0, 5], label: "Go to Bathroom", targetSceneId: "bathroom" },
      ],
    },
    {
      id: "bathroom",
      name: "Luxury Spa Bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2070&auto=format&fit=crop",
      hotspots: [
        { id: "hs-8", position: [-10, 0, -5], label: "Back to Bedroom", targetSceneId: "bedroom" },
      ],
    },
    {
      id: "parking",
      name: "Secure Parking Lot",
      image: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?q=80&w=2070&auto=format&fit=crop",
      hotspots: [
        { id: "hs-9", position: [0, 0, 10], label: "Enter House (Living Room)", targetSceneId: "living-room" },
      ],
    },
  ],
};
