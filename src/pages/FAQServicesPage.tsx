
import React from 'react';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import OutboundLinksSection from '@/components/faqs/OutboundLinksSection';
import { faqServicesLinks } from '@/utils/strategic-links';
import faqCategories from '@/data/faqs';

const FAQServicesPage = () => {
  const category = faqCategories.find(cat => cat.id === 'hubspot-services');
  
  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <CategoryPageLayout
        category={category}
        title={`${category.title} FAQ | DataOps Group`}
        description="Expert answers about HubSpot implementation costs, portal optimization, data migration, and consulting timelines."
        keywords="HubSpot services FAQ, HubSpot implementation cost, portal optimization questions, HubSpot consulting services, data migration FAQ, HubSpot setup questions, professional services pricing"
        canonicalPath="/faqs/services"
      />
      
      {/* Add strategic outbound links section outside CategoryPageLayout */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <OutboundLinksSection 
            links={faqServicesLinks}
            title="Related Services & Resources"
          />
        </div>
      </section>
    </>
  );
};

export default FAQServicesPage;
