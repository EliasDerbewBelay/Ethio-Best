import PropertyCard from "@/components/cardModels/PropertyCard";
import { PROPERTIES } from "@/constants/property";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProperties = PROPERTIES.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <SectionHeader
          label="Featured Listings"
          title={
            <>
              Discover Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Premium Properties
              </span>
            </>
          }
          description="Explore our handpicked selection of luxury homes and investment opportunities"
        />

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {featuredProperties.map((home) => (
            <PropertyCard key={home.id} property={home} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/estates"
            className="btn-primary border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white w-full xs:w-auto shadow-sm"
          >
            View All Properties
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
