
import React from 'react';
import { cn } from '@/lib/utils';
import useActiveSection from '@/hooks/useActiveSection';

interface TableOfContentsProps {
  items: Array<{
    id: string;
    title: string;
  }>;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, className }) => {
  // Get the IDs of all sections
  const sectionIds = items.map(item => item.id);
  
  // Use our custom hook to track the active section
  const activeId = useActiveSection(sectionIds);
  
  // Function to scroll to a section when clicking on a TOC item
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className={cn("table-of-contents", className)}>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="text-sm">
            <a 
              href={`#${item.id}`}
              className={cn(
                "block py-2 px-3 rounded-md transition-colors duration-200",
                activeId === item.id 
                  ? "bg-gray-100 text-dataops-800 font-medium" 
                  : "text-dataops-600 hover:bg-gray-50 hover:text-dataops-800"
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
