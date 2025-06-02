
import React from 'react';
import { Input } from '@/components/ui/input';

interface ApiKeyInputProps {
  apiKey: string;
  onApiKeyChange: (value: string) => void;
}

const ApiKeyInput = ({ apiKey, onApiKeyChange }: ApiKeyInputProps) => {
  return (
    <div>
      <label htmlFor="apiKey" className="block text-sm font-medium mb-2">
        Runware API Key
      </label>
      <Input
        id="apiKey"
        type="password"
        placeholder="Enter your Runware API key"
        value={apiKey}
        onChange={(e) => onApiKeyChange(e.target.value)}
      />
      <p className="text-xs text-green-600 mt-1">
        ✓ API key pre-filled and ready to use
      </p>
    </div>
  );
};

export default ApiKeyInput;
