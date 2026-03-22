import { MOCK_TOUR_DATA } from "@/constants/tour";
import TourViewer from "@/components/tour/TourViewer";
import TourControls from "@/components/tour/TourControls";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

/**
 * Virtual Tour Page
 * 
 * This page serves as a high-immersion container for the 3D viewer.
 * It's designed to be clean and focused, removing all standard website furniture (header/footer)
 * to maximize the visual impact of the 360° environment.
 */
export default async function TourPage({ params }: PageProps) {
  const { id } = await params;
  
  // In a production scenario, we'd fetch the specific tour based on the property ID
  // For this demonstration, we use our comprehensive mock data.
  const tourData = MOCK_TOUR_DATA;

  if (!tourData) {
    notFound();
  }

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col">
      {/* 
        The 3D Scene Container. 
        We use h-full to fill the viewport.
      */}
      <div className="flex-1 relative">
        <TourViewer 
          scenes={tourData.scenes} 
          initialSceneId={tourData.initialSceneId} 
        />
        
        {/* UI Overlay: Handles all labels, branding, and navigation buttons */}
        <TourControls propertyName={tourData.propertyName} />
      </div>

      {/* 
        SEO & Metadata Hidden Area 
        Ensure accessibility even in high-visual contexts.
      */}
      <div className="sr-only">
        <h1>Virtual Tour of {tourData.propertyName}</h1>
        <p>Explore the property in 360° with interactive hotspots and room-to-room navigation.</p>
      </div>
    </div>
  );
}
