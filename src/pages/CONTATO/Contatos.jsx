import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/Comp_Contatos/SearchBar';
import ContactList from '../components/Comp_Contatos/ContatoList';
import './Contatos.css';

const ContactsScreen = () => {
  const history = useHistory();

  const handleAddContact = () => {
    history.push('/add-contact');
  };

  return (
    <div className="screen-container">
      <div className="contacts-container">
        <SearchBar />
        
        <button 
          className="new-contact-button"
          onClick={handleAddContact}
        >
          <span className="plus-icon">+</span>
          <span>Novo contato</span>
        </button>
        
        <ContactList />
      </div>
    </div>
  );
};

export default Contatos;