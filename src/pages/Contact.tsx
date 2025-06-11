
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import Contact from '@/components/Contact';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

const ContactPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <SemanticLayout>
      <Helmet>
        <title>Contact Us - DataOps Group</title>
        <meta 
          name="description" 
          content="Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations." 
        />
        <meta name="keywords" content="contact dataops, hubspot consultancy, get in touch, marketing operations, sales operations" />
        <link rel="canonical" href={`${baseUrl}/contact`} />
        
        {/* HubSpot Cookie Banner Suppression */}
        <script>
          {`
            // Initialize HubSpot queue if it doesn't exist
            window._hsq = window._hsq || [];
            
            // Disable HubSpot's automatic cookie banner
            window._hsq.push(['doNotTrack', false]);
            window._hsq.push(['setContentType', 'standard-page']);
            
            // Set cookie consent handling to external (our custom banner)
            window._hsq.push(['addPrivacyConsentListener', function(consent) {
              // Let HubSpot know we're handling consent externally
              return true;
            }]);
            
            // Disable HubSpot cookie banner specifically
            window.hsConversationsSettings = window.hsConversationsSettings || {};
            window.hsConversationsSettings.loadImmediately = false;
            
            // Check if user has already consented via our custom banner
            const cookieConsent = localStorage.getItem('cookie-consent');
            if (cookieConsent === 'accepted') {
              window._hsq.push(['doNotTrack', false]);
            } else if (cookieConsent === 'declined') {
              window._hsq.push(['doNotTrack', true]);
            }
          `}
        </script>
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us - DataOps Group" />
        <meta property="og:description" content="Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations." />
        <meta property="og:url" content={`${baseUrl}/contact`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - DataOps Group" />
        <meta name="twitter:description" content="Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "DataOps Group Contact",
              "description": "Get in touch with DataOps Group for HubSpot consultancy services that transform your marketing, sales, and operations.",
              "url": "${baseUrl}/contact",
              "publisher": {
                "@type": "Organization",
                "name": "DataOps Group",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
                }
              }
            }
          `}
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
