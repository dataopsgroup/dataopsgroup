
import React from 'react';
import { Helmet } from 'react-helmet-async';

const OrganizationSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "${baseUrl}/#organization",
            "name": "DataOps Group",
            "url": "${baseUrl}",
            "logo": {
              "@type": "ImageObject",
              "url": "${baseUrl}/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png",
              "width": "512",
              "height": "512",
              "caption": "DataOps Group Logo"
            },
            "image": {
              "@type": "ImageObject",
              "url": "${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png",
              "width": "1200",
              "height": "630"
            },
            "description": "DataOps Group is a HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI through data-driven strategies and expert implementation.",
            "sameAs": [
              "https://www.linkedin.com/company/dataops-group/",
              "https://twitter.com/dataops_group"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Data Drive",
              "addressLocality": "Fayetteville",
              "addressRegion": "AR",
              "postalCode": "72701",
              "addressCountry": "US"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+14798442052",
                "contactType": "customer service",
                "email": "info@dataopsgroup.com",
                "availableLanguage": "English",
                "contactOption": "TollFree",
                "areaServed": "US"
              },
              {
                "@type": "ContactPoint",
                "telephone": "+14798442052",
                "contactType": "sales",
                "email": "sales@dataopsgroup.com",
                "availableLanguage": "English",
                "contactOption": "TollFree",
                "areaServed": "US"
              }
            ],
            "areaServed": "Worldwide",
            "foundingDate": "2020-01-01",
            "founder": {
              "@type": "Person",
              "name": "Geoff Tucker",
              "jobTitle": "Chief Executive Officer",
              "url": "${baseUrl}/about",
              "image": "${baseUrl}/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png"
            },
            "numberOfEmployees": {
              "@type": "QuantitativeValue",
              "value": "10"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
