
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface BenefitObject {
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  benefits: string[] | BenefitObject[];
  serviceTitle?: string;
  isHubSpotTraining?: boolean;
  ctaText?: string;
}

const ServiceBenefits = ({ benefits, serviceTitle = '', isHubSpotTraining = false, ctaText }: ServiceBenefitsProps) => {
  const defaultCtaText = isHubSpotTraining ? "Get Your HubSpot Strategy" : `Get Your Custom ${serviceTitle} Strategy`;
  
  // Check if benefits are objects or strings
  const isObjectBenefits = benefits.length > 0 && typeof benefits[0] === 'object';
  
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold mb-6 text-brand-navy font-rubik">Key Benefits</h3>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start group">
              <CheckCircle className="h-5 w-5 text-brand-saffron mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
              <div className="font-roboto text-gray-700 leading-relaxed">
                {isObjectBenefits ? (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{(benefit as BenefitObject).title}</h4>
                    <p>{(benefit as BenefitObject).description}</p>
                  </div>
                ) : (
                  <span>{benefit as string}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-gradient-to-br from-brand-saffron/5 to-brand-saffron/10 border border-brand-saffron/20 rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-4 text-brand-navy font-rubik">Ready to Transform Your Operations?</h3>
        <p className="text-gray-700 mb-6 font-roboto leading-relaxed">
          Contact us today to schedule a consultation and discover how our {isHubSpotTraining ? "HubSpot training and implementation" : serviceTitle.toLowerCase()} services
          can drive measurable results for your portfolio companies.
        </p>
        <Button className="w-full bg-brand-saffron hover:bg-brand-saffron/90 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
          <Link to="/contact">{ctaText || defaultCtaText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceBenefits;
