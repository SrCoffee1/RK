import React, { useState } from 'react';
import './MenuOpcoes.css';
import { useContatos } from '../../contexts/ContatosContext';

function MenuOpcoes({ contato, onFechar }) {
  const { atualizarContato, toggleFavorito, excluirContato } = useContatos();
  const [editando, setEditando] = useState(false);
  const [erroFormulario, setErroFormulario] = useState('');
  const [formDados, setFormDados] = useState({
    nome: contato.nome,
    sobrenome: contato.sobrenome,
    telefone: contato.telefone,
    email: contato.email,
  });

  const handleChange = (e) => {
    setFormDados({ ...formDados, [e.target.name]: e.target.value });
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    if (
      formDados.nome.trim() &&
      formDados.sobrenome.trim() &&
      formDados.telefone.trim() &&
      formDados.email.trim()
    ) {
      atualizarContato(contato.id, formDados);
      setEditando(false);
      setErroFormulario('');
      if (onFechar) onFechar();
    } else {
      setErroFormulario('Por favor, preencha todos os campos.');
      setTimeout(() => setErroFormulario(''), 3000);
    }
  };

  return (
    <>
      <div className="menu-opcoes">
        <div className="lista-opcoes">
          <button className="opcao-menu" onClick={() => setEditando(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icone-opcao">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
            Editar
          </button>

          <button className="opcao-menu" onClick={() => toggleFavorito(contato.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icone-opcao">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Favoritar
          </button>

          <button className="opcao-menu" onClick={() => excluirContato(contato.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icone-opcao">
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
            Excluir
          </button>
        </div>
      </div>

      {editando && (
        <div className="modal-overlay" onClick={() => {
          setEditando(false);
          setErroFormulario('');
          if (onFechar) onFechar();
        }}>
          <div className="modal-edicao" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <form className="form-edicao" onSubmit={handleSalvar}>
              {erroFormulario && (
                <div className="aviso-erro">{erroFormulario}</div>
              )}
              <input
                name="nome"
                placeholder="Nome"
                value={formDados.nome}
                onChange={handleChange}
                autoFocus
              />
              <input
                name="sobrenome"
                placeholder="Sobrenome"
                value={formDados.sobrenome}
                onChange={handleChange}
              />
              <input
                name="telefone"
                placeholder="Telefone"
                value={formDados.telefone}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={formDados.email}
                onChange={handleChange}
              />
              <button type="submit" className="btn-confirmar">Salvar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuOpcoes;
