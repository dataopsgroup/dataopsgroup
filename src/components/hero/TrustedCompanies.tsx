import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedTestimonials } from '@/data/testimonials';

// Memoized trusted companies section
const TrustedCompanies = React.memo(() => {
  const featuredTestimonials = getFeaturedTestimonials();
  
  return (
    <div className="pb-16 mt-12 trusted-companies-section" style={{ backgroundColor: '#FBB03B' }}>
      <div className="container mx-auto px-4 text-center pt-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 leading-normal md:leading-relaxed">
          Trusted by 50+ Companies to Rescue Their HubSpot Investments
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-dataops-600 mb-2">47%</div>
            <p className="text-gray-700 font-medium mb-1">Increased qualified leads</p>
            <p className="text-sm text-gray-500">in 90 days</p>
            <p className="text-xs text-gray-400 mt-2">Audio Visual Equipment Wholesaler</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-dataops-600 mb-2">28%</div>
            <p className="text-gray-700 font-medium mb-1">Reduced sales cycle</p>
            <p className="text-sm text-gray-500">time to close</p>
            <p className="text-xs text-gray-400 mt-2">Multi-National Insurance</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-dataops-600 mb-2">35%</div>
            <p className="text-gray-700 font-medium mb-1">Improvement in close rates</p>
            <p className="text-sm text-gray-500">deal conversion</p>
            <p className="text-xs text-gray-400 mt-2">SaaS Healthcare</p>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {Array(testimonial.rating || 5).fill(0).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-sm text-left">"{testimonial.quote}"</p>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{testimonial.author.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.author.title}</p>
                    <p className="text-xs text-gray-500">{testimonial.author.company}</p>
                    <p className="text-xs text-gray-400 mt-1">{testimonial.author.industry}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your operations? Explore our comprehensive{' '}
            <Link to="/services" className="text-dataops-600 hover:text-dataops-700 underline font-medium">
              service offerings
            </Link>{' '}
            or read more{' '}
            <Link to="/about" className="text-dataops-600 hover:text-dataops-700 underline font-medium">
              about our team
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
});

TrustedCompanies.displayName = 'TrustedCompanies';

export default TrustedCompanies;
