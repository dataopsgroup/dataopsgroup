
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

interface SemanticLayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
}

const SemanticLayout: React.FC<SemanticLayoutProps> = ({ children, mainClassName }) => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className={`flex-1 ${mainClassName || ''}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SemanticLayout;
