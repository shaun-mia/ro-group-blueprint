import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Empowering Growth
          <br />
          <span className="text-corporate-gold">Every Step</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">
          From a single venture in 2017 to a diversified portfolio of over 10 brands across 7 industries, 
          RO Group is redefining growth and innovation in Bangladesh.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="bg-corporate-gold hover:bg-corporate-gold/90 text-corporate-navy font-semibold px-8 py-6 text-lg">
            <Link to="/ventures">Explore Our Ventures</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-corporate-navy px-8 py-6 text-lg">
            <Link to="/careers">Join Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;