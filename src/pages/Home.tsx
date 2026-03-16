import { Play, ArrowRight, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoHeroBackground from '../components/VideoHeroBackground';
import { supabase } from '../lib/supabase';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  const [showTeaser, setShowTeaser] = useState(false);
  const [heroBackground, setHeroBackground] = useState('');
  const scrollRef = useScrollReveal();

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
      thumbnail: 'https://i.vimeocdn.com/video/2116516023-020e736245f88de16250ab86d1f772ca9b2ce7f0db5fb138e9f031b5c92b98d8-d_1280?region=us'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white" ref={scrollRef}>
      {/* HERO — cinématique, pas SaaS */}
      <VideoHeroBackground
        vimeoId="1161231299"
        posterImage={heroBackground || "https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us"}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-4 max-w-5xl mx-auto">

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tight animate-fade-in stagger-delay-1 logo-font">
            BANLIEUWOOD
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl mb-12 font-light animate-fade-in stagger-delay-2 px-4 max-w-2xl mx-auto">
            Amener le cinéma <span className="text-amber-500 font-medium">en bas de chez vous</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-delay-3 px-4">
            <Link
              to="/programme"
              className="group btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-lg"
            >
              Découvrir le programme
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/films"
              className="inline-flex items-center justify-center gap-3 text-white border border-white/20 hover:border-white/40 font-medium px-10 py-5 text-lg rounded-xl transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              Nos films
            </Link>
          </div>
        </div>
        </div>
      </VideoHeroBackground>

      {/* IMPACT — format éditorial, pas grille de cartes */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center" data-reveal>
            <div>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-6">Depuis 2015</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
                Le cinéma comme<br />outil d'émancipation
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Un programme pédagogique pour apprendre le cinéma en faisant. 8 modules, de l'observation à la réalisation d'un film.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-800 rounded-2xl overflow-hidden">
              {[
                { number: '500+', label: 'jeunes formés' },
                { number: '85%', label: 'continuent en audiovisuel*' },
                { number: '15+', label: 'prix en festivals' },
                { number: '8', label: 'modules pédagogiques' },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-950 p-8 text-center" data-reveal data-reveal-delay={String(i * 100)}>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 logo-font">{stat.number}</div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-6 text-right" data-reveal>*Étude interne 2023</p>
        </div>
      </section>

      {/* LE PARCOURS — horizontal, typographique */}
      <section className="py-20 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto" data-reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              De spectateur à <span className="text-amber-500">créateur</span>
            </h2>
            <Link to="/programme" className="text-amber-500 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-lg">
              Voir le programme <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-0 min-w-max">
              {['Observer', 'Comprendre', 'Imaginer', 'Clarifier', 'Construire', 'Écrire', 'Visualiser', 'Produire'].map((step, i) => (
                <div key={i} className="flex items-center" data-reveal data-reveal-delay={String(i * 60)}>
                  <div className="text-center px-6 py-4">
                    <span className="text-amber-500/60 font-bold text-xs block mb-1">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-white font-semibold text-sm whitespace-nowrap">{step}</span>
                  </div>
                  {i < 7 && <div className="w-8 h-px bg-gray-700 flex-shrink-0"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POUR QUI — 2 blocs distincts */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/programme" className="group p-10 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all" data-reveal>
              <Users className="w-8 h-8 text-amber-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-3">Tu as 12-25 ans ?</h3>
              <p className="text-gray-400 mb-6">Crée ton premier film. 100% gratuit, zéro prérequis.</p>
              <span className="text-amber-500 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                Voir le programme <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link to="/etablissements" className="group p-10 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all" data-reveal data-reveal-delay="100">
              <Building2 className="w-8 h-8 text-blue-400 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold mb-3">Vous êtes un établissement ?</h3>
              <p className="text-gray-400 mb-4">Un programme cinéma clé en main pour vos élèves. Compatible PEAC, Pass Culture, Politique de la Ville.</p>
              <p className="text-gray-600 text-xs mb-4">Déjà déployé : collège Grands Champs (78), collège Blaise Pascal (78), établissements en 93, 94, 77...</p>
              <span className="text-blue-400 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                En savoir plus <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* L'OUTIL — section produit avec vraie capture */}
      <section className="py-32 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center" data-reveal>
            <div>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-6">Innovation pédagogique</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Un outil numérique<br />
                <span className="text-amber-500">interactif</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Chaque élève utilise une tablette avec notre application dédiée. Questions, votes, débats, écriture — tout passe par l'outil.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                30% numérique, 70% humain. L'outil accompagne, le facilitateur anime.
              </p>
              <Link to="/programme" className="text-amber-500 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
                Découvrir le programme <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gray-900 rounded-2xl p-2 border border-gray-800 shadow-2xl">
              <img
                src="/images/app-pilot.webp"
                alt="Interface cockpit Banlieuwood — outil numérique interactif avec votes en temps réel, utilisé dans les ateliers cinéma pour les jeunes de 12 à 25 ans"
                className="rounded-xl w-full"
                width={960}
                height={540}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILMS — affiches cinéma, pas portfolio SaaS */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-reveal>
            <div>
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-3">Filmographie</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Ce que les jeunes créent
              </h2>
            </div>
            <Link to="/films" className="text-amber-500 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-lg">
              Tous les films <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { title: 'VOIR LA MER', image: 'https://i.vimeocdn.com/video/2116522335-2c12cb492e9e4cb23457fcdd53b991e25580890117f6af4a11812961a39c55bf-d_1280?region=us' },
              { title: 'TIC-TAC', image: 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us' },
              { title: "L'INTERROGATOIRE", image: 'https://i.vimeocdn.com/video/2116519312-c1874b4b3e33b7012026ae6e959222f560b08c522d6bf4bb1d741c02f9b3fb56-d_1280?region=us' }
            ].map((project, index) => (
              <Link
                key={index}
                to="/films"
                className="group relative overflow-hidden aspect-[3/4] rounded-xl"
                data-reveal
                data-reveal-delay={String(index * 100)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-black ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO + TÉMOIGNAGE */}
      <section className="py-24 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center" data-reveal>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="/images/atelier-cover.webp"
                alt="Tournage Banlieuwood à Saint-Denis — jeunes des quartiers populaires filmant en extérieur lors d'un atelier cinéma gratuit"
                className="w-full h-full object-cover object-center"
                width={960}
                height={540}
                loading="lazy"
              />
            </div>
            <div>
              <blockquote className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed mb-6">
                "J'ai découvert que j'aimais écrire des histoires. Aujourd'hui je suis en BTS audiovisuel."
              </blockquote>
              <div>
                <p className="text-white font-semibold">Sofiane, 19 ans</p>
                <p className="text-gray-500 text-sm">Participant depuis 2021 — Rosny-sous-Bois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEASER — pleine largeur, cinématique */}
      <section className="px-4 pb-32 bg-black">
        <div className="max-w-6xl mx-auto" data-reveal>
          <div
            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => setShowTeaser(true)}
          >
            <img
              src="https://i.vimeocdn.com/video/2116516023-020e736245f88de16250ab86d1f772ca9b2ce7f0db5fb138e9f031b5c92b98d8-d_1280?region=us"
              alt="Teaser Banlieuwood"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-bold text-2xl">Banlieuwood en images</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — minimal, pas de boîte */}
      <section className="py-32 px-4 bg-gray-950 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Rejoins le prochain atelier. C'est gratuit.
          </p>

          <Link
            to="/contact"
            className="group btn-primary inline-flex items-center gap-3 px-10 py-5 text-lg"
          >
            Nous contacter
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-500 text-sm mt-8">
            Établissement ? <Link to="/etablissements" className="text-amber-500 hover:text-amber-400 transition-colors">Découvrez nos formules</Link>
          </p>
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
