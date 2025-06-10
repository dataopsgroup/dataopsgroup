
import React from 'react';
import { Button } from '@/components/ui/button';

interface ResultsNextStepsProps {
  onEmailResults: () => void;
}

const ResultsNextSteps: React.FC<ResultsNextStepsProps> = ({ onEmailResults }) => {
  return (
    <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-3 text-dataops-800">Get Your Personalized HubSpot Recovery Strategy</h3>
      <p className="text-gray-700 mb-6">
        This assessment provides valuable insights, but a comprehensive HubSpot audit can uncover deeper inefficiencies and missed opportunities. Our specialists have rescued dozens of underperforming implementations, turning them into competitive advantages that drive measurable growth.
      </p>
      
      <div className="flex justify-center">
        <Button 
          asChild
          className="bg-dataops-600 hover:bg-dataops-700 text-white"
        >
          <a href="/contact">Book Your Recovery Consultation</a>
        </Button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3">
          See how we've transformed similar implementations:
        </p>
        <a href="/case-studies" className="text-dataops-600 hover:text-dataops-700 font-medium text-sm">
          View Transformation Stories →
        </a>
      </div>
    </div>
  );
};

export default ResultsNextSteps;
