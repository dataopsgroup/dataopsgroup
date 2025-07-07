
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import NoindexValidator from '@/components/seo/NoindexValidator';
import CookieBanner from '@/components/CookieBanner';
import GlobalURLValidator from '@/components/seo/GlobalURLValidator';
import { initEncodingValidator } from '@/utils/encoding-validation';
import { initStaticContentValidator } from '@/utils/static-content-validator';

interface SemanticLayoutProps {
  children: React.ReactNode;
}

const SemanticLayout = ({ children }: SemanticLayoutProps) => {
  // Initialize validation systems in development
  useEffect(() => {
    initEncodingValidator();
    initStaticContentValidator();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <GlobalURLValidator />
      <NoindexValidator />
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
