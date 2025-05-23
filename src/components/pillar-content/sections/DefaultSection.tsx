
import React from 'react';
import { SectionId } from '@/types/pillar-content';

interface DefaultSectionProps {
  sectionId: SectionId;
}

const DefaultSection: React.FC<DefaultSectionProps> = ({ sectionId }) => {
  // Get title based on section ID
  const getTitleFromSectionId = (id: SectionId): string => {
    switch (id) {
      case 'beyond-agency-safety': 
        return 'Beyond the Agency Safety Net: Choosing Results Over Size';
      case 'when-need-expert': 
        return 'When Your Business Needs a HubSpot Expert';
      case 'evaluating-qualifications': 
        return 'Evaluating HubSpot Expert Qualifications and Integration Experience';
      case 'pricing-guide': 
        return 'Complete Pricing Guide for HubSpot Experts and Implementation';
      case 'step-by-step-process': 
        return 'Step-by-Step Process to Find and Hire the Perfect HubSpot Expert';
      case 'essential-questions': 
        return 'Essential Questions for Evaluating HubSpot Experts';
      case 'maximizing-partnership': 
        return 'Maximizing Your HubSpot Expert Partnership';
      case 'success-stories': 
        return 'Real-World Success Stories: Integration-Focused Implementations';
      case 'common-pitfalls': 
        return 'Common Pitfalls When Hiring HubSpot Experts';
      case 'conclusion': 
        return 'Conclusion: Making Your Final Decision';
      default:
        return 'Section';
    }
  };

  const title = getTitleFromSectionId(sectionId);

  return (
    <section id={sectionId} className="p-4" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-4">This section will provide information about {title.toLowerCase()}.</p>
    </section>
  );
};

export default DefaultSection;
