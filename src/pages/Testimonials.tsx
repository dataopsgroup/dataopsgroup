
import React from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import TestimonialsSchema from '@/components/seo/TestimonialsSchema';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { testimonials, getAggregateRating } from '@/data/testimonials';
import CTABanner from '@/components/CTABanner';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TestimonialsPage = () => {
  const aggregateRating = getAggregateRating();
  
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Testimonials", url: "/testimonials" }
  ];

  // Testimonials page schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Client Testimonials - DataOps Group",
    "description": "Read what our clients say about our HubSpot consulting and data operations services. Real feedback from portfolio companies and growing businesses.",
    "url": "https://dataopsgroup.com/testimonials",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://dataopsgroup.com/#organization",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": aggregateRating.bestRating,
        "worstRating": aggregateRating.worstRating
      }
    }
  };

  return (
    <SemanticLayout>
      <MetaHead
        title="Client Testimonials - HubSpot Success Stories | DataOps Group"
        description="Read what our clients say about our HubSpot consulting and data operations services. Real feedback from portfolio companies and growing businesses who've transformed their operations."
        keywords="client testimonials, HubSpot success stories, data operations reviews, portfolio company feedback, HubSpot consulting testimonials, customer success stories"
        canonicalPath="/testimonials"
        ogType="website"
        ogTitle="Client Testimonials - HubSpot Success Stories | DataOps Group"
        ogDescription="Read what our clients say about our HubSpot consulting and data operations services. Real feedback from portfolio companies and growing businesses who've transformed their operations."
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      </Helmet>
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <TestimonialsSchema />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-[5%]">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dataops-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover how we've helped portfolio companies and growing businesses transform their operations with HubSpot expertise and data-driven strategies.
            </p>
            
            {/* Aggregate Rating Display */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-md mx-auto mb-12">
              <div className="flex justify-center mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < Math.floor(aggregateRating.ratingValue) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-dataops-900 mb-1">
                {aggregateRating.ratingValue.toFixed(1)}/5.0
              </p>
              <p className="text-gray-600">
                Based on {aggregateRating.reviewCount} client reviews
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {Array(testimonial.rating || 5).fill(0).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm text-dataops-900">{testimonial.author.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.author.title}</p>
                    <p className="text-xs text-gray-500">{testimonial.author.company}</p>
                    <p className="text-xs text-gray-400 mt-1">{testimonial.author.industry}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-dataops-50 text-dataops-700 text-xs rounded-full">
                      {testimonial.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dataops-900 mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Transform your operations with the same expertise that's helped dozens of portfolio companies achieve measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/data-operations-assessment" 
                className="bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Assessment
              </Link>
              <Link 
                to="/book" 
                className="border border-dataops-600 text-dataops-600 hover:bg-dataops-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <CTABanner />
    </SemanticLayout>
  );
};

export default TestimonialsPage;
