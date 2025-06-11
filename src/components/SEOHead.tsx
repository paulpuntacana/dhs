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
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transform your B2B sales with AI-powered lead generation. Get qualified prospects, automated outreach, and AI sales guidance. 30-day results guaranteed.',
      keywords: 'AI lead generation, B2B sales automation, cold outreach, sales AI, lead qualification, prospect automation, sales intelligence'
    },
    nl: {
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transformeer je B2B sales met AI-gedreven leadgeneratie. Krijg gekwalificeerde prospects, geautomatiseerde outreach en AI sales begeleiding. 30-dagen resultaat gegarandeerd.',
      keywords: 'AI leadgeneratie, B2B sales automatisering, cold outreach, sales AI, lead kwalificatie, prospect automatisering, sales intelligence'
    },
    de: {
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transformieren Sie Ihren B2B-Vertrieb mit KI-gestützter Lead-Generierung. Erhalten Sie qualifizierte Prospects, automatisierte Outreach und KI-Verkaufsberatung. 30-Tage Ergebnis garantiert.',
      keywords: 'AI Lead-Generierung, B2B Vertriebsautomatisierung, Cold Outreach, Vertriebs-KI, Lead-Qualifizierung, Prospect-Automatisierung, Vertriebsintelligenz'
    },
    es: {
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transforma tus ventas B2B con generación de leads impulsada por IA. Obtén prospects calificados, outreach automatizado y orientación de ventas AI. Resultados garantizados en 30 días.',
      keywords: 'generación de leads AI, automatización de ventas B2B, cold outreach, ventas AI, calificación de leads, automatización de prospects, inteligencia de ventas'
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