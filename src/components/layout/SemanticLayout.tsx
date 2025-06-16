
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';
import RedirectHealthMonitor from '@/components/seo/RedirectHealthMonitor';
import OGCanonicalMonitor from '@/components/seo/OGCanonicalMonitor';

interface SemanticLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

const SemanticLayout = ({ children, hideFooter }: SemanticLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      {!hideFooter && <Footer />}
      <ScrollToTop />
      <CookieBanner />
      
      {/* Development monitoring components */}
      {process.env.NODE_ENV === 'development' && (
        <>
          <RedirectHealthMonitor />
          <OGCanonicalMonitor />
        </>
      )}
    </>
  );
};

export default SemanticLayout;
