
import React from 'react';
import { SectionId } from '@/types/pillar-content';
import IntroductionSection from './sections/IntroductionSection';
import UnderstandingExpertsSection from './sections/UnderstandingExpertsSection';
import TypesExpertiseSection from './sections/TypesExpertiseSection';
import BeyondAgencySafetySection from './sections/BeyondAgencySafetySection';
import WhenNeedExpertSection from './sections/WhenNeedExpertSection';
import EvaluatingQualificationsSection from './sections/EvaluatingQualificationsSection';
import DefaultSection from './sections/DefaultSection';

interface ContentSectionProps {
  activeSection: SectionId;
}

const ContentSection: React.FC<ContentSectionProps> = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'introduction':
        return <IntroductionSection />;
      case 'understanding-experts':
        return <UnderstandingExpertsSection />;
      case 'types-expertise':
        return <TypesExpertiseSection />;
      case 'beyond-agency-safety':
        return <BeyondAgencySafetySection />;
      case 'when-need-expert':
        return <WhenNeedExpertSection />;
      case 'evaluating-qualifications':
        return <EvaluatingQualificationsSection />;
      case 'pricing-guide':
      case 'step-by-step-process':
      case 'essential-questions':
      case 'maximizing-partnership':
      case 'success-stories':
      case 'common-pitfalls':
      case 'conclusion':
        return <DefaultSection sectionId={activeSection} />;
      default:
        return <IntroductionSection />;
    }
  };

  return (
    <div className="w-full md:w-[64%] p-4">
      <div className="border border-blue-500">
        {renderSection()}
      </div>
    </div>
  );
};

export default ContentSection;
