import React from 'react';
import './ListaContatos.css';
import { useContatos } from '../../contexts/ContatosContext';
import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa';
import BotaoNovoContato from '../../components/BotaoNovoContato/BotaoNovoContato';
import ContatoItem from '../../components/ContatoItem/ContatoItem';

function ListaContatos({ mudarTela }) {
  const { contatos, contatoAtivo } = useContatos();

  return (
    <div className="lista-contatos">
      <BarraPesquisa />
      <BotaoNovoContato onClick={() => mudarTela('novoContato')} />
      
      <div className="contatos-container">
        {contatos.map((contato) => (
          <ContatoItem 
            key={contato.id} 
            contato={contato} 
            mostraMenu={contatoAtivo === contato.id} 
          />
        ))}
      </div>
    </div>
  );
}

export default ListaContatos;
