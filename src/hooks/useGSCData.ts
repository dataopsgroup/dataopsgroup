
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface GSCDataOptions {
  startDate: string;
  endDate: string;
  dimensions?: string[];
}

export interface GSCMetric {
  date: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export interface GSCQueryOrPage {
  name: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GSCData {
  metrics: GSCMetric[];
  topQueries: GSCQueryOrPage[];
  topPages: GSCQueryOrPage[];
  totalClicks: number;
  totalImpressions: number;
  averageCTR: number;
  averagePosition: number;
  clicksChange: string;
  impressionsChange: string;
  positionChange: string;
  isAuthenticated: boolean;
}

const useGSCData = (siteUrl?: string, options?: GSCDataOptions) => {
  const [data, setData] = useState<GSCData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const { toast } = useToast();

  // Set default dates if not provided
  const startDate = options?.startDate || getDefaultStartDate();
  const endDate = options?.endDate || getDefaultEndDate();
  
  const fetchGSCData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Check if user is authenticated with GSC API
      const isAuthenticated = await checkGSCAuthentication();
      
      if (!isAuthenticated) {
        setData({
          metrics: [],
          topQueries: [],
          topPages: [],
          totalClicks: 0,
          totalImpressions: 0,
          averageCTR: 0,
          averagePosition: 0,
          clicksChange: '0',
          impressionsChange: '0', 
          positionChange: '0',
          isAuthenticated: false
        });
        return;
      }
      
      // For now we'll use mock data until authentication is set up
      // In production, this would be replaced with actual API calls
      // Import mock data temporarily
      const { mockSearchData, topPages, topQueries } = await import('@/components/seo/gsc-overview/mockData');
      
      // Calculate metrics from the mock data
      const totalClicks = mockSearchData.reduce((sum, day) => sum + day.clicks, 0);
      const totalImpressions = mockSearchData.reduce((sum, day) => sum + day.impressions, 0);
      const averageCTR = (totalClicks / totalImpressions * 100).toFixed(1);
      const averagePosition = (mockSearchData.reduce((sum, day) => sum + day.position, 0) / mockSearchData.length).toFixed(1);
      
      // Calculate changes
      const midPoint = Math.floor(mockSearchData.length / 2);
      const firstHalfClicks = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.clicks, 0);
      const secondHalfClicks = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.clicks, 0);
      const clicksChange = ((secondHalfClicks - firstHalfClicks) / firstHalfClicks * 100).toFixed(1);
      
      const firstHalfImpressions = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.impressions, 0);
      const secondHalfImpressions = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.impressions, 0);
      const impressionsChange = ((secondHalfImpressions - firstHalfImpressions) / firstHalfImpressions * 100).toFixed(1);
      
      const firstHalfAvgPos = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.position, 0) / midPoint;
      const secondHalfAvgPos = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.position, 0) / (mockSearchData.length - midPoint);
      const positionChange = ((firstHalfAvgPos - secondHalfAvgPos) / firstHalfAvgPos * 100).toFixed(1);
      
      // Transform the mock data to match our GSCQueryOrPage interface
      const mappedTopQueries = topQueries.map(query => ({
        name: query.query, // Map 'query' property to 'name'
        clicks: query.clicks,
        impressions: query.impressions,
        ctr: query.ctr,
        position: query.position
      }));

      const mappedTopPages = topPages.map(page => ({
        name: page.page, // Map 'page' property to 'name'
        clicks: page.clicks,
        impressions: page.impressions,
        ctr: page.ctr,
        position: page.position
      }));
      
      setData({
        metrics: mockSearchData,
        topQueries: mappedTopQueries,
        topPages: mappedTopPages,
        totalClicks,
        totalImpressions,
        averageCTR: Number(averageCTR),
        averagePosition: Number(averagePosition),
        clicksChange,
        impressionsChange,
        positionChange,
        isAuthenticated: true
      });
      
    } catch (err) {
      console.error('Error fetching GSC data:', err);
      setError(err as Error);
      toast({
        title: "Error Fetching GSC Data",
        description: "Could not fetch data from Google Search Console. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Check if the user is authenticated with GSC API
  const checkGSCAuthentication = async (): Promise<boolean> => {
    try {
      // In a real implementation, this would check the authentication status
      // with the GSC API. For now, we'll just return true
      return true;
    } catch (error) {
      console.error('Error checking GSC authentication:', error);
      return false;
    }
  };
  
  // Authentication function that will be called when user clicks connect button
  const authenticateWithGSC = async () => {
    try {
      // This is where we'd implement Google OAuth flow
      // For now we'll simulate a successful authentication
      toast({
        title: "GSC Connected Successfully",
        description: "Your Google Search Console account has been connected.",
      });
      
      // After successful authentication, fetch data
      fetchGSCData();
      
      return true;
    } catch (error) {
      console.error('Error authenticating with GSC:', error);
      toast({
        title: "Authentication Failed",
        description: "Could not connect to Google Search Console. Please try again.",
        variant: "destructive"
      });
      return false;
    }
  };
  
  // Helper functions for date handling
  function getDefaultStartDate() {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    return date.toISOString().split('T')[0];
  }
  
  function getDefaultEndDate() {
    const date = new Date();
    return date.toISOString().split('T')[0];
  }
  
  // Fetch data on component mount or when dependencies change
  useEffect(() => {
    fetchGSCData();
  }, [siteUrl, startDate, endDate]);
  
  return {
    data,
    isLoading,
    error,
    refetch: fetchGSCData,
    authenticate: authenticateWithGSC
  };
};

export default useGSCData;
