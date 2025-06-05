
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ArticleHeader from './pillar-content/ArticleHeader';
import TableOfContents from './pillar-content/TableOfContents';
import useActiveSection from '@/hooks/useActiveSection';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';

// Import all section components
import IntroductionSection from './pillar-content/sections/IntroductionSection';
import UnderstandingExpertsSection from './pillar-content/sections/UnderstandingExpertsSection';
import TypesExpertiseSection from './pillar-content/sections/TypesExpertiseSection';
import BeyondAgencySafetySection from './pillar-content/sections/BeyondAgencySafetySection';
import WhenNeedExpertSection from './pillar-content/sections/WhenNeedExpertSection';
import EvaluatingQualificationsSection from './pillar-content/sections/EvaluatingQualificationsSection';
import PricingGuideSection from './pillar-content/sections/PricingGuideSection';
import StepByStepProcessSection from './pillar-content/sections/StepByStepProcessSection';
import EssentialQuestionsSection from './pillar-content/sections/EssentialQuestionsSection';
import MaximizingPartnershipSection from './pillar-content/sections/MaximizingPartnershipSection';
import SuccessStoriesSection from './pillar-content/sections/SuccessStoriesSection';
import CommonPitfallsSection from './pillar-content/sections/CommonPitfallsSection';
import ConclusionSection from './pillar-content/sections/ConclusionSection';

interface PillarContentProps {
  title: string;
  description?: string;
}

const PillarContent: React.FC<PillarContentProps> = ({ 
  title, 
  description
}) => {
  const sectionIds = [
    'introduction',
    'understanding-experts',
    'types-expertise',
    'beyond-agency-safety',
    'when-need-expert',
    'evaluating-qualifications',
    'pricing-guide',
    'step-by-step-process',
    'essential-questions',
    'maximizing-partnership',
    'success-stories',
    'common-pitfalls',
    'conclusion'
  ];

  const activeSection = useActiveSection(sectionIds);
  useScrollToAnchor();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "author": {
              "@type": "Person",
              "name": "Geoff Tucker"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.dataopsgroup.com/guides/hubspot-expert"
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <ArticleHeader title={title} />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Table of Contents - Left Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <TableOfContents 
                activeSection={activeSection}
              />
            </div>
          </div>
          
          {/* Main Content - All Sections */}
          <div className="lg:w-2/3">
            <div className="pillar-content">
              <IntroductionSection />
              <UnderstandingExpertsSection />
              <TypesExpertiseSection />
              <BeyondAgencySafetySection />
              <WhenNeedExpertSection />
              <EvaluatingQualificationsSection />
              <PricingGuideSection />
              <StepByStepProcessSection />
              <EssentialQuestionsSection />
              <MaximizingPartnershipSection />
              <SuccessStoriesSection />
              <CommonPitfallsSection />
              <ConclusionSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarContent;
