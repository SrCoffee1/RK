import React, { useState } from 'react';
import ContactMenu from './ContactMenu';
import './ContatoItem.css';

const ContactItem = ({ contact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="contact-item-container">
      <div className="contact-item">
        <div className="avatar-name">
          <div className="contact-avatar">
            {contact.name.charAt(0)}
          </div>
          <span className="contact-name">{contact.name}</span>
        </div>
        <button 
          className="menu-button"
          onClick={toggleMenu}
        >
          <span className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </span>
        </button>
      </div>
      
      {menuOpen && (
        <ContactMenu contactId={contact.id} onClose={() => setMenuOpen(false)} />
      )}
    </div>
  );
};

export default ContatoItem;