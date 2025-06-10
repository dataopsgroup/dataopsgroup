
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';
import { 
  runLinkValidation, 
  getBrokenLinks, 
  getPagesWithNoOutboundLinks,
  type LinkValidationResult 
} from '@/utils/link-validator';
import { getPagesNeedingLinks } from '@/utils/strategic-links';

const LinkHealthMonitor = () => {
  const [validationResults, setValidationResults] = useState<LinkValidationResult[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [lastValidation, setLastValidation] = useState<Date | null>(null);

  const runValidation = async () => {
    setIsValidating(true);
    try {
      const results = runLinkValidation();
      setValidationResults(results);
      setLastValidation(new Date());
    } catch (error) {
      console.error('Link validation failed:', error);
    } finally {
      setIsValidating(false);
    }
  };

  useEffect(() => {
    runValidation();
  }, []);

  const brokenLinks = getBrokenLinks(validationResults);
  const pagesNeedingLinks = getPagesNeedingLinks();
  const pagesWithNoOutbound = getPagesWithNoOutboundLinks();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Link Health Monitor</h2>
        <Button 
          onClick={runValidation} 
          disabled={isValidating}
          className="flex items-center gap-2"
        >
          <RefreshCw className={`h-4 w-4 ${isValidating ? 'animate-spin' : ''}`} />
          {isValidating ? 'Validating...' : 'Run Validation'}
        </Button>
      </div>

      {lastValidation && (
        <p className="text-sm text-gray-600">
          Last validation: {lastValidation.toLocaleString()}
        </p>
      )}

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              {brokenLinks.length === 0 ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              )}
              Broken Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {brokenLinks.length}
            </div>
            <p className="text-sm text-gray-600">
              {brokenLinks.length === 0 ? 'All links working' : 'Links need fixing'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-blue-500" />
              Pages Without Outbound Links
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {pagesWithNoOutbound.length}
            </div>
            <p className="text-sm text-gray-600">
              Pages missing link equity
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">
              Total Links Checked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {validationResults.length}
            </div>
            <p className="text-sm text-gray-600">
              Navigation and key links
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Broken Links Details */}
      {brokenLinks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-red-700">Broken Links Found</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {brokenLinks.map((link, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{link.url}</div>
                    <div className="text-sm text-gray-600">Component: {link.component}</div>
                    {link.issue && (
                      <div className="text-sm text-red-600">Issue: {link.issue}</div>
                    )}
                    {link.isExternal && (
                      <Badge variant="outline" className="mt-1">External</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pages Needing Outbound Links */}
      {pagesWithNoOutbound.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-yellow-700">Pages Without Outbound Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {pagesWithNoOutbound.map((page, index) => (
                <div key={index} className="flex items-center gap-3 p-2 bg-yellow-50 rounded">
                  <ExternalLink className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium">{page}</span>
                  {pagesNeedingLinks.includes(page) && (
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Fix Available
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Links Status */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">All Navigation Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {validationResults.map((link, index) => (
              <div key={index} className="flex items-center justify-between p-2 border rounded">
                <div className="flex items-center gap-2">
                  {link.isValid ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                  <span className="font-medium">{link.url}</span>
                  {link.isExternal && (
                    <Badge variant="outline">External</Badge>
                  )}
                </div>
                <Badge variant={link.isValid ? "default" : "destructive"}>
                  {link.isValid ? 'OK' : 'Error'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkHealthMonitor;
