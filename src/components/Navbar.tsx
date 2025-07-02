
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
        "fixed top-0 w-full border-b border-gray-200",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
      style={{ 
        transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
        zIndex: 50 /* Ensure navigation is always on top */
      }}
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center" aria-label="DataOps Group Home">
          {/* Mobile-first WebP optimized logo */}
          <picture className="h-12 md:h-16 lg:h-20 w-auto">
            <source 
              srcSet="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.webp" 
              type="image/webp"
              media="(max-width: 768px)"
            />
            <source 
              srcSet="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" 
              type="image/png"
              media="(max-width: 768px)"
            />
            <source 
              srcSet="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.webp" 
              type="image/webp"
            />
            <img
              src="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
              alt="DataOps Group Logo"
              className="h-full w-auto object-contain nav-logo"
              width="200"
              height="80"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </picture>
        </Link>
        
        {/* Desktop Navigation - Only show on large screens (1024px+) */}
        <DesktopNavigation navItems={mainNavItems} />
        
        {/* Mobile/Tablet menu button - Show on screens < 1024px */}
        <div className="lg:hidden">
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

      {/* Mobile/Tablet Navigation */}
      <MobileNavigation 
        isOpen={isOpen} 
        navItems={mainNavItems} 
        setIsOpen={setIsOpen} 
      />
    </nav>
  );
};

export default Navbar;
