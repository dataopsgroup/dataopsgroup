
import React from 'react';
import { SectionId } from '@/types/pillar-content';
import IntroductionSection from './sections/IntroductionSection';
import UnderstandingExpertsSection from './sections/UnderstandingExpertsSection';
import TypesExpertiseSection from './sections/TypesExpertiseSection';
import BeyondAgencySafetySection from './sections/BeyondAgencySafetySection';
import WhenNeedExpertSection from './sections/WhenNeedExpertSection';
import EvaluatingQualificationsSection from './sections/EvaluatingQualificationsSection';
import PricingGuideSection from './sections/PricingGuideSection';
import StepByStepProcessSection from './sections/StepByStepProcessSection';
import EssentialQuestionsSection from './sections/EssentialQuestionsSection';
import MaximizingPartnershipSection from './sections/MaximizingPartnershipSection';
import SuccessStoriesSection from './sections/SuccessStoriesSection';
import CommonPitfallsSection from './sections/CommonPitfallsSection';
import ConclusionSection from './sections/ConclusionSection';

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
        return <PricingGuideSection />;
      case 'step-by-step-process':
        return <StepByStepProcessSection />;
      case 'essential-questions':
        return <EssentialQuestionsSection />;
      case 'maximizing-partnership':
        return <MaximizingPartnershipSection />;
      case 'success-stories':
        return <SuccessStoriesSection />;
      case 'common-pitfalls':
        return <CommonPitfallsSection />;
      case 'conclusion':
        return <ConclusionSection />;
      default:
        return <IntroductionSection />;
    }
  };

  return (
    <div className="w-full md:w-[64%] p-4">
      <div className="p-4">
        {renderSection()}
      </div>
    </div>
  );
};

export default ContentSection;
