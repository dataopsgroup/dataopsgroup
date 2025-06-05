
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import ArticleHeader from './pillar-content/ArticleHeader';
import TableOfContents from './pillar-content/TableOfContents';
import AuthorBio from './pillar-content/AuthorBio';
import RelatedContent from './pillar-content/RelatedContent';
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
              "name": "Geoff Tucker",
              "url": "https://www.dataopsgroup.com/about",
              "knowsAbout": ["HubSpot Implementation", "Marketing Operations", "Data Integration", "Revenue Operations"],
              "hasCredential": "HubSpot Certified Expert since 2012"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group",
              "url": "https://www.dataopsgroup.com"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.dataopsgroup.com/guides/hubspot-expert"
            },
            "expertise": "HubSpot Implementation and Marketing Operations",
            "audience": {
              "@type": "Audience",
              "audienceType": "Business leaders, marketing directors, operations managers"
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-dataops-600 flex items-center">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-400">Guides</span>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-gray-900">How to Hire a HubSpot Expert</span>
        </nav>

        <ArticleHeader title={title} />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Table of Contents - Left Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <TableOfContents 
                activeSection={activeSection}
              />
              <AuthorBio />
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
            
            {/* Related Content Section */}
            <RelatedContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarContent;
