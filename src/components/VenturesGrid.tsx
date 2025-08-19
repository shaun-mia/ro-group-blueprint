import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ventures } from "@/data/ventures";

const VenturesGrid = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-6">
            A Diverse Family of Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative companies that make up RO Group. Each brand is a leader in its sector,
            dedicated to excellence and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ventures.map((venture) => (
            <Card key={venture.slug} className="p-6 hover:shadow-card transition-all duration-300">
              <Link to={`/ventures/${venture.slug}`} className="block">
                <div className="h-20 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{venture.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-corporate-navy mb-2 group-hover:text-corporate-gold transition-colors">
                  {venture.name}
                </h3>
                <p className="text-sm text-muted-foreground">{venture.desc}</p>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VenturesGrid;