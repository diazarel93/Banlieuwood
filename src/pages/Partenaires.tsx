import { Building2, Handshake, Heart, Users, Sparkles, Target, Rocket, Lightbulb, Star, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partenaires() {
  const partnerTypes = [
    {
      icon: Building2,
      title: 'Institutions Publiques',
      description: 'Ils nous font confiance et financent nos projets',
      partners: [
        { name: 'Ville de Saint-Denis', logo: 'https://images.pexels.com/photos/8815931/pexels-photo-8815931.jpeg', since: '2015', support: 'Financement & Locaux' },
        { name: 'Conseil Départemental 93', logo: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg', since: '2016', support: 'Subventions' },
        { name: 'DRAC Île-de-France', logo: 'https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg', since: '2017', support: 'Projets Culturels' }
      ]
    },
    {
      icon: Heart,
      title: 'Structures Culturelles',
      description: 'Lieux de diffusion et collaborations artistiques',
      partners: [
        { name: 'Cinéma L\'Écran', logo: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg', since: '2015', support: 'Diffusion Films' },
        { name: 'Philharmonie de Paris', logo: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg', since: '2019', support: 'Projets Musique' },
        { name: 'Centre Pompidou', logo: 'https://images.pexels.com/photos/2083743/pexels-photo-2083743.jpeg', since: '2020', support: 'Workshops' }
      ]
    },
    {
      icon: Users,
      title: 'Écoles & Formation',
      description: 'Passerelles vers les métiers du cinéma',
      partners: [
        { name: 'La Fémis', logo: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg', since: '2018', support: 'Masterclass' },
        { name: 'CFA Audiovisuel', logo: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg', since: '2019', support: 'Stages & Formation' },
        { name: 'Académie Créteil', logo: 'https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg', since: '2016', support: 'Interventions Scolaires' }
      ]
    },
    {
      icon: Handshake,
      title: 'Entreprises & Mécènes',
      description: 'Soutien financier et matériel',
      partners: [
        { name: 'Orange', logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg', since: '2018', support: 'Mécénat' },
        { name: 'Sony France', logo: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg', since: '2019', support: 'Prêt Matériel' },
        { name: 'Canal+', logo: 'https://images.pexels.com/photos/7234208/pexels-photo-7234208.jpeg', since: '2020', support: 'Diffusion & Formation' }
      ]
    }
  ];

  const whyPartner = [
    {
      icon: Target,
      title: 'Impact Social Réel',
      description: 'Votre soutien change concrètement la vie de 300+ jeunes par an. Formation, confiance, opportunités.'
    },
    {
      icon: Rocket,
      title: 'Visibilité & Valorisation',
      description: 'Logo sur nos films, mentions réseaux sociaux, événements de projection. Votre engagement est visible.'
    },
    {
      icon: Heart,
      title: 'Projets Authentiques',
      description: 'Pas de bullshit marketing. Du cinéma créé par des jeunes, des résultats mesurables, des vraies histoires.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Créativité',
      description: 'Soutenir l\'émergence de nouveaux talents et de nouvelles formes de création audiovisuelle.'
    }
  ];

  const partnershipOptions = [
    {
      title: 'Partenaire Financier',
      amount: 'À partir de 5 000€/an',
      benefits: [
        'Logo sur tous les supports de communication',
        'Invitation aux projections et événements',
        'Rapport d\'impact annuel détaillé',
        'Visibilité sur le site et réseaux sociaux'
      ],
      highlight: false
    },
    {
      title: 'Partenaire Stratégique',
      amount: 'À partir de 15 000€/an',
      benefits: [
        'Tout du partenaire financier +',
        'Co-création de projets sur-mesure',
        'Accès aux talents pour recrutement',
        'Participation au conseil d\'orientation',
        'Séances privées pour vos équipes'
      ],
      highlight: true
    },
    {
      title: 'Partenaire Matériel',
      amount: 'Prêt ou don de matériel',
      benefits: [
        'Logo sur les films utilisant votre matériel',
        'Visibilité équipement dans making-of',
        'Retours utilisateurs jeunes',
        'Valorisation de votre engagement RSE'
      ],
      highlight: false
    }
  ];

  const stats = [
    { number: '20+', label: 'Partenaires Actifs', description: 'Institutions, entreprises, associations' },
    { number: '10 ans', label: 'D\'Expérience', description: 'Depuis 2015, des partenariats durables' },
    { number: '300+', label: 'Jeunes/An', description: 'Bénéficiaires de ces partenariats' },
    { number: '100%', label: 'Transparent', description: 'Rapports d\'impact détaillés' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
            alt="Partenaires"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold">Rejoignez-nous</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Nos <span className="gradient-text">Partenaires</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Ils croient en nous. Ils soutiennent les jeunes. Ils rendent tout ça possible.
          </p>

          <p className="text-xl text-white font-semibold mb-8 max-w-4xl animate-fade-in stagger-delay-3">
            Sans eux, pas de films, pas d'ateliers, pas de rêves réalisés. Merci.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              En <span className="gradient-text">Chiffres</span>
            </h2>
            <p className="text-xl text-gray-400">L'impact de nos partenariats</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 text-center border-t-4 border-amber-500 hover-lift animate-scale-in" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="text-5xl font-bold gradient-text mb-3">{stat.number}</div>
                <h3 className="text-lg font-bold mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ils Nous <span className="gradient-text">Soutiennent</span>
            </h2>
            <p className="text-xl text-gray-400">Merci à ceux qui nous font confiance</p>
          </div>

          <div className="space-y-16">
            {partnerTypes.map((type, i) => (
              <div key={i} className="animate-scale-in" style={{animationDelay: `${i * 0.15}s`}}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-glow">
                    <type.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{type.title}</h3>
                    <p className="text-gray-400">{type.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {type.partners.map((partner, j) => (
                    <div key={j} className="glass-strong rounded-2xl overflow-hidden hover-lift border-2 border-white/10 hover:border-amber-500 transition-all">
                      <div className="aspect-video relative">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4 glass-card px-3 py-2 rounded-full">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-amber-500" />
                            <span className="text-xs font-bold text-white">Depuis {partner.since}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">{partner.name}</h4>
                        <div className="inline-flex items-center gap-2 bg-amber-500/20 px-3 py-1 rounded-full mb-3">
                          <span className="text-amber-500 text-sm font-bold">{partner.support}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi Nous <span className="gradient-text">Soutenir</span> ?
            </h2>
            <p className="text-xl text-gray-400">Ce que ça change concrètement</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((reason, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 hover-lift animate-scale-in" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-glow">
                  <reason.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Devenez <span className="gradient-text">Partenaire</span>
            </h2>
            <p className="text-xl text-gray-400">Plusieurs façons de nous soutenir</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipOptions.map((option, i) => (
              <div key={i} className={`glass-strong rounded-3xl overflow-hidden hover-lift border-2 transition-all animate-scale-in ${
                option.highlight ? 'border-amber-500 scale-105' : 'border-white/10 hover:border-amber-500'
              }`} style={{animationDelay: `${i * 0.1}s`}}>
                {option.highlight && (
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-center">
                    <p className="text-black font-bold flex items-center justify-center gap-2">
                      <Star className="w-5 h-5" />
                      Recommandé
                    </p>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  <div className="text-3xl font-bold gradient-text mb-6">{option.amount}</div>

                  <ul className="space-y-4 mb-8">
                    {option.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">Vous avez un autre type de partenariat en tête ?</p>
            <Link
              to="/contact"
              className="btn-primary text-xl py-5 px-8 shadow-glow-primary inline-flex items-center gap-3"
            >
              <Handshake className="w-6 h-6" />
              Parlons-en
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border-2 border-amber-500/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ensemble, On <span className="gradient-text">Change</span> des Vies
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Chaque euro investi devient un film créé, une compétence acquise, une opportunité saisie.
                  Rejoignez ceux qui font la différence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-xl transition-all hover-lift shadow-glow"
                  >
                    Devenir Partenaire
                  </Link>
                  <Link
                    to="/reussites"
                    className="glass-card text-white font-bold px-8 py-4 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift"
                  >
                    Voir l'Impact
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6 rounded-2xl border-l-4 border-green-500">
                  <div className="text-4xl font-bold text-green-500 mb-2">300+</div>
                  <p className="text-white font-bold mb-1">Jeunes Formés par An</p>
                  <p className="text-gray-400 text-sm">Grâce au soutien de nos partenaires</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border-l-4 border-amber-500">
                  <div className="text-4xl font-bold text-amber-500 mb-2">30+</div>
                  <p className="text-white font-bold mb-1">Films Produits</p>
                  <p className="text-gray-400 text-sm">Courts-métrages et documentaires</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border-l-4 border-blue-500">
                  <div className="text-4xl font-bold text-blue-500 mb-2">85%</div>
                  <p className="text-white font-bold mb-1">Continuent dans l'Audiovisuel</p>
                  <p className="text-gray-400 text-sm">Formation, stages, emplois</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
