import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { companyInfo } from '../config/company';

const { address, email, legal } = companyInfo;
const fullAddress = [address.street, address.street2, address.city].filter(Boolean).join(', ');
const mail = <a className="text-primary underline break-all" href={`mailto:${email}`}>{email}</a>;

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container pt-28 pb-16 md:pt-32 md:pb-24">
      <article className="max-w-4xl mx-auto text-foreground">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/#accueil"><ArrowLeft className="mr-2 h-4 w-4" />Retour à l’accueil</Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold break-words mb-4">Politique de confidentialité</h1>
        <p className="text-muted-foreground mb-10">Dernière mise à jour : 9 novembre 2026</p>
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl mb-3">1. Responsable du traitement</h2>
            <p>Le site cbleu.re est édité par C-BLEU, EURL immatriculée sous le numéro SIRET {legal.siret}, dont le siège est situé {fullAddress}, La Réunion.</p>
            <p className="mt-3">Contact : {mail}</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">2. Données collectées</h2>
            <p>Ce site ne collecte des données personnelles que lorsque vous utilisez le formulaire de contact. Les données renseignées sont :</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>votre nom,</li>
              <li>votre adresse e-mail,</li>
              <li>le sujet de votre message,</li>
              <li>le contenu de votre message.</li>
            </ul>
            <p className="mt-3">Aucune autre donnée n’est collectée sur ce site.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">3. Finalité et base légale</h2>
            <p>Ces données servent uniquement à répondre à votre demande. Le traitement repose sur votre démarche volontaire et sur notre intérêt légitime à répondre aux sollicitations reçues (article 6.1.f du RGPD), ou sur l’exécution de mesures précontractuelles lorsque votre demande porte sur un projet commun (article 6.1.b).</p>
            <p className="mt-3">Vos données ne sont ni vendues, ni louées, ni utilisées à des fins de prospection ou de profilage.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">4. Conservation</h2>
            <p>Le formulaire ne stocke aucune donnée sur le site : votre message est transmis par e-mail à C-BLEU. Il est ensuite conservé dans notre messagerie le temps nécessaire au traitement de votre demande, puis au maximum 3 ans après le dernier échange, sauf obligation légale de conservation plus longue (par exemple en cas de relation contractuelle).</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">5. Destinataires et hébergement</h2>
            <p>Vos données sont destinées exclusivement à C-BLEU. Le site est hébergé par o2switch, Chemin des Pardiaux, 63000 Clermont-Ferrand, France, qui peut enregistrer des données techniques de connexion (adresse IP, date et heure d’accès) à des fins de sécurité et de bon fonctionnement.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">6. Cookies et traceurs</h2>
            <p>Ce site n’utilise aucun cookie et ne met en place aucun outil de mesure d’audience ni de publicité. Aucun bandeau de consentement n’est donc nécessaire.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">7. Vos droits</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité sur vos données. Pour les exercer, écrivez à {mail}. Nous répondrons dans un délai d’un mois.</p>
            <p className="mt-3">Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (<a className="text-primary underline" href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07).</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">8. Modification de la politique</h2>
            <p>Cette politique peut être mise à jour en cas d’évolution du site ou de la réglementation. La date de mise à jour figure en haut de la page.</p>
          </section>
        </div>
      </article>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
