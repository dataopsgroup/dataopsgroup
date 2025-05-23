
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import CTABanner from '@/components/CTABanner';

const HubSpotAssessmentResultsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Your HubSpot Assessment Results | Custom Optimization Plan</title>
        <meta 
          name="description" 
          content="See your personalized HubSpot assessment results and custom optimization plan. Discover exactly what's costing you deals and how to fix it. Next steps inside."
        />
        <meta property="og:title" content="Your HubSpot Assessment Results | Custom Optimization Plan" />
        <meta property="og:description" content="See your personalized HubSpot assessment results and custom optimization plan. Discover exactly what's costing you deals and how to fix it. Next steps inside." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dataopsgroup.com/hubspot-assessment-results" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Your HubSpot Assessment Results | Custom Optimization Plan" />
        <meta name="twitter:description" content="See your personalized HubSpot assessment results and custom optimization plan. Discover exactly what's costing you deals and how to fix it. Next steps inside." />
        <link rel="canonical" href="https://dataopsgroup.com/hubspot-assessment-results" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-br from-white to-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 text-dataops-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Assessment Complete!
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for completing our HubSpot Implementation Assessment. Your personalized results 
              and implementation rescue plan are ready for download.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-dataops-800">What's Included in Your Results?</h2>
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-dataops-100 text-dataops-600 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Comprehensive assessment score and section-by-section breakdown</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-dataops-100 text-dataops-600 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Priority improvement areas with detailed recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-dataops-100 text-dataops-600 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>90-day implementation rescue plan with actionable steps</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-dataops-100 text-dataops-600 flex items-center justify-center mr-3 mt-0.5">✓</span>
                  <span>Next steps and consultation opportunities</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="border-dataops-600 text-dataops-600 hover:bg-dataops-50">
                  <Link to="/assessment">
                    <Download className="w-4 h-4 mr-2" />
                    Take Assessment Again
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <CTABanner />
      <Footer />
    </div>
  );
};

export default HubSpotAssessmentResultsPage;
