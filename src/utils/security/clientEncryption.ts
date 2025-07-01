
/**
 * Client-side encryption utilities for sensitive form data
 * Adds an extra layer of security without changing user experience
 */

class ClientEncryption {
  private encoder = new TextEncoder();
  private decoder = new TextDecoder();

  // Simple XOR encryption for client-side obfuscation
  // Note: This is obfuscation, not cryptographic security
  private xorEncrypt(data: string, key: string): string {
    const dataBytes = this.encoder.encode(data);
    const keyBytes = this.encoder.encode(key);
    
    const encrypted = new Uint8Array(dataBytes.length);
    for (let i = 0; i < dataBytes.length; i++) {
      encrypted[i] = dataBytes[i] ^ keyBytes[i % keyBytes.length];
    }
    
    return btoa(String.fromCharCode(...encrypted));
  }

  private xorDecrypt(encryptedData: string, key: string): string {
    try {
      const encrypted = new Uint8Array(
        atob(encryptedData).split('').map(char => char.charCodeAt(0))
      );
      const keyBytes = this.encoder.encode(key);
      
      const decrypted = new Uint8Array(encrypted.length);
      for (let i = 0; i < encrypted.length; i++) {
        decrypted[i] = encrypted[i] ^ keyBytes[i % keyBytes.length];
      }
      
      return this.decoder.decode(decrypted);
    } catch (error) {
      console.warn('Decryption failed:', error);
      return encryptedData; // Return original if decryption fails
    }
  }

  // Generate session-based encryption key
  private generateSessionKey(): string {
    const sessionId = sessionStorage.getItem('security_session_id') || 'default_key';
    const timestamp = Math.floor(Date.now() / 300000); // 5-minute windows
    return btoa(`${sessionId}_${timestamp}`).substring(0, 16);
  }

  // Encrypt sensitive form data before storage
  encryptFormData(data: Record<string, string>): Record<string, string> {
    const key = this.generateSessionKey();
    const encrypted: Record<string, string> = {};
    
    for (const [field, value] of Object.entries(data)) {
      // Only encrypt sensitive fields
      if (this.isSensitiveField(field)) {
        encrypted[field] = this.xorEncrypt(value, key);
      } else {
        encrypted[field] = value;
      }
    }
    
    return encrypted;
  }

  // Decrypt form data when needed
  decryptFormData(data: Record<string, string>): Record<string, string> {
    const key = this.generateSessionKey();
    const decrypted: Record<string, string> = {};
    
    for (const [field, value] of Object.entries(data)) {
      if (this.isSensitiveField(field)) {
        decrypted[field] = this.xorDecrypt(value, key);
      } else {
        decrypted[field] = value;
      }
    }
    
    return decrypted;
  }

  private isSensitiveField(fieldName: string): boolean {
    const sensitiveFields = ['email', 'phone', 'message', 'company', 'firstName', 'lastName'];
    return sensitiveFields.some(field => fieldName.toLowerCase().includes(field.toLowerCase()));
  }
}

export const clientEncryption = new ClientEncryption();
