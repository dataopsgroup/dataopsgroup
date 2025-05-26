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

// Reverted to simplest possible version
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
      
      <main className={cn("pt-[120px]", mainClassName)}>
        {children}
      </main>
      
      {!skipFooter && (
        <Footer />
      )}
      
      {process.env.NODE_ENV === 'development' && (
        <MetaValidator />
      )}
    </>
  );
};

export default SemanticLayout;
