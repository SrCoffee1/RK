import React, { useState } from 'react';
import './FormNovoContato.css';
import { useContatos } from '../../contexts/ContatosContext';

function FormNovoContato({ mudarTela }) {
  const { adicionarContato } = useContatos();
  const [novoContato, setNovoContato] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoContato({ ...novoContato, [name]: value });
  };

  const handleSubmit = () => {
    if (adicionarContato(novoContato)) {
      mudarTela('contatos');
    }
  };

  return (
    <div className="form-novo-contato">
      <div className="header-form">
        <button 
          className="botao-voltar"
          onClick={() => mudarTela('contatos')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>
      
      <div className="avatar-container">
        <div className="avatar-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
      
      <div className="form-campos">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoContato.nome}
          onChange={handleInputChange}
          className="campo-formulario"
        />
        
        <input
          type="text"
          name="sobrenome"
          placeholder="Sobrenome"
          value={novoContato.sobrenome}
          onChange={handleInputChange}
          className="campo-formulario"
        />
        
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={novoContato.telefone}
          onChange={handleInputChange}
          className="campo-formulario"
        />
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={novoContato.email}
          onChange={handleInputChange}
          className="campo-formulario"
        />
      </div>
      
      <button
        className="botao-adicionar"
        onClick={handleSubmit}
      >
        Adicionar
      </button>
    </div>
  );
}

export default FormNovoContato;