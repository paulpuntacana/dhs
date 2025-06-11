import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Database, Mail, Bot, Target, CheckCircle, BarChart, Globe, Shield, 
  Zap, Users, TrendingUp, AlertCircle, Send, Brain, ChevronDown, ChevronUp,
  MessageCircle, ClipboardList, Settings, Rocket, BarChart3
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      number: '01',
      title: t('services.data.title'),
      description: t('services.data.description'),
      features: [
        t('services.data.feature1'),
        t('services.data.feature2'),
        t('services.data.feature3'),
        t('services.data.feature4')
      ],
      cta: t('services.data.cta'),
      icon: Database,
      color: 'blue'
    },
    {
      number: '02',
      title: t('services.outreach.title'),
      description: t('services.outreach.description'),
      features: [
        t('services.outreach.feature1'),
        t('services.outreach.feature2'),
        t('services.outreach.feature3'),
        t('services.outreach.feature4')
      ],
      cta: t('services.outreach.cta'),
      icon: Mail,
      color: 'green'
    },
    {
      number: '03',
      title: t('services.guidance.title'),
      description: t('services.guidance.description'),
      features: [
        t('services.guidance.feature1'),
        t('services.guidance.feature2'),
        t('services.guidance.feature3'),
        t('services.guidance.feature4')
      ],
      cta: t('services.guidance.cta'),
      icon: Bot,
      color: 'purple'
    },
    {
      number: '04',
      title: t('services.conversion.title'),
      description: t('services.conversion.description'),
      features: [
        t('services.conversion.feature1'),
        t('services.conversion.feature2'),
        t('services.conversion.feature3'),
        t('services.conversion.feature4')
      ],
      cta: t('services.conversion.cta'),
      icon: Target,
      color: 'orange'
    }
  ];

  const problemSolutions = [
    {
      problem: {
        icon: AlertCircle,
        title: language === 'nl' ? 'Moeilijk de juiste prospects vinden' :
               language === 'en' ? 'Struggling to Find Right Prospects' :
               language === 'de' ? 'Schwierigkeiten beim Finden der richtigen Prospects' :
               'Dificultades para encontrar los prospectos correctos',
        description: language === 'nl' ? 'Tijd verspillen aan ongekwalificeerde leads en brede targeting benaderingen die slechte resultaten opleveren.' :
                     language === 'en' ? 'Wasting time on unqualified leads and broad targeting approaches that yield poor results.' :
                     language === 'de' ? 'Zeit verschwenden mit unqualifizierten Leads und breiten Targeting-Ansätzen, die schlechte Ergebnisse liefern.' :
                     'Perdiendo tiempo en leads no calificados y enfoques de targeting amplios que producen malos resultados.',
      },
      solution: {
        icon: Target,
        title: language === 'nl' ? 'Geavanceerde Data Collection & Enrichment' :
               language === 'en' ? 'Advanced Data Collection & Enrichment' :
               language === 'de' ? 'Erweiterte Datensammlung & -anreicherung' :
               'Recolección y Enriquecimiento Avanzado de Datos',
        description: language === 'nl' ? 'AI-aangedreven targeting identificeert je ideale prospects met precisie en levert verrijkte, hoogwaardige leads.' :
                     language === 'en' ? 'AI-powered targeting identifies your ideal prospects with precision, providing enriched, high-quality leads.' :
                     language === 'de' ? 'KI-gesteuerte Zielgruppenansprache identifiziert Ihre idealen Prospects mit Präzision und liefert angereicherte, hochwertige Leads.' :
                     'El targeting impulsado por IA identifica tus prospectos ideales con precisión, proporcionando leads enriquecidos y de alta calidad.',
      },
      value: {
        icon: TrendingUp,
        metric: '3x',
        description: language === 'nl' ? 'Meer gekwalificeerde prospects in je pipeline' :
                     language === 'en' ? 'More qualified prospects in your pipeline' :
                     language === 'de' ? 'Mehr qualifizierte Prospects in Ihrer Pipeline' :
                     'Más prospectos calificados en tu pipeline',
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: language === 'nl' ? 'Inconsistente Lead Flow' :
               language === 'en' ? 'Inconsistent Lead Flow' :
               language === 'de' ? 'Inkonsistenter Lead-Fluss' :
               'Flujo de Leads Inconsistente',
        description: language === 'nl' ? 'Onvoorspelbare leadgeneratie die honger-of-overvloed zakencycli creëert.' :
                     language === 'en' ? 'Unpredictable lead generation creating feast-or-famine business cycles.' :
                     language === 'de' ? 'Unvorhersagbare Lead-Generierung schafft Fest-oder-Hungersnot-Geschäftszyklen.' :
                     'Generación impredecible de leads creando ciclos comerciales de abundancia o escasez.',
      },
      solution: {
        icon: Zap,
        title: language === 'nl' ? 'Geautomatiseerd Outreach Systeem' :
               language === 'en' ? 'Automated Outreach System' :
               language === 'de' ? 'Automatisiertes Outreach-System' :
               'Sistema de Outreach Automatizado',
        description: language === 'nl' ? 'Consistente, gepersonaliseerde outreach campagnes zorgen voor een stabiele leadstroom elke maand.' :
                     language === 'en' ? 'Consistent, personalized outreach campaigns ensure steady lead flow every month.' :
                     language === 'de' ? 'Konsistente, personalisierte Outreach-Kampagnen sorgen für einen stetigen Lead-Fluss jeden Monat.' :
                     'Campañas de outreach consistentes y personalizadas aseguran un flujo constante de leads cada mes.',
      },
      value: {
        icon: TrendingUp,
        metric: '85%',
        description: language === 'nl' ? 'Meer consistente maandelijkse leadgeneratie' :
                     language === 'en' ? 'More consistent monthly lead generation' :
                     language === 'de' ? 'Konsistentere monatliche Lead-Generierung' :
                     'Generación de leads mensual más consistente',
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: language === 'nl' ? 'Slechte Follow-up & Verkeerde Berichten' :
               language === 'en' ? 'Poor Follow-up & Wrong Messaging' :
               language === 'de' ? 'Schlechte Nachfassung & Falsche Nachrichten' :
               'Mal Seguimiento y Mensajería Incorrecta',
        description: language === 'nl' ? 'Deals verliezen door onvoldoende follow-up timing en ineffectieve communicatiestrategieën.' :
                     language === 'en' ? 'Losing deals due to inadequate follow-up timing and ineffective communication strategies.' :
                     language === 'de' ? 'Deals verlieren aufgrund unzureichender Nachfass-Zeiten und ineffektiver Kommunikationsstrategien.' :
                     'Perdiendo deals debido a timing inadecuado de seguimiento y estrategias de comunicación inefectivas.',
      },
      solution: {
        icon: CheckCircle,
        title: language === 'nl' ? 'AI-Gedreven Sales Begeleiding' :
               language === 'en' ? 'AI-Driven Sales Guidance' :
               language === 'de' ? 'KI-Gesteuerte Sales Beratung' :
               'Orientación de Ventas Impulsada por IA',
        description: language === 'nl' ? 'Real-time insights vertellen je precies wat je moet zeggen en wanneer je moet opvolgen voor maximale impact.' :
                     language === 'en' ? 'Real-time insights tell you exactly what to say and when to follow up for maximum impact.' :
                     language === 'de' ? 'Echtzeit-Einblicke sagen Ihnen genau, was Sie sagen müssen und wann Sie nachfassen sollten für maximale Wirkung.' :
                     'Insights en tiempo real te dicen exactamente qué decir y cuándo hacer seguimiento para máximo impacto.',
      },
      value: {
        icon: TrendingUp,
        metric: '60%',
        description: language === 'nl' ? 'Verbetering in conversiepercentages' :
                     language === 'en' ? 'Improvement in conversion rates' :
                     language === 'de' ? 'Verbesserung der Konversionsraten' :
                     'Mejora en las tasas de conversión',
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: language === 'nl' ? 'Onvoorbereide Discovery Calls' :
               language === 'en' ? 'Unprepared Discovery Calls' :
               language === 'de' ? 'Unvorbereitete Discovery-Calls' :
               'Llamadas de Descubrimiento Sin Preparar',
        description: language === 'nl' ? 'Kansen missen door gebrek aan voorbereiding en inzicht in prospect behoeften.' :
                     language === 'en' ? 'Missing opportunities due to lack of preparation and insight into prospect needs.' :
                     language === 'de' ? 'Chancen verpassen aufgrund mangelnder Vorbereitung und Einblick in Prospect-Bedürfnisse.' :
                     'Perdiendo oportunidades por falta de preparación e insight sobre las necesidades del prospecto.',
      },
      solution: {
        icon: Users,
        title: language === 'nl' ? 'Conversie & Closing Ondersteuning' :
               language === 'en' ? 'Conversion & Closing Support' :
               language === 'de' ? 'Konversion & Abschluss Unterstützung' :
               'Soporte de Conversión y Cierre',
        description: language === 'nl' ? 'Uitgebreide prospect intelligence en begeleide conversatiestrategieën voor succesvolle closes.' :
                     language === 'en' ? 'Comprehensive prospect intelligence and guided conversation strategies for successful closes.' :
                     language === 'de' ? 'Umfassende Prospect-Intelligence und angeleitete Gesprächsstrategien für erfolgreiche Abschlüsse.' :
                     'Intelligence integral del prospecto y estrategias de conversación guiadas para cierres exitosos.',
      },
      value: {
        icon: TrendingUp,
        metric: '45%',
        description: language === 'nl' ? 'Hoger deal sluitingspercentage' :
                     language === 'en' ? 'Higher deal closure rate' :
                     language === 'de' ? 'Höhere Deal-Abschlussrate' :
                     'Mayor tasa de cierre de deals',
      }
    }
  ];

  const processSteps = [
    {
      id: 1,
      color: 'blue',
      icon: MessageCircle,
      title: {
        nl: "Kennismaking & Doelgroepverkenning",
        en: "Introduction & Target Audience Exploration", 
        de: "Kennenlernen & Zielgruppenexploration",
        es: "Introducción & Exploración de Audiencia"
      },
      description: {
        nl: "We starten met een kort gesprek waarin we je wensen, doelgroep en doelen helder krijgen.",
        en: "We start with a brief conversation to clarify your needs, target audience, and goals.",
        de: "Wir starten mit einem kurzen Gespräch, in dem wir Ihre Wünsche, Zielgruppe und Ziele klären.",
        es: "Comenzamos con una conversación breve para aclarar tus necesidades, audiencia objetivo y metas."
      }
    },
    {
      id: 2,
      color: 'green',
      icon: ClipboardList,
      title: {
        nl: "Onboarding & Strategieformulier",
        en: "Onboarding & Strategy Form",
        de: "Onboarding & Strategieformular", 
        es: "Onboarding & Formulario de Estrategia"
      },
      description: {
        nl: "Je ontvangt een slim opgesteld formulier waarmee wij alle info verzamelen om direct aan de slag te kunnen — zonder eindeloos heen en weer gemail.",
        en: "You receive a smartly designed form that allows us to gather all information to get started immediately — without endless back-and-forth emails.",
        de: "Sie erhalten ein clever gestaltetes Formular, mit dem wir alle Informationen sammeln, um sofort loslegen zu können — ohne endloses Hin- und Her-Mailen.",
        es: "Recibes un formulario inteligentemente diseñado que nos permite recopilar toda la información para empezar inmediatamente — sin correos interminables de ida y vuelta."
      }
    },
    {
      id: 3,
      color: 'purple',
      icon: Settings,
      title: {
        nl: "Technische Setup & Campagnevoorbereiding",
        en: "Technical Setup & Campaign Preparation",
        de: "Technisches Setup & Kampagnenvorbereitung",
        es: "Configuración Técnica & Preparación de Campañas"
      },
      description: {
        nl: "We zetten je domeinen, inboxen, scripts en AI-systemen op. Jij hoeft niks te doen — wij regelen alles.",
        en: "We set up your domains, inboxes, scripts, and AI systems. You don't need to do anything — we handle everything.",
        de: "Wir richten Ihre Domains, Postfächer, Skripte und KI-Systeme ein. Sie müssen nichts tun — wir kümmern uns um alles.",
        es: "Configuramos tus dominios, bandejas de entrada, scripts y sistemas de IA. No necesitas hacer nada — nosotros nos encargamos de todo."
      }
    },
    {
      id: 4,
      color: 'orange',
      icon: Rocket,
      title: {
        nl: "Livegang binnen 10–14 dagen",
        en: "Go Live within 10-14 days",
        de: "Live-Schaltung innerhalb 10-14 Tagen",
        es: "En Vivo en 10-14 días"
      },
      description: {
        nl: "Na goedkeuring van de scripts en campagnes gaan we live. Vanaf dag 1 worden reacties gecategoriseerd en krijg je AI-advies per lead.",
        en: "After approval of scripts and campaigns, we go live. From day 1, responses are categorized and you receive AI advice per lead.",
        de: "Nach Genehmigung der Skripte und Kampagnen gehen wir live. Ab Tag 1 werden Antworten kategorisiert und Sie erhalten KI-Beratung pro Lead.",
        es: "Después de la aprobación de scripts y campañas, vamos en vivo. Desde el día 1, las respuestas se categorizan y recibes consejos de IA por lead."
      }
    },
    {
      id: 5,
      color: 'red',
      icon: BarChart3,
      title: {
        nl: "Optimaliseren & Schalen",
        en: "Optimize & Scale",
        de: "Optimieren & Skalieren",
        es: "Optimizar & Escalar"
      },
      description: {
        nl: "We blijven verbeteren op basis van data. Wil je uitbreiden naar nieuwe doelgroepen of kanalen? We groeien met je mee.",
        en: "We continue to improve based on data. Want to expand to new target groups or channels? We grow with you.",
        de: "Wir verbessern weiterhin basierend auf Daten. Möchten Sie auf neue Zielgruppen oder Kanäle expandieren? Wir wachsen mit Ihnen.",
        es: "Continuamos mejorando basándonos en datos. ¿Quieres expandir a nuevos grupos objetivo o canales? Crecemos contigo."
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', accent: 'bg-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', accent: 'bg-green-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', accent: 'bg-purple-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', accent: 'bg-orange-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200', accent: 'bg-red-600' }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('approach.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              {t('approach.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 150}
                className="relative"
              >
                {/* Horizontal service card */}
                <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Content side */}
                  <div className="flex-1 w-full">
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-80 flex flex-col">
                      {/* Header */}
                      <div className={`p-4 ${getColorClasses(service.color).bg} rounded-t-xl flex-shrink-0`}>
                        <div className="flex items-center">
                          <div className={`p-2 rounded-lg ${getColorClasses(service.color).text} bg-white mr-3`}>
                            <service.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <span className={`text-xs font-bold ${getColorClasses(service.color).text} uppercase tracking-wide block`}>
                              {service.number}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        {/* Description */}
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-4 flex-1">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <CheckCircle className={`h-4 w-4 ${getColorClasses(service.color).text} mr-2 mt-0.5 flex-shrink-0`} />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${getColorClasses(service.color).bg} border ${getColorClasses(service.color).border} flex-shrink-0`}>
                          <p className={`font-semibold ${getColorClasses(service.color).text} flex items-center text-sm`}>
                            <span className="mr-2">👉</span>
                            {service.cta}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Infographic side */}
                  <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                    <div className="relative group">
                      <img 
                        src={`/images/step${index + 1}.png`}
                        alt={service.title}
                        className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'nl' && "Klaar om je leadgeneratie-uitdagingen op te lossen?"}
              {language === 'en' && "Ready to Solve Your Lead Generation Challenges?"}
              {language === 'de' && "Bereit, Ihre Lead-Generierungs-Herausforderungen zu lösen?"}
              {language === 'es' && "¿Listo para resolver tus desafíos de generación de leads?"}
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              {language === 'nl' && "Laten we bespreken hoe onze bewezen oplossingen jouw specifieke uitdagingen kunnen aanpakken en meetbare resultaten kunnen leveren."}
              {language === 'en' && "Let's discuss how our proven solutions can address your specific pain points and drive measurable results."}
              {language === 'de' && "Lassen Sie uns besprechen, wie unsere bewährten Lösungen Ihre spezifischen Herausforderungen angehen und messbare Ergebnisse erzielen können."}
              {language === 'es' && "Hablemos de cómo nuestras soluciones probadas pueden abordar tus desafíos específicos y generar resultados medibles."}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#104ee3] to-[#104ee3]/90 rounded-2xl hover:from-[#104ee3]/90 hover:to-[#104ee3]/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {language === 'nl' && "Krijg je strategiesessie"}
              {language === 'en' && "Get Your Strategy Session"}
              {language === 'de' && "Hol dir deine Strategiesitzung"}
              {language === 'es' && "Obtén tu sesión de estrategia"}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Human Control Section */}
      <section className="py-12 bg-gradient-to-r from-[#104ee3]/20 to-[#104ee3]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection animation="slideLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {language === 'nl' && "You're Always in Control"}
                {language === 'en' && "You're Always in Control"}
                {language === 'de' && "Du hast immer die Kontrolle"}
                {language === 'es' && "Tú siempre tienes el control"}
              </h2>
              
              {language === 'nl' && (
                <>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Bij DHS gebruiken we AI om jouw koude acquisitie slimmer en efficiënter te maken — maar jij blijft altijd de eindbeslisser. Ons systeem ondersteunt jouw proces, het vervangt het niet.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Jij beoordeelt en keurt alle campagnes vooraf goed</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Je krijgt direct contact met je vaste strategiespecialist</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Volledige transparantie in alle AI-aanbevelingen</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Jij bepaalt het tempo en de aanpak van je salesproces</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    We combineren slimme automatisering met menselijke nuance, zodat je profiteert van technologie zonder de controle te verliezen.
                  </p>
                </>
              )}

              {language === 'en' && (
                <>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    At DHS, we use AI to make cold outreach smarter and more efficient — but you remain in charge. Our system supports your process, it doesn't replace it.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">You review and approve all campaigns before they go live</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Direct access to your dedicated strategy specialist</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Full transparency in all AI-generated recommendations</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">You control the pace and direction of your sales process</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    We combine smart automation with human nuance, so you benefit from technology without ever losing control.
                  </p>
                </>
              )}

              {language === 'de' && (
                <>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Bei DHS nutzen wir KI, um Kaltakquise intelligenter und effizienter zu gestalten – aber du triffst weiterhin alle Entscheidungen. Unser System unterstützt deinen Prozess, ersetzt ihn jedoch nicht.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Du prüfst und genehmigst alle Kampagnen vor dem Versand</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Direkter Kontakt zu deinem festen Strategieberater</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Volle Transparenz bei allen KI-basierten Empfehlungen</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Du bestimmst das Tempo und den Verlauf deines Verkaufsprozesses</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Wir verbinden clevere Automatisierung mit menschlichem Feingefühl – damit du von Technologie profitierst, ohne die Kontrolle zu verlieren.
                  </p>
                </>
              )}

              {language === 'es' && (
                <>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    En DHS usamos IA para hacer el outreach en frío más inteligente y eficiente, pero tú sigues teniendo el control. Nuestro sistema apoya tu proceso, no lo reemplaza.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Revisas y apruebas todas las campañas antes de enviarlas</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Acceso directo a tu especialista en estrategia dedicado</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Transparencia total en todas las recomendaciones de la IA</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#104ee3] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tú decides el ritmo y la dirección de tu proceso de ventas</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm">
                    Combinamos automatización inteligente con sensibilidad humana, para que aproveches la tecnología sin perder el control.
                  </p>
                </>
              )}
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={300}>
              <div className="relative">
                <img 
                  src="/images/human.jpeg" 
                  alt="Human-AI Collaboration"
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-gray-200">
                    <p className="text-gray-900 font-semibold text-sm">Technology Empowers, Humans Decide</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem-Solution-Value Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'nl' && "Veelvoorkomende uitdagingen die we oplossen"}
              {language === 'en' && "Common Challenges We Solve"}
              {language === 'de' && "Häufige Herausforderungen, die wir lösen"}
              {language === 'es' && "Desafíos comunes que resolvemos"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' && "Echte problemen met bewezen oplossingen en meetbare resultaten."}
              {language === 'en' && "Real problems with proven solutions and measurable results."}
              {language === 'de' && "Echte Probleme mit bewährten Lösungen und messbaren Ergebnissen."}
              {language === 'es' && "Problemas reales con soluciones probadas y resultados medibles."}
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {problemSolutions.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Problem */}
                    <div className="p-6 bg-red-50 border-l-4 border-red-500">
                      <div className="flex items-center space-x-3 mb-3">
                        <item.problem.icon className="h-6 w-6 text-red-500" />
                        <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                          {language === 'nl' ? 'Het Probleem' :
                           language === 'en' ? 'The Problem' :
                           language === 'de' ? 'Das Problem' :
                           'El Problema'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.problem.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.problem.description}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-6 bg-blue-50 border-l-4 border-blue-500">
                      <div className="flex items-center space-x-3 mb-3">
                        <item.solution.icon className="h-6 w-6 text-blue-500" />
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                          {language === 'nl' ? 'Onze Oplossing' :
                           language === 'en' ? 'Our Solution' :
                           language === 'de' ? 'Unsere Lösung' :
                           'Nuestra Solución'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.solution.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.solution.description}
                      </p>
                    </div>

                    {/* Value */}
                    <div className="p-6 bg-green-50 border-l-4 border-green-500">
                      <div className="flex items-center space-x-3 mb-3">
                        <item.value.icon className="h-6 w-6 text-green-500" />
                        <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                          {language === 'nl' ? 'Uw Waarde' :
                           language === 'en' ? 'Your Value' :
                           language === 'de' ? 'Ihr Wert' :
                           'Su Valor'}
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {item.value.metric}
                      </div>
                      <p className="text-gray-600 text-sm">
                        {item.value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Accordion Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'nl' && "Ons Proces – Van Kennismaking tot Resultaat"}
              {language === 'en' && "Our Process – From Introduction to Results"}
              {language === 'de' && "Unser Prozess – Von Kennenlernen bis Ergebnis"}
              {language === 'es' && "Nuestro Proceso – De Conocerse a Resultados"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'nl' && "Een gestructureerde aanpak voor maximale effectiviteit"}
              {language === 'en' && "A structured approach for maximum effectiveness"}
              {language === 'de' && "Ein strukturierter Ansatz für maximale Effektivität"}
              {language === 'es' && "Un enfoque estructurado para máxima efectividad"}
            </p>
          </AnimatedSection>

          {/* Horizontal Accordion */}
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-80">
            {processSteps.map((step, index) => {
              const colors = getColorClasses(step.color);
              
              // Specific hover classes for each color since Tailwind can't handle dynamic classes
              const getHoverClasses = (color: string) => {
                switch(color) {
                  case 'blue': return 'group-hover:bg-blue-100';
                  case 'green': return 'group-hover:bg-green-100';
                  case 'purple': return 'group-hover:bg-purple-100';
                  case 'orange': return 'group-hover:bg-orange-100';
                  case 'red': return 'group-hover:bg-red-100';
                  default: return 'group-hover:bg-blue-100';
                }
              };

              const getIconHoverClasses = (color: string) => {
                switch(color) {
                  case 'blue': return 'group-hover:bg-blue-600';
                  case 'green': return 'group-hover:bg-green-600';
                  case 'purple': return 'group-hover:bg-purple-600';
                  case 'orange': return 'group-hover:bg-orange-600';
                  case 'red': return 'group-hover:bg-red-600';
                  default: return 'group-hover:bg-blue-600';
                }
              };
              
              return (
                <AnimatedSection
                  key={step.id}
                  animation="slideUp"
                  delay={index * 100}
                  className="flex-1 group"
                >
                  <div 
                    className={`rounded-xl shadow-lg transition-all duration-500 overflow-hidden cursor-pointer h-full bg-white ${getHoverClasses(step.color)} group-hover:flex-[3] group-hover:shadow-xl hover:ring-2 hover:ring-blue-500`}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      {/* Header - Always visible */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`flex items-center justify-center w-10 h-10 ${colors.bg} ${colors.text} rounded-full transition-colors duration-300 ${getIconHoverClasses(step.color)} group-hover:text-white`}>
                            <step.icon className="h-5 w-5" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wide`}>
                              {language === 'nl' ? 'Stap' : language === 'en' ? 'Step' : language === 'de' ? 'Schritt' : 'Paso'} {step.id}
                            </span>
                            <ChevronDown className={`h-4 w-4 text-gray-400 lg:rotate-90 transition-transform duration-300 group-hover:lg:rotate-180`} />
                          </div>
                        </div>
                      </div>

                      {/* Title - Always visible */}
                      <h3 className={`text-sm font-semibold ${colors.text} uppercase tracking-wide mb-3 transition-colors duration-300`}>
                        {step.title[language]}
                      </h3>

                      {/* Content - Always visible */}
                      <div className="flex-1">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description[language]}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'nl' && "Ben je overtuigd?"}
              {language === 'en' && "Are you convinced?"}
              {language === 'de' && "Sind Sie überzeugt?"}
              {language === 'es' && "¿Estás convencido?"}
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              {language === 'nl' && "Laten we bespreken hoe onze bewezen oplossingen jouw specifieke uitdagingen kunnen aanpakken en meetbare resultaten kunnen leveren."}
              {language === 'en' && "Let's discuss how our proven solutions can address your specific challenges and deliver measurable results."}
              {language === 'de' && "Lassen Sie uns besprechen, wie unsere bewährten Lösungen Ihre spezifischen Herausforderungen angehen und messbare Ergebnisse liefern können."}
              {language === 'es' && "Hablemos de cómo nuestras soluciones probadas pueden abordar tus desafíos específicos y entregar resultados medibles."}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#104ee3] to-[#104ee3]/90 rounded-2xl hover:from-[#104ee3]/90 hover:to-[#104ee3]/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              {language === 'nl' && "Laten we praten!"}
              {language === 'en' && "Let's talk!"}
              {language === 'de' && "Lass uns reden!"}
              {language === 'es' && "¡Hablemos!"}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;