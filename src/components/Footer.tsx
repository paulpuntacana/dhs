import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const { t, getLocalizedPath } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link to={getLocalizedPath('/')} className="flex items-center space-x-3 mb-6">
              <img className="h-12 w-auto" src={logo} alt="DHS Logo" />
            </Link>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/dhs-nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dhs.rd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8L7.48 14.68c.302.569.890.951 1.969.951s1.667-.382 1.969-.951l2.047.508c-.568 1.07-1.719 1.8-3.016 1.8zm7.101 0c-1.297 0-2.448-.73-3.016-1.8l2.047-.508c.302.569.890.951 1.969.951s1.667-.382 1.969-.951l2.047.508c-.568 1.07-1.719 1.8-3.016 1.8z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@dsh_rd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contact.title')}</h3>
            <div className="space-y-4">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span><br />
                info@denhartogh.solutions
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Address:</span><br />
                Kerkstraat 4B<br />
                6883 HT Velp<br />
                Netherlands
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Den Hartogh Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
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