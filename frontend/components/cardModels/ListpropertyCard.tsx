import React from "react";
import Image from "next/image";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Home,
  Building2,
  Store,
} from "lucide-react";
import type { Property, ViewMode } from "@/types/property";
import { FORMAT_OPTIONS } from "@/constants/property";

interface ListPropertyCardProps {
  property: Property;
  viewMode: ViewMode;
}

const ListPropertyCard: React.FC<ListPropertyCardProps> = ({
  property,
  viewMode,
}) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      ...FORMAT_OPTIONS.currency,
      currency: "ETB",
    }).format(price);
  };

  // Helper function to get property type icon
  const getPropertyTypeIcon = (title: string) => {
    if (title.toLowerCase().includes("villa"))
      return <Building2 className="w-4 h-4" />;
    if (title.toLowerCase().includes("store"))
      return <Store className="w-4 h-4" />;
    return <Home className="w-4 h-4" />;
  };

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="flex flex-col sm:flex-row">
          {/* Image Section */}
          <div className="relative sm:w-72 h-48 sm:h-auto">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 288px"
            />
            {property.featured && (
              <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md z-10">
                FEATURED
              </span>
            )}
            <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md z-10">
              {property.type}
            </span>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition cursor-pointer">
                    {property.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </p>
                </div>
                <div className="text-right sm:hidden">
                  <p className="text-2xl font-bold text-gray-900">
                    {formatPrice(property.price)}
                  </p>
                  <p className="text-gray-500 text-xs">/{property.priceType}</p>
                </div>
              </div>

              {/* Features */}
              <div className="flex gap-4 mt-3 text-gray-600 text-sm">
                <span className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  {property.beds} bed{property.beds !== 1 ? "s" : ""}
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  {property.baths} bath{property.baths !== 1 ? "s" : ""}
                </span>
                <span className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  {property.sqft} sqft
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="hidden sm:block text-right ml-6">
              <p className="text-2xl font-bold text-gray-900">
                {formatPrice(property.price)}
              </p>
              <p className="text-gray-500 text-xs">/{property.priceType}</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>

            {/* Mobile button */}
            <button className="sm:hidden mt-4 w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {property.featured && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold px-2 py-1 rounded-md shadow-md z-10">
            FEATURED
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm z-10">
          {property.type}
        </span>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm z-10">
          <p className="text-xs font-medium text-gray-700">
            {formatPrice(property.price)}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition cursor-pointer line-clamp-1">
          {property.title}
        </h3>
        <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </p>

        {/* Features */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
          <div className="flex gap-3 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              {property.beds}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              {property.baths}
            </span>
            <span className="flex items-center gap-1">
              <Square className="w-4 h-4" />
              {property.sqft}
            </span>
          </div>
          <p className="text-lg font-bold text-gray-900">
            {formatPrice(property.price)}
            <span className="text-xs font-normal text-gray-500">
              /{property.priceType}
            </span>
          </p>
        </div>

        <button className="mt-4 w-full py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ListPropertyCard;
