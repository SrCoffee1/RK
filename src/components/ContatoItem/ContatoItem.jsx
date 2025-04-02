import React from 'react';
import './ContatoItem.css';
import { useContatos } from '../../contexts/ContatosContext';
import MenuOpcoes from '../MenuOpcoes/MenuOpcoes';

function ContatoItem({ contato, mostraMenu }) {
  const { toggleMenu } = useContatos();

  return (
    <div className="contato-item-container">
      <div className="contato-item">
        <div className="contato-avatar">
          {contato.favorito && <span className="estrela-favorito">★</span>}
        </div>
        <span className="contato-nome">{contato.nome}</span>
        <button 
          className="botao-opcoes"
          onClick={() => toggleMenu(contato.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-horizontal">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
      
      {mostraMenu && <MenuOpcoes contato={contato} />}
    </div>
  );
}

export default ContatoItem;