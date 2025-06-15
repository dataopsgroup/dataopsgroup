
import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetaValidator from '@/components/seo/MetaValidator';
import CanonicalOGValidator from '@/components/seo/CanonicalOGValidator';
import CanonicalRedirect from '@/components/seo/CanonicalRedirect';

interface SemanticLayoutProps {
  children: ReactNode;
}

const SemanticLayout = ({ children }: SemanticLayoutProps) => {
  const [isRouterReady, setIsRouterReady] = useState(false);
  const location = useLocation();

  // Ensure router is fully initialized before rendering critical components
  useEffect(() => {
    if (location && location.pathname) {
      console.log('🛣️ Router initialized for path:', location.pathname);
      setIsRouterReady(true);
    }
  }, [location]);

  // Safety fallback if router takes too long
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isRouterReady) {
        console.warn('⚠️ Router fallback timeout - forcing ready state');
        setIsRouterReady(true);
      }
    }, 500);

    return () => clearTimeout(fallbackTimer);
  }, [isRouterReady]);

  return (
    <>
      {/* Only render CanonicalRedirect after router is ready */}
      {isRouterReady && <CanonicalRedirect />}
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Development-only SEO validators - only after router is ready */}
      {process.env.NODE_ENV === 'development' && isRouterReady && (
        <>
          <MetaValidator />
          <CanonicalOGValidator />
        </>
      )}
    </>
  );
};

export default SemanticLayout;
