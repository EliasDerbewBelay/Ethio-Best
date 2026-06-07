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
    <div className="group w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg bg-white border border-gray-100 transition-all duration-300 flex flex-col">
      <div className="relative img-card-md w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {property.featured && (
          <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-purple-700 text-white text-caption font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md uppercase tracking-wider z-10 shadow">
            Featured
          </div>
        )}

        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow z-10 border border-white/20">
          <span className="text-caption sm:text-body-sm font-bold text-purple-700">
            {new Intl.NumberFormat("en-ET", {
              style: "currency",
              currency: "ETB",
              maximumFractionDigits: 0,
            }).format(property.price)}
          </span>
          <span className="text-gray-500 font-medium text-caption">
            /{property.priceType}
          </span>
        </div>
      </div>

      <div className="p-3.5 sm:p-4 md:p-5 flex-1 flex flex-col">
        <div className="mb-3 sm:mb-4">
          <h2 className="text-h3 text-slate-800 line-clamp-1">{property.title}</h2>
          <p className="text-caption sm:text-body-sm text-gray-400 mt-0.5 line-clamp-1">
            {property.location}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-1 mb-4 sm:mb-5 border-b border-gray-100 pb-3 sm:pb-4">
          <div className="flex items-center gap-1 sm:gap-1.5 text-slate-600">
            <BedDouble size={14} className="text-gray-400 shrink-0 sm:w-4 sm:h-4" />
            <span className="text-caption sm:text-body-sm font-semibold">
              {property.beds}
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 text-slate-600">
            <Bath size={14} className="text-gray-400 shrink-0 sm:w-4 sm:h-4" />
            <span className="text-caption sm:text-body-sm font-semibold">
              {property.baths}
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 text-slate-600">
            <Square size={14} className="text-gray-400 shrink-0 sm:w-4 sm:h-4" />
            <span className="text-caption sm:text-body-sm font-semibold truncate">
              {property.sqft}
            </span>
          </div>
        </div>

        <div className="mt-auto flex justify-between items-center gap-2">
          <span className="bg-purple-50 text-purple-700 text-caption font-bold px-2 py-0.5 sm:py-1 rounded-full uppercase tracking-wide border border-purple-100 truncate max-w-[45%]">
            {property.type}
          </span>
          <div className="flex gap-1 sm:gap-1.5 shrink-0">
            <Link
              href={`/estates/${property.id}`}
              title="View Detail"
              className="p-1.5 sm:p-2 bg-white hover:bg-purple-700 rounded-lg text-purple-600 hover:text-white transition-all border border-purple-100 hover:border-purple-700"
            >
              <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
            </Link>
            {property.virtualTourUrl && (
              <a
                href={property.virtualTourUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Virtual Tour"
                className="p-1.5 sm:p-2 bg-white hover:bg-purple-600 rounded-lg text-purple-600 hover:text-white transition-all border border-purple-100"
              >
                <Rotate3d size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            )}
            <button
              title="Add to Favorite"
              className="p-1.5 sm:p-2 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-all border border-slate-100"
            >
              <Heart size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
