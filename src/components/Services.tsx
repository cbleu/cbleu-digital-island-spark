
import React from 'react';
import { Code, Globe, Smartphone, ShoppingBag, Database, Brain } from 'lucide-react';

const serviceItems = [
  {
    icon: <Smartphone className="w-10 h-10 text-blue-600" />,
    title: 'Applications Mobiles',
    description: 'Développement d\'applications iOS et Android sur-mesure avec une expérience utilisateur fluide et intuitive.'
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: 'Sites Web',
    description: 'Création de sites web responsive, optimisés pour le référencement et adaptés à votre image de marque.'
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-blue-600" />,
    title: 'E-commerce',
    description: 'Mise en place de boutiques en ligne sécurisées et personnalisées pour développer votre activité commerciale.'
  },
  {
    icon: <Code className="w-10 h-10 text-blue-600" />,
    title: 'Développement sur mesure',
    description: 'Conception et programmation d\'applications spécifiques répondant précisément à vos besoins métier.'
  },
  {
    icon: <Database className="w-10 h-10 text-blue-600" />,
    title: 'Infrastructure Cloud',
    description: 'Mise en place et gestion de solutions cloud sécurisées, évolutives et performantes pour vos applications.'
  },
  {
    icon: <Brain className="w-10 h-10 text-blue-600" />,
    title: 'Intelligence Artificielle',
    description: 'Intégration de solutions d\'IA pour optimiser vos processus et améliorer l\'expérience utilisateur.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nos <span className="gradient-text">Services</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CBLEU propose une gamme complète de services informatiques pour répondre à tous vos besoins numériques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="card-hover bg-service-gradient p-8 rounded-xl shadow-sm"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
