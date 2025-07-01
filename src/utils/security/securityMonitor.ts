
import { SecurityEvent } from './types';
import { SecurityDetectors } from './detectors';
import { TokenManager } from './tokenManager';
import { AlertingService } from './alertingService';
import { enhancedMonitoring } from './enhancedMonitoring';
import { clientEncryption } from './clientEncryption';
import { SECURITY_CONFIG } from './securityConfig';

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private readonly MAX_EVENTS = 200;
  private detectors: SecurityDetectors;
  private tokenManager: TokenManager;
  private alertingService: AlertingService;

  constructor() {
    this.detectors = new SecurityDetectors(this.logEvent.bind(this));
    this.tokenManager = new TokenManager(this.logEvent.bind(this));
    this.alertingService = new AlertingService();
  }

  logEvent(type: SecurityEvent['type'], details: string, severity: SecurityEvent['severity'] = 'medium', additionalData?: object) {
    const fingerprint = this.generateFingerprint(type, details);
    
    const recentDuplicate = this.events.find(event => 
      event.fingerprint === fingerprint && 
      Date.now() - event.timestamp < 300000
    );
    
    if (recentDuplicate) {
      return;
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
    
    // Use enhanced monitoring
    enhancedMonitoring.logSecurityEvent(event);
    
    if (this.events.length > this.MAX_EVENTS) {
      this.events = this.events.slice(-this.MAX_EVENTS);
    }

    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', event);
    }

    if (process.env.NODE_ENV === 'production' && this.alertingService.shouldAlert(type, severity)) {
      this.alertingService.alertSecurityTeam(event);
    }
  }

  private generateFingerprint(type: string, details: string): string {
    return btoa(`${type}-${details.substring(0, 50)}`).substring(0, 16);
  }

  getRecentEvents(minutes: number = 60): SecurityEvent[] {
    const cutoff = Date.now() - (minutes * 60 * 1000);
    return this.events.filter(event => event.timestamp > cutoff);
  }

  getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(event => event.type === type);
  }

  // Enhanced methods with encryption support
  encryptSensitiveData(data: Record<string, string>): Record<string, string> {
    return clientEncryption.encryptFormData(data);
  }

  decryptSensitiveData(data: Record<string, string>): Record<string, string> {
    return clientEncryption.decryptFormData(data);
  }

  // Get security analytics
  getSecurityAnalytics() {
    return enhancedMonitoring.getSecurityAnalytics();
  }

  // Delegate to detectors
  detectSuspiciousInput = (input: string) => this.detectors.detectSuspiciousInput(input);
  detectXSSAttempt = (input: string) => this.detectors.detectXSSAttempt(input);
  detectBotBehavior = () => this.detectors.detectBotBehavior();

  // Delegate to token manager
  generateFormToken = () => this.tokenManager.generateFormToken();
  validateFormToken = (token: string) => this.tokenManager.validateFormToken(token);
}

export const securityMonitor = new SecurityMonitor();
