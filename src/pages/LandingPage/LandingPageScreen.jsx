import React, { useState } from 'react';
import './LandingPageScreen.css';
import logo from '../../assets/images/Logo.png';

function LandingPageScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <div className="aplicativo">
      <header className="cabecalho">
        <div className="logo">RISKALERT</div>
        <nav className="navegacao">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="/login">Entrar</a></li>
          </ul>
        </nav>
      </header>

      <main className="conteudo-principal">
        <div id="home" className="container-boas-vindas">
          <img
            src={logo}
            alt="Ilustração de boas-vindas"
            className="imagem-boas-vindas"
          />
          
          <h1 className="titulo-boas-vindas">
            BEM VINDO AO<br/>
            RISK ALERT
          </h1>
          
          <p className="texto-boas-vindas">
            Nosso sistema de monitoramento em tempo real, com análise inteligente por IA, identifica situações críticas como quedas ou falta de movimento. Receba alertas imediatos via WhatsApp para manter seus entes queridos sempre protegidos.
          </p>
        </div>


        {/* Seção Sobre */}
        <div id="sobre" className="container-sobre">
          <h2 className="titulo-sobre">Sobre nós</h2>
          <p className="texto-sobre">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, neque commodi architecto deleniti nesciunt tempore molestiae earum delectus velit iure doloremque fugiat eius culpa beatae animi, nam unde sequi a.
          </p>
        </div>


        {/* Seção Contato */}
        <div id="contato" className="container-contato">
          <h2 className="titulo-contato"></h2>
          
          <div className="contact-card">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="info-text">
                <h3>EMAIL</h3>
                <p>riskalert@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
          <div className="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div className="info-text">
            <h3>HORÁRIO DE FUNCIONAMENTO</h3>

          </div>
        </div>
          </div>
            
            <div className="contact-form">
              <h2>CONTATE-NOS</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Deixe aqui a sua mensagem..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button type="submit" className="submit-btn">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="rodape">
        <div className="informacoes-rodape">
          <p>&copy; 2025 RiskAlert. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPageScreen;
