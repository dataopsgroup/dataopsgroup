
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, ChevronRight as AlertTriangle, CircleCheck as CheckCircle } from 'lucide-react';

interface ImageIssue {
  url: string;
  page: string;
  issues: string[];
  status: 'error' | 'warning' | 'success';
}

// Mock data for demonstration
const mockImageIssues: ImageIssue[] = [
  {
    url: '/lovable-uploads/1e7d023c-3afe-475d-9c49-0d57ecb025d9.png',
    page: '/services',
    issues: ['Missing alt text', 'Filename is not descriptive'],
    status: 'error'
  },
  {
    url: '/lovable-uploads/12e641ec-9075-4921-80ad-5c42ee2a35de.png',
    page: '/insights/marketing-data-management',
    issues: ['Alt text could be more descriptive'],
    status: 'warning'
  },
  {
    url: '/lovable-uploads/26cea183-e8de-4d91-8678-a75233402192.png',
    page: '/insights/hidden-cost-of-failed-hubspot-implementations',
    issues: ['Image file is large (950KB)'],
    status: 'warning'
  },
  {
    url: '/lovable-uploads/3b1b6123-f768-43f8-9310-060df495237c.png', 
    page: '/insights/customer-segmentation-mistake',
    issues: ['No issues detected'],
    status: 'success'
  },
  {
    url: '/lovable-uploads/72e7f6ab-b186-48c5-990f-fa0d94659fc6.png',
    page: '/about',
    issues: ['Missing alt text', 'Image file is large (1.2MB)'],
    status: 'error'
  }
];

const ImageSEOAnalysis: React.FC = () => {
  const [images, setImages] = useState<ImageIssue[]>(mockImageIssues);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState<'all' | 'errors' | 'warnings' | 'success'>('all');

  // Filtered images based on status
  const filteredImages = images.filter(img => {
    if (filter === 'all') return true;
    if (filter === 'errors') return img.status === 'error';
    if (filter === 'warnings') return img.status === 'warning';
    if (filter === 'success') return img.status === 'success';
    return true;
  });

  // Stats for the dashboard
  const totalImages = images.length;
  const errorsCount = images.filter(img => img.status === 'error').length;
  const warningsCount = images.filter(img => img.status === 'warning').length;
  const successCount = images.filter(img => img.status === 'success').length;
  
  // Calculate SEO score percentage
  const seoScore = Math.round((successCount + (warningsCount * 0.5)) / totalImages * 100);

  // Simulate analysis
  const runAnalysis = () => {
    setAnalyzing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalyzing(false);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };
  
  // Helper function to render status icon
  const renderStatusIcon = (status: 'error' | 'warning' | 'success') => {
    switch (status) {
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
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
            {analyzing ? 'Analyzing...' : 'Run Analysis'}
          </Button>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      {analyzing && (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Analyzing images...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Image SEO Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{seoScore}%</div>
              <div className="flex items-center space-x-1">
                <Badge variant={seoScore >= 80 ? "secondary" : seoScore >= 60 ? "default" : "destructive"}>
                  {seoScore >= 80 ? 'Good' : seoScore >= 60 ? 'Needs Improvement' : 'Poor'}
                </Badge>
              </div>
            </div>
            <div className="mt-4 flex justify-around text-center">
              <div>
                <div className="text-sm font-medium text-gray-500">Total</div>
                <div className="text-xl font-bold">{totalImages}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-red-500">Errors</div>
                <div className="text-xl font-bold">{errorsCount}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-amber-500">Warnings</div>
                <div className="text-xl font-bold">{warningsCount}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-green-500">Optimal</div>
                <div className="text-xl font-bold">{successCount}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Images with Issues</CardTitle>
            <CardDescription>
              Filter: 
              <button 
                onClick={() => setFilter('all')} 
                className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'all' ? 'bg-gray-200' : ''}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('errors')} 
                className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'errors' ? 'bg-red-100' : ''}`}
              >
                Errors
              </button>
              <button 
                onClick={() => setFilter('warnings')} 
                className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'warnings' ? 'bg-amber-100' : ''}`}
              >
                Warnings
              </button>
              <button 
                onClick={() => setFilter('success')} 
                className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'success' ? 'bg-green-100' : ''}`}
              >
                Optimal
              </button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredImages.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No images found with the selected filter.</p>
                </div>
              ) : (
                filteredImages.map((image, index) => (
                  <Alert key={index} className={`
                    ${image.status === 'error' ? 'border-red-500 bg-red-50' : ''}
                    ${image.status === 'warning' ? 'border-amber-500 bg-amber-50' : ''}
                    ${image.status === 'success' ? 'border-green-500 bg-green-50' : ''}
                  `}>
                    <div className="flex items-start">
                      {renderStatusIcon(image.status)}
                      <div className="ml-3 flex-1">
                        <AlertTitle className="font-medium text-sm">{image.url.split('/').pop()}</AlertTitle>
                        <AlertDescription className="text-sm">
                          <div className="mt-1 text-xs font-medium text-gray-500">Page: {image.page}</div>
                          <ul className="mt-1 list-disc pl-5 space-y-1">
                            {image.issues.map((issue, i) => (
                              <li key={i} className="text-xs">{issue}</li>
                            ))}
                          </ul>
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Image SEO Best Practices</CardTitle>
          <CardDescription>Follow these guidelines to improve your images for SEO</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold">Technical Optimization</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Compress images to under 200KB when possible</li>
                <li>Use WebP format for better compression</li>
                <li>Implement responsive images using srcset</li>
                <li>Set proper width and height attributes</li>
                <li>Lazy-load images below the fold</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Content Optimization</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use descriptive, keyword-rich filenames</li>
                <li>Write detailed alt text for every image</li>
                <li>Add captions when contextually relevant</li>
                <li>Use structured data for product images</li>
                <li>Include images in your XML sitemap</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageSEOAnalysis;
