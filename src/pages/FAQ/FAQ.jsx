import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Como configurar os sensores?",
      answer: "Exemplo de resposta sobre sensores."
    },
    {
      question: "Como visualizar as câmeras?",
      answer: "Exemplo de resposta sobre câmeras."
    },
    {
      question: "Como ativar os alarmes?",
      answer: "Exemplo de resposta sobre alarmes."
    },
    {
      question: "Como acessar relatórios?",
      answer: "Exemplo de resposta sobre relatórios."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">FAQs</h1>

        <p className="faq-description">
          Aqui estão algumas dúvidas comuns sobre o sistema e como resolvê-las.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question-button ${
                  activeIndex === index ? "faq-active" : "faq-inactive"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? (
                    <svg className="faq-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="faq-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
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
