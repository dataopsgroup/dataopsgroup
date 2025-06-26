
// Security event types and interfaces

export interface SecurityEvent {
  type: 'form_validation_failure' | 'rate_limit_exceeded' | 'suspicious_input' | 'xss_attempt' | 'csrf_attempt' | 'bot_detected';
  details: string;
  timestamp: number;
  userAgent?: string;
  ip?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  fingerprint?: string;
}

// Extend Window interface for bot detection
declare global {
  interface Window {
    phantom?: any;
    _phantom?: any;
    callPhantom?: any;
    webdriver?: boolean;
    gtag?: (...args: any[]) => void;
  }
}

export class SecurityErrorBoundary extends Error {
  constructor(message: string, public securityEvent?: SecurityEvent) {
    super(message);
    this.name = 'SecurityErrorBoundary';
  }
}
