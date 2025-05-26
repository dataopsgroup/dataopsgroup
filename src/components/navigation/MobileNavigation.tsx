
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavItem, SubNavItem } from '@/types/navigation';
import { Book, ChevronRight } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  navItems: NavItem[];
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, navItems, setIsOpen }) => {
  if (!isOpen) return null;

  // Function to render the appropriate icon based on string identifier
  const renderIcon = (iconName?: string) => {
    if (iconName === 'book') {
      return <Book className="h-3 w-3 mr-1" aria-hidden="true" />;
    }
    return null;
  };

  // Recursive function to render nested menu items
  const renderSubMenu = (items: SubNavItem[] | undefined, level: number = 1) => {
    if (!items) return null;

    return (
      <ul className={`pl-${level * 4} flex flex-col space-y-2`}>
        {items.map((subItem) => (
          <li key={subItem.name}>
            {subItem.isDropdown && subItem.items ? (
              <div className="flex flex-col">
                <div className="py-1 font-medium text-dataops-900 flex items-center font-body">
                  {subItem.name}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </div>
                {renderSubMenu(subItem.items, level + 1)}
              </div>
            ) : (
              <Link
                to={subItem.href || "/"}
                onClick={() => setIsOpen(false)}
                className="text-dataops-900 hover:text-dataops-600 py-1 flex items-center font-body"
              >
                {subItem.icon && renderIcon(subItem.icon)}
                {subItem.name}
              </Link>
            )}
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
            <li key={item.name}>
              {item.isDropdown ? (
                <div className="flex flex-col px-4">
                  <Link
                    to={item.href || "/"}
                    onClick={() => setIsOpen(false)}
                    className="py-2 font-medium text-dataops-900 hover:text-dataops-600 flex items-center font-body"
                  >
                    {item.name}
                  </Link>
                  {renderSubMenu(item.items)}
                </div>
              ) : (
                <Link
                  to={item.href || "/"}
                  onClick={() => setIsOpen(false)}
                  className="text-dataops-900 hover:text-dataops-600 font-medium py-2 px-4 flex items-center font-body"
                >
                  {item.name}
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
