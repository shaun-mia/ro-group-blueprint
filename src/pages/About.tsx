import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About RO Group</h1>
          <p className="text-xl text-white/90">Our Story: From a Vision to a Legacy</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-12 text-center">
            A Timeline of Empowerment
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-corporate-gold text-corporate-navy font-bold px-4 py-2 rounded-lg">2017</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">The Journey Begins</h3>
                  <p className="text-muted-foreground">RO Group is founded with its first venture, Rider's Option, a bike servicing center in Moddho Badda, Dhaka. The same year, we expand into hospitality with the launch of Shawapnadip Park & Resort in Narayanganj.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-corporate-gold text-corporate-navy font-bold px-4 py-2 rounded-lg">2019</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Logistics Expansion</h3>
                  <p className="text-muted-foreground">We enter the logistics sector with RO Courier, establishing a network to serve the growing e-commerce demand.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-corporate-gold text-corporate-navy font-bold px-4 py-2 rounded-lg">2021</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Digital Revolution</h3>
                  <p className="text-muted-foreground">Embracing the digital revolution, we launch RO Mart, our flagship e-commerce platform, and Wholesale Mart for bulk distribution.</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="bg-corporate-gold text-corporate-navy font-bold px-4 py-2 rounded-lg">2022-2025</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Accelerated Growth</h3>
                  <p className="text-muted-foreground">A period of accelerated growth. We launch our first Lotto franchise outlet, establish the Furnito furniture brand with multiple factories and showrooms, and continue to expand our retail and logistics footprint.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold text-corporate-navy mb-4">Our Vision</h3>
              <p className="text-muted-foreground">To be a leading force for growth and innovation in every industry we operate in, continuously adapting to meet evolving customer needs.</p>
            </Card>
            
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold text-corporate-navy mb-4">Our Mission</h3>
              <p className="text-muted-foreground">To drive growth across all industries by prioritizing innovation, quality, and customer satisfaction.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-12 text-center">
            Meet Our Leaders
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center shadow-card">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">RN</span>
              </div>
              <h3 className="text-xl font-bold text-corporate-navy mb-2">Rafid Ahsan Noor</h3>
              <p className="text-corporate-gold font-semibold mb-3">Chairman</p>
              <p className="text-muted-foreground">The strategic visionary behind RO Group, providing the direction for our growth and diversification across all business sectors.</p>
            </Card>

            <Card className="p-8 text-center shadow-card">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AB</span>
              </div>
              <h3 className="text-xl font-bold text-corporate-navy mb-2">Akbar Hossain Bappy</h3>
              <p className="text-corporate-gold font-semibold mb-3">Managing Director</p>
              <p className="text-muted-foreground">The operational leader ensuring our mission is executed with excellence, driving performance and alignment throughout the organization.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;