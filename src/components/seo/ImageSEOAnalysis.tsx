
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench, Loader2 } from 'lucide-react';
import { useRealImageAnalysis } from '@/hooks/useRealImageAnalysis';
import ProgressIndicator from './image-analysis/ProgressIndicator';
import SEOScoreCard from './image-analysis/SEOScoreCard';
import ImageIssuesDisplay from './image-analysis/ImageIssuesDisplay';
import SEOBestPractices from './image-analysis/SEOBestPractices';

const ImageSEOAnalysis: React.FC = () => {
  const {
    filteredImages,
    analyzing,
    fixing,
    progress,
    filter,
    setFilter,
    totalImages,
    errorsCount,
    warningsCount,
    successCount,
    seoScore,
    runAnalysis,
    fixImageIssues
  } = useRealImageAnalysis({ siteUrl: 'dataopsgroup.com' });

  // Helper function to render status icon
  const renderStatusIcon = (status: 'error' | 'warning' | 'success', fixed?: boolean) => {
    if (fixed) {
      return <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>;
    }
    
    switch (status) {
      case 'error':
        return <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
            <path d="m12 8 4 4m0-4-4 4" />
          </svg>
        </div>;
      case 'warning':
        return <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
        </div>;
      case 'success':
        return <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Image SEO Analysis</h2>
          <p className="text-gray-500">Optimize your images for better search visibility</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={runAnalysis} disabled={analyzing}>
            {analyzing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : 'Run Analysis'}
          </Button>
          <Button 
            variant="default" 
            onClick={fixImageIssues} 
            disabled={fixing || errorsCount + warningsCount === 0}
            className="flex items-center gap-2"
          >
            <Wrench className="h-4 w-4" />
            {fixing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Fixing...
              </>
            ) : 'Fix Images'}
          </Button>
        </div>
      </div>

      <ProgressIndicator 
        analyzing={analyzing}
        fixing={fixing}
        progress={progress}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SEOScoreCard
          seoScore={seoScore}
          totalImages={totalImages}
          errorsCount={errorsCount}
          warningsCount={warningsCount}
          successCount={successCount}
        />

        <ImageIssuesDisplay
          filteredImages={filteredImages}
          filter={filter}
          setFilter={setFilter}
          renderStatusIcon={renderStatusIcon}
        />
      </div>

      <SEOBestPractices />
    </div>
  );
};

export default ImageSEOAnalysis;
