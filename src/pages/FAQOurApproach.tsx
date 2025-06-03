
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
      title="Our Approach FAQ - DataOps Group"
      description="Understand DataOps Group's methodology, implementation process, and statistical process control approach to HubSpot optimization."
      keywords="DataOps methodology FAQ, HubSpot implementation approach, statistical process control, data-driven decisions"
      canonicalPath="/faqs/our-approach"
    />
  );
};

export default FAQOurApproach;
