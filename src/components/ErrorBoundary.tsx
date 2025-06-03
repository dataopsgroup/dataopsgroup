
import React, { Component, ErrorInfo, ReactNode } from 'react';

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
  }

  handleReport = () => {
    const errorMsg = this.state.error?.message || 'Unknown error';
    const errorStack = this.state.error?.stack || '';
    const body = encodeURIComponent(`Error: ${errorMsg}\n\nStack:\n${errorStack}`);
    window.open(`mailto:support@dataopsgroup.com?subject=Site%20Error%20Report&body=${body}`);
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We apologize for the inconvenience. Please refresh the page or report the issue.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-dataops-600 text-white px-4 py-2 rounded hover:bg-dataops-700 mr-2"
            >
              Refresh Page
            </button>
            <button
              onClick={this.handleReport}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            >
              Report Issue
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="mt-6 text-left text-xs text-red-700 bg-red-50 p-4 rounded overflow-x-auto">
                {this.state.error.message}\n\n{this.state.error.stack}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
