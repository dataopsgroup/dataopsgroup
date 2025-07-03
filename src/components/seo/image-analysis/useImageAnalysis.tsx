
import { useState, useEffect } from 'react';
import { ImageIssue } from './types';
import { useToast } from '@/hooks/use-toast';
import { CircleCheck as CheckCircle, ChevronRight as AlertTriangle } from 'lucide-react';

// Initial data for demonstration
const initialImageIssues: ImageIssue[] = [
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
    url: '/lovable-uploads/26cea183-e8de-4d91-8678-a75233402192.webp',
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

export const useImageAnalysis = () => {
  const [images, setImages] = useState<ImageIssue[]>(initialImageIssues);
  const [analyzing, setAnalyzing] = useState(false);
  const [fixing, setFixing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState<'all' | 'errors' | 'warnings' | 'success'>('all');
  const { toast } = useToast();

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

  // Fix all image issues
  const fixImageIssues = () => {
    setFixing(true);
    setProgress(0);
    
    // Simulate fixing process with a progress bar
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Update the image issues to show they're fixed
          const updatedImages = images.map(img => {
            if (img.status === 'error' || img.status === 'warning') {
              // Create new issues array with resolution notes
              let updatedIssues = [];
              
              if (img.page === '/services' && img.url.includes('1e7d023c')) {
                updatedIssues = ['Fixed: Added descriptive alt text "Marketing data visualization dashboard showing campaign performance metrics"', 'Fixed: Renamed to marketing-dashboard.png'];
              } else if (img.page === '/about' && img.url.includes('72e7f6ab')) {
                updatedIssues = ['Fixed: Added alt text "DataOps Group team members collaborating on a project"', 'Fixed: Optimized image (reduced to 240KB)'];
              } else if (img.page.includes('marketing-data-management')) {
                updatedIssues = ['Fixed: Enhanced alt text to "Comprehensive marketing data workflow diagram showing integration points"'];
              } else if (img.page.includes('hidden-cost')) {
                updatedIssues = ['Fixed: Compressed image (reduced to 190KB)'];
              } else {
                updatedIssues = ['Fixed: All issues resolved'];
              }
              
              return {
                ...img,
                status: 'success' as const,
                issues: updatedIssues,
                fixed: true
              };
            }
            return img;
          });
          
          setImages(updatedImages);
          setFixing(false);
          
          // Show success toast
          toast({
            title: "Images Fixed",
            description: `Fixed issues with ${errorsCount + warningsCount} images`,
          });
          
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  // Helper function to render status icon
  const renderStatusIcon = (status: 'error' | 'warning' | 'success', fixed?: boolean) => {
    if (fixed) {
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
    
    switch (status) {
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  // This effect listens for the global "Fix Issues" button in TechnicalSEOHealth.tsx
  useEffect(() => {
    // Listen for a custom event that would be dispatched from TechnicalSEOHealth
    const handleFixAll = () => {
      if (!fixing && (errorsCount > 0 || warningsCount > 0)) {
        fixImageIssues();
      }
    };

    window.addEventListener('fix-seo-issues', handleFixAll);
    
    return () => {
      window.removeEventListener('fix-seo-issues', handleFixAll);
    };
  }, [fixing, errorsCount, warningsCount]);

  return {
    images,
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
  };
};
