import React from 'react';
import './BarraPesquisa.css';
import { useTheme } from '../../contexts/ThemeContext'; // Importando o contexto de tema

function BarraPesquisa() {
  const { isDarkTheme } = useTheme(); // Usando o hook de tema
  
  return (
    <div className={`barra-pesquisa ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="icone-pesquisa">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Pesquisar nome ou número..."
        className="campo-pesquisa"
      />
    </div>
  );
}

export default BarraPesquisa;