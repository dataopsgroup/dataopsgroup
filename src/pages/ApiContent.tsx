
import React, { useEffect } from 'react';
import { generateContentJson } from '@/utils/api-utils';

const ApiContent = () => {
  useEffect(() => {
    // Generate the content
    const content = generateContentJson();
    
    // Set the content type header for JSON
    document.contentType = 'application/json';
    
    // Output the JSON content
    document.body.textContent = JSON.stringify(content, null, 2);
    
    // Remove any HTML structure
    const htmlElement = document.documentElement;
    while (htmlElement.attributes.length > 0) {
      htmlElement.removeAttribute(htmlElement.attributes[0].name);
    }
    
    document.head.innerHTML = '';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.whiteSpace = 'pre';
    document.body.style.fontFamily = 'monospace';
  }, []);

  return null;
};

export default ApiContent;
