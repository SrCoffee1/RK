import { useState } from 'react';
import './AuthStyles.css';
import {FaUser}  from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";

function AuthSystem({ onLoginSuccess }) {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLoginView) {
      try {
        const response = await mockLoginApi(formData.username, formData.password);
        
        onLoginSuccess(response);
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Falha no login. Verifique suas credenciais.');
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('As senhas não conferem.');
        return;
      }
      
      if (!termsAccepted) {
        alert('Você precisa aceitar os termos para criar uma conta.');
        return;
      }
      
      try {
        await mockSignupApi(formData);
        
        setIsLoginView(true);
        alert('Cadastro realizado com sucesso! Faça login para continuar.');
        
        setFormData({
          username: '',
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Falha no cadastro. Tente novamente.');
      }
    }
  };

  const mockLoginApi = (username, password) => {
    return new Promise((resolve, reject) => {
      if (username && password) {
        setTimeout(() => {
          resolve({
            token: 'exemplo-token-jwt',
            user: { id: 1, username }
          });
        }, 500);
      } else {
        reject(new Error('Credenciais inválidas'));
      }
    });
  };

  const mockSignupApi = (userData) => {
    return new Promise((resolve, reject) => {
      if (userData.name && userData.email && userData.password) {
        setTimeout(() => {
          resolve({ success: true });
        }, 500);
      } else {
        reject(new Error('Dados incompletos'));
      }
    });
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setFormData({
      username: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setTermsAccepted(false);
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
              <FaUser className="input-icon" />
              <input 
                type="text" 
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLoginView} 
              />
            </div>
          )}
          
          {!isLoginView && (
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input 
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required={!isLoginView}
              />
            </div>
          )}
          
          {isLoginView && (
            <div className="input-group">
              <FaUser className="input-icon" />
              <input 
                type="text"
                name="username"
                placeholder="Usuário"
                value={formData.username}
                onChange={handleInputChange}
                required={isLoginView}
              />
            </div>
          )}
          
          <div className="input-group">
            <FaLock className="input-icon" />
            <input 
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleInputChange}
              required 
            />
          </div>
          
          {!isLoginView && (
            <div className="input-group">
              <FaCheck className="input-icon" />
              <input 
                type="password"
                name="confirmPassword"
                placeholder="Confirmar senha"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLoginView}
              />
            </div>
          )}
          
          {isLoginView && (
            <p className="forgot-password">Esqueceu a senha?</p>
          )}
          
          {!isLoginView && (
            <div className="terms-checkbox">
              <input 
                type="checkbox" 
                id="terms" 
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required 
              />
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

export default AuthSystem;