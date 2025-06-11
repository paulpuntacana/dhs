import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

const SEOHead = () => {
  const { language } = useLanguage();

  const seoData: Record<string, SEOData> = {
    en: {
      title: 'AI Lead Generation - Smarter Lead Generation Powered by AI & Strategy',
      description: 'Transform your business with AI-powered lead generation. Get consistent, high-quality leads and AI-driven sales guidance. Powered by AI, Driven by Humans.',
      keywords: 'AI lead generation, automated outreach, sales guidance, lead conversion, B2B leads, cold outreach'
    },
    nl: {
      title: 'AI Leadgeneratie - Slimmere leadgeneratie met AI & Strategie',
      description: 'Transformeer je bedrijf met AI-gedreven leadgeneratie. Krijg consistente, hoogwaardige leads en AI-ondersteunde salesbegeleiding. Aangedreven door AI, gestuurd door mensen.',
      keywords: 'AI leadgeneratie, geautomatiseerde outreach, sales begeleiding, lead conversie, B2B leads, cold outreach'
    },
    de: {
      title: 'AI Lead Generierung - Intelligentere Lead-Generierung mit KI & Strategie',
      description: 'Transformieren Sie Ihr Unternehmen mit KI-gestützter Lead-Generierung. Erhalten Sie konsistente, hochwertige Leads und KI-gesteuerte Verkaufsberatung. Angetrieben von KI, geführt von Menschen.',
      keywords: 'AI Lead-Generierung, automatisierte Outreach, Verkaufsberatung, Lead-Konversion, B2B Leads, Cold Outreach'
    },
    es: {
      title: 'Generación de Leads AI - Generación de Leads Más Inteligente con IA y Estrategia',
      description: 'Transforma tu negocio con generación de leads impulsada por IA. Obtén leads consistentes y de alta calidad con orientación de ventas impulsada por IA. Impulsado por IA, dirigido por humanos.',
      keywords: 'generación de leads AI, outreach automatizado, orientación de ventas, conversión de leads, leads B2B, cold outreach'
    }
  };

  useEffect(() => {
    const currentSEO = seoData[language];
    
    // Update document title
    document.title = currentSEO.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSEO.description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSEO.keywords);
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSEO.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', currentSEO.description);
    }
    
  }, [language]);

  return null;
};

export default SEOHead; 