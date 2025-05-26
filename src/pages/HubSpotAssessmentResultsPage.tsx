
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/CTABanner';

const HubSpotAssessmentResultsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Assessment Results Sent | DataOps Group</title>
        <meta 
          name="description" 
          content="Your HubSpot Implementation Assessment results have been sent to your email. Review your personalized recommendations and next steps to improve your HubSpot implementation."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-br from-white to-gray-50 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8 text-dataops-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Your Assessment Results Are On The Way
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Thank you for completing our HubSpot Implementation Assessment. We've sent your personalized results 
              and implementation rescue plan to your email address. Be sure to check your inbox within the next few minutes.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-dataops-800">What Happens Next?</h2>
              <ol className="text-left space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-dataops-100 text-dataops-600 flex items-center justify-center mr-3 mt-0.5">1</span>
                  <span>Review your assessment results and personalized recommendations in your email</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-dataops-100 text-dataops-600 flex items-center justify-center mr-3 mt-0.5">2</span>
                  <span>Share the findings with your team and stakeholders</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-dataops-100 text-dataops-600 flex items-center justify-center mr-3 mt-0.5">3</span>
                  <span>Schedule a consultation with our HubSpot experts to discuss a customized implementation rescue plan</span>
                </li>
              </ol>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-dataops-600 hover:bg-dataops-700">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="border-dataops-600 text-dataops-600 hover:bg-dataops-50">
                  <Link to="/insights">Read Our HubSpot Resources</Link>
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
