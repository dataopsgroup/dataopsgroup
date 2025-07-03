
/**
 * ⚠️ HOME PAGE - HERO SECTION LOCKED ⚠️
 * 
 * CRITICAL: The hero section in this file is LOCKED and should NOT be modified
 * without explicit user permission. The current appearance and functionality
 * are correct and must be preserved.
 * 
 * LOCKED COMPONENTS:
 * - Hero component and all its children (HeroContent, HeroContentSection, TrustedCompanies)
 * - Hero styling and layout
 * - Hero background image and positioning
 * - Hero text content and CTAs
 * 
 * DO NOT MODIFY the hero section unless explicitly instructed by the user!
 */

import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import ChatbotSection from '@/components/ChatbotSection';
import MetaHead from '@/components/seo/MetaHead';
import ImageErrorBoundary from '@/components/ui/image-error-boundary';

// Lazy load non-critical components
const OrganizationSchema = React.lazy(() => import('@/components/seo/OrganizationSchema'));
const WebsiteSchema = React.lazy(() => import('@/components/seo/WebsiteSchema'));
const BreadcrumbSchema = React.lazy(() => import('@/components/seo/BreadcrumbSchema'));
const LocalBusinessSchema = React.lazy(() => import('@/components/seo/LocalBusinessSchema'));
const ProfessionalServiceSchema = React.lazy(() => import('@/components/seo/ProfessionalServiceSchema'));
const TestimonialsSchema = React.lazy(() => import('@/components/seo/TestimonialsSchema'));

const Index = () => {
  return (
    <SemanticLayout>
      <MetaHead
        title="PE Portfolio Operations Platform - HubSpot for Private Equity"
        description="Transform PE operations with HubSpot expertise. 19% higher valuations, 73% faster EBITDA growth, $18-22 ROI. 100-day implementation program."
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
      
      {/* Lazy load schema markup to reduce initial bundle */}
      <React.Suspense fallback={null}>
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
      </React.Suspense>
      
      {/* 
        ⚠️ HERO SECTION - LOCKED FOR EDITING ⚠️
        
        This hero section is currently working perfectly and should NOT be modified
        without explicit user permission. It includes:
        
        - Hero component with proper 40vh height background
        - HeroContent with headline and CTA buttons
        - HeroContentSection with stats and progress bars
        - TrustedCompanies section
        - Proper WebP/PNG background image optimization
        - Correct responsive design and styling
        
        Current structure is LOCKED - DO NOT CHANGE without user approval!
      */}
      <section aria-labelledby="hero-heading">
        <ImageErrorBoundary fallback={
          <div className="min-h-[500px] bg-dataops-600 flex items-center justify-center">
            <div className="text-white text-center">
              <h1 className="text-4xl font-bold mb-4">Turn PE Portfolio Operations Into Profit Drivers</h1>
              <p className="text-xl">Loading hero section...</p>
            </div>
          </div>
        }>
          {/* ⚠️ HERO COMPONENT - DO NOT MODIFY WITHOUT USER PERMISSION ⚠️ */}
          <Hero />
        </ImageErrorBoundary>
      </section>
      {/* ⚠️ END OF LOCKED HERO SECTION ⚠️ */}
      
      <section aria-label="Chatbot Services">
        <ChatbotSection />
      </section>
      
      {/* Enhanced Assessment CTA Section */}
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
                  Take our quick evaluation to identify gaps and PE readiness issues. No form required!
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
      
      <section aria-label="Our Services">
        <Services />
      </section>
      
      <section aria-label="Our Approach">
        <Approach />
      </section>
      
      {/* Strategic Links Section for SEO Link Equity */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Resources & Insights</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Popular Guides</h3>
                <div className="space-y-2">
                  <a href="/guides/hubspot-expert" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    HubSpot Expert Hiring Guide
                  </a>
                  <a href="/insights/hiring-and-working-with-a-hubspot-consultant" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    Working with HubSpot Consultants
                  </a>
                  <a href="/insights/create-pro-level-hubspot-lead-score-model" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    Pro Lead Scoring Models
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Case Studies</h3>
                <div className="space-y-2">
                  <a href="/insights/multi-national-specialty-insurance" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    Multi-National Insurance Success
                  </a>
                  <a href="/insights/audio-visual-equipment-wholesaler" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    AV Equipment Transformation
                  </a>
                  <a href="/case-studies" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    All Success Stories
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Expert Insights</h3>
                <div className="space-y-2">
                  <a href="/insights/stop-buying-contact-lists" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    Stop Buying Contact Lists
                  </a>
                  <a href="/insights/silent-sales-marketing-divide" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    Sales & Marketing Alignment
                  </a>
                  <a href="/insights/marketing-dashboards-fail" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    Why Dashboards Fail
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Industry Resources</h3>
                <div className="space-y-2">
                  <a href="https://academy.hubspot.com/" target="_blank" rel="noopener noreferrer" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    HubSpot Academy
                  </a>
                  <a href="https://blog.hubspot.com/" target="_blank" rel="noopener noreferrer" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    HubSpot Blog
                  </a>
                  <a href="https://ecosystem.hubspot.com/marketplace" target="_blank" rel="noopener noreferrer" className="block text-dataops-600 hover:text-dataops-800 text-sm transition-colors">
                    HubSpot Marketplace
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section aria-label="Book a Consultation">
        <BookCTA />
      </section>
    </SemanticLayout>
  );
};

export default Index;
