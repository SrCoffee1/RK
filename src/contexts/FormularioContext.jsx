import React, { createContext, useState, useContext, useEffect } from 'react';

// Criando o Context
const FormularioContext = createContext();

// Provider Component
export const FormularioProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    // Tenta recuperar dados armazenados no localStorage
    const savedData = localStorage.getItem('formularioData');
    return savedData 
      ? JSON.parse(savedData) 
      : {
          nome: "",
          dataNascimento: "",
          genero: "",
          endereco: "",
          observacoes: "",
          horarioAcorda: "",
          horarioDorme: "",
        };
  });

  // Atualiza o localStorage sempre que formData mudar
  useEffect(() => {
    localStorage.setItem('formularioData', JSON.stringify(formData));
  }, [formData]);

  // Método para atualizar os dados do formulário
  const updateFormData = (newData) => {
    setFormData(newData);
  };

  return (
    <FormularioContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormularioContext.Provider>
  );
};

// Hook personalizado para usar o context
export const useFormulario = () => {
  const context = useContext(FormularioContext);
  if (!context) {
    throw new Error('useFormulario deve ser usado dentro de um FormularioProvider');
  }
  return context;
};