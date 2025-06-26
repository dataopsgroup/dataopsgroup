
import { SecurityEvent } from './types';

export class TokenManager {
  private logCallback: (type: SecurityEvent['type'], details: string, severity: SecurityEvent['severity']) => void;

  constructor(logCallback: (type: SecurityEvent['type'], details: string, severity: SecurityEvent['severity']) => void) {
    this.logCallback = logCallback;
  }

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
      this.logCallback('csrf_attempt', 'Expired form token used', 'medium');
      return false;
    }
    
    if (token !== storedToken) {
      this.logCallback('csrf_attempt', 'Invalid form token', 'high');
      return false;
    }
    
    return true;
  }
}
