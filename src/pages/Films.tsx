import { Film, Play, Award, Users, Clapperboard, Sparkles, Video, Heart, Eye } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

const films = [
  {
    title: 'Teaser Banlieuwood',
    vimeoId: '515298131',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    year: 2021,
    category: 'Présentation',
    description: 'Découvre qui on est et ce qu\'on fait',
    views: '12K',
    crew: '5 jeunes'
  },
  {
    title: 'Snap Peut Nuire',
    vimeoId: '513350990',
    thumbnail: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg',
    year: 2021,
    category: 'Court-métrage',
    description: 'Fiction réalisée par 8 jeunes en 3 mois',
    views: '8K',
    crew: '8 jeunes',
    award: 'Sélection Festival'
  },
  {
    title: 'Vincent Cassel',
    vimeoId: '463862464',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    year: 2020,
    category: 'Interview',
    description: 'Les jeunes interviewent Vincent Cassel',
    views: '25K',
    crew: '3 jeunes'
  },
  {
    title: 'Stéphane Bern',
    vimeoId: '464184825',
    thumbnail: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
    year: 2020,
    category: 'Interview',
    description: 'Rencontre avec Stéphane Bern',
    views: '15K',
    crew: '4 jeunes'
  },
  {
    title: 'Olivia Ruiz',
    vimeoId: '464184206',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
    year: 2020,
    category: 'Interview',
    description: 'Interview exclusive',
    views: '10K',
    crew: '3 jeunes'
  }
];

export default function Films() {
  const [selectedFilmIndex, setSelectedFilmIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Court-métrage', 'Interview', 'Présentation'];

  const filteredFilms = films.filter(film => {
    return selectedCategory === 'Tous' || film.category === selectedCategory;
  });

  const stats = [
    { icon: Film, number: '30+', label: 'Films Créés', description: 'Courts-métrages et documentaires' },
    { icon: Users, number: '300+', label: 'Jeunes Acteurs', description: 'Ont participé aux productions' },
    { icon: Award, number: '2', label: 'Prix Gagnés', description: 'Festivals nationaux' },
    { icon: Eye, number: '150K+', label: 'Vues Totales', description: 'Sur toutes les plateformes' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg"
            alt="Tournage"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Video className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold">30+ Productions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Nos <span className="gradient-text">Films</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Chaque film est une histoire vraie. Faite par des jeunes. Pour de vrai.
          </p>

          <p className="text-xl text-white font-semibold mb-8 max-w-4xl animate-fade-in stagger-delay-3">
            Courts-métrages, interviews, documentaires. Tous créés de A à Z par les ateliers.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce Qu'On A <span className="gradient-text">Créé</span>
            </h2>
            <p className="text-xl text-gray-400">Les chiffres de notre production collective</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 text-center border-t-4 border-amber-500 hover-lift animate-scale-in" style={{animationDelay: `${i * 0.1}s`}}>
                <stat.icon className="w-14 h-14 text-amber-500 mx-auto mb-4 animate-float" strokeWidth={1.5} />
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
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Clapperboard className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 font-bold">Notre Filmographie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Regarde Ce Qu'On <span className="gradient-text">Fait</span>
            </h2>

            <div className="flex gap-3 flex-wrap justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all hover-lift ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-glow'
                      : 'glass-card text-gray-300 hover:text-white border-2 border-white/20 hover:border-amber-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFilms.map((film, i) => (
              <div
                key={i}
                onClick={() => setSelectedFilmIndex(films.findIndex(f => f.vimeoId === film.vimeoId))}
                className="group glass-strong rounded-2xl overflow-hidden cursor-pointer hover-lift border-2 border-white/10 hover:border-amber-500 transition-all animate-scale-in"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center shadow-glow animate-pulse">
                      <Play className="w-10 h-10 text-black ml-1" fill="black" />
                    </div>
                  </div>

                  {film.award && (
                    <div className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full border-2 border-amber-500">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-500" />
                        <span className="text-xs font-bold text-amber-500">Primé</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-white">{film.year}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-500 text-xs font-bold rounded-full">
                      {film.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-500 transition-colors">{film.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{film.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span>{film.crew}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-amber-500" />
                      <span>{film.views} vues</span>
                    </div>
                  </div>
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
              <Heart className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-bold">Amazon Prime</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Un Film Sur <span className="gradient-text">Amazon Prime</span>
            </h2>
            <p className="text-xl text-gray-400">Notre fierté collective, accessible mondialement</p>
          </div>

          <div className="glass-strong rounded-3xl overflow-hidden border-2 border-amber-500/30 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
                  alt="Film Amazon Prime"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:to-black"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center shadow-glow animate-pulse">
                    <Play className="w-12 h-12 text-black ml-1" fill="black" />
                  </div>
                </div>
              </div>

              <div className="p-12 bg-gradient-to-br from-amber-500/10 to-transparent flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                    <Video className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-amber-500 font-bold text-sm uppercase">Disponible sur</p>
                    <p className="text-2xl font-bold">Amazon Prime Video</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4">[Titre du Film]</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Un long métrage créé avec 20 jeunes sur 18 mois. De l'écriture à la diffusion mondiale.
                </p>

                <a
                  href="https://www.amazon.com/gp/video/storefront"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-xl transition-all hover-lift shadow-glow text-lg"
                >
                  <Play className="w-6 h-6" />
                  Voir sur Amazon Prime
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-2 border-amber-500/30">
            <Sparkles className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crée Ton <span className="gradient-text">Film</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Tous ces films ont été créés par des jeunes comme toi. Rejoins un atelier et fais le prochain.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/ateliers"
                className="btn-primary text-xl py-5 px-8 shadow-glow-primary flex items-center gap-3"
              >
                <Clapperboard className="w-6 h-6" />
                Rejoindre un Atelier
              </Link>
              <Link
                to="/reussites"
                className="glass-card text-white font-bold text-xl py-5 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
              >
                <Award className="w-6 h-6" />
                Voir Nos Réussites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedFilmIndex !== null && (
        <VideoPlayer
          videos={films}
          currentIndex={selectedFilmIndex}
          onClose={() => setSelectedFilmIndex(null)}
          onVideoChange={(index) => setSelectedFilmIndex(index)}
        />
      )}
    </div>
  );
}
