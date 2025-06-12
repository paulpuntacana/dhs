import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SEOHead from './components/SEOHead';
import Home from './pages/Home';
import About from './pages/About';
import Approach from './pages/Approach';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Careers from './pages/Careers';

// Language-aware wrapper component
const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="App min-h-screen bg-white">
          <SEOHead />
          <ScrollToTop />
          <Navigation />
          <Routes>
            {/* Redirect root to default language (English) */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* English routes */}
            <Route path="/en" element={<LanguageWrapper><Home /></LanguageWrapper>} />
            <Route path="/en/approach" element={<LanguageWrapper><Approach /></LanguageWrapper>} />
            <Route path="/en/about" element={<LanguageWrapper><About /></LanguageWrapper>} />
            <Route path="/en/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            <Route path="/en/terms" element={<LanguageWrapper><Terms /></LanguageWrapper>} />
            <Route path="/en/privacy" element={<LanguageWrapper><Privacy /></LanguageWrapper>} />
            <Route path="/en/careers" element={<LanguageWrapper><Careers /></LanguageWrapper>} />
            
            {/* Dutch routes */}
            <Route path="/nl" element={<LanguageWrapper><Home /></LanguageWrapper>} />
            <Route path="/nl/aanpak" element={<LanguageWrapper><Approach /></LanguageWrapper>} />
            <Route path="/nl/over-ons" element={<LanguageWrapper><About /></LanguageWrapper>} />
            <Route path="/nl/contact" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            <Route path="/nl/algemene-voorwaarden" element={<LanguageWrapper><Terms /></LanguageWrapper>} />
            <Route path="/nl/privacyverklaring" element={<LanguageWrapper><Privacy /></LanguageWrapper>} />
            <Route path="/nl/carrieres" element={<LanguageWrapper><Careers /></LanguageWrapper>} />
            
            {/* German routes */}
            <Route path="/de" element={<LanguageWrapper><Home /></LanguageWrapper>} />
            <Route path="/de/ansatz" element={<LanguageWrapper><Approach /></LanguageWrapper>} />
            <Route path="/de/uber-uns" element={<LanguageWrapper><About /></LanguageWrapper>} />
            <Route path="/de/kontakt" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            <Route path="/de/agb" element={<LanguageWrapper><Terms /></LanguageWrapper>} />
            <Route path="/de/datenschutz" element={<LanguageWrapper><Privacy /></LanguageWrapper>} />
            <Route path="/de/karriere" element={<LanguageWrapper><Careers /></LanguageWrapper>} />
            
            {/* Spanish routes */}
            <Route path="/es" element={<LanguageWrapper><Home /></LanguageWrapper>} />
            <Route path="/es/enfoque" element={<LanguageWrapper><Approach /></LanguageWrapper>} />
            <Route path="/es/acerca-de" element={<LanguageWrapper><About /></LanguageWrapper>} />
            <Route path="/es/contacto" element={<LanguageWrapper><Contact /></LanguageWrapper>} />
            <Route path="/es/terminos" element={<LanguageWrapper><Terms /></LanguageWrapper>} />
            <Route path="/es/privacidad" element={<LanguageWrapper><Privacy /></LanguageWrapper>} />
            <Route path="/es/carreras" element={<LanguageWrapper><Careers /></LanguageWrapper>} />
            
            {/* Legacy redirects for old URLs */}
            <Route path="/approach" element={<Navigate to="/en/approach" replace />} />
            <Route path="/about" element={<Navigate to="/en/about" replace />} />
            <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;