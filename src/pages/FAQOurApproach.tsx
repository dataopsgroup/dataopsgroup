
import React from 'react';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import faqCategories from '@/data/faqs';

const FAQOurApproach = () => {
  const category = faqCategories.find(cat => cat.id === 'our-approach');
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPageLayout
      category={category}
      title="DataOps Methodology FAQ | DataOps Group"
      description="Learn about DataOps Group's proven methodology for HubSpot implementations using statistical process control."
      keywords="DataOps methodology FAQ, HubSpot implementation approach, statistical process control, data-driven methodology, systematic optimization, implementation process, consulting methodology"
      canonicalPath="/faqs/approach"
      robots="index, follow"
    />
  );
};

export default FAQOurApproach;
