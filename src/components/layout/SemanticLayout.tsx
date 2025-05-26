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
    <>
      {/* Add a background wrapper with the footer's dark color */}
      <div style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100vh', /* Extend far beyond what's needed */
        backgroundColor: '#1A2237', /* Match your footer's background color */
        zIndex: -1 /* Behind everything else */
      }} />
      
      <div style={{ 
        minHeight: '100vh',
        position: 'relative',
        paddingBottom: '350px' /* Adjust based on your footer height */
      }}> 
        {!skipNav && (
          <header style={{ position: 'sticky', top: 0, zIndex: 50 }}>
            <Navbar />
          </header>
        )}
        
        <main className={cn("pt-[90px] lg:pt-[110px]", mainClassName)}>
          {children}
        </main>
        
        {process.env.NODE_ENV === 'development' && (
          <MetaValidator />
        )}
      </div>
      
      {!skipFooter && (
        <footer style={{ 
          position: 'absolute', 
          bottom: 0, 
          width: '100%'
        }}>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default SemanticLayout;
