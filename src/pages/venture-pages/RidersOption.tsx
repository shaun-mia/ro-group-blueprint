import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const RidersOption = () => {
  const keyFacts = [
    { label: "Established", value: "2017" },
    { label: "Location", value: "Moddho Badda, Dhaka" },
    { label: "Annual Sales", value: "70-80 Lakh BDT" },
    { label: "Team Size", value: "15+ Employees" }
  ];

  const services = [
    {
      title: "Professional Bike Servicing",
      description: "Complete maintenance and repair services for all motorcycle brands",
      icon: "🔧"
    },
    {
      title: "Reliable Parcel Service", 
      description: "Fast and secure parcel delivery within Dhaka and surrounding areas",
      icon: "📦"
    },
    {
      title: "Emergency Repairs",
      description: "Quick roadside assistance and emergency repair services",
      icon: "🚨"
    },
    {
      title: "Parts & Accessories",
      description: "Genuine parts and quality accessories for motorcycles",
      icon: "⚙️"
    }
  ];

  const teamMembers = [
    {
      name: "KHALAD MAHMUD AUNTER",
      position: "Incharge Officer",
      description: "Leading operations and ensuring service excellence"
    },
    {
      name: "MD. AL AMIN SOHAG",
      position: "Manager",
      description: "Managing daily operations and customer relations"
    },
    {
      name: "ALAMGIR HOSSAIN", 
      position: "Manager",
      description: "Overseeing technical services and quality control"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🏍️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Rider's Option</h1>
            <p className="text-xl text-white/90 mb-6">The Original Venture, Still Leading the Way</p>
            <p className="text-lg text-white/80 leading-relaxed">
              Rider's Option is where it all began. Established in 2017, it is a premier bike servicing 
              center in Dhaka, also offering a reliable parcel service. It stands as a symbol of our 
              commitment to quality service.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-corporate-navy text-center mb-12">Key Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFacts.map((fact, index) => (
                <Card key={index} className="p-6 text-center shadow-card">
                  <h3 className="text-2xl font-bold text-corporate-gold mb-2">{fact.value}</h3>
                  <p className="text-muted-foreground">{fact.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-corporate-navy text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-corporate-navy mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-corporate-navy text-center mb-12">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center shadow-card">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-corporate-navy mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">{member.position}</Badge>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg text-white/90 mb-8">
              Be part of where RO Group's journey began. We're always looking for dedicated professionals 
              who share our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/careers/riders-option">View Open Positions</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-corporate-navy">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RidersOption;