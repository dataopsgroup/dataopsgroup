
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wrench } from 'lucide-react';
import { useImageAnalysis } from './image-analysis/useImageAnalysis';
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
    fixImageIssues,
    renderStatusIcon
  } = useImageAnalysis();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Image SEO Analysis</h2>
          <p className="text-gray-500">Optimize your images for better search visibility</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={runAnalysis} disabled={analyzing}>
            {analyzing ? 'Analyzing...' : 'Run Analysis'}
          </Button>
          <Button 
            variant="default" 
            onClick={fixImageIssues} 
            disabled={fixing || errorsCount + warningsCount === 0}
            className="flex items-center gap-2"
          >
            <Wrench className="h-4 w-4" />
            {fixing ? 'Fixing...' : 'Fix Images'}
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
