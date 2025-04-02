import React from 'react';
import './MenuOpcoes.css';
import { useContatos } from '../../contexts/ContatosContext';

function MenuOpcoes({ contato }) {
  const { renomearContato, toggleFavorito, excluirContato } = useContatos();

  const handleRenomear = () => {
    const novoNome = prompt('Novo nome:', contato.nome);
    if (novoNome && novoNome.trim() !== '') {
      renomearContato(contato.id, novoNome);
    }
  };

  return (
    <div className="menu-opcoes">
      <div className="lista-opcoes">
        <button 
          className="opcao-menu"
          onClick={handleRenomear}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icone-opcao">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>
          Renomear
        </button>
        
        <button 
          className="opcao-menu"
          onClick={() => toggleFavorito(contato.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icone-opcao">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Favoritar
        </button>
        
        <button 
          className="opcao-menu"
          onClick={() => excluirContato(contato.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icone-opcao">
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default MenuOpcoes;