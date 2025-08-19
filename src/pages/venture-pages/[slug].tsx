import { useParams } from 'react-router-dom';
import { ventures } from '@/data/ventures';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function VenturePage() {
  const { slug } = useParams();
  const venture = ventures.find(v => v.slug === slug);

  if (!venture) return <div>Venture not found</div>;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`py-20 ${venture.color} bg-opacity-10`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{venture.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{venture.name}</h1>
            <p className="text-xl text-corporate-gold mb-6">{venture.headline}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{venture.about}</p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-corporate-navy text-center mb-12">Key Facts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {venture.keyFacts && Object.entries(venture.keyFacts).map(([key, value], index) => (
                <Card key={index} className="p-6 text-center shadow-card">
                  <h3 className="text-2xl font-bold text-corporate-gold mb-2">{value}</h3>
                  <p className="text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {venture.services && (
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-corporate-navy text-center mb-12">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {venture.services.map((service, index) => (
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
      )}

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-corporate-navy text-center mb-12">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {venture.team.map((member, index) => (
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

      <Footer />
    </div>
  );
}