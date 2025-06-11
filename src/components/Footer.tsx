import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Globe, Shield, Award, Linkedin, Youtube, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import logoWhite from '../assets/logo-white.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img src={logoWhite} alt="DHS Logo" className="h-14 w-auto" />
              <span className="text-xl font-bold text-white whitespace-nowrap">AI Lead Generation</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">{t('footer.tagline')}</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/dhs-nl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="https://www.youtube.com/@dsh_rd" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-500 transition-colors duration-200">
                <Youtube className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/dhs.rd/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition-colors duration-200">
                <Instagram className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/approach" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  {t('nav.approach')}
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
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Den Hartogh Solutions. All rights reserved.
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