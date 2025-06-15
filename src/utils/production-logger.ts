
/**
 * Production-safe logging utility
 * Prevents console errors from appearing in production builds
 */

type LogLevel = 'error' | 'warn' | 'info' | 'log';

class ProductionLogger {
  private isDevelopment = process.env.NODE_ENV === 'development';
  private isLocalhost = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

  private shouldLog(level: LogLevel): boolean {
    // Always allow errors in development
    if (this.isDevelopment || this.isLocalhost) {
      return true;
    }
    
    // In production, only log critical errors
    return level === 'error';
  }

  error(message: string, ...args: any[]) {
    if (this.shouldLog('error')) {
      console.error(message, ...args);
    }
    
    // In production, you might want to send errors to a monitoring service
    if (!this.isDevelopment && !this.isLocalhost) {
      // Placeholder for error reporting service
      this.reportError(message, args);
    }
  }

  warn(message: string, ...args: any[]) {
    if (this.shouldLog('warn')) {
      console.warn(message, ...args);
    }
  }

  info(message: string, ...args: any[]) {
    if (this.shouldLog('info')) {
      console.info(message, ...args);
    }
  }

  log(message: string, ...args: any[]) {
    if (this.shouldLog('log')) {
      console.log(message, ...args);
    }
  }

  private reportError(message: string, args: any[]) {
    // Placeholder for production error reporting
    // Could integrate with services like Sentry, LogRocket, etc.
    try {
      if (window.gtag) {
        window.gtag('event', 'exception', {
          'description': message,
          'fatal': false
        });
      }
    } catch (e) {
      // Silently fail if analytics isn't available
    }
  }
}

export const logger = new ProductionLogger();
export default logger;
