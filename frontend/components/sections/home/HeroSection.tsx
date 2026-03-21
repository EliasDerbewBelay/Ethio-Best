import RealEstate from "@/public/RealEstateImage/RealEstate.jpg";
import Image from "next/image";

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
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <p className="text-amber-500 font-semibold text-base md:text-lg tracking-wider mb-2 animate-fade-in">
                ETHIO BEST REAL ESTATE
              </p>
              <div className="h-0.5 w-12 bg-amber-500 mx-auto lg:mx-0"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight animate-slide-up">
              IT'S TIME TO FIND YOUR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                LUXURY HOME
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up animation-delay-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              earum molestiae quas nulla ut possimus assumenda qui quia fugit
              delectus minus, dolorem at sint amet hic provident, nam ducimus
              nostrum?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animation-delay-400">
              <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  GET YOUR HOME
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>

              <button className="px-6 md:px-8 py-3 md:py-4 border-2 border-amber-500/50 text-white font-semibold rounded-full hover:border-amber-500 hover:bg-amber-500/10 transition-all duration-300">
                EXPLORE PROPERTIES
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 animate-slide-up animation-delay-600">
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  500+
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Luxury Properties
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  98%
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl font-bold text-white">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-gray-400">
                  Expert Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
              <Image
                alt="Luxury Home"
                src={RealEstate}
                height={400}
                width={400}
                className="object-cover rounded-xl w-full h-auto max-h-[400px] md:max-h-[500px]"
                priority
              />

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-xl p-2 animate-bounce-slow">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-900">
                    Featured
                  </span>
                </div>
              </div>
            </div>
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
