import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Careers = () => {
  const benefits = [
    "Competitive Compensation with performance-based reviews",
    "Two yearly festival bonuses",
    "Diverse career paths across 7+ industries", 
    "Continuous learning and development opportunities",
    "Collaborative and creative work environment",
    "Health insurance and wellness programs"
  ];

  const ventures = [
    { name: "RO Mart", slug: "ro-mart", openings: 5, category: "E-commerce" },
    { name: "Furnito", slug: "furnito", openings: 8, category: "Manufacturing" },
    { name: "RO Courier", slug: "ro-courier", openings: 3, category: "Logistics" },
    { name: "Rider's Option", slug: "riders-option", openings: 2, category: "Automotive" },
    { name: "Food Pavilion", slug: "food-pavilion", openings: 4, category: "Food & Beverage" },
    { name: "Shawapnadip", slug: "shawapnadip", openings: 3, category: "Hospitality" }
  ];

  const currentOpenings = [
    {
      title: "E-commerce Manager",
      company: "RO Mart",
      department: "Operations",
      location: "Dhaka",
      type: "Full-time",
      experience: "3-5 years",
      deadline: "Dec 31, 2024"
    },
    {
      title: "Furniture Designer", 
      company: "Furnito",
      department: "Design",
      location: "Dhaka",
      type: "Full-time",
      experience: "2-4 years",
      deadline: "Jan 15, 2025"
    },
    {
      title: "Logistics Coordinator",
      company: "RO Courier", 
      department: "Operations",
      location: "Chattogram",
      type: "Full-time",
      experience: "1-3 years",
      deadline: "Jan 10, 2025"
    },
    {
      title: "Digital Marketing Specialist",
      company: "RO Mart",
      department: "Marketing",
      location: "Dhaka",
      type: "Full-time", 
      experience: "2-3 years",
      deadline: "Dec 25, 2024"
    },
    {
      title: "Production Manager",
      company: "Furnito",
      department: "Manufacturing",
      location: "Dhaka",
      type: "Full-time",
      experience: "5+ years", 
      deadline: "Jan 20, 2025"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at RO Group</h1>
          <p className="text-xl text-white/90">Empowering Your Growth: Build Your Future With Us</p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-6">
              A Culture of Opportunity and Innovation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At RO Group, our motto "Empowering Growth Every Step" applies as much to our employees 
              as it does to our businesses. We are a diverse, dynamic, and fast-growing company where 
              your talent can thrive. Join us and be a part of a team that is shaping the future of 
              multiple industries in Bangladesh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 shadow-card">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-corporate-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-corporate-navy text-sm font-bold">✓</span>
                  </div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Teams Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-4">Find Your Fit</h2>
            <p className="text-lg text-muted-foreground">
              From the fast-paced world of e-commerce at RO Mart to the precision of manufacturing 
              at Furnito, there's a team for every passion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, index) => (
              <Card key={index} className="p-6 shadow-card text-center hover:shadow-elegant transition-shadow">
                <h3 className="text-xl font-bold text-corporate-navy mb-2">{venture.name}</h3>
                <Badge variant="outline" className="mb-4">{venture.category}</Badge>
                <p className="text-corporate-gold font-semibold mb-4">
                  {venture.openings} Open Positions
                </p>
                <Button asChild className="w-full">
                  <Link to={`/careers/${venture.slug}`}>Join This Team</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-corporate-navy mb-4">Start Your Journey Today</h2>
            <p className="text-lg text-muted-foreground">Browse our current openings and apply today</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
            <Input placeholder="Search jobs..." className="flex-1" />
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                <SelectItem value="ro-mart">RO Mart</SelectItem>
                <SelectItem value="furnito">Furnito</SelectItem>
                <SelectItem value="ro-courier">RO Courier</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Listings */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {currentOpenings.map((job, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-elegant transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-corporate-navy">{job.title}</h3>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <span>🏢 {job.company}</span>
                      <span>📍 {job.location}</span>
                      <span>💼 {job.department}</span>
                      <span>⏰ {job.experience}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Application Deadline: <span className="font-medium">{job.deadline}</span>
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline">View Details</Button>
                    <Button>Apply Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Positions</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;