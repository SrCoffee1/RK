import React, { useState } from 'react';
import './FAQ.css';
import { faqData } from './FaqData.js';   
import FAQItem from './FAQItem';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">FAQs</h1>
        
        <p className="faq-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Saepe, sequi repudiandae distinctio ratione placeat optio
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe, sequi repudiandae
        </p>
        
        <div className="faq-items">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
