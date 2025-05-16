
import React from 'react';
import PriorityRecommendation from './PriorityRecommendation';

interface PriorityRec {
  index: number;
  section: string;
  name: string;
  title: string;
  text: string;
}

interface PriorityImprovementsProps {
  priorities: PriorityRec[];
}

const PriorityImprovements: React.FC<PriorityImprovementsProps> = ({ priorities }) => {
  return (
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
  );
};

export default PriorityImprovements;
