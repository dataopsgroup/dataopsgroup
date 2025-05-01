
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Helmet } from 'react-helmet-async';
import { toast } from '@/components/ui/sonner';

const PerplexityPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [savedApiKey, setSavedApiKey] = useState(() => {
    return localStorage.getItem('perplexity_api_key') || '';
  });

  const saveApiKey = () => {
    if (apiKey) {
      localStorage.setItem('perplexity_api_key', apiKey);
      setSavedApiKey(apiKey);
      setApiKey('');
      toast.success('API key saved successfully!');
    } else {
      toast.error('Please enter an API key');
    }
  };

  const clearApiKey = () => {
    localStorage.removeItem('perplexity_api_key');
    setSavedApiKey('');
    toast.success('API key cleared');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!savedApiKey) {
      toast.error('Please save your Perplexity API key first');
      return;
    }
    
    if (!message) {
      toast.error('Please enter a message');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${savedApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'Be precise and concise.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 1000,
          return_images: false,
          return_related_questions: false,
          search_domain_filter: ['perplexity.ai'],
          search_recency_filter: 'month',
          frequency_penalty: 1,
          presence_penalty: 0
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setResponse(data.choices[0].message.content);
      } else {
        toast.error(`Error: ${data.error?.message || 'Something went wrong'}`);
      }
    } catch (err) {
      console.error('Error calling Perplexity API:', err);
      toast.error('Failed to connect to Perplexity API');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <Helmet>
        <title>Perplexity AI - DataOps Group</title>
      </Helmet>
      <Navbar />
      <main className="content-wrapper pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-dataops-900 mb-6">Perplexity AI Integration</h1>
            
            <Card className="mb-8 border-2 border-dataops-100">
              <CardHeader>
                <CardTitle>API Key Management</CardTitle>
                <CardDescription>
                  Enter your Perplexity API key below. Your key will be stored in your browser's localStorage.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <Input 
                    type="password"
                    placeholder="Enter your Perplexity API key"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                  />
                  <div className="flex flex-row gap-2">
                    <Button onClick={saveApiKey} className="w-full">Save API Key</Button>
                    {savedApiKey && (
                      <Button variant="destructive" onClick={clearApiKey} className="w-full">Clear API Key</Button>
                    )}
                  </div>
                </div>
                {savedApiKey && (
                  <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md">
                    <p className="text-sm">✓ API key is saved</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="mb-8 border-2 border-dataops-100">
              <CardHeader>
                <CardTitle>Ask Perplexity</CardTitle>
                <CardDescription>
                  Enter your question or prompt below to receive a response from Perplexity AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea 
                    placeholder="Enter your question or prompt here"
                    className="min-h-[100px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button type="submit" disabled={isLoading || !savedApiKey} className="w-full">
                    {isLoading ? 'Processing...' : 'Send to Perplexity'}
                  </Button>
                </form>
              </CardContent>
              {response && (
                <CardFooter className="flex flex-col items-start">
                  <h3 className="text-lg font-semibold mb-2">Response:</h3>
                  <div className="bg-gray-50 p-4 rounded-md w-full text-left whitespace-pre-wrap">
                    {response}
                  </div>
                </CardFooter>
              )}
            </Card>

            <div className="text-sm text-gray-500 mt-8">
              <p>Note: This is a temporary implementation that stores your API key in browser storage. For a more secure implementation, we recommend connecting this project to Supabase.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PerplexityPage;
