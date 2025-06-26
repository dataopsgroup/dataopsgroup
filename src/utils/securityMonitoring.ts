
// Enhanced security event monitoring and logging utility

interface SecurityEvent {
  type: 'form_validation_failure' | 'rate_limit_exceeded' | 'suspicious_input' | 'xss_attempt' | 'csrf_attempt' | 'bot_detected';
  details: string;
  timestamp: number;
  userAgent?: string;
  ip?: string; // Not available in frontend, but placeholder for future backend integration
  severity: 'low' | 'medium' | 'high' | 'critical';
  fingerprint?: string; // For deduplication
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private readonly MAX_EVENTS = 200; // Increased for better monitoring
  private readonly REPORTING_ENDPOINT = '/api/security-events'; // Placeholder for future implementation

  logEvent(type: SecurityEvent['type'], details: string, severity: SecurityEvent['severity'] = 'medium', additionalData?: object) {
    const fingerprint = this.generateFingerprint(type, details);
    
    // Check for duplicate events within last 5 minutes
    const recentDuplicate = this.events.find(event => 
      event.fingerprint === fingerprint && 
      Date.now() - event.timestamp < 300000
    );
    
    if (recentDuplicate) {
      return; // Skip duplicate events
    }

    const event: SecurityEvent = {
      type,
      details,
      severity,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      fingerprint,
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
    if (process.env.NODE_ENV === 'production' && this.shouldAlert(type, severity)) {
      this.alertSecurityTeam(event);
    }
  }

  private generateFingerprint(type: string, details: string): string {
    return btoa(`${type}-${details.substring(0, 50)}`).substring(0, 16);
  }

  private shouldAlert(type: SecurityEvent['type'], severity: SecurityEvent['severity']): boolean {
    // Define which events should trigger immediate alerts
    const criticalTypes = ['xss_attempt', 'csrf_attempt'];
    const highSeverityTypes = ['rate_limit_exceeded', 'bot_detected'];
    
    return criticalTypes.includes(type) || severity === 'critical' || 
           (highSeverityTypes.includes(type) && severity === 'high');
  }

  private alertSecurityTeam(event: SecurityEvent) {
    // Enhanced security team alerting
    try {
      // In a real implementation, this might send to a security monitoring service
      console.error('SECURITY ALERT:', {
        ...event,
        context: {
          url: window.location.href,
          timestamp: new Date(event.timestamp).toISOString(),
          sessionId: this.getSessionId()
        }
      });
      
      // Could integrate with services like Sentry, LogRocket, etc.
      if (window.gtag) {
        window.gtag('event', 'security_event', {
          'event_category': 'Security',
          'event_label': event.type,
          'value': this.getSeverityValue(event.severity)
        });
      }
    } catch (error) {
      console.error('Failed to send security alert:', error);
    }
  }

  private getSessionId(): string {
    // Simple session ID for tracking
    let sessionId = sessionStorage.getItem('security_session_id');
    if (!sessionId) {
      sessionId = btoa(Date.now().toString() + Math.random().toString()).substring(0, 12);
      sessionStorage.setItem('security_session_id', sessionId);
    }
    return sessionId;
  }

  private getSeverityValue(severity: SecurityEvent['severity']): number {
    const values = { low: 1, medium: 2, high: 3, critical: 4 };
    return values[severity] || 2;
  }

  getRecentEvents(minutes: number = 60): SecurityEvent[] {
    const cutoff = Date.now() - (minutes * 60 * 1000);
    return this.events.filter(event => event.timestamp > cutoff);
  }

  getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(event => event.type === type);
  }

  // Enhanced detection methods
  detectSuspiciousInput(input: string): boolean {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i,
      /expression\s*\(/i,
      /eval\s*\(/i,
      /setTimeout\s*\(/i,
      /setInterval\s*\(/i
    ];

    const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(input));
    
    if (isSuspicious) {
      this.logEvent('suspicious_input', `Suspicious pattern detected: ${input.substring(0, 50)}...`, 'medium');
    }
    
    return isSuspicious;
  }

  // Check for XSS attempts with enhanced patterns
  detectXSSAttempt(input: string): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /javascript\s*:/gi,
      /on\w+\s*=\s*["'][^"']*["']/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>/gi,
      /eval\s*\(/gi,
      /String\.fromCharCode/gi,
      /document\.cookie/gi,
      /window\.location/gi
    ];

    const hasXSS = xssPatterns.some(pattern => pattern.test(input));
    
    if (hasXSS) {
      this.logEvent('xss_attempt', `XSS attempt detected: ${input.substring(0, 100)}...`, 'high');
    }
    
    return hasXSS;
  }

  // Bot detection based on behavior patterns
  detectBotBehavior(): boolean {
    const indicators = [
      navigator.webdriver, // Selenium detection
      window.phantom, // PhantomJS detection
      window._phantom,
      window.callPhantom
    ];

    const hasIndicators = indicators.some(indicator => indicator);
    
    if (hasIndicators) {
      this.logEvent('bot_detected', 'Automated browser detected', 'medium');
    }
    
    return hasIndicators;
  }

  // CSRF-like protection for forms
  generateFormToken(): string {
    const token = btoa(Date.now().toString() + Math.random().toString()).substring(0, 32);
    sessionStorage.setItem('form_token', token);
    sessionStorage.setItem('form_token_timestamp', Date.now().toString());
    return token;
  }

  validateFormToken(token: string): boolean {
    const storedToken = sessionStorage.getItem('form_token');
    const timestamp = parseInt(sessionStorage.getItem('form_token_timestamp') || '0');
    const tokenAge = Date.now() - timestamp;
    
    // Token expires after 1 hour
    if (tokenAge > 3600000) {
      this.logEvent('csrf_attempt', 'Expired form token used', 'medium');
      return false;
    }
    
    if (token !== storedToken) {
      this.logEvent('csrf_attempt', 'Invalid form token', 'high');
      return false;
    }
    
    return true;
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

// Helper function to safely handle user input with enhanced validation
export const sanitizeAndValidateInput = (input: string, context: string = 'general'): string => {
  // Bot detection check
  securityMonitor.detectBotBehavior();
  
  if (securityMonitor.detectXSSAttempt(input)) {
    throw new SecurityErrorBoundary('Malicious input detected');
  }

  if (securityMonitor.detectSuspiciousInput(input)) {
    securityMonitor.logEvent('suspicious_input', `Suspicious input in ${context}: ${input.substring(0, 50)}...`, 'medium');
  }

  return input;
};

// Honeypot field detection
export const createHoneypot = (): HTMLInputElement => {
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website_url'; // Common honeypot name
  honeypot.style.display = 'none';
  honeypot.style.visibility = 'hidden';
  honeypot.style.position = 'absolute';
  honeypot.style.left = '-9999px';
  honeypot.tabIndex = -1;
  honeypot.autocomplete = 'off';
  return honeypot;
};

export const checkHoneypot = (formData: FormData): boolean => {
  const honeypotValue = formData.get('website_url');
  if (honeypotValue && honeypotValue.toString().trim() !== '') {
    securityMonitor.logEvent('bot_detected', 'Honeypot field filled', 'high');
    return false;
  }
  return true;
};
