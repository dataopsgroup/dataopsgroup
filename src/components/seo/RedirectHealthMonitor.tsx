
import React, { useEffect, useState } from 'react';
import { auditAllRedirects } from '@/utils/comprehensive-redirect-audit';
import { validateCommonPatterns, areRedirectsDisabled } from '@/utils/redirect-prevention-system';

interface RedirectHealth {
  status: 'healthy' | 'warning' | 'error';
  issues: string[];
  redirectsDisabled: boolean;
  lastCheck: Date;
}

/**
 * Component for monitoring redirect health in real-time
 * Only shows in development or when issues are detected
 */
const RedirectHealthMonitor: React.FC = () => {
  const [health, setHealth] = useState<RedirectHealth | null>(null);
  const [showMonitor, setShowMonitor] = useState(false);

  useEffect(() => {
    // Only show in development or if redirects are disabled
    const shouldShow = process.env.NODE_ENV === 'development' || areRedirectsDisabled();
    setShowMonitor(shouldShow);

    if (shouldShow) {
      checkRedirectHealth();
      
      // Re-check every 30 seconds in development
      const interval = setInterval(checkRedirectHealth, 30000);
      return () => clearInterval(interval);
    }
  }, []);

  const checkRedirectHealth = () => {
    try {
      const audit = auditAllRedirects();
      const patternsValid = validateCommonPatterns();
      const redirectsDisabled = areRedirectsDisabled();
      
      const status = !audit.isValid || !patternsValid ? 'error' : 
                    audit.warnings.length > 0 ? 'warning' : 'healthy';
      
      setHealth({
        status,
        issues: [...audit.errors, ...audit.warnings],
        redirectsDisabled,
        lastCheck: new Date()
      });
    } catch (error) {
      setHealth({
        status: 'error',
        issues: [`Health check failed: ${error}`],
        redirectsDisabled: areRedirectsDisabled(),
        lastCheck: new Date()
      });
    }
  };

  if (!showMonitor || !health) return null;

  const getStatusColor = () => {
    switch (health.status) {
      case 'healthy': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    if (health.redirectsDisabled) return 'Redirects Disabled (Emergency Mode)';
    switch (health.status) {
      case 'healthy': return 'Redirects Healthy';
      case 'warning': return `${health.issues.length} Warnings`;
      case 'error': return `${health.issues.length} Critical Issues`;
      default: return 'Unknown Status';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className={`${getStatusColor()} text-white p-3 rounded-lg shadow-lg`}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-sm">🔗 Redirect Monitor</span>
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
            Last check: {health.lastCheck.toLocaleTimeString()}
          </div>
        </div>
        
        {health.issues.length > 0 && (
          <details className="mt-2">
            <summary className="cursor-pointer text-xs opacity-75">
              View Issues ({health.issues.length})
            </summary>
            <ul className="mt-1 text-xs space-y-1 max-h-32 overflow-y-auto">
              {health.issues.slice(0, 5).map((issue, index) => (
                <li key={index} className="opacity-90">• {issue}</li>
              ))}
              {health.issues.length > 5 && (
                <li className="opacity-75">...and {health.issues.length - 5} more</li>
              )}
            </ul>
          </details>
        )}
        
        <button 
          onClick={checkRedirectHealth}
          className="mt-2 text-xs bg-white bg-opacity-20 px-2 py-1 rounded hover:bg-opacity-30"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default RedirectHealthMonitor;
