import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext'; // Adjust the path as needed
import './LoginECadastro.css';

function LoginECadastro() {
  const [isLoginView, setIsLoginView] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme(); // Use the theme context

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoginView) {
      // Simples verificação de credenciais
      if (username === 'RiskAlert' && password === '123') {
        console.log('Login realizado com sucesso!');
        setLoginError('');
        // Redirecionando para o formulário ao invés de monitoramento
        navigate('/monitoramento');
      } else {
        console.log('Credenciais inválidas');
        setLoginError('Usuário ou senha incorretos.');
      }
    } else {
      console.log('Cadastro realizado');
      // Após cadastro, você pode redirecionar para o formulário também
      navigate('/formulario');
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setLoginError('');
  };

  return (
    <div className={`auth-container ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className={`auth-card ${isDarkTheme ? 'dark' : 'light'}`}>
        <div className={`auth-header ${isDarkTheme ? 'dark' : 'light'}`}>
          <h2>{isLoginView ? 'LOGIN' : 'CADASTRO'}</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {!isLoginView && (
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Nome" 
                className={isDarkTheme ? 'dark' : 'light'}
                required 
              />
            </div>
          )}

          {!isLoginView && (
            <div className="input-group">
              <input 
                type="email" 
                placeholder="Email" 
                className={isDarkTheme ? 'dark' : 'light'}
                required 
              />
            </div>
          )}

          {isLoginView && (
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Usuário" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={isDarkTheme ? 'dark' : 'light'}
                required 
              />
            </div>
          )}

          <div className="input-group">
            <input 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={isDarkTheme ? 'dark' : 'light'}
              required 
            />
          </div>

          {!isLoginView && (
            <div className="input-group">
              <input 
                type="password" 
                placeholder="Confirmar senha" 
                className={isDarkTheme ? 'dark' : 'light'}
                required 
              />
            </div>
          )}

          {isLoginView && (
            <p className={`forgot-password ${isDarkTheme ? 'dark' : 'light'}`}>Esqueceu a senha?</p>
          )}

          {!isLoginView && (
            <div className={`terms-checkbox ${isDarkTheme ? 'dark' : 'light'}`}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Li e concordo com os Termos</label>
            </div>
          )}

          {loginError && <p className="error-message">{loginError}</p>}

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