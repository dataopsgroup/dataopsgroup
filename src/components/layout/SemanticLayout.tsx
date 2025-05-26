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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
      {!skipNav && (
        <header>
          <Navbar />
        </header>
      )}
      
      <main className={cn("pt-[90px] lg:pt-[110px]", mainClassName)} 
            style={{ flexGrow: 1 }}>
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
