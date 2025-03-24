import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import FAQ from './pages/FAQ/FAQ.jsx'; 
import AuthSystem from './pages/AuthSystem/AuthSystem.jsx';  

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
