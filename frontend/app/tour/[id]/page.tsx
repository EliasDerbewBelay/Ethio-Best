import { MOCK_TOUR_DATA } from "@/constants/tour";
import TourContainer from "@/components/tour/TourContainer";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TourPage({ params }: PageProps) {
  const { id } = await params;
  
  const tourData = MOCK_TOUR_DATA;

  if (!tourData) {
    notFound();
  }

  return <TourContainer tourData={tourData} />;
}
