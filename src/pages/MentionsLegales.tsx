import { useScrollReveal } from '../hooks/useScrollReveal';

export default function MentionsLegales() {
  const scrollRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-black text-white pt-20" ref={scrollRef}>
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12" data-reveal>Mentions légales</h1>

          <div className="space-y-12 text-gray-300 leading-relaxed">
            <div data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Éditeur du site</h2>
              <p>
                <strong className="text-white">Banlieuwood</strong><br />
                Association loi 1901<br />
                10 rue Frazier, 93200 Saint-Denis<br />
                Email : <a href="mailto:contact@banlieuwood.fr" className="text-amber-500 hover:text-amber-400 transition-colors">contact@banlieuwood.fr</a>
              </p>
            </div>

            <div data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Directeur de la publication</h2>
              <p>Adrian YOUNSI, Président de l'association Banlieuwood.</p>
            </div>

            <div data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Hébergement</h2>
              <p>
                <strong className="text-white">Vercel Inc.</strong><br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors">vercel.com</a>
              </p>
            </div>

            <div data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété de l'association Banlieuwood ou de ses partenaires.
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
              </p>
              <p className="mt-2">
                Les films présentés sur ce site sont des œuvres collectives réalisées dans le cadre des ateliers Banlieuwood.
              </p>
            </div>

            <div data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Protection des données personnelles</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
                vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
              </p>
              <p className="mt-2">
                <strong className="text-white">Données collectées :</strong> le formulaire de contact collecte votre nom, email, téléphone (optionnel) et message.
                Ces données sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers.
              </p>
              <p className="mt-2">
                <strong className="text-white">Durée de conservation :</strong> les données de contact sont conservées pendant 3 ans à compter de votre dernier échange avec l'association.
              </p>
              <p className="mt-2">
                <strong className="text-white">Exercer vos droits :</strong> contactez-nous à{' '}
                <a href="mailto:contact@banlieuwood.fr" className="text-amber-500 hover:text-amber-400 transition-colors">contact@banlieuwood.fr</a>
              </p>
            </div>

            <div data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies publicitaires ni de traceurs. Seuls des cookies techniques strictement nécessaires
                au fonctionnement du site peuvent être utilisés.
              </p>
            </div>

            <div data-reveal>
              <h2 className="text-xl font-bold text-white mb-4">Crédits</h2>
              <p>
                Conception et développement : Banlieuwood<br />
                Photographies : équipe Banlieuwood — extraites des ateliers et tournages
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
