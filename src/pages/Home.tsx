
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { lazy, Suspense } from 'react';
import Hero from '@/components/Hero';
import BookCTA from '@/components/BookCTA';

// Lazy load non-critical components
const Approach = lazy(() => import('@/components/Approach'));
const ChatbotSection = lazy(() => import('@/components/ChatbotSection'));
const Services = lazy(() => import('@/components/Services'));

// Lazy load schema components
const SchemaComponents = lazy(() => import('./HomeSchema'));

const Home = () => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';
  
  return (
    <SemanticLayout>
      <Helmet>
        <title>DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders</title>
        <meta 
          name="description" 
          content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." 
        />
        <meta name="keywords" content="hubspot consultancy, hubspot optimization, hubspot implementation, data operations, marketing operations, sales operations, revenue operations" />
        <link rel="canonical" href={`${baseUrl}/`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5, minimum-scale=1" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" />
        <link rel="preload" as="image" href="/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Open Graph / Facebook - minified */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders" />
        <meta property="og:description" content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." />
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        <meta property="og:site_name" content="DataOps Group" />
        
        {/* Twitter - minified */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DataOps Group - HubSpot Consultancy for Marketing & Sales Leaders" />
        <meta name="twitter:description" content="DataOps Group is a premier HubSpot consultancy helping marketing, sales, and operations leaders optimize their HubSpot implementation and maximize ROI through data-driven strategies." />
        <meta name="twitter:image" content={`${baseUrl}/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png`} />
        
        {/* Mobile optimization */}
        <meta name="theme-color" content="#1e4f9c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Critical inline styles */}
        <style type="text/css">{`
          button,a,.tap-target{touch-action:manipulation;min-height:44px;min-width:44px}
          @media (max-width:768px){.mobile-text{font-size:16px!important;line-height:1.5!important}.mobile-heading{font-size:20px!important;line-height:1.3!important}}
        `}</style>
      </Helmet>
      
      {/* Load schema markup lazily */}
      <Suspense fallback={null}>
        <SchemaComponents />
      </Suspense>
      
      <section aria-labelledby="hero-heading">
        <Hero />
      </section>
      
      <section aria-label="Chatbot Services">
        <Suspense fallback={<div className="h-40"></div>}>
          <ChatbotSection />
        </Suspense>
      </section>
      
      <section aria-label="Our Services">
        <Suspense fallback={<div className="h-40"></div>}>
          <Services />
        </Suspense>
      </section>
      
      <section aria-label="Our Approach">
        <Suspense fallback={<div className="h-40"></div>}>
          <Approach />
        </Suspense>
      </section>
      
      <section aria-label="Book a Consultation">
        <BookCTA />
      </section>
    </SemanticLayout>
  );
};

export default memo(Home);
