
import React from 'react';
import { companyInfo } from '../config/company';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cbleu-dark text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center">
              <img 
                src="/lovable-uploads/6165e1f4-9101-4761-8cd8-e0bdf470e345.png" 
                alt="CBLEU Logo" 
                className="h-10 mr-2"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              {companyInfo.description}
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} CBLEU. Tous droits réservés.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-gray-300 hover:text-cbleu-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Applications Mobiles', 
                'Sites Web', 
                'E-commerce', 
                'Développement sur mesure',
                'Infrastructure Cloud'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-gray-300 hover:text-cbleu-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              {companyInfo.name} - SIRET: {companyInfo.legal.siret} - {companyInfo.legal.location}
            </div>
            <div className="text-sm text-gray-400">
              <a href="/mentions-legales" className="hover:text-cbleu-accent mr-6">Mentions légales</a>
              <a href="#" className="hover:text-cbleu-accent">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
