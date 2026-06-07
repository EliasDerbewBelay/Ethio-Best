"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  PlayCircle,
  MousePointerClick,
  Smartphone,
  MapPin,
  Eye,
  Compass,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { useVirtualTour } from "@/hooks/useVirtualTour";
import { PROPERTIES } from "@/constants/property";
import { DEMO_SCENES } from "@/lib/tourData";

const STEPS = [
  {
    step: "01",
    title: "Choose a Property",
    description:
      "Browse our listings in Addis Ababa and open any home that interests you.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Start the 360° Tour",
    description:
      "Click Start Virtual Tour to walk through every room in full immersive 360°.",
    icon: Eye,
  },
  {
    step: "03",
    title: "Explore & Decide",
    description:
      "Navigate with hotspots, view room details, then schedule an in-person visit.",
    icon: Compass,
  },
];

const FEATURES = [
  {
    title: "Room-by-Room Walkthrough",
    description: "Living room, bedroom, kitchen, bathroom & garden — all in one tour.",
    icon: Sparkles,
  },
  {
    title: "Interactive Hotspots",
    description: "Tap gold markers to move between rooms or learn about features.",
    icon: MousePointerClick,
  },
  {
    title: "Works on Any Device",
    description: "Desktop, tablet, or phone — including gyroscope look-around on mobile.",
    icon: Smartphone,
  },
];

export default function VirtualTourShowcase() {
  const { openTour } = useVirtualTour();
  const demoProperty = PROPERTIES[0];

  const handleTryDemo = () => {
    openTour({
      id: demoProperty.id,
      title: demoProperty.title,
      price: demoProperty.price,
      priceType: demoProperty.priceType,
      beds: demoProperty.beds,
      baths: demoProperty.baths,
      sqft: demoProperty.sqft,
      image: demoProperty.image,
    });
  };

  return (
    <section
      id="virtual-tour"
      className="section relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="section-container relative">
        <SectionHeader
          label="Our Signature Feature"
          title={
            <>
              Walk Through Homes in{" "}
              <span className="text-yellow-400">Full 360°</span>
            </>
          }
          description="Ella Man Real Estate is built around immersive virtual touring. Explore every room before you visit — saving time and helping you make confident decisions."
          className="[&_h2]:text-white [&_p]:text-white/70 [&_.text-label]:text-yellow-400"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-center mb-14 sm:mb-16">
          {/* Explanation + CTA */}
          <div className="space-y-6">
            <p className="text-body text-white/80 leading-relaxed">
              Our virtual tours let you step inside real homes from anywhere.
              Drag to look around, click hotspots to move between rooms, and
              discover finishes, layouts, and outdoor spaces — just like being
              there in person.
            </p>

            <div className="space-y-4">
              {STEPS.map((item, i) => (
                <motion.div
                  key={item.step}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-400">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-yellow-400 uppercase">
                      Step {item.step}
                    </p>
                    <h3 className="text-h3 text-white mt-0.5">{item.title}</h3>
                    <p className="text-body-sm text-white/60 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleTryDemo}
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 text-purple-950 font-bold shadow-lg shadow-yellow-400/25 transition hover:bg-yellow-300 active:scale-[0.98]"
            >
              <PlayCircle className="h-6 w-6" />
              Try Live Virtual Tour
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <p className="text-caption text-white/40">
              Free demo · No sign-up · Opens instantly in your browser
            </p>
          </div>

          {/* Preview panel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="vt-glass overflow-hidden rounded-3xl ring-1 ring-yellow-400/25">
              <div className="relative aspect-[4/3] sm:aspect-video bg-black">
                <Image
                  src="/panoramas/living-room-opt.jpg"
                  alt="360° virtual tour living room preview"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-transparent to-purple-950/40" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-purple-900/70 px-3 py-1 text-[10px] font-semibold tracking-widest text-yellow-400 uppercase backdrop-blur-md">
                    360° Live Preview
                  </span>
                  <span className="rounded-full bg-red-500/80 px-2 py-0.5 text-[9px] font-bold text-white animate-pulse">
                    ● DEMO
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={handleTryDemo}
                    aria-label="Launch virtual tour demo"
                    className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-yellow-400 text-purple-950 shadow-2xl transition hover:scale-110 hover:bg-yellow-300"
                  >
                    <PlayCircle className="h-8 w-8 sm:h-10 sm:w-10" />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-white">
                    {demoProperty.title}
                  </p>
                  <p className="text-xs text-white/60">
                    {demoProperty.location}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-1 p-2 sm:p-3 bg-black/30">
                {DEMO_SCENES.map((scene) => (
                  <div
                    key={scene.id}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-white/10"
                  >
                    <Image
                      src={scene.thumbnailUrl}
                      alt={scene.label}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-black/70 px-1 py-0.5">
                      <p className="truncate text-[7px] sm:text-[8px] text-white/80 text-center">
                        {scene.label.split(" ")[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-center text-caption text-white/40">
              Drag to look around · Click hotspots to navigate · 5 rooms included
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="mx-auto sm:mx-0 mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-400">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-body-sm font-bold text-white mb-1.5">
                {feature.title}
              </h3>
              <p className="text-caption text-white/55">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
