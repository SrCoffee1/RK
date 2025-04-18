import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FAQ from './pages/FAQ/FAQ';
import LoginECadastro from './pages/LOGINeCADASTRO/LoginECadastro';
import { ContatosProvider } from './contexts/ContatosContext';
import MainApp from './MainApp';
import Monitoramento from './pages/Monitoramento/Monitoramento';
import Sidebar from './components/SidebarPackage/Sidebar';
import './global.css';
import NotificationSidebar from './components/NotificationSidebar/NotificationSidebar';

// Criação das rotas do aplicativo
const router = createBrowserRouter([

  {
    path: "/sidebar", // Ajustando o caminho para login
    element: (
      <div className="app-container">
        <Sidebar />
      </div>
    ),
  },

  {
    path: "/login", // Ajustando o caminho para login
    element: (
      <div className="app-container">
        <LoginECadastro />
      </div>
    ),
  },
  {
    path: "/monitoramento", // Página de Monitoramento
    element: (
      <div className="app-container">
        <Sidebar />
        <NotificationSidebar />
        <Monitoramento />
      </div>
    ),
  },

  {
    path: "/contatos", // Página de Contatos
    element: (
      <ContatosProvider>
        <div className="app-container">
          <Sidebar />
          <NotificationSidebar />
          <MainApp page="Contatos" />
        </div>
      </ContatosProvider>
    ),
  },
  {
    path: "/", // Página de FAQ
    element: (
      <div className="app-container">
        <Sidebar />
        <NotificationSidebar />
        <FAQ />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
