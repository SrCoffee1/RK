import React, { useState } from 'react';
import ListaContatos from './pages/ListaContatos/ListaContatos';
import FormNovoContato from './pages/FormNovoContato/FormNovoContato';

function MainApp() {
  const [telaAtual, setTelaAtual] = useState('lista');

  return (
    <>
      {telaAtual === 'lista' && <ListaContatos mudarTela={setTelaAtual} />}
      {telaAtual === 'novoContato' && <FormNovoContato mudarTela={setTelaAtual} />}
    </>
  );
}

export default MainApp;
