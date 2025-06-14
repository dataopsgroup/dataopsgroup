
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CanonicalOGValidator from '@/components/seo/CanonicalOGValidator';

interface SemanticLayoutProps {
  children: React.ReactNode;
}

const SemanticLayout = ({ children }: SemanticLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Development-only SEO validation */}
      {process.env.NODE_ENV === 'development' && <CanonicalOGValidator />}
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SemanticLayout;
