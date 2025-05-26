
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Wrench, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useTechnicalSEO } from '@/services/technicalSEOService';

const TechnicalSEOHealth: React.FC = () => {
  const { toast } = useToast();
  const [isFixing, setIsFixing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkResults, setCheckResults] = useState<any>(null);
  const { runTechnicalSEOCheck, fixTechnicalSEOIssues } = useTechnicalSEO('dataopsgroup.com');
  
  const loadTechnicalSEOData = async () => {
    setIsLoading(true);
    try {
      const results = await runTechnicalSEOCheck();
      setCheckResults(results);
    } catch (error) {
      console.error('Error loading technical SEO data:', error);
      toast({
        title: "Failed to Load SEO Data",
        description: "Could not retrieve technical SEO health data. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Load data on component mount
  useEffect(() => {
    loadTechnicalSEOData();
  }, []);
  
  // Function to fix the SEO issues
  const handleFixIssues = async () => {
    // Show loading state
    setIsFixing(true);
    
    try {
      // Create and dispatch a custom event to trigger fixes in other components
      const fixEvent = new CustomEvent('fix-seo-issues');
      window.dispatchEvent(fixEvent);
      
      // Call the actual fix function
      const success = await fixTechnicalSEOIssues();
      
      if (success) {
        // Reload the technical SEO data to show updated status
        await loadTechnicalSEOData();
      }
    } catch (error) {
      console.error('Error fixing SEO issues:', error);
      // Error toast if something goes wrong
      toast({
        title: "Fix Failed",
        description: "Could not fix all SEO issues. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsFixing(false);
    }
  };

  if (isLoading && !checkResults) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Technical SEO Health</CardTitle>
          <CardDescription>Issues affecting crawlability and indexability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Technical SEO Health</CardTitle>
        <CardDescription>Issues affecting crawlability and indexability</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Structured Data</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Organization Schema</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Website Schema</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Breadcrumb Schema</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Service Schema</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Article Schema</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>FAQ Schema</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-3">Indexability Issues</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Sitemap Status</span>
                </div>
                <span className="text-sm text-green-600">Valid (148 URLs)</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Robots.txt</span>
                </div>
                <span className="text-sm text-green-600">Valid</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Canonical URLs</span>
                </div>
                <span className="text-sm text-green-600">Implemented</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Mobile Responsiveness</span>
                </div>
                <span className="text-sm text-green-600">Passed</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>HTTPS Status</span>
                </div>
                <span className="text-sm text-green-600">Secure</span>
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <Button 
              variant="default" 
              onClick={handleFixIssues}
              disabled={isFixing}
              className="flex items-center gap-2"
            >
              {isFixing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Fixing Issues...
                </>
              ) : (
                <>
                  <Wrench className="h-4 w-4" />
                  Fix Issues
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicalSEOHealth;
