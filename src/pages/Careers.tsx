import React from 'react';
import { Mail, Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const Careers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('careers.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                {t('careers.hero.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Current Status */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('careers.status.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('careers.status.description')}
              </p>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('careers.whyJoin.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('careers.whyJoin.innovation.title')}
                </h3>
                <p className="text-gray-600">
                  {t('careers.whyJoin.innovation.description')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('careers.whyJoin.growth.title')}
                </h3>
                <p className="text-gray-600">
                  {t('careers.whyJoin.growth.description')}
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('careers.whyJoin.impact.title')}
                </h3>
                <p className="text-gray-600">
                  {t('careers.whyJoin.impact.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Open Application */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl text-white p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6">
                {t('careers.openApplication.title')}
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                {t('careers.openApplication.description')}
              </p>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  {t('careers.openApplication.include.title')}
                </h3>
                <ul className="text-left space-y-2 text-blue-100">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    {t('careers.openApplication.include.cv')}
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    {t('careers.openApplication.include.motivation')}
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    {t('careers.openApplication.include.skills')}
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    {t('careers.openApplication.include.availability')}
                  </li>
                </ul>
              </div>
              
              <a
                href="mailto:info@denhartogh.solutions?subject=Open Sollicitatie - DHS&body=Beste DHS team,%0D%0A%0D%0AIk ben geïnteresseerd in een carrière bij Den Hartogh Solutions.%0D%0A%0D%0AMet vriendelijke groet,"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                {t('careers.openApplication.button')}
              </a>
              
              <p className="text-sm text-blue-200 mt-4">
                info@denhartogh.solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers; 