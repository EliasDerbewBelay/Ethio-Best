"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Pause, Play, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Bole, Addis Ababa",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial: "Ella Man Real Estate made our dream of owning a luxury home a reality. Their team was professional and went above and beyond.",
    property: "Modern Luxury Villa",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Kazanchis",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial: "Their market knowledge and negotiation skills helped me secure an amazing investment property at the best price.",
    property: "Downtown Penthouse",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Gerji",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial: "The team guided me through every step and made sure I felt confident in my decision. Highly recommended!",
    property: "Beachfront Estate",
  },
];

const Testimonies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = () => setActiveIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setActiveIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  const current = testimonials[activeIndex];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <SectionHeader
          label="Testimonials"
          title={
            <>
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Clients Say
              </span>
            </>
          }
          description="Real stories from people who found their dream homes with us"
        />

        <div className="max-w-xl mx-auto">
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-2.5 right-2.5 z-10 p-1.5 bg-white/90 rounded-full shadow-sm"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>

            <div className="p-4 sm:p-6 text-center">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-500/40 mx-auto mb-2 sm:mb-3" />

              <p className="text-body-sm text-gray-700 leading-relaxed mb-3 sm:mb-4 px-1">
                &ldquo;{current.testimonial}&rdquo;
              </p>

              <div className="flex justify-center gap-0.5 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < current.rating ? "text-amber-500" : "text-gray-200"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-amber-500 shrink-0">
                  <Image src={current.image} alt={current.name} fill className="object-cover" sizes="44px" />
                </div>
                <div className="text-left min-w-0">
                  <h4 className="text-body-sm font-bold text-gray-900 truncate">{current.name}</h4>
                  <p className="text-caption text-gray-500 truncate">
                    {current.role} · {current.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 sm:gap-6">
                <button onClick={prev} className="p-1.5 rounded-full bg-gray-50 hover:bg-amber-500 hover:text-white transition-colors" aria-label="Previous">
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-1">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => { setActiveIndex(idx); setIsPlaying(false); }}
                      className={`rounded-full transition-all ${idx === activeIndex ? "w-5 h-1.5 bg-amber-500" : "w-1.5 h-1.5 bg-gray-200"}`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
                <button onClick={next} className="p-1.5 rounded-full bg-gray-50 hover:bg-amber-500 hover:text-white transition-colors" aria-label="Next">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
