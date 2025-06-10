
import React, { useEffect } from 'react';
import { generateContentJson } from '@/utils/api-utils';

const ApiContent = () => {
  useEffect(() => {
    // Generate the content
    const content = generateContentJson();
    
    // Output the JSON content
    document.body.textContent = JSON.stringify(content, null, 2);
    
    // Remove any HTML structure and meta tags
    const htmlElement = document.documentElement;
    while (htmlElement.attributes.length > 0) {
      htmlElement.removeAttribute(htmlElement.attributes[0].name);
    }
    
    // Clear the head completely for clean JSON response
    document.head.innerHTML = '';
    
    // Set content type and remove all styling
    document.head.innerHTML = '<meta http-equiv="Content-Type" content="application/json; charset=utf-8">';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.whiteSpace = 'pre';
    document.body.style.fontFamily = 'monospace';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }, []);

  return null;
};

export default ApiContent;
