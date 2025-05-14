
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
  email?: string;
  telephone?: string;
  alumniOf?: string;
}

const PersonSchema = ({
  name,
  jobTitle,
  description,
  image,
  url,
  sameAs = [],
  email,
  telephone,
  alumniOf
}: PersonSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const personId = name.toLowerCase().replace(/\s+/g, '-');
  const fullUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : `${baseUrl}/about`;
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : 
    `${baseUrl}/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png`;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person-${personId}`,
    "name": name,
    "jobTitle": jobTitle,
    "description": description || `${name} is a team member at DataOps Group, specializing in HubSpot consulting and implementation.`,
    "image": {
      "@type": "ImageObject",
      "url": fullImageUrl,
      "width": "400",
      "height": "400"
    },
    "url": fullUrl,
    "worksFor": {
      "@id": `${baseUrl}/#organization`
    },
    "sameAs": sameAs,
    ...(email && { "email": email }),
    ...(telephone && { "telephone": telephone }),
    ...(alumniOf && { 
      "alumniOf": {
        "@type": "Organization",
        "name": alumniOf
      } 
    }),
    "knowsAbout": [
      "HubSpot Implementation",
      "Data Operations",
      "Marketing Analytics",
      "CRM Setup",
      "Data Quality",
      "Marketing Operations"
    ],
    "mainEntityOfPage": {
      "@id": fullUrl
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default PersonSchema;
