
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Contact from '@/components/Contact';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import MetaHead from '@/components/seo/MetaHead';

const ContactPage = () => {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact DataOps Group",
    "description": "Get in touch with DataOps Group for specialized HubSpot implementation and data operations consulting for private equity portfolio companies.",
    "url": "https://dataopsgroup.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "DataOps Group",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 479 844 2052",
        "contactType": "customer service",
        "availableLanguage": "English",
        "hoursAvailable": "Mo-Thu 09:00-17:00"
      }
    }
  };

  return (
    <SemanticLayout>
      <MetaHead
        title="Contact Us - DataOps Group"
        description="Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations."
        keywords="contact dataops, hubspot consultancy, get in touch, marketing operations, sales operations"
        canonicalPath="/contact"
        ogType="website"
        ogTitle="Contact Us - DataOps Group"
        ogDescription="Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations."
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        siteName="DataOps Group"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
      </Helmet>
      
      <LocalBusinessSchema />
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]} 
      />
      
      <section className="flex-grow pt-32 px-[5%]" aria-labelledby="contact-heading">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            Ready to transform your HubSpot operations? Contact us today to discuss how we can help your marketing, sales, and operations teams.
          </p>
        </header>
        <Contact />
        
        {/* Strategic outbound links section for Contact page */}
        <section className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Contact Us</h2>
            <p className="text-gray-600">
              Learn more about our approach and see what makes us different
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Take Our Assessment</h3>
              <p className="text-gray-600 text-sm mb-4">
                Identify operational gaps and improvement opportunities in just 5 minutes
              </p>
              <a href="/data-operations-assessment" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm transition-colors">
                Start Assessment →
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">See Our Results</h3>
              <p className="text-gray-600 text-sm mb-4">
                Real case studies showing 19% higher valuations and 73% faster growth
              </p>
              <a href="/case-studies" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm transition-colors">
                View Case Studies →
              </a>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Our Expertise</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about our specialized approach to PE portfolio operations
              </p>
              <a href="/about" className="text-dataops-600 hover:text-dataops-800 font-medium text-sm transition-colors">
                About Our Team →
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Helpful Resources</h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="/insights/hiring-and-working-with-a-hubspot-consultant" className="text-dataops-600 hover:text-dataops-800 transition-colors">
                  How to Hire HubSpot Experts
                </a>
                <span className="text-gray-300">•</span>
                <a href="/insights/stop-buying-contact-lists" className="text-dataops-600 hover:text-dataops-800 transition-colors">
                  Lead Generation Best Practices
                </a>
                <span className="text-gray-300">•</span>
                <a href="/faqs" className="text-dataops-600 hover:text-dataops-800 transition-colors">
                  Frequently Asked Questions
                </a>
                <span className="text-gray-300">•</span>
                <a href="/services" className="text-dataops-600 hover:text-dataops-800 transition-colors">
                  Our Services
                </a>
              </div>
            </div>
            
            <div className="text-xs text-gray-500">
              <p>
                Industry insights: 
                <a href="https://blog.hubspot.com/" target="_blank" rel="noopener noreferrer" className="text-dataops-600 hover:text-dataops-800 ml-1 transition-colors">
                  HubSpot Blog
                </a> • 
                <a href="https://academy.hubspot.com/" target="_blank" rel="noopener noreferrer" className="text-dataops-600 hover:text-dataops-800 ml-1 transition-colors">
                  HubSpot Academy
                </a>
              </p>
            </div>
          </div>
        </section>
      </section>
    </SemanticLayout>
  );
};

export default ContactPage;
