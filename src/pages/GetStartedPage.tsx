
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const GetStartedPage = () => {
  useEffect(() => {
    // Create HubSpot script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/21794360.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Add onload handler to initialize form with redirect URL
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "21794360",
          formId: "f58580b1-2bf3-4df4-9702-81c5808ba539",
          target: ".hs-form-container",
          redirectUrl: `${window.location.origin}/thank-you`,
        });
      }
    };

    return () => {
      // Clean up
      const scriptToRemove = document.querySelector('script[src="https://js.hsforms.net/forms/embed/21794360.js"]');
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
      // Remove any HubSpot form elements that might have been created
      const formContainer = document.querySelector('.hs-form-container');
      if (formContainer) {
        while (formContainer.firstChild) {
          formContainer.removeChild(formContainer.firstChild);
        }
      }
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
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="hs-form-container">
                <div className="flex justify-center items-center h-20">
                  <p className="text-gray-500">Loading form...</p>
                </div>
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

// Add HubSpot form typing to window object
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: any) => void;
      };
    };
  }
}

export default GetStartedPage;
