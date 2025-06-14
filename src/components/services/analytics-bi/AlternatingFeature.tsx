
import React from 'react';

interface AlternatingFeatureProps {
  visual: React.ReactNode;
  title: string;
  description: string;
  listItems: string[];
  ctaLink: React.ReactNode;
  imageOnRight?: boolean;
}

const AlternatingFeature: React.FC<AlternatingFeatureProps> = ({
  visual,
  title,
  description,
  listItems,
  ctaLink,
  imageOnRight = false,
}) => {
  const content = (
    <div className="lg:w-1/2">
      <h3 className="text-3xl font-bold text-brand-navy font-rubik mb-4">{title}</h3>
      <p className="text-lg text-gray-700 font-roboto leading-relaxed mb-6">
        {description}
      </p>
      <ul className="space-y-3 mb-6">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span className="text-gray-700 font-roboto">{item}</span>
          </li>
        ))}
      </ul>
       <div className="mt-6 p-4 bg-dataops-50/70 rounded-lg border border-dataops-100">
          {ctaLink}
       </div>
    </div>
  );

  const image = (
    <div className="lg:w-1/2 flex items-center justify-center p-4">
      <div className="rounded-lg shadow-2xl overflow-hidden border-4 border-gray-100 bg-white transform transition-transform duration-300 hover:scale-105">
        {visual}
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 ${imageOnRight ? 'lg:flex-row-reverse' : ''}`}>
      {content}
      {image}
    </div>
  );
};

export default AlternatingFeature;
