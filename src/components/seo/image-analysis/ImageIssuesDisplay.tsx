
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChevronRight as AlertTriangle, CircleCheck as CheckCircle } from 'lucide-react';
import { ImageIssue } from './types';

interface ImageIssuesDisplayProps {
  filteredImages: ImageIssue[];
  filter: 'all' | 'errors' | 'warnings' | 'success';
  setFilter: React.Dispatch<React.SetStateAction<'all' | 'errors' | 'warnings' | 'success'>>;
  renderStatusIcon: (status: 'error' | 'warning' | 'success', fixed?: boolean) => JSX.Element;
}

const ImageIssuesDisplay: React.FC<ImageIssuesDisplayProps> = ({
  filteredImages,
  filter,
  setFilter,
  renderStatusIcon
}) => {
  return (
    <Card className="md:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle>Images with Issues</CardTitle>
        <CardDescription>
          Filter: 
          <button 
            onClick={() => setFilter('all')} 
            className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'all' ? 'bg-gray-200' : ''}`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('errors')} 
            className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'errors' ? 'bg-red-100' : ''}`}
          >
            Errors
          </button>
          <button 
            onClick={() => setFilter('warnings')} 
            className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'warnings' ? 'bg-amber-100' : ''}`}
          >
            Warnings
          </button>
          <button 
            onClick={() => setFilter('success')} 
            className={`ml-2 px-2 py-1 rounded text-sm ${filter === 'success' ? 'bg-green-100' : ''}`}
          >
            Optimal
          </button>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No images found with the selected filter.</p>
            </div>
          ) : (
            filteredImages.map((image, index) => (
              <Alert key={index} className={`
                ${image.fixed ? 'border-green-500 bg-green-50' : ''}
                ${!image.fixed && image.status === 'error' ? 'border-red-500 bg-red-50' : ''}
                ${!image.fixed && image.status === 'warning' ? 'border-amber-500 bg-amber-50' : ''}
                ${!image.fixed && image.status === 'success' ? 'border-green-500 bg-green-50' : ''}
              `}>
                <div className="flex items-start">
                  {renderStatusIcon(image.status, image.fixed)}
                  <div className="ml-3 flex-1">
                    <AlertTitle className="font-medium text-sm">{image.url.split('/').pop()}</AlertTitle>
                    <AlertDescription className="text-sm">
                      <div className="mt-1 text-xs font-medium text-gray-500">Page: {image.page}</div>
                      <ul className="mt-1 list-disc pl-5 space-y-1">
                        {image.issues.map((issue, i) => (
                          <li key={i} className="text-xs">{issue}</li>
                        ))}
                      </ul>
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageIssuesDisplay;
