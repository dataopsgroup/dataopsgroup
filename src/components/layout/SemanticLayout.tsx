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
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      position: 'relative'
    }}> 
      {!skipNav && (
        <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
          <Navbar />
        </header>
      )}
      
      <main className={cn("pt-[90px] lg:pt-[110px]", mainClassName)} 
            style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      
      {!skipFooter && (
        <div style={{ marginTop: 'auto' }}>
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
