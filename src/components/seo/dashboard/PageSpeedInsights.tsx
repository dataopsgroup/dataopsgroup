
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { useRealPageSpeedData } from '@/hooks/useRealPageSpeedData';
import { Loader2 } from 'lucide-react';

interface PageSpeedInsightsProps {
  siteUrl?: string;
}

const PageSpeedInsights: React.FC<PageSpeedInsightsProps> = ({ siteUrl = 'dataopsgroup.com' }) => {
  const [inputUrl, setInputUrl] = useState(siteUrl);
  const { data, isLoading, analyze } = useRealPageSpeedData();

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const handleAnalyze = () => {
    analyze(inputUrl);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 50) return 'text-amber-500';
    return 'text-red-600';
  };

  const getProgressColor = (score: number) => {
    if (score >= 90) return 'bg-green-600';
    if (score >= 50) return 'bg-amber-500';
    return 'bg-red-600';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>PageSpeed Insights</CardTitle>
        <CardDescription>Performance metrics from Google PageSpeed Insights</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex-1">
            <Input 
              placeholder="Enter URL to analyze" 
              value={inputUrl} 
              onChange={handleUrlChange}
            />
          </div>
          <Button onClick={handleAnalyze} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : 'Analyze'}
          </Button>
        </div>

        {isLoading ? (
          <div className="py-8 text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Analyzing {inputUrl}...</p>
          </div>
        ) : !data ? (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">Enter a URL and click Analyze to view performance data.</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className={`text-2xl font-bold ${getScoreColor(data.performance)}`}>
                  {data.performance}
                </div>
                <div className="text-sm text-muted-foreground">Performance</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className={`text-2xl font-bold ${getScoreColor(data.accessibility)}`}>
                  {data.accessibility}
                </div>
                <div className="text-sm text-muted-foreground">Accessibility</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className={`text-2xl font-bold ${getScoreColor(data.bestPractices)}`}>
                  {data.bestPractices}
                </div>
                <div className="text-sm text-muted-foreground">Best Practices</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className={`text-2xl font-bold ${getScoreColor(data.seo)}`}>
                  {data.seo}
                </div>
                <div className="text-sm text-muted-foreground">SEO</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium mb-2">Core Web Vitals</h3>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">LCP (Largest Contentful Paint)</span>
                  <span className={`text-sm ${getScoreColor(data.lcp.score)}`}>
                    {data.lcp.value} ({data.lcp.unit})
                  </span>
                </div>
                <Progress 
                  value={data.lcp.score} 
                  className={`h-2 ${getProgressColor(data.lcp.score)}`} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">FID (First Input Delay)</span>
                  <span className={`text-sm ${getScoreColor(data.fid.score)}`}>
                    {data.fid.value} ({data.fid.unit})
                  </span>
                </div>
                <Progress 
                  value={data.fid.score} 
                  className={`h-2 ${getProgressColor(data.fid.score)}`} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">CLS (Cumulative Layout Shift)</span>
                  <span className={`text-sm ${getScoreColor(data.cls.score)}`}>
                    {data.cls.value}
                  </span>
                </div>
                <Progress 
                  value={data.cls.score} 
                  className={`h-2 ${getProgressColor(data.cls.score)}`} 
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">INP (Interaction to Next Paint)</span>
                  <span className={`text-sm ${getScoreColor(data.inp.score)}`}>
                    {data.inp.value} ({data.inp.unit})
                  </span>
                </div>
                <Progress 
                  value={data.inp.score} 
                  className={`h-2 ${getProgressColor(data.inp.score)}`} 
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PageSpeedInsights;
