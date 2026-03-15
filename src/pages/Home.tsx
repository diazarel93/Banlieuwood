import { Film, Play, Sparkles, Users, Award, TrendingUp, ArrowRight, Clapperboard, BookOpen, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoHeroBackground from '../components/VideoHeroBackground';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [showTeaser, setShowTeaser] = useState(false);
  const [heroBackground, setHeroBackground] = useState('');

  useEffect(() => {
    fetchHeroBackground();
  }, []);

  const fetchHeroBackground = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('setting_value')
        .eq('setting_key', 'hero_background_image')
        .single();

      if (error) throw error;
      if (data?.setting_value) {
        setHeroBackground(data.setting_value);
      }
    } catch (error) {
      console.error('Error fetching hero background:', error);
    }
  };

  const teaserVideo = [
    {
      title: 'Teaser Banlieuwood',
      vimeoId: '1161231299',
      thumbnail: 'http://banlieuwood.fr/wp-content/uploads/2021/03/TEASER.png'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <VideoHeroBackground
        vimeoId="1161231299"
        posterImage={heroBackground || "http://banlieuwood.fr/wp-content/uploads/2021/03/vintage-film-projector-and-film-screening-1.jpg"}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-5xl mx-auto">
          <div className="mb-8 flex justify-center animate-float">
            <Film className="w-20 h-20 text-amber-500 drop-shadow-2xl shadow-glow" strokeWidth={1.5} />
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in stagger-delay-1 text-glow logo-font">
            BANLIEUWOOD
          </h1>

          <p className="text-2xl sm:text-3xl md:text-4xl mb-4 font-light animate-fade-in stagger-delay-2 px-4">
            Amener le cinéma <span className="gradient-text font-bold">en bas de chez vous</span>
          </p>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 font-light animate-fade-in stagger-delay-2 px-4">
            Un programme pédagogique en 8 modules. Du regard à la réalisation.
          </p>

          <div className="glass-strong inline-block px-8 py-4 rounded-full mb-12 animate-scale-in stagger-delay-3">
            <p className="text-base sm:text-lg md:text-xl text-amber-500 font-semibold flex items-center gap-3 flex-wrap justify-center">
              <Sparkles className="w-5 h-5" />
              8 modules
              <span className="text-gray-400">•</span>
              Outil numérique
              <span className="text-gray-400">•</span>
              De spectateur à créateur
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in stagger-delay-4 px-4">
            <Link
              to="/programme"
              className="group relative btn-primary inline-flex items-center justify-center gap-3 px-12 py-6 text-xl shadow-glow-primary hover:shadow-glow-strong"
            >
              <span className="relative z-10">Découvrir le programme</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" />
            </Link>
            <Link
              to="/films"
              className="inline-flex items-center justify-center gap-3 glass-card text-white border-2 border-amber-500/30 hover:border-amber-500 font-bold px-12 py-6 text-xl rounded-xl transition-all duration-300 hover-lift"
            >
              <Play className="w-6 h-6" />
              <span>Nos films</span>
            </Link>
          </div>
        </div>
        </div>
      </VideoHeroBackground>

      {/* STATS */}
      <section className="py-32 px-4 bg-gradient-to-b from-black via-black to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            C'est Quoi Banlieuwood ?
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 font-light mb-16 max-w-3xl mx-auto">
            Un <span className="text-white font-semibold">programme pédagogique</span> pour apprendre le cinéma en faisant. <span className="gradient-text font-semibold">8 modules, de l'observation à la réalisation.</span>
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-20">
            {[
              {
                icon: Users,
                number: '500+',
                title: 'Jeunes formés',
                desc: 'De 12 à 25 ans',
                color: 'from-blue-500 to-cyan-500',
                bgImage: 'https://i.vimeocdn.com/video/2116516023-020e736245f88de16250ab86d1f772ca9b2ce7f0db5fb138e9f031b5c92b98d8-d_1280?region=us'
              },
              {
                icon: TrendingUp,
                number: '85%',
                title: 'Continuent dans l\'audiovisuel',
                desc: 'Étude interne 2023',
                color: 'from-amber-500 to-orange-500',
                bgImage: 'https://i.vimeocdn.com/video/2116521612-e85659aaed322b96282e7645b11f02d215acc4f2200760c5f61e4c07658922d7-d_1280?region=us'
              },
              {
                icon: Award,
                number: '15+',
                title: 'Prix en festivals',
                desc: 'Reconnaissance nationale',
                color: 'from-amber-500 to-orange-500',
                bgImage: 'https://i.vimeocdn.com/video/2116522335-2c12cb492e9e4cb23457fcdd53b991e25580890117f6af4a11812961a39c55bf-d_1280?region=us'
              },
              {
                icon: BookOpen,
                number: '8',
                title: 'Modules pédagogiques',
                desc: 'Du regard à la réalisation',
                color: 'from-purple-500 to-pink-500',
                bgImage: 'https://i.vimeocdn.com/video/2116519312-c1874b4b3e33b7012026ae6e959222f560b08c522d6bf4bb1d741c02f9b3fb56-d_1280?region=us'
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0">
                  <img
                    src={stat.bgImage}
                    alt={stat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
                <div className="relative p-8">
                  <div className="mb-4 relative">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto">
                      <stat.icon className="w-7 h-7 text-white animate-float" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-3">{stat.number}</div>
                  <p className="text-lg font-bold text-white mb-2 drop-shadow-lg">{stat.title}</p>
                  <p className="text-gray-100 text-sm drop-shadow">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LE PROGRAMME — accroche cinématique */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                De spectateur<br />à <span className="gradient-text">créateur</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                8 modules progressifs. De l'observation à la réalisation d'un film. Chaque étape construit sur la précédente.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                Les élèves ne regardent pas un cours — ils créent, proposent, votent, tournent. Et repartent avec un film et une Carte Talent.
              </p>
              <Link
                to="/programme"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
              >
                Découvrir le programme
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="glass-card rounded-2xl p-8 border border-amber-500/20">
              <div className="space-y-4">
                {['Observer', 'Comprendre', 'Imaginer', 'Clarifier', 'Construire', 'Écrire', 'Visualiser', 'Produire'].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-amber-500 font-bold text-sm w-6">{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
                    <span className="text-white font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI ? */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/programme" className="glass-strong rounded-2xl p-8 border-2 border-amber-500/20 hover:border-amber-500 transition-all hover-lift group">
              <Users className="w-10 h-10 text-amber-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-2">Tu as 12-25 ans ?</h3>
              <p className="text-gray-400 mb-4">Crée ton premier film. 100% gratuit.</p>
              <span className="text-amber-500 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Voir le programme <ArrowRight className="w-5 h-5" />
              </span>
            </Link>

            <Link to="/etablissements" className="glass-strong rounded-2xl p-8 border-2 border-blue-500/20 hover:border-blue-500 transition-all hover-lift group">
              <Building2 className="w-10 h-10 text-blue-400 mb-4" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-2">Vous êtes un établissement ?</h3>
              <p className="text-gray-400 mb-4">Un programme cinéma clé en main pour vos élèves.</p>
              <span className="text-blue-400 font-bold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                En savoir plus <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FILMS PREVIEW */}
      <section className="py-32 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Nos Films</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ce que les jeunes créent : courts-métrages, clips, documentaires.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'VOIR LA MER', image: 'https://i.vimeocdn.com/video/2116522335-2c12cb492e9e4cb23457fcdd53b991e25580890117f6af4a11812961a39c55bf-d_1280?region=us', color: 'from-blue-500' },
              { title: 'TIC-TAC', image: 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us', color: 'from-amber-500' },
              { title: "L'INTERROGATOIRE", image: 'https://i.vimeocdn.com/video/2116519312-c1874b4b3e33b7012026ae6e959222f560b08c522d6bf4bb1d741c02f9b3fb56-d_1280?region=us', color: 'from-red-500' }
            ].map((project, index) => (
              <Link
                key={index}
                to="/films"
                className="group relative overflow-hidden aspect-[3/4] rounded-2xl shadow-2xl hover-lift"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-glow">{project.title}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass-strong p-6 rounded-full shadow-glow-strong">
                    <Play className="w-12 h-12 text-amber-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/films"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
            >
              Voir tous nos films
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TEASER */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">Teaser</h2>
          <div
            className="relative aspect-video glass rounded-2xl overflow-hidden group cursor-pointer shadow-2xl hover:shadow-glow-strong transition-all duration-500"
            onClick={() => setShowTeaser(true)}
          >
            <img
              src="http://banlieuwood.fr/wp-content/uploads/2021/03/TEASER.png"
              alt="Teaser Banlieuwood"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-glow-strong animate-pulse-slow">
                <Play className="w-12 h-12 text-black ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-8 md:p-12 border-2 border-amber-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à <span className="gradient-text">Commencer</span> ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contacte-nous pour rejoindre le prochain atelier.
            </p>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-12 py-6 text-xl rounded-xl transition-all duration-300 hover-lift shadow-glow"
            >
              <span>Nous contacter</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            <p className="text-gray-400 text-sm mt-6">
              Vous êtes un établissement ? <Link to="/etablissements" className="text-amber-500 hover:text-amber-400 underline transition-colors">Découvrez nos formules</Link>
            </p>
          </div>
        </div>
      </section>

      {showTeaser && (
        <VideoPlayer
          videos={teaserVideo}
          currentIndex={0}
          onClose={() => setShowTeaser(false)}
          onVideoChange={() => {}}
        />
      )}
    </div>
  );
}
