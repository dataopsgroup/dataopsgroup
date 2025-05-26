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
    <div className="relative min-h-screen"> {/* Added relative positioning */}
      {!skipNav && (
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
      )}
      
      {/* Added critical visibility properties */}
      <main className={cn(
        "relative z-10 w-full pt-[90px] lg:pt-[110px] pb-20", /* Added bottom padding */
        "overflow-visible block", /* Force visibility */
        mainClassName
      )}>
        {children}
      </main>
      
      {!skipFooter && (
        <div className="relative z-10"> {/* Footer wrapper with z-index */}
          <Footer />
        </div>
      )}
      
      {process.env.NODE_ENV === 'development' && (
        <MetaValidator />
      )}
    </div>
  );
};

export default SemanticLayout;
