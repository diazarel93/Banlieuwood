import { Film, Clapperboard, Camera, Users, Sparkles, Target, Zap, Lightbulb, Pencil, Eye, Tablet, ArrowRight, Award, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Ateliers() {
  const modules = [
    { icon: Eye, number: 1, title: 'Observer', subtitle: 'Apprendre à regarder', desc: 'Découvrir que chaque regard raconte une histoire différente.', color: 'from-blue-500 to-cyan-500' },
    { icon: Clapperboard, number: 2, title: 'Comprendre', subtitle: 'La mécanique d\'une scène', desc: 'Personnage + intention + obstacle + changement.', color: 'from-amber-500 to-orange-500' },
    { icon: Lightbulb, number: 3, title: 'Imaginer', subtitle: 'Le "Et si..."', desc: 'Générer des idées d\'histoire à partir d\'images.', color: 'from-yellow-500 to-amber-500' },
    { icon: Target, number: 4, title: 'Clarifier', subtitle: 'Du flou au pitch', desc: 'Transformer une idée en proposition claire en 30 secondes.', color: 'from-green-500 to-emerald-500' },
    { icon: Users, number: 5, title: 'Construire', subtitle: 'L\'histoire collective', desc: 'Assembler les idées individuelles en un récit commun.', color: 'from-teal-500 to-cyan-500' },
    { icon: Pencil, number: 6, title: 'Écrire', subtitle: 'Le scénario', desc: 'Compléter, améliorer, renforcer le scénario collectif.', color: 'from-indigo-500 to-blue-500' },
    { icon: Camera, number: 7, title: 'Visualiser', subtitle: 'La mise en scène', desc: 'Découvrir la grammaire visuelle du cinéma.', color: 'from-purple-500 to-pink-500' },
    { icon: Film, number: 8, title: 'Produire', subtitle: 'L\'équipe de tournage', desc: 'Former une vraie équipe de cinéma, distribuer les rôles.', color: 'from-red-500 to-orange-500' },
  ];

  const formules = [
    {
      number: 1,
      title: 'Découverte',
      modules: 'Modules 1 à 5',
      tournage: 'Non',
      publicCible: 'Collèges, centres culturels',
      desc: 'De l\'observation à la construction d\'une histoire collective. Idéal pour une première expérience.',
      color: 'from-blue-500 to-cyan-500',
      icon: Sparkles,
    },
    {
      number: 2,
      title: 'Création',
      modules: 'Modules 1 à 8',
      tournage: 'Oui (rôle fixe)',
      publicCible: 'Collèges, lycées',
      desc: 'Le parcours complet jusqu\'au film. Chaque élève garde un rôle pendant le tournage.',
      color: 'from-amber-500 to-orange-500',
      icon: Film,
    },
    {
      number: 3,
      title: 'Production',
      modules: 'Modules 1 à 8',
      tournage: 'Oui (rotation)',
      publicCible: 'Lycées, structures jeunesse',
      desc: 'Le parcours complet avec rotation des rôles sur plusieurs demi-journées de tournage.',
      color: 'from-red-500 to-orange-500',
      icon: Camera,
    },
  ];

  const talentProfiles = [
    { emoji: '🎭', name: 'L\'Imaginatif', desc: 'Invente des histoires facilement' },
    { emoji: '👁️', name: 'L\'Observateur', desc: 'Repère les détails que personne ne voit' },
    { emoji: '📖', name: 'Le Narrateur', desc: 'Sait raconter et structurer une histoire' },
    { emoji: '🎬', name: 'Le Metteur en scène', desc: 'A l\'oeil pour la composition visuelle' },
    { emoji: '🎭', name: 'L\'Acteur', desc: 'S\'exprime naturellement devant la caméra' },
    { emoji: '📋', name: 'L\'Organisateur', desc: 'Coordonne, planifie, structure l\'équipe' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* HERO */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.vimeocdn.com/video/2116521612-e85659aaed322b96282e7645b11f02d215acc4f2200760c5f61e4c07658922d7-d_1280?region=us"
            alt="Atelier en action"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold">8 modules • Outil numérique • Tablettes</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Crée Ton <span className="text-amber-500">Film</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Un parcours en 8 modules. De l'observation à la réalisation.
          </p>

          <p className="text-lg text-gray-400 italic max-w-4xl animate-fade-in stagger-delay-3">
            "Les histoires peuvent venir de partout, y compris de leur propre environnement."
          </p>
        </div>
      </section>

      {/* LE PARCOURS EN 8 MODULES */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Le Parcours en <span className="text-amber-500">8 Modules</span>
            </h2>
            <p className="text-xl text-gray-400">Chaque module construit sur le précédent</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl p-8 hover-lift border border-gray-800 animate-scale-in relative" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="text-6xl font-bold text-white/10 absolute top-4 right-4">{String(mod.number).padStart(2, '0')}</div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-6`}>
                  <mod.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-1">{mod.title}</h3>
                <p className="text-amber-500 text-sm font-bold mb-3">{mod.subtitle}</p>
                <p className="text-gray-400 leading-relaxed text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'OUTIL NUMÉRIQUE */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 px-4 py-2 rounded-full mb-6">
                <Tablet className="w-5 h-5 text-amber-500" />
                <span className="text-amber-400 font-bold">Innovation pédagogique</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                L'Outil <span className="text-amber-500">Numérique</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Chaque élève utilise une <span className="text-white font-semibold">tablette</span> avec notre outil interactif dédié.
                </p>

                <div className="bg-gray-900 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <p className="text-2xl font-bold text-white mb-3">30% numérique, 70% humain</p>
                  <p className="text-gray-300">
                    L'outil ne remplace jamais le facilitateur — il accompagne. L'échange, le débat et la création restent au centre.
                  </p>
                </div>

                <p>
                  Entre les séances, l'outil <span className="text-amber-500 font-semibold">génère automatiquement</span> les contenus pour la séance suivante.
                </p>
              </div>
            </div>

            {/* Mockup tablette */}
            <div className="relative">
              <div className="bg-gray-800 rounded-[2rem] p-3 shadow-2xl border border-gray-700">
                <div className="bg-gray-950 rounded-[1.5rem] overflow-hidden">
                  {/* Barre d'app */}
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 flex items-center justify-between">
                    <span className="text-black font-bold text-sm">Module 3 — Imaginer</span>
                    <span className="text-black/60 text-xs">Séance 2/4</span>
                  </div>
                  {/* Contenu simulé */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 text-amber-500" />
                      </div>
                      <p className="text-white font-bold text-sm">Et si cette image racontait...</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                      <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                        <Camera className="w-8 h-8 text-gray-600" />
                      </div>
                      <div className="h-2 bg-gray-700 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-center">
                        <Pencil className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                        <span className="text-amber-400 text-xs font-bold">Écrire</span>
                      </div>
                      <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
                        <Users className="w-4 h-4 text-blue-400 mx-auto mb-1" />
                        <span className="text-blue-400 text-xs font-bold">Voter</span>
                      </div>
                      <div className="flex-1 bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
                        <MessageSquare className="w-4 h-4 text-green-400 mx-auto mb-1" />
                        <span className="text-green-400 text-xs font-bold">Discuter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 FORMULES */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              3 <span className="text-amber-500">Formules</span>
            </h2>
            <p className="text-xl text-gray-400">Adaptées à votre contexte et votre temps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {formules.map((formule, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl p-8 hover-lift border border-gray-800 hover:border-gray-600 transition-all animate-scale-in relative overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${formule.color}`}></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${formule.color} flex items-center justify-center`}>
                    <formule.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase font-bold">Formule {formule.number}</span>
                    <h3 className="text-2xl font-bold">{formule.title}</h3>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{formule.desc}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                    <span className="text-gray-400">Modules</span>
                    <span className="text-white font-bold">{formule.modules}</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                    <span className="text-gray-400">Tournage</span>
                    <span className="text-white font-bold">{formule.tournage}</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                    <span className="text-gray-400">Public</span>
                    <span className="text-white font-bold text-right">{formule.publicCible}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARTE TALENT */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 px-5 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 font-bold">Gamification</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              La Carte <span className="text-amber-500">Talent</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              À la fin du parcours, chaque élève reçoit une carte personnalisée qui met en valeur ses forces créatives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {talentProfiles.map((profile, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-800 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="text-4xl mb-4">{profile.emoji}</div>
                <h4 className="font-bold text-white mb-2">{profile.name}</h4>
                <p className="text-gray-400 text-sm">{profile.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 italic">
              "La carte ne contient jamais de faiblesse — seulement des forces et des pistes à explorer."
            </p>
          </div>
        </div>
      </section>

      {/* POURQUOI REJOINDRE */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi <span className="text-amber-500">Rejoindre</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Tu apprends en faisant',
                desc: 'Pas de cours théoriques. Tu crées dès le premier module.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                title: 'Tu travailles en équipe',
                desc: 'Le cinéma est un art collectif. Tu écoutes, tu proposes, tu construis.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Lightbulb,
                title: 'Tu découvres ton potentiel',
                desc: 'Acteur, scénariste, réalisateur, technicien ? Tu testes tout.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Film,
                title: 'Tu repars avec un film',
                desc: 'Et une Carte Talent qui montre tes forces créatives.',
                color: 'from-amber-500 to-orange-500'
              }
            ].map((reason, i) => (
              <div key={i} className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6`}>
                  <reason.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT S'INSCRIRE */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comment <span className="text-amber-500">S'inscrire</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, number: '1', title: 'Contacte-nous', desc: 'Par le formulaire ou par email. Dis-nous ton âge et ta ville.' },
              { icon: MessageSquare, number: '2', title: 'On te rappelle', desc: 'Sous 48h, on discute de tes disponibilités et du prochain atelier.' },
              { icon: Clapperboard, number: '3', title: 'Tu crées ton film', desc: 'Tu rejoins un groupe et tu commences le parcours. C\'est tout.' },
            ].map((step, i) => (
              <div key={i} className="text-center animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à commencer ?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              100% gratuit. Matériel fourni. Aucun prérequis.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-lg py-4 px-8 flex items-center gap-3"
              >
                Demander les prochaines dates
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/etablissements"
                className="text-white font-bold text-lg py-4 px-8 rounded-xl border border-white/20 hover:border-amber-500/50 transition-all hover-lift flex items-center gap-3"
              >
                Pour les établissements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
