"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Beverly Hills, CA",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial:
      "Ethio Best Real Estate made our dream of owning a luxury home a reality. Their team was professional, attentive, and went above and beyond to find us the perfect property. The entire process was seamless from start to finish.",
    property: "Modern Luxury Villa",
    date: "March 2024",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Downtown LA, CA",
    role: "Investor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial:
      "As a real estate investor, I've worked with many agencies, but Ethio Best Real Estate stands out. Their market knowledge and negotiation skills helped me secure an amazing investment property at the best price.",
    property: "Downtown Penthouse",
    date: "February 2024",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Malibu, CA",
    role: "First-time Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial:
      "I was nervous about buying my first home, but the team at Ethio Best Real Estate guided me through every step. They answered all my questions and made sure I felt confident in my decision. Highly recommended!",
    property: "Beachfront Estate",
    date: "January 2024",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Santa Monica, CA",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial:
      "Sold my property within weeks at above asking price! Their marketing strategy and professional presentation attracted multiple offers. The team's expertise and dedication truly exceeded my expectations.",
    property: "Modern Family Home",
    date: "December 2023",
  },
  {
    id: 5,
    name: "Lisa Wong",
    location: "Aspen, CO",
    role: "Luxury Buyer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    testimonial:
      "Exceptional service from start to finish. The team understood exactly what we were looking for and found us our dream mountain retreat. Their attention to detail and client care is unmatched.",
    property: "Mountain View Retreat",
    date: "November 2023",
  },
  {
    id: 6,
    name: "Robert Martinez",
    location: "Austin, TX",
    role: "Renter",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    rating: 4,
    testimonial:
      "Great experience finding my new rental home. The agents were responsive, professional, and helped me find a place that matched all my requirements. Would definitely use their services again.",
    property: "Cozy Suburban Home",
    date: "October 2023",
  },
];

const Testimonies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Carousel navigation
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, activeIndex]);

  // Rating stars component
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-amber-500" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <div className="h-0.5 w-12 bg-amber-500 mx-auto mt-2"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              {" "}
              Clients Say
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Real stories from real people who found their dream homes with us
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all"
              >
                {isPlaying ? (
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-amber-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[activeIndex].testimonial}"
                </p>

                {/* Rating */}
                <div className="mb-6">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-amber-500">
                    <Image
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].role} •{" "}
                      {testimonials[activeIndex].location}
                    </p>
                    <p className="text-sm text-amber-600 font-semibold mt-1">
                      Purchased: {testimonials[activeIndex].property}
                    </p>
                  </div>
                </div>

                {/* Carousel Navigation Dots */}
                <div className="flex gap-2 mt-4">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveIndex(idx);
                        setIsPlaying(false);
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        idx === activeIndex
                          ? "w-8 h-2 bg-amber-500"
                          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white transition-all duration-300"
                  >
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white transition-all duration-300"
                  >
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="mb-4">{renderStars(testimonial.rating)}</div>

              {/* Testimonial */}
              <p className="text-gray-600 mb-6 line-clamp-4">
                "{testimonial.testimonial}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-500">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-500">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-500">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">150+</div>
              <div className="text-sm text-gray-500">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
