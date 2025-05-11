
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Contactez-<span className="gradient-text">nous</span></h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question, un projet ? N'hésitez pas à nous contacter pour discuter de vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Phone className="text-blue-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                <p className="text-gray-600">+262 123 456 789</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="text-blue-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Email</h3>
                <p className="text-gray-600">contact@cbleu.re</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MapPin className="text-blue-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                <p className="text-gray-600">
                  Saint-Denis<br />
                  Île de La Réunion, France
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Votre message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
