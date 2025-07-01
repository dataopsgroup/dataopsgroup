
/**
 * Enhanced Security Monitoring
 * Improved event tracking and alerting without user-visible changes
 */

import { SecurityEvent } from './types';
import { SECURITY_CONFIG } from './securityConfig';

class EnhancedSecurityMonitoring {
  private eventBuffer: SecurityEvent[] = [];
  private anomalyDetector: AnomalyDetector;

  constructor() {
    this.anomalyDetector = new AnomalyDetector();
  }

  // Enhanced event logging with pattern detection
  logSecurityEvent(event: SecurityEvent): void {
    this.eventBuffer.push(event);
    this.anomalyDetector.analyzeEvent(event);
    
    // Check for alert thresholds
    if (this.shouldTriggerAlert(event)) {
      this.triggerSecurityAlert(event);
    }
    
    // Maintain buffer size
    if (this.eventBuffer.length > 500) {
      this.eventBuffer = this.eventBuffer.slice(-400);
    }
  }

  private shouldTriggerAlert(event: SecurityEvent): boolean {
    const threshold = SECURITY_CONFIG.alertThresholds[event.type];
    if (!threshold) return false;

    const recentEvents = this.getRecentEvents(event.type, 300000); // 5 minutes
    return recentEvents.length >= threshold.count;
  }

  private getRecentEvents(type: SecurityEvent['type'], windowMs: number): SecurityEvent[] {
    const cutoff = Date.now() - windowMs;
    return this.eventBuffer.filter(
      event => event.type === type && event.timestamp > cutoff
    );
  }

  private triggerSecurityAlert(event: SecurityEvent): void {
    const alertData = {
      type: 'security_alert',
      event,
      context: {
        userAgent: navigator.userAgent,
        url: window.location.href,
        timestamp: new Date().toISOString(),
        recentEvents: this.getRecentEvents(event.type, 300000).length
      }
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 SECURITY ALERT:', alertData);
    }

    // Send to analytics if available
    if (window.gtag) {
      window.gtag('event', 'security_alert', {
        event_category: 'Security',
        event_label: event.type,
        value: event.severity === 'critical' ? 4 : event.severity === 'high' ? 3 : 2
      });
    }
  }

  // Get security analytics for monitoring
  getSecurityAnalytics(): SecurityAnalytics {
    return {
      totalEvents: this.eventBuffer.length,
      eventsByType: this.groupEventsByType(),
      recentAnomalies: this.anomalyDetector.getRecentAnomalies(),
      riskScore: this.calculateRiskScore()
    };
  }

  private groupEventsByType(): Record<string, number> {
    return this.eventBuffer.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  private calculateRiskScore(): number {
    const weights = { critical: 10, high: 5, medium: 2, low: 1 };
    const recentEvents = this.eventBuffer.filter(
      event => Date.now() - event.timestamp < 3600000 // 1 hour
    );
    
    const totalScore = recentEvents.reduce(
      (score, event) => score + weights[event.severity], 0
    );
    
    return Math.min(100, totalScore); // Cap at 100
  }
}

class AnomalyDetector {
  private patterns: Map<string, PatternData> = new Map();

  analyzeEvent(event: SecurityEvent): void {
    const pattern = this.extractPattern(event);
    const existing = this.patterns.get(pattern) || { count: 0, lastSeen: 0, suspicious: false };
    
    existing.count++;
    existing.lastSeen = event.timestamp;
    
    // Mark as suspicious if frequency is unusual
    if (existing.count > 10 && event.timestamp - existing.lastSeen < 10000) {
      existing.suspicious = true;
    }
    
    this.patterns.set(pattern, existing);
  }

  private extractPattern(event: SecurityEvent): string {
    return `${event.type}_${event.severity}_${event.userAgent?.substring(0, 20) || 'unknown'}`;
  }

  getRecentAnomalies(): AnomalyReport[] {
    const anomalies: AnomalyReport[] = [];
    const cutoff = Date.now() - 3600000; // 1 hour
    
    for (const [pattern, data] of this.patterns.entries()) {
      if (data.suspicious && data.lastSeen > cutoff) {
        anomalies.push({
          pattern,
          frequency: data.count,
          lastSeen: data.lastSeen,
          severity: data.count > 50 ? 'high' : 'medium'
        });
      }
    }
    
    return anomalies;
  }
}

interface PatternData {
  count: number;
  lastSeen: number;
  suspicious: boolean;
}

interface SecurityAnalytics {
  totalEvents: number;
  eventsByType: Record<string, number>;
  recentAnomalies: AnomalyReport[];
  riskScore: number;
}

interface AnomalyReport {
  pattern: string;
  frequency: number;
  lastSeen: number;
  severity: 'low' | 'medium' | 'high';
}

export const enhancedMonitoring = new EnhancedSecurityMonitoring();
