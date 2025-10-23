import { Film, MapPin, Users, Heart, Target, Award, Clapperboard, TrendingUp, Play, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
  const [playVideo, setPlayVideo] = useState(false);

  const impactNumbers = [
    {
      number: '500+',
      label: 'Jeunes formés',
      sublabel: 'depuis 2015',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '30+',
      label: 'Films produits',
      sublabel: 'courts et longs métrages',
      icon: Film,
      color: 'from-amber-500 to-orange-500'
    },
    {
      number: '15+',
      label: 'Sélections festivals',
      sublabel: 'nationaux et internationaux',
      icon: Award,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '85%',
      label: 'Poursuivent en audiovisuel',
      sublabel: 'étude interne 2023 (n=47)',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const values = [
    {
      icon: MapPin,
      title: 'Ancrage local',
      description: 'À Saint-Denis depuis 2015, au coeur des quartiers populaires',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Équipe pro',
      description: 'Cinéastes et formateurs passionnés par la transmission',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Inclusion totale',
      description: '100% gratuit, accessible à tous sans condition',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Target,
      title: 'Impact réel',
      description: 'Des compétences professionnelles et des carrières lancées',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // [TODO: VOUS DEVEZ ajouter les preuves pour chaque milestone]
  // Ex: lien vers article de presse, scan du diplôme, lien vers page festival
  const milestones = [
    { year: '2015', title: 'Création', desc: 'Premiers ateliers à Saint-Denis avec 12 jeunes' },
    { year: '2017', title: 'Premier Prix', desc: '[TODO: Quel film ? Quel festival exactement ? Lien vers palmarès]' },
    { year: '2019', title: 'Expansion', desc: '[TODO: Nommer 3-4 structures partenaires avec liens]' },
    { year: '2021', title: 'Sélection Festival', desc: '[TODO: Quel film sélectionné ? Quel festival ? Preuve ?]' },
    { year: '2023', title: '500 Jeunes', desc: 'Bilan 2015-2023 : 500+ jeunes formés (étude interne)' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg"
            alt="Équipe en plein tournage de court-métrage"
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
              <span className="gradient-text text-glow">Des Quartiers</span>
            </h1>

            <p className="text-3xl md:text-4xl text-amber-400 font-light italic mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              "Nous sommes là où le cinéma<br />ne nous attend pas."
            </p>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Former des jeunes au cinéma. Produire des films. Créer des opportunités.
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/ateliers"
                className="btn-primary text-xl py-5 px-8 shadow-glow-primary flex items-center gap-3"
              >
                <Clapperboard className="w-6 h-6" />
                Nos Ateliers
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

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
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
                  <stat.icon className="w-12 h-12 text-amber-500 mx-auto mb-4 animate-float" strokeWidth={1.5} />
                  <div className="text-5xl font-bold gradient-text mb-3">{stat.number}</div>
                  <p className="text-xl font-bold text-white">{stat.label}</p>
                  <p className="text-xs text-gray-500 mt-2">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span className="text-amber-400 font-bold">Notre Histoire</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Comment Ça a<br />
                <span className="gradient-text">Commencé</span>
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
                  src="https://images.pexels.com/photos/7234257/pexels-photo-7234257.jpeg"
                  alt="Atelier de formation Banlieuwood"
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

          {/* [TODO: VOUS DEVEZ remplacer par votre VRAIE vidéo de présentation]
              Options : YouTube, Vimeo, ou vidéo hébergée
              Durée recommandée : 2-3 minutes max
              Contenu : équipe qui se présente, extraits d'ateliers, témoignages */}
          <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
            {!playVideo ? (
              <div className="relative group cursor-pointer" onClick={() => setPlayVideo(true)}>
                {/* [TODO: REMPLACER cette image Pexels par vraie photo de vos ateliers] */}
                <img
                  src="https://images.pexels.com/photos/7234399/pexels-photo-7234399.jpeg"
                  alt="Tournage en cours"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all flex items-center justify-center rounded-2xl">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-50 animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
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
                {/* [TODO: REMPLACER par votre vraie vidéo - ex: https://www.youtube.com/embed/VOTRE_VIDEO_ID] */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://player.vimeo.com/video/515298131?autoplay=1"
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

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="gradient-text">Valeurs</span>
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
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform`}>
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

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="gradient-text">Parcours</span>
            </h2>
            <p className="text-xl text-gray-400">2015-2024 : les moments clés</p>
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

                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-amber-500 rounded-full -ml-[11px] z-10 shadow-glow animate-pulse"></div>

                <div className="flex-1 pl-20 md:pl-0">
                  <div className="glass-strong rounded-2xl p-8 border-2 border-amber-500/30 hover:border-amber-500 transition-all hover-lift">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold gradient-text">{milestone.year}</span>
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

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              En Images
            </h2>
            <p className="text-xl text-gray-400">[TODO: Remplacer toutes ces photos Pexels par vos vraies photos]</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg",
                title: "Prise de vue",
                desc: "Jeune réalisatrice au cadrage"
              },
              {
                src: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
                title: "Travail d'équipe",
                desc: "Coordination sur le plateau"
              },
              {
                src: "https://images.pexels.com/photos/8613314/pexels-photo-8613314.jpeg",
                title: "Le bon angle",
                desc: "Recherche du cadre parfait"
              },
              {
                src: "https://images.pexels.com/photos/7234399/pexels-photo-7234399.jpeg",
                title: "Concentration",
                desc: "Direction d'acteurs"
              },
              {
                src: "https://images.pexels.com/photos/7234257/pexels-photo-7234257.jpeg",
                title: "Formation",
                desc: "Atelier technique pro"
              },
              {
                src: "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg",
                title: "Action",
                desc: "En plein tournage"
              }
            ].map((photo, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3] animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-xl font-bold mb-1">{photo.title}</p>
                  <p className="text-gray-300 text-sm">{photo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="gradient-text">Équipe</span>
            </h2>
            <p className="text-xl text-gray-400">L'équipe qui encadre les ateliers</p>
          </div>

          {/* [TODO: URGENT - VOUS DEVEZ remplacer par vos VRAIS noms et photos]
              Format attendu :
              {
                name: 'Prénom Nom COMPLET',
                role: 'Fonction exacte',
                photo: '/chemin/vers/vraie/photo.jpg',
                bio: 'Expérience réelle + parcours vérifié',
                linkedin: 'URL LinkedIn (optionnel mais recommandé)'
              }
              SANS VRAIS NOMS = ZÉRO CRÉDIBILITÉ */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-24">
            {[
              {
                name: '[VOTRE NOM]',
                role: 'Fondateur & Réalisateur',
                photo: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
                bio: '[Votre parcours réel - ex: "15 ans en prod, diplômé FEMIS, films diffusés sur Canal+"]',
                color: 'from-amber-500 to-orange-500'
              },
              {
                name: '[NOM RÉEL]',
                role: 'Directeur/trice Pédagogique',
                photo: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg',
                bio: '[Parcours formation + expérience terrain]',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: '[NOM RÉEL]',
                role: 'Chef Opérateur',
                photo: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg',
                bio: '[Expérience cadreur + références films]',
                color: 'from-purple-500 to-pink-500'
              },
              {
                name: '[NOM RÉEL]',
                role: 'Monteur',
                photo: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
                bio: '[Expérience montage + logiciels maîtrisés]',
                color: 'from-green-500 to-emerald-500'
              },
              {
                name: '[NOM RÉEL]',
                role: 'Ingénieur Son',
                photo: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
                bio: '[Expérience son + références]',
                color: 'from-red-500 to-orange-500'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden hover-lift group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${member.color} shadow-glow animate-pulse`}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${member.color} text-white mb-3`}>
                    {member.role}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-2 border-amber-500/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Vous Voulez <span className="gradient-text">Participer</span> ?
            </h2>

            <p className="text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Jeune ? Inscris-toi aux ateliers.<br />
              Pro de l'audiovisuel ? On recrute des formateurs.<br />
              Entreprise ou institution ? Parlons partenariat.
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
