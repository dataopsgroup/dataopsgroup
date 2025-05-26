
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface SEOScoreCardProps {
  seoScore: number;
  totalImages: number;
  errorsCount: number;
  warningsCount: number;
  successCount: number;
}

const SEOScoreCard: React.FC<SEOScoreCardProps> = ({
  seoScore,
  totalImages,
  errorsCount,
  warningsCount,
  successCount
}) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Image SEO Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">{seoScore}%</div>
          <div className="flex items-center space-x-1">
            <Badge variant={seoScore >= 80 ? "secondary" : seoScore >= 60 ? "default" : "destructive"}>
              {seoScore >= 80 ? 'Good' : seoScore >= 60 ? 'Needs Improvement' : 'Poor'}
            </Badge>
          </div>
        </div>
        <div className="mt-4 flex justify-around text-center">
          <div>
            <div className="text-sm font-medium text-gray-500">Total</div>
            <div className="text-xl font-bold">{totalImages}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-red-500">Errors</div>
            <div className="text-xl font-bold">{errorsCount}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-amber-500">Warnings</div>
            <div className="text-xl font-bold">{warningsCount}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-green-500">Optimal</div>
            <div className="text-xl font-bold">{successCount}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOScoreCard;
