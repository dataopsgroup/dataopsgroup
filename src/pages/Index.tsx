
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Approach from '@/components/Approach';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DataOps Group - Data Operations Excellence</title>
        <meta name="description" content="DataOps Group helps businesses maximize the value of their data through innovative data operations solutions and expert consulting services." />
        <meta name="keywords" content="dataops, data operations, data management, data consulting" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
