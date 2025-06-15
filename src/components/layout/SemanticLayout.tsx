
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import MetaValidator from '@/components/seo/MetaValidator';
import CanonicalOGValidator from '@/components/seo/CanonicalOGValidator';
import CanonicalRedirect from '@/components/seo/CanonicalRedirect';

interface SemanticLayoutProps {
  children: ReactNode;
}

const SemanticLayout = ({ children }: SemanticLayoutProps) => {
  return (
    <>
      <CanonicalRedirect />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Development-only SEO validators */}
      {process.env.NODE_ENV === 'development' && (
        <>
          <MetaValidator />
          <CanonicalOGValidator />
        </>
      )}
    </>
  );
};

export default SemanticLayout;
