import React, { useState } from 'react';
import './LandingPageScreen.css';
import logo from '../../assets/images/Logo.png';
import cameraIcon from '../../assets/images/LogoTEste.png';

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
        <div className="logo">
          <img
            src={logo}
            alt="Ilustração de boas-vindas"
            className="img-logo"
          />
          <h1>RISKALERT</h1>
        </div>
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
            Sua segurança e o cuidado com sua familia é nossa <span>prioridade!</span>

          </h1>

          <p className="texto-boas-vindas">
            Nosso sistema de monitoramento em tempo real, com análise inteligente por IA, identifica situações críticas como quedas ou falta de movimento. Receba alertas imediatos via WhatsApp para manter seus entes queridos sempre protegidos.
          </p>
        </div>

        {/* Seção Sobre */}
        <div id="sobre" className="container-sobre">
          <div className="conteudo-sobre">
            <div className="texto-sobre">
              <h1 className="title-sobre">SOBRE NÓS</h1>
              <p className="paragrafo-sobre">Nossa equipe é formada por profissionais altamente qualificados, que reúnem conhecimentos aprofundados nas áreas de tecnologia, saúde e segurança. Trabalhamos de maneira constante e dedicada para aprimorar o RiskAlert, garantindo que o sistema evolua sempre em precisão, confiabilidade e eficiência. Entendemos que a segurança dos seus entes queridos não pode esperar, por isso investimos em inovação e excelência para entregar uma solução que realmente faz a diferença no dia a dia.</p>
            </div>
            <div className="imagem-sobre">
              <img src={cameraIcon} alt="Câmera de segurança" className="icone-camera" />
            </div>
          </div>
        </div>

        {/* Seção Contato */}
        <h1 className="titulo-contato">CONTATE-NOS</h1>
        <div id="contato" className="container-contato">
          <div className="painel-contato">
            <div className="lado-info">
              {/* Ícone de Localização */}
              <div className="item-info">
                <div className="icone-info icone-info-localizacao">
                  {/* Ícone de Localização do Material Icons */}
                  <span className="material-icons">location_on</span>
                </div>
                <div className="texto-info">
                  <h3>Localização</h3>
                  <p>123 Rua Exemplo, Feira de Santana, Brasil</p>
                </div>
              </div>

              {/* Ícone de Telefone */}
              <div className="item-info">
                <div className="icone-info icone-info-telefone">
                  {/* Ícone de Telefone do Material Icons */}
                  <span className="material-icons">phone</span>
                </div>
                <div className="texto-info">
                  <h3>Telefone</h3>
                  <p>+55 00 0000-0000</p>
                </div>
              </div>

              {/* Ícone de Email */}
              <div className="item-info">
                <div className="icone-info icone-info-email">
                  {/* Ícone de Email do Material Icons */}
                  <span className="material-icons">email</span>
                </div>
                <div className="texto-info">
                  <h3>Email</h3>
                  <p>riskalert@gmail.com</p>
                </div>
              </div>
            </div>


            <div className="lado-formulario">
              <h2 className="titulo-enviar">Envie sua mensagem</h2>

              <form onSubmit={handleSubmit} className="formulario-contato">
                <div className="grupo-campo">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="campo-entrada"
                  />
                </div>

                <div className="grupo-campo">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="campo-entrada"
                  />
                </div>

                <div className="grupo-campo">
                  <textarea
                    name="message"
                    placeholder="Deixe aqui sua mensagem..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="campo-texto"
                  />
                </div>

                <button type="submit" className="botao-enviar">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer>
        <div className="footer_info">
          <div className="footer_width about">
            <h2>Sobre</h2>
            <p>Bem-vindo à RiskAlert, onde tecnologia e cuidado caminham juntos para proteger o que mais importa.</p>
            <div className="social-media">
              <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="footer_width link">
            <h2>Links</h2>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="/login">Entrar</a></li>
            </ul>
          </div>
          <div className="footer_width contact">
            <h2>Contato</h2>
            <ul>
              <li><span><i className="fas fa-map-marker-alt"></i></span><p>123 Rua Exemplo, São Paulo, Brasil</p></li>
              <li><span><i className="fas fa-envelope"></i></span><a href="mailto:riskalert@gmail.com">riskalert@gmail.com</a></li>
              <li><span><i className="fas fa-phone-volume"></i></span><a href="tel:+550000000000">+55 00 0000-0000</a></li>
            </ul>
          </div>
        </div>
        <div className="copy-right">
          <p>&copy; COPYRIGHT 2025 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPageScreen;
