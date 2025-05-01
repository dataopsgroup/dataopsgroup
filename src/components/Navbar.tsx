
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Approach', href: '/approach' },
    { name: 'Insights', href: '/insights' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/1253bf24-1a66-4b00-8820-9eef25ca0db1.png" 
            alt="DataOps Group Logo" 
            className="h-16 md:h-20" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.href}
              className="text-dataops-900 hover:text-dataops-600 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-dataops-600 hover:bg-dataops-700">Get Started</Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-dataops-900"
            size="icon"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="text-dataops-900 hover:text-dataops-600 font-medium py-2 px-4"
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-dataops-600 hover:bg-dataops-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
