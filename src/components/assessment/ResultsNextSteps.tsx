
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResultsNextStepsProps {
  onEmailResults: () => void;
}

const ResultsNextSteps: React.FC<ResultsNextStepsProps> = ({ onEmailResults }) => {
  return (
    <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-3 text-dataops-800">Get Your Personalized Implementation Rescue Plan</h3>
      <p className="text-gray-700 mb-6">
        While this assessment provides a solid starting point, a professional HubSpot implementation audit can identify nuanced issues and opportunities that may not be evident internally. Our team has helped dozens of companies recover from failed implementations and turn them into profit drivers.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          asChild
          className="bg-dataops-600 hover:bg-dataops-700 text-white"
        >
          <a href="/contact">Schedule Your Rescue Call</a>
        </Button>
        <Button 
          variant="outline"
          onClick={onEmailResults}
          className="border-dataops-600 text-dataops-600 hover:bg-dataops-50"
        >
          Email My Results
        </Button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">
          Want to see how we've helped similar companies? Check out our detailed case studies:
        </p>
        <a href="/case-studies" className="text-dataops-600 hover:text-dataops-700 font-medium text-sm">
          View Success Stories →
        </a>
      </div>
    </div>
  );
};

export default ResultsNextSteps;
