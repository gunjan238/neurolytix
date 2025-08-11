import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import EnquiryDialog from "./enquiry-dialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    // Ensure we scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={handleNavClick}>
            <img 
              src="/assets/neurolytix.png"
              alt="NeuroLytix Logo"
              className="w-8 h-8 group-hover:scale-110 transition-transform neural-pulse"
            />
            <span className="text-xl font-bold text-gradient">NeuroLytix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={handleNavClick}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="neural" size="sm" onClick={() => setEnquiryOpen(true)}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.path
                      ? "bg-secondary text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button variant="neural" size="sm" className="w-full" onClick={() => setEnquiryOpen(true)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
    </nav>
  );
};

export default Navigation;