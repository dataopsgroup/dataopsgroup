
import React from 'react';

interface AssessmentProgressProps {
  currentSection: number;
  totalSections: number;
}

const AssessmentProgress: React.FC<AssessmentProgressProps> = ({ currentSection, totalSections }) => {
  const progress = ((currentSection - 1) / totalSections) * 100;
  
  return (
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <div className="mb-2">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-dataops-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="text-right text-sm text-gray-600">
        Section {currentSection} of {totalSections}
      </div>
    </div>
  );
};

export default AssessmentProgress;
