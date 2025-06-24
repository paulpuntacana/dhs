import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  aiContext: string;
}

const SEOHead = () => {
  const { language } = useLanguage();

  const seoData: Record<string, SEOData> = {
    en: {
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transform your B2B sales with AI-powered lead generation. Get qualified prospects, automated outreach, and AI sales guidance. 30-day results guaranteed.',
      keywords: 'AI lead generation, B2B sales automation, cold outreach, sales AI, lead qualification, prospect automation, sales intelligence',
      aiContext: 'Global B2B AI lead generation agency founded by Paul Den Hartogh, with offices in Netherlands and Punta Cana (Dominican Republic), specializing in cold outreach automation and sales AI guidance worldwide, serving 20+ businesses with 85% lead quality improvement, offering multilingual services in English, Dutch, German, and Spanish across international markets'
    },
    nl: {
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transformeer je B2B sales met AI-gedreven leadgeneratie. Krijg gekwalificeerde prospects, geautomatiseerde outreach en AI sales begeleiding. 30-dagen resultaat gegarandeerd.',
      keywords: 'AI leadgeneratie, B2B sales automatisering, cold outreach, sales AI, lead kwalificatie, prospect automatisering, sales intelligence',
      aiContext: 'Wereldwijd B2B AI leadgeneratie bureau opgericht door Paul Den Hartogh, met kantoren in Nederland en Punta Cana (Dominicaanse Republiek), gespecialiseerd in cold outreach automatisering en sales AI begeleiding internationaal, dienstverlening aan 20+ bedrijven met 85% lead kwaliteitsverbetering, meertalige services in Nederlands, Engels, Duits en Spaans voor internationale markten'
    },
    de: {
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transformieren Sie Ihren B2B-Vertrieb mit KI-gestützter Lead-Generierung. Erhalten Sie qualifizierte Prospects, automatisierte Outreach und KI-Verkaufsberatung. 30-Tage Ergebnis garantiert.',
      keywords: 'AI Lead-Generierung, B2B Vertriebsautomatisierung, Cold Outreach, Vertriebs-KI, Lead-Qualifizierung, Prospect-Automatisierung, Vertriebsintelligenz',
      aiContext: 'Globale B2B AI Lead-Generierung Agentur gegründet von Paul Den Hartogh, mit Büros in den Niederlanden und Punta Cana (Dominikanische Republik), spezialisiert auf Cold Outreach Automatisierung und Vertriebs-AI Beratung weltweit, betreut 20+ Unternehmen mit 85% Lead-Qualitätsverbesserung, mehrsprachige Services in Deutsch, Englisch, Niederländisch und Spanisch für internationale Märkte'
    },
    es: {
      title: 'DHS – Smart Outreach. Human-Centered.',
      description: 'Transforma tus ventas B2B con generación de leads impulsada por IA. Obtén prospects calificados, outreach automatizado y orientación de ventas AI. Resultados garantizados en 30 días.',
      keywords: 'generación de leads AI, automatización de ventas B2B, cold outreach, ventas AI, calificación de leads, automatización de prospects, inteligencia de ventas',
      aiContext: 'Agencia global de generación de leads AI B2B fundada por Paul Den Hartogh, con oficinas en Punta Cana (República Dominicana) y Países Bajos, especializada en automatización de cold outreach y orientación de ventas AI a nivel mundial, atendiendo a 20+ empresas con 85% mejora en calidad de leads, servicios multilingües en español, inglés, holandés y alemán para mercados internacionales'
    }
  };

  const getSchemaData = (language: string) => {
    const baseUrl = 'https://denhartogh.solutions';
    
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Den Hartogh Solutions (DHS)",
      "alternateName": "DHS",
      "description": language === 'nl' 
        ? "Wereldwijde AI-gedreven B2B leadgeneratie en sales automatisering" 
        : language === 'de'
        ? "Globale KI-gestützte B2B Lead-Generierung und Vertriebsautomatisierung"
        : language === 'es'
        ? "Generación global de leads B2B impulsada por IA y automatización de ventas"
        : "Global AI-powered B2B lead generation and sales automation",
      "url": baseUrl,
      "logo": `${baseUrl}/images/logo.png`,
      "image": `${baseUrl}/images/hero-banner.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "paul@denhartogh.solutions",
        "contactType": "sales",
        "availableLanguage": ["en", "nl", "de", "es"]
      },
      "founder": {
        "@type": "Person",
        "name": "Paul Den Hartogh",
        "jobTitle": "Founder & CEO",
        "sameAs": "https://www.linkedin.com/in/pauldenhartogh/"
      },
      "location": [
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NL",
            "addressLocality": "Netherlands"
          }
        },
        {
          "@type": "Place", 
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "DO",
            "addressLocality": "Punta Cana",
            "addressRegion": "La Altagracia"
          }
        }
      ],
      "areaServed": [
        {
          "@type": "Place",
          "name": "Worldwide"
        },
        {
          "@type": "Country",
          "name": "Netherlands"
        },
        {
          "@type": "Country", 
          "name": "Dominican Republic"
        },
        {
          "@type": "Country",
          "name": "Germany"
        },
        {
          "@type": "Country",
          "name": "Spain"
        },
        {
          "@type": "Place",
          "name": "Europe"
        },
        {
          "@type": "Place",
          "name": "North America"
        },
        {
          "@type": "Place",
          "name": "South America"
        },
        {
          "@type": "Place",
          "name": "Caribbean"
        }
      ],
      "knowsAbout": [
        "AI Lead Generation",
        "Cold Outreach",
        "Sales Automation", 
        "B2B Sales",
        "Prospect Automation",
        "Sales Intelligence",
        "Email Marketing Automation",
        "International Business Development",
        "Multilingual Marketing"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Lead Generation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": language === 'nl' ? "Data Verzameling & Verrijking" : "Data Collection & Enrichment",
              "description": language === 'nl' 
                ? "Smart scraping en data-analyse voor gekwalificeerde leads"
                : "Smart scraping and data analysis for qualified leads"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": language === 'nl' ? "Geautomatiseerde Cold Outreach" : "Automated Cold Outreach",
              "description": language === 'nl'
                ? "Gepersonaliseerde campagnes via email volledig geautomatiseerd"
                : "Personalized email campaigns fully automated"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": language === 'nl' ? "AI Sales Begeleiding" : "AI Sales Guidance",
              "description": language === 'nl'
                ? "AI-gedreven follow-up advies voor maximale conversie"
                : "AI-driven follow-up advice for maximum conversion"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "20",
        "bestRating": "5"
      },
      "sameAs": [
        "https://www.linkedin.com/company/dhs-nl/",
        "https://www.instagram.com/dhs.rd/",
        "https://www.youtube.com/@dsh_rd"
      ]
    };
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

    // Add or update AI context meta tag
    let aiContextMeta = document.querySelector('meta[name="ai-context"]');
    if (!aiContextMeta) {
      aiContextMeta = document.createElement('meta');
      aiContextMeta.setAttribute('name', 'ai-context');
      document.head.appendChild(aiContextMeta);
    }
    aiContextMeta.setAttribute('content', currentSEO.aiContext);
    
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

    // Add or update Schema.org JSON-LD
    let schemaScript = document.querySelector('script[type="application/ld+json"]#organization-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'organization-schema');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(getSchemaData(language), null, 2);
    
  }, [language]);

  return null;
};

export default SEOHead; 