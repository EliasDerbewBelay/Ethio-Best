import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Users, Trophy, Target, Eye } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import home from "@/public/RealEstateImage/RealEstate.jpg";

const stats = [
  { label: "Properties Sold", value: "500+" },
  { label: "Happy Clients", value: "1.2k" },
  { label: "Years Experience", value: "10+" },
  { label: "Expert Agents", value: "25+" },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "Transparent dealings and honest property valuations are the core of our business." },
  { icon: Users, title: "Client-Centric", desc: "We find homes that fit your unique lifestyle and future." },
  { icon: Trophy, title: "Excellence", desc: "Premium real estate services that exceed international standards." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title={
          <>
            Building Dreams in the{" "}
            <span className="text-yellow-400">Heart of Ethiopia</span>
          </>
        }
        description="Ella Man Real Estate is a premier property solution provider dedicated to transforming urban living in Addis Ababa and beyond."
      />

      <section className="section section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="relative h-52 sm:h-72 md:h-96 lg:h-[28rem] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-400/20">
            <Image src={home} alt="Addis Ababa Real Estate" fill className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
          </div>
          <div className="space-y-4 sm:space-y-5">
            <span className="text-label text-purple-700 px-2.5 py-1 bg-purple-100 rounded-full">Our Story</span>
            <h2 className="text-h2 text-gray-900">
              Your Trusted Partner in{" "}
              <span className="text-purple-800">Ethiopian Real Estate</span>
            </h2>
            <p className="text-body-sm text-gray-600">
              Founded with a vision to bridge quality and affordability, Ella Man Real Estate has grown into a market leader specializing in luxury apartments, villas, and commercial spaces.
            </p>
            <p className="text-body-sm text-gray-600">
              Our deep understanding of the local market, combined with Virtual Touring technology, ensures the best investment opportunities for local and Diaspora clients.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 pt-2">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-4 border-yellow-400 pl-3 sm:pl-4">
                  <h4 className="text-h3 text-purple-900">{stat.value}</h4>
                  <p className="text-caption text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight bg-purple-900 text-white">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {[
            { icon: Target, title: "Our Mission", text: "To provide high-quality, sustainable housing solutions that empower Ethiopian families and investors through innovation, transparency, and professional excellence." },
            { icon: Eye, title: "Our Vision", text: "To be the most recognized and reliable real estate brand in East Africa, known for creating vibrant communities and setting new benchmarks in urban development." },
          ].map((item) => (
            <div key={item.title} className="bg-purple-800/50 p-5 sm:p-7 rounded-xl sm:rounded-2xl border border-white/10">
              <div className="icon-box-sm bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-purple-900 w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-h3 mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-body-sm text-purple-100">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-container text-center">
        <h2 className="text-h2 text-gray-900 mb-8 sm:mb-12">
          Values That <span className="text-purple-800">Drive Us Forward</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-gray-50 border border-transparent hover:border-yellow-100 hover:shadow-lg transition-all">
              <div className="mb-4 flex justify-center">
                <v.icon className="text-yellow-400 w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-h3 text-purple-900 mb-2">{v.title}</h4>
              <p className="text-body-sm text-gray-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight section-container pb-8 sm:pb-12">
        <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 text-center relative overflow-hidden">
          <h2 className="text-h2 text-white mb-5 sm:mb-7">
            Ready to Find Your <span className="text-yellow-400">Perfect Home?</span>
          </h2>
          <div className="flex flex-col xs:flex-row gap-2.5 sm:gap-3 justify-center">
            <Link href="/estates" className="btn-primary bg-yellow-400 text-purple-950 hover:bg-yellow-300 w-full xs:w-auto">
              View Our Estates
            </Link>
            <Link href="/contact" className="btn-secondary bg-white/10 text-white hover:bg-white hover:text-purple-900 w-full xs:w-auto">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
