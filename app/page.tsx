import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FeatureSection from "@/components/FeatureSection"
import HeroSection from "@/components/HeroSection";

import Feature1 from "../public/feature1.png"
import Feature2 from "../public/feature2.png"
import Feature3 from "../public/feature3.png"

export default function Home() {
  return (
  <>
  <Navbar/>
      <HeroSection/>
      <FeatureSection button={false} image={Feature1.src} />
      <FeatureSection button={false} image={Feature2.src} />
      <FeatureSection button={true} image={Feature3.src} />
  <Pricing/>
  <Footer/>
  </>
  );
}
