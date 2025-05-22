
import { useEffect, useState } from 'react';

/**
 * Hook that tracks which section is currently active based on scroll position
 * This helps highlight the current section in the table of contents
 */
const useActiveSection = (sectionIds: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Function to determine which section is in view
    const handleScroll = () => {
      // Get all sections by their IDs
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      
      // Find the first section that's in view
      for (const section of sections) {
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          setActiveId(section.id);
          break;
        }
      }
    };

    // Register scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once on mount to set initial state
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useActiveSection;
