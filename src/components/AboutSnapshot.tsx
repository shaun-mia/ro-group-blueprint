import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AboutSnapshot = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-6">
            Our Journey of Growth
          </h2>
          
          <Card className="p-8 md:p-12 shadow-corporate">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Our story began in 2017 with a single bike servicing center. Today, RO Group is a 
              dynamic conglomerate with thriving businesses in automotive, logistics, furniture, 
              e-commerce, retail, hospitality, and food. We are driven by a passion for ideas and 
              a commitment to quality, empowering growth for our customers, partners, and employees 
              every step of the way.
            </p>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Read Our Full Story</Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;