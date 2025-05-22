
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
      const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);
      
      // Special case: if we're at the top of the page, highlight the first section
      if (window.scrollY < 100 && sections.length > 0 && sections[0]) {
        setActiveId(sections[0].id);
        return;
      }
      
      // Find the first section that's in view
      let currentSection = null;
      for (const section of sections) {
        if (!section) continue;
        
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          currentSection = section;
          break;
        }
      }
      
      // If no section is in view but we've scrolled past the first one,
      // find the last section above the viewport
      if (!currentSection && window.scrollY > 100) {
        let lastSectionAbove = null;
        let minDistance = Infinity;
        
        for (const section of sections) {
          if (!section) continue;
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.bottom);
          
          if (rect.bottom <= 0 && distance < minDistance) {
            minDistance = distance;
            lastSectionAbove = section;
          }
        }
        
        if (lastSectionAbove) {
          currentSection = lastSectionAbove;
        }
      }
      
      if (currentSection) {
        setActiveId(currentSection.id);
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
