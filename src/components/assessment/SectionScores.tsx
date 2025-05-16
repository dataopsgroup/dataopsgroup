
import React from 'react';
import SectionScore from './SectionScore';

interface SectionScoresProps {
  scores: Record<string, number>;
  sectionTitles: string[];
}

const SectionScores: React.FC<SectionScoresProps> = ({ scores, sectionTitles }) => {
  return (
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
  );
};

export default SectionScores;
