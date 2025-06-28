
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
      </section>
    </SemanticLayout>
  );
};

export default ContactPage;
