import { Play, Award, Clapperboard, ExternalLink, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { useScrollReveal } from '../hooks/useScrollReveal';

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
  { title: "L'Interrogatoire", vimeoId: '1161233515', thumbnail: 'https://i.vimeocdn.com/video/2116519312-c1874b4b3e33b7012026ae6e959222f560b08c522d6bf4bb1d741c02f9b3fb56-d_1280?region=us', category: 'Fiction', description: 'Court-métrage réalisé au collège Grands Champs, Poissy', crew: 'Collège Grands Champs', location: 'Poissy' },
  { title: 'Voir la Mer', vimeoId: '1161235634', thumbnail: 'https://i.vimeocdn.com/video/2116522335-2c12cb492e9e4cb23457fcdd53b991e25580890117f6af4a11812961a39c55bf-d_1280?region=us', category: 'Fiction', description: 'Court-métrage primé 3 fois en festivals', crew: 'Rosny-sous-Bois', award: 'Primé 3 fois', location: 'Rosny-sous-Bois' },
  { title: "L'Homme de Famille", vimeoId: '1161233669', thumbnail: 'https://i.vimeocdn.com/video/2116519921-796ca26347a7fa7710da6ab1310491e707849f9d89bfc4cd00ceef3bbc5dd3d4-d_1280?region=us', category: 'Fiction', description: 'Réalisé pour le Nikon Film Festival', crew: 'Saint-Denis', location: 'Saint-Denis' },
  { title: 'Délégué des Tas', vimeoId: '1161234751', thumbnail: 'https://i.vimeocdn.com/video/2116521958-735964467320283972471ad91e8c89f589c25560834a04e65960d6f8925cafee-d_1280?region=us', category: 'Fiction', description: 'Court-métrage au collège Blaise Pascal', crew: 'Collège Blaise Pascal', location: 'Plaisir' },
  { title: 'ODEULC', vimeoId: '1161231322', thumbnail: 'https://i.vimeocdn.com/video/2116516973-cfb43c14c607375cdf6b6affb594a3c73e1dad808cf204d1b616bab81093da52-d_1280?region=us', category: 'Fiction', description: 'Réalisé avec 15 jeunes', crew: '15 jeunes', location: 'Roissy-en-Brie' },
  { title: 'La Belle Saison', vimeoId: '1161234053', thumbnail: 'https://i.vimeocdn.com/video/2116521612-e85659aaed322b96282e7645b11f02d215acc4f2200760c5f61e4c07658922d7-d_1280?region=us', category: 'Fiction', description: 'Réalisé avec 18 jeunes à Créteil', crew: '18 jeunes', location: 'Créteil' },
  { title: 'Snap peut nuire à votre santé', vimeoId: '1161231894', thumbnail: 'https://i.vimeocdn.com/video/2116517155-3fd5d47899ca88918810fff00f7c39cf6e0a14fb987d07678fe8d6d690a8095a-d_1280?region=us', category: 'Fiction', description: 'Court-métrage réalisé avec 30 élèves', crew: '30 élèves', location: 'Aubervilliers' },
  { title: 'Silence, Moteur, Action', youtubeId: 'eo_qVvsWRwM', thumbnail: 'https://img.youtube.com/vi/eo_qVvsWRwM/maxresdefault.jpg', category: 'Fiction', description: 'Sur le thème du harcèlement scolaire', crew: 'Poissy', location: 'Poissy' },
  { title: 'Tic Tac', vimeoId: '1161235536', thumbnail: 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us', category: 'Fiction', description: 'Long-métrage réalisé avec 22 jeunes. Disponible sur Amazon Prime Video.', crew: '22 jeunes', award: 'Amazon Prime' },
  { title: 'La Petite Princesse', vimeoId: '1160858372', thumbnail: 'https://i.vimeocdn.com/video/2116005228-afff924899569cad1567ca9a9867ad510c4082ae51f1a4c44510c3c4179c0e51-d_1280?region=us', category: 'Fiction', description: 'Court-métrage de fiction' },
  { title: "Making Of L'Interrogatoire", vimeoId: '1161232067', thumbnail: 'https://i.vimeocdn.com/video/2116519419-d83037aaf8c61f2523f1c8f7cb552e9a6bfd7be13175e404fcb6cd918e5c58dc-d_1280?region=us', category: 'Making-of', description: 'Les coulisses du tournage' },
  { title: 'Making Of Le Passage', youtubeId: 'a0Px84_uZnQ', thumbnail: 'https://img.youtube.com/vi/a0Px84_uZnQ/maxresdefault.jpg', category: 'Making-of', description: 'Les coulisses du tournage avec les CM2' },
  { title: 'Making Of Délégué des Tas', vimeoId: '1161234440', thumbnail: 'https://i.vimeocdn.com/video/2116520904-5e3353b05fab87db8e5abcb07c99f9f10f8515949107668c990d10bb9a1e6f29-d_1280?region=us', category: 'Making-of', description: 'En coulisses au collège Blaise Pascal' },
  { title: 'Making Of Perdue', vimeoId: '1161234268', thumbnail: 'https://i.vimeocdn.com/video/2116520406-2e129c5503261820b0c95915d8fee6cc5ccb20bb7fb11984c2b9bd0780b0ba7b-d_1280?region=us', category: 'Making-of', description: 'Les coulisses du film Perdue' },
  { title: 'Making Of Tic Tac', vimeoId: '1161234232', thumbnail: 'https://i.vimeocdn.com/video/2116520146-9109d1f6fd8e73d5b9531879f7d8b01192a0d6f4485c391c9136a335d3799d8b-d_1280?region=us', category: 'Making-of', description: 'Les coulisses du long-métrage Tic Tac' },
  { title: 'Teaser Banlieuwood', vimeoId: '1161231299', thumbnail: 'https://i.vimeocdn.com/video/2116516023-020e736245f88de16250ab86d1f772ca9b2ce7f0db5fb138e9f031b5c92b98d8-d_1280?region=us', category: 'Documentaire', description: 'Découvre qui on est et ce qu\'on fait' },
  { title: 'Grand Pari Citoyen', youtubeId: 'k2t-cjl4Fgg', thumbnail: 'https://img.youtube.com/vi/k2t-cjl4Fgg/maxresdefault.jpg', category: 'Documentaire', description: 'Documentaire sur l\'engagement citoyen' },
  { title: 'Reportage Blaise Pascal', youtubeId: 'Ep1LQcSP57Y', thumbnail: 'https://img.youtube.com/vi/Ep1LQcSP57Y/maxresdefault.jpg', category: 'Documentaire', description: 'Reportage au collège Blaise Pascal' }
];

export default function Films() {
  const [selectedFilmIndex, setSelectedFilmIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const scrollRef = useScrollReveal();

  const categories = ['Tous', 'Fiction', 'Making-of', 'Documentaire'];
  const filteredFilms = films.filter(film => selectedCategory === 'Tous' || film.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20" ref={scrollRef}>

      {/* HERO — Tic Tac plein écran */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us"
            alt="Tic Tac - Long métrage Banlieuwood"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="animate-fade-in">
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4">Sur Amazon Prime Video</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 logo-font">TIC TAC</h1>
              <p className="text-xl text-gray-300 max-w-xl">
                Long-métrage réalisé avec 22 jeunes. De l'écriture à la diffusion mondiale.
              </p>
            </div>
            <div className="flex gap-3 animate-fade-in stagger-delay-2">
              <button
                onClick={() => {
                  const idx = films.findIndex(f => f.title === 'Tic Tac');
                  if (idx !== -1) setSelectedFilmIndex(idx);
                }}
                className="btn-primary inline-flex items-center gap-2 px-6 py-4 text-base"
              >
                <Play className="w-5 h-5" fill="currentColor" />
                Regarder
              </button>
              <a
                href="https://www.allocine.fr/film/fichefilm_gen_cfilm=1000000693.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 text-base border border-white/20 hover:border-white/40 rounded-xl transition-all font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                Allociné
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FILMOGRAPHIE — filtres + grille */}
      <section className="py-24 px-4 bg-black border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12" data-reveal>
            <h2 className="text-3xl md:text-4xl font-bold">
              Filmographie
            </h2>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredFilms.map((film, i) => (
              <button
                key={i}
                onClick={() => setSelectedFilmIndex(films.findIndex(f => f.title === film.title))}
                className="group text-left rounded-xl overflow-hidden"
                data-reveal
                data-reveal-delay={String(Math.min(i, 5) * 80)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
                    </div>
                  </div>

                  {film.award && (
                    <div className="absolute top-3 right-3 bg-amber-500 px-3 py-1 rounded-full">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-3 h-3 text-black" />
                        <span className="text-xs font-bold text-black">{film.award}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="py-4">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold group-hover:text-amber-500 transition-colors">{film.title}</h3>
                    <span className="text-gray-600 text-xs">{film.category}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{film.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TALENTS REPÉRÉS */}
      <section className="py-24 px-4 bg-gray-950 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start" data-reveal>
            <div>
              <p className="text-purple-400 font-bold text-sm uppercase tracking-widest mb-4">Opportunités créées</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Des talents repérés
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                On ne promet pas Hollywood. Mais certains jeunes ont trouvé des agents artistiques, constitué des books professionnels, et enchaînent maintenant les castings.
              </p>
              <Link to="/contact" className="text-amber-500 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Rejoindre un atelier <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-800 pl-6 py-2" data-reveal>
                <p className="font-bold text-white">Agents artistiques</p>
                <p className="text-purple-400 text-sm font-medium mb-1">Plusieurs jeunes repérés</p>
                <p className="text-gray-500 text-sm">Après les tournages Banlieuwood, certains participants ont trouvé un agent artistique et enchaînent les castings professionnels.</p>
              </div>
              <div className="border-l-2 border-gray-800 pl-6 py-2" data-reveal data-reveal-delay="100">
                <p className="font-bold text-white">Books professionnels</p>
                <p className="text-purple-400 text-sm font-medium mb-1">Des portefeuilles construits</p>
                <p className="text-gray-500 text-sm">Les films produits servent de book pour des candidatures en BTS audiovisuel, écoles de cinéma ou castings.</p>
              </div>
              <div className="border-l-2 border-gray-800 pl-6 py-2" data-reveal data-reveal-delay="200">
                <p className="font-bold text-white">Formations audiovisuelles</p>
                <p className="text-purple-400 text-sm font-medium mb-1">85% continuent</p>
                <p className="text-gray-500 text-sm">La majorité des participants poursuivent dans l'audiovisuel — BTS, licence, ou formations spécialisées. <span className="text-gray-600 text-xs">(Étude interne 2023)</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-black border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crée ton film
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Tous ces films ont été créés par des jeunes comme toi.
          </p>
          <Link
            to="/programme"
            className="btn-primary text-lg py-5 px-10 inline-flex items-center gap-3"
          >
            <Clapperboard className="w-5 h-5" />
            Rejoindre un atelier
          </Link>
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
