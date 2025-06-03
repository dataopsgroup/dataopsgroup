
import React from 'react';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import faqCategories from '@/data/faqs';

const FAQHubSpotExperts = () => {
  const category = faqCategories.find(cat => cat.id === 'hubspot-experts');
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryPageLayout
      category={category}
      title="HubSpot Experts FAQ - DataOps Group"
      description="Get answers about hiring HubSpot experts, consultant qualifications, costs, and what to expect when working with HubSpot specialists."
      keywords="HubSpot expert FAQ, hiring HubSpot consultant, HubSpot specialist, consultant qualifications, HubSpot implementation expert"
      canonicalPath="/faqs/hubspot-experts"
    />
  );
};

export default FAQHubSpotExperts;
