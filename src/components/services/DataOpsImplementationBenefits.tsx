
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DataOpsImplementationBenefits = () => {
  const benefits = [
    "Seamless integration between HubSpot and your other business systems",
    "Customized workflows tailored to your unique business processes",
    "Improved data accuracy and consistency across platforms",
    "Enhanced reporting capabilities and business intelligence",
    "Streamlined operations and reduced manual tasks",
    "Higher user adoption and team productivity"
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
        <h3 className="text-xl font-bold mb-6">Benefits</h3>
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
        <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
        <p className="text-gray-700 mb-6">
          Contact us today to schedule a consultation and learn how our HubSpot integration services
          can help you maximize your HubSpot investment and streamline your operations.
        </p>
        <Button className="w-full bg-dataops-600 hover:bg-dataops-700" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default DataOpsImplementationBenefits;
