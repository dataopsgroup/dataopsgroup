
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Error boundary specifically for image loading components
 * Provides graceful fallback when image optimization fails
 */
class ImageErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Image component error caught:', error.message, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-lg">
          <div className="text-center text-gray-500">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Image temporarily unavailable</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ImageErrorBoundary;
