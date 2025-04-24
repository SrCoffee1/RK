import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FAQ from './pages/FAQ/FAQ';
import LoginECadastro from './pages/LOGINeCADASTRO/LoginECadastro';
import { ContatosProvider } from './contexts/ContatosContext';
import MainApp from './MainApp';
import Monitoramento from './pages/Monitoramento/Monitoramento';
import Sidebar from './components/SidebarPackage/Sidebar';
import './global.css';
import ConfigScreen from './pages/ConfigScreen/ConfigScreen';
import NotificationScreen from './pages/NotificationScreen/Notification';
import Perfil from './pages/Perfil/Perfil';
import LandingPageScreen from './pages/LandingPage/LandingPageScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <div className="app-container">
            <LandingPageScreen />
          </div>
        } />

        <Route path="/login" element={
          <div className="app-container">
            <LoginECadastro />
          </div>
        } />

        <Route path="/monitoramento" element={
          <div className="app-container">
            <Sidebar />
            <Monitoramento />
          </div>
        } />

        <Route path="/contatos" element={
          <ContatosProvider>
            <div className="app-container">
              <Sidebar />
              <MainApp page="Contatos" />
            </div>
          </ContatosProvider>
        } />

        <Route path="/notifications" element={
          <div className="app-container">
            <Sidebar />
            <NotificationScreen />
          </div>
        } />

        <Route path="/perfil" element={
          <div className="app-container">
            <Sidebar />
            <Perfil />
          </div>
        } />

        <Route path="/faq" element={
          <div className="app-container">
            <Sidebar />
            <FAQ />
          </div>
        } />

        <Route path="/config" element={
          <div className="app-container">
            <Sidebar />
            <ConfigScreen />
          </div>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
