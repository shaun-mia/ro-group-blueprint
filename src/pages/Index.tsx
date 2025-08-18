import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSnapshot from "@/components/AboutSnapshot";
import VenturesGrid from "@/components/VenturesGrid";
import KeyFigures from "@/components/KeyFigures";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSnapshot />
      <VenturesGrid />
      <KeyFigures />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
