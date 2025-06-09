
import React from 'react';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import faqCategories from '@/data/faqs';

const FAQHubSpotModules = () => {
  const category = faqCategories.find(cat => cat.id === 'hubspot-modules');
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPageLayout
      category={category}
      title="HubSpot CMS Modules FAQ | DataOps Group"
      description="Technical FAQ about HubSpot CMS modules, custom development, theme creation, and website optimization. Expert answers for developers and marketing teams."
      keywords="HubSpot modules FAQ, CMS development questions, custom modules, HubSpot themes, website development, CMS Hub questions, module creation, HubSpot CMS technical FAQ"
      canonicalPath="/faqs/hubspot-modules"
      robots="index, follow"
    />
  );
};

export default FAQHubSpotModules;
