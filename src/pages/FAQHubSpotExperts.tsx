
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
      title="HubSpot Expert Hiring FAQ - Consultant Selection Guide | DataOps Group"
      description="Complete guide to hiring HubSpot experts and consultants. Learn about qualifications, costs, integration experience, and red flags to avoid when selecting HubSpot specialists."
      keywords="hire HubSpot expert FAQ, HubSpot consultant selection, expert qualifications, HubSpot specialist cost, consultant vs expert, integration experience, HubSpot certification requirements"
      canonicalPath="/faqs/hubspot-experts"
    />
  );
};

export default FAQHubSpotExperts;
