
import React from 'react';

const ChatbotSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-dataops-600">
            Ask Me Anything
          </h2>
          <div 
            id="botpress-webchat-container" 
            className="bg-white rounded-xl shadow-lg p-4 h-[500px] w-full border border-gray-100"
            aria-label="DataOps Group Chatbot"
          >
            {/* Botpress will inject the chatbot here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
