
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuizNavigationProps {
  currentSection: number;
  prevSection: () => void;
  nextSection: () => void;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({ 
  currentSection, 
  prevSection, 
  nextSection 
}) => {
  return (
    <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between">
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
  );
};

export default QuizNavigation;
