
import { useState, useEffect } from 'react';
import { mockPageSpeedData } from '@/components/seo/dashboard/mockPageSpeedData';

export interface PageSpeedMetric {
  score: number;
  value: number | string;
  unit?: string;
}

export interface PageSpeedData {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: PageSpeedMetric;
  fid: PageSpeedMetric;
  cls: PageSpeedMetric;
  inp: PageSpeedMetric;
  ttfb: PageSpeedMetric;
}

export const usePageSpeedData = (url: string) => {
  const [data, setData] = useState<PageSpeedData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPageSpeedData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // In a real implementation, we would make an API call to PageSpeed Insights
      // For now, we'll use mock data and simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Using mock data for demonstration purposes
      const result = mockPageSpeedData;
      
      setData(result);
    } catch (err) {
      console.error('Error fetching PageSpeed data:', err);
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data when URL changes
  useEffect(() => {
    if (url) {
      fetchPageSpeedData();
    }
  }, [url]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchPageSpeedData
  };
};
