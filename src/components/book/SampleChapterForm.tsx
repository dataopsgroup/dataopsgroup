
import React, { useState } from 'react';
import HubSpotForm from './form/HubSpotForm';
import FallbackForm from './form/FallbackForm';
import FormSuccessState from './form/FormSuccessState';
import { triggerFileDownload } from '@/utils/file-download';

const SampleChapterForm = () => {
  const [showFallback, setShowFallback] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    triggerFileDownload();
    setSubmitted(true);
  };

  const handleFormReady = () => {
    // Form is ready, no additional action needed
  };

  const handleFormFailed = () => {
    setShowFallback(true);
  };

  if (submitted) {
    return <FormSuccessState />;
  }

  if (showFallback) {
    return <FallbackForm onSubmit={handleFormSubmit} />;
  }

  return (
    <HubSpotForm
      onFormReady={handleFormReady}
      onFormFailed={handleFormFailed}
      onFormSubmit={handleFormSubmit}
    />
  );
};

export default SampleChapterForm;
