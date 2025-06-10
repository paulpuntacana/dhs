import React from 'react';
import { Database, Send, Brain, Target, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Database,
      title: t('services.data.title'),
      description: t('services.data.description'),
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      features: [
        'Advanced data mining and analysis',
        'Real-time lead enrichment',
        'Quality scoring and validation',
        'GDPR compliant data handling'
      ]
    },
    {
      icon: Send,
      title: t('services.outreach.title'),
      description: t('services.outreach.description'),
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      features: [
        'Personalized email sequences',
        'Multi-channel campaign automation',
        'A/B testing and optimization',
        'Response tracking and analytics'
      ]
    },
    {
      icon: Brain,
      title: t('services.guidance.title'),
      description: t('services.guidance.description'),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      features: [
        'Real-time conversation analysis',
        'Intelligent response suggestions',
        'Sales process optimization',
        'Performance insights and coaching'
      ]
    },
    {
      icon: Target,
      title: t('services.conversion.title'),
      description: t('services.conversion.description'),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      features: [
        'Warm lead qualification',
        'Follow-up automation',
        'Deal closure guidance',
        'ROI tracking and reporting'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={300}>
            <div className="max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                alt="AI Services Overview"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
                delay={200}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-blue-100 rounded-xl">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
                    >
                      {t('common.getStarted')}
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative group">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our Services Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless integration of AI technology and human expertise to maximize your lead generation success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Step {index + 1}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.title}
                  </p>
                </div>
                
                {index < services.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-400" />
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Experience All Four Services?
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Let's discuss how our comprehensive approach can transform your lead generation and conversion rates.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              {t('contact.title')}
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;