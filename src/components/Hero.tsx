
import React from 'react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="mb-6">
              <span className="gradient-text">Solutions numériques</span><br />
              <span className="text-cbleu-dark">pour vos ambitions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Basée à La Réunion, CBLEU développe des applications mobiles et web innovantes qui propulsent votre entreprise vers le succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary text-center">Découvrir nos services</a>
              <a href="#contact" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full font-medium transition-all hover:bg-blue-50 text-center">Nous contacter</a>
            </div>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-10 animate-float">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur"></div>
              <div className="relative bg-white rounded-lg p-6 md:p-8 shadow-xl">
                <div className="aspect-[4/3] bg-gradient-radial from-blue-100 to-purple-100 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                    CBLEU
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
