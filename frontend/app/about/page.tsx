import React from "react";
import Image from "next/image";
import { ShieldCheck, Users, Trophy, Target, Eye } from "lucide-react";
import home from "@/public/RealEstateImage/RealEstate.jpg"

const stats = [
  { label: "Properties Sold", value: "500+" },
  { label: "Happy Clients", value: "1.2k" },
  { label: "Years Experience", value: "10+" },
  { label: "Expert Agents", value: "25+" },
];

const values = [
  {
    icon: <ShieldCheck className="text-yellow-400" size={32} />,
    title: "Integrity",
    desc: "Transparent dealings and honest property valuations are the core of our business.",
  },
  {
    icon: <Users className="text-yellow-400" size={32} />,
    title: "Client-Centric",
    desc: "We don't just sell houses; we find homes that fit your unique lifestyle and future.",
  },
  {
    icon: <Trophy className="text-yellow-400" size={32} />,
    title: "Excellence",
    desc: "Committed to providing premium real estate services that exceed international standards.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Building Dreams in the <br />
            <span className="text-yellow-400">Heart of Ethiopia</span>
          </h1>
          <p className="text-purple-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ethio Best Real Estate is a premier property solution provider
            dedicated to transforming the landscape of urban living in Addis
            Ababa and beyond.
          </p>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-400/20">
            <Image
              src={home}
              alt="Addis Ababa Real Estate"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-purple-700 font-bold uppercase tracking-widest text-sm px-3 py-1 bg-purple-100 rounded-full">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Trusted Partner in{" "}
              <span className="text-purple-800">Ethiopian Real Estate</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Founded with a vision to bridge the gap between quality and
              affordability, Ethio Best Real Estate has grown into a market
              leader. We specialize in luxury apartments, residential villas,
              and commercial spaces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our deep understanding of the local market, combined with modern
              technological tools like Virtual Touring, ensures that our
              clients—whether local or from the Diaspora—receive the best
              investment opportunities available.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="text-2xl font-bold text-purple-900">
                    {stat.value}
                  </h4>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION (PURPLE BOX) --- */}
      <section className="bg-purple-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-purple-800/50 p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-colors">
            <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-purple-100 leading-relaxed">
              To provide high-quality, sustainable housing solutions that
              empower Ethiopian families and investors through innovation,
              transparency, and professional excellence.
            </p>
          </div>
          <div className="bg-purple-800/50 p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-colors">
            <div className="bg-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-purple-100 leading-relaxed">
              To be the most recognized and reliable real estate brand in East
              Africa, known for creating vibrant communities and setting new
              benchmarks in urban development.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Values That <span className="text-purple-800">Drive Us Forward</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-yellow-100"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h4 className="text-xl font-bold text-purple-900 mb-3">
                {v.title}
              </h4>
              <p className="text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="mb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-purple-900 to-purple-800 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400 opacity-10 rounded-full" />

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Find Your{" "}
            <span className="text-yellow-400">Perfect Home?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-yellow-400 text-purple-950 font-bold rounded-full hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-400/20">
              View Our Estates
            </button>
            <button className="px-10 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md font-bold rounded-full hover:bg-white hover:text-purple-900 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
