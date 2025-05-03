
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MarketingOperationsRevOpsBenefits = () => {
  const benefits = [
    "Improved marketing ROI with data-driven decision making",
    "Unified view of marketing performance across all channels",
    "Enhanced customer segmentation and targeting",
    "Better attribution of marketing efforts to revenue",
    "Streamlined reporting and time savings",
    "Improved campaign optimization and performance",
    "Greater marketing and sales alignment",
    "Increased conversion rates and customer acquisition",
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
        <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-dataops-600 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="bg-dataops-50 rounded-xl p-8">
        <h3 className="text-xl font-bold mb-4">Ready to transform your marketing data?</h3>
        <p className="text-gray-700 mb-6">
          Contact us today to schedule a consultation and learn how our Marketing Data Management & Analytics services
          can help you unlock insights and drive revenue growth.
        </p>
        <Button className="w-full bg-dataops-600 hover:bg-dataops-700" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default MarketingOperationsRevOpsBenefits;
