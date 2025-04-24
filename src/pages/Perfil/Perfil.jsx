import React, { useState } from 'react';
import './Perfil.css';

export default function Perfil() {
  const [user] = useState({
    name: 'Usário',
    email: 'usuario@gmail.com',
    location: 'Não informada',
    profileImage: '/api/placeholder/150/150'
  });

  return (
    <div className="perfil-container">
      <div className="perfil-image-container">
        <div className="perfil-image-wrapper">
          <img 
            src={user.profileImage} 
            alt="" 
            className="perfil-image"
          />
        </div>
      </div>

      {/* Nome do Usuário */}
      <h1 className="perfil-name">{user.name}</h1>

      {/* Cartão de Informações */}
      <div className="info-card">
        <h2 className="info-title">Informações</h2>
        
        <div className="info-row">
          <span className="info-label">Email:</span>
          <span className="info-value">{user.email}</span>
        </div>
        
        <div className="info-row">
          <span className="info-label">Localização:</span>
          <span className="info-value">{user.location}</span>
        </div>
      </div>

      {/* Botão de Editar Perfil */}
      <button className="editar-perfil-button">
        Editar Perfil
      </button>
    </div>
  );
}
