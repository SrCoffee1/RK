import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FAQ from './pages/FAQ/FAQ';
import LoginECadastro from './pages/LOGINeCADASTRO/LoginECadastro';
import { ContatosProvider } from './contexts/ContatosContext';
import MainApp from './MainApp';
import Monitoramento from './pages/Monitoramento/Monitoramento';
import Sidebar from './components/SidebarPackage/Sidebar';

const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <div className="app-container">
        <Sidebar />
      </div>
    ),
  },

  {
    path: "/LoginECadastro",
    element: (
      <div className="app-container">
        <LoginECadastro />
      </div>
    ),
  },

  {
    path: "/Monitoramento",
    element: (
      <div className="app-container">
        <Monitoramento />
      </div>
    ),
  },

  {
    path: "/ContatosProvider",
    element: (
      <ContatosProvider>
        <div className="app-container">
          <MainApp />
        </div>
      </ContatosProvider>
    ),
  },
  {
    path: "/FAQ",
    element: (
      <div className="app-container">
        <FAQ />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
