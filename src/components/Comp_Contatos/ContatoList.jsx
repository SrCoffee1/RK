import React from 'react';
import { useContacts } from '../context/ContactContext';
import ContactItem from './ContactItem';
import './ContatoList.css';

const ContactList = () => {
  const { contacts } = useContacts();

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContatoList;