"use client";

import { Rotate3d } from "lucide-react";
import { useVirtualTour } from "@/hooks/useVirtualTour";
import type { Property } from "@/types/property";

interface PropertyTourIconButtonProps {
  property: Property;
  className?: string;
  size?: number;
  label?: string;
}

export default function PropertyTourIconButton({
  property,
  className = "",
  size = 16,
  label,
}: PropertyTourIconButtonProps) {
  const { openTour } = useVirtualTour();

  return (
    <button
      type="button"
      onClick={() =>
        openTour({
          id: property.id,
          title: property.title,
          price: property.price,
          priceType: property.priceType,
          beds: property.beds,
          baths: property.baths,
          sqft: property.sqft,
          image: property.image,
        })
      }
      title="360° Virtual Tour"
      aria-label={`Start virtual tour of ${property.title}`}
      className={className}
    >
      <Rotate3d size={size} className="shrink-0" />
      {label ? <span>{label}</span> : null}
    </button>
  );
}
