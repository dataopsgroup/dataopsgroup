
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface GSCEmptyStateProps {
  onConnect: () => void;
  isConnecting: boolean;
}

const GSCEmptyState: React.FC<GSCEmptyStateProps> = ({ onConnect, isConnecting }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="rounded-full bg-gray-100 p-3 mb-4">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-500"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">Connect Google Search Console</h3>
      <p className="text-gray-500 mb-6 max-w-md">
        Connect your Google Search Console account to view your website's search performance metrics.
      </p>
      <Button onClick={onConnect} disabled={isConnecting}>
        {isConnecting ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Connecting...
          </>
        ) : (
          'Connect Google Search Console'
        )}
      </Button>
    </div>
  );
};

export default GSCEmptyState;
