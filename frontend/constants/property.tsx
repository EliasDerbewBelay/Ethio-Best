import { Property } from "@/types/property";

// Exchange rate: 1 USD ≈ 130 ETB (as of current rate, adjust as needed)
const USD_TO_ETB = 130;

// Helper function to convert USD to ETB
const convertToBirr = (usdPrice: number): number => {
  return usdPrice * USD_TO_ETB;
};

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Equestrian Family Home",
    location: "Bole, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 200,
    price: convertToBirr(140),
    priceType: "mo",
    type: "For Rent",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "House On The Northridge",
    location: "Cazanchise, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 1200,
    price: convertToBirr(140),
    priceType: "mo",
    type: "For Rent",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "House In Foxhall Ave, Kingston",
    location: "Mexico, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 1200,
    price: convertToBirr(140),
    priceType: "mo",
    type: "For Rent",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Luxurious Villa in Rage Park",
    location: "Gerji, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 1200,
    price: convertToBirr(630),
    priceType: "mo",
    type: "For Rent",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Villa On Hollywood Boulevard",
    location: "Kazanchis, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 1200,
    price: convertToBirr(820),
    priceType: "mo",
    type: "For Rent",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Villa Called Archangel",
    location: "Bole, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 1200,
    price: convertToBirr(140),
    priceType: "mo",
    type: "For Rent",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Store In Woodside, New York",
    location: "Megenagna, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 1200,
    price: convertToBirr(140),
    priceType: "mo",
    type: "For Rent",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Luxury Villa In Los Angeles",
    location: "Old Airport, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 4,
    sqft: 1200,
    price: convertToBirr(820),
    priceType: "mo",
    type: "For Rent",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Modern Apartment with City View",
    location: "Summit, Addis Ababa, Ethiopia",
    beds: 2,
    baths: 2,
    sqft: 850,
    price: convertToBirr(250),
    priceType: "mo",
    type: "For Rent",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    title: "Family Home with Garden",
    location: "Ayat, Addis Ababa, Ethiopia",
    beds: 4,
    baths: 3,
    sqft: 1800,
    price: convertToBirr(350),
    priceType: "mo",
    type: "For Rent",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    title: "Luxury Penthouse",
    location: "Bole Medhanealem, Addis Ababa, Ethiopia",
    beds: 3,
    baths: 3,
    sqft: 1500,
    price: convertToBirr(950),
    priceType: "mo",
    type: "For Rent",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    title: "Cozy Studio Apartment",
    location: "Sarbet, Addis Ababa, Ethiopia",
    beds: 1,
    baths: 1,
    sqft: 450,
    price: convertToBirr(120),
    priceType: "mo",
    type: "For Rent",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
  },
];

export const FILTER_OPTIONS = {
  propertyTypes: [
    "All Properties",
    "House",
    "Villa",
    "Apartment",
    "Condo",
    "Store",
  ] as const,
  locations: [
    "All Locations",
    "Bole",
    "Cazanchise",
    "Mexico",
    "Gerji",
    "Kazanchis",
    "Megenagna",
    "Old Airport",
    "Summit",
    "Ayat",
    "Bole Medhanealem",
    "Sarbet",
  ] as const,
  priceRanges: [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under 2,000,000 Br/mo", min: 0, max: 2000000 },
    { label: "2,000,000 - 5,000,000 Br/mo", min: 2000000, max: 5000000 },
    { label: "5,000,000 - 8,000,000 Br/mo", min: 5000000, max: 8000000 },
    { label: "8,000,000 - 12,000,000 Br/mo", min: 8000000, max: 12000000 },
    { label: "Over 12,000,000 Br/mo", min: 12000000, max: Infinity },
  ],
  bedOptions: [0, 1, 2, 3, 4, 5] as const,
  bathOptions: [0, 1, 2, 3, 4, 5] as const,
  sortOptions: [
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ] as const,
} as const;

export const VIEW_MODES = {
  GRID: "grid",
  LIST: "list",
} as const;

export const PAGINATION = {
  ITEMS_PER_PAGE: 12,
  TOTAL_PROPERTIES: 300,
} as const;

export const CURRENCY = {
  code: "ETB",
  symbol: "Br",
  name: "Ethiopian Birr",
  exchangeRate: USD_TO_ETB,
} as const;

export const FORMAT_OPTIONS = {
  currency: {
    style: "currency",
    currency: "ETB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
} as const;

export const MESSAGES = {
  noProperties: "No properties found matching your criteria.",
  loadMore: "Load More",
  viewDetails: "View Details",
  featured: "FEATURED",
  previous: "Previous",
  next: "Next",
} as const;
