
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
            className="bg-white rounded-xl shadow-lg p-4 h-[166px] w-full border border-gray-100 flex items-center justify-center"
            aria-label="DataOps Group Chatbot"
          >
            <p className="text-gray-400" id="chatbot-placeholder">Start typing here to ask your questions.</p>
            {/* Botpress will inject the chatbot here */}
            {/* The placeholder will be hidden when Botpress initializes */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
