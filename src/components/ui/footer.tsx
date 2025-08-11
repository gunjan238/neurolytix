import { Link } from "react-router-dom";
import PrivacyPolicy from "@/pages/PrivacyPolicy";  
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import { Button } from "./button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  Brain,
  BarChart3,
  Code,
  Database
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI & Machine Learning", href: "/services" },
    { name: "Business Intelligence", href: "/services" },
    { name: "Software Development", href: "/services" },
    { name: "Data Consultancy", href: "/services" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/team" },
    { name: "Contact", href: "/contact" }
  ];

  const industries = [
    "Manufacturing",
    "Healthcare", 
    "Retail & E-commerce",
    "Financial Services",
    "Automotive",
    "Education"
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/neurolytix.png"
                alt="NeuroLytix Logo"
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gradient">NeuroLytix</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Pioneering the future of intelligent business solutions through advanced neural networks 
              and data analytics across all industries.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">neurolytix028@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 9359434872</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Serving clients globally</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
  href="https://www.linkedin.com/in/gunjan-kothari-bd290901/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="sm" className="flex items-center gap-2">
    <Linkedin className="w-4 h-4" />
   
  </Button>
</a>

              <Button variant="outline" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border bg-background/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest insights on AI, machine learning, and business intelligence delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-sm"
              />
              <Button variant="neural" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-background">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} NeuroLytix. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;