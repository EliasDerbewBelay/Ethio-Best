import HeroSecPptCard from "@/components/cardModels/HeroSecPptCard";


const properties = [
  {
    image: "/RealEstateImage/home-1.jpeg",
    price: "$150000",
    alt: "Modern luxury house",
  },
  {
    image: "/RealEstateImage/home-2.jpeg",
    price: "$90000",
    alt: "Cozy evening house",
  },
  {
    image: "/RealEstateImage/home-3.jpeg",
    price: "$120000",
    alt: "Beachfront villa",
  },
];

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col justify-center gap-8">
          {/* Top Content */}
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-white flex flex-col items-center text-7xl">
              Find Your Perfect <br /> <span>Home Today</span>
            </h1>
            <p className="text-white/70 text-center">
              We understand that finding the perfect property is more than just <br />
              a search. It's a journey toward your future.
            </p>

            <div className="flex gap-6">
              <button className="bg-yellow-500 rounded-full px-5 py-2 font-bold text-slate-900">
                Contact Us
              </button>
              <button className="bg-white rounded-full px-6 py-2">
                Explore More
              </button>
            </div>
          </div>

          {/* bottom Image */}

          <div className="flex items-center justify-center gap-9">
            {properties.map((home, idex) => (
              <HeroSecPptCard
                key={idex}
                image={home.image}
                alt={home.alt}
                price={home.price}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
