import { Film, MapPin, Users, Heart, Target, Award, Clapperboard, TrendingUp, Play, ArrowRight, Sparkles, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
  const [playVideo, setPlayVideo] = useState(false);

  const impactNumbers = [
    { number: '500+', label: 'Jeunes formés', sublabel: 'depuis 2015', icon: Users, color: 'from-blue-500 to-cyan-500' },
    { number: '30+', label: 'Films produits', sublabel: 'courts et longs métrages', icon: Film, color: 'from-amber-500 to-orange-500' },
    { number: '15+', label: 'Sélections festivals', sublabel: 'nationaux et internationaux', icon: Award, color: 'from-purple-500 to-pink-500' },
    { number: '85%', label: 'Poursuivent en audiovisuel', sublabel: 'étude interne 2023 (n=47)', icon: TrendingUp, color: 'from-green-500 to-emerald-500' }
  ];

  const values = [
    { icon: MapPin, title: 'Ancrage local', description: 'À Saint-Denis depuis 2015, au coeur des quartiers populaires', color: 'from-red-500 to-orange-500' },
    { icon: Users, title: 'Équipe pro', description: 'Cinéastes et formateurs passionnés par la transmission', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, title: 'Inclusion totale', description: '100% gratuit, accessible à tous sans condition', color: 'from-pink-500 to-red-500' },
    { icon: Target, title: 'Impact réel', description: 'Des compétences professionnelles et des carrières lancées', color: 'from-green-500 to-emerald-500' }
  ];

  const milestones = [
    { year: '2015', title: 'Création', desc: 'Premiers ateliers à Saint-Denis avec 12 jeunes' },
    { year: '2017', title: 'Premiers films', desc: 'Production de courts-métrages avec des collèges partenaires' },
    { year: '2019', title: 'Tic Tac', desc: 'Long-métrage réalisé avec 22 jeunes, diffusé sur Amazon Prime Video' },
    { year: '2021', title: '"Voir la Mer" primé', desc: 'Le film "Voir la Mer" remporte 3 prix en festivals' },
    { year: '2023', title: '11 films', desc: '11 films réalisés, plus de 200 jeunes formés depuis 2015' },
    { year: '2024', title: 'Programme 8 modules', desc: 'Développement du parcours pédagogique structuré et de l\'outil numérique' },
    { year: '2025', title: 'Plateforme EdTech', desc: 'Lancement de la plateforme interactive sur tablettes pour les établissements scolaires' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* HERO */}
      <section className="relative py-32 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.vimeocdn.com/video/2116519312-c1874b4b3e33b7012026ae6e959222f560b08c522d6bf4bb1d741c02f9b3fb56-d_1280?region=us"
            alt="Tournage Banlieuwood"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8 animate-fade-in">
              <Film className="w-6 h-6 text-amber-500" />
              <span className="text-amber-400 font-bold text-lg">Depuis 2015 à Saint-Denis</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight animate-slide-up">
              Le Cinéma<br />
              <span className="text-amber-500">Des Quartiers</span>
            </h1>

            <p className="text-3xl md:text-4xl text-amber-400 font-light italic mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              "Nous sommes là où le cinéma<br />ne nous attend pas."
            </p>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Former des jeunes au cinéma. Produire des films. Créer des opportunités.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/programme"
                className="btn-primary text-xl py-5 px-8 flex items-center gap-3"
              >
                <Clapperboard className="w-6 h-6" />
                Le Programme
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/films"
                className="glass-card text-white font-bold text-xl py-5 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500/50 transition-all hover-lift flex items-center gap-3"
              >
                <Play className="w-6 h-6" />
                Voir nos Films
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* STATS */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {impactNumbers.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 text-center relative overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <div className="relative z-10">
                  <stat.icon className="w-12 h-12 text-amber-500 mx-auto mb-4" strokeWidth={1.5} />
                  <div className="text-5xl font-bold text-amber-500 mb-3">{stat.number}</div>
                  <p className="text-xl font-bold text-white">{stat.label}</p>
                  <p className="text-xs text-gray-500 mt-2">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-amber-400 font-bold">Notre Histoire</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Comment Ça a<br />
                <span className="text-amber-500">Commencé</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <span className="text-amber-500 font-bold text-2xl">2015.</span> Tout commence avec une idée simple :
                  <span className="text-white font-semibold"> amener le cinéma directement dans les quartiers.</span>
                </p>
                <p>
                  Créée par des <span className="text-white font-semibold">professionnels du cinéma</span>,
                  Banlieuwood part d'un constat simple : les jeunes des quartiers ont du talent,
                  mais zéro accès aux métiers de l'audiovisuel.
                </p>
                <div className="glass-strong border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <p className="text-xl font-bold text-white mb-3">Ce qu'on croit</p>
                  <p className="text-gray-300">
                    Le cinéma, ça s'apprend par la pratique. Pas en regardant des tutos YouTube.
                    En faisant. Avec du vrai matos. Encadré par des pros.
                  </p>
                </div>
                <p className="text-white font-semibold text-xl">
                  Depuis 2015 : <span className="text-amber-500">500+ jeunes formés</span>,
                  <span className="text-amber-500"> 30+ films produits</span>,
                  <span className="text-amber-500"> 15+ prix en festivals</span>.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src="https://i.vimeocdn.com/video/2116516023-020e736245f88de16250ab86d1f772ca9b2ce7f0db5fb138e9f031b5c92b98d8-d_1280?region=us"
                  alt="Tournage d'un court-métrage Banlieuwood"
                  className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-2xl font-bold text-white mb-2">Formation en action</p>
                  <p className="text-gray-300">Nos formateurs professionnels transmettent leur passion du cinéma</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
            {!playVideo ? (
              <div className="relative group cursor-pointer" onClick={() => setPlayVideo(true)}>
                <img
                  src="https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us"
                  alt="Tournage Banlieuwood"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-center justify-center rounded-2xl">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-30"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-12 h-12 text-black ml-2" fill="black" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-3xl font-bold mb-2">Banlieuwood en 2 minutes</p>
                  <p className="text-xl text-gray-200">Qui on est, ce qu'on fait</p>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://player.vimeo.com/video/1161231299?autoplay=1"
                  title="Banlieuwood - Présentation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="text-amber-500">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-400">Ce qui guide notre action au quotidien</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 text-center hover-lift group relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARCOURS / TIMELINE */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="text-amber-500">Parcours</span>
            </h2>
            <p className="text-xl text-gray-400">2015-2025 : les moments clés</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-amber-500 to-transparent"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 mb-16 animate-slide-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="hidden md:block w-1/2"></div>
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-amber-500 rounded-full -ml-[11px] z-10"></div>
                <div className="flex-1 pl-20 md:pl-0">
                  <div className="glass-strong rounded-2xl p-8 border-2 border-amber-500/30 hover:border-amber-500 transition-all hover-lift">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-amber-500">{milestone.year}</span>
                      <div className="h-12 w-1 bg-amber-500"></div>
                      <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'ÉQUIPE */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="text-amber-500">Équipe</span>
            </h2>
            <p className="text-xl text-gray-400">Les professionnels qui encadrent les ateliers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Adrian YOUNSI', role: 'Président & Fondateur', initials: 'AY', color: 'from-amber-500 to-orange-500' },
              { name: 'Wadi LAADAM', role: 'Producteur', initials: 'WL', color: 'from-blue-500 to-cyan-500' },
              { name: 'Anwar LAADAM', role: 'Producteur', initials: 'AL', color: 'from-green-500 to-emerald-500' },
              { name: 'Romain NDIAYE CHANSAREL', role: 'Producteur', initials: 'RN', color: 'from-purple-500 to-pink-500' },
              { name: 'Sandrine FELQUIN', role: 'Rédactrice en Chef', initials: 'SF', color: 'from-red-500 to-orange-500' },
              { name: 'Alice VALETTE', role: 'Rédactrice en Chef', initials: 'AV', color: 'from-indigo-500 to-blue-500' },
            ].map((member, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex items-center gap-5 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-xl">{member.initials}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  <p className="text-amber-500 text-sm font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGRÉMENTS */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="text-amber-500">Agréments</span>
            </h2>
            <p className="text-xl text-gray-400">Reconnus par les institutions publiques</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Jeunesse & Éducation Populaire', numero: 'JEP-93-2016-042', delivrePar: 'Préfecture de Seine-Saint-Denis', color: 'from-blue-500 to-blue-600' },
              { icon: CheckCircle, title: 'Convention Ville de Saint-Denis', numero: 'CONV-2023-CULT-089', delivrePar: 'Service Culture & Jeunesse', color: 'from-green-500 to-green-600' },
              { icon: Award, title: 'Lauréat Fonds DRAC', numero: 'Île-de-France', delivrePar: 'Direction Régionale des Affaires Culturelles', color: 'from-purple-500 to-purple-600' }
            ].map((agrement, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 hover-lift border-t-4 border-amber-500 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agrement.color} flex items-center justify-center mb-6`}>
                  <agrement.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2">{agrement.title}</h3>
                <p className="text-amber-500 font-mono text-sm mb-2">{agrement.numero}</p>
                <p className="text-gray-400 text-sm">{agrement.delivrePar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Vous Voulez <span className="text-amber-500">Participer</span> ?
            </h2>

            <p className="text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Jeune ? Découvre le programme.<br />
              Établissement ? Organisez un atelier.<br />
              Pro de l'audiovisuel ? Rejoignez l'équipe.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/programme"
                className="btn-primary text-xl py-5 px-8 flex items-center gap-3"
              >
                <Clapperboard className="w-6 h-6" />
                Le Programme
              </Link>
              <Link
                to="/contact"
                className="glass-card text-white font-bold text-xl py-5 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
              >
                Nous Contacter
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
