import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedProducts from "@/components/sections/home/FeaturedProducts";
import AboutOverview from "@/components/sections/home/AboutOverview";
import Blogs from "@/components/sections/home/Blogs";
import Testimonies from "@/components/sections/home/Testimonies";
import CTA from "@/components/sections/home/CTA";

const page = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <AboutOverview />
      <Blogs />
      <Testimonies />
      <CTA />
    </div>
  );
};

export default page;
