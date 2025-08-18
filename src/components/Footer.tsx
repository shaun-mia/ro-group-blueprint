import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-corporate-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">RO Group</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Empowering growth every step. A diversified conglomerate with over 10 brands 
              across 7 industries, driving innovation and excellence in Bangladesh.
            </p>
            <div className="text-white/70">
              <p>House 63, Road-12, DIT Project</p>
              <p>Merul Badda, Dhaka</p>
              <p className="mt-2">Phone: 01321204255</p>
              <p>Email: rogroup57@gmail.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-corporate-gold transition-colors">About Us</Link></li>
              <li><Link to="/ventures" className="text-white/80 hover:text-corporate-gold transition-colors">Our Ventures</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-corporate-gold transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-corporate-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li><Link to="/ventures/ro-mart" className="text-white/80 hover:text-corporate-gold transition-colors">RO Mart</Link></li>
              <li><Link to="/ventures/furnito" className="text-white/80 hover:text-corporate-gold transition-colors">Furnito</Link></li>
              <li><Link to="/ventures/ro-courier" className="text-white/80 hover:text-corporate-gold transition-colors">RO Courier</Link></li>
              <li><Link to="/ventures/riders-option" className="text-white/80 hover:text-corporate-gold transition-colors">Rider's Option</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
          <p>&copy; 2024 RO Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;