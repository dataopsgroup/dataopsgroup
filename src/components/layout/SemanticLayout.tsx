
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTop from '../ScrollToTop';

interface SemanticLayoutProps {
  children: React.ReactNode;
}

const SemanticLayout: React.FC<SemanticLayoutProps> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SemanticLayout;
