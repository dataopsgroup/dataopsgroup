
import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loading from './components/Loading';
import ErrorDisplay from './components/ErrorDisplay';
import CookieConsent from 'react-cookie-consent';
import PrivacyModal from './components/PrivacyModal';
import router from './routes';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <div className="relative">
      {isLoading && <Loading />}
      {error && <ErrorDisplay message={error.message} />}
      
      <RouterProvider router={router} />
      
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="dataopsCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        onAccept={() => {
          // Handle analytics or other tracking services here
        }}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px", cursor: "pointer", textDecoration: 'underline' }} onClick={() => setIsPrivacyModalOpen(true)}>
          Learn More
        </span>
      </CookieConsent>

      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </div>
  );
}

export default App;
