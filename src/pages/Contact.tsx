
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Contact from '@/components/Contact';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const ContactPage = () => {
  return (
    <SemanticLayout>
      <Helmet>
        <title>Contact DataOps Group | Free HubSpot Consultation</title>
        <meta 
          name="description" 
          content="Get expert HubSpot help. Free consultation to diagnose your CRM issues and boost ROI. Email, phone, or schedule a call. Response within 24 hours." 
        />
        <meta name="keywords" content="contact dataops, hubspot consultancy, get in touch, marketing operations, sales operations" />
        <link rel="canonical" href="https://dataopsgroup.com/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact DataOps Group | Free HubSpot Consultation" />
        <meta property="og:description" content="Get expert HubSpot help. Free consultation to diagnose your CRM issues and boost ROI. Email, phone, or schedule a call. Response within 24 hours." />
        <meta property="og:url" content="https://dataopsgroup.com/contact" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact DataOps Group | Free HubSpot Consultation" />
        <meta name="twitter:description" content="Get expert HubSpot help. Free consultation to diagnose your CRM issues and boost ROI. Email, phone, or schedule a call. Response within 24 hours." />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "DataOps Group Contact",
              "description": "Get expert HubSpot help. Free consultation to diagnose your CRM issues and boost ROI. Email, phone, or schedule a call. Response within 24 hours.",
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
