import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPageScreen.css';
import logo from '../../assets/images/Logo.png';

function LandingPageScreen() {
  return (
    <div className="aplicativo">
      <header className="cabecalho">
        <div className="logo">RISKALERT</div>
        <nav className="navegacao">
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <Link to="/login">
            <button className="botao-login">Entrar</button>
        </Link>
      </header>
      
      <main className="conteudo-principal">
        <div className="container-boas-vindas">
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
      </main>
    </div>
  );
}

export default LandingPageScreen;