import React from 'react';
import { SectionId } from '@/types/pillar-content';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface TableOfContentsProps {
  sectionIds: SectionId[];
  activeSection: string;
  handleSectionClick: (sectionId: SectionId) => void;
}
const TableOfContents: React.FC<TableOfContentsProps> = ({
  sectionIds,
  activeSection,
  handleSectionClick
}) => {
  return <div className="p-4 md:sticky md:top-24">
      <div className="table-of-contents-container mr-7">
        <h2 className="text-xl font-semibold px-3 py-2 my-2">Table of Contents</h2>
        <nav className="table-of-contents">
          <ul className="space-y-0">
            <li>
              <button onClick={() => handleSectionClick('introduction')} className={`${activeSection === 'introduction' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Introduction
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('understanding-experts')} className={`${activeSection === 'understanding-experts' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Understanding HubSpot Experts vs Consultants vs Agencies
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('types-expertise')} className={`${activeSection === 'types-expertise' ? 'active' : ''} w-full text-left block py-2 px-3 pr-8`}>
                Types of HubSpot Expertise and Specializations
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('beyond-agency-safety')} className={`${activeSection === 'beyond-agency-safety' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Beyond the Agency Safety Net: Choosing Results Over Size
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('when-need-expert')} className={`${activeSection === 'when-need-expert' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                When Your Business Needs a HubSpot Expert
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('evaluating-qualifications')} className={`${activeSection === 'evaluating-qualifications' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Evaluating HubSpot Expert Qualifications and Integration Experience
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('pricing-guide')} className={`${activeSection === 'pricing-guide' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Complete Pricing Guide for HubSpot Experts and Implementation
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('step-by-step-process')} className={`${activeSection === 'step-by-step-process' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Step-by-Step Process to Find and Hire the Perfect HubSpot Expert
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('essential-questions')} className={`${activeSection === 'essential-questions' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Essential Questions for Evaluating HubSpot Experts
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('maximizing-partnership')} className={`${activeSection === 'maximizing-partnership' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Maximizing Your HubSpot Expert Partnership
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('success-stories')} className={`${activeSection === 'success-stories' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Real-World Success Stories: Integration-Focused Implementations
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('common-pitfalls')} className={`${activeSection === 'common-pitfalls' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Common Pitfalls When Hiring HubSpot Experts
              </button>
            </li>
            <li>
              <button onClick={() => handleSectionClick('conclusion')} className={`${activeSection === 'conclusion' ? 'active' : ''} w-full text-left block py-2 px-3 pr-4`}>
                Conclusion: Making Your Final Decision
              </button>
            </li>
            {/* Download Interview Guide CTA Button */}
            <li className="mt-4 border-t border-gray-200 pt-4 px-3">
              <a href="https://drive.google.com/file/d/1ApJENdggcFYSirQDzmnV1GEtjAWKL4R5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="default" className="download-button w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center py-[2px]">
                  <FileDown size={18} className="mr-2" />
                  Download the Interview Guide
                </Button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>;
};
export default TableOfContents;