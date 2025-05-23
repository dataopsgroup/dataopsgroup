
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

// Import FAQ data
import faqCategories, { 
  hubspotFAQs, 
  approachFAQs, 
  dataQualityFAQs, 
  hubspotModulesFAQs,
  hubspotExpertFAQs 
} from '@/data/faqs';
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
  const allFAQs = [
    ...hubspotFAQs, 
    ...approachFAQs, 
    ...dataQualityFAQs, 
    ...hubspotModulesFAQs,
    ...hubspotExpertFAQs
  ];

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
      <Helmet>
        <title>HubSpot Consulting FAQs | Common Questions Answered</title>
        <meta name="description" content="Get answers to common HubSpot consulting questions. Pricing, timelines, process, and what to expect when working with DataOps Group. Start here." />
        <meta name="keywords" content="HubSpot FAQs, HubSpot consultant, data quality, marketing ROI, sales and marketing alignment, HubSpot optimization, statistical process control, data cleaning, reporting dashboards, HubSpot experts" />
        <link rel="canonical" href="https://dataopsgroup.com/faqs" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot Consulting FAQs | Common Questions Answered" />
        <meta property="og:description" content="Get answers to common HubSpot consulting questions. Pricing, timelines, process, and what to expect when working with DataOps Group. Start here." />
        <meta property="og:url" content="https://dataopsgroup.com/faqs" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="HubSpot Consulting FAQs | Common Questions Answered" />
        <meta name="twitter:description" content="Get answers to common HubSpot consulting questions. Pricing, timelines, process, and what to expect when working with DataOps Group. Start here." />
      </Helmet>
      
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
