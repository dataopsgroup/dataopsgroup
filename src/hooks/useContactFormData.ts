
import { useState } from 'react';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const useContactFormData = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return {
    formData,
    updateField,
    resetForm
  };
};
