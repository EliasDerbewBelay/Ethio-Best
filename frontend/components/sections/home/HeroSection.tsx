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

      <div className="absolute top-10 -left-20 w-56 h-56 sm:w-72 sm:h-72 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20 lg:py-24">
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-14">
          {/* Hero copy */}
          <div className="flex flex-col gap-5 sm:gap-6 items-center text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-yellow-300 text-xs font-semibold uppercase tracking-widest">
              Premium Real Estate in Addis Ababa
            </span>

            <h1 className="text-white font-extrabold leading-[1.1] tracking-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your Perfect{" "}
              <span className="text-yellow-400">Home Today</span>
            </h1>

            <p className="text-purple-100/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              We understand that finding the perfect property is more than a
              search — it&apos;s a journey toward your future.
            </p>

            <div className="flex flex-col xs:flex-row w-full xs:w-auto gap-3 sm:gap-4 pt-1">
              <Link
                href="/contact"
                className="touch-target w-full xs:w-auto inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-purple-950 rounded-full px-6 sm:px-8 py-3 font-bold text-sm sm:text-base transition-all active:scale-95 shadow-lg shadow-yellow-400/20"
              >
                Contact Us
              </Link>
              <Link
                href="/estates"
                className="touch-target w-full xs:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-6 sm:px-8 py-3 font-semibold text-sm sm:text-base transition-all active:scale-95 backdrop-blur-sm"
              >
                Explore Properties
              </Link>
            </div>
          </div>

          {/* Property preview cards — horizontal scroll on mobile, grid on desktop */}
          <div className="w-full">
            <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto snap-x-mandatory scrollbar-hide pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {properties.map((home, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[78vw] xs:w-[70vw] sm:w-auto snap-start"
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

      <div className="hidden sm:block absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
