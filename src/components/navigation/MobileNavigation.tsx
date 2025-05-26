
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavItem, SubNavItem } from '@/types/navigation';
import { 
  ChevronRight,
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
  if (!isOpen) return null;

  // Function to render the appropriate icon based on string identifier
  const renderIcon = (iconName?: string) => {
    const iconProps = { className: "h-4 w-4 mr-2 text-dataops-500", "aria-hidden": true };
    
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

  // Recursive function to render nested menu items
  const renderSubMenu = (items: SubNavItem[] | undefined, level: number = 1) => {
    if (!items) return null;

    return (
      <ul className={`pl-${level * 4} flex flex-col space-y-2`}>
        {items.map((subItem) => (
          <li key={subItem.title}>
            <Link
              to={subItem.href || "/"}
              onClick={() => setIsOpen(false)}
              className="text-dataops-900 hover:text-dataops-600 py-2 flex items-start font-body"
            >
              <div className="flex items-start w-full">
                {subItem.icon && renderIcon(subItem.icon)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">
                      {subItem.title}
                    </span>
                    {subItem.badge && (
                      <Badge variant="success" className="text-xs">
                        {subItem.badge}
                      </Badge>
                    )}
                  </div>
                  {subItem.description && (
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav 
      id="mobile-menu"
      className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in"
      aria-label="Mobile Navigation"
    >
      <div className="container mx-auto py-4 flex flex-col space-y-4">
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.title}>
              {item.children ? (
                <div className="flex flex-col px-4">
                  <div className="py-2 font-medium text-dataops-900 flex items-center font-body">
                    {item.title}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                  {renderSubMenu(item.children)}
                </div>
              ) : (
                <Link
                  to={item.href || "/"}
                  onClick={() => setIsOpen(false)}
                  className="text-dataops-900 hover:text-dataops-600 font-medium py-2 px-4 flex items-center font-body"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        
        <div className="px-4 pt-2">
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-dataops-600 hover:bg-dataops-700 font-body">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
