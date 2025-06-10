
import React from 'react';
import SectionScore from './SectionScore';

interface SectionScoresProps {
  scores: Record<string, number>;
  sectionTitles: string[];
}

const SectionScores: React.FC<SectionScoresProps> = ({ scores, sectionTitles }) => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-3xl font-bold text-gray-900">Section Performance</h3>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Detailed breakdown of your HubSpot implementation across key areas</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
