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
    // SSR guard - only run in browser
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SSR-safe logo error handler
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (typeof console !== 'undefined') {
      console.warn('Logo failed to load');
    }
    e.currentTarget.alt = 'DataOps Group';
    e.currentTarget.style.background = '#1e4f9c';
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.display = 'flex';
    e.currentTarget.style.alignItems = 'center';
    e.currentTarget.style.justifyContent = 'center';
    e.currentTarget.style.width = '200px';
    e.currentTarget.style.height = '60px';
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 border-b border-gray-200",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
      aria-label="Main navigation"
      style={{ transition: 'background-color 0.2s ease, box-shadow 0.2s ease' }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center" aria-label="DataOps Group Home">
          <img
            src="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
            alt="DataOps Group Logo"
            className="h-16 md:h-20 w-auto"
            loading="eager"
            onError={handleLogoError}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <DesktopNavigation navItems={mainNavItems} />
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-dataops-900"
            size="icon"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isOpen} 
        navItems={mainNavItems} 
        setIsOpen={setIsOpen} 
      />
    </nav>
  );
};

export default Navbar;
