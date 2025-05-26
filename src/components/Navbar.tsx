
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { mainNavItems } from '@/data/navigationData';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);
  
  return (
    <header className={cn(
      "header fixed top-0 left-0 w-full z-40 transition-all duration-300",
      scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="nav-wrapper flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="logo flex items-center">
            <img 
              src="/lovable-uploads/b8e7f5a3-a944-47ec-876d-6369eb4c4b6c.png" 
              alt="DataOps Group" 
              className="h-8 md:h-10"
              width="auto"
              height="40"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <DesktopNavigation navItems={mainNavItems} />
          
          {/* Call to Action - Desktop */}
          <div className="nav-cta hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild className="btn btn-outline">
              <Link to="/contact">Contact</Link>
            </Button>
            <Button asChild className="btn btn-primary">
              <Link to="/assessment">Book Free Assessment</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)} 
              className="mobile-menu-btn" 
              aria-expanded={isOpen} 
              aria-controls="mobile-menu" 
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNavigation 
        navItems={mainNavItems} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
      />
    </header>
  );
};

export default Navbar;
