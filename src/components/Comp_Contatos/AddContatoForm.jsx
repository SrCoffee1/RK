import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useContacts } from '../context/ContactContext';
import './AddContatoForm.css';

const AddContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });
  
  const { addContact } = useContacts();
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    if (formData.name.trim()) {
      addContact(formData);
      history.push('/');
    }
  };

  return (
    <div className="form-container">
      <div className="form-fields">
        <div className="form-field name-field">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-field">
          <input
            type="text"
            name="surname"
            placeholder="Sobrenome"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-field">
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      
      <div className="form-actions">
        <button 
          className="add-button"
          onClick={handleSubmit}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default AddContatoForm;