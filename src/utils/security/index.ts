
// Main export file for security utilities
export { securityMonitor } from './securityMonitor';
export { SecurityErrorBoundary } from './types';
export { sanitizeAndValidateInput, createHoneypot, checkHoneypot } from './helpers';
export { enhancedMonitoring } from './enhancedMonitoring';
export { clientEncryption } from './clientEncryption';
export { resourceIntegrityManager } from './resourceIntegrity';
export { SECURITY_CONFIG, generateCSPString } from './securityConfig';
export type { SecurityEvent } from './types';
