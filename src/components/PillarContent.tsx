
import React from 'react';

interface PillarContentProps {
  title: string;
  description?: string;
}

const PillarContent: React.FC<PillarContentProps> = ({ 
  title, 
  description
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      {description && <p className="text-lg mb-8">{description}</p>}
      <p>Placeholder for pillar content. This component will be rebuilt.</p>
    </div>
  );
};

export default PillarContent;
