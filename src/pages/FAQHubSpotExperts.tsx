
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
      title="HubSpot Expert Hiring FAQ | DataOps Group"
      description="Guide to hiring HubSpot experts: qualifications, costs, integration experience, and red flags to avoid."
      keywords="hire HubSpot expert FAQ, HubSpot consultant selection, expert qualifications, HubSpot specialist cost, consultant vs expert, integration experience, HubSpot certification requirements"
      canonicalPath="/faqs/experts"
      robots="index, follow"
    />
  );
};

export default FAQHubSpotExperts;
