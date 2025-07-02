
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizNavigationProps {
  currentSection: number;
  prevSection: () => void;
  nextSection: () => void;
  showValidationError?: boolean;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({ 
  currentSection, 
  prevSection, 
  nextSection,
  showValidationError = false
}) => {
  return (
    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevSection}
          disabled={currentSection === 1}
          className="border-gray-300"
        >
          Previous
        </Button>
        <Button 
          onClick={nextSection}
          className="bg-dataops-600 hover:bg-dataops-700 text-white"
        >
          {currentSection === 5 ? 'See Results' : 'Next'}
        </Button>
      </div>
      {showValidationError && (
        <div className="mt-3 text-center">
          <p className="text-red-600 text-sm font-medium">
            You must answer all questions before proceeding
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizNavigation;
