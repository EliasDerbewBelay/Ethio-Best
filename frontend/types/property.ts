export interface Property {
  id: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  price: number; // In ETB
  priceType: "mo" | "yr" | "day";
  type: "For Rent" | "For Sale" | "For Lease";
  featured: boolean;
  image: string; // Featured image
  images: string[]; // Gallery images
  description: string;
  amenities: string[];
  virtualTourUrl?: string; // Optional virtual tour link
  yearBuilt: number;
  parking: number;
  agent: {
    name: string;
    phone: string;
    email: string;
    image: string;
  };
}

export type ViewMode = "grid" | "list";
export type SortOption = "newest" | "price-low" | "price-high";
export type PropertyType =
  | "All Properties"
  | "House"
  | "Villa"
  | "Apartment"
  | "Condo"
  | "Store";
