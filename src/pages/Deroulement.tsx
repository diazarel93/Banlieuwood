import { Film, Pencil, Video, Scissors, Users, Clapperboard, Sparkles, Camera, Zap, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Deroulement() {
  const steps = [
    {
      icon: Pencil,
      number: '01',
      title: 'Masterclass & Écriture',
      duration: '5 jours minimum',
      description: 'Le projet débute avec des masterclass (scénario, réalisation, acting, métiers techniques). Les participants développent ensemble une histoire originale, créent les personnages et structurent le récit.',
      skills: [
        'Masterclass théoriques intensives',
        'Écriture collective du scénario',
        'Initiation au jeu d\'acteur et répétitions',
        'Distribution des rôles'
      ],
      image: 'https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Video,
      number: '02',
      title: 'Tournage',
      duration: 'Hors temps scolaire',
      description: 'Immersion totale dans des conditions professionnelles. Les jeunes découvrent tous les métiers du plateau : réalisation, caméra, son, lumière, direction d\'acteurs. Ils sont également les principaux protagonistes du film.',
      skills: [
        'Maîtriser les fondamentaux du langage audiovisuel',
        'Mener un repérage et préparer un tournage',
        'Travail collectif en conditions professionnelles',
        'Rotation sur tous les postes techniques'
      ],
      image: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Scissors,
      number: '03',
      title: 'Post-production',
      duration: 'Plusieurs semaines',
      description: 'Lorsque le "coupez !" final retentit, le film est loin d\'être achevé. Le noyau dur des jeunes poursuit en salle de montage, auditorium et studio d\'étalonnage jusqu\'à la sortie master sur DCP.',
      skills: [
        'Montage image avec chef monteur',
        'Mixage son en auditorium professionnel',
        'Étalonnage numérique',
        'Finalisation du master DCP'
      ],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      number: '04',
      title: 'Diffusion & Projection',
      duration: 'Événement final',
      description: 'Les jeunes organisent une projection en salle de cinéma avec l\'ensemble des intervenants professionnels. Le film est projeté devant les familles, amis et partenaires du projet.',
      skills: [
        'Projection en salle de cinéma',
        'Échanges avec les professionnels',
        'Envoi en festivals',
        'Célébration collective du travail accompli'
      ],
      image: 'https://images.pexels.com/photos/7991391/pexels-photo-7991391.jpeg',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const learningAreas = [
    { title: 'Écriture de scénario', desc: 'Construction narrative, personnages, dialogues', icon: Pencil },
    { title: 'Réalisation', desc: 'Mise en scène, direction d\'acteurs, langage visuel', icon: Clapperboard },
    { title: 'Image & Caméra', desc: 'Cadrage, mouvements, composition', icon: Camera },
    { title: 'Son', desc: 'Prise de son, mixage, design sonore', icon: Zap },
    { title: 'Lumière', desc: 'Éclairage, ambiance, décors', icon: Sparkles },
    { title: 'Montage', desc: 'Rythme, continuité, storytelling visuel', icon: Scissors },
    { title: 'Jeu d\'acteur', desc: 'Expression, émotions, présence caméra', icon: Users },
    { title: 'Post-production', desc: 'Étalonnage, effets, finalisation', icon: Video },
    { title: 'Gestion de projet', desc: 'Organisation, travail d\'équipe, deadlines', icon: CheckCircle }
  ];

  const results = [
    'Des jeunes impliqués activement dans l\'élaboration d\'un film professionnel',
    'Rayonnement du projet sur la ville et ses habitants',
    'Passerelles vers des cursus ou formations professionnels du secteur audiovisuel',
    'Découverte et enrichissement personnel, meilleure compréhension de la culture cinématographique',
    'Démarche intergénérationnelle entre jeunes et professionnels'
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg"
            alt="Équipe de tournage en action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Film className="w-6 h-6 text-amber-500" />
              <span className="text-amber-400 font-bold text-lg">Notre Méthode</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-slide-up">
              De l'Idée<br />
              <span className="gradient-text text-glow">Au Grand Écran</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Une approche pédagogique complète qui transforme les passionnés
              <span className="text-white font-bold"> en véritables professionnels du cinéma.</span>
            </p>

            <div className="flex flex-wrap gap-6 text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">Encadrement Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-300">Conditions Réelles</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-24 border-2 border-amber-500/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <span className="text-4xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Gratuit</h3>
                <p className="text-gray-400">Aucun frais, tout le matériel fourni</p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Award className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Formateurs Pro</h3>
                <p className="text-gray-400">Cinéastes et techniciens expérimentés</p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Film className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Master DCP</h3>
                <p className="text-gray-400">Qualité cinéma professionnelle</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce Que Vous Allez <span className="gradient-text">Maîtriser</span>
            </h2>
            <p className="text-xl text-gray-400">Une formation complète qui couvre TOUS les aspects du cinéma</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningAreas.map((area, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <area.icon className="w-6 h-6 text-black" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white">{area.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les 4 Étapes <span className="gradient-text">De Création</span>
            </h2>
            <p className="text-xl text-gray-400">Du scénario à la projection en salle</p>
          </div>

          <div className="space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 0 ? '' : 'lg:col-start-2'}>
                  <div className="relative rounded-3xl overflow-hidden group glass-strong p-2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-2 bg-gradient-to-t from-black via-black/50 to-transparent rounded-2xl"></div>

                    <div className={`absolute top-8 ${index % 2 === 0 ? 'left-8' : 'right-8'}`}>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow`}>
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-3">
                        <span className="text-amber-400 font-bold text-sm">{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow`}>
                        <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-amber-500 mb-1">Étape {step.number}</div>
                        <h3 className="text-3xl md:text-4xl font-bold">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="glass-strong rounded-2xl p-6 border-l-4 border-amber-500">
                      <h4 className="text-lg font-bold mb-4 text-amber-500">Compétences acquises</h4>
                      <ul className="space-y-3">
                        {step.skills.map((skill, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-4 h-4 text-amber-500" />
                            </div>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border-2 border-amber-500/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Les <span className="gradient-text">Résultats</span>
              </h2>
              <p className="text-xl text-gray-300">Ce que nos ateliers apportent concrètement</p>
            </div>

            <div className="space-y-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 flex items-start gap-4 hover-lift animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-glow">
                    <CheckCircle className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed pt-2">{result}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 glass-card rounded-2xl p-8 border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-4 text-amber-500">
                Une expérience complète
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Chaque atelier dure plusieurs mois et permet aux jeunes de s'immerger dans toutes les étapes de création d'un film professionnel.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Au-delà de l'apprentissage technique, les ateliers développent la confiance en soi, l'esprit d'équipe et l'expression artistique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border-2 border-amber-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à Créer <span className="gradient-text">Votre Film</span> ?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Rejoignez l'aventure Banlieuwood et vivez l'expérience du cinéma de l'intérieur,
              <span className="text-white font-bold"> de l'écriture à la projection en salle.</span>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/ateliers"
                className="btn-primary text-xl py-5 px-8 shadow-glow-primary flex items-center gap-3"
              >
                <Clapperboard className="w-6 h-6" />
                Participer aux Ateliers
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/contact"
                className="glass-card text-white font-bold text-xl py-5 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
