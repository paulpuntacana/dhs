import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'nl' | 'de' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.approach': 'Approach',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': "Let's talk strategy!",
    
    // Home Page
    'home.hero.title': 'AI Lead Generation',
    'home.hero.subtitle': 'Smarter Lead Generation – Powered by AI, Driven by Humans',
    'home.hero.description': 'Fill your pipeline consistently with high-quality leads through AI-powered cold outreach. Our intelligent system guides your follow-up to convert prospects into customers.',
    'home.hero.cta': 'Get Your Strategy Session',
    
    'home.pain.title': 'Are You Struggling With...',
    'home.pain.subtitle': 'Common challenges that our AI-powered solution helps you overcome',
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
    
    // Home Page Process Steps
    'home.process.1.title': 'Target & Collect',
    'home.process.1.desc': 'AI identifies and enriches your ideal prospects with precision data',
    'home.process.2.title': 'Cold Outreach',
    'home.process.2.desc': 'Automated personalized campaigns fill your pipeline consistently',
    'home.process.3.title': 'AI Guidance',
    'home.process.3.desc': 'Real-time insights guide your follow-up for maximum conversion',
    'home.process.4.title': 'Close Deals',
    'home.process.4.desc': 'Convert warm leads into customers with strategic guidance',
    // Home Page Stats
    'home.stats.1.label': 'Businesses Served',
    'home.stats.2.label': 'Lead Quality Improvement',
    'home.stats.3.label': 'Pipeline Growth Rate',
    'home.stats.4.label': 'AI System Monitoring',
    // Home Page Buttons
    'home.learnMore': 'Learn More',
    
    // Home Page Headings & Subtitles
    'home.control.title': "You're Always in Control",
    'home.control.subtitle': 'Our technology supports your decisions — not replaces them. You lead the process, we power it.',
    'home.stats.title': 'Proven Results in Numbers',
    'home.stats.subtitle': 'Our AI-powered cold outreach delivers consistent, measurable growth',
    'home.cta.title': 'Ready to Fill Your Pipeline with Quality Leads?',
    'home.cta.subtitle': 'Join 500+ businesses already growing with our AI-powered cold outreach and sales guidance system.',
    'home.testimonials.title': 'What Our Clients Say',
    'home.testimonials.subtitle': 'Hear from businesses that have transformed their lead generation and sales process',
    'home.testimonials.1.quote': 'I had no idea how to approach cold outreach. Paul helped me effectively reach potential clients and get through to customers.',
    'home.testimonials.1.name': 'Ravi Ramnarain',
    'home.testimonials.1.company': 'Solvitec',
    'home.testimonials.1.result': 'Successful outreach',
    'home.testimonials.2.quote': 'I noticed I was always responding too late or incorrectly to leads. With the AI suggestions, I can respond faster and more effectively.',
    'home.testimonials.2.name': 'Robin Meijerman',
    'home.testimonials.2.company': 'Independent',
    'home.testimonials.2.result': 'Faster responses',
    'home.testimonials.3.quote': 'Paul helped us effectively reach our target audience and, through AI, respond more precisely and quickly to potential clients.',
    'home.testimonials.3.name': 'Jacco Den Hartogh',
    'home.testimonials.3.company': 'The FilmFactory',
    'home.testimonials.3.result': 'Targeted outreach',
    
          // Approach Page
      'approach.title': 'Our Approach',
      'approach.subtitle': 'Transforming businesses with AI-powered cold outreach and intelligent sales guidance. Consistent lead flow, better conversions.',
    
    'services.data.title': 'Data Collection & Enrichment',
    'services.data.description': 'We identify and collect highly relevant leads within your target audience, enriched with valuable company information. This way you always receive current, qualitative, and validated data, ready for outreach.',
    'services.data.feature1': 'Smart scraping & data analysis',
    'services.data.feature2': 'Real-time enrichment with industry, role, and company size',
    'services.data.feature3': 'Validation and relevance scoring',
    'services.data.feature4': '100% GDPR compliant',
    'services.data.cta': 'We find your target audience. You focus on growth.',
    
    'services.outreach.title': 'Automated Cold Outreach',
    'services.outreach.description': 'We build smart, personalized campaigns in your name — via email, fully automated. This ensures your propositions reach the right people at the right time.',
    'services.outreach.feature1': 'Personal emails and follow-ups',
    'services.outreach.feature2': 'Campaign management in Smartlead (or other platform)',
    'services.outreach.feature3': 'Testing, optimizing, and scaling',
    'services.outreach.feature4': 'Insights into opens, clicks, and replies',
    'services.outreach.cta': 'No more manual work. Your first contact moment? Fully arranged.',
    
    'services.guidance.title': 'AI-Driven Sales Guidance',
    'services.guidance.description': 'Every reply is automatically read and analyzed by AI. For each lead, you receive concrete follow-up advice, so you know exactly what to say and when — even without sales experience.',
    'services.guidance.feature1': 'AI classification: HOT, WARM, COLD, NI',
    'services.guidance.feature2': 'Personal follow-up advice per lead',
    'services.guidance.feature3': 'Language recognition and multilingual output (NL, EN, DE, ES)',
    'services.guidance.feature4': 'Continuously learning system based on your cases',
    'services.guidance.cta': 'Not just leads — but also the right words to close them.',
    
    'services.conversion.title': 'Conversion & Closing Deals',
    'services.conversion.description': 'You only receive interested leads with follow-up advice. This way you conduct targeted sales conversations and convert more — without the noise. We send reports. You close the deals.',
    'services.conversion.feature1': 'Automatic lead notifications per client',
    'services.conversion.feature2': 'Warm lead filtering',
    'services.conversion.feature3': 'Deal tracking and reporting (optional)',
    'services.conversion.feature4': 'Complete focus on conversion',
    'services.conversion.cta': 'You do the closing — we handle everything before.',
    
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
    
    // Hero
    'home.hero.title': 'AI Lead Generation',
    'home.hero.subtitle': 'Smarter Lead Generation – Powered by AI, Driven by Humans',
    // Process uitleg
    'home.process.title': 'How Our Cold Outreach Process Works',
    'home.process.subtitle': 'A systematic approach to fill your pipeline with qualified leads and convert them into customers',
    // Control points
    'home.control.point1': 'Campaigns only go live with your approval',
    'home.control.point2': 'Real collaboration with your strategy team — no black box AI',
    'home.control.point3': 'Every AI recommendation comes with context and clarity',
    'home.control.point4': 'You stay in full control of your sales flow — we support, not override',
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.tagline': 'We transform businesses with AI-powered cold outreach and intelligent sales guidance. Consistent lead flow, better conversions.',
    // Approach Page CTA
    'approach.cta.title': 'Ready to Solve Your Lead Generation Challenges?',
    'approach.cta.subtitle': 'Let\'s discuss how our proven solutions can address your specific pain points and drive measurable results.',
    'approach.cta.button': 'Get Your Strategy Session',
    // Approach Page Challenges Section
    'approach.challenges.title': 'Common Challenges We Solve',
    'approach.challenges.subtitle': 'Real problems with proven solutions and measurable results.',
  },
  nl: {
          // Navigation
      'nav.home': 'Home',
      'nav.approach': 'Aanpak',
      'nav.about': 'Over Ons',
      'nav.contact': 'Contact',
    'nav.cta': 'Laten we praten!',
    
    // Home Page
    'home.hero.title': 'AI Leadgeneratie',
    'home.hero.subtitle': 'Slimmere leadgeneratie – Aangedreven door AI, gestuurd door mensen',
    'home.hero.description': 'Vul je sales-pipeline consistent met hoogwaardige leads via AI-gedreven cold outreach. Ons slimme systeem ondersteunt je opvolging en helpt je om geïnteresseerde prospects om te zetten in klanten.',
    'home.hero.cta': 'Boek je strategiegesprek',
    
    'home.pain.title': 'Loop je ook hier tegenan?',
    'home.pain.subtitle': 'Veelvoorkomende uitdagingen die we helpen oplossen',
    'home.pain.prospect': 'Moeite om de juiste prospects te vinden?',
    'home.pain.flow': 'Een onregelmatige stroom van nieuwe leads?',
    'home.pain.outreach': 'Cold outreach die weinig oplevert?',
    'home.pain.followup': 'Misgelopen deals door gebrekkige opvolging?',
    'home.pain.timing': 'Te laat of met de verkeerde boodschap reageren?',
    'home.pain.calls': 'Onvoorbereid zijn op kennismakingsgesprekken?',
    
    'home.solution.title': 'AI-gedreven leadgeneratie',
    'home.solution.description': 'We combineren geavanceerde AI-technologie met bewezen cold outreach strategieën om je pipeline consistent te vullen en je te begeleiden om meer deals te sluiten.',
    'home.solution.powered': 'Aangedreven door AI',
    'home.solution.driven': 'Gestuurd door Mensen',
    'home.solution.control': 'U Houdt Altijd Het Stuur Vast',
    
    // Home Page Process Steps
    'home.process.title': 'Hoe werkt ons cold outreach-proces?',
    'home.process.subtitle': 'Een gestructureerde aanpak om je pipeline te vullen en klanten binnen te halen',
    'home.process.1.title': 'Targeting & Dataverrijking',
    'home.process.1.desc': 'Onze AI selecteert en verrijkt automatisch de juiste prospects.',
    'home.process.2.title': 'Cold Outreach',
    'home.process.2.desc': 'Geautomatiseerde, gepersonaliseerde campagnes zorgen voor een constante instroom van leads.',
    'home.process.3.title': 'AI-ondersteunde opvolging',
    'home.process.3.desc': 'Realtime inzichten helpen je slimmer opvolgen en beter converteren.',
    'home.process.4.title': 'Deals sluiten',
    'home.process.4.desc': 'Zet warme leads om in klanten met gerichte salesbegeleiding.',
    'home.stats.1.label': 'bedrijven geholpen',
    'home.stats.2.label': 'hogere leadkwaliteit',
    'home.stats.3.label': 'snellere pipelinegroei',
    'home.stats.4.label': 'AI-monitoring en ondersteuning',
    'home.learnMore': 'Meer informatie',
    
    // Home Page Headings & Subtitles
    'home.control.title': 'U Houdt Altijd Het Stuur Vast',
    'home.control.subtitle': 'Onze technologie ondersteunt uw beslissingen — niet vervangt ze. U leidt het proces, wij leveren de kracht.',
    'home.stats.title': 'Bewezen resultaten in cijfers',
    'home.stats.subtitle': 'Onze aanpak levert structurele en meetbare groei op',
    'home.cta.title': 'Klaar om jouw pipeline te vullen met kwalitatieve leads?',
    'home.cta.subtitle': 'Sluit je aan bij 20+ bedrijven die groeien dankzij onze AI-gedreven outreach en salesbegeleiding.',
    'home.testimonials.title': 'Wat klanten over ons zeggen',
    'home.testimonials.subtitle': 'Hoe wij leadgeneratie en salesprocessen transformeren',
    'home.testimonials.1.quote': 'Ik had geen idee hoe ik cold outreach moest aanpakken. Paul hielp me effectief potentiële klanten te bereiken.',
    'home.testimonials.1.name': 'Ravi Ramnarain',
    'home.testimonials.1.company': 'Solvitec',
    'home.testimonials.1.result': 'Succesvolle outreach',
    'home.testimonials.2.quote': 'Ik merkte dat ik altijd te laat of verkeerd reageerde op leads. Met de AI-adviezen kan ik sneller en effectiever reageren.',
    'home.testimonials.2.name': 'Robin Meijerman',
    'home.testimonials.2.company': 'Zelfstandig',
    'home.testimonials.2.result': 'Snellere reacties',
    'home.testimonials.3.quote': 'Paul hielp ons effectief onze doelgroep te bereiken en via AI sneller en preciezer te reageren op potentiële klanten.',
    'home.testimonials.3.name': 'Jacco Den Hartogh',
    'home.testimonials.3.company': 'The FilmFactory',
    'home.testimonials.3.result': 'Gerichte outreach',
    
          // Approach Page
      'approach.title': 'Onze Aanpak',
      'approach.subtitle': 'Bedrijven transformeren met AI-aangedreven koude acquisitie en intelligente salesbegeleiding. Consistente leadflow, betere conversies.',
    
    'services.data.title': 'Data Collection & Enrichment',
    'services.data.description': 'We identificeren en verzamelen hyperrelevante leads binnen jouw doelgroep, verrijkt met waardevolle bedrijfsinformatie. Zo ontvang je altijd actuele, kwalitatieve en gevalideerde data, klaar voor outreach.',
    'services.data.feature1': 'Slimme scraping & data-analyse',
    'services.data.feature2': 'Realtime verrijking met o.a. branche, rol en bedrijfsgrootte',
    'services.data.feature3': 'Validatie en scoring op relevantie',
    'services.data.feature4': '100% AVG-conform',
    'services.data.cta': 'Wij zoeken jouw doelgroep. Jij focust op groei.',
    
    'services.outreach.title': 'Automated Cold Outreach',
    'services.outreach.description': 'We bouwen slimme, gepersonaliseerde campagnes op jouw naam — via e-mail, volledig geautomatiseerd. Daardoor belanden jouw proposities bij de juiste mensen, op het juiste moment.',
    'services.outreach.feature1': 'Persoonlijke e-mails en follow-ups',
    'services.outreach.feature2': 'Campagnebeheer in Smartlead (of ander platform)',
    'services.outreach.feature3': 'Testen, optimaliseren en schalen',
    'services.outreach.feature4': 'Inzicht in opens, clicks en replies',
    'services.outreach.cta': 'Geen handwerk meer. Jouw eerste contactmoment? Volledig geregeld.',
    
    'services.guidance.title': 'AI-Driven Sales Guidance',
    'services.guidance.description': 'Elke reply wordt automatisch gelezen en geanalyseerd door AI. Per lead ontvang jij een concreet opvolgadvies, zodat je precies weet wat te zeggen en wanneer — ook zonder saleservaring.',
    'services.guidance.feature1': 'AI-classificatie: HOT, WARM, COLD, NI',
    'services.guidance.feature2': 'Persoonlijk opvolgadvies per lead',
    'services.guidance.feature3': 'Taalherkenning en meertalige output (NL, EN, DE, ES)',
    'services.guidance.feature4': 'Continu lerend systeem gebaseerd op jouw cases',
    'services.guidance.cta': 'Niet alleen leads — maar ook de juiste woorden om ze binnen te halen.',
    
    'services.conversion.title': 'Conversion & Closing Deals',
    'services.conversion.description': 'Je ontvangt alleen geïnteresseerde leads met opvolgadvies. Zo voer je gerichte salesgesprekken en converteer je meer — zonder de ruis. Wij sturen rapportages. Jij sluit de deals.',
    'services.conversion.feature1': 'Automatische leadnotificaties per klant',
    'services.conversion.feature2': 'Warm lead filtering',
    'services.conversion.feature3': 'Dealtracking en rapportage (optioneel)',
    'services.conversion.feature4': 'Volledige focus op conversie',
    'services.conversion.cta': 'Jij doet de closing — wij zorgen voor alles ervoor.',
    
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
    
    // Control points
    'home.control.point1': 'Campagnes gaan alleen live met jouw goedkeuring',
    'home.control.point2': 'Echte samenwerking met je strategie team — geen black box AI',
    'home.control.point3': 'Elke AI-aanbeveling komt met context en duidelijkheid',
    'home.control.point4': 'Jij houdt altijd de controle over je sales flow — wij ondersteunen, niet overnemen',
    'footer.quickLinks': 'Quick Links',
    'footer.tagline': 'Wij transformeren bedrijven met AI-aangedreven cold outreach en intelligente sales begeleiding. Consistente leadstroom, betere conversies.',
    // Approach Page CTA
    'approach.cta.title': 'Ready to Solve Your Lead Generation Challenges?',
    'approach.cta.subtitle': 'Let\'s discuss how our proven solutions can address your specific pain points and drive measurable results.',
    'approach.cta.button': 'Get Your Strategy Session',
    // Approach Page Challenges Section
    'approach.challenges.title': 'Common Challenges We Solve',
    'approach.challenges.subtitle': 'Real problems with proven solutions and measurable results.',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.approach': 'Ansatz',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kontakt',
    
    // Home Page
    'home.hero.title': 'AI Lead Generierung',
    'home.hero.subtitle': 'Intelligentere Lead-Generierung – Angetrieben von KI, Getrieben von Menschen',
    'home.hero.description': 'Füllen Sie Ihre Pipeline konsistent mit hochwertigen Leads durch KI-gesteuerte Cold Outreach. Unser intelligentes System leitet Ihre Nachfassung an, um Prospects in Kunden zu verwandeln.',
    'home.hero.cta': 'Strategie-Session Buchen',
    
    'home.pain.title': 'Kämpfen Sie Mit...',
    'home.pain.subtitle': 'Häufige Herausforderungen, die unsere KI-Lösung Ihnen hilft zu überwinden',
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
    
    // Home Page Process Steps
    'home.process.1.title': 'Zielgruppe & Sammeln',
    'home.process.1.desc': 'KI identifiziert und bereichert Ihre idealen Zielkunden mit präzisen Daten',
    'home.process.2.title': 'Cold Outreach',
    'home.process.2.desc': 'Automatisierte, personalisierte Kampagnen füllen Ihre Pipeline kontinuierlich',
    'home.process.3.title': 'KI-Leitfaden',
    'home.process.3.desc': 'Echtzeit-Einblicke leiten Ihr Follow-up für maximale Konversion',
    'home.process.4.title': 'Abschlüsse erzielen',
    'home.process.4.desc': 'Wandeln Sie warme Leads mit strategischer Beratung in Kunden um',
    'home.stats.1.label': 'Bediente Unternehmen',
    'home.stats.2.label': 'Verbesserung der Lead-Qualität',
    'home.stats.3.label': 'Pipeline-Wachstumsrate',
    'home.stats.4.label': 'KI-Systemüberwachung',
    'home.learnMore': 'Mehr erfahren',
    
    // Home Page Headings & Subtitles
    'home.control.title': 'Sie Haben Immer Das Steuer in der Hand',
    'home.control.subtitle': 'Unsere Technologie unterstützt Ihre Entscheidungen – ersetzt sie aber nicht. Sie führen den Prozess, wir liefern die Power.',
    'home.stats.title': 'Bewährte Ergebnisse in Zahlen',
    'home.stats.subtitle': 'Unser KI-gestütztes Cold Outreach liefert konsistentes, messbares Wachstum',
    'home.cta.title': 'Bereit, Ihre Pipeline mit hochwertigen Leads zu füllen?',
    'home.cta.subtitle': 'Schließen Sie sich 500+ Unternehmen an, die bereits mit unserem KI-gestützten Cold Outreach und Sales Guidance wachsen.',
    'home.testimonials.title': 'Was Unsere Kunden Sagen',
    'home.testimonials.subtitle': 'Erfahren Sie, wie Unternehmen ihre Leadgenerierung und ihren Vertriebsprozess transformiert haben',
    'home.testimonials.1.quote': 'Ich hatte keine Ahnung, wie ich Cold Outreach angehen sollte. Paul hat mir geholfen, potenzielle Kunden effektiv zu erreichen.',
    'home.testimonials.1.name': 'Ravi Ramnarain',
    'home.testimonials.1.company': 'Solvitec',
    'home.testimonials.1.result': 'Erfolgreiche Outreach',
    'home.testimonials.2.quote': 'Ich habe gemerkt, dass ich immer zu spät oder falsch auf Leads reagiert habe. Mit den KI-Vorschlägen kann ich schneller und effektiver reagieren.',
    'home.testimonials.2.name': 'Robin Meijerman',
    'home.testimonials.2.company': 'Selbstständig',
    'home.testimonials.2.result': 'Schnellere Antworten',
    'home.testimonials.3.quote': 'Paul hat uns geholfen, unsere Zielgruppe effektiv zu erreichen und durch KI schneller und präziser auf potenzielle Kunden zu reagieren.',
    'home.testimonials.3.name': 'Jacco Den Hartogh',
    'home.testimonials.3.company': 'The FilmFactory',
    'home.testimonials.3.result': 'Gezielte Outreach',
    
          // Approach Page
      'approach.title': 'Unser Ansatz',
      'approach.subtitle': 'Unternehmen mit KI-gestützter Kaltakquise und intelligenter Vertriebsbegleitung transformieren. Konsistenter Leadfluss, bessere Konversionen.',
    
    'services.data.title': 'Datensammlung & -anreicherung',
    'services.data.description': 'Wir identifizieren und sammeln hochrelevante Leads innerhalb Ihrer Zielgruppe, angereichert mit wertvollen Unternehmensinformationen. So erhalten Sie immer aktuelle, qualitative und validierte Daten, bereit für Outreach.',
    'services.data.feature1': 'Intelligentes Scraping & Datenanalyse',
    'services.data.feature2': 'Echtzeit-Anreicherung mit Branche, Rolle und Unternehmensgröße',
    'services.data.feature3': 'Validierung und Relevanz-Scoring',
    'services.data.feature4': '100% DSGVO-konform',
    'services.data.cta': 'Wir finden Ihre Zielgruppe. Sie fokussieren sich auf Wachstum.',
    
    'services.outreach.title': 'Automatisierte Cold Outreach',
    'services.outreach.description': 'Wir erstellen intelligente, personalisierte Kampagnen in Ihrem Namen — per E-Mail, vollständig automatisiert. Dadurch erreichen Ihre Angebote die richtigen Personen zum richtigen Zeitpunkt.',
    'services.outreach.feature1': 'Persönliche E-Mails und Follow-ups',
    'services.outreach.feature2': 'Kampagnen-Management in Smartlead (oder andere Plattform)',
    'services.outreach.feature3': 'Testen, optimieren und skalieren',
    'services.outreach.feature4': 'Einblicke in Öffnungen, Klicks und Antworten',
    'services.outreach.cta': 'Keine Handarbeit mehr. Ihr erster Kontakt? Vollständig geregelt.',
    
    'services.guidance.title': 'KI-Gesteuerte Verkaufsberatung',
    'services.guidance.description': 'Jede Antwort wird automatisch von KI gelesen und analysiert. Pro Lead erhalten Sie konkrete Nachfass-Empfehlungen, sodass Sie genau wissen, was und wann zu sagen ist — auch ohne Verkaufserfahrung.',
    'services.guidance.feature1': 'KI-Klassifizierung: HOT, WARM, COLD, NI',
    'services.guidance.feature2': 'Persönliche Nachfass-Empfehlungen pro Lead',
    'services.guidance.feature3': 'Spracherkennung und mehrsprachige Ausgabe (NL, EN, DE, ES)',
    'services.guidance.feature4': 'Kontinuierlich lernendes System basierend auf Ihren Fällen',
    'services.guidance.cta': 'Nicht nur Leads — sondern auch die richtigen Worte, um sie zu gewinnen.',
    
    'services.conversion.title': 'Konversion & Deal-Abschluss',
    'services.conversion.description': 'Sie erhalten nur interessierte Leads mit Nachfass-Empfehlungen. So führen Sie gezielte Verkaufsgespräche und konvertieren mehr — ohne das Rauschen. Wir senden Berichte. Sie schließen die Deals ab.',
    'services.conversion.feature1': 'Automatische Lead-Benachrichtigungen pro Kunde',
    'services.conversion.feature2': 'Warme Lead-Filterung',
    'services.conversion.feature3': 'Deal-Tracking und Berichterstattung (optional)',
    'services.conversion.feature4': 'Vollständiger Fokus auf Konversion',
    'services.conversion.cta': 'Sie machen den Abschluss — wir kümmern uns um alles davor.',
    
    // Solutions Page
    'solutions.title': 'Lösungen Die Ergebnisse Liefern',
    'solutions.subtitle': 'Ihre Größten Cold Outreach Herausforderungen Anehen',
    
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
    
    // Hero
    'home.hero.title': 'AI Lead Generierung',
    'home.hero.subtitle': 'Intelligentere Lead-Generierung – Angetrieben von KI, Getrieben von Menschen',
    // Process uitleg
    'home.process.title': 'Cómo Funciona Nuestro Proceso de Cold Outreach',
    'home.process.subtitle': 'Un enfoque sistemático para llenar tu pipeline con leads calificados y convertirlos en clientes',
    // Control points
    'home.control.point1': 'Las campañas solo se lanzan con tu aprobación',
    'home.control.point2': 'Colaboración real con tu equipo de estrategia — nada de IA como caja negra',
    'home.control.point3': 'Cada recomendación de IA viene con contexto y claridad',
    'home.control.point4': 'Siempre tienes el control total de tu flujo de ventas — nosotros apoyamos, no reemplazamos',
    'footer.quickLinks': 'Quick Links',
    'footer.tagline': 'Transformamos empresas con cold outreach impulsado por IA y orientación de ventas inteligente. Flujo de leads consistente, mejores conversiones.',
    // Approach Page CTA
    'approach.cta.title': 'Ready to Solve Your Lead Generation Challenges?',
    'approach.cta.subtitle': 'Let\'s discuss how our proven solutions can address your specific pain points and drive measurable results.',
    'approach.cta.button': 'Get Your Strategy Session',
    // Approach Page Challenges Section
    'approach.challenges.title': 'Common Challenges We Solve',
    'approach.challenges.subtitle': 'Real problems with proven solutions and measurable results.',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.approach': 'Nuestro enfoque',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.cta': '¡Hablemos de estrategia!',
    
    // Home Page
    'home.hero.title': 'Generación de Leads AI',
    'home.hero.subtitle': 'Generación de Leads Más Inteligente – Impulsada por IA, Impulsada por Humanos',
    'home.hero.description': 'Llena tu pipeline consistentemente con leads de alta calidad a través de cold outreach impulsado por IA. Nuestro sistema inteligente guía tu seguimiento para convertir prospectos en clientes.',
    'home.hero.cta': 'Reserva Tu Sesión de Estrategia',
    
    'home.pain.title': '¿Estás Luchando Con...',
    'home.pain.subtitle': 'Desafíos comunes que nuestra solución impulsada por IA te ayuda a superar',
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
    
    // Home Page Process Steps
    'home.process.1.title': 'Identificar y Recopilar',
    'home.process.1.desc': 'La IA identifica y enriquece tus prospectos ideales con datos precisos',
    'home.process.2.title': 'Cold Outreach',
    'home.process.2.desc': 'Campañas personalizadas automatizadas llenan tu pipeline consistentemente',
    'home.process.3.title': 'Guía de IA',
    'home.process.3.desc': 'Información en tiempo real guía tu seguimiento para máxima conversión',
    'home.process.4.title': 'Cerrar Tratos',
    'home.process.4.desc': 'Convierte leads calientes en clientes con orientación estratégica',
    'home.stats.1.label': 'Empresas atendidas',
    'home.stats.2.label': 'Mejora de la calidad de leads',
    'home.stats.3.label': 'Tasa de crecimiento del pipeline',
    'home.stats.4.label': 'Monitoreo del sistema de IA',
    'home.learnMore': 'Saber más',
    
    // Home Page Headings & Subtitles
    'home.control.title': 'Siempre Tienes el Control',
    'home.control.subtitle': 'Nuestra tecnología apoya tus decisiones — no las reemplaza. Tú lideras el proceso, nosotros lo potenciamos.',
    'home.stats.title': 'Resultados Probados en Números',
    'home.stats.subtitle': 'Un nuestro cold outreach impulsado por IA ofrece un crecimiento consistente y medible',
    'home.cta.title': '¿Listo para llenar tu pipeline con leads de calidad?',
    'home.cta.subtitle': 'Únete a más de 500 empresas que ya están creciendo con nuestro cold outreach impulsado por IA y orientación de ventas.',
    'home.testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'home.testimonials.subtitle': 'Conoce a empresas que han transformado su generación de leads y proceso de ventas',
    'home.testimonials.1.quote': 'No tenía idea de cómo abordar el cold outreach. Paul me ayudó a llegar eficazmente a clientes potenciales.',
    'home.testimonials.1.name': 'Ravi Ramnarain',
    'home.testimonials.1.company': 'Solvitec',
    'home.testimonials.1.result': 'Outreach exitoso',
    'home.testimonials.2.quote': 'Noté que siempre respondía demasiado tarde o incorrectamente a los leads. Con las sugerencias de IA, puedo responder más rápido y eficazmente.',
    'home.testimonials.2.name': 'Robin Meijerman',
    'home.testimonials.2.company': 'Independiente',
    'home.testimonials.2.result': 'Respuestas más rápidas',
    'home.testimonials.3.quote': 'Paul nos ayudó a llegar eficazmente a nuestro público objetivo y, gracias a la IA, responder de forma más precisa y rápida a los clientes potenciales.',
    'home.testimonials.3.name': 'Jacco Den Hartogh',
    'home.testimonials.3.company': 'The FilmFactory',
    'home.testimonials.3.result': 'Outreach dirigido',
    
          // Approach Page
      'approach.title': 'Nuestro Enfoque',
      'approach.subtitle': 'Transformando empresas con cold outreach impulsado por IA y orientación de ventas inteligente. Flujo de leads consistente, mejores conversiones.',
    
    'services.data.title': 'Recolección y Enriquecimiento de Datos',
    'services.data.description': 'Identificamos y recopilamos leads hiperrelevantes dentro de tu público objetivo, enriquecidos con información valiosa de la empresa. Así siempre recibes datos actuales, cualitativos y validados, listos para outreach.',
    'services.data.feature1': 'Scraping inteligente y análisis de datos',
    'services.data.feature2': 'Enriquecimiento en tiempo real con industria, rol y tamaño de empresa',
    'services.data.feature3': 'Validación y puntuación de relevancia',
    'services.data.feature4': '100% conforme con GDPR',
    'services.data.cta': 'Nosotros encontramos tu público objetivo. Tú te enfocas en el crecimiento.',
    
    'services.outreach.title': 'Cold Outreach Automatizado',
    'services.outreach.description': 'Construimos campañas inteligentes y personalizadas en tu nombre — por email, completamente automatizadas. Así tus propuestas llegan a las personas correctas en el momento correcto.',
    'services.outreach.feature1': 'Emails personales y seguimientos',
    'services.outreach.feature2': 'Gestión de campañas en Smartlead (u otra plataforma)',
    'services.outreach.feature3': 'Pruebas, optimización y escalado',
    'services.outreach.feature4': 'Información sobre aperturas, clics y respuestas',
    'services.outreach.cta': 'No más trabajo manual. ¿Tu primer momento de contacto? Completamente arreglado.',
    
    'services.guidance.title': 'Orientación de Ventas Impulsada por IA',
    'services.guidance.description': 'Cada respuesta es leída y analizada automáticamente por IA. Por cada lead, recibes consejos concretos de seguimiento, para que sepas exactamente qué decir y cuándo — incluso sin experiencia en ventas.',
    'services.guidance.feature1': 'Clasificación IA: HOT, WARM, COLD, NI',
    'services.guidance.feature2': 'Consejos personales de seguimiento por lead',
    'services.guidance.feature3': 'Reconocimiento de idioma y salida multilingüe (NL, EN, DE, ES)',
    'services.guidance.feature4': 'Sistema de aprendizaje continuo basado en tus casos',
    'services.guidance.cta': 'No solo leads — sino también las palabras correctas para cerrarlos.',
    
    'services.conversion.title': 'Conversión y Cierre de Tratos',
    'services.conversion.description': 'Solo recibes leads interesados con consejos de seguimiento. Así conduces conversaciones de ventas dirigidas y conviertes más — sin el ruido. Nosotros enviamos reportes. Tú cierras los tratos.',
    'services.conversion.feature1': 'Notificaciones automáticas de leads por cliente',
    'services.conversion.feature2': 'Filtrado de leads cálidos',
    'services.conversion.feature3': 'Seguimiento de tratos y reportes (opcional)',
    'services.conversion.feature4': 'Enfoque completo en conversión',
    'services.conversion.cta': 'Tú haces el cierre — nosotros nos encargamos de todo lo anterior.',
    
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
    
    // Hero
    'home.hero.title': 'Generación de Leads AI',
    'home.hero.subtitle': 'Generación de Leads Más Inteligente – Impulsada por IA, Impulsada por Humanos',
    // Process uitleg
    'home.process.title': 'Cómo Funciona Nuestro Proceso de Cold Outreach',
    'home.process.subtitle': 'Un enfoque sistemático para llenar tu pipeline con leads calificados y convertirlos en clientes',
    // Control points
    'home.control.point1': 'Las campañas solo se lanzan con tu aprobación',
    'home.control.point2': 'Colaboración real con tu equipo de estrategia — nada de IA como caja negra',
    'home.control.point3': 'Cada recomendación de IA viene con contexto y claridad',
    'home.control.point4': 'Siempre tienes el control total de tu flujo de ventas — nosotros apoyamos, no reemplazamos',
    'footer.quickLinks': 'Quick Links',
    'footer.tagline': 'Transformamos empresas con cold outreach impulsado por IA y orientación de ventas inteligente. Flujo de leads consistente, mejores conversiones.',
    // Approach Page CTA
    'approach.cta.title': 'Ready to Solve Your Lead Generation Challenges?',
    'approach.cta.subtitle': 'Let\'s discuss how our proven solutions can address your specific pain points and drive measurable results.',
    'approach.cta.button': 'Get Your Strategy Session',
    // Approach Page Challenges Section
    'approach.challenges.title': 'Common Challenges We Solve',
    'approach.challenges.subtitle': 'Real problems with proven solutions and measurable results.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const getInitialLanguage = (): Language => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'nl', 'de', 'es'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) return 'es'; // Spanish
    if (browserLang.startsWith('nl')) return 'nl'; // Dutch
    if (browserLang.startsWith('de')) return 'de'; // German
    
    return 'en'; // Default to English
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Save to localStorage when language changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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