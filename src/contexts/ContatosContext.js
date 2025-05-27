import React, { createContext, useState, useContext } from 'react';

const ContatosContext = createContext();

export function ContatosProvider({ children }) {
  const [contatos, setContatos] = useState([]);
  const [contatoAtivo, setContatoAtivo] = useState(null);

  const adicionarContato = (novoContato) => {
    if (novoContato.nome.trim() !== '') {
      setContatos([...contatos, {
        id: contatos.length + 1,
        ...novoContato,
        favorito: false
      }]);
      return true;
    }
    return false;
  };

  const excluirContato = (id) => {
    setContatos(contatos.filter(contato => contato.id !== id));
    setContatoAtivo(null);
  };

  const atualizarContato = (id, novosDados) => {
    setContatos(contatos.map(contato =>
      contato.id === id ? { ...contato, ...novosDados } : contato
    ));
    setContatoAtivo(null);
  };

  const toggleFavorito = (id) => {
    setContatos(contatos.map(contato =>
      contato.id === id ? { ...contato, favorito: !contato.favorito } : contato
    ));
    setContatoAtivo(null);
  };

  const toggleMenu = (id) => {
    if (contatoAtivo === id) {
      setContatoAtivo(null);
    } else {
      setContatoAtivo(id);
    }
  };

  return (
    <ContatosContext.Provider value={{
      contatos,
      contatoAtivo,
      adicionarContato,
      excluirContato,
      atualizarContato,
      toggleFavorito,
      toggleMenu
    }}>
      {children}
    </ContatosContext.Provider>
  );
}

export function useContatos() {
  return useContext(ContatosContext);
}
