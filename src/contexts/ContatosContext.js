import React, { createContext, useState, useContext } from 'react';

const ContatosContext = createContext();

export function ContatosProvider({ children }) {
    const [contatos, setContatos] = useState([
        { id: 1, nome: 'Arthur MOrgan', favorito: false },
        { id: 2, nome: 'Beatriz', favorito: false },
        { id: 3, nome: 'Gabriel', favorito: false },
        { id: 4, nome: 'William', favorito: false }
    ]);
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

    const renomearContato = (id, novoNome) => {
        setContatos(contatos.map(contato =>
            contato.id === id ? {...contato, nome: novoNome } : contato
        ));
        setContatoAtivo(null);
    };

    const toggleFavorito = (id) => {
        setContatos(contatos.map(contato =>
            contato.id === id ? {...contato, favorito: !contato.favorito } : contato
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

    return ( <
        ContatosContext.Provider value = {
            {
                contatos,
                contatoAtivo,
                adicionarContato,
                excluirContato,
                renomearContato,
                toggleFavorito,
                toggleMenu
            }
        } > { children } <
        /ContatosContext.Provider>
    );
}

export function useContatos() {
    return useContext(ContatosContext);
}