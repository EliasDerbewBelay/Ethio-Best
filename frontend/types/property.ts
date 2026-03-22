export interface Property {
  id: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  price: number; // Now in ETB
  priceType: "mo" | "yr" | "day";
  type: "For Rent" | "For Sale" | "For Lease";
  featured: boolean;
  image: string;
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
