import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import CTABanner from '@/components/CTABanner';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const HubSpotAssessmentResultsPage = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  // Define breadcrumbs for schema
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'HubSpot Assessment', url: '/hubspot-assessment' },
    { name: 'Results', url: '/hubspot-assessment-results' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Assessment Results Sent | DataOps Group</title>
        <meta 
          name="description" 
          content="Your HubSpot Implementation Assessment results have been sent to your email. Review your personalized recommendations and next steps to improve your HubSpot implementation."
        />
        <link rel="canonical" href={`${baseUrl}/hubspot-assessment-results`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HubSpot Assessment Results Sent | DataOps Group" />
        <meta property="og:description" content="Your HubSpot Implementation Assessment results have been sent to your email. Review your personalized recommendations and next steps to improve your HubSpot implementation."
        />
        <meta property="og:url" content={`${baseUrl}/hubspot-assessment-results`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HubSpot Assessment Results Sent | DataOps Group" />
        <meta name="twitter:description" content="Your HubSpot Implementation Assessment results have been sent to your email. Review your personalized recommendations and next steps to improve your HubSpot implementation."
        />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} /> {/* Using a default image */}
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      
      {/* Schema Markup */}
      <BreadcrumbSchema items={breadcrumbs} />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "HubSpot Assessment Results | DataOps Group",
          "description": "Your HubSpot Implementation Assessment results have been sent to your email. Review your personalized recommendations and next steps to improve your HubSpot implementation.",
          "url": "${baseUrl}/hubspot-assessment-results",
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "${baseUrl}/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "HubSpot Assessment",
                "item": "${baseUrl}/hubspot-assessment"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Results",
                "item": "${baseUrl}/hubspot-assessment-results"
              }
            ]
          }
        }
      `}</script>
      
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
