
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import PillarContent from '@/components/PillarContent';
import { setupInteractionBasedLoading } from '@/lib/performance/interaction';
import pillarContentData from '@/data/pillar-content/hubspot-expert-guide.json';

const PillarContentPage = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    setupInteractionBasedLoading();
  }, []);

  // For now, we only have one pillar content piece
  // In the future, this could be expanded to handle multiple pieces
  if (slug !== 'hubspot-expert-guide') {
    return (
      <SemanticLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
          <p className="text-gray-600">The requested content could not be found.</p>
        </div>
      </SemanticLayout>
    );
  }

  return (
    <SemanticLayout>
      <PillarContent 
        title={pillarContentData.title}
        description={pillarContentData.description}
      />
    </SemanticLayout>
  );
};

export default PillarContentPage;
