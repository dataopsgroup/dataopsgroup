
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    console.error('Component stack:', errorInfo.componentStack);
    console.error('Current URL:', window.location.href);
  }

  handleReport = () => {
    const errorMsg = this.state.error?.message || 'Unknown error';
    const errorStack = this.state.error?.stack || '';
    const currentUrl = window.location.href;
    const body = encodeURIComponent(`Error: ${errorMsg}\n\nURL: ${currentUrl}\n\nStack:\n${errorStack}`);
    window.open(`mailto:support@dataopsgroup.com?subject=Site%20Error%20Report&body=${body}`);
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try one of the options below.</p>
            
            <div className="space-y-3">
              <Button 
                onClick={() => window.location.reload()}
                className="w-full bg-dataops-600 text-white hover:bg-dataops-700"
              >
                Refresh Page
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <Link to="/">Go to Home</Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full"
              >
                <Link to="/insights">Go to Insights</Link>
              </Button>
              
              <Button
                onClick={this.handleReport}
                variant="ghost"
                className="w-full text-sm"
              >
                Report Issue
              </Button>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm font-medium text-red-600 mb-2">
                  Development Error Details
                </summary>
                <pre className="text-xs text-red-700 bg-red-50 p-4 rounded overflow-x-auto whitespace-pre-wrap">
                  {this.state.error.message}
                  {'\n\n'}
                  {this.state.error.stack}
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

export default ErrorBoundary;
