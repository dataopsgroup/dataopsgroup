
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CaseStudyData } from '@/types/caseStudy';
import ExecutiveSummaryHero from './ExecutiveSummaryHero';
import BeforeAfterComparison from './BeforeAfterComparison';
import ResultsTimeline from './ResultsTimeline';
import PEInsightsGrid from './PEInsightsGrid';
import CTABanner from '@/components/CTABanner';

interface CaseStudyDetailContentProps {
  caseData: CaseStudyData;
}

const CaseStudyDetailContent = ({ caseData }: CaseStudyDetailContentProps) => {
  return (
    <main className="flex-1">
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button 
            variant="outline" 
            className="bg-gray-700 text-white hover:bg-gray-800 hover:text-orange-500 transition-colors" 
            asChild
          >
            <Link to="/case-studies">Back to Case Studies</Link>
          </Button>
        </div>
      </div>
      
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
    </main>
  );
};

export default CaseStudyDetailContent;
