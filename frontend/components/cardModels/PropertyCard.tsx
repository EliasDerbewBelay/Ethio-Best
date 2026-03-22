import Image from "next/image";
import {
  Rotate3d,
  Heart,
  BedDouble,
  Bath,
  Square,
  ExternalLink,
} from "lucide-react";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  isFeatured: boolean;
  status: string;
  image: string;
}

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

        {property.isFeatured && (
          <div className="absolute top-4 left-4 bg-[#FF5A5F] text-white text-[10px] font-bold px-3 py-1.5 rounded-md flex items-center gap-1 uppercase tracking-wider z-10">
            <span className="text-xs">⚡</span> FEATURED
          </div>
        )}

        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg z-10">
          <span className="text-sm font-bold text-slate-900">
            {property.price.toLocaleString()} birr
          </span>
          <span className="text-gray-500 font-medium text-sm"> / mo</span>
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
        <div className="mt-auto flex justify-between items-center">
          <span className="text-slate-700 font-bold text-sm tracking-wide">
            {property.status}
          </span>
          <div className="flex gap-1.5">
            {/* View Detail Button */}
            <button
              title="View Detail"
              className="p-2 cursor-pointer hover:bg-blue-50 rounded-lg text-slate-400 hover:text-blue-600 transition-all duration-200 border border-transparent hover:border-blue-100"
            >
              <ExternalLink size={18} />
            </button>

            {/* Virtual Touring Button */}
            <button
              title="Virtual Touring"
              className="p-2 cursor-pointer hover:bg-purple-50 rounded-lg text-slate-400 hover:text-purple-600 transition-all duration-200 border border-transparent hover:border-purple-100"
            >
              <Rotate3d size={18} />
            </button>

            {/* Favorite Button */}
            <button
              title="Add to Favorite"
              className="p-2 cursor-pointer bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-all duration-200 border border-slate-100 hover:border-red-100"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
