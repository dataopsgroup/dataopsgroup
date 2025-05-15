
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavItem } from '@/types/navigation';
import { Book } from 'lucide-react';

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
      return <Book className="h-3 w-3 mr-1" />;
    }
    return null;
  };

  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md animate-fade-in">
      <div className="container mx-auto py-4 flex flex-col space-y-4">
        {navItems.map((item) => (
          item.isDropdown ? (
            <div key={item.name} className="flex flex-col px-4">
              <div className="py-2 font-medium text-dataops-900 flex items-center">{item.name}</div>
              <div className="pl-4 flex flex-col space-y-2">
                {item.items?.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    onClick={() => setIsOpen(false)}
                    className="text-dataops-900 hover:text-dataops-600 py-1 flex items-center"
                  >
                    {subItem.icon && renderIcon(subItem.icon)}
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.name}
              to={item.href || "/"}
              onClick={() => setIsOpen(false)}
              className="text-dataops-900 hover:text-dataops-600 font-medium py-2 px-4 flex items-center"
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
  );
};

export default MobileNavigation;
