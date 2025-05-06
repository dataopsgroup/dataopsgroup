
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const FAQHelp: React.FC = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="mr-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center">
            <HelpCircle className="h-6 w-6 text-dataops-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Have more questions?</h2>
            <p className="mb-4 text-gray-700">
              We're here to help with any questions about HubSpot optimization, data operations, or how our services can benefit your organization.
            </p>
            <Link
              to="/contact"
              className="text-dataops-600 hover:underline font-medium inline-flex items-center"
              aria-label="Contact us for personalized answers to your HubSpot questions"
            >
              Contact us for personalized answers
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQHelp;
