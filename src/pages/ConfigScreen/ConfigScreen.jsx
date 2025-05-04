import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfigScreen.css';
import { Sun, Moon, LogOut, FileText, Settings } from 'lucide-react';
import FormularioEdit from '../FormularioPage/FormularioEdit';
import { useTheme } from '../../contexts/ThemeContext'; // Adjust the path as needed

const ConfigScreen = () => {
  const [showFormulario, setShowFormulario] = useState(false);
  const navigate = useNavigate();
  const { isDarkTheme, toggleTheme } = useTheme(); // Use the theme context

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
    <div className={`config-container ${isDarkTheme ? 'dark' : 'light'}`}>
      {showFormulario ? (
        <FormularioEdit onClose={handleCloseFormulario} />
      ) : (
        <div className="config-box">
          <div className="config-header">
            <div className="gear-icon">
              <Settings size={40} color={isDarkTheme ? "#fff" : "#333"} />
            </div>
            <h1>Configurações</h1>
          </div>
          
          <div className="config-menu">
            <button className="config-option" onClick={toggleTheme}>
              {isDarkTheme ? (
                <Sun size={24} color="#aaa" />
              ) : (
                <Moon size={24} color="#666" />
              )}
              <span>Tema: {isDarkTheme ? 'Escuro' : 'Claro'}</span>
            </button>

            <button className="config-option" onClick={handleFormularioClick}>
              <FileText size={24} color={isDarkTheme ? "#aaa" : "#666"} />
              <span>Formulário</span>
            </button>
            
            <button className="config-option" onClick={handleLogout}>
              <LogOut size={24} color={isDarkTheme ? "#aaa" : "#666"} />
              <span>Logout</span>
            </button>
            
            <button className="config-option">
              <Settings size={24} color={isDarkTheme ? "#aaa" : "#666"} />
              <span>Gerenciamento de contas</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigScreen;