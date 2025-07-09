import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import PEPortfolioCaseStudiesSEO from '@/components/pillar-content/pe-portfolio-case-studies/PEPortfolioCaseStudiesSEO';
import PEPortfolioCaseStudiesLayout from '@/components/pillar-content/pe-portfolio-case-studies/PEPortfolioCaseStudiesLayout';

const PEPortfolioValueCreationCaseStudiesPage = () => {
  return (
    <SemanticLayout>
      <PEPortfolioCaseStudiesSEO />
      <PEPortfolioCaseStudiesLayout />
    </SemanticLayout>
  );
};

export default PEPortfolioValueCreationCaseStudiesPage;