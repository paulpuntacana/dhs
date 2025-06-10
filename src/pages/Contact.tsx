import React, { useState } from 'react';
import { Send, MessageCircle, Clock, Mail, CheckCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const faqs = [
    {
      question: 'How quickly can we see results?',
      answer: 'Most clients see an increase in qualified leads within the first 30 days. Full optimization typically occurs within 60-90 days as our AI learns your ideal customer profile.'
    },
    {
      question: 'Do we maintain control over our outreach?',
      answer: 'Absolutely. You review and approve all campaigns before they go live. Our AI provides recommendations, but you always have the final say.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work across all B2B industries, with particular expertise in technology, professional services, manufacturing, and consulting sectors.'
    },
    {
      question: 'How does pricing work?',
      answer: 'Our pricing is performance-based and scales with your business. We offer flexible packages based on lead volume and service requirements. Contact us for a customized quote.'
    },
    {
      question: 'Is there a long-term contract required?',
      answer: 'We offer both month-to-month and annual contracts. Many clients choose annual agreements for better pricing, but we\'re flexible based on your needs.'
    },
    {
      question: 'How do you ensure data privacy and compliance?',
      answer: 'We are fully GDPR compliant and follow strict data protection protocols. All client data is encrypted and stored securely, with regular security audits.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
              {t('contact.subtitle')}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your lead generation with AI-powered precision? Let's discuss your specific challenges and create a customized strategy for your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slideLeft">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Strategy Session</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.name')} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.email')} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.company')} *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your Company Name"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          {t('contact.form.message')} *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Tell us about your current lead generation challenges and goals..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            {t('contact.form.submit')}
                            <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Your strategy session request has been submitted successfully. We'll contact you within 24 hours to schedule your consultation.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Submit Another Request
                    </button>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="slideRight" delay={300}>
              <div className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Quick Response</h4>
                        <p className="text-gray-600">We'll contact you within 24 hours to schedule your strategy session.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Strategy Discussion</h4>
                        <p className="text-gray-600">60-minute deep dive into your current challenges and growth goals.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Custom Proposal</h4>
                        <p className="text-gray-600">Tailored solution with clear steps, timeline, and expected outcomes.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">contact@aileadgeneration.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">Response Time</p>
                        <p className="text-gray-600">Within 24 hours on business days</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-blue-100 mb-4">
                    Join 500+ businesses already growing with our AI-powered lead generation system.
                  </p>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-sm">No long-term contracts required</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('contact.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our AI-powered lead generation services.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={index * 50}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;