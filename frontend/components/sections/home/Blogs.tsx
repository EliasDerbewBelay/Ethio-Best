import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers in 2024",
    excerpt: "Essential advice for navigating the real estate market, from mortgage pre-approval to closing the deal.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Buying Tips",
    date: "March 15, 2024",
    readTime: "5 min",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Top Luxury Home Trends to Watch This Year",
    excerpt: "Discover the latest in luxury real estate, from smart home technology to sustainable design.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Luxury Living",
    date: "March 10, 2024",
    readTime: "4 min",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "How to Increase Your Property Value Before Selling",
    excerpt: "Strategic renovations and improvements that deliver the highest return on investment.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Selling Tips",
    date: "March 5, 2024",
    readTime: "6 min",
    author: "Emily Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Mortgage Rates: A Complete Guide",
    excerpt: "Everything you need to know about current mortgage rates and your buying power.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Finance",
    date: "Feb 28, 2024",
    readTime: "7 min",
    author: "David Thompson",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    featured: false,
  },
];

const Blogs = () => {
  const featuredPost = blogPosts.find((p) => p.featured);
  const recentPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <SectionHeader
          label="Our Blog"
          title={
            <>
              Latest News &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">
                Insights
              </span>
            </>
          }
          description="Expert advice, market updates, and valuable tips for your real estate journey"
        />

        {featuredPost && (
          <div className="mb-8 sm:mb-12 md:mb-14">
            <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="relative img-card-lg lg:min-h-[320px] overflow-hidden">
                  <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" priority sizes="(max-width:1024px) 100vw, 50vw" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-amber-500 text-white text-caption font-semibold rounded-full">Featured</span>
                </div>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-label text-amber-600 mb-2">{featuredPost.category}</span>
                  <h3 className="text-h3 text-gray-900 mb-2 sm:mb-3 group-hover:text-amber-600 transition-colors">{featuredPost.title}</h3>
                  <p className="text-body-sm text-gray-600 mb-4 line-clamp-3">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0">
                      <Image src={featuredPost.authorImage} alt={featuredPost.author} fill className="object-cover" sizes="36px" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-body-sm font-semibold text-gray-900 truncate">{featuredPost.author}</p>
                      <p className="text-caption text-gray-500">{featuredPost.date} · {featuredPost.readTime}</p>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center gap-1.5 text-amber-600 font-semibold text-body-sm hover:gap-2.5 transition-all">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col">
              <div className="relative img-card-sm overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:480px) 100vw, (max-width:1024px) 50vw, 33vw" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-amber-500 text-white text-caption font-semibold rounded-full">{post.category}</span>
              </div>
              <div className="p-3.5 sm:p-5 flex flex-col flex-1">
                <p className="text-caption text-gray-500 mb-2">{post.date} · {post.readTime}</p>
                <h3 className="text-h3 text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">{post.title}</h3>
                <p className="text-body-sm text-gray-600 mb-3 line-clamp-2 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden shrink-0">
                      <Image src={post.authorImage} alt={post.author} fill className="object-cover" sizes="28px" />
                    </div>
                    <span className="text-caption sm:text-body-sm text-gray-700 font-medium truncate">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-amber-600 shrink-0" aria-label="Read more">
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link href="/news" className="btn-primary border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white w-full xs:w-auto">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
