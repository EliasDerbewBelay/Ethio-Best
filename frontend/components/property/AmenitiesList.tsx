import { CheckCircle2 } from "lucide-react";

interface AmenitiesListProps {
  amenities: string[];
}

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-2.5 sm:gap-3">
          <div className="icon-box-sm rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
          </div>
          <span className="text-body-sm text-gray-700 font-medium">{amenity}</span>
        </div>
      ))}
    </div>
  );
}
