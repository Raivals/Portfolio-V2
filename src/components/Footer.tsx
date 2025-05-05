import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return <Github size={20} />;
    }
  };

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="p-3 mb-8 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
          
          <h2 className="text-2xl font-bold text-white mb-6">Romain BERNARDOT</h2>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Romain BERNARDOT. Tout droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;