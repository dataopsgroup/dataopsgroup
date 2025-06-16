
import React, { useEffect } from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import CTABanner from '@/components/CTABanner';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import MetaHead from '@/components/seo/MetaHead';

// Import refactored FAQ components
import FAQHero from '@/components/faqs/FAQHero';
import FAQCategory from '@/components/faqs/FAQCategory';
import FAQHelp from '@/components/faqs/FAQHelp';
import FAQTableOfContents from '@/components/faqs/FAQTableOfContents';
import FAQSearch from '@/components/faqs/FAQSearch';
import FAQSearchResults from '@/components/faqs/FAQSearchResults';

// Import FAQ data
import faqCategories, { 
  hubspotFAQs, 
  approachFAQs, 
  dataQualityFAQs, 
  hubspotModulesFAQs,
  hubspotExpertFAQs 
} from '@/data/faqs';
import { validateFAQData } from '@/utils/route-monitoring';
import { useFAQSearch } from '@/hooks/useFAQSearch';

const FAQsPage = () => {
  // Validate FAQ data on component mount
  useEffect(() => {
    // Validate FAQ data structure to ensure it's working properly
    const isValid = validateFAQData(faqCategories);
    
    if (!isValid) {
      console.error('FAQ data validation failed. This could cause rendering issues.');
    }
  }, []);

  // Initialize search functionality
  const {
    searchTerm,
    selectedCategory,
    isSearchActive,
    searchResults,
    handleSearch,
    clearSearch,
    handleCategoryFilter
  } = useFAQSearch(faqCategories);
  
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
      <MetaHead
        title="HubSpot FAQ - Expert Answers to Common Questions"
        description="Expert answers to HubSpot questions from certified consultants. Implementation, data quality, expert hiring, and best practices covered."
        keywords="HubSpot FAQ, HubSpot questions, HubSpot implementation FAQ, data quality questions, HubSpot expert hiring, marketing operations FAQ, RevOps questions, HubSpot consultant answers"
        canonicalPath="/faqs"
        ogType="website"
        ogTitle="HubSpot FAQ - Expert Answers from Certified Consultants"
        ogDescription="Comprehensive answers to common HubSpot questions covering implementation, data quality, expert hiring, and optimization strategies."
        author="DataOps Group"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "HubSpot FAQ - Expert Answers to Common Questions",
          "description": "Get expert answers to your HubSpot questions. Comprehensive FAQ covering implementation, data quality, expert hiring, and best practices from certified consultants.",
          "mainEntity": formattedFAQs.slice(0, 10).map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      
      <FAQPageSchema items={formattedFAQs} url="/faqs" />
      <BreadcrumbSchema items={breadcrumbs} />
      
      <section aria-label="FAQ Hero Section">
        <FAQHero />
      </section>
      
      <section className="py-16 px-4 bg-white" aria-label="Frequently Asked Questions">
        <div className="container mx-auto">
          <FAQSearch
            categories={faqCategories}
            onSearch={handleSearch}
            onCategoryFilter={handleCategoryFilter}
            onClear={clearSearch}
            selectedCategory={selectedCategory}
            isSearchActive={isSearchActive}
          />

          {isSearchActive ? (
            <FAQSearchResults results={searchResults} searchTerm={searchTerm} />
          ) : (
            <>
              <FAQTableOfContents categories={faqCategories} />
              
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
            </>
          )}
          
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
