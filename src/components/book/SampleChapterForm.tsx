
import React, { useEffect, useRef, useState } from 'react';
import { Loader2, Mail, User, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SampleChapterForm = () => {
  const formLoadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const FORM_TIMEOUT = 10000; // 10 seconds timeout
    
    const timeoutId = setTimeout(() => {
      if (!formLoadedRef.current) {
        console.log('HubSpot form failed to load within timeout, showing fallback');
        setIsLoading(false);
        setShowFallback(true);
      }
    }, FORM_TIMEOUT);

    const initializeForm = () => {
      if (formLoadedRef.current) return;
      
      console.log('Attempting to initialize HubSpot form...');
      
      if (typeof window !== 'undefined' && window.hbspt && window.hbspt.forms) {
        try {
          const targetElement = document.getElementById('hubspot-sample-chapter-form');
          if (targetElement && !formLoadedRef.current) {
            console.log('Creating HubSpot form...');
            window.hbspt.forms.create({
              portalId: "21794360",
              formId: "2b7d8957-6b71-4c86-bb95-3c29e0d17e8a",
              region: "na1",
              target: "#hubspot-sample-chapter-form",
              onFormSubmit: () => {
                console.log('HubSpot form submitted successfully');
                clearTimeout(timeoutId);
                triggerFileDownload();
                
                if (window.gtag) {
                  window.gtag('event', 'form_submission', {
                    'event_category': 'Book',
                    'event_label': 'Sample Chapter Download',
                    'value': 1
                  });
                }
              },
              onFormReady: () => {
                console.log('HubSpot form ready');
                formLoadedRef.current = true;
                setIsLoading(false);
                clearTimeout(timeoutId);
              }
            });
          }
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
          clearTimeout(timeoutId);
          setIsLoading(false);
          setShowFallback(true);
        }
      } else {
        console.log('HubSpot not available, loading script...');
        loadHubSpotScript();
      }
    };

    const loadHubSpotScript = () => {
      const existingScript = document.querySelector('script[src*="js.hsforms.net"]');
      
      if (!existingScript) {
        console.log('Loading HubSpot script...');
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.async = true;
        
        script.onload = () => {
          console.log('HubSpot script loaded successfully');
          setTimeout(initializeForm, 100);
        };
        
        script.onerror = () => {
          console.error('Failed to load HubSpot forms script');
          clearTimeout(timeoutId);
          setIsLoading(false);
          setShowFallback(true);
        };
        
        document.head.appendChild(script);
      } else {
        console.log('HubSpot script already exists, initializing...');
        setTimeout(initializeForm, 100);
      }
    };

    initializeForm();

    return () => {
      clearTimeout(timeoutId);
      formLoadedRef.current = false;
    };
  }, []);

  const triggerFileDownload = () => {
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1I5hdGjfk62vYf_rMBWlrhrrj6p6SUS6h';
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'CMO-Data-Playbook-Sample-Chapter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.email) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in a real app, you'd send this to your backend)
      console.log('Fallback form submitted:', formData);
      
      // Track the submission
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          'event_category': 'Book',
          'event_label': 'Sample Chapter Download - Fallback',
          'value': 1
        });
      }
      
      // Trigger download
      triggerFileDownload();
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting fallback form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Download className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
        <p className="text-gray-600">Your download should start automatically. If not, please check your downloads folder.</p>
      </div>
    );
  }

  if (showFallback) {
    return (
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Get Your Free Sample Chapter</h3>
          <p className="text-sm text-gray-600">Fill out the form below to download instantly</p>
        </div>
        
        <form onSubmit={handleFallbackSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name *
            </Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="pl-10"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="pl-10"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Download Sample Chapter
              </>
            )}
          </Button>
        </form>
        
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive marketing communications from DataOps Group.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-[400px]">
      {isLoading && (
        <div className="flex flex-col items-center justify-center h-40 space-y-3">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <p className="text-gray-500 text-sm">Loading form...</p>
        </div>
      )}
      <div id="hubspot-sample-chapter-form" className={isLoading ? 'hidden' : ''}></div>
    </div>
  );
};

export default SampleChapterForm;
