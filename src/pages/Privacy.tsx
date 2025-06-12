import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Privacy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead 
        title={t('privacy.title')}
        description={t('privacy.description')}
      />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('privacy.title')}</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">{t('privacy.intro')}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article1.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article1.intro')}</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>{t('privacy.article1.item1')}</li>
                <li>{t('privacy.article1.item2')}</li>
                <li>{t('privacy.article1.item3')}</li>
                <li>{t('privacy.article1.item4')}</li>
              </ul>
              <p className="text-gray-700 mb-4">{t('privacy.article1.additional')}</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>{t('privacy.article1.additional1')}</li>
                <li>{t('privacy.article1.additional2')}</li>
                <li>{t('privacy.article1.additional3')}</li>
              </ul>
              <p className="text-gray-700 mb-6">{t('privacy.article1.conclusion')}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article2.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article2.intro')}</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>{t('privacy.article2.item1')}</li>
                <li>{t('privacy.article2.item2')}</li>
                <li>{t('privacy.article2.item3')}</li>
                <li>{t('privacy.article2.item4')}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article3.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article3.intro')}</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>{t('privacy.article3.item1')}</li>
                <li>{t('privacy.article3.item2')}</li>
                <li>{t('privacy.article3.item3')}</li>
                <li>{t('privacy.article3.item4')}</li>
                <li>{t('privacy.article3.item5')}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article4.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article4.intro')}</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>{t('privacy.article4.item1')}</li>
                <li>{t('privacy.article4.item2')}</li>
                <li>{t('privacy.article4.item3')}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article5.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article5.intro')}</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>{t('privacy.article5.item1')}</li>
                <li>{t('privacy.article5.item2')}</li>
                <li>{t('privacy.article5.item3')}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article6.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article6.intro')}</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>{t('privacy.article6.item1')}</li>
                <li>{t('privacy.article6.item2')}</li>
                <li>{t('privacy.article6.item3')}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article7.title')}</h2>
              <p className="text-gray-700 mb-6">{t('privacy.article7.content')}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article8.title')}</h2>
              <p className="text-gray-700 mb-6">{t('privacy.article8.content')}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article9.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article9.intro')}</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>{t('privacy.article9.item1')}</li>
                <li>{t('privacy.article9.item2')}</li>
                <li>{t('privacy.article9.item3')}</li>
                <li>{t('privacy.article9.item4')}</li>
              </ul>
              <p className="text-gray-700 mb-6">{t('privacy.article9.contact')}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article10.title')}</h2>
              <p className="text-gray-700 mb-4">{t('privacy.article10.intro')}</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>{t('privacy.article10.item1')}</li>
                <li>{t('privacy.article10.item2')}</li>
                <li>{t('privacy.article10.item3')}</li>
                <li>{t('privacy.article10.item4')}</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article11.title')}</h2>
              <p className="text-gray-700 mb-6">{t('privacy.article11.content')}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article12.title')}</h2>
              <p className="text-gray-700 mb-6">{t('privacy.article12.content')}</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{t('privacy.article13.title')}</h2>
              <p className="text-gray-700 mb-6">{t('privacy.article13.content')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy; 