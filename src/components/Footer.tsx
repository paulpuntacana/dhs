import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Globe, Shield, Award, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoWhite from '../assets/logo-white.png';

const Footer: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link to={getLocalizedPath('/')} className="flex items-center space-x-3 mb-6">
              <img src={logoWhite} alt="DHS Logo" className="h-14 w-auto" />
              <span className="text-xl font-bold text-white whitespace-nowrap">DHS AI Lead Generation</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-lg">{t('footer.tagline')}</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/dhs-nl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@dsh_rd" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dhs.rd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-white font-semibold mb-4 lg:mt-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath('/')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/approach')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.approach')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/about')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/contact')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Jobs */}
          <div className="lg:pl-4">
            <h3 className="text-white font-semibold mb-4 lg:mt-6">{t('footer.legal')}</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link to={getLocalizedPath('/terms')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to={getLocalizedPath('/privacy')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
            <h3 className="text-white font-semibold mb-4">{t('footer.jobs')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getLocalizedPath('/careers')} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('footer.careers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Trust */}
          <div>
            <h3 className="text-lg font-semibold mb-4 lg:mt-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">info@denhartogh.solutions</span>
              </li>
            </ul>
            <div className="mt-8 space-y-2 text-sm text-gray-400">
              <p>Den Hartogh Solutions</p>
              <p>Chamber of Commerce: 93891237</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-left">
            © 2025 Den Hartogh Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;