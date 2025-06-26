
import { SecurityEvent } from './types';

export class AlertingService {
  private getSessionId(): string {
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

  shouldAlert(type: SecurityEvent['type'], severity: SecurityEvent['severity']): boolean {
    const criticalTypes = ['xss_attempt', 'csrf_attempt'];
    const highSeverityTypes = ['rate_limit_exceeded', 'bot_detected'];
    
    return criticalTypes.includes(type) || severity === 'critical' || 
           (highSeverityTypes.includes(type) && severity === 'high');
  }

  alertSecurityTeam(event: SecurityEvent): void {
    try {
      console.error('SECURITY ALERT:', {
        ...event,
        context: {
          url: window.location.href,
          timestamp: new Date(event.timestamp).toISOString(),
          sessionId: this.getSessionId()
        }
      });
      
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
}
