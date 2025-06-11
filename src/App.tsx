import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Approach from './pages/Approach';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App min-h-screen bg-white">
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;