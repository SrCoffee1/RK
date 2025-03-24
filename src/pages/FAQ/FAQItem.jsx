import React from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className={`faq-item ${isActive ? "active" : ""}`}>
      <button className={`faq-button ${isActive ? "active" : ""}`} onClick={onClick}>
        <span className={`faq-question ${isActive ? "active" : ""}`}>{question}</span>
        <span className="faq-icon">
          {isActive ? (
            <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>

      {isActive && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};


export default FAQItem;