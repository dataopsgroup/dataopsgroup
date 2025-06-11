
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { useValidation } from '@/hooks/useValidation';
import { FAQValidationResult, BulkValidationResult } from '@/types/structured-data';

const FAQSchemaValidator: React.FC = () => {
  const [validationResults, setValidationResults] = useState<FAQValidationResult | BulkValidationResult | null>(null);
  
  const { isValidating, handleValidation, handleBulkValidation } = useValidation({
    onValidationComplete: setValidationResults
  });

  const faqUrls = [
    '/faqs/services',
    '/faqs/data-quality', 
    '/faqs/hubspot-experts',
    '/faqs/our-approach',
    '/faqs/hubspot-modules'
  ];

  const isBulkResult = (result: any): result is BulkValidationResult => {
    return result && 'isBulk' in result;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>FAQ Schema Validation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              onClick={handleBulkValidation}
              disabled={isValidating}
              className="flex items-center gap-2"
            >
              {isValidating ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Validating...
                </>
              ) : (
                'Validate All FAQ Pages'
              )}
            </Button>
            
            {faqUrls.map((url) => (
              <Button
                key={url}
                variant="outline"
                onClick={() => handleValidation(url)}
                disabled={isValidating}
              >
                Test {url.split('/').pop()}
              </Button>
            ))}
          </div>

          {validationResults && (
            <div className="space-y-4">
              {isBulkResult(validationResults) ? (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Bulk Validation Results</h3>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-600">Total Pages</div>
                        <div className="text-xl font-bold">{validationResults.summary.totalPages}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <div className="text-sm text-green-600">Valid Pages</div>
                        <div className="text-xl font-bold text-green-600">{validationResults.summary.validPages}</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded">
                        <div className="text-sm text-blue-600">Total FAQs</div>
                        <div className="text-xl font-bold text-blue-600">{validationResults.summary.totalFAQs}</div>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <div className="text-sm text-red-600">Errors</div>
                        <div className="text-xl font-bold text-red-600">{validationResults.summary.totalErrors}</div>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded">
                        <div className="text-sm text-yellow-600">Warnings</div>
                        <div className="text-xl font-bold text-yellow-600">{validationResults.summary.totalWarnings}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {validationResults.results.map((result, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">{result.url}</h4>
                            <Badge variant={result.isValid ? "default" : "destructive"}>
                              {result.isValid ? (
                                <><CheckCircle className="h-3 w-3 mr-1" /> Valid</>
                              ) : (
                                <><XCircle className="h-3 w-3 mr-1" /> Invalid</>
                              )}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.faqCount} FAQ items • {result.validItems} valid
                          </div>
                          {result.errors.length > 0 && (
                            <div className="mt-2">
                              <div className="text-sm font-medium text-red-600 mb-1">Errors:</div>
                              {result.errors.map((error, errorIndex) => (
                                <div key={errorIndex} className="text-sm text-red-600 ml-2">
                                  • {error.message}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Single Page Validation</h3>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{validationResults.url}</h4>
                      <Badge variant={validationResults.isValid ? "default" : "destructive"}>
                        {validationResults.isValid ? (
                          <><CheckCircle className="h-3 w-3 mr-1" /> Valid</>
                        ) : (
                          <><XCircle className="h-3 w-3 mr-1" /> Invalid</>
                        )}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      {validationResults.faqCount} FAQ items • {validationResults.validItems} valid
                    </div>
                    
                    {validationResults.errors.length > 0 && (
                      <div className="mb-3">
                        <div className="text-sm font-medium text-red-600 mb-1">Errors:</div>
                        {validationResults.errors.map((error, index) => (
                          <div key={index} className="text-sm text-red-600 ml-2 mb-1">
                            • {error.message}
                            <div className="text-xs text-red-500 ml-2">{error.fix}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {validationResults.warnings.length > 0 && (
                      <div className="mb-3">
                        <div className="text-sm font-medium text-yellow-600 mb-1">Warnings:</div>
                        {validationResults.warnings.map((warning, index) => (
                          <div key={index} className="text-sm text-yellow-600 ml-2">
                            • {warning.message}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {validationResults.recommendations.length > 0 && (
                      <div>
                        <div className="text-sm font-medium text-blue-600 mb-1">Recommendations:</div>
                        {validationResults.recommendations.map((rec, index) => (
                          <div key={index} className="text-sm text-blue-600 ml-2">
                            • {rec}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQSchemaValidator;
