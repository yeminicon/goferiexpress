import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import BannerSAection from "./components/banner";
import Services from "./components/services";
import Footer from "@/components/Footer";
import TestimonySection from "./components/testimony";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BannerSAection />
      <Services />
      <TestimonySection />
      <Footer />
    </>
  );
};

export default LandingPage;
