
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
        return <DefaultSection sectionId="types-expertise" />;
      case 'beyond-agency-safety':
        return <DefaultSection sectionId="beyond-agency-safety" />;
      case 'when-need-expert':
        return <DefaultSection sectionId="when-need-expert" />;
      case 'evaluating-qualifications':
        return <DefaultSection sectionId="evaluating-qualifications" />;
      case 'pricing-guide':
        return <DefaultSection sectionId="pricing-guide" />;
      case 'step-by-step-process':
        return <DefaultSection sectionId="step-by-step-process" />;
      case 'essential-questions':
        return <DefaultSection sectionId="essential-questions" />;
      case 'maximizing-partnership':
        return <DefaultSection sectionId="maximizing-partnership" />;
      case 'success-stories':
        return <DefaultSection sectionId="success-stories" />;
      case 'common-pitfalls':
        return <DefaultSection sectionId="common-pitfalls" />;
      case 'conclusion':
        return <DefaultSection sectionId="conclusion" />;
      default:
        return <IntroductionSection />;
    }
  };

  return (
    <div className="w-full">
      <div className="pillar-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default ContentSection;
