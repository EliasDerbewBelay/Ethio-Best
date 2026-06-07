import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, DollarSign, Users, Home } from "lucide-react";
import aboutus from "@/public/RealEstateImage/aboutus.jpeg";

const features = [
  { icon: CheckCircle2, title: "Expert Guidance", desc: "Professional advice at every step" },
  { icon: DollarSign, title: "Best Market Prices", desc: "Competitive rates guaranteed" },
  { icon: Users, title: "Happy Clients", desc: "500+ satisfied customers" },
  { icon: Home, title: "Premium Properties", desc: "Curated luxury listings" },
];

const AboutOverview = () => {
  return (
    <section className="section bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">
          <div className="relative order-1">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              <div className="relative col-span-2 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                  <Image src={aboutus} alt="Luxury real estate property" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </div>
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md">
                <div className="relative h-24 sm:h-32 md:h-36">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Modern home interior"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md">
                <div className="relative h-24 sm:h-32 md:h-36">
                  <Image
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Luxury home exterior"
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-1 sm:-bottom-5 sm:-right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-4 shadow-xl">
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold">15+</div>
                <div className="text-caption sm:text-body-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 order-2">
            <div>
              <span className="text-label">About Us</span>
              <div className="h-0.5 w-10 bg-amber-500 mt-1.5" />
            </div>

            <h2 className="text-h2 text-gray-900">
              Your Trusted Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Finding Your Dream Home
              </span>
            </h2>

            <p className="text-body-sm text-gray-600">
              Ella Man Real Estate has been at the forefront of the real estate
              industry, helping thousands of families find their perfect homes.
            </p>

            <p className="text-body-sm text-gray-600">
              Our team combines local expertise with global standards, ensuring
              personalized attention throughout your property journey.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="icon-box-sm bg-amber-100 rounded-lg flex items-center justify-center">
                    <f.icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-body-sm font-semibold text-gray-900">{f.title}</h3>
                    <p className="text-caption text-gray-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-200">
              {[
                { val: "500+", label: "Properties Sold" },
                { val: "98%", label: "Satisfaction" },
                { val: "24/7", label: "Support" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-h3 text-gray-900">{s.val}</div>
                  <div className="text-caption text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-primary bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg w-full xs:w-auto mt-2"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
