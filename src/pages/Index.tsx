
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';

const Index = () => {
  console.log('Index component rendering...');

  try {
    return (
      <div className="min-h-screen flex flex-col">
        <MetaHead 
          title="HubSpot ROI Not Meeting Expectations? We Fix That | DataOps Group"
          description="Stop losing money on underperforming HubSpot. We rescue broken implementations, optimize workflows, and turn your CRM into a revenue-generating machine. Free assessment."
          keywords="HubSpot consultant, HubSpot implementation, marketing operations, dataops, sales and marketing alignment, data quality"
          ogType="website"
          ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
          canonicalPath="/"
          gscVerification="YOUR_GSC_VERIFICATION_CODE"
        />
        
        <Navbar />
        
        <main className="flex-grow">
          <div className="px-[5%] mt-6">
            <BreadcrumbNavigation items={[{ name: "Home", url: "/", current: true }]} />
          </div>
          
          <Hero />
          
          <div className="px-[5%]">
            <Services />
            <Approach />
            <BookCTA />
          </div>
        </main>
        
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Index page critical error:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Page Error</h1>
          <p className="text-gray-600">Unable to load the homepage. Please refresh the page.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
};

export default Index;
