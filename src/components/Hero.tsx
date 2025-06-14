import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Behoud alleen de nieuwe moderne geometrische achtergrond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 transform translate-x-1/3 -translate-y-1/3">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D]/10 to-[#1B365D]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-80 h-80 transform -translate-x-1/4 translate-y-1/4">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-indigo-400/5 rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute top-20 left-20 w-[600px] h-[600px] text-[#1B365D]/10" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          
          <svg className="absolute top-40 right-32 w-[600px] h-[600px] text-blue-400/10" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          
          <svg className="absolute bottom-32 left-1/3 w-[600px] h-[600px] text-indigo-400/10" fill="currentColor" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" rx="15" />
          </svg>
          
          <svg className="absolute bottom-20 right-20 w-[600px] h-[600px] text-[#1B365D]/8" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(27, 54, 93, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(27, 54, 93, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>
      
      {/* Content met laptop afbeelding */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile: Laptop afbeelding eerst (boven de titel) */}
        <div className="lg:hidden pt-16 pb-8">
          <div className="text-center">
            <div className="relative max-w-sm mx-auto">
              <img 
                src="/images/hero-banner.png" 
                alt="AI-Powered Lead Generation Dashboard" 
                className="w-full h-auto opacity-90 rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center lg:py-32">

          {/* Text content */}
          <div className="text-center lg:text-left pb-24 lg:pb-0">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{t('home.hero.title')}</span>
              <span className="block text-[#1B365D]">{t('home.hero.subtitle')}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto lg:mx-0 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {t('home.hero.description')}
            </p>
            <div className="mt-5 max-w-md mx-auto lg:mx-0 sm:flex sm:justify-center lg:justify-start md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to={getLocalizedPath('/contact')}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1B365D] hover:bg-[#1B365D]/90 md:py-4 md:text-lg md:px-10"
                >
                  {t('home.hero.cta')}
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop: Laptop afbeelding rechts naast tekst */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="/images/hero-banner.png" 
                alt="AI-Powered Lead Generation Dashboard" 
                className="relative w-full h-auto opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero; 