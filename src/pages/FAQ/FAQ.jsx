import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Qual o critério para detectar um alerta?",
      answer: "Nosso sistema atualiza algoritmos de visão computacional para identificar quedas bruscas e posturas incomuns."
    },
    {
      question: "Quanto tempo leva para o sistema enviar um alerta?",
      answer: "A detecção ocoree em tempo real (menos de 2 segundos), com a notificação imediata aos responsáveis através do app e SMS."
    },
    {
      question: "Quais emergências o sistema pode detectar?",
      answer: "Detecção de quedas, imodidade prolongada, convulsões, sangramentos intensos e padrões respiratórios anormais."
    },
    {
      question: "Como confirmar um falso positivo?",
      answer: "Após detecção, o paciente tem 30 segundos para cancelar o alerta. Caso não responda, é acionado o protocolo de emergência."
    },
    {
      question: "O sistema armazena imagens dos pacientes?",
      answer: "Exemplo de resposta sobre relatórios."
    },
    {
      question: "Como entrar em contato com a equipe de suporte?",
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
