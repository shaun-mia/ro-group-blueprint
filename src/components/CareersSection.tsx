import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const CareersSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 md:p-12 shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-6">
              Grow With Us
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              We believe that our greatest asset is our people. Explore exciting career opportunities 
              across our diverse companies and become a part of our growth story.
            </p>
            
            <Button asChild size="lg" className="bg-corporate-navy hover:bg-corporate-navy-light text-white">
              <Link to="/careers">View Current Openings</Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;