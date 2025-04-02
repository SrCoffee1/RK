import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Como configurar os sensores?",
      answer: "Loremafuihiuwsh ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    },
    {
      question: "Como visualizar as câmeras?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    },
    {
      question: "Como visualizar as câmeras?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    },
    {
      question: "Como visualizar as câmeras?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sequi repudiandae distinctio ratione placeat optio"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-6">FAQs</h1>
        
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Saepe, sequi repudiandae distinctio ratione placeat optio
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe, sequi repudiandae
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-l-4 border-blue-500 overflow-hidden">
              <button
                className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none ${
                  activeIndex === index ? "bg-gray-700" : "bg-gray-800"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {activeIndex === index ? (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 py-4 bg-gray-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
