import Link from "next/link";
import HeroSecPptCard from "@/components/cardModels/HeroSecPptCard";

const properties = [
  {
    image: "/RealEstateImage/home-1.jpeg",
    price: "$150,000",
    alt: "Modern luxury house",
  },
  {
    image: "/RealEstateImage/home-2.jpeg",
    price: "$90,000",
    alt: "Cozy evening house",
  },
  {
    image: "/RealEstateImage/home-3.jpeg",
    price: "$120,000",
    alt: "Beachfront villa",
  },
];

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="absolute top-10 -left-20 w-40 h-40 sm:w-72 sm:h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative section-container py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
          <div className="flex flex-col gap-4 sm:gap-5 items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-label">
              Premium Real Estate in Addis Ababa
            </span>

            <h1 className="text-display text-white">
              Find Your Perfect{" "}
              <span className="text-yellow-400">Home Today</span>
            </h1>

            <p className="text-body-sm text-purple-100/80 max-w-xl">
              We understand that finding the perfect property is more than a
              search — it&apos;s a journey toward your future.
            </p>

            <div className="flex flex-col xs:flex-row w-full xs:w-auto gap-2.5 sm:gap-3 pt-1">
              <Link
                href="/contact"
                className="btn-primary w-full xs:w-auto bg-yellow-400 hover:bg-yellow-300 text-purple-950 shadow-lg shadow-yellow-400/20 active:scale-95"
              >
                Contact Us
              </Link>
              <Link
                href="/estates"
                className="btn-secondary w-full xs:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm active:scale-95"
              >
                Explore Properties
              </Link>
            </div>
          </div>

          <div className="w-full -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-5 overflow-x-auto snap-x-mandatory scrollbar-hide pb-1 sm:pb-0">
              {properties.map((home, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[min(72vw,16rem)] sm:w-auto snap-start"
                >
                  <HeroSecPptCard
                    image={home.image}
                    alt={home.alt}
                    price={home.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
