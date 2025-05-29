
import React from 'react';
import { Download } from 'lucide-react';

const FormSuccessState = () => {
  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
        <Download className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
      <p className="text-gray-600">Your download should start automatically. If not, please check your downloads folder.</p>
    </div>
  );
};

export default FormSuccessState;
