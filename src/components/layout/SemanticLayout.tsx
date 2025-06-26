
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';
import GlobalURLValidator from '@/components/seo/GlobalURLValidator';

interface SemanticLayoutProps {
  children: React.ReactNode;
}

const SemanticLayout = ({ children }: SemanticLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <GlobalURLValidator />
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default SemanticLayout;
