
import React from 'react';

const About = () => {
  return (
    <section id="a-propos" className="section bg-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 blur"></div>
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-b from-blue-400 to-violet-500 p-10 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-6xl font-bold mb-4">CBLEU</div>
                      <div className="text-xl">La Réunion - Océan Indien</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="mb-6">À propos de <span className="gradient-text">CBLEU</span></h2>
            <p className="text-lg text-gray-700 mb-6">
              CBLEU est une entreprise réunionnaise spécialisée dans le développement de solutions numériques 
              innovantes. Notre équipe d'experts passionnés conjugue expertise technique et connaissance du 
              marché local pour offrir des services informatiques de haute qualité.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Basée à l'Île de La Réunion dans l'Océan Indien, nous travaillons avec des clients 
              locaux et internationaux pour développer des applications mobiles, des sites web et 
              des solutions e-commerce qui répondent précisément à leurs besoins.
            </p>
            <p className="text-lg text-gray-700">
              Notre vision est de contribuer au développement numérique de La Réunion tout en proposant 
              des services de niveau international.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
