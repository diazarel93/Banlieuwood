import { Film, Award, Users, Heart, Star, Sparkles, Play, TrendingUp, Clapperboard, Trophy, Lightbulb, Camera, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Reussites() {
  const awardWinningFilms = [
    {
      title: 'Voir la Mer',
      year: 2021,
      award: 'Prime 3 fois',
      festival: 'Festivals regionaux',
      image: 'https://i.vimeocdn.com/video/2116522335-2c12cb492e9e4cb23457fcdd53b991e25580890117f6af4a11812961a39c55bf-d_1280?region=us',
      achievement: 'Realise a Rosny-sous-Bois, ce court-metrage a ete recompense 3 fois en festivals'
    },
    {
      title: 'Tic Tac',
      year: 2019,
      award: 'Amazon Prime Video',
      festival: 'Diffusion mondiale',
      image: 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us',
      achievement: 'Long-metrage realise avec 22 jeunes, disponible sur Amazon Prime Video et reference sur Allocine'
    }
  ];

  const talentStories = [
    {
      name: 'Sofiane L.',
      achievement: 'Agent Artistique Trouvé',
      story: 'Après avoir joué dans 3 de nos courts-métrages, Sofiane a été repéré et a maintenant un agent qui lui trouve des castings.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    },
    {
      name: 'Inès M.',
      achievement: 'Agent Artistique Trouvé',
      story: 'Son talent naturel devant la caméra lui a ouvert les portes. Elle enchaîne maintenant les auditions professionnelles.',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg'
    },
    {
      name: 'Karim B.',
      achievement: 'Montre son Book',
      story: 'Grâce aux films réalisés, Karim a constitué un book professionnel qu\'il présente en castings.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg'
    }
  ];

  const realImpact = [
    {
      icon: Users,
      number: '~300',
      label: 'Jeunes Participants',
      description: 'Ont joué, filmé, monté, réalisé depuis 2015'
    },
    {
      icon: Film,
      number: '30+',
      label: 'Films & Documentaires',
      description: 'Courts-métrages et docs créés avec les jeunes'
    },
    {
      icon: Trophy,
      number: '2',
      label: 'Prix Gagnés',
      description: 'Récompenses obtenues en festivals officiels'
    },
    {
      icon: Star,
      number: '100%',
      label: 'Adorent l\'Expérience',
      description: 'Tous repartent avec des souvenirs et compétences'
    }
  ];

  const whatTheyLearn = [
    {
      icon: Camera,
      title: 'Compétences Techniques',
      items: ['Prise de vue', 'Cadrage', 'Lumière', 'Son', 'Montage']
    },
    {
      icon: Users,
      title: 'Travail d\'Équipe',
      items: ['Collaboration', 'Communication', 'Responsabilités', 'Organisation']
    },
    {
      icon: Lightbulb,
      title: 'Créativité & Expression',
      items: ['Écriture', 'Storytelling', 'Jeu d\'acteur', 'Imagination']
    },
    {
      icon: TrendingUp,
      title: 'Confiance en Soi',
      items: ['Prise de parole', 'Aisance caméra', 'Leadership', 'Fierté']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg"
            alt="Jeunes en création"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold">Impact Réel</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Nos <span className="gradient-text">Réussites</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Tic Tac sur Amazon Prime, prix en festivals, agents trouves, 200+ jeunes transformes.
          </p>

          <p className="text-xl text-white font-semibold mb-12 max-w-4xl animate-fade-in stagger-delay-3">
            Voici ce qu'on a vraiment accompli ensemble. Pas de rêves vendus, que des faits.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Video className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-bold">Amazon Prime</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sur <span className="gradient-text">Amazon Prime Video</span>
            </h2>
            <p className="text-xl text-gray-400">Notre film disponible en streaming mondial</p>
          </div>

          <div className="glass-strong rounded-3xl overflow-hidden border-2 border-amber-500/30 max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative h-80 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg"
                  alt="Film Amazon Prime"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:to-black"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center shadow-glow animate-pulse">
                    <Play className="w-10 h-10 text-black ml-1" fill="black" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 p-8 md:p-12 bg-gradient-to-br from-amber-500/10 to-transparent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                    <Video className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-amber-500 font-bold text-sm uppercase">Disponible sur</p>
                    <p className="text-2xl font-bold">Amazon Prime Video</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4">Tic Tac</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold mb-1">Long-metrage</p>
                      <p className="text-gray-400 text-sm">Realise avec 22 jeunes, disponible sur Amazon Prime Video</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold mb-1">Fierte Collective</p>
                      <p className="text-gray-400 text-sm">Les jeunes peuvent montrer leur travail a leur famille</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Trophy className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-bold mb-1">Reconnaissance Professionnelle</p>
                      <p className="text-gray-400 text-sm">Reference sur Allocine et Amazon Prime</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.allocine.fr/film/fichefilm_gen_cfilm=1000000693.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-6 py-3 rounded-lg transition-all hover-lift"
                >
                  <Play className="w-5 h-5" />
                  Voir sur Allocine
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 font-bold">Festivals</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              2 Prix <span className="gradient-text">Gagnés</span>
            </h2>
            <p className="text-xl text-gray-400">Nos films reconnus en compétition officielle</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {awardWinningFilms.map((film, i) => (
              <div key={i} className="glass-strong rounded-2xl overflow-hidden hover-lift border-2 border-white/10 hover:border-amber-500 transition-all animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-80">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-black px-4 py-2 rounded-full font-bold">
                    {film.year}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-glow">
                        <Trophy className="w-6 h-6 text-black" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-amber-500 font-bold text-sm uppercase">{film.festival}</p>
                        <p className="text-2xl font-bold">{film.award}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-amber-500/10 to-transparent">
                  <h3 className="text-3xl font-bold mb-4">{film.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{film.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-purple-500" />
              <span className="text-purple-400 font-bold">Opportunités Créées</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Des Jeunes <span className="gradient-text">Repérés</span>
            </h2>
            <p className="text-xl text-gray-400">Certains ont trouvé des agents artistiques après nos films</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {talentStories.map((talent, i) => (
              <div key={i} className="glass-strong rounded-2xl overflow-hidden hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative h-80">
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="glass-card px-4 py-2 rounded-full border-2 border-purple-500">
                      <p className="text-purple-400 font-bold text-sm">{talent.achievement}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{talent.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{talent.story}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              <span className="text-white font-bold">On ne promet pas Hollywood</span>, mais on crée de vraies opportunités pour ceux qui s'investissent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              L'Impact <span className="gradient-text">En Chiffres</span>
            </h2>
            <p className="text-xl text-gray-400">Ce qu'on a vraiment accompli depuis 2015</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {realImpact.map((stat, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 text-center border-t-4 border-amber-500 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <stat.icon className="w-14 h-14 text-amber-500 mx-auto mb-4 animate-float" strokeWidth={1.5} />
                <div className="text-5xl font-bold gradient-text mb-3">{stat.number}</div>
                <h3 className="text-lg font-bold mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-8 md:p-12 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-6">
              <Heart className="w-12 h-12 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Ce Que Ça Change Vraiment</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Les jeunes ne deviennent pas tous réalisateurs ou acteurs célèbres.
                  <span className="text-white font-bold"> Mais TOUS repartent avec quelque chose :</span> des compétences,
                  de la confiance, des souvenirs, une passion, un portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce Qu'Ils <span className="gradient-text">Apprennent</span>
            </h2>
            <p className="text-xl text-gray-400">Les compétences et valeurs qu'on transmet dans chaque atelier</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatTheyLearn.map((category, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-glow">
                  <category.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-2 border-amber-500/30">
            <Clapperboard className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoins <span className="gradient-text">l'Aventure</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              On ne te promet pas de devenir une star. On te promet une expérience incroyable,
              des compétences réelles, et peut-être une opportunité qui change tout.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/ateliers"
                className="btn-primary text-xl py-5 px-8 shadow-glow-primary flex items-center gap-3"
              >
                <Clapperboard className="w-6 h-6" />
                Participer aux Ateliers
              </Link>
              <Link
                to="/films"
                className="glass-card text-white font-bold text-xl py-5 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
              >
                <Film className="w-6 h-6" />
                Voir nos Films
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
