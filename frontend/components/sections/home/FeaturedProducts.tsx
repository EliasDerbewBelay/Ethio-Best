import PropertyCard from "@/components/cardModels/PropertyCard";

// Sample property data - replace with your actual data

const properties = [
  {
    id: 1,
    title: "Luxury Bole Villa",
    location: "Bole, Addis Ababa, Ethiopia",
    price: 180000, // Monthly Rent in ETB
    beds: 4,
    baths: 4,
    sqft: 3500,
    isFeatured: true,
    status: "For Rent",
    image: "/RealEstateImage/home-1.jpeg",
  },
  {
    id: 2,
    title: "Modern Kazanchis Apartment",
    location: "Kazanchis, Addis Ababa, Ethiopia",
    price: 95000, // Monthly Rent in ETB
    beds: 3,
    baths: 2,
    sqft: 1850,
    isFeatured: true,
    status: "For Rent",
    image: "/RealEstateImage/home-2.jpeg",
  },
  {
    id: 3,
    title: "Old Airport Executive Suite",
    location: "Old Airport, Addis Ababa, Ethiopia",
    price: 45000000, // Sale Price in ETB
    beds: 5,
    baths: 5,
    sqft: 5200,
    isFeatured: false,
    status: "For Sale",
    image: "/RealEstateImage/home-3.jpeg",
  },
  {
    id: 4,
    title: "Summit Residential Home",
    location: "Summit, Addis Ababa, Ethiopia",
    price: 65000, // Monthly Rent in ETB
    beds: 3,
    baths: 3,
    sqft: 2200,
    isFeatured: false,
    status: "For Rent",
    image: "/RealEstateImage/home-4.jpeg",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Featured Listings
            </span>
            <div className="h-0.5 w-12 bg-amber-500 mx-auto mt-2"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              {" "}
              Premium Properties
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Explore our handpicked selection of luxury homes and investment
            opportunities
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {properties.map((home) => (
            <PropertyCard key={home.id} property={home} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
            View All Properties
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
