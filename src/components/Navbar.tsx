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
  return <nav className={cn("site-header", scrolled && "scrolled")} aria-label="Main navigation">
      <div className="nav-wrapper">
        <Link to="/" className="site-logo" aria-label="DataOps Group Home">
          <img alt="DataOps Group Logo" src="/lovable-uploads/b8e7f5a3-a944-47ec-876d-6369eb4c4b6c.png" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="nav-menu">
          <DesktopNavigation navItems={mainNavItems} />
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button" size="icon" aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation isOpen={isOpen} navItems={mainNavItems} setIsOpen={setIsOpen} />
    </nav>;
};
export default Navbar;