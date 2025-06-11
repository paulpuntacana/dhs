import React from 'react';
import { Heart, Bot, Users, Award, Target, TrendingUp, ArrowRight, BarChart3, Zap, Handshake, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Bot,
      title: t('about.values.1.title'),
      description: t('about.values.1.description')
    },
    {
      icon: TrendingUp,
      title: t('about.values.2.title'),
      description: t('about.values.2.description')
    },
    {
      icon: Handshake,
      title: t('about.values.3.title'),
      description: t('about.values.3.description')
    },
    {
      icon: Target,
      title: t('about.values.4.title'),
      description: t('about.values.4.description')
    }
  ];

  const stats = [
    { number: '20+', label: t('home.stats.1.label'), icon: Users },
    { number: '85%', label: t('home.stats.2.label'), icon: TrendingUp },
    { number: '3x', label: t('home.stats.3.label'), icon: BarChart3 },
    { number: '24/7', label: t('home.stats.4.label'), icon: Bot }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#104ee3]/5 via-white to-[#1B365D]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.story.paragraph1')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.story.paragraph2')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('about.story.paragraph3')}
                </p>
                <p className="text-lg text-gray-600 font-medium italic border-l-4 border-[#104ee3] pl-4">
                  {t('about.story.signature')}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={300}>
              <div className="relative bg-gradient-to-br from-[#104ee3]/10 to-[#104ee3]/5 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-center">
                  <img 
                    src="/images/foto.jpg" 
                    alt="Paul den Hartogh - Founder DHS"
                    className="w-72 h-72 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="mt-6 text-center">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg inline-block shadow-lg">
                    <p className="text-gray-900 font-bold text-lg">Paul Den Hartogh</p>
                    <p className="text-[#104ee3] font-semibold">{t('about.founder')}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-r from-[#104ee3] to-[#1B365D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.philosophy.title')}
            </h2>
            <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              {t('about.philosophy.description')}
            </p>
            
            {/* Mission Statement */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {t('about.mission.description')}
                </p>
              </div>
            </div>

            {/* Values Statement */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t('about.values.title')}</h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-center">{value.title}</h3>
                  <p className="text-white/80 text-center leading-relaxed text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.stats.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('about.stats.description')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                animation="scale"
                delay={index * 100}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-[180px] flex flex-col justify-center border border-gray-100">
                  <stat.icon className="h-8 w-8 text-[#104ee3] mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-[#104ee3] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium text-sm leading-tight">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Entity</h3>
                  <p className="text-gray-600">Den Hartogh Solutions</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Chamber of Commerce</h3>
                  <p className="text-gray-600">93891237</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Focus</h3>
                  <p className="text-gray-600">AI-Powered Lead Generation & Sales Optimization</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Area</h3>
                  <p className="text-gray-600">International (English, Dutch, German, Spanish)</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Partner With Us for Growth
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Experience the perfect blend of AI innovation and human expertise. Let's build your lead generation success story together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                {t('contact.title')}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/approach"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('nav.approach')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;