import React, { useState } from 'react';
import { useContatos } from '../../contexts/ContatosContext';
import { useTheme } from '../../contexts/ThemeContext'; // Adjust the path as needed
import './FormNovoContato.css';

function FormNovoContato({ mudarTela }) {
  const { adicionarContato } = useContatos();
  const { isDarkTheme } = useTheme(); // Use the theme context
  const [novoContato, setNovoContato] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoContato((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sucesso = adicionarContato(novoContato);

    if (sucesso) {
      setNovoContato({
        nome: '',
        sobrenome: '',
        telefone: '',
        email: '',
      });
      mudarTela('lista');
    }
  };

  return (
    <div className={`form-novo-contato ${isDarkTheme ? 'dark' : 'light'}`}>
      <button onClick={() => mudarTela('lista')} className='botao-voltar'> &lt; </button>

      <form onSubmit={handleSubmit}>
        <div className="avatar-container">
          <div className="avatar-placeholder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isDarkTheme ? "white" : "#333"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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

        <button type="submit" className="botao-salvar">Salvar</button>
      </form>
    </div>
  );
}

export default FormNovoContato;