import { Film, Play, Award, Users, Clapperboard, Sparkles, Video, Eye, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

interface FilmData {
  title: string;
  vimeoId?: string;
  youtubeId?: string;
  thumbnail: string;
  category: 'Fiction' | 'Making-of' | 'Documentaire';
  description: string;
  crew?: string;
  award?: string;
  location?: string;
}

const films: FilmData[] = [
  // FICTIONS
  {
    title: "L'Interrogatoire",
    vimeoId: '1161233515',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    category: 'Fiction',
    description: 'Court-metrage realise au college Grands Champs, Poissy',
    crew: 'College Grands Champs',
    location: 'Poissy'
  },
  {
    title: 'Voir la Mer',
    vimeoId: '1161235634',
    thumbnail: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
    category: 'Fiction',
    description: 'Court-metrage prime 3 fois en festivals',
    crew: 'Rosny-sous-Bois',
    award: 'Prime 3 fois',
    location: 'Rosny-sous-Bois'
  },
  {
    title: "L'Homme de Famille",
    vimeoId: '1161233669',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    category: 'Fiction',
    description: 'Realise pour le Nikon Film Festival',
    crew: 'Saint-Denis',
    location: 'Saint-Denis'
  },
  {
    title: 'Delegue des Tas',
    vimeoId: '1161234751',
    thumbnail: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
    category: 'Fiction',
    description: 'Court-metrage au college Blaise Pascal',
    crew: 'College Blaise Pascal',
    location: 'Plaisir'
  },
  {
    title: 'ODEULC',
    vimeoId: '1161231322',
    thumbnail: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg',
    category: 'Fiction',
    description: 'Realise avec 15 jeunes',
    crew: '15 jeunes',
    location: 'Roissy-en-Brie'
  },
  {
    title: 'La Belle Saison',
    vimeoId: '1161234053',
    thumbnail: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg',
    category: 'Fiction',
    description: 'Realise avec 18 jeunes a Creteil',
    crew: '18 jeunes',
    location: 'Creteil'
  },
  {
    title: 'Snap peut nuire a votre sante',
    vimeoId: '1161231894',
    thumbnail: 'https://images.pexels.com/photos/7234344/pexels-photo-7234344.jpeg',
    category: 'Fiction',
    description: 'Court-metrage realise avec 30 eleves',
    crew: '30 eleves',
    location: 'Aubervilliers'
  },
  {
    title: 'Silence, Moteur, Action',
    youtubeId: 'eo_qVvsWRwM',
    thumbnail: 'https://images.pexels.com/photos/7234401/pexels-photo-7234401.jpeg',
    category: 'Fiction',
    description: 'Sur le theme du harcelement scolaire',
    crew: 'Poissy',
    location: 'Poissy'
  },
  {
    title: 'Le Passage',
    vimeoId: '1161235536',
    thumbnail: 'https://images.pexels.com/photos/7991319/pexels-photo-7991319.jpeg',
    category: 'Fiction',
    description: 'Realise avec une classe de CM2',
    crew: 'Classe CM2',
    location: 'Poissy'
  },
  {
    title: 'Tic Tac',
    vimeoId: '1161235598',
    thumbnail: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg',
    category: 'Fiction',
    description: 'Long-metrage realise avec 22 jeunes. Disponible sur Amazon Prime Video.',
    crew: '22 jeunes',
    award: 'Amazon Prime'
  },
  {
    title: 'Perdue',
    vimeoId: '1161234232',
    thumbnail: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
    category: 'Fiction',
    description: 'Realise avec 8 jeunes',
    crew: '8 jeunes',
    location: 'Roissy-en-Brie'
  },
  // MAKING-OF & DOCS
  {
    title: 'Teaser Banlieuwood',
    vimeoId: '1161231299',
    thumbnail: 'https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg',
    category: 'Documentaire',
    description: 'Decouvre qui on est et ce qu\'on fait'
  },
  {
    title: "Making Of L'Interrogatoire",
    vimeoId: '1161232067',
    thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    category: 'Making-of',
    description: 'Les coulisses du tournage'
  },
  {
    title: 'Making Of Le Passage',
    youtubeId: 'a0Px84_uZnQ',
    thumbnail: 'https://images.pexels.com/photos/8613314/pexels-photo-8613314.jpeg',
    category: 'Making-of',
    description: 'Les coulisses du tournage avec les CM2'
  },
  {
    title: 'Making Of Delegue des Tas',
    vimeoId: '1161234440',
    thumbnail: 'https://images.pexels.com/photos/7234399/pexels-photo-7234399.jpeg',
    category: 'Making-of',
    description: 'En coulisses au college Blaise Pascal'
  },
  {
    title: 'Making Of Perdue',
    vimeoId: '1161234268',
    thumbnail: 'https://images.pexels.com/photos/7234257/pexels-photo-7234257.jpeg',
    category: 'Making-of',
    description: 'Les coulisses du film Perdue'
  },
  {
    title: 'Grand Pari Citoyen',
    youtubeId: 'k2t-cjl4Fgg',
    thumbnail: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg',
    category: 'Documentaire',
    description: 'Documentaire sur l\'engagement citoyen'
  },
  {
    title: 'Reportage Blaise Pascal',
    youtubeId: 'Ep1LQcSP57Y',
    thumbnail: 'https://images.pexels.com/photos/5699519/pexels-photo-5699519.jpeg',
    category: 'Documentaire',
    description: 'Reportage au college Blaise Pascal'
  },
  {
    title: 'Rencontre Police',
    vimeoId: '1160858372',
    thumbnail: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
    category: 'Documentaire',
    description: 'Documentaire sur la rencontre avec la police'
  }
];

export default function Films() {
  const [selectedFilmIndex, setSelectedFilmIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Fiction', 'Making-of', 'Documentaire'];

  const filteredFilms = films.filter(film => {
    return selectedCategory === 'Tous' || film.category === selectedCategory;
  });

  const stats = [
    { icon: Film, number: '11', label: 'Films Fiction', description: 'Courts et longs metrages' },
    { icon: Users, number: '200+', label: 'Jeunes Acteurs', description: 'Ont participe aux productions' },
    { icon: Award, number: '3', label: 'Prix Gagnes', description: '"Voir la Mer" prime 3 fois' },
    { icon: Eye, number: '19', label: 'Videos', description: 'Films, making-of et documentaires' }
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
            <span className="text-amber-400 font-bold">19 Productions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Nos <span className="gradient-text">Films</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Chaque film est une histoire vraie. Faite par des jeunes. Pour de vrai.
          </p>

          <p className="text-xl text-white font-semibold mb-8 max-w-4xl animate-fade-in stagger-delay-3">
            Courts-metrages, making-of, documentaires. Tous crees de A a Z par les ateliers.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce Qu'On A <span className="gradient-text">Cree</span>
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

      {/* Tic Tac sur Amazon Prime */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 font-bold">Amazon Prime Video</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tic Tac sur <span className="gradient-text">Amazon Prime</span>
            </h2>
            <p className="text-xl text-gray-400">Notre long-metrage, accessible mondialement</p>
          </div>

          <div className="glass-strong rounded-3xl overflow-hidden border-2 border-amber-500/30 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto cursor-pointer" onClick={() => {
                const ticTacIndex = films.findIndex(f => f.title === 'Tic Tac');
                if (ticTacIndex !== -1) setSelectedFilmIndex(ticTacIndex);
              }}>
                <img
                  src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg"
                  alt="Tic Tac - Long metrage"
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

                <h3 className="text-3xl font-bold mb-4">Tic Tac</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Long-metrage realise avec 22 jeunes. De l'ecriture a la diffusion mondiale sur Amazon Prime Video.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.allocine.fr/film/fichefilm_gen_cfilm=1000000693.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-xl transition-all hover-lift shadow-glow text-lg"
                  >
                    <ExternalLink className="w-6 h-6" />
                    Voir sur Allocine
                  </a>
                  <button
                    onClick={() => {
                      const ticTacIndex = films.findIndex(f => f.title === 'Tic Tac');
                      if (ticTacIndex !== -1) setSelectedFilmIndex(ticTacIndex);
                    }}
                    className="inline-flex items-center gap-2 glass-card text-white font-bold px-8 py-4 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift text-lg"
                  >
                    <Play className="w-6 h-6" />
                    Voir le film
                  </button>
                </div>
              </div>
            </div>
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
                onClick={() => setSelectedFilmIndex(films.findIndex(f => f.title === film.title))}
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
                        <span className="text-xs font-bold text-amber-500">{film.award}</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-white">{film.youtubeId ? 'YouTube' : 'Vimeo'}</span>
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

                  {(film.crew || film.location) && (
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      {film.crew && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-amber-500" />
                          <span>{film.crew}</span>
                        </div>
                      )}
                      {film.location && (
                        <span className="text-gray-500">{film.location}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-2 border-amber-500/30">
            <Sparkles className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cree Ton <span className="gradient-text">Film</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Tous ces films ont ete crees par des jeunes comme toi. Rejoins un atelier et fais le prochain.
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
                Voir Nos Reussites
              </Link>
            </div>
          </div>
        </div>
      </section>

      {selectedFilmIndex !== null && (
        <VideoPlayer
          videos={films.map(f => ({
            title: f.title,
            vimeoId: f.vimeoId,
            youtubeId: f.youtubeId,
            thumbnail: f.thumbnail
          }))}
          currentIndex={selectedFilmIndex}
          onClose={() => setSelectedFilmIndex(null)}
          onVideoChange={(index) => setSelectedFilmIndex(index)}
        />
      )}
    </div>
  );
}
