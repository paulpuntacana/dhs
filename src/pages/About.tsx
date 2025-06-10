import React from 'react';
import { Heart, Bot, Users, Award, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Bot,
      title: 'AI-Powered Innovation',
      description: 'Leveraging cutting-edge artificial intelligence to revolutionize lead generation and sales processes.'
    },
    {
      icon: Heart,
      title: 'Human-Centered Approach',
      description: 'Technology serves people, not the other way around. Every solution is designed with human needs first.'
    },
    {
      icon: Users,
      title: 'Partnership Focus',
      description: 'We build lasting relationships with our clients, becoming an extension of their sales and marketing teams.'
    },
    {
      icon: Award,
      title: 'Results-Driven Excellence',
      description: 'Every strategy is measured by tangible outcomes and sustainable business growth for our clients.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Businesses Served' },
    { number: '85%', label: 'Lead Quality Improvement' },
    { number: '3x', label: 'Average ROI Increase' },
    { number: '24/7', label: 'AI System Monitoring' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-blue-600 font-semibold mb-8">
                {t('about.subtitle')}
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a forward-thinking company that combines the power of artificial intelligence with human expertise to revolutionize how businesses generate and convert leads.
              </p>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>Established 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span>500+ Clients Served</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={300}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                  alt="About AI Lead Generation"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-gray-900 font-semibold">Den Hartogh Solutions</p>
                    <p className="text-gray-600 text-sm">CoC: 93891237</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" 
                  alt="Our Mission"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  <Target className="h-5 w-5 inline mr-2" />
                  Mission Driven
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={300}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t('about.mission.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
                    <p className="text-gray-600">Building systems that deliver consistent, predictable results month after month.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Partnership</h3>
                    <p className="text-gray-600">Working closely with clients to understand their unique challenges and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Bot className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Solutions</h3>
                    <p className="text-gray-600">Leveraging AI to solve complex problems while keeping humans in control.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t('about.philosophy.title')}
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-16 leading-relaxed">
              {t('about.philosophy.description')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <value.icon className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Measurable results that speak to our commitment to client success.
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
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
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
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t('nav.services')}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;