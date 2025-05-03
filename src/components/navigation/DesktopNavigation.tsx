
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavItem } from '@/types/navigation';
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
  return (
    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        item.isDropdown ? (
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger className="text-dataops-900 hover:text-dataops-600 font-medium transition-colors flex items-center gap-1 bg-transparent">
              {item.name}
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white">
              {item.items?.map((subItem) => (
                <DropdownMenuItem key={subItem.name} asChild>
                  <Link 
                    to={subItem.href}
                    className="w-full cursor-pointer flex items-center"
                  >
                    {subItem.icon && subItem.icon}
                    {subItem.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link 
            key={item.name}
            to={item.href || "/"}
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
  );
};

export default DesktopNavigation;
