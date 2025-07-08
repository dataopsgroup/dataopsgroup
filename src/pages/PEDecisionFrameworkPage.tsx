import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import PEDecisionFrameworkSEO from '@/components/pillar-content/pe-decision-framework/PEDecisionFrameworkSEO';
import PEDecisionFrameworkLayout from '@/components/pillar-content/pe-decision-framework/PEDecisionFrameworkLayout';

const PEDecisionFrameworkPage = () => {
  return (
    <SemanticLayout>
      <PEDecisionFrameworkSEO />
      <div className="-mt-[109px]">
        <PEDecisionFrameworkLayout />
      </div>
    </SemanticLayout>
  );
};

export default PEDecisionFrameworkPage;