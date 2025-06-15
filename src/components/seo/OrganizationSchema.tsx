
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyInfo } from '@/data/companyInfo';

const OrganizationSchema = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : companyInfo.url;
  
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": companyInfo.name,
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}${companyInfo.logo}`,
      "width": "512",
      "height": "512",
      "caption": `${companyInfo.name} Logo`
    },
    "image": {
      "@type": "ImageObject",
      "url": `${baseUrl}${companyInfo.ogImage}`,
      "width": "1200",
      "height": "630"
    },
    "description": companyInfo.description,
    "sameAs": [
      companyInfo.socials.linkedin,
      companyInfo.socials.twitter
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.contact.phone,
      "contactType": "customer service",
      "email": companyInfo.contact.email,
      "availableLanguage": "English",
      "areaServed": "US"
    },
    "areaServed": "Worldwide",
    "foundingDate": companyInfo.foundingDate,
    "founder": {
      "@type": "Person",
      "@id": `${baseUrl}/#person-geoff-tucker`,
      "name": companyInfo.founder.name,
      "jobTitle": companyInfo.founder.title,
      "url": `${baseUrl}${companyInfo.founder.url}`,
      "image": `${baseUrl}${companyInfo.founder.image}`
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": companyInfo.numberOfEmployees
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
    </Helmet>
  );
};

export default OrganizationSchema;

