
import React, { useEffect, useState } from 'react';
import { validateCurrentPageUrls } from '@/utils/og-canonical-validator';

interface URLStatus {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  canonicalUrl?: string;
  ogUrl?: string;
  lastCheck: Date;
}

/**
 * Development-only component to monitor canonical/OG URL consistency
 * Shows alerts when mismatches are detected
 */
const OGCanonicalMonitor: React.FC = () => {
  const [urlStatus, setUrlStatus] = useState<URLStatus | null>(null);
  const [showMonitor, setShowMonitor] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;
    
    setShowMonitor(true);
    checkUrls();
    
    // Check URLs periodically
    const interval = setInterval(checkUrls, 5000);
    return () => clearInterval(interval);
  }, []);

  const checkUrls = () => {
    const validation = validateCurrentPageUrls();
    setUrlStatus({
      ...validation,
      lastCheck: new Date()
    });
  };

  if (!showMonitor || !urlStatus) return null;

  const getStatusColor = () => {
    if (urlStatus.errors.length > 0) return 'bg-red-500';
    if (urlStatus.warnings.length > 0) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusText = () => {
    if (urlStatus.errors.length > 0) return `${urlStatus.errors.length} URL Errors`;
    if (urlStatus.warnings.length > 0) return `${urlStatus.warnings.length} URL Warnings`;
    return 'URLs Valid';
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 max-w-sm">
      <div className={`${getStatusColor()} text-white p-3 rounded-lg shadow-lg`}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-sm">🎯 URL Monitor</span>
          <button 
            onClick={() => setShowMonitor(false)}
            className="text-white hover:text-gray-200 text-xs"
          >
            ✕
          </button>
        </div>
        
        <div className="text-xs">
          <div>{getStatusText()}</div>
          <div className="opacity-75 mt-1">
            Last check: {urlStatus.lastCheck.toLocaleTimeString()}
          </div>
        </div>

        {urlStatus.canonicalUrl && urlStatus.ogUrl && (
          <div className="mt-2 text-xs">
            <div className="opacity-75">Canonical:</div>
            <div className="font-mono text-xs break-all opacity-90">
              {urlStatus.canonicalUrl}
            </div>
            <div className="opacity-75 mt-1">OG URL:</div>
            <div className="font-mono text-xs break-all opacity-90">
              {urlStatus.ogUrl}
            </div>
          </div>
        )}
        
        {(urlStatus.errors.length > 0 || urlStatus.warnings.length > 0) && (
          <details className="mt-2">
            <summary className="cursor-pointer text-xs opacity-75">
              View Issues ({urlStatus.errors.length + urlStatus.warnings.length})
            </summary>
            <ul className="mt-1 text-xs space-y-1 max-h-32 overflow-y-auto">
              {urlStatus.errors.map((error, index) => (
                <li key={`error-${index}`} className="text-red-200">🚨 {error}</li>
              ))}
              {urlStatus.warnings.map((warning, index) => (
                <li key={`warning-${index}`} className="text-yellow-200">⚠️ {warning}</li>
              ))}
            </ul>
          </details>
        )}
        
        <button 
          onClick={checkUrls}
          className="mt-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default OGCanonicalMonitor;
