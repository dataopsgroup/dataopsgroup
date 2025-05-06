
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import CTABanner from '@/components/CTABanner';

// Import refactored FAQ components
import FAQHero from '@/components/faqs/FAQHero';
import FAQCategory from '@/components/faqs/FAQCategory';
import FAQHelp from '@/components/faqs/FAQHelp';
import FAQSchema from '@/components/faqs/FAQSchema';

// Import FAQ data
import faqCategories, { hubspotFAQs, approachFAQs, dataQualityFAQs, hubspotModulesFAQs } from '@/data/faqs';

const FAQsPage = () => {
  // Combine all FAQ items for schema markup
  const allFAQs = [...hubspotFAQs, ...approachFAQs, ...dataQualityFAQs, ...hubspotModulesFAQs];

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
    <div className="min-h-screen flex flex-col">
      <FAQSchema 
        items={allFAQs}
        pageTitle="Frequently Asked Questions - DataOps Group"
        pageDescription="Find answers to common questions about HubSpot optimization, data quality, marketing ROI, sales and marketing alignment, and our approach to fixing messy HubSpot portals."
      />
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <Navbar />
      <main className="flex-1">
        <FAQHero />
        
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {faqCategories.map((category) => (
                <FAQCategory key={category.id} category={category} />
              ))}
            </div>
            
            <FAQHelp />
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default FAQsPage;
