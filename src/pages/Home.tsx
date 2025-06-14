import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Target, TrendingUp, Bot, Heart, BarChart3, Mail, Clock, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();

  const painPoints = [
    { icon: Target, text: t('home.pain.prospect') },
    { icon: TrendingUp, text: t('home.pain.flow') },
    { icon: Users, text: t('home.pain.outreach') },
    { icon: CheckCircle, text: t('home.pain.followup') },
    { icon: Zap, text: t('home.pain.timing') },
    { icon: Bot, text: t('home.pain.calls') },
  ];

  const stats = [
    { number: '20+', label: t('home.stats.1.label'), icon: Users },
    { number: '85%', label: t('home.stats.2.label'), icon: TrendingUp },
    { number: '3x', label: t('home.stats.3.label'), icon: BarChart3 },
    { number: '24/7', label: t('home.stats.4.label'), icon: Bot }
  ];

  const processSteps = [
    {
      step: '01',
      title: t('home.process.1.title'),
      description: t('home.process.1.desc'),
      icon: Target
    },
    {
      step: '02',
      title: t('home.process.2.title'),
      description: t('home.process.2.desc'),
      icon: Mail
    },
    {
      step: '03',
      title: t('home.process.3.title'),
      description: t('home.process.3.desc'),
      icon: Bot
    },
    {
      step: '04',
      title: t('home.process.4.title'),
      description: t('home.process.4.desc'),
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      quote: t('home.testimonials.1.quote'),
      name: t('home.testimonials.1.name'),
      company: t('home.testimonials.1.company'),
      result: t('home.testimonials.1.result'),
    },
    {
      quote: t('home.testimonials.2.quote'),
      name: t('home.testimonials.2.name'),
      company: t('home.testimonials.2.company'),
      result: t('home.testimonials.2.result'),
    },
    {
      quote: t('home.testimonials.3.quote'),
      name: t('home.testimonials.3.name'),
      company: t('home.testimonials.3.company'),
      result: t('home.testimonials.3.result'),
    }
  ];

  const controlPoints = [
    t('home.control.point1'),
    t('home.control.point2'),
    t('home.control.point3'),
    t('home.control.point4'),
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 pt-20 pb-16 lg:pt-0 lg:pb-0">
        {/* TOP Moderne 2024 SaaS-achtergrond */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated dot grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #1B365D 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, #6366f1 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 80px 80px',
            backgroundPosition: '0 0, 40px 40px',
            opacity: 0.04,
            animation: 'float 20s ease-in-out infinite'
          }}></div>
          
          {/* Gradient mesh base */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
          
          {/* Floating geometric elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tr from-indigo-200/25 to-violet-200/15 rounded-full blur-2xl animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
          
          {/* Modern geometric shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/40 to-transparent transform rotate-12 rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[700px] h-[400px] bg-gradient-to-tr from-purple-100/30 to-transparent transform -rotate-6 rounded-2xl"></div>
          
          {/* Subtle diagonal lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonals" patternUnits="userSpaceOnUse" width="100" height="100">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#1B365D" strokeWidth="1"/>
                <line x1="0" y1="50" x2="50" y2="100" stroke="#6366f1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonals)"/>
          </svg>
          
          {/* Gradient orbs with movement */}
          <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-violet-400/20 to-purple-400/10 rounded-full blur-xl" style={{animation: 'drift 15s ease-in-out infinite'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-24 h-24 bg-gradient-to-l from-blue-400/15 to-indigo-400/8 rounded-full blur-lg" style={{animation: 'drift 18s ease-in-out infinite reverse'}}></div>
          
          {/* CSS animations */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes smoothFloat {
              0%, 100% { transform: translateY(-50%) translateX(0) rotate(0deg); }
              33% { transform: translateY(-45%) translateX(10px) rotate(0.5deg); }
              66% { transform: translateY(-55%) translateX(-8px) rotate(-0.3deg); }
            }
            @keyframes smoothBlurFloat {
              0%, 100% { transform: translateY(-50%) translateX(0) rotate(0deg); }
              33% { transform: translateY(-52%) translateX(2px) rotate(0.1deg); }
              66% { transform: translateY(-48%) translateX(-2px) rotate(-0.1deg); }
            }
            @keyframes drift {
              0%, 100% { transform: translate(0px, 0px); }
              33% { transform: translate(20px, -15px); }
              66% { transform: translate(-15px, 10px); }
            }
          `}</style>
        </div>
      

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Mobile hero image - shown first on mobile, above title */}
          <div className="lg:hidden pt-8 pb-12">
            <AnimatedSection animation="slideUp" delay={200} className="text-center px-4">
              <div className="relative max-w-sm mx-auto">
                <img 
                  src="/images/hero-banner.png" 
                  alt="AI-Powered Lead Generation" 
                  className="w-full h-auto opacity-85 rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-xl"></div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            {/* Glassmorphism floating card - verborgen op mobiel, zichtbaar op tablet en desktop */}
            <div className="hidden md:block absolute left-[-8%] top-[50%] transform -translate-y-1/2 w-[113%] h-[120%] bg-white/15 backdrop-blur-sm rounded-3xl shadow-xl z-0" style={{ animation: 'smoothBlurFloat 25s ease-in-out infinite' }}></div>
            
            <div className="text-center lg:text-left relative z-10">
              <AnimatedSection animation="fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold text-[#1B365D] mb-6">
                  {t('home.hero.title')}
                </h1>
                <p className="text-xl md:text-2xl text-[#1B365D] font-semibold mb-8">
                  {t('home.hero.subtitle')}
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slideUp" delay={300}>
                <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                  {t('home.hero.description')}
                </p>
              </AnimatedSection>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <AnimatedSection animation="scale" delay={600}>
                  <Link
                    to={getLocalizedPath('/contact')}
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#104ee3] to-[#104ee3]/90 rounded-2xl hover:from-[#104ee3]/90 hover:to-[#104ee3]/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    {t('home.hero.cta')}
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </AnimatedSection>
                
                <AnimatedSection animation="scale" delay={700}>
                  <Link
                    to={getLocalizedPath('/approach')}
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#1B365D] bg-blue-50 rounded-2xl hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t('nav.approach')}
                  </Link>
                </AnimatedSection>
              </div>
            </div>

            {/* Desktop hero image - rechts naast tekst */}
            <AnimatedSection animation="slideUp" delay={400} className="hidden lg:block">
              <div className="relative">
                <img 
                  src="/images/hero-banner.png" 
                  alt="AI-Powered Lead Generation" 
                  className="relative w-full h-auto opacity-80"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.pain.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('home.pain.subtitle')}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group border border-red-100 hover:bg-red-50"
              >
                <point.icon className="h-10 w-10 text-red-500 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-gray-700 font-medium">{point.text}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.process.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('home.process.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 150}
                className="relative"
              >
                <div className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 group text-center min-h-[300px] flex flex-col ${
                  index === 0 ? 'bg-orange-50 hover:bg-orange-100' :
                  index === 1 ? 'bg-blue-50 hover:bg-blue-100' :
                  index === 2 ? 'bg-purple-50 hover:bg-purple-100' :
                  'bg-green-50 hover:bg-green-100'
                }`}>
                  {/* Number - fixed at top */}
                  <div className={`text-4xl font-bold mb-4 ${
                    index === 0 ? 'text-orange-600/30' :
                    index === 1 ? 'text-blue-600/30' :
                    index === 2 ? 'text-purple-600/30' :
                    'text-green-600/30'
                  }`}>{step.step}</div>
                  
                  {/* Icon */}
                  <step.icon className={`${index === 2 ? 'h-14 w-14 mb-3' : 'h-12 w-12 mb-4'} mx-auto group-hover:scale-110 transition-transform duration-200 ${
                    index === 0 ? 'text-orange-600' :
                    index === 1 ? 'text-blue-600' :
                    index === 2 ? 'text-purple-600' :
                    'text-green-600'
                  }`} />
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description - takes remaining space */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className={`h-6 w-6 ${
                      index === 0 ? 'text-orange-400' :
                      index === 1 ? 'text-blue-400' :
                      'text-purple-400'
                    }`} />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('home.stats.title')}</h2>
            <p className="text-lg text-gray-600">{t('home.stats.subtitle')}</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 100}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <stat.icon className="h-8 w-8 text-[#1B365D] mx-auto mb-4" />
                  <div className="text-3xl font-bold text-[#1B365D] mb-2">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
                </div>
              </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('home.testimonials.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('home.testimonials.subtitle')}</p>
            </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* 5-sterren rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-[#104ee3]/10 rounded-full">
                    <p className="text-base font-bold text-[#104ee3]">✓ {testimonial.result}</p>
                  </div>
              </div>
            </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('home.cta.title')}</h2>
            <p className="text-xl text-gray-600 mb-12">{t('home.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={getLocalizedPath('/contact')}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#104ee3] to-[#104ee3]/90 rounded-2xl hover:from-[#104ee3]/90 hover:to-[#104ee3]/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                {t('common.getStarted')}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to={getLocalizedPath('/approach')}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#1B365D] bg-blue-50 rounded-2xl hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('home.learnMore')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default Home;