import React from 'react';
import { companyInfo } from '../config/company';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/">
                <Button variant="outline" className="mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Button>
              </Link>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Mentions Légales
              </h1>
              <p className="text-muted-foreground text-lg">
                Informations légales relatives au site web de {companyInfo.name}
              </p>
            </div>

            <div className="space-y-8">
              {/* Informations sur la société */}
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Informations sur la société
                </h2>
                <div className="space-y-3 text-card-foreground">
                  <p><strong>Dénomination sociale :</strong> {companyInfo.name}</p>
                  <p><strong>SIRET :</strong> {companyInfo.legal.siret}</p>
                  <p><strong>Adresse du siège social :</strong></p>
                  <div className="ml-4">
                    <p>{companyInfo.address.street}</p>
                    {companyInfo.address.street2 && <p>{companyInfo.address.street2}</p>}
                    <p>{companyInfo.address.city}</p>
                    <p>{companyInfo.address.region}</p>
                  </div>
                  <p><strong>Téléphone :</strong> {companyInfo.phone}</p>
                  <p><strong>Email :</strong> {companyInfo.email}</p>
                </div>
              </section>

              {/* Hébergement */}
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Hébergement
                </h2>
                <div className="space-y-3 text-card-foreground">
                  <p>Ce site est hébergé par :</p>
                  <p><strong>o2switch</strong></p>
                  <p>Chemin des Pardiaux</p>
                  <p>63000 Clermont-Ferrand</p>
                  <p>SIRET : 510 909 807 00032</p>
                  <p>Téléphone : +33 4 44 44 60 40</p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Propriété intellectuelle
                </h2>
                <div className="space-y-3 text-card-foreground">
                  <p>
                    L'ensemble de ce site relève de la législation française et internationale 
                    sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
                    reproduction sont réservés, y compris pour les documents téléchargeables 
                    et les représentations iconographiques et photographiques.
                  </p>
                  <p>
                    La reproduction de tout ou partie de ce site sur un support électronique 
                    quelconque est formellement interdite sauf autorisation expresse du directeur 
                    de la publication.
                  </p>
                </div>
              </section>

              {/* Protection des données */}
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Protection des données personnelles
                </h2>
                <div className="space-y-3 text-card-foreground">
                  <p>
                    Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée 
                    et au Règlement Général sur la Protection des Données (RGPD), vous disposez 
                    d'un droit d'accès, de rectification, de suppression et d'opposition aux 
                    données personnelles vous concernant.
                  </p>
                  <p>
                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : 
                    {companyInfo.email}
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Cookies
                </h2>
                <div className="space-y-3 text-card-foreground">
                  <p>
                    Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur 
                    et réaliser des statistiques de visite. Vous pouvez configurer votre 
                    navigateur pour refuser les cookies, mais cela peut limiter certaines 
                    fonctionnalités du site.
                  </p>
                </div>
              </section>

              {/* Responsabilité */}
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Limitation de responsabilité
                </h2>
                <div className="space-y-3 text-card-foreground">
                  <p>
                    Les informations contenues sur ce site sont aussi précises que possible 
                    et le site remis à jour à différentes périodes de l'année, mais peut 
                    toutefois contenir des inexactitudes ou des omissions.
                  </p>
                  <p>
                    Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, 
                    merci de bien vouloir le signaler par email à {companyInfo.email} en décrivant 
                    le problème de la façon la plus précise possible.
                  </p>
                </div>
              </section>

              {/* Droit applicable */}
              <section className="bg-card p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold text-card-foreground mb-4">
                  Droit applicable
                </h2>
                <div className="space-y-3 text-card-foreground">
                  <p>
                    Tout litige en relation avec l'utilisation du site {companyInfo.name} 
                    est soumis au droit français. Il est fait attribution exclusive de 
                    juridiction aux tribunaux compétents de {companyInfo.legal.location}.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;