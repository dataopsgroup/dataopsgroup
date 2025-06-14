
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About DataOps Group - HubSpot Experts & Data Operations Consultants</title>
        <meta name="description" content="Meet Geoff Tucker and the DataOps Group team - HubSpot specialists with 15+ years of experience transforming portfolio operations for private equity firms and growth companies." />
        <meta name="keywords" content="about dataops group, geoff tucker, hubspot expert, data operations consultant, crm consultant, hubspot specialist" />
        <link rel="canonical" href={`${baseUrl}/about`} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About DataOps Group - HubSpot Experts & Data Operations Consultants" />
        <meta property="og:description" content="Meet Geoff Tucker and the DataOps Group team - HubSpot specialists with 15+ years of experience transforming portfolio operations for private equity firms and growth companies." />
        <meta property="og:url" content={`${baseUrl}/about`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About DataOps Group - HubSpot Experts & Data Operations Consultants" />
        <meta name="twitter:description" content="Meet Geoff Tucker and the DataOps Group team - HubSpot specialists with 15+ years of experience transforming portfolio operations for private equity firms and growth companies." />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta name="twitter:site" content="@dataops_group" />
      </Helmet>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]}
      />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-white to-dataops-50">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-dataops-950 text-brand-saffron text-sm font-medium mb-2">
                  About DataOps Group
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-dataops-900">
                  Meet the Team Behind Your Data Success
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
                  We're specialized HubSpot implementation experts who rescue failed projects and transform chaotic systems into profit-driving platforms that meet private equity standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Geoff Tucker Bio */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-dataops-900">Geoff Tucker</h2>
                  <h3 className="text-xl text-dataops-600 font-semibold mb-6">Founder & Lead HubSpot Implementation Specialist</h3>
                  
                  <div className="space-y-6 text-gray-700">
                    <p>
                      With over 15 years of experience in HubSpot implementations and revenue operations, Geoff has rescued hundreds of failed projects and transformed them into competitive advantages. His expertise spans across multiple industries, with particular specialization in private equity portfolio company optimizations.
                    </p>
                    
                    <p>
                      Geoff's approach combines deep technical knowledge with strategic business insight. He understands that successful implementations aren't just about technology—they're about creating systems that people actually want to use and that drive measurable business outcomes.
                    </p>
                    
                    <p>
                      As a certified HubSpot Solutions Partner, Geoff has led implementations that have delivered measurable business value for clients. His systematic methodology ensures that every system he designs directly contributes to bottom-line results while meeting the operational standards that private equity firms expect.
                    </p>

                    <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-6 my-8">
                      <h4 className="text-lg font-semibold text-dataops-800 mb-3">Curious About Your Implementation's Health?</h4>
                      <p className="text-gray-700 mb-4">
                        Before working together, Geoff recommends taking our assessment to identify your biggest operational gaps and growth opportunities.
                      </p>
                      <a href="/data-operations-assessment" className="inline-flex items-center bg-dataops-600 hover:bg-dataops-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Take the Operations Assessment
                      </a>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-dataops-900 mt-8 mb-4">Core Specializations:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>HubSpot Implementation Rescue & Optimization</li>
                      <li>Private Equity Portfolio Operations</li>
                      <li>Revenue Operations (RevOps) Strategy</li>
                      <li>Marketing Automation & Process Design</li>
                      <li>Data Quality Management & Governance</li>
                      <li>Sales Process Optimization</li>
                      <li>Business Intelligence & Analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Track Record</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-dataops-600">15+</div>
                      <div className="text-sm text-gray-600">Years of Experience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-dataops-600">30+</div>
                      <div className="text-sm text-gray-600">Successful Implementations</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• HubSpot Solutions Partner</li>
                    <li>• HubSpot Marketing Software Certified</li>
                    <li>• HubSpot Sales Software Certified</li>
                    <li>• HubSpot Service Hub Certified</li>
                    <li>• HubSpot CMS Hub Certified</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
