import { CheckCircle2 } from "lucide-react";

interface AmenitiesListProps {
  amenities: string[];
}

export default function AmenitiesList({ amenities }: AmenitiesListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex items-center gap-3 group">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-700 font-medium">{amenity}</span>
        </div>
      ))}
    </div>
  );
}
