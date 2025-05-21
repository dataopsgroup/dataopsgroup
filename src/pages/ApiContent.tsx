
import React, { useEffect } from 'react';
import { generateContentJson } from '@/utils/api-utils';

const ApiContent = () => {
  useEffect(() => {
    // Generate the content
    const content = generateContentJson();
    
    // Output the JSON content
    document.body.textContent = JSON.stringify(content, null, 2);
    
    // Remove any HTML structure
    const htmlElement = document.documentElement;
    while (htmlElement.attributes.length > 0) {
      htmlElement.removeAttribute(htmlElement.attributes[0].name);
    }
    
    // Clear the head and set proper styling for JSON display
    document.head.innerHTML = '<meta http-equiv="Content-Type" content="application/json; charset=utf-8">';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.whiteSpace = 'pre';
    document.body.style.fontFamily = 'monospace';
  }, []);

  return null;
};

export default ApiContent;
