
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import OutboundLinksSection from '@/components/faqs/OutboundLinksSection';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import { faqServicesLinks } from '@/utils/strategic-links';
import faqCategories from '@/data/faqs';

const FAQServicesPage = () => {
  const category = faqCategories.find(cat => cat.id === 'hubspot-services');
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'FAQs', url: '/faqs' },
    { name: category.title, url: `/faqs/services` }
  ];

  return (
    <SemanticLayout>
      <MetaHead
        title={`${category.title} - Frequently Asked Questions | DataOps Group`}
        description="Expert answers about HubSpot implementation services, portal optimization, data migration, and consulting. Learn about costs, timelines, and what to expect from professional HubSpot services."
        canonicalPath="/faqs/services"
        keywords="HubSpot services FAQ, HubSpot implementation cost, portal optimization questions, HubSpot consulting services, data migration FAQ, HubSpot setup questions, professional services pricing"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <FAQPageSchema 
        items={category.items.map(q => ({ question: q.question, answer: q.answer }))}
        url="/faqs/services"
        title={`${category.title} - FAQ`}
        description="Expert answers about HubSpot implementation services, portal optimization, data migration, and consulting."
      />
      
      <CategoryPageLayout 
        category={category}
        title={`${category.title} FAQ | DataOps Group`}
        description="Expert answers about HubSpot implementation services, portal optimization, data migration, and consulting. Learn about costs, timelines, and what to expect from professional HubSpot services."
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
    </SemanticLayout>
  );
};

export default FAQServicesPage;
