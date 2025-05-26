
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const SEOBestPractices: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Image SEO Best Practices</CardTitle>
        <CardDescription>Follow these guidelines to improve your images for SEO</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Technical Optimization</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Compress images to under 200KB when possible</li>
              <li>Use WebP format for better compression</li>
              <li>Implement responsive images using srcset</li>
              <li>Set proper width and height attributes</li>
              <li>Lazy-load images below the fold</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Content Optimization</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use descriptive, keyword-rich filenames</li>
              <li>Write detailed alt text for every image</li>
              <li>Add captions when contextually relevant</li>
              <li>Use structured data for product images</li>
              <li>Include images in your XML sitemap</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SEOBestPractices;
