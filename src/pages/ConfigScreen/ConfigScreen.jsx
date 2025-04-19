// src/components/ConfigScreen/ConfigScreen.jsx
import React from 'react';
import './ConfigScreen.css';
import { Sun, Phone, LogOut, Settings } from 'lucide-react';

const ConfigScreen = () => {
  return (
    <div className="config-container">
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
          
          <button className="config-option">
            <Phone size={24} color="#aaa" />
            <span>Contato</span>
          </button>
          
          <button className="config-option">
            <LogOut size={24} color="#aaa" />
            <span>Logout</span>
          </button>
          
          <button className="config-option">
            <Settings size={24} color="#aaa" />
            <span>Gerenciamento de contas</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfigScreen;