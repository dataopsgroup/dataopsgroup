
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Contact from '@/components/Contact';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const ContactPage = () => {
  return (
    <SemanticLayout>
      <Helmet>
        <title>Contact Us - DataOps Group</title>
        <meta 
          name="description" 
          content="Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations." 
        />
        <meta name="keywords" content="contact dataops, hubspot consultancy, get in touch, marketing operations, sales operations" />
        <link rel="canonical" href="/contact" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "DataOps Group Contact",
              "description": "Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations.",
              "url": "${window.location.origin}/contact",
              "publisher": {
                "@type": "Organization",
                "name": "DataOps Group",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]} 
      />
      
      <section className="flex-grow pt-32 px-[5%]" aria-labelledby="contact-heading">
        <header className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
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
