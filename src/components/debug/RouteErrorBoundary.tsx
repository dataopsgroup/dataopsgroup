
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { navigationTracker, logNavigationState } from '@/lib/debug/navigation-tracker';
import { clearAllCaches, forceRefreshPage } from '@/lib/debug/cache-manager';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class RouteErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 Route Error Boundary caught error:', error);
    console.error('Error Info:', errorInfo);
    
    // Log navigation state for debugging
    logNavigationState();
    
    // Log failed navigations
    const failedNavigations = navigationTracker.getFailedNavigations();
    if (failedNavigations.length > 0) {
      console.error('Recent failed navigations:', failedNavigations);
    }
    
    this.setState({ errorInfo });
  }

  private handleClearCacheAndReload = async () => {
    await clearAllCaches();
    window.location.reload();
  };

  private handleForceRefresh = () => {
    forceRefreshPage();
  };

  private handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Navigation Error
            </h1>
            <p className="text-gray-600 mb-6">
              Something went wrong while navigating. This might be a caching issue.
            </p>
            
            <div className="space-y-3 mb-6">
              <Button 
                onClick={this.handleRetry}
                className="w-full bg-dataops-600 text-white hover:bg-dataops-700"
              >
                Try Again
              </Button>
              
              <Button
                onClick={this.handleClearCacheAndReload}
                variant="outline"
                className="w-full"
              >
                Clear Cache & Reload
              </Button>
              
              <Button
                onClick={this.handleForceRefresh}
                variant="outline"
                className="w-full"
              >
                Force Refresh
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <Link to="/">Go to Home</Link>
              </Button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left">
                <summary className="cursor-pointer text-sm font-medium text-red-600 mb-2">
                  Debug Information
                </summary>
                <pre className="text-xs text-red-700 bg-red-50 p-4 rounded overflow-x-auto whitespace-pre-wrap">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
                  {this.state.errorInfo && '\n\nComponent Stack:'}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
