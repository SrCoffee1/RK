import React from 'react';
import './Perfil.css';

const Perfil = () => {
  const usuario = {
    nome: 'João da Silva',
    email: 'joao@email.com',
    bio: 'Desenvolvedor Front-end apaixonado por tecnologia e café.',
    imagem: 'https://via.placeholder.com/150' // você pode trocar por uma imagem real
  };

  return (
    <section className="perfil-container">
      <img className="perfil-imagem" src={usuario.imagem} alt="Foto do perfil" />
      <h1 className="perfil-nome">{usuario.nome}</h1>
      <p className="perfil-email">{usuario.email}</p>
      <p className="perfil-bio">{usuario.bio}</p>
    </section>
  );
};

export default Perfil;
