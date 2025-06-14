
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { navigationTracker, logNavigationState } from '@/lib/debug/navigation-tracker';
import { clearAllCaches, inspectCacheContents, forceRefreshPage } from '@/lib/debug/cache-manager';
import { logRouteHealth } from '@/lib/debug/route-health-checker';

const NavigationDebugPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [events, setEvents] = useState(navigationTracker.getEvents());

  useEffect(() => {
    // Update events every second
    const interval = setInterval(() => {
      setEvents(navigationTracker.getEvents());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          size="sm"
          variant="outline"
          className="bg-blue-600 text-white hover:bg-blue-700"
        >
          Debug Nav
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 max-h-96 overflow-y-auto">
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-sm">Navigation Debug</CardTitle>
            <Button
              onClick={() => setIsVisible(false)}
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0"
            >
              ×
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-1">
            <Button
              onClick={logNavigationState}
              size="sm"
              variant="outline"
              className="text-xs"
            >
              Log State
            </Button>
            <Button
              onClick={logRouteHealth}
              size="sm"
              variant="outline"
              className="text-xs"
            >
              Check Routes
            </Button>
            <Button
              onClick={inspectCacheContents}
              size="sm"
              variant="outline"
              className="text-xs"
            >
              Inspect Cache
            </Button>
            <Button
              onClick={clearAllCaches}
              size="sm"
              variant="outline"
              className="text-xs"
            >
              Clear Cache
            </Button>
          </div>
          
          <Button
            onClick={forceRefreshPage}
            size="sm"
            className="w-full bg-red-600 hover:bg-red-700 text-xs"
          >
            Force Refresh
          </Button>
          
          <div className="text-xs">
            <div className="font-medium mb-1">Recent Events:</div>
            <div className="space-y-1 max-h-32 overflow-y-auto">
              {events.slice(-5).map((event, i) => (
                <div
                  key={i}
                  className={`p-1 rounded text-xs ${
                    event.success ? 'bg-green-100' : 'bg-red-100'
                  }`}
                >
                  <div className="font-mono">
                    {event.type}: {event.to}
                  </div>
                  {event.error && (
                    <div className="text-red-600 text-xs">
                      {event.error}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NavigationDebugPanel;
