import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import ProductLineup from "@/components/home/ProductLineup";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import HowItWorks from "@/components/home/HowItWorks";
import TargetCustomers from "@/components/home/TargetCustomers";
import BrandStory from "@/components/home/BrandStory";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <ProductLineup />
        <WhyChooseSection />
        <HowItWorks />
        <TargetCustomers />
        <BrandStory />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
