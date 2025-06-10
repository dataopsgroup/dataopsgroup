
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface TableOfContentsProps {
  activeSection: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  activeSection
}) => {
  const { isMobile } = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction: The HubSpot Expert Decision'
    },
    {
      id: 'understanding-experts',
      title: 'Understanding HubSpot Experts vs. Agencies'
    },
    {
      id: 'types-expertise',
      title: 'Types of HubSpot Expertise You Need'
    },
    {
      id: 'beyond-agency-safety',
      title: 'Beyond the Agency Safety Net'
    },
    {
      id: 'when-need-expert',
      title: 'When Your Business Needs a HubSpot Expert'
    },
    {
      id: 'evaluating-qualifications',
      title: 'Evaluating HubSpot Expert Qualifications'
    },
    {
      id: 'pricing-guide',
      title: 'Complete Pricing Guide'
    },
    {
      id: 'step-by-step-process',
      title: 'Step-by-Step Hiring Process'
    },
    {
      id: 'essential-questions',
      title: 'Essential Questions for Evaluation'
    },
    {
      id: 'maximizing-partnership',
      title: 'Maximizing Your Partnership'
    },
    {
      id: 'success-stories',
      title: 'Real-World Success Stories'
    },
    {
      id: 'common-pitfalls',
      title: 'Common Pitfalls to Avoid'
    },
    {
      id: 'conclusion',
      title: 'Making Your Final Decision'
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // On mobile, collapse the ToC after clicking a section
      if (isMobile) {
        setIsExpanded(false);
      }
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="bg-white border border-gray-200 rounded-lg shadow-sm table-of-contents">
      {/* Mobile Header with Toggle */}
      {isMobile ? (
        <>
          <button
            onClick={toggleExpanded}
            className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors rounded-t-lg"
            style={{ minHeight: '44px' }}
            aria-expanded={isExpanded}
            aria-controls="toc-content"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Table of Contents</h2>
              <p className="text-sm text-gray-600 mt-1">{sections.length} sections</p>
            </div>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          
          {/* Collapsible Content */}
          <div
            id="toc-content"
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-4 pt-0 max-h-80 overflow-y-auto">
              <ul className="space-y-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <button
                      onClick={() => handleSectionClick(section.id)}
                      className={`w-full text-left px-3 py-3 rounded-md text-sm transition-colors ${
                        activeSection === section.id
                          ? 'bg-dataops-100 text-dataops-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                      style={{ minHeight: '44px' }}
                    >
                      <span className="text-gray-400 mr-2">{index + 1}.</span>
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">💡 Quick Navigation</h3>
                <p className="text-sm text-gray-600">
                  Click any section above to jump directly to that content. Your progress is automatically saved.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Desktop Layout - Keep existing design */
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-dataops-100 text-dataops-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-gray-400 mr-2">{index + 1}.</span>
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">💡 Quick Navigation</h3>
            <p className="text-sm text-gray-600">
              Click any section above to jump directly to that content. Your progress is automatically saved.
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TableOfContents;
