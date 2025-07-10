/**
 * Google Search Console Validation Dashboard
 * Monitors GSC compliance and validates sitemap consistency
 */

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  RefreshCw, 
  Download,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { generateGSCValidationReport, validateSitemapCompleteness } from '@/utils/gsc-sitemap-validation';
import { generateAllSitemaps } from '@/utils/sitemap-utils';

interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  missingUrls: string[];
  extraUrls: string[];
  timestamp: string;
  summary: string;
}

const GSCValidationDashboard: React.FC = () => {
  const [report, setReport] = useState<ValidationReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sitemapData, setSitemapData] = useState<any>(null);

  const runValidation = async () => {
    setIsLoading(true);
    try {
      // Run GSC validation
      const validationReport = generateGSCValidationReport();
      setReport(validationReport);
      
      // Generate current sitemap data
      const sitemaps = generateAllSitemaps('https://dataopsgroup.com');
      setSitemapData(sitemaps);
      
    } catch (error) {
      console.error('Validation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadSitemap = (type: string, content: string) => {
    const blob = new Blob([content], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}-sitemap.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    runValidation();
  }, []);

  const getStatusIcon = (isValid: boolean) => {
    return isValid ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    );
  };

  const getStatusBadge = (isValid: boolean) => {
    return (
      <Badge variant={isValid ? "success" : "destructive"} className="ml-2">
        {isValid ? "PASS" : "FAIL"}
      </Badge>
    );
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">GSC Validation Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor Google Search Console compliance and sitemap health
          </p>
        </div>
        <Button onClick={runValidation} disabled={isLoading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Validating...' : 'Refresh Validation'}
        </Button>
      </div>

      {report && (
        <Alert className={report.isValid ? "border-green-500" : "border-red-500"}>
          <div className="flex items-center">
            {getStatusIcon(report.isValid)}
            <AlertDescription className="ml-2">
              {report.summary}
              {getStatusBadge(report.isValid)}
            </AlertDescription>
          </div>
        </Alert>
      )}

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="errors">Errors & Warnings</TabsTrigger>
          <TabsTrigger value="sitemaps">Sitemaps</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Validation Status
                </CardTitle>
                {report && getStatusIcon(report.isValid)}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {report?.isValid ? 'COMPLIANT' : 'FAILED'}
                </div>
                <p className="text-xs text-muted-foreground">
                  Last checked: {report?.timestamp && new Date(report.timestamp).toLocaleTimeString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Critical Errors
                </CardTitle>
                <XCircle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {report?.errors.length || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  Must be fixed for GSC compliance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Warnings
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">
                  {report?.warnings.length || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  Recommendations for improvement
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Missing URLs
                </CardTitle>
                <MapPin className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {report?.missingUrls.length || 0}
                </div>
                <p className="text-xs text-muted-foreground">
                  URLs not in sitemap but should be
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="errors" className="space-y-4">
          <div className="grid gap-4">
            {report?.errors.length ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Critical Errors</CardTitle>
                  <CardDescription>
                    These issues will cause GSC validation failures and must be fixed
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {report.errors.map((error, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                        <span className="text-sm">{error}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span>No critical errors found!</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {report?.warnings.length ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-yellow-600">Warnings</CardTitle>
                  <CardDescription>
                    Recommendations to improve SEO and GSC compliance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {report.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                        <span className="text-sm">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}

            {report?.missingUrls.length ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Missing URLs</CardTitle>
                  <CardDescription>
                    Canonical URLs that should be added to the sitemap
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {report.missingUrls.map((url, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-blue-500 mt-0.5" />
                        <span className="text-sm font-mono">{url}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </TabsContent>

        <TabsContent value="sitemaps" className="space-y-4">
          {sitemapData && (
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Sitemaps</CardTitle>
                  <CardDescription>
                    Current sitemap files and their contents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(sitemapData).map(([type, content]) => (
                      <div key={type} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">{type.charAt(0).toUpperCase() + type.slice(1)} Sitemap</h3>
                          <p className="text-sm text-muted-foreground">
                            {type === 'index' ? 'Sitemap index file' : `${type} specific URLs`}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => downloadSitemap(type, content as string)}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const url = `https://dataopsgroup.com/sitemaps/${type === 'index' ? 'sitemap-index' : `${type}-sitemap`}.xml`;
                              window.open(url, '_blank');
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Live
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>GSC Monitoring Setup</CardTitle>
              <CardDescription>
                Instructions for ongoing Google Search Console monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Next Steps:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Submit updated sitemap to Google Search Console</li>
                  <li>• Monitor URL validation status in GSC</li>
                  <li>• Set up alerts for new validation failures</li>
                  <li>• Run this validation before each deployment</li>
                </ul>
              </div>
              <div className="pt-4">
                <Button
                  onClick={() => window.open('https://search.google.com/search-console', '_blank')}
                  className="w-full"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Open Google Search Console
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GSCValidationDashboard;