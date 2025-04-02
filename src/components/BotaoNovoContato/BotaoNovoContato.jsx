import React from 'react';
import './BotaoNovoContato.css';

function BotaoNovoContato({ onClick }) {
  return (
    <button 
      className="botao-novo-contato"
      onClick={onClick}
    >
      <div className="icone-novo-contato">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" x2="19" y1="8" y2="14" />
          <line x1="16" x2="22" y1="11" y2="11" />
        </svg>
      </div>
      <span>Novo contato</span>
    </button>
  );
}

export default BotaoNovoContato;