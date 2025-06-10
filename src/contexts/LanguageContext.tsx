import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'nl' | 'de' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'AI LEAD GENERATION',
    'home.hero.subtitle': 'Smarter Lead Generation – Powered by AI & Strategy',
    'home.hero.description': 'Fill your pipeline consistently with high-quality leads through AI-powered cold outreach. Our intelligent system guides your follow-up to convert prospects into customers.',
    'home.hero.cta': 'Get Your Strategy Session',
    
    'home.pain.title': 'Are You Struggling With...',
    'home.pain.prospect': 'Struggling to find the right prospects?',
    'home.pain.flow': 'Inconsistent lead flow?',
    'home.pain.outreach': 'Ineffective cold outreach?',
    'home.pain.followup': 'Losing deals due to poor follow-up?',
    'home.pain.timing': 'Reacting too late or with the wrong message?',
    'home.pain.calls': 'Unprepared for discovery calls?',
    
    'home.solution.title': 'Our AI-Powered Cold Outreach Solution',
    'home.solution.description': 'We combine advanced AI technology with proven cold outreach strategies to fill your pipeline consistently and guide you to close more deals.',
    'home.solution.powered': 'Powered by AI',
    'home.solution.driven': 'Driven by Humans',
    'home.solution.control': 'You Always Have the Steering Wheel',
    
    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Four Core Solutions for Complete Lead Generation Success',
    
    'services.data.title': 'Data Collection & Enrichment',
    'services.data.description': 'Advanced data analysis to target ideal audiences for cold outreach, providing high-quality, up-to-date leads with comprehensive enrichment.',
    
    'services.outreach.title': 'Automated Cold Outreach',
    'services.outreach.description': 'Personalized cold email campaigns that reach the right people consistently, filling your pipeline with qualified prospects on autopilot.',
    
    'services.guidance.title': 'AI-Driven Sales Guidance',
    'services.guidance.description': 'Real-time analysis and sales guidance to help you know exactly what to say and when during follow-up, moving leads through your pipeline effectively.',
    
    'services.conversion.title': 'Conversion & Closing Deals',
    'services.conversion.description': 'Only warm leads are passed on, with actionable follow-up recommendations and AI guidance to close deals confidently.',
    
    // Solutions Page
    'solutions.title': 'Solutions That Drive Results',
    'solutions.subtitle': 'Addressing Your Biggest Cold Outreach Challenges',
    
    'solutions.problem.title': 'The Problem',
    'solutions.solution.title': 'Our Solution',
    'solutions.value.title': 'Your Value',
    'solutions.human.title': 'You Always Have the Steering Wheel',
    'solutions.human.description': 'We do business with people, not only AIs. Our technology empowers you to make better decisions in your cold outreach and follow-up.',
    
    // About Page
    'about.title': 'About AI Lead Generation',
    'about.subtitle': 'Den Hartogh Solutions - CoC: 93891237',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'To help businesses achieve consistent growth through intelligent cold outreach and AI-guided conversion strategies.',
    'about.philosophy.title': 'AI-Powered, Human-Centered',
    'about.philosophy.description': 'We believe in leveraging cutting-edge AI technology while maintaining the human touch that builds lasting business relationships.',
    
    // Contact Page
    'contact.title': 'Get Your Strategy Session',
    'contact.subtitle': 'Ready to Transform Your Cold Outreach?',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.company': 'Company Name',
    'contact.form.message': 'Tell us about your cold outreach challenges',
    'contact.form.submit': 'Book Strategy Session',
    'contact.faq.title': 'Frequently Asked Questions',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.contact': 'Contact Us',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Diensten',
    'nav.solutions': 'Oplossingen',
    'nav.about': 'Over Ons',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'AI LEAD GENERATIE',
    'home.hero.subtitle': 'Slimmere Lead Generatie – Aangedreven door AI & Strategie',
    'home.hero.description': 'Vul je pipeline consistent met hoogwaardige leads door AI-aangedreven cold outreach. Ons intelligente systeem begeleidt je follow-up om prospects om te zetten in klanten.',
    'home.hero.cta': 'Boek Je Strategie Sessie',
    
    'home.pain.title': 'Worstelt U Met...',
    'home.pain.prospect': 'Moeite met het vinden van de juiste prospects?',
    'home.pain.flow': 'Inconsistente lead-stroom?',
    'home.pain.outreach': 'Ineffectieve cold outreach?',
    'home.pain.followup': 'Deals verliezen door slechte follow-up?',
    'home.pain.timing': 'Te laat reageren of met de verkeerde boodschap?',
    'home.pain.calls': 'Onvoorbereid voor ontdekkingsgesprekken?',
    
    'home.solution.title': 'Onze AI-Aangedreven Cold Outreach Oplossing',
    'home.solution.description': 'We combineren geavanceerde AI-technologie met bewezen cold outreach strategieën om je pipeline consistent te vullen en je te begeleiden om meer deals te sluiten.',
    'home.solution.powered': 'Aangedreven door AI',
    'home.solution.driven': 'Gestuurd door Mensen',
    'home.solution.control': 'U Houdt Altijd Het Stuur Vast',
    
    // Services Page
    'services.title': 'Onze Diensten',
    'services.subtitle': 'Vier Kerndiensten voor Volledig Lead Generatie Succes',
    
    'services.data.title': 'Data Verzameling & Verrijking',
    'services.data.description': 'Geavanceerde data-analyse om ideale doelgroepen te targeten voor cold outreach, met hoogwaardige, actuele leads en uitgebreide verrijking.',
    
    'services.outreach.title': 'Geautomatiseerde Cold Outreach',
    'services.outreach.description': 'Gepersonaliseerde cold email campagnes die de juiste mensen consistent bereiken, je pipeline vullen met gekwalificeerde prospects op autopilot.',
    
    'services.guidance.title': 'AI-Gestuurde Sales Begeleiding',
    'services.guidance.description': 'Real-time analyse en sales begeleiding om precies te weten wat en wanneer te zeggen tijdens follow-up, leads effectief door je pipeline te bewegen.',
    
    'services.conversion.title': 'Conversie & Deals Sluiten',
    'services.conversion.description': 'Alleen warme leads worden doorgegeven, met uitvoerbare follow-up aanbevelingen en AI-begeleiding om vol vertrouwen deals te sluiten.',
    
    // Solutions Page
    'solutions.title': 'Oplossingen Die Resultaten Opleveren',
    'solutions.subtitle': 'Uw Grootste Cold Outreach Uitdagingen Aanpakken',
    
    'solutions.problem.title': 'Het Probleem',
    'solutions.solution.title': 'Onze Oplossing',
    'solutions.value.title': 'Uw Waarde',
    'solutions.human.title': 'U Houdt Altijd Het Stuur Vast',
    'solutions.human.description': 'We doen zaken met mensen, niet alleen met AI\'s. Onze technologie stelt u in staat betere beslissingen te nemen in uw cold outreach en follow-up.',
    
    // About Page
    'about.title': 'Over AI Lead Generatie',
    'about.subtitle': 'Den Hartogh Solutions - KvK: 93891237',
    'about.mission.title': 'Onze Missie',
    'about.mission.description': 'Bedrijven helpen consistente groei te bereiken door intelligente cold outreach en AI-begeleide conversie strategieën.',
    'about.philosophy.title': 'AI-Aangedreven, Mens-Gecentreerd',
    'about.philosophy.description': 'Wij geloven in het benutten van geavanceerde AI-technologie terwijl we de menselijke touch behouden die duurzame zakelijke relaties opbouwt.',
    
    // Contact Page
    'contact.title': 'Boek Uw Strategie Sessie',
    'contact.subtitle': 'Klaar om Uw Cold Outreach te Transformeren?',
    'contact.form.name': 'Volledige Naam',
    'contact.form.email': 'E-mailadres',
    'contact.form.company': 'Bedrijfsnaam',
    'contact.form.message': 'Vertel ons over uw cold outreach uitdagingen',
    'contact.form.submit': 'Boek Strategie Sessie',
    'contact.faq.title': 'Veelgestelde Vragen',
    
    // Common
    'common.learnMore': 'Meer Informatie',
    'common.getStarted': 'Aan de Slag',
    'common.contact': 'Contact Opnemen',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.solutions': 'Lösungen',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    
    // Home Page
    'home.hero.title': 'AI LEAD GENERIERUNG',
    'home.hero.subtitle': 'Intelligentere Lead-Generierung – Angetrieben von KI & Strategie',
    'home.hero.description': 'Füllen Sie Ihre Pipeline konsistent mit hochwertigen Leads durch KI-gesteuerte Cold Outreach. Unser intelligentes System leitet Ihre Nachfassung an, um Prospects in Kunden zu verwandeln.',
    'home.hero.cta': 'Strategie-Session Buchen',
    
    'home.pain.title': 'Kämpfen Sie Mit...',
    'home.pain.prospect': 'Schwierigkeiten beim Finden der richtigen Prospects?',
    'home.pain.flow': 'Inkonsistenter Lead-Fluss?',
    'home.pain.outreach': 'Ineffektive Cold Outreach?',
    'home.pain.followup': 'Deals verlieren durch schlechte Nachfassung?',
    'home.pain.timing': 'Zu spät oder mit falscher Nachricht reagieren?',
    'home.pain.calls': 'Unvorbereitet für Discovery-Calls?',
    
    'home.solution.title': 'Unsere KI-Getriebene Cold Outreach Lösung',
    'home.solution.description': 'Wir kombinieren fortschrittliche KI-Technologie mit bewährten Cold Outreach Strategien, um Ihre Pipeline konsistent zu füllen und Sie beim Abschluss von mehr Deals zu unterstützen.',
    'home.solution.powered': 'Angetrieben von KI',
    'home.solution.driven': 'Geführt von Menschen',
    'home.solution.control': 'Sie Haben Immer Das Steuer in der Hand',
    
    // Services Page
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Vier Kernlösungen für Vollständigen Lead-Generierungs-Erfolg',
    
    'services.data.title': 'Datensammlung & -anreicherung',
    'services.data.description': 'Erweiterte Datenanalyse zur Zielgruppenansprache für Cold Outreach, hochwertige, aktuelle Leads mit umfassender Anreicherung.',
    
    'services.outreach.title': 'Automatisierte Cold Outreach',
    'services.outreach.description': 'Personalisierte Cold Email Kampagnen, die die richtigen Personen konsistent erreichen und Ihre Pipeline mit qualifizierten Prospects auf Autopilot füllen.',
    
    'services.guidance.title': 'KI-Gesteuerte Verkaufsberatung',
    'services.guidance.description': 'Echtzeit-Analyse und Verkaufsberatung, um genau zu wissen, was und wann während der Nachfassung zu sagen ist, Leads effektiv durch Ihre Pipeline zu bewegen.',
    
    'services.conversion.title': 'Konversion & Deal-Abschluss',
    'services.conversion.description': 'Nur warme Leads werden weitergegeben, mit umsetzbaren Nachfass-Empfehlungen und KI-Anleitung für selbstbewusste Deal-Abschlüsse.',
    
    // Solutions Page
    'solutions.title': 'Lösungen Die Ergebnisse Liefern',
    'solutions.subtitle': 'Ihre Größten Cold Outreach Herausforderungen Angehen',
    
    'solutions.problem.title': 'Das Problem',
    'solutions.solution.title': 'Unsere Lösung',
    'solutions.value.title': 'Ihr Wert',
    'solutions.human.title': 'Sie Haben Immer Das Steuer in der Hand',
    'solutions.human.description': 'Wir machen Geschäfte mit Menschen, nicht nur mit KIs. Unsere Technologie befähigt Sie zu besseren Entscheidungen in Ihrer Cold Outreach und Nachfassung.',
    
    // About Page
    'about.title': 'Über AI Lead Generierung',
    'about.subtitle': 'Den Hartogh Solutions - Handelsregister: 93891237',
    'about.mission.title': 'Unsere Mission',
    'about.mission.description': 'Unternehmen helfen, konsistentes Wachstum durch intelligente Cold Outreach und KI-geleitete Konversionsstrategien zu erreichen.',
    'about.philosophy.title': 'KI-Angetrieben, Mensch-Zentriert',
    'about.philosophy.description': 'Wir glauben daran, modernste KI-Technologie zu nutzen und dabei die menschliche Note zu bewahren, die dauerhafte Geschäftsbeziehungen aufbaut.',
    
    // Contact Page
    'contact.title': 'Buchen Sie Ihre Strategie-Session',
    'contact.subtitle': 'Bereit, Ihre Cold Outreach zu Transformieren?',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.company': 'Firmenname',
    'contact.form.message': 'Erzählen Sie uns von Ihren Cold Outreach Herausforderungen',
    'contact.form.submit': 'Strategie-Session Buchen',
    'contact.faq.title': 'Häufig Gestellte Fragen',
    
    // Common
    'common.learnMore': 'Mehr Erfahren',
    'common.getStarted': 'Loslegen',
    'common.contact': 'Kontakt Aufnehmen',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    
    // Home Page
    'home.hero.title': 'GENERACIÓN DE LEADS AI',
    'home.hero.subtitle': 'Generación de Leads Más Inteligente – Impulsada por IA y Estrategia',
    'home.hero.description': 'Llena tu pipeline consistentemente con leads de alta calidad a través de cold outreach impulsado por IA. Nuestro sistema inteligente guía tu seguimiento para convertir prospectos en clientes.',
    'home.hero.cta': 'Reserva Tu Sesión de Estrategia',
    
    'home.pain.title': '¿Estás Luchando Con...',
    'home.pain.prospect': '¿Dificultades para encontrar los prospectos correctos?',
    'home.pain.flow': '¿Flujo de leads inconsistente?',
    'home.pain.outreach': '¿Cold outreach inefectivo?',
    'home.pain.followup': '¿Perdiendo tratos por mal seguimiento?',
    'home.pain.timing': '¿Reaccionando tarde o con el mensaje equivocado?',
    'home.pain.calls': '¿Sin preparación para llamadas de descubrimiento?',
    
    'home.solution.title': 'Nuestra Solución de Cold Outreach Impulsada por IA',
    'home.solution.description': 'Combinamos tecnología IA avanzada con estrategias probadas de cold outreach para llenar tu pipeline consistentemente y guiarte a cerrar más tratos.',
    'home.solution.powered': 'Impulsado por IA',
    'home.solution.driven': 'Dirigido por Humanos',
    'home.solution.control': 'Siempre Tienes el Control',
    
    // Services Page
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Cuatro Soluciones Principales para el Éxito Completo en Generación de Leads',
    
    'services.data.title': 'Recolección y Enriquecimiento de Datos',
    'services.data.description': 'Análisis avanzado de datos para dirigirse a audiencias ideales para cold outreach, proporcionando leads de alta calidad y actualizados con enriquecimiento integral.',
    
    'services.outreach.title': 'Cold Outreach Automatizado',
    'services.outreach.description': 'Campañas de cold email personalizadas que llegan a las personas correctas consistentemente, llenando tu pipeline con prospectos calificados en piloto automático.',
    
    'services.guidance.title': 'Guía de Ventas Dirigida por IA',
    'services.guidance.description': 'Análisis en tiempo real y guía de ventas para saber exactamente qué decir y cuándo durante el seguimiento, moviendo leads a través de tu pipeline de manera efectiva.',
    
    'services.conversion.title': 'Conversión y Cierre de Tratos',
    'services.conversion.description': 'Solo se pasan leads cálidos, con recomendaciones de seguimiento accionables y guía de IA para cerrar tratos con confianza.',
    
    // Solutions Page
    'solutions.title': 'Soluciones Que Generan Resultados',
    'solutions.subtitle': 'Abordando Tus Mayores Desafíos de Cold Outreach',
    
    'solutions.problem.title': 'El Problema',
    'solutions.solution.title': 'Nuestra Solución',
    'solutions.value.title': 'Tu Valor',
    'solutions.human.title': 'Siempre Tienes el Control',
    'solutions.human.description': 'Hacemos negocios con personas, no solo con IAs. Nuestra tecnología te empodera para tomar mejores decisiones en tu cold outreach y seguimiento.',
    
    // About Page
    'about.title': 'Acerca de Generación de Leads AI',
    'about.subtitle': 'Den Hartogh Solutions - CoC: 93891237',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.description': 'Ayudar a las empresas a lograr crecimiento consistente a través de cold outreach inteligente y estrategias de conversión guiadas por IA.',
    'about.philosophy.title': 'Impulsado por IA, Centrado en Humanos',
    'about.philosophy.description': 'Creemos en aprovechar la tecnología IA de vanguardia mientras mantenemos el toque humano que construye relaciones comerciales duraderas.',
    
    // Contact Page
    'contact.title': 'Reserva Tu Sesión de Estrategia',
    'contact.subtitle': '¿Listo para Transformar Tu Cold Outreach?',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Dirección de Email',
    'contact.form.company': 'Nombre de la Empresa',
    'contact.form.message': 'Cuéntanos sobre tus desafíos de cold outreach',
    'contact.form.submit': 'Reservar Sesión de Estrategia',
    'contact.faq.title': 'Preguntas Frecuentes',
    
    // Common
    'common.learnMore': 'Saber Más',
    'common.getStarted': 'Empezar',
    'common.contact': 'Contactarnos',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};