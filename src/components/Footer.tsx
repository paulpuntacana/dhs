import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Globe, Shield, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <Bot className="h-8 w-8 text-blue-400" />
              <div>
                <span className="text-xl font-bold text-white">AI LEAD</span>
                <span className="text-xl font-bold text-blue-400 ml-1">GENERATION</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses with AI-powered cold outreach and intelligent sales guidance. 
              Consistent lead flow, better conversions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Den Hartogh Solutions</p>
              <p>Chamber of Commerce: 93891237</p>
              <p>© 2024 AI Lead Generation. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Trust */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact & Trust</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contact@aileadgeneration.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">Multi-lingual Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">GDPR Compliant</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">500+ Businesses Served</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Powered by AI, Driven by Humans - You Always Have the Steering Wheel
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;