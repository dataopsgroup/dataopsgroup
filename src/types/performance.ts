/**
 * Interface for performance metrics tracked in the application.
 */
export interface PerformanceMetrics {
  startupTime: number;
  renderTime: number;
  navigationToRender: number;
  navigationToLoad: number;
}

/**
 * Interface for application configuration, including version and feature flags.
 */
export interface AppConfig {
  version: string;
  environment: 'development' | 'production';
  features: {
    analytics: boolean;
    monitoring: boolean;
    ssg: boolean;
  };
} 