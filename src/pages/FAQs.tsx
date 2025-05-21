
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import CTABanner from '@/components/CTABanner';
import FAQPageSchema from '@/components/seo/FAQPageSchema';

// Import refactored FAQ components
import FAQHero from '@/components/faqs/FAQHero';
import FAQCategory from '@/components/faqs/FAQCategory';
import FAQHelp from '@/components/faqs/FAQHelp';
import FAQSchema from '@/components/faqs/FAQSchema';

// Import FAQ data
import faqCategories, { hubspotFAQs, approachFAQs, dataQualityFAQs, hubspotModulesFAQs } from '@/data/faqs';
import { validateFAQData } from '@/utils/route-monitoring';

const FAQsPage = () => {
  // Validate FAQ data on component mount
  useEffect(() => {
    // Validate FAQ data structure to ensure it's working properly
    const isValid = validateFAQData(faqCategories);
    
    if (!isValid) {
      console.error('FAQ data validation failed. This could cause rendering issues.');
    }
  }, []);
  
  // Combine all FAQ items for schema markup
  const allFAQs = [...hubspotFAQs, ...approachFAQs, ...dataQualityFAQs, ...hubspotModulesFAQs];

  // Format FAQs for FAQPageSchema
  const formattedFAQs = allFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  // Define breadcrumbs for schema
  const breadcrumbs = [
    {
      name: 'Home',
      url: '/'
    }, 
    {
      name: 'FAQs',
      url: '/faqs'
    }
  ];

  return (
    <SemanticLayout>
      <FAQSchema 
        items={allFAQs}
        pageTitle="Frequently Asked Questions - DataOps Group"
        pageDescription="Find answers to common questions about HubSpot optimization, data quality, marketing ROI, sales and marketing alignment, and our approach to fixing messy HubSpot portals."
      />
      
      <FAQPageSchema items={formattedFAQs} url="/faqs" />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <section aria-label="FAQ Hero Section">
        <FAQHero />
      </section>
      
      <section className="py-16 px-4 bg-white" aria-label="Frequently Asked Questions">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-8">
            {faqCategories && Array.isArray(faqCategories) ? (
              faqCategories.map((category) => (
                <FAQCategory key={category.id} category={category} />
              ))
            ) : (
              <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">
                  Error loading FAQ content. Please try refreshing the page.
                </p>
              </div>
            )}
          </div>
          
          <aside aria-label="Additional Help" className="mt-12">
            <FAQHelp />
          </aside>
        </div>
      </section>
      
      <section aria-label="Call To Action">
        <CTABanner />
      </section>
    </SemanticLayout>
  );
};

export default FAQsPage;
