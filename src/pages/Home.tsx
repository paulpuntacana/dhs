import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Target, TrendingUp, Bot, Heart, BarChart3, Mail, Clock } from 'lucide-react';
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
    { number: '500+', label: 'Businesses Served', icon: Users },
    { number: '85%', label: 'Lead Quality Improvement', icon: TrendingUp },
    { number: '3x', label: 'Pipeline Growth Rate', icon: BarChart3 },
    { number: '24/7', label: 'AI System Monitoring', icon: Bot }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Target & Collect',
      description: 'AI identifies and enriches your ideal prospects with precision data',
      icon: Target
    },
    {
      step: '02',
      title: 'Cold Outreach',
      description: 'Automated personalized campaigns fill your pipeline consistently',
      icon: Mail
    },
    {
      step: '03',
      title: 'AI Guidance',
      description: 'Real-time insights guide your follow-up for maximum conversion',
      icon: Bot
    },
    {
      step: '04',
      title: 'Close Deals',
      description: 'Convert warm leads into customers with strategic guidance',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="block">{t('home.hero.title')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
              {t('home.hero.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={300}>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('home.hero.description')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={600}>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              {t('home.hero.cta')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              Our AI-powered cold outreach delivers consistent, measurable growth
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
                <div className="bg-blue-50 p-6 rounded-2xl hover:bg-blue-100 transition-all duration-300 hover:scale-105">
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.pain.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Common challenges that prevent businesses from achieving consistent lead generation and conversion success
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
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
              How Our Cold Outreach Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to fill your pipeline with qualified leads and convert them into customers
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
                <div className="bg-blue-50 p-6 rounded-2xl hover:bg-blue-100 transition-all duration-300 hover:scale-105 group text-center">
                  <div className="text-4xl font-bold text-blue-600/30 mb-2">{step.step}</div>
                  <step.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {t('home.solution.title')}
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                {t('home.solution.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <Bot className="h-8 w-8 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-lg font-semibold">{t('home.solution.powered')}</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <Heart className="h-8 w-8 text-blue-300 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-lg font-semibold">{t('home.solution.driven')}</span>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-xl font-bold text-blue-100">
                  {t('home.solution.control')}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={300}>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Clock className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <p className="text-blue-100 text-sm">AI Monitoring</p>
                    </div>
                    <div className="text-center">
                      <Mail className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">1000+</div>
                      <p className="text-blue-100 text-sm">Daily Outreach</p>
                    </div>
                    <div className="text-center">
                      <Target className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">95%</div>
                      <p className="text-blue-100 text-sm">Accuracy Rate</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-blue-300 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">3x</div>
                      <p className="text-blue-100 text-sm">Pipeline Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Fill Your Pipeline with Quality Leads?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join 500+ businesses already growing with our AI-powered cold outreach and sales guidance system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                {t('common.getStarted')}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('common.learnMore')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;