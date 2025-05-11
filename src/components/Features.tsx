
import React from 'react';
import { Shield, Star, Award } from 'lucide-react';

const featureItems = [
  {
    icon: <Star className="w-12 h-12 text-cbleu" />,
    title: 'Expertise',
    description: 'Notre équipe est composée d\'experts qualifiés dans tous les aspects du développement informatique.'
  },
  {
    icon: <Award className="w-12 h-12 text-cbleu" />,
    title: 'Qualité',
    description: 'Nous nous engageons à fournir des solutions de haute qualité qui répondent aux standards internationaux.'
  },
  {
    icon: <Shield className="w-12 h-12 text-cbleu" />,
    title: 'Sécurité',
    description: 'La sécurité de vos données et de vos applications est notre priorité absolue.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-cbleu to-cbleu-light text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featureItems.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 p-4 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
