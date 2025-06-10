
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import CategoryPageLayout from '@/components/faqs/CategoryPageLayout';
import OutboundLinksSection from '@/components/faqs/OutboundLinksSection';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import { faqServicesLinks } from '@/utils/strategic-links';
import { faqData } from '@/data/faq-data';

const FAQServicesPage = () => {
  const category = faqData.categories.find(cat => cat.id === 'services');
  
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
        description={category.description}
        canonicalPath="/faqs/services"
        keywords="HubSpot services, marketing operations, data operations, consulting, implementation"
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <FAQPageSchema 
        items={category.questions.map(q => ({ question: q.question, answer: q.answer }))}
        url="/faqs/services"
        title={`${category.title} - FAQ`}
        description={category.description}
      />
      
      <CategoryPageLayout 
        category={category}
        breadcrumbItems={breadcrumbItems}
      >
        {/* Add strategic outbound links section */}
        <OutboundLinksSection 
          links={faqServicesLinks}
          title="Related Services & Resources"
          className="mt-8"
        />
      </CategoryPageLayout>
    </SemanticLayout>
  );
};

export default FAQServicesPage;
