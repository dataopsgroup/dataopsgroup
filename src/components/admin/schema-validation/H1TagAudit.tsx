
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Play, 
  Wrench,
  ExternalLink 
} from 'lucide-react';
import { useH1Audit, H1AuditResult, H1Issue } from '@/services/h1AuditService';

const H1TagAudit: React.FC = () => {
  const [auditResult, setAuditResult] = useState<H1AuditResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isFixing, setIsFixing] = useState(false);

  const { runH1Audit, fixH1Issues } = useH1Audit();

  const handleRunAudit = async () => {
    setIsRunning(true);
    try {
      const result = await runH1Audit();
      setAuditResult(result);
    } catch (error) {
      console.error('H1 audit failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const handleFixIssues = async () => {
    if (!auditResult?.issues) return;
    
    setIsFixing(true);
    try {
      await fixH1Issues(auditResult.issues);
      // Refresh audit after fixing
      const refreshedResult = await runH1Audit();
      setAuditResult(refreshedResult);
    } catch (error) {
      console.error('Failed to fix H1 issues:', error);
    } finally {
      setIsFixing(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getIssueIcon = (issue: string) => {
    switch (issue) {
      case 'missing': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'empty': return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      case 'multiple': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'non_descriptive': return <AlertTriangle className="h-4 w-4 text-blue-600" />;
      default: return <XCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            H1 Tag Audit & Fix
          </CardTitle>
        </CardHeader>
        <CardContent>
          {(isRunning || isFixing) && (
            <Alert className="mb-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                {isRunning ? 'Running H1 tag audit...' : 'Fixing H1 tag issues...'}
                <Progress className="mt-2" />
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">H1 Tag Health Check</h3>
              <p className="text-sm text-gray-600">
                Identify and fix H1 tag issues affecting your SEO performance
              </p>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={handleRunAudit}
                disabled={isRunning || isFixing}
                className="flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Run Audit
              </Button>
              {auditResult?.issues && auditResult.issues.length > 0 && (
                <Button 
                  onClick={handleFixIssues}
                  disabled={isRunning || isFixing}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Wrench className="h-4 w-4" />
                  Fix All Issues
                </Button>
              )}
            </div>
          </div>

          {auditResult && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {auditResult.totalPages}
                    </div>
                    <div className="text-sm text-gray-600">Total Pages</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold text-red-600">
                      {auditResult.pagesWithIssues}
                    </div>
                    <div className="text-sm text-gray-600">Pages with Issues</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold text-green-600">
                      {Math.round(((auditResult.totalPages - auditResult.pagesWithIssues) / auditResult.totalPages) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600">H1 Compliance</div>
                  </CardContent>
                </Card>
              </div>

              {auditResult.issues.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Issues Found:</h4>
                  {auditResult.issues.map((issue) => (
                    <Card key={issue.id} className="border-l-4 border-l-red-500">
                      <CardContent className="pt-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getIssueIcon(issue.issue)}
                              <span className="font-medium">{issue.url}</span>
                              <Badge className={getPriorityColor(issue.priority)}>
                                {issue.priority} priority
                              </Badge>
                            </div>
                            
                            <div className="space-y-2 text-sm">
                              <div>
                                <span className="font-medium">Issue: </span>
                                <span className="text-gray-600">
                                  {issue.issue === 'missing' && 'H1 tag is missing'}
                                  {issue.issue === 'empty' && 'H1 tag is empty'}
                                  {issue.issue === 'multiple' && 'Multiple H1 tags found'}
                                  {issue.issue === 'non_descriptive' && 'H1 tag is not descriptive enough'}
                                </span>
                              </div>
                              
                              {issue.currentH1 && (
                                <div>
                                  <span className="font-medium">Current H1: </span>
                                  <span className="text-gray-600">"{issue.currentH1}"</span>
                                </div>
                              )}
                              
                              {issue.suggestedH1 && (
                                <div>
                                  <span className="font-medium">Suggested H1: </span>
                                  <span className="text-green-600">"{issue.suggestedH1}"</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => window.open(issue.url, '_blank')}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {auditResult.issues.length === 0 && (
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Great! No H1 tag issues found. All pages have proper H1 tags.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default H1TagAudit;
