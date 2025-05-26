import React from 'react';

interface ServiceSectionProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  children,
  title,
  description
}) => {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 mb-6">{description}</p>
      )}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default ServiceSection;
