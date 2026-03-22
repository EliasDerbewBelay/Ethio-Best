import Image from "next/image";
import {
  Rotate3d,
  Heart,
  BedDouble,
  Bath,
  Square,
  ExternalLink,
} from "lucide-react";

import { Property } from "@/types/property";
import Link from "next/link";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group max-w-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl bg-white border border-gray-100 transition-all duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 384px"
        />

        {property.featured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1 uppercase tracking-wider z-10 shadow-lg">
            <span className="text-xs">⭐</span> FEATURED
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-10 border border-white/20">
          <span className="text-sm font-bold text-blue-700 uppercase tracking-tighter">
            {new Intl.NumberFormat("en-ET", {
              style: "currency",
              currency: "ETB",
              maximumFractionDigits: 0,
            }).format(property.price)}
          </span>
          <span className="text-gray-500 font-medium text-xs"> /{property.priceType}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-slate-800 line-clamp-1">
            {property.title}
          </h2>
          <p className="text-gray-400 text-sm mt-0.5">{property.location}</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 border-b border-gray-100 pb-5">
          <div className="flex items-center gap-2 text-slate-600">
            <BedDouble size={18} className="text-gray-400" />
            <span className="text-sm font-semibold whitespace-nowrap">
              {property.beds} bed
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Bath size={18} className="text-gray-400" />
            <span className="text-sm font-semibold whitespace-nowrap">
              {property.baths} bath
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Square size={16} className="text-gray-400" />
            <span className="text-sm font-semibold whitespace-nowrap">
              {property.sqft} sqft
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto flex justify-between items-center pt-4">
          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide border border-blue-100">
            {property.type}
          </span>
          <div className="flex gap-1.5">
            {/* View Detail Button */}
            <Link
              href={`/estates/${property.id}`}
              title="View Detail"
              className="p-2 cursor-pointer bg-white hover:bg-blue-600 rounded-lg text-blue-600 hover:text-white transition-all duration-200 border border-blue-100 hover:border-blue-600 shadow-sm"
            >
              <ExternalLink size={18} />
            </Link>

            {/* Virtual Touring Button */}
            {property.virtualTourUrl && (
              <a
                href={property.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Virtual Touring"
                className="p-2 cursor-pointer bg-white hover:bg-purple-600 rounded-lg text-purple-600 hover:text-white transition-all duration-200 border border-purple-100 hover:border-purple-600 shadow-sm"
              >
                <Rotate3d size={18} />
              </a>
            )}

            {/* Favorite Button */}
            <button
              title="Add to Favorite"
              className="p-2 cursor-pointer bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-all duration-200 border border-slate-100 hover:border-red-100 shadow-sm"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
