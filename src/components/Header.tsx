
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center z-50">
          <div className="flex items-center">
            <img src="/lovable-uploads/853b5012-903f-4a1b-b8cd-57248be4e649.png" alt="CBLEU Logo" className="h-10 mr-2" />
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => {
            const isHome = item === 'Accueil';
            const href = isHome ? '/' : `/#${item.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;
            
            return isHome ? (
              <Link 
                key={item} 
                to={href}
                className="font-medium text-gray-700 hover:text-cbleu transition-colors underline-animation"
              >
                {item}
              </Link>
            ) : (
              <a 
                key={item} 
                href={href}
                className="font-medium text-gray-700 hover:text-cbleu transition-colors underline-animation"
              >
                {item}
              </a>
            );
          })}
        </nav>
        
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-8 text-center">
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => {
                const isHome = item === 'Accueil';
                const href = isHome ? '/' : `/#${item.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`;
                
                return isHome ? (
                  <Link 
                    key={item} 
                    to={href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium text-gray-800 hover:text-cbleu transition-colors"
                  >
                    {item}
                  </Link>
                ) : (
                  <a 
                    key={item} 
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-medium text-gray-800 hover:text-cbleu transition-colors"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
