import PropertyCard from "@/components/cardModels/PropertyCard";
import { PROPERTIES } from "@/constants/property";
import Link from "next/link";

const FeaturedProducts = () => {
  const featuredProperties = PROPERTIES.filter((p) => p.featured).slice(0, 4);

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
          {featuredProperties.map((home) => (
            <PropertyCard key={home.id} property={home} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            href="/estates"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-md"
          >
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
