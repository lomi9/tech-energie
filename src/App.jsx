import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/home/Home.jsx';
import Plomberie from './pages/plomberie/Plomberie.jsx';
import Metallerie from './pages/metallerie/Metallerie.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/metallerie" element={<Metallerie />} />
        <Route path="/plomberie" element={<Plomberie />} />
      </Routes>
    </Router>
  );
}

export default App;
