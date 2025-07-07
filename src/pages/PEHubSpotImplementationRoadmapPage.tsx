import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import PEImplementationRoadmapSEO from '@/components/pillar-content/pe-implementation-roadmap/PEImplementationRoadmapSEO';
import PEImplementationRoadmapLayout from '@/components/pillar-content/pe-implementation-roadmap/PEImplementationRoadmapLayout';

const PEHubSpotImplementationRoadmapPage = () => {
  return (
    <SemanticLayout>
      <PEImplementationRoadmapSEO />
      <div className="-mt-[109px]">
        <PEImplementationRoadmapLayout />
      </div>
    </SemanticLayout>
  );
};

export default PEHubSpotImplementationRoadmapPage;