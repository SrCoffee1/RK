import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfigScreen.css';
import { Sun, LogOut, FileText, Settings } from 'lucide-react';
import FormularioEdit from '../FormularioPage/FormularioEdit';

const ConfigScreen = () => {
  const [showFormulario, setShowFormulario] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implementar lógica de logout se necessário
    navigate('/login');
  };

  const handleFormularioClick = () => {
    setShowFormulario(true);
  };

  const handleCloseFormulario = () => {
    setShowFormulario(false);
  };

  return (
    <div className="config-container">
      {showFormulario ? (
        <FormularioEdit onClose={handleCloseFormulario} />
      ) : (
        <div className="config-box">
          <div className="config-header">
            <div className="gear-icon">
              <Settings size={40} color="#fff" />
            </div>
            <h1>Configurações</h1>
          </div>
          
          <div className="config-menu">
            <button className="config-option">
              <Sun size={24} color="#aaa" />
              <span>Tema</span>
            </button>

            <button className="config-option" onClick={handleFormularioClick}>
              <FileText size={24} color="#aaa" />
              <span>Formulário</span>
            </button>
            
            <button className="config-option" onClick={handleLogout}>
              <LogOut size={24} color="#aaa" />
              <span>Logout</span>
            </button>
            
            <button className="config-option">
              <Settings size={24} color="#aaa" />
              <span>Gerenciamento de contas</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigScreen;