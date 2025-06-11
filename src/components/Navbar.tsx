
/**
 * NAVIGATION COMPONENT - KNOWLEDGE ARTICLE REMINDERS:
 * 
 * 🚫 NEVER MODIFY NAVIGATION WITHOUT EXPLICIT INSTRUCTION
 * 🚫 MAINTAIN CURRENT DROPDOWN STRUCTURE
 * 🚫 KEEP MOBILE MENU FUNCTIONALITY
 * 🔗 USE Link COMPONENTS FOR INTERNAL, <a> FOR EXTERNAL
 * 
 * See Knowledge Article: "Navigation Requirements"
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { mainNavItems } from '@/data/navigationData';
import DesktopNavigation from './navigation/DesktopNavigation';
import MobileNavigation from './navigation/MobileNavigation';
import OptimizedLogo from '@/components/ui/optimized-logo';

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
          <OptimizedLogo
            src="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
            alt="DataOps Group Logo"
            className="h-16 md:h-20 w-auto"
            priority={true}
            width={200}
            height={80}
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
