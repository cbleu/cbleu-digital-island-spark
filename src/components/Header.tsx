
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        <a href="#" className="flex items-center z-50">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-violet-600">
            C<span className="text-cbleu-accent">BLEU</span>
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
              className="font-medium text-gray-700 hover:text-cbleu-accent transition-colors underline-animation"
            >
              {item}
            </a>
          ))}
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
              {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium text-gray-800 hover:text-cbleu-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
