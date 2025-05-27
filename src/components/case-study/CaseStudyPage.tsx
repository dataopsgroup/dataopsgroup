
import React from 'react';
import { BlogPost } from '@/types/blog';
import ExecutiveSummaryHero from './ExecutiveSummaryHero';
import BeforeAfterComparison from './BeforeAfterComparison';
import ResultsTimeline from './ResultsTimeline';
import PEInsightsGrid from './PEInsightsGrid';
import CTABanner from '@/components/CTABanner';
import { useCaseStudyData } from '@/hooks/useCaseStudyData';

interface CaseStudyPageProps {
  post: BlogPost;
}

const CaseStudyPage = ({ post }: CaseStudyPageProps) => {
  const caseData = useCaseStudyData(post.id);

  if (!caseData) {
    return <div>Case study data not found</div>;
  }

  return (
    <div className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <ExecutiveSummaryHero
          title={caseData.title}
          industry={caseData.industry}
          revenue={caseData.revenue}
          timeline={caseData.timeline}
          metrics={caseData.metrics}
        />
        
        <BeforeAfterComparison
          problems={caseData.problems}
          solutions={caseData.solutions}
        />
        
        <ResultsTimeline timeline={caseData.resultsTimeline} />
        
        <PEInsightsGrid />
        
        <CTABanner />
      </div>
    </div>
  );
};

export default CaseStudyPage;
