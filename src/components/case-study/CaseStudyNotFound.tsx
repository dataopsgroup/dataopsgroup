
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface CaseStudyNotFoundProps {
  caseStudyId?: string;
}

const CaseStudyNotFound = ({ caseStudyId }: CaseStudyNotFoundProps) => {
  // Log error information for debugging
  console.log('CaseStudyNotFound component rendered');
  console.log('Failed caseStudyId:', caseStudyId);
  console.log('Current URL:', window.location.href);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the case study you're looking for.</p>
          {caseStudyId && (
            <p className="text-sm text-gray-600 mb-4">
              Looking for: "{caseStudyId}"
            </p>
          )}
          <div className="space-y-3">
            <Button asChild>
              <Link to="/case-studies">Return to Case Studies</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/">Go to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyNotFound;
