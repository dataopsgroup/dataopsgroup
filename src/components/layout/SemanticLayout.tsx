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
    <div className="flex flex-col min-h-screen"> 
      {!skipNav && (
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
      )}
      
      <main className={cn("main-content pt-[90px] lg:pt-[110px] flex-grow", mainClassName)}>
        {children}
      </main>
      
      {!skipFooter && (
        <Footer />
      )}
      
      {process.env.NODE_ENV === 'development' && (
        <MetaValidator />
      )}
    </div>
  );
};

export default SemanticLayout;
