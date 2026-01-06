import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import DropFeature from "@/components/home/DropFeature";
import BestSellers from "@/components/home/BestSellers";
import Manifesto from "@/components/home/Manifesto";
import CommunitySection from "@/components/home/CommunitySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
        <DropFeature />
        <BestSellers />
        <Manifesto />
        <CommunitySection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
