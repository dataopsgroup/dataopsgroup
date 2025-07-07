
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CompleteHubSpotGuideSEO from '@/components/pillar-content/complete-hubspot-guide/CompleteHubSpotGuideSEO';
import CompleteHubSpotGuideLayout from '@/components/pillar-content/complete-hubspot-guide/CompleteHubSpotGuideLayout';

const CompleteHubSpotGuidePage = () => {
  return (
    <SemanticLayout>
      <CompleteHubSpotGuideSEO />
      <CompleteHubSpotGuideLayout />
    </SemanticLayout>
  );
};

export default CompleteHubSpotGuidePage;
