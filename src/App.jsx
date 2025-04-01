import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contatos from './pages/CONTATOS/Contatos';
import FAQ from './pages/FAQ/FAQ';
import Sidebar from './components/Sidebar';
import LoginECadastro from './pages/LOGINeCADASTRO/LoginECadastro';
import Contatos from './pages/CONTATOS/Contatos';

// Definindo as rotas
const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
      <div className="app-container">
        <Contatos/>
      </div>
    ),
  },
  {
    path: "LoginECadastro",
    element: (
      <div className="app-container">
        <LoginECadastro/>
      </div>
    ),
  },
  {
    path: "/FAQ",
    element: (
      <div className="app-container">
        <Sidebar />
        <FAQ />
      </div>
    ),
  },
]);

// Componente principal
function App() {
  return <RouterProvider router={router} />;
}

export default App;
