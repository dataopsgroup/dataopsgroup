
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
      title="HubSpot Services FAQ - Implementation & Optimization | DataOps Group"
      description="Expert answers about HubSpot implementation services, portal optimization, data migration, and consulting. Learn about costs, timelines, and what to expect from professional HubSpot services."
      keywords="HubSpot services FAQ, HubSpot implementation cost, portal optimization questions, HubSpot consulting services, data migration FAQ, HubSpot setup questions, professional services pricing"
      canonicalPath="/faqs/hubspot-services"
    />
  );
};

export default FAQHubSpotServices;
