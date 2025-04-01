import React from 'react';
import { useHistory } from 'react-router-dom';
import AddContactForm from '../components/Comp_Contatos/AddContatoForm';
import './Add_Contato.css';

const AddContactScreen = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="screen-container">
      <div className="add-contact-container">
        <div className="header">
          <button className="back-button" onClick={handleBack}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div className="avatar-container">
          <div className="avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
        
        <AddContactForm />
      </div>
    </div>
  );
};

export default Add_Contato;