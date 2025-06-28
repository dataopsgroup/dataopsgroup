
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { testimonials, getAggregateRating } from '@/data/testimonials';
import { companyInfo } from '@/data/companyInfo';

const TestimonialsSchema = () => {
  const aggregateRating = getAggregateRating();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : companyInfo.url;

  // Individual review schemas
  const reviewSchemas = testimonials.map(testimonial => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating || 5,
      "bestRating": 5,
      "worstRating": 1
    },
    "author": {
      "@type": "Person",
      "name": testimonial.author.name,
      "jobTitle": testimonial.author.title,
      "worksFor": {
        "@type": "Organization",
        "name": testimonial.author.company,
        "industry": testimonial.author.industry
      }
    },
    "reviewBody": testimonial.quote,
    "datePublished": testimonial.date,
    "itemReviewed": {
      "@type": "Service",
      "name": "HubSpot Consulting Services",
      "provider": {
        "@type": "Organization",
        "name": companyInfo.name,
        "url": companyInfo.url
      }
    }
  }));

  // Organization schema with aggregate rating
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": companyInfo.name,
    "url": companyInfo.url,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue,
      "reviewCount": aggregateRating.reviewCount,
      "bestRating": aggregateRating.bestRating,
      "worstRating": aggregateRating.worstRating
    },
    "review": reviewSchemas
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default TestimonialsSchema;
