
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import MetaValidator from '@/components/seo/MetaValidator';

interface SemanticLayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
  skipNav?: boolean;
  skipFooter?: boolean;
}

/**
 * SemanticLayout component provides a consistent semantic HTML structure
 * across the website with proper heading hierarchy and semantic tags.
 */
const SemanticLayout: React.FC<SemanticLayoutProps> = ({
  children,
  mainClassName,
  skipNav = false,
  skipFooter = false
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      {!skipNav && (
        <header>
          <Navbar />
        </header>
      )}
      
      <main className={cn("flex-grow", mainClassName)}>
        {children}
      </main>
      
      {!skipFooter && (
        <Footer />
      )}
      
      {/* Development-only meta tag validator */}
      {process.env.NODE_ENV === 'development' && (
        <MetaValidator />
      )}
    </div>
  );
};

export default SemanticLayout;
