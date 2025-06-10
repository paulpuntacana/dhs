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
    { number: '20+', label: 'Businesses Served', icon: Users },
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

  const testimonials = [
    {
      name: 'Ravi Ramnarain',
      company: 'Solvitec',
      quote: 'I had no idea how to approach cold outreach. Paul helped me effectively reach potential clients and get through to customers.',
      rating: 5,
      result: 'Successful outreach'
    },
    {
      name: 'Robin Meijerman',
      company: 'Independent',
      quote: 'I noticed I was always responding too late or incorrectly to leads. With the AI suggestions, I can respond faster and more effectively.',
      rating: 5,
      result: 'Faster responses'
    },
    {
      name: 'Jacco Den Hartogh',
      company: 'The FilmFactory',
      quote: 'Paul helped us effectively reach our target audience and, through AI, respond more precisely and quickly to potential clients.',
      rating: 5,
      result: 'Targeted outreach'
    }
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
            backgroundImage: `linear-gradient(to right, #1B365D/15 1.5px, transparent 1.5px),
                             linear-gradient(to bottom, #1B365D/15 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <AnimatedSection animation="fadeIn">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  AI Lead Generation
                </h1>
                <p className="text-xl md:text-2xl text-[#1B365D] font-semibold mb-8">
                  Smarter Lead Generation – Powered by AI, Driven by Humans.
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

      {/* Human Control Section */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-[#1B365D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideUp" delay={400} className="hidden lg:block">
              <div className="relative">
                <img 
                  src="/images/dashboard.png" 
                  alt="Human Control in AI-Powered Sales" 
                  className="relative w-full h-auto bg-white"
                />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection animation="fadeIn">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  You're Always in Control
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  Our technology supports your decisions — not replaces them. You lead the process, we power it.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-[#1B365D] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Campaigns only go live with your approval</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-[#1B365D] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Real collaboration with your strategy team — no black box AI</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Target className="h-6 w-6 text-[#1B365D] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">Every AI recommendation comes with context and clarity</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Zap className="h-6 w-6 text-[#1B365D] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">You stay in full control of your sales flow — we support, not override</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their lead generation and sales process
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Fill Your Pipeline with Quality Leads?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Join 500+ businesses already growing with our AI-powered cold outreach and sales guidance system.
            </p>
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