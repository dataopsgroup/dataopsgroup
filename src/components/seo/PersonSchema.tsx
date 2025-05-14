
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}

const PersonSchema = ({
  name,
  jobTitle,
  description,
  image,
  url,
  sameAs = []
}: PersonSchemaProps) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  const fullUrl = url ? (url.startsWith('http') ? url : `${baseUrl}${url}`) : `${baseUrl}/about`;
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : 
    `${baseUrl}/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png`;
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description || `${name} is a team member at DataOps Group, specializing in HubSpot consulting and implementation.`,
    "image": fullImageUrl,
    "url": fullUrl,
    "worksFor": {
      "@id": `${baseUrl}/#organization`
    },
    "sameAs": sameAs
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
