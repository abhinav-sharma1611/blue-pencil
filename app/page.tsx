import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FeatureSection from "@/components/FeatureSection"
import HeroSection from "@/components/HeroSection";
import Featured from "@/components/Featured";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Featured />
      <FeatureSection button={false} image='/feature1.png' />
      <FeatureSection button={false} image='/feature2.png' />
      <FeatureSection button={true} image='/feature3.png' />
      <Pricing />
      <Footer />
    </>
  );
}
