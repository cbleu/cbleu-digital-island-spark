import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { companyInfo } from '../config/company';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container pt-28 pb-16 md:pt-32 md:pb-24">
      <article className="max-w-4xl mx-auto text-foreground">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/#accueil"><ArrowLeft className="mr-2 h-4 w-4" />Retour à l’accueil</Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold break-words mb-4">Politique de confidentialité</h1>
        <p className="text-muted-foreground mb-10">Cette politique présente le traitement des données personnelles lié au site cbleu.re et aux échanges avec {companyInfo.name}.</p>
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl md:text-2xl mb-3">1. Responsable du traitement</h2>
            <p>{companyInfo.name}, SIRET {companyInfo.legal.siret}, est responsable des traitements liés à ses demandes de contact et à ses relations commerciales.</p>
            <address className="not-italic mt-3">
              {companyInfo.address.street}<br />
              {companyInfo.address.street2 && <>{companyInfo.address.street2}<br /></>}
              {companyInfo.address.city}<br />{companyInfo.address.region}<br />
              <a className="text-primary underline break-all" href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a><br />{companyInfo.phone}
            </address>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">2. Données concernées</h2>
            <p>Lors d’un échange par email ou téléphone, vous pouvez nous communiquer votre nom, vos coordonnées, votre société ainsi que des informations relatives à votre demande ou votre projet. Merci de ne pas transmettre de données sensibles non nécessaires.</p>
            <p className="mt-3">La consultation du site peut également produire des données techniques dans les journaux de l’hébergeur : adresse IP, date et heure de connexion, ressource consultée et informations sur le navigateur. Le formulaire actuellement affiché sur le site n’est pas relié à un service d’envoi ; pour nous transmettre une demande, utilisez les coordonnées ci-dessus.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">3. Finalités et bases légales</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Répondre à vos demandes et préparer une prestation : mesures précontractuelles prises à votre demande.</li>
              <li>Exécuter une prestation et assurer le suivi client : exécution du contrat.</li>
              <li>Respecter les obligations comptables ou fiscales : obligations légales.</li>
              <li>Assurer la sécurité du site et traiter les incidents : intérêt légitime à protéger le site et ses visiteurs.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">4. Destinataires et hébergement</h2>
            <p>Les informations communiquées à CBLEU sont destinées aux personnes habilitées à traiter votre demande. Des prestataires techniques peuvent intervenir lorsque cela est nécessaire à la fourniture des services. Le site est hébergé par o2switch en France. Les données peuvent être communiquées aux autorités lorsque la loi l’exige.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">5. Conservation</h2>
            <p>Les données de contact sont conservées pendant le temps nécessaire au traitement de votre demande et au suivi des échanges. Les données liées à une prestation sont conservées pour la durée de la relation contractuelle, puis, si nécessaire, pour satisfaire aux obligations légales ou défendre des droits. Les journaux techniques suivent les durées définies par l’hébergeur. Vous pouvez nous contacter pour obtenir des précisions sur la durée applicable à vos données.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">6. Cookies et services externes</h2>
            <p>Le site ne comporte actuellement aucun outil de mesure d’audience ou de publicité configuré par CBLEU. Si des traceurs non indispensables sont ajoutés, votre consentement sera demandé avant leur activation lorsque la réglementation l’exige.</p>
            <p className="mt-3">Les polices de caractères sont chargées depuis Google Fonts. Ces requêtes transmettent notamment votre adresse IP et des informations techniques à Google. Le code du site charge également un script externe depuis cdn.gpteng.co, susceptible de recevoir des informations techniques de connexion. Ces services peuvent impliquer des traitements hors de l’Union européenne ; consultez leurs politiques respectives pour connaître leurs conditions. Les réglages de votre navigateur permettent de gérer les cookies et de limiter certains chargements externes.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">7. Vos droits</h2>
            <p>Dans les conditions prévues par le RGPD, vous disposez de droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité. Lorsqu’un traitement repose sur votre consentement, vous pouvez le retirer à tout moment, sans affecter la licéité du traitement antérieur.</p>
            <p className="mt-3">Pour exercer vos droits, écrivez à <a className="text-primary underline break-all" href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>. Une preuve d’identité pourra être demandée en cas de doute raisonnable. Une réponse vous sera adressée sous un mois, avec une prolongation possible de deux mois selon la complexité ou le nombre de demandes, dont vous serez informé.</p>
            <p className="mt-3">Vous pouvez également déposer une réclamation auprès de la <a className="text-primary underline" href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">Commission nationale de l’informatique et des libertés (CNIL)</a>.</p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl mb-3">8. Sécurité et mises à jour</h2>
            <p>La protection des données nécessite des mesures adaptées aux risques, notamment la limitation des accès et la sécurisation des échanges. Aucune transmission sur Internet n’est totalement exempte de risques. Cette politique peut être actualisée pour refléter l’évolution du site, des services ou de la réglementation.</p>
          </section>
        </div>
        <p className="text-muted-foreground text-sm mt-12">Dernière mise à jour : 9 novembre 2026.</p>
      </article>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;