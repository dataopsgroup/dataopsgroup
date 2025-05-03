
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Approach', href: '/approach' },
    { 
      name: 'Industries', 
      isDropdown: true,
      items: [
        { name: 'Finance & Banking', href: '/case-studies' },
        { name: 'Healthcare', href: '/case-studies' },
        { name: 'Manufacturing', href: '/case-studies' },
        { name: 'Retail & E-commerce', href: '/case-studies' },
        { name: 'Technology', href: '/case-studies' },
        { name: 'Insurance', href: '/case-studies' },
        { name: 'Logistics', href: '/case-studies' },
        { name: 'Energy & Utilities', href: '/case-studies' },
      ]
    },
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
            item.isDropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="text-dataops-900 hover:text-dataops-600 font-medium transition-colors flex items-center gap-1 bg-transparent">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                  {item.items.map((subItem) => (
                    <DropdownMenuItem key={subItem.name} asChild>
                      <Link 
                        to={subItem.href}
                        className="w-full cursor-pointer"
                      >
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link 
                key={item.name}
                to={item.href}
                className="text-dataops-900 hover:text-dataops-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            )
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
              item.isDropdown ? (
                <div key={item.name} className="flex flex-col px-4">
                  <div className="py-2 font-medium text-dataops-900">{item.name}</div>
                  <div className="pl-4 flex flex-col space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="text-dataops-900 hover:text-dataops-600 py-1"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-dataops-900 hover:text-dataops-600 font-medium py-2 px-4"
                >
                  {item.name}
                </Link>
              )
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
