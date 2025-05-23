
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { HelpCircle, Navigation, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SitemapHelp: React.FC = () => {
  return (
    <div className="py-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <HelpCircle className="h-6 w-6 text-dataops-600" />
            Can't Find What You're Looking For?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Navigation className="h-5 w-5 text-dataops-500" /> 
                Quick Navigation
              </h3>
              <p>Looking for specific information about our HubSpot consulting services?</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/assessment">Take HubSpot Assessment</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/insights">Browse Insights</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Phone className="h-5 w-5 text-dataops-500" /> 
                Need Direct Assistance?
              </h3>
              <p>We're here to help with your HubSpot implementation and data needs.</p>
              <div className="flex gap-3">
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link to="/book">Book a Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SitemapHelp;
