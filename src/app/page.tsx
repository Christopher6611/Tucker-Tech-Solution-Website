import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import IntroStats from "@/components/sections/IntroStats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Testimonials from "@/components/sections/Testimonials";
import TechStack from "@/components/sections/TechStack";
import LatestProducts from "@/components/sections/LatestProducts";
import CtaBanner from "@/components/sections/CtaBanner";
import BlogPreview from "@/components/sections/BlogPreview";
import QuickContact from "@/components/sections/QuickContact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <IntroStats />
      <WhyChooseUs />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <TechStack />
      <LatestProducts />
      <CtaBanner />
      <BlogPreview />
      <QuickContact />
    </>
  );
}