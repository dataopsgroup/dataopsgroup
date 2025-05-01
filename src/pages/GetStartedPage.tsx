
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const GetStartedPage = () => {
  useEffect(() => {
    // Create HubSpot script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore - HubSpot's hbspt is not typed
      if (window.hbspt) {
        // @ts-ignore - HubSpot's hbspt is not typed
        window.hbspt.forms.create({
          region: "na1", // Replace with your HubSpot region
          portalId: "YOUR_PORTAL_ID", // Replace with your HubSpot portal ID
          formId: "YOUR_FORM_ID", // Replace with your HubSpot form ID
          target: "#hubspot-form-container"
        });
      }
    };

    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Get Started - DataOps Group</title>
      </Helmet>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-dataops-900 mb-6">Get Started with DataOps Group</h1>
            <p className="text-lg text-gray-700 mb-8">
              Fill out the form below to start your data transformation journey. Our team will reach out to discuss your needs and how we can help.
            </p>
            
            {/* HubSpot Form Container */}
            <div 
              id="hubspot-form-container" 
              className="bg-white rounded-lg shadow-lg p-6 mb-8"
            >
              <div className="flex justify-center items-center h-20">
                <p className="text-gray-500">Loading form...</p>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-dataops-900 mb-4">What happens next?</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li className="text-gray-700">Our team will review your information within 24 hours.</li>
                <li className="text-gray-700">A DataOps specialist will contact you to schedule an initial consultation.</li>
                <li className="text-gray-700">We'll develop a customized plan based on your organization's needs.</li>
                <li className="text-gray-700">Begin your data transformation journey with expert guidance.</li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GetStartedPage;
