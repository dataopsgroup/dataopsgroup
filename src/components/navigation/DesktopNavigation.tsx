
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  LifeBuoy, 
  Rocket, 
  Connection, 
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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavItem, SubNavItem } from '@/types/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems }) => {
  // Function to render the appropriate icon based on string identifier
  const renderIcon = (iconName?: string) => {
    const iconProps = { className: "h-5 w-5 mr-3 text-dataops-500", "aria-hidden": true };
    
    switch (iconName) {
      case 'LifeBuoy': return <LifeBuoy {...iconProps} />;
      case 'Rocket': return <Rocket {...iconProps} />;
      case 'Connection': return <Connection {...iconProps} />;
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

  // Function to render mega-menu items
  const renderMegaMenuItem = (subItem: SubNavItem) => {
    return (
      <DropdownMenuItem asChild key={subItem.title} className="p-0">
        <Link 
          to={subItem.href || "/"}
          className="w-full cursor-pointer flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <div className="flex items-start w-full">
            {subItem.icon && renderIcon(subItem.icon)}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-900 font-body">
                  {subItem.title}
                </span>
                {subItem.badge && (
                  <Badge variant="success" className="text-xs">
                    {subItem.badge}
                  </Badge>
                )}
              </div>
              {subItem.description && (
                <p className="text-sm text-gray-600 font-body leading-relaxed">
                  {subItem.description}
                </p>
              )}
            </div>
          </div>
        </Link>
      </DropdownMenuItem>
    );
  };

  return (
    <>
      {navItems.map((item) => (
        item.children ? (
          <DropdownMenu key={item.title}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="nav-item nav-dropdown-trigger flex items-center font-body h-auto px-3 py-2"
                aria-haspopup="true" 
                aria-expanded="false"
              >
                {item.title}
                <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-white z-[1100] p-2">
              <div className="grid gap-1">
                {item.children?.map(renderMegaMenuItem)}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link 
            key={item.title}
            to={item.href || "/"}
            className="nav-item font-body"
          >
            {item.title}
          </Link>
        )
      ))}
      <Link to="/contact" className="nav-cta font-body">
        Get Started
      </Link>
    </>
  );
};

export default DesktopNavigation;
