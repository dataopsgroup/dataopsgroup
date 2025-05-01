
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import CTABanner from '@/components/CTABanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <Clients />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
