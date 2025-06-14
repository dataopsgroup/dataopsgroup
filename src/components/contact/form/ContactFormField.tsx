
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ContactFormFieldProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  icon: LucideIcon;
}

const ContactFormField: React.FC<ContactFormFieldProps> = ({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
  icon: Icon
}) => {
  const InputComponent = type === 'textarea' ? Textarea : Input;
  const inputProps = type === 'textarea' 
    ? { className: "pl-10 min-h-[100px]" }
    : { type, className: "pl-10" };

  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label} {required && '*'}
      </Label>
      <div className="relative mt-1">
        <Icon className={`absolute left-3 ${type === 'textarea' ? 'top-3' : 'top-1/2 transform -translate-y-1/2'} h-4 w-4 text-gray-400`} />
        <InputComponent
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default ContactFormField;
