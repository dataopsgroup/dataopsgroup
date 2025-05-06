
import React from 'react';
import { Helmet } from 'react-helmet-async';

const OrganizationSchema = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "${window.location.origin}#organization",
            "name": "DataOps Group",
            "url": "${window.location.origin}",
            "logo": {
              "@type": "ImageObject",
              "url": "${window.location.origin}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png",
              "width": "112",
              "height": "112"
            },
            "description": "DataOps Group is a HubSpot consultancy that helps businesses optimize their HubSpot implementation and maximize their ROI.",
            "sameAs": [
              "https://www.linkedin.com/company/dataops-group/"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94105",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-555-5555",
              "contactType": "customer service",
              "email": "info@dataopsgroup.com",
              "availableLanguage": "English"
            },
            "areaServed": "Worldwide",
            "foundingDate": "2020",
            "employee": [
              {
                "@type": "Person",
                "name": "Geoff Tucker",
                "jobTitle": "Chief Executive Officer"
              }
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;
