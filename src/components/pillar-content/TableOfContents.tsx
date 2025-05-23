
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
      {/* Aligning with the Introduction heading */}
      <h3 className="text-xl font-bold mb-4 sidebar-content-title">Table of Contents</h3>
      <ul className="space-y-3 pl-0 list-none">
        {items.map((item) => (
          <li key={item.id} className="text-base">
            <a 
              href={`#${item.id}`}
              className={cn(
                "block py-1.5 px-2 rounded transition-colors duration-200 no-underline",
                activeId === item.id 
                  ? "text-dataops-800 font-medium bg-gray-100" 
                  : "text-dataops-600 hover:text-dataops-800 hover:underline"
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
