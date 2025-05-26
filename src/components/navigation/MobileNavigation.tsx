
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavItem, SubNavItem } from '@/types/navigation';
import { 
  LifeBuoy, 
  Rocket, 
  LineChart, 
  FolderKanban, 
  Workflow, 
  Database, 
  GraduationCap, 
  FileText, 
  Calculator, 
  Newspaper, 
  BookOpen 
} from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  navItems: NavItem[];
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, navItems, setIsOpen }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  
  const toggleItem = (title: string) => {
    setOpenItems((current) => 
      current.includes(title) 
        ? current.filter(item => item !== title) 
        : [...current, title]
    );
  };

  // Function to render the appropriate icon based on string identifier
  const renderIcon = (iconName?: string) => {
    const iconProps = { className: "h-5 w-5", "aria-hidden": true };
    
    switch (iconName) {
      case 'LifeBuoy': return <LifeBuoy {...iconProps} />;
      case 'Rocket': return <Rocket {...iconProps} />;
      case 'LineChart': return <LineChart {...iconProps} />;
      case 'FolderKanban': return <FolderKanban {...iconProps} />;
      case 'Workflow': return <Workflow {...iconProps} />;
      case 'Database': return <Database {...iconProps} />;
      case 'GraduationCap': return <GraduationCap {...iconProps} />;
      case 'FileText': return <FileText {...iconProps} />;
      case 'Calculator': return <Calculator {...iconProps} />;
      case 'Newspaper': return <Newspaper {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      default: return null;
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-auto">
      <div className="pt-20 pb-6 px-4">
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <div key={item.title} className="border-b border-gray-100">
              {item.children ? (
                <div>
                  <button
                    className="flex justify-between items-center w-full py-4 text-left text-lg font-medium text-gray-900"
                    onClick={() => toggleItem(item.title)}
                  >
                    {item.title}
                    <ChevronDown 
                      className={cn(
                        "h-5 w-5 text-gray-500 transition-transform",
                        openItems.includes(item.title) ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  
                  {openItems.includes(item.title) && (
                    <div className="pl-4 pb-4 space-y-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href || "/"}
                          className="flex items-start py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="mr-3 text-primary">
                            {child.icon && renderIcon(child.icon)}
                          </div>
                          <div>
                            <div className="text-base font-medium text-gray-900 flex items-center">
                              {child.title}
                              {child.badge && (
                                <Badge variant="success" className="ml-2 text-xs">
                                  {child.badge}
                                </Badge>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{child.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href || "/"}
                  className="flex items-center justify-between py-4 text-lg font-medium text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        <div className="mt-8 space-y-4 px-2">
          <Button
            variant="outline"
            className="w-full justify-center"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
          
          <Button
            className="w-full justify-center"
            asChild
          >
            <Link to="/assessment" onClick={() => {
              // Track CTA click
              if (window.gtag) {
                window.gtag('event', 'cta_click', {
                  'event_category': 'Engagement',
                  'event_label': 'Mobile Menu Assessment CTA'
                });
              }
              // Track in HubSpot
              if (window._hsq) {
                window._hsq.push(['trackEvent', {
                  id: 'mobile_menu_assessment_cta_click'
                }]);
              }
              setIsOpen(false);
            }}>
              Book Free Assessment
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
