import React from 'react';

interface ServicesPageWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const ServicesPageWrapper: React.FC<ServicesPageWrapperProps> = ({
  children,
  title,
  description
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
};

export default ServicesPageWrapper;
