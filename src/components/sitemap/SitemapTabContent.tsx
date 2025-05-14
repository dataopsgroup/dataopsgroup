
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, CheckCircle, Download } from 'lucide-react';

interface SitemapTabContentProps {
  sitemap: string;
  tabKey: string;
}

const SitemapTabContent: React.FC<SitemapTabContentProps> = ({ sitemap, tabKey }) => {
  const [copied, setCopied] = useState(false);
  
  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(sitemap);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Handle download as file
  const handleDownload = () => {
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Set the file name based on the tabKey
    let filename = 'sitemap-index.xml';
    if (tabKey === 'main') filename = 'main-sitemap.xml';
    if (tabKey === 'services') filename = 'services-sitemap.xml';
    if (tabKey === 'blog') filename = 'blog-sitemap.xml';
    if (tabKey === 'caseStudies') filename = 'case-studies-sitemap.xml';
    
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 my-4">
        <Button onClick={handleCopy} className="flex items-center gap-2" disabled={copied}>
          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied!' : 'Copy XML'}
        </Button>
        
        <Button onClick={handleDownload} className="flex items-center gap-2" variant="outline">
          <Download className="h-4 w-4" />
          Download {tabKey === 'index' ? 'Sitemap Index' : tabKey} XML
        </Button>
      </div>
      
      <Textarea 
        value={sitemap} 
        rows={20}
        className="font-mono text-sm"
        readOnly
      />
    </div>
  );
};

export default SitemapTabContent;
