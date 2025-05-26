
import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const LucideIcon = (LucideIcons as Record<string, React.FC<{ className?: string }>>)[name];
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return <LucideIcon className={className} />;
};

export default Icon;
