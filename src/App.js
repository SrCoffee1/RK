import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FAQ from './pages/FAQ';  // Sua tela de FAQ
import AuthSystem from './pages/AuthSystem';  // Sua tela de Login/Cadastro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/AuthSystem" element={<AuthSystem/>} />
      </Routes>
    </Router>
  );
}

export default App;
