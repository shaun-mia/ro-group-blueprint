import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-corporate-navy">
          RO Group
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-corporate-navy transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:text-corporate-navy transition-colors">
            About
          </Link>
          <Link to="/ventures" className="text-foreground hover:text-corporate-navy transition-colors">
            Our Ventures
          </Link>
          <Link to="/careers" className="text-foreground hover:text-corporate-navy transition-colors">
            Careers
          </Link>
          <Link to="/contact" className="text-foreground hover:text-corporate-navy transition-colors">
            Contact
          </Link>
        </div>

        <Button variant="outline" asChild className="hidden md:inline-flex">
          <Link to="/careers">Join Our Team</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;