import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Target, TrendingUp, Bot, Heart, BarChart3, Mail, Clock, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  const { t } = useLanguage();

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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-white from-20% via-blue-50 to-[#1B365D]/30"></div>
          
          {/* Dynamic shapes */}
          <div className="absolute top-[20%] left-[5%] w-[800px] h-[800px] bg-gradient-to-br from-[#1B365D]/20 to-transparent rounded-[100px] -rotate-12 blur-3xl"></div>
          <div className="absolute bottom-0 right-[5%] w-[900px] h-[900px] bg-gradient-to-tr from-[#1B365D]/20 to-transparent rounded-[100px] rotate-12 blur-3xl"></div>
          
          {/* Accent shapes */}
          <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-gradient-to-br from-[#1B365D]/20 to-transparent rounded-[50px] rotate-45 blur-2xl"></div>
          <div className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] bg-gradient-to-tr from-[#1B365D]/20 to-transparent rounded-[50px] -rotate-45 blur-2xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #1B365D/10 1px, transparent 1px),
                             linear-gradient(to bottom, #1B365D/10 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
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

              <div className="flex justify-center">
                <AnimatedSection animation="scale" delay={600}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#1B365D] to-[#1B365D]/90 rounded-2xl hover:from-[#1B365D]/90 hover:to-[#1B365D]/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    {t('home.hero.cta')}
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </AnimatedSection>
              </div>
            </div>

            <AnimatedSection animation="slideUp" delay={400} className="hidden lg:block">
              <div className="relative">
                <img 
                  src="/images/tablet-with-statistics.png" 
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
                <div className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 group text-center ${
                  index === 0 ? 'bg-orange-50 hover:bg-orange-100' :
                  index === 1 ? 'bg-blue-50 hover:bg-blue-100' :
                  index === 2 ? 'bg-purple-50 hover:bg-purple-100' :
                  'bg-green-50 hover:bg-green-100'
                }`}>
                  <div className={`text-4xl font-bold mb-2 ${
                    index === 0 ? 'text-orange-600/30' :
                    index === 1 ? 'text-blue-600/30' :
                    index === 2 ? 'text-purple-600/30' :
                    'text-green-600/30'
                  }`}>{step.step}</div>
                  <step.icon className={`h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 ${
                    index === 0 ? 'text-orange-600' :
                    index === 1 ? 'text-blue-600' :
                    index === 2 ? 'text-purple-600' :
                    'text-green-600'
                  }`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                  <p className="text-sm font-medium text-gray-900 mt-2">{testimonial.result}</p>
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
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#1B365D] to-[#1B365D]/90 rounded-2xl hover:from-[#1B365D]/90 hover:to-[#1B365D]/80 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                {t('common.getStarted')}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
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