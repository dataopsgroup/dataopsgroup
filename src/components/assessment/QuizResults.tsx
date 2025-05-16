
import React from 'react';
import { Button } from '@/components/ui/button';
import ResultsOverview from './ResultsOverview';
import SectionScore from './SectionScore';
import PriorityRecommendation from './PriorityRecommendation';
import RescuePhase from './RescuePhase';

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
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Section Scores</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(scores).map(([section, score], index) => (
            <SectionScore
              key={section}
              title={sectionTitles[index]}
              score={score}
            />
          ))}
        </div>
      </div>
      
      {/* Priority Improvement Areas */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Your Priority Improvement Areas</h3>
        <div className="space-y-4">
          {priorities.map((rec) => (
            <PriorityRecommendation
              key={rec.section}
              index={rec.index}
              title={rec.title}
              text={rec.text}
            />
          ))}
        </div>
      </div>
      
      {/* 90-Day Implementation Rescue Plan */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">90-Day Implementation Rescue Plan</h3>
        <p className="text-gray-700 mb-6">Based on your assessment results, we recommend focusing on the following actions:</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <RescuePhase title="Days 1-30: Foundation" actions={rescuePlan.phase1} />
          <RescuePhase title="Days 31-60: Transformation" actions={rescuePlan.phase2} />
          <RescuePhase title="Days 61-90: Optimization" actions={rescuePlan.phase3} />
        </div>
      </div>
      
      {/* Next Steps */}
      <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-3 text-dataops-800">Get Your Personalized Implementation Rescue Plan</h3>
        <p className="text-gray-700 mb-6">
          While this assessment provides a solid starting point, a professional HubSpot implementation audit can identify nuanced issues and opportunities that may not be evident internally.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-dataops-600 hover:bg-dataops-700 text-white"
          >
            <a href="/contact">Request Free Consultation</a>
          </Button>
          <Button 
            variant="outline"
            onClick={onEmailResults}
            className="border-dataops-600 text-dataops-600 hover:bg-dataops-50"
          >
            Email My Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
