import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers in 2024",
    excerpt:
      "Essential advice for navigating the real estate market, from mortgage pre-approval to closing the deal.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Buying Tips",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Top Luxury Home Trends to Watch This Year",
    excerpt:
      "Discover the latest in luxury real estate, from smart home technology to sustainable design features.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Luxury Living",
    date: "March 10, 2024",
    readTime: "4 min read",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "How to Increase Your Property Value Before Selling",
    excerpt:
      "Strategic renovations and improvements that deliver the highest return on investment.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Selling Tips",
    date: "March 5, 2024",
    readTime: "6 min read",
    author: "Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Mortgage Rates: A Complete Guide",
    excerpt:
      "Everything you need to know about current mortgage rates and how they affect your buying power.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Finance",
    date: "February 28, 2024",
    readTime: "7 min read",
    author: "David Thompson",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of Sustainable Homes in Urban Areas",
    excerpt:
      "How eco-friendly features are becoming essential for modern homebuyers.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Sustainability",
    date: "February 20, 2024",
    readTime: "5 min read",
    author: "Lisa Wong",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Investment Properties: Where to Buy in 2024",
    excerpt:
      "Emerging neighborhoods and markets with high potential for real estate investors.",
    image: "https://images.unsplash.com/photo-1582408921715-18e7806367c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Investment",
    date: "February 15, 2024",
    readTime: "8 min read",
    author: "Robert Martinez",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
];

const Blogs = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Blog
            </span>
            <div className="h-0.5 w-12 bg-amber-500 mx-auto mt-2"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
              {" "}
              Insights
            </span>
          </h2>

          <p className="text-gray-600 text-lg">
            Expert advice, market updates, and valuable tips for your real
            estate journey
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-4 py-2 bg-amber-500 text-white text-sm font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={featuredPost.authorImage}
                          alt={featuredPost.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {featuredPost.author}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <span>{featuredPost.date}</span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all duration-300 group/link"
                  >
                    Read Article
                    <svg
                      className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-500 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">
                      {post.author}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="text-amber-600 hover:text-amber-700 font-semibold text-sm inline-flex items-center gap-1 group/link"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300">
                Get the latest real estate insights, market updates, and
                exclusive property listings delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
            View All Articles
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
    </section>
  );
};

export default Blogs;
