
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
 * Uses flexbox to ensure footer always stays at bottom of viewport.
 */
const SemanticLayout: React.FC<SemanticLayoutProps> = ({
  children,
  mainClassName,
  skipNav = false,
  skipFooter = false
}) => {
  return (
    <>
      {!skipNav && (
        <header>
          <Navbar />
        </header>
      )}
      
      <main className={cn("main-content pt-[90px] lg:pt-[110px]", mainClassName)}>
        {children}
      </main>
      
      {!skipFooter && (
        <Footer />
      )}
      
      {/* Development-only meta tag validator */}
      {process.env.NODE_ENV === 'development' && (
        <MetaValidator />
      )}
    </>
  );
};

export default SemanticLayout;
