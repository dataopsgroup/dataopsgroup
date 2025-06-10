// Security event monitoring and logging utility

interface SecurityEvent {
  type: 'form_validation_failure' | 'rate_limit_exceeded' | 'suspicious_input' | 'xss_attempt';
  details: string;
  timestamp: number;
  userAgent?: string;
  ip?: string; // Not available in frontend, but placeholder for future backend integration
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private readonly MAX_EVENTS = 100; // Keep last 100 events in memory

  logEvent(type: SecurityEvent['type'], details: string, additionalData?: object) {
    const event: SecurityEvent = {
      type,
      details,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      ...additionalData
    };

    this.events.push(event);
    
    // Keep only the most recent events
    if (this.events.length > this.MAX_EVENTS) {
      this.events = this.events.slice(-this.MAX_EVENTS);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', event);
    }

    // In production, you might want to send this to an external monitoring service
    if (process.env.NODE_ENV === 'production' && this.shouldAlert(type)) {
      this.alertSecurityTeam(event);
    }
  }

  private shouldAlert(type: SecurityEvent['type']): boolean {
    // Define which events should trigger immediate alerts
    return ['xss_attempt', 'rate_limit_exceeded'].includes(type);
  }

  private alertSecurityTeam(event: SecurityEvent) {
    // Placeholder for security team alerting
    // In a real implementation, this might send to a security monitoring service
    console.error('SECURITY ALERT:', event);
  }

  getRecentEvents(minutes: number = 60): SecurityEvent[] {
    const cutoff = Date.now() - (minutes * 60 * 1000);
    return this.events.filter(event => event.timestamp > cutoff);
  }

  // Detect potentially malicious input patterns
  detectSuspiciousInput(input: string): boolean {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i,
      /expression\s*\(/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(input));
  }

  // Check for XSS attempts
  detectXSSAttempt(input: string): boolean {
    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /javascript\s*:/gi,
      /on\w+\s*=\s*["'][^"']*["']/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>/gi
    ];

    const hasXSS = xssPatterns.some(pattern => pattern.test(input));
    
    if (hasXSS) {
      this.logEvent('xss_attempt', `Potential XSS attempt detected: ${input.substring(0, 100)}...`);
    }
    
    return hasXSS;
  }
}

export const securityMonitor = new SecurityMonitor();

// Enhanced error boundary for security events
export class SecurityErrorBoundary extends Error {
  constructor(message: string, public securityEvent?: SecurityEvent) {
    super(message);
    this.name = 'SecurityErrorBoundary';
  }
}

// Helper function to safely handle user input
export const sanitizeAndValidateInput = (input: string, context: string = 'general'): string => {
  if (securityMonitor.detectXSSAttempt(input)) {
    throw new SecurityErrorBoundary('Malicious input detected');
  }

  if (securityMonitor.detectSuspiciousInput(input)) {
    securityMonitor.logEvent('suspicious_input', `Suspicious input in ${context}: ${input.substring(0, 50)}...`);
  }

  return input;
};
