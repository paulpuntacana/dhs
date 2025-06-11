import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', name: 'Español', flag: '🇩🇴' },
  ];

  const menuItems = [
    { path: '/', label: t('nav.home') },
    { path: '/approach', label: t('nav.approach') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isHomePage 
        ? (isScrolled ? 'bg-white shadow-lg' : 'bg-transparent')
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group pt-2">
            <img className="h-16 w-auto" src={logo} alt="DHS Logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto mr-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-[#1B365D] hover:scale-105 ${
                  location.pathname === item.path
                    ? `text-[#1B365D] ${!isHomePage ? 'border-b-2 border-[#1B365D]' : ''}`
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA & Language Switcher */}
          <div className="flex items-center space-x-6">
            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#104ee3] to-[#104ee3]/90 rounded-xl hover:from-[#104ee3]/90 hover:to-[#104ee3]/80 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              {t('nav.cta')}
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1B365D] transition-colors duration-200"
              >
                <span className="text-base">{languages.find(l => l.code === language)?.flag}</span>
                <span>{languages.find(l => l.code === language)?.name}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 animate-fadeIn">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`flex items-center w-full px-4 py-2 text-sm hover:bg-[#1B365D]/10 transition-colors duration-200 ${
                          language === lang.code ? 'bg-[#1B365D]/10 text-[#1B365D]' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-base mr-3">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#1B365D] transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden bg-white animate-fadeIn ${!isHomePage ? 'border-t border-gray-200' : ''}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-[#1B365D] bg-[#1B365D]/10'
                      : 'text-gray-700 hover:text-[#1B365D] hover:bg-[#1B365D]/10'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#1B365D] hover:bg-[#1B365D]/10"
              >
                {t('nav.cta')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;