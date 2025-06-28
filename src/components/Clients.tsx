
import React from 'react';

const clients = [
  "Client Logo 1",
  "Client Logo 2", 
  "Client Logo 3",
  "Client Logo 4",
  "Client Logo 5",
  "Client Logo 6"
];

const Clients = () => {
  return (
    <section id="clients" className="section-padding bg-dataops-50">
      <div className="container mx-auto">
        {/* Clients Logos */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h3>
          <p className="text-gray-600">
            We partner with companies of all sizes across various industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="h-24 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 font-semibold"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
