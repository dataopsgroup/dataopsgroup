
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
      title="HubSpot Modules FAQ - DataOps Group"
      description="Get answers about HubSpot modules, custom development, FAQ implementation, and best practices for HubSpot CMS development."
      keywords="HubSpot modules FAQ, HubSpot CMS development, custom modules, FAQ implementation, HubSpot development"
      canonicalPath="/faqs/hubspot-modules"
    />
  );
};

export default FAQHubSpotModules;
