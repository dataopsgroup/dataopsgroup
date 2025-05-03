
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import BookCTA from '@/components/BookCTA';
import Approach from '@/components/Approach';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>HubSpot Data Cleanup & Revenue Optimization | DataOps Group</title>
        <meta name="description" content="Fix your HubSpot ordeal and turn it into a revenue-generating machine. We clean and optimize your HubSpot data to convert existing contacts into paying customers." />
        <meta name="keywords" content="hubspot cleanup, hubspot optimization, data organization, hubspot revenue, data cleansing, hubspot consulting" />
        <link rel="canonical" href="/" />
        
        {/* Schema markup for the organization */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DataOps Group",
            "url": "https://dataops.group",
            "logo": "https://dataops.group/logo.png",
            "description": "DataOps Group tackles the frustrating data chaos that's costing you millions in wasted resources and missed opportunities."
          }
        `}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <BookCTA />
        <Approach />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
