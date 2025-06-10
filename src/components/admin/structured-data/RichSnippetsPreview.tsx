
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Star } from 'lucide-react';

interface RichSnippetsPreviewProps {
  url: string;
}

const RichSnippetsPreview: React.FC<RichSnippetsPreviewProps> = ({ url }) => {
  const [previewData, setPreviewData] = useState<any>(null);

  useEffect(() => {
    // Simulate loading FAQ data for preview
    const loadPreviewData = () => {
      const mockData = {
        title: "Frequently Asked Questions - DataOps Group",
        description: "Find answers to common questions about HubSpot optimization, data quality, and marketing operations.",
        url: `https://dataopsgroup.com${url}`,
        faqs: [
          {
            question: "How quickly can you fix our messy HubSpot portal?",
            answer: "The timeline for fixing a messy HubSpot portal depends on several factors..."
          },
          {
            question: "What makes DataOps Group different from other HubSpot consultants?",
            answer: "DataOps Group stands apart from typical HubSpot consultants..."
          }
        ]
      };
      setPreviewData(mockData);
    };

    loadPreviewData();
  }, [url]);

  if (!previewData) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="text-gray-500">Loading preview...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-sm text-gray-600 mb-4">
        Preview of how your FAQ page might appear in Google search results with rich snippets:
      </div>

      <Card className="border-2 border-dashed border-gray-300">
        <CardHeader>
          <CardTitle className="text-sm text-gray-500">Google Search Results Preview</CardTitle>
        </CardHeader>
        <CardContent className="bg-white">
          {/* Main search result */}
          <div className="mb-4">
            <div className="text-blue-600 hover:underline cursor-pointer text-lg">
              {previewData.title}
            </div>
            <div className="text-green-700 text-sm">
              {previewData.url}
            </div>
            <div className="text-gray-700 text-sm mt-1">
              {previewData.description}
            </div>
          </div>

          {/* FAQ Rich Snippets */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-3 py-2 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  FAQ
                </Badge>
                <span className="text-sm text-gray-600">
                  Frequently Asked Questions
                </span>
              </div>
            </div>
            
            {previewData.faqs.slice(0, 3).map((faq: any, index: number) => (
              <div key={index} className="border-b border-gray-100 last:border-b-0">
                <div className="p-3 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {faq.question}
                      </div>
                      <div className="text-sm text-gray-600 line-clamp-2">
                        {faq.answer.slice(0, 120)}...
                      </div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                  </div>
                </div>
              </div>
            ))}
            
            {previewData.faqs.length > 3 && (
              <div className="p-3 bg-gray-50 text-center">
                <span className="text-sm text-gray-600">
                  +{previewData.faqs.length - 3} more questions
                </span>
              </div>
            )}
          </div>

          {/* Additional elements that might appear */}
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>4.9</span>
            </div>
            <div>Expert HubSpot Consulting</div>
            <div>•</div>
            <div>Free Consultation</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Rich Snippets Benefits</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Increased visibility in search results</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Higher click-through rates (up to 30% increase)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>More prominent placement in search results</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Enhanced user experience with expandable answers</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RichSnippetsPreview;
