
import React from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface AssessmentIntroProps {
  startQuiz: () => void;
}

const AssessmentIntro: React.FC<AssessmentIntroProps> = ({ startQuiz }) => {
  return (
    <div className="p-6 md:p-8">
      <div className="mb-6 relative md:flex">
        <div className="md:w-3/4 md:pr-8">
          <h2 className="text-2xl font-semibold mb-4 text-dataops-800">HubSpot Implementation Assessment Quiz</h2>
          <p className="text-gray-700 mb-4">
            Evaluate your current HubSpot implementation and identify key improvement opportunities with this interactive assessment.
          </p>
          
          <p className="font-medium mb-2">This assessment takes approximately 5-7 minutes to complete and will provide you with:</p>
          <ul className="space-y-2 mb-6 list-disc pl-5 text-gray-700">
            <li>Your overall HubSpot implementation health score</li>
            <li>Identification of your highest-priority improvement areas</li>
            <li>Specific recommended actions based on your results</li>
            <li>A framework for creating your implementation rescue plan</li>
          </ul>
        </div>
        
        <div className="md:w-1/4 md:min-w-[200px]">
          <Alert className="bg-blue-50 border-blue-200 h-full flex items-center">
            <AlertDescription className="text-blue-800 text-2xl font-semibold">
              According to Forrester Research, companies with optimized CRM implementations achieve 2.8x higher ROI than those with poorly executed systems.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <Button 
        onClick={startQuiz} 
        className="bg-dataops-600 hover:bg-dataops-700 text-white w-full md:w-auto"
      >
        Start Assessment
      </Button>
    </div>
  );
};

export default AssessmentIntro;
