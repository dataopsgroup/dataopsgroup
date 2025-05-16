
import React from 'react';
import ResultsOverview from './ResultsOverview';
import SectionScores from './SectionScores';
import PriorityImprovements from './PriorityImprovements';
import ImplementationRescuePlan from './ImplementationRescuePlan';
import ResultsNextSteps from './ResultsNextSteps';

interface PriorityRec {
  index: number;
  section: string;
  name: string;
  title: string;
  text: string;
}

interface RescuePlan {
  phase1: string[];
  phase2: string[];
  phase3: string[];
}

interface QuizResultsProps {
  overallScore: number;
  scores: Record<string, number>;
  sectionTitles: string[];
  priorities: PriorityRec[];
  rescuePlan: RescuePlan;
  onEmailResults: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  overallScore,
  scores,
  sectionTitles,
  priorities,
  rescuePlan,
  onEmailResults
}) => {
  // Calculate score label based on overall score
  const getScoreLabel = () => {
    if (overallScore < 50) return 'Underperforming';
    if (overallScore < 85) return 'Developing';
    if (overallScore < 105) return 'Effective';
    return 'Optimized';
  };

  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-dataops-800">Your HubSpot Implementation Assessment Results</h2>
      
      {/* Overall Score */}
      <ResultsOverview 
        overallScore={overallScore}
        scoreLabel={getScoreLabel()}
      />
      
      {/* Section Scores */}
      <SectionScores 
        scores={scores}
        sectionTitles={sectionTitles}
      />
      
      {/* Priority Improvement Areas */}
      <PriorityImprovements priorities={priorities} />
      
      {/* 90-Day Implementation Rescue Plan */}
      <ImplementationRescuePlan rescuePlan={rescuePlan} />
      
      {/* Next Steps */}
      <ResultsNextSteps onEmailResults={onEmailResults} />
    </div>
  );
};

export default QuizResults;
