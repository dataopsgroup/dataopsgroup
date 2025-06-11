
export const generateWebApplicationSchema = (pageData: any): string => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": pageData.title || "Business Calculator",
    "description": pageData.description || "Calculate business metrics and ROI",
    "url": pageData.url,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "browserRequirements": "Requires JavaScript",
    "softwareVersion": "1.0",
    "provider": {
      "@type": "Organization",
      "@id": "https://dataopsgroup.com/#organization"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Real-time calculations",
      "Data export functionality", 
      "Industry benchmarking"
    ]
  }, null, 2);
};
