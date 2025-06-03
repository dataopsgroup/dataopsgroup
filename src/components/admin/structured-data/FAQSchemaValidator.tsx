
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { validateFAQSchema } from '@/utils/schema-validation';

interface FAQSchemaValidatorProps {
  onValidationComplete: (results: any) => void;
  selectedUrl: string;
  onUrlChange: (url: string) => void;
}

const FAQSchemaValidator: React.FC<FAQSchemaValidatorProps> = ({
  onValidationComplete,
  selectedUrl,
  onUrlChange
}) => {
  const [isValidating, setIsValidating] = useState(false);
  const [lastValidation, setLastValidation] = useState<any>(null);

  const faqUrls = [
    '/faqs',
    '/faqs/hubspot-services',
    '/faqs/hubspot-experts',
    '/faqs/data-quality',
    '/faqs/our-approach',
    '/faqs/hubspot-modules'
  ];

  const handleValidation = async () => {
    setIsValidating(true);
    try {
      const results = await validateFAQSchema(selectedUrl);
      setLastValidation(results);
      onValidationComplete(results);
    } catch (error) {
      console.error('Validation error:', error);
    } finally {
      setIsValidating(false);
    }
  };

  const handleBulkValidation = async () => {
    setIsValidating(true);
    try {
      const bulkResults = await Promise.all(
        faqUrls.map(url => validateFAQSchema(url))
      );
      const combinedResults = {
        isBulk: true,
        results: bulkResults,
        urls: faqUrls
      };
      setLastValidation(combinedResults);
      onValidationComplete(combinedResults);
    } catch (error) {
      console.error('Bulk validation error:', error);
    } finally {
      setIsValidating(false);
    }
  };

  const openGoogleRichResultsTest = () => {
    const baseUrl = window.location.origin;
    const testUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(baseUrl + selectedUrl)}`;
    window.open(testUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="url-select">Select FAQ Page</Label>
          <select
            id="url-select"
            value={selectedUrl}
            onChange={(e) => onUrlChange(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
          >
            {faqUrls.map(url => (
              <option key={url} value={url}>
                {url === '/faqs' ? 'Main FAQ Page' : url.replace('/faqs/', '').replace('-', ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <Label htmlFor="custom-url">Or Enter Custom URL</Label>
          <Input
            id="custom-url"
            placeholder="/custom-faq-page"
            value={selectedUrl}
            onChange={(e) => onUrlChange(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={handleValidation}
          disabled={isValidating}
          className="flex items-center gap-2"
        >
          {isValidating ? 'Validating...' : 'Validate Schema'}
        </Button>
        
        <Button 
          variant="outline"
          onClick={handleBulkValidation}
          disabled={isValidating}
        >
          Validate All FAQ Pages
        </Button>
        
        <Button 
          variant="outline"
          onClick={openGoogleRichResultsTest}
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          Google Rich Results Test
        </Button>
      </div>

      {lastValidation && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Quick Results
              {lastValidation.isValid ? (
                <Badge variant="default" className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Valid
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="h-3 w-3 mr-1" />
                  Issues Found
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {lastValidation.isBulk ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 mb-3">
                  Tested {lastValidation.results.length} FAQ pages
                </p>
                {lastValidation.results.map((result: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">{lastValidation.urls[index]}</span>
                    {result.isValid ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {lastValidation.faqCount || 0}
                  </div>
                  <div className="text-sm text-gray-600">FAQ Items Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {lastValidation.errors?.length || 0}
                  </div>
                  <div className="text-sm text-gray-600">Errors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {lastValidation.warnings?.length || 0}
                  </div>
                  <div className="text-sm text-gray-600">Warnings</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FAQSchemaValidator;
