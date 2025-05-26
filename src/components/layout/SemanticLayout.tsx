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

const SemanticLayout: React.FC<SemanticLayoutProps> = ({
  children,
  mainClassName,
  skipNav = false,
  skipFooter = false
}) => {
  return (
    // Added this wrapper div with flex classes
    <div className="flex flex-col min-h-screen"> 
      {!skipNav && (
        // Added z-50 to ensure header stays above content
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
      )}
      
      {/* Added flex-grow to push footer down */}
      <main className={cn("main-content pt-[90px] lg:pt-[110px] flex-grow", mainClassName)}>
        {children}
      </main>
      
      {!skipFooter && (
        // Added wrapper with mt-auto to push footer to bottom
        <footer className="mt-auto">
          <Footer />
        </footer>
      )}
      
      {process.env.NODE_ENV === 'development' && (
        <MetaValidator />
      )}
    </div>
  );
};

export default SemanticLayout;
