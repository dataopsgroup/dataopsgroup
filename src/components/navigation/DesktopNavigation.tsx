
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavItem, SubNavItem } from '@/types/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

interface DesktopNavigationProps {
  navItems: NavItem[];
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ navItems }) => {
  // Function to render the appropriate icon based on string identifier
  const renderIcon = (iconName?: string) => {
    if (iconName === 'book') {
      return <Book className="h-3 w-3 mr-1" aria-hidden="true" />;
    }
    return null;
  };

  // Function to render submenu items recursively
  const renderSubMenuItem = (subItem: SubNavItem) => {
    if (subItem.isDropdown && subItem.items) {
      return (
        <DropdownMenuSub key={subItem.name}>
          <DropdownMenuSubTrigger>
            {subItem.name}
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {subItem.items.map(renderSubMenuItem)}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      );
    } else {
      return (
        <DropdownMenuItem asChild key={subItem.name}>
          <Link 
            to={subItem.href || "/"}
            className="w-full cursor-pointer flex items-center"
          >
            {subItem.icon && renderIcon(subItem.icon)}
            {subItem.name}
          </Link>
        </DropdownMenuItem>
      );
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-8" aria-label="Desktop Navigation">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.name}>
            {item.isDropdown ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Link 
                    to={item.name === 'Services' ? '/services' : (item.href || "/")}
                    className="flex items-center text-dataops-900 hover:text-dataops-600 font-medium transition-colors bg-transparent"
                    aria-haspopup="true" 
                    aria-expanded="false"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-1" aria-hidden="true" />
                    <span className="sr-only">Toggle {item.name} dropdown</span>
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                  {item.items?.map(renderSubMenuItem)}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link 
                to={item.href || "/"}
                className="flex items-center text-dataops-900 hover:text-dataops-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Link to="/contact">
        <Button className="bg-dataops-600 hover:bg-dataops-700">Get Started</Button>
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
