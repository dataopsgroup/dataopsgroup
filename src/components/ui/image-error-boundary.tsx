
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary specifically for image loading failures
 * Prevents image optimization issues from breaking the entire page
 */
class ImageErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Image Error Boundary caught an error:', error, errorInfo);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    
    // Report to analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'image_error_boundary', {
        event_category: 'Error',
        event_label: error.message,
        value: 1
      });
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback or default
      return this.props.fallback || (
        <div className="flex items-center justify-center p-4 bg-gray-100 rounded">
          <span className="text-gray-600 text-sm">Image unavailable</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ImageErrorBoundary;
