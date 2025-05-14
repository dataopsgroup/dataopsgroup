
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface SitemapControlsProps {
  onGenerateAll: () => void;
  onDownloadAll: () => void;
}

const SitemapControls: React.FC<SitemapControlsProps> = ({ onGenerateAll, onDownloadAll }) => {
  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Button onClick={onGenerateAll} variant="secondary" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Refresh Sitemaps
        </Button>
        
        <Button onClick={onDownloadAll} className="flex items-center gap-2" variant="outline">
          <Download className="h-4 w-4" />
          Download All Sitemaps
        </Button>
      </div>
      
      <Alert>
        <AlertDescription>
          <p className="text-sm">
            These modular sitemaps make maintenance easier. After downloading, upload them to your web server's
            <code className="bg-muted p-1 rounded mx-1">sitemaps/</code> 
            directory (create it if needed) and ensure the main
            <code className="bg-muted p-1 rounded mx-1">sitemap.xml</code>
            references them correctly.
          </p>
        </AlertDescription>
      </Alert>
    </>
  );
};

export default SitemapControls;
