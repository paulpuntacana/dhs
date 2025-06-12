import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';

const Terms: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('terms.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('terms.subtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slideUp">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                
                {/* Article 1 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article1.title')}</h2>
                <p className="mb-4">{t('terms.article1.intro')}</p>
                <div className="mb-6">
                  <p className="mb-2"><strong>a.</strong> {t('terms.article1.a')}</p>
                  <p className="mb-2"><strong>b.</strong> {t('terms.article1.b')}</p>
                  <p className="mb-2"><strong>c.</strong> {t('terms.article1.c')}</p>
                  <p className="mb-2"><strong>d.</strong> {t('terms.article1.d')}</p>
                  <p className="mb-2"><strong>e.</strong> {t('terms.article1.e')}</p>
                  <p className="mb-2"><strong>f.</strong> {t('terms.article1.f')}</p>
                </div>

                {/* Article 2 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article2.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article2.content')}</p>
                </div>

                {/* Article 3 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article3.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article3.content')}</p>
                </div>

                {/* Article 4 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article4.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article4.content')}</p>
                </div>

                {/* Article 5 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article5.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article5.content')}</p>
                </div>

                {/* Article 6 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article6.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article6.content')}</p>
                </div>

                {/* Article 7 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article7.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article7.content')}</p>
                </div>

                {/* Article 8 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article8.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article8.content')}</p>
                </div>

                {/* Article 9 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article9.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article9.content')}</p>
                </div>

                {/* Article 10 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article10.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article10.content')}</p>
                </div>

                {/* Article 11 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article11.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article11.content')}</p>
                </div>

                {/* Article 12 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article12.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article12.content')}</p>
                </div>

                {/* Article 13 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article13.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article13.content')}</p>
                </div>

                {/* Article 14 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article14.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article14.content')}</p>
                </div>

                {/* Article 15 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article15.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article15.content')}</p>
                </div>

                {/* Article 16 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article16.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article16.content')}</p>
                </div>

                {/* Article 17 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article17.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article17.content')}</p>
                </div>

                {/* Article 18 */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('terms.article18.title')}</h2>
                <div className="mb-6">
                  <p>{t('terms.article18.content')}</p>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Terms; 