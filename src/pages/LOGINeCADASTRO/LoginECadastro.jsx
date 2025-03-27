import React, { useState } from 'react';
import './LoginECadastro.css';

function LoginECadastro() {
  const [isLoginView, setIsLoginView] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginView) {
      console.log('Login realizado');
    } else {
      console.log('Cadastro realizado');
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>{isLoginView ? 'LOGIN' : 'CADASTRO'}</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLoginView && (
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Nome" 
                required={!isLoginView} 
              />
            </div>
          )}
          
          {!isLoginView && (
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Email" 
                required 
              />
            </div>
          )}
          
          {isLoginView && (
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Usuário" 
                required 
              />
            </div>
          )}
          
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Senha" 
              required 
            />
          </div>
          
          {!isLoginView && (
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Confirmar senha" 
                required={!isLoginView} 
              />
            </div>
          )}
          
          {isLoginView && (
            <p className="forgot-password">Esqueceu a senha?</p>
          )}
          
          {!isLoginView && (
            <div className="terms-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Li e concordo com os Termos</label>
            </div>
          )}
          
          <button type="submit" className="submit-btn">
            {isLoginView ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>
        
        <div className="toggle-container">
          <button 
            type="button" 
            className="toggle-btn" 
            onClick={toggleView}
          >
            {isLoginView ? 'Registro' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginECadastro;