import { Tv, Award, Shield, CheckCircle } from 'lucide-react';

const mediaLogos = [
  { name: 'France 2', type: 'Partenaire média' },
  { name: 'Canal+', type: 'Diffuseur' },
  { name: 'Le Parisien', type: 'Presse' },
  { name: 'France Télévisions', type: 'Partenaire' },
];

const certifications = [
  {
    icon: Shield,
    title: 'Association agréée',
    subtitle: 'Jeunesse et Éducation Populaire'
  },
  {
    icon: Award,
    title: 'Soutenu par',
    subtitle: 'Ville de Saint-Denis & DRAC'
  },
  {
    icon: CheckCircle,
    title: '100% gratuit',
    subtitle: 'Aucun frais pour les jeunes'
  },
  {
    icon: Tv,
    title: 'Vu dans les médias',
    subtitle: 'France 2, Canal+, Le Parisien'
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 px-4 bg-black border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-6">Ils nous font confiance</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
            {mediaLogos.map((media, index) => (
              <div key={index} className="text-center group">
                <div className="glass-strong px-6 py-3 rounded-lg hover:bg-white/10 transition-all">
                  <p className="text-gray-400 font-bold text-lg group-hover:text-white transition-colors">
                    {media.name}
                  </p>
                  <p className="text-gray-600 text-xs">{media.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass rounded-xl p-4 text-center border border-white/10"
            >
              <cert.icon className="w-8 h-8 text-amber-500 mx-auto mb-2" strokeWidth={1.5} />
              <p className="text-white font-semibold text-sm mb-1">{cert.title}</p>
              <p className="text-gray-400 text-xs">{cert.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
