import { Film, Play, Award, Users, Clapperboard, Sparkles, Video, Eye, ExternalLink, Star } from 'lucide-react';
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
    thumbnail: 'https://i.vimeocdn.com/video/2116519312-c1874b4b3e33b7012026ae6e959222f560b08c522d6bf4bb1d741c02f9b3fb56-d_1280?region=us',
    category: 'Fiction',
    description: 'Court-métrage réalisé au collège Grands Champs, Poissy',
    crew: 'Collège Grands Champs',
    location: 'Poissy'
  },
  {
    title: 'Voir la Mer',
    vimeoId: '1161235634',
    thumbnail: 'https://i.vimeocdn.com/video/2116522335-2c12cb492e9e4cb23457fcdd53b991e25580890117f6af4a11812961a39c55bf-d_1280?region=us',
    category: 'Fiction',
    description: 'Court-métrage primé 3 fois en festivals',
    crew: 'Rosny-sous-Bois',
    award: 'Primé 3 fois',
    location: 'Rosny-sous-Bois'
  },
  {
    title: "L'Homme de Famille",
    vimeoId: '1161233669',
    thumbnail: 'https://i.vimeocdn.com/video/2116519921-796ca26347a7fa7710da6ab1310491e707849f9d89bfc4cd00ceef3bbc5dd3d4-d_1280?region=us',
    category: 'Fiction',
    description: 'Réalisé pour le Nikon Film Festival',
    crew: 'Saint-Denis',
    location: 'Saint-Denis'
  },
  {
    title: 'Délégué des Tas',
    vimeoId: '1161234751',
    thumbnail: 'https://i.vimeocdn.com/video/2116521958-735964467320283972471ad91e8c89f589c25560834a04e65960d6f8925cafee-d_1280?region=us',
    category: 'Fiction',
    description: 'Court-métrage au collège Blaise Pascal',
    crew: 'Collège Blaise Pascal',
    location: 'Plaisir'
  },
  {
    title: 'ODEULC',
    vimeoId: '1161231322',
    thumbnail: 'https://i.vimeocdn.com/video/2116516973-cfb43c14c607375cdf6b6affb594a3c73e1dad808cf204d1b616bab81093da52-d_1280?region=us',
    category: 'Fiction',
    description: 'Réalisé avec 15 jeunes',
    crew: '15 jeunes',
    location: 'Roissy-en-Brie'
  },
  {
    title: 'La Belle Saison',
    vimeoId: '1161234053',
    thumbnail: 'https://i.vimeocdn.com/video/2116521612-e85659aaed322b96282e7645b11f02d215acc4f2200760c5f61e4c07658922d7-d_1280?region=us',
    category: 'Fiction',
    description: 'Réalisé avec 18 jeunes à Créteil',
    crew: '18 jeunes',
    location: 'Créteil'
  },
  {
    title: 'Snap peut nuire à votre santé',
    vimeoId: '1161231894',
    thumbnail: 'https://i.vimeocdn.com/video/2116517155-3fd5d47899ca88918810fff00f7c39cf6e0a14fb987d07678fe8d6d690a8095a-d_1280?region=us',
    category: 'Fiction',
    description: 'Court-métrage réalisé avec 30 élèves',
    crew: '30 élèves',
    location: 'Aubervilliers'
  },
  {
    title: 'Silence, Moteur, Action',
    youtubeId: 'eo_qVvsWRwM',
    thumbnail: 'https://img.youtube.com/vi/eo_qVvsWRwM/hqdefault.jpg',
    category: 'Fiction',
    description: 'Sur le thème du harcèlement scolaire',
    crew: 'Poissy',
    location: 'Poissy'
  },
  {
    title: 'Tic Tac',
    vimeoId: '1161235536',
    thumbnail: 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us',
    category: 'Fiction',
    description: 'Long-métrage réalisé avec 22 jeunes. Disponible sur Amazon Prime Video.',
    crew: '22 jeunes',
    award: 'Amazon Prime'
  },
  {
    title: 'La Petite Princesse',
    vimeoId: '1160858372',
    thumbnail: 'https://i.vimeocdn.com/video/2116005228-afff924899569cad1567ca9a9867ad510c4082ae51f1a4c44510c3c4179c0e51-d_1280?region=us',
    category: 'Fiction',
    description: 'Court-métrage de fiction'
  },
  // MAKING-OF
  {
    title: "Making Of L'Interrogatoire",
    vimeoId: '1161232067',
    thumbnail: 'https://i.vimeocdn.com/video/2116519419-d83037aaf8c61f2523f1c8f7cb552e9a6bfd7be13175e404fcb6cd918e5c58dc-d_1280?region=us',
    category: 'Making-of',
    description: 'Les coulisses du tournage'
  },
  {
    title: 'Making Of Le Passage',
    youtubeId: 'a0Px84_uZnQ',
    thumbnail: 'https://img.youtube.com/vi/a0Px84_uZnQ/hqdefault.jpg',
    category: 'Making-of',
    description: 'Les coulisses du tournage avec les CM2'
  },
  {
    title: 'Making Of Délégué des Tas',
    vimeoId: '1161234440',
    thumbnail: 'https://i.vimeocdn.com/video/2116520904-5e3353b05fab87db8e5abcb07c99f9f10f8515949107668c990d10bb9a1e6f29-d_1280?region=us',
    category: 'Making-of',
    description: 'En coulisses au collège Blaise Pascal'
  },
  {
    title: 'Making Of Perdue',
    vimeoId: '1161234268',
    thumbnail: 'https://i.vimeocdn.com/video/2116520406-2e129c5503261820b0c95915d8fee6cc5ccb20bb7fb11984c2b9bd0780b0ba7b-d_1280?region=us',
    category: 'Making-of',
    description: 'Les coulisses du film Perdue'
  },
  {
    title: 'Making Of Tic Tac',
    vimeoId: '1161234232',
    thumbnail: 'https://i.vimeocdn.com/video/2116520146-9109d1f6fd8e73d5b9531879f7d8b01192a0d6f4485c391c9136a335d3799d8b-d_1280?region=us',
    category: 'Making-of',
    description: 'Les coulisses du long-métrage Tic Tac'
  },
  // DOCUMENTAIRES
  {
    title: 'Teaser Banlieuwood',
    vimeoId: '1161231299',
    thumbnail: 'https://i.vimeocdn.com/video/2116516023-020e736245f88de16250ab86d1f772ca9b2ce7f0db5fb138e9f031b5c92b98d8-d_1280?region=us',
    category: 'Documentaire',
    description: 'Découvre qui on est et ce qu\'on fait'
  },
  {
    title: 'Grand Pari Citoyen',
    youtubeId: 'k2t-cjl4Fgg',
    thumbnail: 'https://img.youtube.com/vi/k2t-cjl4Fgg/hqdefault.jpg',
    category: 'Documentaire',
    description: 'Documentaire sur l\'engagement citoyen'
  },
  {
    title: 'Reportage Blaise Pascal',
    youtubeId: 'Ep1LQcSP57Y',
    thumbnail: 'https://img.youtube.com/vi/Ep1LQcSP57Y/hqdefault.jpg',
    category: 'Documentaire',
    description: 'Reportage au collège Blaise Pascal'
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
    { icon: Film, number: '10', label: 'Films Fiction', description: 'Courts et longs métrages' },
    { icon: Users, number: '200+', label: 'Jeunes Acteurs', description: 'Ont participé aux productions' },
    { icon: Award, number: '3', label: 'Prix Gagnés', description: '"Voir la Mer" primé 3 fois' },
    { icon: Eye, number: '18', label: 'Vidéos', description: 'Films, making-of et documentaires' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.vimeocdn.com/video/2116516023-020e736245f88de16250ab86d1f772ca9b2ce7f0db5fb138e9f031b5c92b98d8-d_1280?region=us"
            alt="Tournage Banlieuwood"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Video className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold">18 Productions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Nos <span className="gradient-text">Films</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Chaque film est le résultat de notre parcours en 8 modules. De l'idée au tournage, tout est créé par les jeunes.
          </p>

          <p className="text-xl text-white font-semibold mb-8 max-w-4xl animate-fade-in stagger-delay-3">
            Courts-métrages, making-of, documentaires. Tous créés de A à Z par les ateliers.
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
            <p className="text-xl text-gray-400">Notre long-métrage, accessible mondialement</p>
          </div>

          <div className="glass-strong rounded-3xl overflow-hidden border-2 border-amber-500/30 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto cursor-pointer" onClick={() => {
                const ticTacIndex = films.findIndex(f => f.title === 'Tic Tac');
                if (ticTacIndex !== -1) setSelectedFilmIndex(ticTacIndex);
              }}>
                <img
                  src="https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us"
                  alt="Tic Tac - Long métrage"
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
                  Long-métrage réalisé avec 22 jeunes. De l'écriture à la diffusion mondiale sur Amazon Prime Video.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.allocine.fr/film/fichefilm_gen_cfilm=1000000693.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 py-4 rounded-xl transition-all hover-lift shadow-glow text-lg"
                  >
                    <ExternalLink className="w-6 h-6" />
                    Voir sur Allociné
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

      {/* TALENTS REPÉRÉS */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-purple-500" />
              <span className="text-purple-400 font-bold">Opportunités Créées</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Talents <span className="gradient-text">Repérés</span>
            </h2>
            <p className="text-xl text-gray-400">Certains jeunes ont trouvé des agents artistiques après nos films</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sofiane L.',
                achievement: 'Agent Artistique Trouvé',
                story: 'Après avoir joué dans 3 de nos courts-métrages, Sofiane a été repéré et a maintenant un agent qui lui trouve des castings.',
              },
              {
                name: 'Inès M.',
                achievement: 'Agent Artistique Trouvé',
                story: 'Son talent naturel devant la caméra lui a ouvert les portes. Elle enchaîne maintenant les auditions professionnelles.',
              },
              {
                name: 'Karim B.',
                achievement: 'Book Professionnel',
                story: 'Grâce aux films réalisés, Karim a constitué un book professionnel qu\'il présente en castings.',
              }
            ].map((talent, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-glow">
                  <span className="text-white font-bold text-xl">{talent.name.charAt(0)}</span>
                </div>
                <div className="glass-card px-3 py-1 rounded-full inline-block mb-4 border border-purple-500/30">
                  <p className="text-purple-400 font-bold text-xs">{talent.achievement}</p>
                </div>
                <h3 className="text-xl font-bold mb-3">{talent.name}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{talent.story}</p>
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

      {/* CTA */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-2 border-amber-500/30">
            <Sparkles className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Crée ton <span className="gradient-text">Film</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Tous ces films ont été créés par des jeunes comme toi. Rejoins un atelier et fais le prochain.
            </p>

            <Link
              to="/programme"
              className="btn-primary text-xl py-5 px-8 shadow-glow-primary inline-flex items-center gap-3"
            >
              <Clapperboard className="w-6 h-6" />
              Rejoindre un Atelier
            </Link>
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
