import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
// Criação das rotas do aplicativo
const router = createBrowserRouter([

  {
    path: "/login",
    element: (
      <div className="app-container">
        <LoginECadastro />
      </div>
    ),
  },

  {
    path: "/monitoramento",
    element: (
      <div className="app-container">
        <Sidebar />
        <Monitoramento />
      </div>
    ),
  },

  {
    path: "/contatos",
    element: (
      <ContatosProvider>
        <div className="app-container">
          <Sidebar />
          <MainApp page="Contatos" />
        </div>
      </ContatosProvider>
    ),
  },

  {
    path: "/notifications",
    element: (
      <div className="app-container">
        <Sidebar />
        <NotificationScreen />
      </div>
    ),
  },

  {
    path: "/perfil",
    element: (
      <div className="app-container">
        <Sidebar />
        <Perfil />
      </div>
    ),
  },

  {
    path: "/faq",
    element: (
      <div className="app-container">
        <Sidebar />
        <FAQ />
      </div>
    ),
  },

  {
    path: "/config",
    element: (
      <div className="app-container">
        <Sidebar />
        <ConfigScreen />
      </div>
    ),
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
