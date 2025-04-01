import React from 'react';
import { useContacts } from '../context/ContactContext';
import './ContatoMenu.css';

const ContactMenu = ({ contactId, onClose }) => {
  const { renameContact, toggleFavorite, deleteContact } = useContacts();

  const handleRename = () => {
    const newName = prompt('Novo nome:');
    renameContact(contactId, newName);
    onClose();
  };

  const handleFavorite = () => {
    toggleFavorite(contactId);
    onClose();
  };

  const handleDelete = () => {
    deleteContact(contactId);
    onClose();
  };

  return (
    <div className="contact-menu">
      <div className="menu-options">
        <button 
          className="menu-option"
          onClick={handleRename}
        >
          <span className="option-icon">✏️</span> Renomear
        </button>
        <button 
          className="menu-option"
          onClick={handleFavorite}
        >
          <span className="option-icon">⭐</span> Favoritar
        </button>
        <button 
          className="menu-option"
          onClick={handleDelete}
        >
          <span className="option-icon">🗑️</span> Excluir
        </button>
      </div>
    </div>
  );
};

export default ContatoMenu;