"use client";

import  { useState } from "react";
import Image from "next/image";
import { Calendar,  ArrowRight, Search, Tag } from "lucide-react";
import home from "@/public/RealEstateImage/home-1.jpeg"

const CATEGORIES = [
  "All",
  "Market Trends",
  "Buying Tips",
  "Company News",
  "Home Decor",
];

const POSTS = [
  {
    id: 1,
    title: "Why Addis Ababa's Real Estate Market is Booming in 2026",
    excerpt:
      "Discover the key factors driving property value appreciation in the capital city and what it means for new investors...",
    category: "Market Trends",
    date: "March 15, 2026",
    author: "Elias Derbew",
    image: "/RealEstateImage/home-1.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "5 Things the Diaspora Should Know Before Buying",
    excerpt:
      "Navigating legal requirements and financial planning from abroad can be tricky. Here is our expert guide...",
    category: "Buying Tips",
    date: "March 10, 2026",
    author: "Ethio Best Team",
    image: "/RealEstateImage/home-2.jpeg",
    featured: false,
  },
  {
    id: 3,
    title: "Modern Minimalist Designs for New Apartments",
    excerpt:
      "Transform your living space with these simple yet elegant interior design trends popular in Ethiopia today...",
    category: "Home Decor",
    date: "March 05, 2026",
    author: "Selam A.",
    image: "/RealEstateImage/home-3.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Ethio Best Wins 'Best Developer' Award 2025",
    excerpt:
      "We are proud to announce our latest achievement at the East African Property Awards held last month...",
    category: "Company News",
    date: "Feb 28, 2026",
    author: "Management",
    image: "/RealEstateImage/home-4.jpeg",
    featured: false,
  },
];

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* --- Header & Search --- */}
      <section className="bg-purple-900 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest <span className="text-yellow-400">Insights</span> & News
          </h1>
          <p className="text-purple-100 max-w-2xl mx-auto mb-10 opacity-90">
            Stay updated with the latest trends in the Ethiopian property market
            and expert advice from our seasoned team.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-purple-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 backdrop-blur-md"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-200"
              size={20}
            />
          </div>
        </div>
      </section>

      {/* --- Categories Filter --- */}
      <div className="sticky top-[73px] md:top-[88px] z-20 bg-white border-b border-gray-200 py-4 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-4 scrollbar-hide no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-purple-900 text-yellow-400 shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* --- Featured Article --- */}
        {POSTS.filter((p) => p.featured).map((post) => (
          <div
            key={post.id}
            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-xl mb-16 border border-gray-100 hover:shadow-2xl transition-shadow"
          >
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-purple-950 px-4 py-1 rounded-full text-xs font-bold uppercase">
                Featured
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <Tag size={14} className="text-purple-600" /> {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-purple-800 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-8 line-clamp-3">{post.excerpt}</p>
              <button className="flex items-center gap-2 text-purple-900 font-bold hover:gap-4 transition-all">
                Read Full Article{" "}
                <ArrowRight size={20} className="text-yellow-500" />
              </button>
            </div>
          </div>
        ))}

        {/* --- Post Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.filter((p) => !p.featured).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs uppercase">
                      {post.author[0]}
                    </div>
                    <span className="text-xs font-medium text-gray-700">
                      {post.author}
                    </span>
                  </div>
                  <button className="text-purple-900 hover:text-yellow-600 transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* --- Pagination --- */}
        <div className="mt-20 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-purple-900 hover:text-white transition-all">
            1
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-purple-900 hover:text-white transition-all">
            2
          </button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-purple-900 hover:text-white transition-all">
            3
          </button>
        </div>
      </main>

      {/* --- Newsletter CTA --- */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-yellow-400 rounded-3xl p-8 md:p-12 shadow-2xl shadow-yellow-400/20">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-950 mb-4">
              Never Miss a Market Opportunity
            </h2>
            <p className="text-purple-900/80 mb-8">
              Get the latest property deals and news sent straight to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-900 shadow-inner"
              />
              <button className="bg-purple-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-800 transition-all active:scale-95">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
