
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, ExternalLink, Loader2 } from 'lucide-react';
import { validateFAQSchema, validateAllFAQPages, isBulkResult, isSingleResult } from '@/utils/schema-validation';
import { FAQValidationResult, BulkValidationResult } from '@/types/structured-data';
import { FAQ_URLS } from '@/constants/faq-validation';
import { useToast } from '@/hooks/use-toast';

interface FAQSchemaValidatorProps {
  onValidationComplete: (results: FAQValidationResult | BulkValidationResult) => void;
  selectedUrl: string;
  onUrlChange: (url: string) => void;
}

/**
 * Professional FAQ Schema Validator component
 * Provides validation capabilities with proper error handling and user feedback
 */
const FAQSchemaValidator: React.FC<FAQSchemaValidatorProps> = ({
  onValidationComplete,
  selectedUrl,
  onUrlChange
}) => {
  const [isValidating, setIsValidating] = useState(false);
  const [lastValidation, setLastValidation] = useState<FAQValidationResult | BulkValidationResult | null>(null);
  const { toast } = useToast();

  const handleValidation = useCallback(async () => {
    if (!selectedUrl.trim()) {
      toast({
        title: "Validation Error",
        description: "Please select or enter a valid URL",
        variant: "destructive"
      });
      return;
    }

    setIsValidating(true);
    try {
      const results = await validateFAQSchema(selectedUrl);
      setLastValidation(results);
      onValidationComplete(results);
      
      toast({
        title: "Validation Complete",
        description: `Found ${results.faqCount} FAQ items with ${results.errors.length} errors`,
        variant: results.isValid ? "default" : "destructive"
      });
    } catch (error) {
      console.error('Validation error:', error);
      toast({
        title: "Validation Failed",
        description: "An error occurred while validating the schema",
        variant: "destructive"
      });
    } finally {
      setIsValidating(false);
    }
  }, [selectedUrl, onValidationComplete, toast]);

  const handleBulkValidation = useCallback(async () => {
    setIsValidating(true);
    try {
      const bulkResults = await validateAllFAQPages();
      setLastValidation(bulkResults);
      onValidationComplete(bulkResults);
      
      toast({
        title: "Bulk Validation Complete",
        description: `Validated ${bulkResults.results.length} pages with ${bulkResults.summary.totalErrors} total errors`,
        variant: bulkResults.summary.totalErrors === 0 ? "default" : "destructive"
      });
    } catch (error) {
      console.error('Bulk validation error:', error);
      toast({
        title: "Bulk Validation Failed",
        description: "An error occurred while validating all FAQ pages",
        variant: "destructive"
      });
    } finally {
      setIsValidating(false);
    }
  }, [onValidationComplete, toast]);

  const openGoogleRichResultsTest = useCallback(() => {
    const baseUrl = window.location.origin;
    const testUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(baseUrl + selectedUrl)}`;
    window.open(testUrl, '_blank', 'noopener,noreferrer');
  }, [selectedUrl]);

  const getUrlDisplayName = (url: string): string => {
    if (url === '/faqs') return 'Main FAQ Page';
    return url.replace('/faqs/', '').replace('-', ' ').toUpperCase();
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
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isValidating}
          >
            {FAQ_URLS.map(url => (
              <option key={url} value={url}>
                {getUrlDisplayName(url)}
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
            disabled={isValidating}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={handleValidation}
          disabled={isValidating || !selectedUrl.trim()}
          className="flex items-center gap-2"
        >
          {isValidating && <Loader2 className="h-4 w-4 animate-spin" />}
          {isValidating ? 'Validating...' : 'Validate Schema'}
        </Button>
        
        <Button 
          variant="outline"
          onClick={handleBulkValidation}
          disabled={isValidating}
          className="flex items-center gap-2"
        >
          {isValidating && <Loader2 className="h-4 w-4 animate-spin" />}
          Validate All FAQ Pages
        </Button>
        
        <Button 
          variant="outline"
          onClick={openGoogleRichResultsTest}
          className="flex items-center gap-2"
          disabled={!selectedUrl.trim()}
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
              {isBulkResult(lastValidation) ? (
                <Badge variant={lastValidation.summary.totalErrors === 0 ? "default" : "destructive"}>
                  {lastValidation.summary.totalErrors === 0 ? (
                    <><CheckCircle className="h-3 w-3 mr-1" />All Valid</>
                  ) : (
                    <><XCircle className="h-3 w-3 mr-1" />Issues Found</>
                  )}
                </Badge>
              ) : (
                <Badge variant={isSingleResult(lastValidation) && lastValidation.isValid ? "default" : "destructive"}>
                  {isSingleResult(lastValidation) && lastValidation.isValid ? (
                    <><CheckCircle className="h-3 w-3 mr-1" />Valid</>
                  ) : (
                    <><XCircle className="h-3 w-3 mr-1" />Issues Found</>
                  )}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isBulkResult(lastValidation) ? (
              <div className="space-y-2">
                <p className="text-sm text-gray-600 mb-3">
                  Tested {lastValidation.results.length} FAQ pages
                </p>
                {lastValidation.results.map((result, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm">{getUrlDisplayName(lastValidation.urls[index])}</span>
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
                    {isSingleResult(lastValidation) ? lastValidation.faqCount : 0}
                  </div>
                  <div className="text-sm text-gray-600">FAQ Items Found</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">
                    {isSingleResult(lastValidation) ? lastValidation.errors?.length || 0 : 0}
                  </div>
                  <div className="text-sm text-gray-600">Errors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">
                    {isSingleResult(lastValidation) ? lastValidation.warnings?.length || 0 : 0}
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

export default React.memo(FAQSchemaValidator);
