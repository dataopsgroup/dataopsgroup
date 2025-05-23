
import React from 'react';
import { SectionId } from '@/types/pillar-content';

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
  return (
    <div className="p-4 md:sticky md:top-24">
      <div className="table-of-contents-container">
        <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
        <nav className="table-of-contents">
          <ul>
            <li>
              <button 
                onClick={() => handleSectionClick('introduction')} 
                className={activeSection === 'introduction' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Introduction
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('understanding-experts')} 
                className={activeSection === 'understanding-experts' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Understanding HubSpot Experts vs Consultants vs Agencies
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('types-expertise')} 
                className={activeSection === 'types-expertise' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Types of HubSpot Expertise and Specializations
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('beyond-agency-safety')} 
                className={activeSection === 'beyond-agency-safety' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Beyond the Agency Safety Net: Choosing Results Over Size
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('when-need-expert')} 
                className={activeSection === 'when-need-expert' ? 'active w-full text-left' : 'w-full text-left'}
              >
                When Your Business Needs a HubSpot Expert
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('evaluating-qualifications')} 
                className={activeSection === 'evaluating-qualifications' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Evaluating HubSpot Expert Qualifications and Integration Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('pricing-guide')} 
                className={activeSection === 'pricing-guide' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Complete Pricing Guide for HubSpot Experts and Implementation
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('step-by-step-process')} 
                className={activeSection === 'step-by-step-process' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Step-by-Step Process to Find and Hire the Perfect HubSpot Expert
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('essential-questions')} 
                className={activeSection === 'essential-questions' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Essential Questions for Evaluating HubSpot Experts
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('maximizing-partnership')} 
                className={activeSection === 'maximizing-partnership' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Maximizing Your HubSpot Expert Partnership
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('success-stories')} 
                className={activeSection === 'success-stories' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Real-World Success Stories: Integration-Focused Implementations
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('common-pitfalls')} 
                className={activeSection === 'common-pitfalls' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Common Pitfalls When Hiring HubSpot Experts
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSectionClick('conclusion')} 
                className={activeSection === 'conclusion' ? 'active w-full text-left' : 'w-full text-left'}
              >
                Conclusion: Making Your Final Decision
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;
