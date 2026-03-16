import { ArrowRight, Tablet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Ateliers() {
  const scrollRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-black text-white pt-20" ref={scrollRef}>
      {/* HERO — typographique */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto" data-reveal>
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-6">8 modules • 100% gratuit</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1.05]">
            Crée ton<br />
            <span className="text-amber-500">film</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Un parcours en 8 modules. De l'observation à la réalisation. Encadré par des pros du cinéma.
          </p>
        </div>
      </section>

      {/* LES 8 MODULES — liste verticale, pas grille de cartes */}
      <section className="py-20 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-reveal>
            Le parcours en <span className="text-amber-500">8 modules</span>
          </h2>
          <p className="text-gray-400 mb-12" data-reveal>Chaque module construit sur le précédent</p>

          <div className="space-y-0">
            {[
              { title: 'Observer', desc: 'Apprendre à regarder — chaque regard raconte une histoire différente' },
              { title: 'Comprendre', desc: 'La mécanique d\'une scène : personnage + intention + obstacle + changement' },
              { title: 'Imaginer', desc: 'Le "Et si..." — générer des idées d\'histoire à partir d\'images' },
              { title: 'Clarifier', desc: 'Du flou au pitch — transformer une idée en proposition claire en 30 secondes' },
              { title: 'Construire', desc: 'L\'histoire collective — assembler les idées en un récit commun' },
              { title: 'Écrire', desc: 'Le scénario — compléter, améliorer, renforcer le récit collectif' },
              { title: 'Visualiser', desc: 'La mise en scène — découvrir la grammaire visuelle du cinéma' },
              { title: 'Produire', desc: 'L\'équipe de tournage — distribuer les rôles, former une vraie équipe de cinéma' },
            ].map((mod, i) => (
              <div
                key={i}
                className="flex gap-6 py-6 border-b border-gray-800/50 last:border-0"
                data-reveal
                data-reveal-delay={String(i * 50)}
              >
                <span className="text-amber-500/60 font-bold text-sm w-8 flex-shrink-0 pt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-white font-semibold text-lg">{mod.title}</p>
                  <p className="text-gray-400">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'OUTIL NUMÉRIQUE — éditorial split */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center" data-reveal>
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Tablet className="w-5 h-5 text-amber-500" />
                <span className="text-amber-500 font-bold text-sm uppercase tracking-widest">Innovation pédagogique</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                L'outil numérique
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Chaque élève utilise une <span className="text-white font-semibold">tablette</span> avec notre outil interactif dédié.
                </p>

                <div className="border-l-2 border-amber-500 pl-6">
                  <p className="text-xl font-bold text-white mb-2">30% numérique, 70% humain</p>
                  <p className="text-gray-400">
                    L'outil ne remplace jamais le facilitateur — il accompagne. L'échange, le débat et la création restent au centre.
                  </p>
                </div>

                <p>
                  Entre les séances, l'outil <span className="text-amber-500 font-semibold">génère automatiquement</span> les contenus pour la séance suivante.
                </p>
              </div>
            </div>

            {/* Tablette mockup simplifié */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-3 border border-gray-800">
                <div className="bg-black rounded-xl overflow-hidden">
                  <div className="bg-amber-500 px-5 py-3 flex items-center justify-between">
                    <span className="text-black font-bold text-sm">Module 3 — Imaginer</span>
                    <span className="text-black/60 text-xs">Séance 2/4</span>
                  </div>
                  <div className="p-5 space-y-4">
                    <p className="text-white font-bold text-sm">Et si cette image racontait...</p>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                      <div className="h-20 bg-gray-800 rounded-lg mb-3"></div>
                      <div className="h-2 bg-gray-800 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-800 rounded w-1/2"></div>
                    </div>
                    <div className="flex gap-2 text-xs font-bold">
                      <span className="flex-1 text-center py-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">Écrire</span>
                      <span className="flex-1 text-center py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">Voter</span>
                      <span className="flex-1 text-center py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">Discuter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 FORMULES — horizontal, pas cartes empilées */}
      <section className="py-20 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-reveal>
            3 formules
          </h2>
          <p className="text-gray-400 mb-12" data-reveal>Adaptées à votre contexte et votre temps</p>

          <div className="space-y-0">
            {[
              { title: 'Découverte', modules: '1 à 5', tournage: 'Non', public: 'Collèges, centres culturels', desc: 'De l\'observation à la construction d\'une histoire collective.' },
              { title: 'Création', modules: '1 à 8', tournage: 'Oui (rôle fixe)', public: 'Collèges, lycées', desc: 'Le parcours complet jusqu\'au film. Chaque élève garde un rôle.' },
              { title: 'Production', modules: '1 à 8', tournage: 'Oui (rotation)', public: 'Lycées, structures jeunesse', desc: 'Parcours complet avec rotation des rôles sur plusieurs tournages.' },
            ].map((f, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-4 py-8 border-b border-gray-800/50 last:border-0 items-start"
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <div className="md:col-span-3">
                  <span className="text-amber-500/60 font-bold text-xs">Formule {i + 1}</span>
                  <h3 className="text-xl font-bold text-white">{f.title}</h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-gray-300">{f.desc}</p>
                </div>
                <div className="md:col-span-4 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Modules</span>
                    <span className="text-white font-medium">{f.modules}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Tournage</span>
                    <span className="text-white font-medium">{f.tournage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Public</span>
                    <span className="text-white font-medium text-right">{f.public}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT S'INSCRIRE — 3 étapes inline */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-reveal>
            Comment s'inscrire ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { n: '1', title: 'Contacte-nous', desc: 'Par le formulaire ou par email. Dis-nous ton âge et ta ville.' },
              { n: '2', title: 'On te rappelle', desc: 'Sous 48h, on discute de tes disponibilités et du prochain atelier.' },
              { n: '3', title: 'Tu crées ton film', desc: 'Tu rejoins un groupe et tu commences le parcours. C\'est tout.' },
            ].map((step, i) => (
              <div key={i} data-reveal data-reveal-delay={String(i * 80)}>
                <span className="text-amber-500/60 font-bold text-4xl logo-font">{step.n}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — minimal */}
      <section className="py-32 px-4 bg-gray-950 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            100% gratuit. Matériel fourni. Aucun prérequis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-lg"
            >
              Demander les prochaines dates
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/etablissements"
              className="inline-flex items-center justify-center gap-3 text-white border border-white/20 hover:border-white/40 font-medium px-10 py-5 text-lg rounded-xl transition-all duration-300"
            >
              Pour les établissements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}