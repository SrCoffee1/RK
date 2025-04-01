import React, { createContext, useState, useContext } from 'react';

const ContactContext = createContext();

export const useContacts = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Arthur', favorite: false },
    { id: 2, name: 'Beatriz', favorite: false },
    { id: 3, name: 'Gabriel', favorite: false },
    { id: 4, name: 'William', favorite: false },
  ]);

  const addContact = (contact) => {
    const newId = Math.max(0, ...contacts.map(c => c.id)) + 1;
    setContacts([
      ...contacts,
      {
        id: newId,
        ...contact,
        favorite: false
      }
    ]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const renameContact = (id, newName) => {
    if (newName && newName.trim()) {
      setContacts(contacts.map(contact => 
        contact.id === id ? { ...contact, name: newName } : contact
      ));
    }
  };

  const toggleFavorite = (id) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, favorite: !contact.favorite } : contact
    ));
  };

  return (
    <ContactContext.Provider value={{
      contacts,
      addContact,
      deleteContact,
      renameContact,
      toggleFavorite
    }}>
      {children}
    </ContactContext.Provider>
  );
};