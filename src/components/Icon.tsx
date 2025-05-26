
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  // Use a more permissive type assertion to handle lucide-react's structure
  const LucideIcon = (LucideIcons as any)[name];
  
  if (!LucideIcon || typeof LucideIcon !== 'function') {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <LucideIcon className={className} />;
};

export default Icon;
