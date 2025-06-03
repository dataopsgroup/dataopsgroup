
import React from 'react';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import faqCategories from '@/data/faqs';

const FAQHubSpotServices = () => {
  const category = faqCategories.find(cat => cat.id === 'hubspot-services');
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPageLayout
      category={category}
      title="HubSpot Services FAQ - DataOps Group"
      description="Find answers to common questions about HubSpot implementation, optimization, portal repair, and consulting services from DataOps Group."
      keywords="HubSpot services FAQ, HubSpot implementation, HubSpot optimization, HubSpot consultant, portal repair, data quality"
      canonicalPath="/faqs/hubspot-services"
    />
  );
};

export default FAQHubSpotServices;
