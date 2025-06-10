
import React from 'react';
import SectionScore from './SectionScore';
import { BarChart3 } from 'lucide-react';

interface SectionScoresProps {
  scores: Record<string, number>;
  sectionTitles: string[];
}

const SectionScores: React.FC<SectionScoresProps> = ({ scores, sectionTitles }) => {
  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <BarChart3 className="h-6 w-6 text-dataops-600 mr-2" />
          <h3 className="text-2xl font-bold text-gray-900">Section Performance</h3>
        </div>
        <p className="text-gray-600">Detailed breakdown of your HubSpot implementation across key areas</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(scores).map(([section, score], index) => (
          <SectionScore
            key={section}
            title={sectionTitles[index]}
            score={score}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionScores;
