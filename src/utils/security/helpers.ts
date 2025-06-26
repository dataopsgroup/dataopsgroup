
import { securityMonitor } from './securityMonitor';
import { SecurityErrorBoundary } from './types';

export const sanitizeAndValidateInput = (input: string, context: string = 'general'): string => {
  securityMonitor.detectBotBehavior();
  
  if (securityMonitor.detectXSSAttempt(input)) {
    throw new SecurityErrorBoundary('Malicious input detected');
  }

  if (securityMonitor.detectSuspiciousInput(input)) {
    securityMonitor.logEvent('suspicious_input', `Suspicious input in ${context}: ${input.substring(0, 50)}...`, 'medium');
  }

  return input;
};

export const createHoneypot = (): HTMLInputElement => {
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website_url';
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
