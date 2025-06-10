import React from 'react';
import { AlertCircle, CheckCircle, TrendingUp, Users, Zap, Target, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  const problemSolutions = [
    {
      problem: {
        icon: AlertCircle,
        title: 'Struggling to Find Right Prospects',
        description: 'Wasting time on unqualified leads and broad targeting approaches that yield poor results.',
      },
      solution: {
        icon: Target,
        title: 'Advanced Data Collection & Enrichment',
        description: 'AI-powered targeting identifies your ideal prospects with precision, providing enriched, high-quality leads.',
      },
      value: {
        icon: TrendingUp,
        metric: '3x',
        description: 'More qualified prospects in your pipeline',
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: 'Inconsistent Lead Flow',
        description: 'Unpredictable lead generation creating feast-or-famine business cycles.',
      },
      solution: {
        icon: Zap,
        title: 'Automated Outreach System',
        description: 'Consistent, personalized outreach campaigns ensure steady lead flow every month.',
      },
      value: {
        icon: TrendingUp,
        metric: '85%',
        description: 'More consistent monthly lead generation',
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: 'Poor Follow-up & Wrong Messaging',
        description: 'Losing deals due to inadequate follow-up timing and ineffective communication strategies.',
      },
      solution: {
        icon: CheckCircle,
        title: 'AI-Driven Sales Guidance',
        description: 'Real-time insights tell you exactly what to say and when to follow up for maximum impact.',
      },
      value: {
        icon: TrendingUp,
        metric: '60%',
        description: 'Improvement in conversion rates',
      }
    },
    {
      problem: {
        icon: AlertCircle,
        title: 'Unprepared Discovery Calls',
        description: 'Missing opportunities due to lack of preparation and insight into prospect needs.',
      },
      solution: {
        icon: Users,
        title: 'Conversion & Closing Support',
        description: 'Comprehensive prospect intelligence and guided conversation strategies for successful closes.',
      },
      value: {
        icon: TrendingUp,
        metric: '45%',
        description: 'Higher deal closure rate',
      }
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      quote: 'AI Lead Generation transformed our outreach completely. We went from 10 leads per month to over 50 qualified prospects.',
      rating: 5,
      result: '400% lead increase'
    },
    {
      name: 'Michael Chen',
      company: 'Growth Marketing Pro',
      quote: 'The AI guidance system helped us close deals we would have lost. The real-time suggestions are game-changing.',
      rating: 5,
      result: '60% more conversions'
    },
    {
      name: 'Elena Rodriguez',
      company: 'B2B Connect',
      quote: 'Finally, consistent lead flow! No more feast or famine months. Our revenue is predictable now.',
      rating: 5,
      result: 'Consistent growth'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('solutions.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
              {t('solutions.subtitle')}
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideUp" delay={300}>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              We understand the challenges you face in lead generation and conversion. Our AI-powered solutions address each pain point with precision and proven results.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem-Solution Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {problemSolutions.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Problem */}
                    <div className="p-8 bg-red-50 border-l-4 border-red-500">
                      <div className="flex items-center space-x-3 mb-4">
                        <item.problem.icon className="h-8 w-8 text-red-500" />
                        <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                          {t('solutions.problem.title')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.problem.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.problem.description}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-8 bg-blue-50 border-l-4 border-blue-500">
                      <div className="flex items-center space-x-3 mb-4">
                        <item.solution.icon className="h-8 w-8 text-blue-500" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                          {t('solutions.solution.title')}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.solution.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.solution.description}
                      </p>
                    </div>

                    {/* Value */}
                    <div className="p-8 bg-green-50 border-l-4 border-green-500">
                      <div className="flex items-center space-x-3 mb-4">
                        <item.value.icon className="h-8 w-8 text-green-500" />
                        <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                          {t('solutions.value.title')}
                        </span>
                      </div>
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {item.value.metric}
                      </div>
                      <p className="text-gray-600">
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

      {/* Human Control Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                {t('solutions.human.title')}
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {t('solutions.human.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span className="text-lg">You review and approve all outreach campaigns</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span className="text-lg">Direct access to your dedicated strategy team</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span className="text-lg">Full transparency in all AI recommendations</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-blue-300 flex-shrink-0" />
                  <span className="text-lg">Complete control over your sales process</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight" delay={300}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
                  alt="Human-AI Collaboration"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/30">
                    <p className="text-white font-semibold">Technology Empowers, Humans Decide</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses using our AI-powered solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 100}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-blue-600">{testimonial.result}</p>
                    </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Ready to Solve Your Lead Generation Challenges?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Let's discuss how our proven solutions can address your specific pain points and drive measurable results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group"
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

export default Solutions;