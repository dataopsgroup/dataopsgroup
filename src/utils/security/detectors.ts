
import { SecurityEvent } from './types';

export class SecurityDetectors {
  private logCallback: (type: SecurityEvent['type'], details: string, severity: SecurityEvent['severity']) => void;

  constructor(logCallback: (type: SecurityEvent['type'], details: string, severity: SecurityEvent['severity']) => void) {
    this.logCallback = logCallback;
  }

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
      this.logCallback('suspicious_input', `Suspicious pattern detected: ${input.substring(0, 50)}...`, 'medium');
    }
    
    return isSuspicious;
  }

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
      this.logCallback('xss_attempt', `XSS attempt detected: ${input.substring(0, 100)}...`, 'high');
    }
    
    return hasXSS;
  }

  detectBotBehavior(): boolean {
    const win = window as any;
    const indicators = [
      navigator.webdriver,
      win.phantom,
      win._phantom,
      win.callPhantom
    ];

    const hasIndicators = indicators.some(indicator => indicator);
    
    if (hasIndicators) {
      this.logCallback('bot_detected', 'Automated browser detected', 'medium');
    }
    
    return hasIndicators;
  }
}
