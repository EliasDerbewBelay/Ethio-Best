import Image from "next/image";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import type { Property, ViewMode } from "@/types/property";
import { FORMAT_OPTIONS } from "@/constants/property";
import Link from "next/link";

interface ListPropertyCardProps {
  property: Property;
  viewMode: ViewMode;
}

const ListPropertyCard: React.FC<ListPropertyCardProps> = ({ property, viewMode }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", { ...FORMAT_OPTIONS.currency, currency: "ETB" }).format(price);
  };

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-56 md:w-64 img-card-sm sm:h-auto sm:min-h-[10rem] shrink-0">
            <Image src={property.image} alt={property.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 256px" />
            {property.featured && (
              <span className="absolute top-2 left-2 bg-amber-500 text-white text-caption font-semibold px-2 py-0.5 rounded-md z-10">FEATURED</span>
            )}
          </div>
          <div className="flex-1 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-h3 text-gray-900 line-clamp-1">{property.title}</h3>
              <p className="text-caption sm:text-body-sm text-gray-500 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{property.location}</span>
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-2 text-gray-600 text-caption sm:text-body-sm">
                <span className="flex items-center gap-1"><Bed size={14} />{property.beds}</span>
                <span className="flex items-center gap-1"><Bath size={14} />{property.baths}</span>
                <span className="flex items-center gap-1"><Square size={14} />{property.sqft}</span>
              </div>
              <p className="sm:hidden text-h3 text-purple-700 mt-2">
                {formatPrice(property.price)}
                <span className="text-caption text-gray-500 font-normal">/{property.priceType}</span>
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-end shrink-0">
              <p className="text-h3 text-gray-900">{formatPrice(property.price)}</p>
              <p className="text-caption text-gray-500">/{property.priceType}</p>
              <Link href={`/estates/${property.id}`} className="mt-2 btn-primary bg-purple-700 text-white hover:bg-purple-800 rounded-lg text-caption py-2 px-4">
                View Details
              </Link>
            </div>
            <Link href={`/estates/${property.id}`} className="sm:hidden">
              <button className="w-full py-2.5 bg-purple-700 text-white text-body-sm font-medium rounded-lg">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 card-hover">
      <div className="relative img-card-sm overflow-hidden">
        <Image src={property.image} alt={property.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw, 33vw" />
        {property.featured && (
          <span className="absolute top-2 left-2 bg-amber-500 text-white text-caption font-semibold px-2 py-0.5 rounded-md z-10">FEATURED</span>
        )}
        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-0.5 text-caption font-medium text-gray-700 z-10">
          {formatPrice(property.price)}
        </span>
      </div>
      <div className="p-3 sm:p-4">
        <h3 className="text-h3 text-gray-900 line-clamp-1">{property.title}</h3>
        <p className="text-caption text-gray-500 mt-0.5 flex items-center gap-1">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="truncate">{property.location}</span>
        </p>
        <div className="flex justify-between items-center mt-2.5 pt-2.5 border-t border-gray-100">
          <div className="flex gap-2.5 text-caption sm:text-body-sm text-gray-600">
            <span className="flex items-center gap-0.5"><Bed size={13} />{property.beds}</span>
            <span className="flex items-center gap-0.5"><Bath size={13} />{property.baths}</span>
            <span className="flex items-center gap-0.5"><Square size={13} />{property.sqft}</span>
          </div>
        </div>
        <Link href={`/estates/${property.id}`}>
          <button className="mt-3 w-full py-2.5 bg-gray-100 text-gray-700 text-body-sm font-medium rounded-lg hover:bg-purple-700 hover:text-white transition-all">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListPropertyCard;
