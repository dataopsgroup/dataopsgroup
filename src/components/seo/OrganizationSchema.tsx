
import React from 'react';
import { Helmet } from 'react-helmet-async';

const OrganizationSchema = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DataOps Group",
    "description": "Specialized HubSpot implementation and data operations consulting for private equity portfolio companies. Transform portfolio operations into profit drivers with expert implementation and analytics.",
    "knowsAbout": [
      "Private Equity Portfolio Operations",
      "HubSpot Implementation",
      "Data Operations",
      "Revenue Operations",
      "Marketing Operations",
      "Portfolio Company Optimization"
    ]
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
