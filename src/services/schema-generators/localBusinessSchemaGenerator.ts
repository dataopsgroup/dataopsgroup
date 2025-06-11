
export const generateLocalBusinessSchema = (businessData: any): string => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://dataopsgroup.com/#organization",
    "name": "DataOps Group",
    "description": "HubSpot consulting and data operations expertise",
    "url": "https://dataopsgroup.com",
    "telephone": businessData.phone || "+1-555-DATA-OPS",
    "email": businessData.email || "contact@dataopsgroup.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": businessData.city || "Your City",
      "addressRegion": businessData.state || "State", 
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessData.latitude || "0.0",
      "longitude": businessData.longitude || "0.0"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "areaServed": ["United States", "Canada"],
    "serviceType": "HubSpot Consulting",
    "priceRange": "$$",
    "sameAs": [
      "https://www.linkedin.com/company/dataops-group"
    ]
  }, null, 2);
};
