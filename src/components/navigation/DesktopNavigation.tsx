import React from 'react';
import { Link } from 'react-router-dom';
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
  BookOpen,
  ArrowRight
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
      case 'LineChart': return <LineChart {...iconProps} />;
      case 'FolderKanban': return <FolderKanban {...iconProps} />;
      case 'Workflow': return <Workflow {...iconProps} />;
      case 'Database': return <Database {...iconProps} />;
      case 'GraduationCap': return <GraduationCap {...iconProps} />;
      case 'FileText': return <FileText {...iconProps} />;
      case 'Calculator': return <Calculator {...iconProps} />;
      case 'Newspaper': return <Newspaper {...iconProps} />;
      case 'BookOpen': return <BookOpen {...iconProps} />;
      case 'ArrowRight': return <ArrowRight {...iconProps} />;
      default: return null;
    }
  };

  // Function to render mega-menu items without featured section
  const renderMegaMenuDropdown = (item: NavItem) => {
    if (!item.children) return null;

    // Split items into two sections for better layout
    const firstSection = item.children.slice(0, 2);
    const secondSection = item.children.slice(2, 4);

    return (
      <DropdownMenuContent className="mega-menu-dropdown w-[500px] bg-white border border-gray-200 shadow-xl z-[1200] p-0">
        <div className="dropdown-grid grid grid-cols-2 gap-0">
          {/* First Section */}
          <div className="dropdown-section p-4 border-r border-gray-100">
            {firstSection.map((subItem) => (
              <DropdownMenuItem asChild key={subItem.title} className="p-0 mb-4 last:mb-0">
                <Link 
                  to={subItem.href || "/"}
                  className="dropdown-item flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="item-icon mr-3 mt-1">
                    {subItem.icon && renderIcon(subItem.icon)}
                  </div>
                  <div className="item-content flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="item-title font-semibold text-gray-900 text-sm font-body">
                        {subItem.title}
                      </h3>
                      {subItem.badge && (
                        <Badge variant="success" className="text-xs">
                          {subItem.badge}
                        </Badge>
                      )}
                    </div>
                    {subItem.description && (
                      <p className="item-description text-xs text-gray-600 font-body leading-relaxed">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
          </div>

          {/* Second Section */}
          <div className="dropdown-section p-4">
            {secondSection.map((subItem) => (
              <DropdownMenuItem asChild key={subItem.title} className="p-0 mb-4 last:mb-0">
                <Link 
                  to={subItem.href || "/"}
                  className="dropdown-item flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="item-icon mr-3 mt-1">
                    {subItem.icon && renderIcon(subItem.icon)}
                  </div>
                  <div className="item-content flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="item-title font-semibold text-gray-900 text-sm font-body">
                        {subItem.title}
                      </h3>
                      {subItem.badge && (
                        <Badge variant="success" className="text-xs">
                          {subItem.badge}
                        </Badge>
                      )}
                    </div>
                    {subItem.description && (
                      <p className="item-description text-xs text-gray-600 font-body leading-relaxed">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </Link>
              </DropdownMenuItem>
            ))}
          </div>
        </div>
      </DropdownMenuContent>
    );
  };

  return (
    <nav className="main-nav hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        item.children ? (
          <div key={item.title} className="nav-item dropdown">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="nav-link-button flex items-center font-body h-auto px-3 py-2 text-[#1a202c] hover:text-dataops-500 transition-colors border-0 shadow-none bg-transparent hover:bg-transparent"
                  aria-haspopup="true" 
                  aria-expanded="false"
                >
                  {item.title}
                </Button>
              </DropdownMenuTrigger>
              {renderMegaMenuDropdown(item)}
            </DropdownMenu>
          </div>
        ) : (
          <div key={item.title} className="nav-item">
            <Link 
              to={item.href || "/"}
              className="nav-link text-[#1a202c] hover:text-dataops-500 font-medium font-body transition-colors px-3 py-2 rounded"
            >
              {item.title}
            </Link>
          </div>
        )
      ))}
    </nav>
  );
};

export default DesktopNavigation;
