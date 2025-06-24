import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, Clock, Mail, CheckCircle, HelpCircle, Globe } from 'lucide-react';
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

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataObj = new FormData(formElement);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqSections = [
    {
      title: t('contact.faq.strategy.title'),
      faqs: [
        {
          question: t('contact.faq.strategy.q1.question'),
          answer: t('contact.faq.strategy.q1.answer')
        },
        {
          question: t('contact.faq.strategy.q2.question'),
          answer: t('contact.faq.strategy.q2.answer')
        },
        {
          question: t('contact.faq.strategy.q3.question'),
          answer: t('contact.faq.strategy.q3.answer')
        },
        {
          question: t('contact.faq.strategy.q4.question'),
          answer: t('contact.faq.strategy.q4.answer')
        },
        {
          question: t('contact.faq.strategy.q5.question'),
          answer: t('contact.faq.strategy.q5.answer')
        }
      ]
    },
    {
      title: t('contact.faq.approach.title'),
      faqs: [
        {
          question: t('contact.faq.approach.q1.question'),
          answer: t('contact.faq.approach.q1.answer')
        },
        {
          question: t('contact.faq.approach.q2.question'),
          answer: t('contact.faq.approach.q2.answer')
        },
        {
          question: t('contact.faq.approach.q3.question'),
          answer: t('contact.faq.approach.q3.answer')
        },
        {
          question: t('contact.faq.approach.q4.question'),
          answer: t('contact.faq.approach.q4.answer')
        }
      ]
    },
    {
      title: t('contact.faq.business.title'),
      faqs: [
        {
          question: t('contact.faq.business.q1.question'),
          answer: t('contact.faq.business.q1.answer')
        },
        {
          question: t('contact.faq.business.q2.question'),
          answer: t('contact.faq.business.q2.answer')
        },
        {
          question: t('contact.faq.business.q3.question'),
          answer: t('contact.faq.business.q3.answer')
        },
        {
          question: t('contact.faq.business.q4.question'),
          answer: t('contact.faq.business.q4.answer')
        },
        {
          question: t('contact.faq.business.q5.question'),
          answer: t('contact.faq.business.q5.answer')
        }
      ]
    }
  ];

  // Generate FAQ Schema.org JSON-LD
  useEffect(() => {
    const generateFAQSchema = () => {
      const allFAQs = faqSections.flatMap(section => section.faqs);
      
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFAQs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    };

    // Add or update FAQ Schema script
    let faqSchemaScript = document.querySelector('script[type="application/ld+json"]#faq-schema');
    if (!faqSchemaScript) {
      faqSchemaScript = document.createElement('script');
      faqSchemaScript.setAttribute('type', 'application/ld+json');
      faqSchemaScript.setAttribute('id', 'faq-schema');
      document.head.appendChild(faqSchemaScript);
    }
    faqSchemaScript.textContent = JSON.stringify(generateFAQSchema(), null, 2);

    // Cleanup function to remove schema when component unmounts
    return () => {
      const schemaElement = document.querySelector('script[type="application/ld+json"]#faq-schema');
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [t]);

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
              {t('contact.header.description')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slideLeft">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />
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
                          placeholder={t('contact.form.placeholder.name')}
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
                          placeholder={t('contact.form.placeholder.email')}
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
                          placeholder={t('contact.form.placeholder.company')}
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
                          placeholder={t('contact.form.placeholder.message')}
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
                            {t('contact.form.submitting')}
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.form.success.title')}</h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {t('contact.form.success.message')}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', company: '', message: '' });
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {t('contact.form.success.another')}
                    </button>
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="slideRight" delay={300}>
              <div className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.expectations.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{t('contact.expectations.response.title')}</h4>
                        <p className="text-gray-600">{t('contact.expectations.response.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{t('contact.expectations.discussion.title')}</h4>
                        <p className="text-gray-600">{t('contact.expectations.discussion.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{t('contact.expectations.proposal.title')}</h4>
                        <p className="text-gray-600">{t('contact.expectations.proposal.description')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.direct.title')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{t('contact.direct.email.title')}</p>
                        <p className="text-gray-600">info@denhartogh.solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{t('contact.direct.response.title')}</p>
                        <p className="text-gray-600">{t('contact.direct.response.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                      <Globe className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium text-blue-600 italic">{t('contact.availability')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('contact.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              {t('contact.cta.description')}
            </p>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-300" />
              <span className="text-blue-100">{t('contact.cta.subtitle')}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('contact.faq.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('contact.faq.subtitle')}
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <AnimatedSection
                key={sectionIndex}
                animation="slideUp"
                delay={sectionIndex * 100}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    {section.title}
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {section.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                      >
                        <div className="p-6 h-full flex flex-col">
                          <div className="flex items-start space-x-4 flex-1">
                            <HelpCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                {faq.question}
                              </h4>
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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