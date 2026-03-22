import React from "react";
import Image from "next/image";
import aboutus from "@/public/RealEstateImage/aboutus.jpeg"

const AboutOverview = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="relative col-span-2 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-64 md:h-80 lg:h-96">
                  <Image
                    src={aboutus}
                    alt="Luxury real estate property"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>

              {/* Small Image 1 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-32 md:h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Modern home interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Small Image 2 */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-32 md:h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Luxury home exterior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-6 shadow-2xl hidden md:block">
              <div className="text-center">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Section Tag */}
            <div className="inline-block">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <div className="h-0.5 w-12 bg-amber-500 mt-2"></div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                {" "}
                Finding Your Dream Home
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Ethio Best Real Estate has been at the forefront of the real
              estate industry, helping thousands of families find their perfect
              homes. With our deep understanding of the market and commitment to
              excellence, we've built a reputation for delivering exceptional
              results.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team of dedicated professionals combines local expertise with
              global standards, ensuring that every client receives personalized
              attention and the highest level of service throughout their
              property journey.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Expert Guidance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Professional advice at every step
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Best Market Prices
                  </h3>
                  <p className="text-sm text-gray-600">
                    Competitive rates guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Happy Clients
                  </h3>
                  <p className="text-sm text-gray-600">
                    500+ satisfied customers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Premium Properties
                  </h3>
                  <p className="text-sm text-gray-600">
                    Curated luxury listings
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs text-gray-500">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-500">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-xs text-gray-500">Customer Support</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
                Learn More About Us
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
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
