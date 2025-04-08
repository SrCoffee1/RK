import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FAQ from './pages/FAQ/FAQ';
import LoginECadastro from './pages/LOGINeCADASTRO/LoginECadastro';
import { ContatosProvider } from './contexts/ContatosContext';
import Sidebar from './components/Sidebar';
import MainApp from './MainApp';

const router = createBrowserRouter([
  {
    path: "/LoginECadastro",
    element: (
      <div className="app-container">
        <LoginECadastro />
      </div>
    ),
  },
  {
    path: "/",
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
        <Sidebar />
        <FAQ />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
