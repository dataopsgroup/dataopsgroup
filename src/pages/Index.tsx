import React, { Suspense } from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Hero from '@/components/Hero';
import MetaHead from '@/components/seo/MetaHead';
import ImageErrorBoundary from '@/components/ui/image-error-boundary';

// Lazy imports for non-critical components
import { 
  LazyServices, 
  LazyApproach, 
  LazyBookCTA, 
  LazyChatbotSection,
  LazyMobilePerformanceMonitor 
} from '@/components/lazy/LazyComponents';

// Schema components (keep these normal imports as they're lightweight)
import OrganizationSchema from '@/components/seo/OrganizationSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import ProfessionalServiceSchema from '@/components/seo/ProfessionalServiceSchema';
import TestimonialsSchema from '@/components/seo/TestimonialsSchema';

const Index = () => {
  // Enhanced debugging for Index page initialization
  console.log('🏠 Index page rendered at:', new Date().toISOString());
  
  return (
    <SemanticLayout>
      {/* Add mobile performance monitoring - lazy loaded */}
      <Suspense fallback={null}>
        <LazyMobilePerformanceMonitor />
      </Suspense>
      
      <MetaHead
        title="PE Portfolio Operations Platform - HubSpot for Private Equity"
        description="Transform PE portfolio operations with specialized HubSpot platform. 19% higher valuations, 73% faster EBITDA growth, $18-22 ROI. 100-day implementation."
        keywords="hubspot consultancy, hubspot optimization, hubspot implementation, data operations, marketing operations, sales operations, revenue operations"
        canonicalPath="/"
        ogType="website"
        ogTitle="PE Portfolio Operations Platform - HubSpot for Private Equity"
        ogDescription="Transform PE portfolio operations with specialized HubSpot platform. 19% higher valuations, 73% faster EBITDA growth, $18-22 ROI."
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "PE Portfolio Operations Platform - HubSpot for Private Equity",
          "description": "Transform PE portfolio operations with specialized HubSpot platform. 19% higher valuations, 73% faster EBITDA growth, $18-22 ROI. 100-day implementation.",
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group"
          }
        }}
      />
      
      {/* Schema markup for SEO - lightweight, keep as normal imports */}
      <OrganizationSchema />
      <WebsiteSchema />
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" }
        ]} 
      />
      <LocalBusinessSchema />
      <ProfessionalServiceSchema />
      <TestimonialsSchema />
      
      {/* Critical above-the-fold content - normal import for fastest LCP */}
      <section aria-labelledby="hero-heading">
        <ImageErrorBoundary fallback={
          <div className="min-h-[500px] bg-dataops-600 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold mb-4">Turn PE Portfolio Operations Into Profit Drivers</h1>
              <p className="text-xl">Loading hero section...</p>
            </div>
          </div>
        }>
          <Hero />
        </ImageErrorBoundary>
      </section>

      {/* Below-the-fold content - lazy loaded with loading placeholders */}
      <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
        <section aria-label="Chatbot Services">
          <LazyChatbotSection />
        </section>
      </Suspense>
      
      {/* Enhanced Assessment CTA Section - keep as normal component since it's important */}
      <section className="py-16 bg-gradient-to-br from-dataops-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
              Wondering If Your Operations<br />Are PE-Ready?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Most portfolio companies discover critical operational gaps only after investor reviews. 
              Our assessment tools identify these blind spots and calculate your improvement potential before they impact your valuation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Operations Assessment</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  5-minute evaluation to identify operational gaps and PE readiness issues
                </p>
                <a href="/data-operations-assessment" className="bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block mt-auto">
                  Assess PE Readiness
                </a>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col">
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">ROI Calculator</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">
                  Calculate potential revenue gains and efficiency improvements from RevOps
                </p>
                <a href="/revops-roi-calculator" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block mt-auto">
                  Calculate ROI
                </a>
              </div>
            </div>
            
            <p className="text-gray-600 text-xl">
              Join 50+ portfolio companies that have already strengthened their operational foundation
            </p>
          </div>
        </div>
      </section>
      
      {/* Below-the-fold sections - lazy loaded */}
      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <section aria-label="Our Services">
          <LazyServices />
        </section>
      </Suspense>
      
      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <section aria-label="Our Approach">
          <LazyApproach />
        </section>
      </Suspense>
      
      <Suspense fallback={<div className="h-32 bg-gray-50 animate-pulse" />}>
        <section aria-label="Book a Consultation">
          <LazyBookCTA />
        </section>
      </Suspense>
    </SemanticLayout>
  );
};

export default Index;
