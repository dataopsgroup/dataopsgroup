
export const generateLocalBusinessSchema = (businessData: any): string => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://dataopsgroup.com/#organization",
    "name": "DataOps Group",
    "description": "HubSpot consulting and data operations expertise",
    "url": "https://dataopsgroup.com",
    "foundingDate": "2022-08-01",
    "numberOfEmployees": 5,
    "telephone": businessData.phone || "+1-479-844-2052",
    "email": businessData.email || "admin@dataopsgroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Roxburgh Drive",
      "addressLocality": businessData.city || "Bella Vista",
      "addressRegion": businessData.state || "AR", 
      "postalCode": "72715",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessData.latitude || "36.4734",
      "longitude": businessData.longitude || "-94.2710"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "areaServed": ["United States", "Canada"],
    "serviceType": "HubSpot Consulting",
    "priceRange": "$$-$$$",
    "sameAs": [
      "https://www.linkedin.com/company/dataops-group"
    ]
  }, null, 2);
};
