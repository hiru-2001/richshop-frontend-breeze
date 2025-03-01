
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">RichMobile</h2>
            <p className="text-sm text-gray-600 max-w-xs">
              Premium mobile devices and accessories for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'FAQ', path: '/faq' },
                { name: 'Shipping & Returns', path: '/shipping-returns' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  123 Tech Street, Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                <a href="tel:+1-202-555-0188" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  +1 (202) 555-0188
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                <a href="mailto:support@richmobile.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  support@richmobile.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-center text-gray-500">
            © {currentYear} RichMobile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
