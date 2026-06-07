"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, ArrowRight, Search, Tag } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const CATEGORIES = ["All", "Market Trends", "Buying Tips", "Company News", "Home Decor"];

const POSTS = [
  {
    id: 1,
    title: "Why Addis Ababa's Real Estate Market is Booming in 2026",
    excerpt: "Discover the key factors driving property value appreciation in the capital city and what it means for new investors...",
    category: "Market Trends",
    date: "March 15, 2026",
    author: "Elias Derbew",
    image: "/RealEstateImage/home-1.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "5 Things the Diaspora Should Know Before Buying",
    excerpt: "Navigating legal requirements and financial planning from abroad can be tricky. Here is our expert guide...",
    category: "Buying Tips",
    date: "March 10, 2026",
    author: "Ella Man Team",
    image: "/RealEstateImage/home-2.jpeg",
    featured: false,
  },
  {
    id: 3,
    title: "Modern Minimalist Designs for New Apartments",
    excerpt: "Transform your living space with these simple yet elegant interior design trends popular in Ethiopia today...",
    category: "Home Decor",
    date: "March 05, 2026",
    author: "Selam A.",
    image: "/RealEstateImage/home-3.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Ella Man Wins 'Best Developer' Award 2025",
    excerpt: "We are proud to announce our latest achievement at the East African Property Awards held last month...",
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
      <PageHero
        title={<>Latest <span className="text-yellow-400">Insights</span> & News</>}
        description="Stay updated with the latest trends in the Ethiopian property market and expert advice from our team."
      />

      <div className="section-container -mt-4 sm:-mt-6 mb-4 sm:mb-6">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 sm:pl-12 pr-4 py-3 rounded-xl sm:rounded-2xl bg-white border border-purple-100 text-body-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
        </div>
      </div>

      <div className="sticky-below-header bg-white border-b border-gray-200 py-2.5 sm:py-3 px-4 overflow-x-auto scrollbar-hide">
        <div className="section-container flex items-center gap-2 snap-x-mandatory">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-caption font-bold transition-all snap-start shrink-0 ${
                activeCategory === cat ? "bg-purple-900 text-yellow-400" : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="section-container page-content">
        {POSTS.filter((p) => p.featured).map((post) => (
          <div key={post.id} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-8 sm:mb-12 border border-gray-100">
            <div className="relative img-card-lg lg:min-h-[280px] overflow-hidden">
              <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:1024px) 100vw, 50vw" />
              <span className="absolute top-3 left-3 bg-yellow-400 text-purple-950 px-2.5 py-0.5 rounded-full text-caption font-bold uppercase">Featured</span>
            </div>
            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 text-caption text-gray-500 mb-3">
                <span className="flex items-center gap-1"><Tag size={12} className="text-purple-600" />{post.category}</span>
                <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
              </div>
              <h2 className="text-h3 text-gray-900 mb-2 sm:mb-3 group-hover:text-purple-800 transition-colors">{post.title}</h2>
              <p className="text-body-sm text-gray-600 mb-4 sm:mb-5 line-clamp-3">{post.excerpt}</p>
              <button className="inline-flex items-center gap-1.5 text-purple-900 font-bold text-body-sm hover:gap-2.5 transition-all">
                Read Full Article <ArrowRight size={16} className="text-yellow-500" />
              </button>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {POSTS.filter((p) => !p.featured).map((post) => (
            <article key={post.id} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col group">
              <div className="relative img-card-sm overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:480px) 100vw, 33vw" />
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col flex-1">
                <span className="text-caption uppercase font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md w-fit mb-2">{post.category}</span>
                <h3 className="text-h3 text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-800 transition-colors">{post.title}</h3>
                <p className="text-body-sm text-gray-500 mb-3 line-clamp-2 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-caption uppercase shrink-0">{post.author[0]}</div>
                    <span className="text-caption font-medium text-gray-700 truncate">{post.author}</span>
                  </div>
                  <button className="text-purple-900 shrink-0" aria-label="Read more"><ArrowRight size={18} /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <section className="section-tight bg-white">
        <div className="section-container max-w-3xl text-center">
          <div className="bg-yellow-400 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-xl">
            <h2 className="text-h3 text-purple-950 mb-2 sm:mb-3">Never Miss a Market Opportunity</h2>
            <p className="text-body-sm text-purple-900/80 mb-4 sm:mb-5">Get the latest property deals sent to your inbox weekly.</p>
            <form className="flex flex-col xs:flex-row gap-2.5">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-xl text-body-sm focus:outline-none focus:ring-2 focus:ring-purple-900" />
              <button className="btn-primary bg-purple-900 text-white hover:bg-purple-800 w-full xs:w-auto rounded-xl">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
