
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { LucideIcon } from 'lucide-react';

interface ContactFormFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  icon?: LucideIcon;
  error?: string;
}

const ContactFormField: React.FC<ContactFormFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  icon: Icon,
  error
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        )}
        
        {type === 'textarea' ? (
          <Textarea
            id={id}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            className={`${Icon ? 'pl-10' : ''} ${error ? 'border-red-500 focus:border-red-500' : ''}`}
            rows={4}
          />
        ) : (
          <Input
            id={id}
            type={type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            required={required}
            className={`${Icon ? 'pl-10' : ''} ${error ? 'border-red-500 focus:border-red-500' : ''}`}
          />
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default ContactFormField;
