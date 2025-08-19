import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Ventures = () => {
  const ventures = [
    {
      name: "Rider's Option",
      slug: "riders-option",
      category: "Automotive",
      established: "2017",
      description: "Premier bike servicing center and parcel service in Dhaka",
      revenue: "70-80 Lakh BDT",
      employees: "15+",
      image: "🏍️"
    },
    {
      name: "RO Courier",
      slug: "ro-courier", 
      category: "Logistics",
      established: "2019",
      description: "Dynamic logistics network with hubs across Bangladesh",
      revenue: "~7 Crore BDT",
      employees: "80+",
      image: "📦"
    },
    {
      name: "Furnito",
      slug: "furnito",
      category: "Manufacturing",
      established: "2024", 
      description: "Premium furniture brand with state-of-the-art manufacturing",
      revenue: "Growing",
      employees: "100+",
      image: "🪑"
    },
    {
      name: "RO Mart",
      slug: "ro-mart",
      category: "E-commerce",
      established: "2021",
      description: "Premier e-commerce platform for home and lifestyle products",
      revenue: "6-7 Crore BDT", 
      employees: "35+",
      image: "🛒"
    },
    {
      name: "Wholesale Mart",
      slug: "wholesale-mart",
      category: "Distribution",
      established: "2021",
      description: "Bulk distribution platform for businesses",
      revenue: "Growing",
      employees: "20+",
      image: "🏪"
    },
    {
      name: "Lotto",
      slug: "lotto",
      category: "Retail",
      established: "2022",
      description: "Franchise retail outlets offering quality products",
      revenue: "Expanding",
      employees: "25+",
      image: "🎯"
    },
    {
      name: "Shawapnadip",
      slug: "shawapnadip",
      category: "Hospitality",
      established: "2017",
      description: "Park & Resort in Narayanganj offering premium hospitality",
      revenue: "Seasonal",
      employees: "30+",
      image: "🌳"
    },
    {
      name: "Food Pavilion",
      slug: "food-pavilion",
      category: "Food & Beverage",
      established: "2023",
      description: "Restaurant chain offering diverse culinary experiences",
      revenue: "Growing",
      employees: "40+",
      image: "🍽️"
    }
  ];

  const categories = ["All", "Automotive", "Logistics", "Manufacturing", "E-commerce", "Distribution", "Retail", "Hospitality", "Food & Beverage"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio of Brands</h1>
          <p className="text-xl text-white/90">Innovation Across Industries</p>
          <p className="text-lg text-white/80 mt-4 max-w-3xl mx-auto">
            RO Group is comprised of a diverse portfolio of brands, each a testament to our commitment 
            to quality and market leadership. Explore our ventures below to see how we are making an 
            impact in different sectors across Bangladesh.
          </p>
        </div>
      </section>

      {/* Ventures Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventures.map((venture, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-shadow group">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4">{venture.image}</div>
                  <Badge variant="outline" className="mb-2">{venture.category}</Badge>
                  <h3 className="text-xl font-bold text-corporate-navy mb-2">{venture.name}</h3>
                  <p className="text-sm text-corporate-gold font-medium">Est. {venture.established}</p>
                </div>
                
                <p className="text-muted-foreground text-center mb-6">{venture.description}</p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Revenue:</span>
                    <span className="font-medium">{venture.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size:</span>
                    <span className="font-medium">{venture.employees}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button asChild className="w-full">
                    <Link to={`/ventures/${venture.slug}`}>Learn More</Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/careers/${venture.slug}`}>Join This Team</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ventures;