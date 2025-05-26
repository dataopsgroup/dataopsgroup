
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
 * Uses flex layout to ensure footer is always at the bottom of the viewport.
 */
const SemanticLayout: React.FC<SemanticLayoutProps> = ({
  children,
  mainClassName,
  skipNav = false,
  skipFooter = false
}) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* This creates a container that's at least the height of the viewport */}
      {!skipNav && (
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
      )}
      
      <main className={cn("main-content pt-[90px] lg:pt-[110px] flex-grow", mainClassName)}>
        {children}
      </main>
      
      {!skipFooter && (
        <footer className="mt-auto"> {/* mt-auto helps push it to the bottom */}
          <Footer />
        </footer>
      )}
      
      {/* Development-only meta tag validator */}
      {process.env.NODE_ENV === 'development' && (
        <MetaValidator />
      )}
    </div>
  );
};

export default SemanticLayout;
