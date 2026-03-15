import { Building2, Shield, Users, BookOpen, ArrowRight, CheckCircle, Lightbulb, Sparkles, Award, ChevronDown, Tablet, Camera, MessageSquare, Target, Heart, Mic, Eye, Puzzle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Institutions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const competences = [
    { icon: Lightbulb, title: 'Créativité & Imagination', desc: 'Inventer des histoires, générer des idées', color: 'from-yellow-500 to-amber-500' },
    { icon: Mic, title: 'Expression orale', desc: 'Pitcher, argumenter, défendre une idée', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, title: 'Écoute & Coopération', desc: 'Travailler en équipe, accepter les compromis', color: 'from-green-500 to-emerald-500' },
    { icon: Puzzle, title: 'Structuration des idées', desc: 'Organiser sa pensée, construire un récit', color: 'from-purple-500 to-pink-500' },
    { icon: Heart, title: 'Confiance en soi', desc: 'Oser proposer, découvrir ses forces', color: 'from-red-500 to-orange-500' },
    { icon: Eye, title: 'Éducation à l\'image', desc: 'Comprendre comment une image transmet une émotion', color: 'from-indigo-500 to-blue-500' },
  ];

  const etapes = [
    { number: '01', title: 'Un intervenant vient dans votre établissement', desc: 'Formateur Banlieuwood certifié', icon: Users },
    { number: '02', title: 'Chaque élève utilise une tablette', desc: 'Outil interactif qui structure l\'expérience', icon: Tablet },
    { number: '03', title: '30% numérique, 70% échanges humains', desc: 'L\'outil accompagne, le facilitateur anime', icon: MessageSquare },
    { number: '04', title: 'Le film collectif', desc: 'Résultat visible d\'un parcours de création', icon: Camera },
  ];

  const faqItems = [
    { q: 'Les élèves ont-ils besoin d\'expérience en cinéma ?', a: 'Non, le programme est conçu pour des débutants complets. Aucun prérequis.' },
    { q: 'Certains élèves risquent-ils de rester passifs ?', a: 'Le dispositif encourage la participation de tous via des activités interactives et des rôles variés. Chaque élève trouve sa place.' },
    { q: 'Quel matériel est nécessaire ?', a: 'Léger et accessible. L\'essentiel est fourni par Banlieuwood : tablettes, caméra, matériel son.' },
    { q: 'Quelle durée prévoir ?', a: 'Modulable. De quelques séances (Formule Découverte) à un programme complet avec tournage (Formule Production).' },
    { q: 'C\'est purement artistique ?', a: 'Non. Le programme développe des compétences transversales : expression, argumentation, écoute, coopération, structuration des idées.' },
    { q: 'Un élève doit-il apparaître dans le film ?', a: 'Non. Certains préfèrent l\'écriture, la technique ou l\'organisation. Toutes les formes de participation sont valorisées.' },
    { q: 'Quel est l\'intérêt pédagogique pour l\'établissement ?', a: 'Un projet concret qui mobilise les élèves autour de la création collective. Développe l\'engagement, la coopération et l\'initiative.' },
    { q: 'Pourquoi choisir Banlieuwood ?', a: 'Un programme structuré, progressif et ludique. 8 modules testés. Un outil numérique dédié. Des intervenants formés.' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* HERO */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg"
            alt="Atelier en établissement"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Shield className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold text-sm">Agréé Jeunesse & Éducation Populaire • Éducation Artistique et Culturelle</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Un programme cinéma pour<br />
            <span className="gradient-text">votre établissement</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            8 modules interactifs pour développer créativité, expression et coopération.
          </p>

          <Link
            to="/contact"
            className="btn-primary text-xl py-5 px-8 shadow-glow-primary inline-flex items-center gap-3 animate-fade-in stagger-delay-3"
          >
            Organiser un atelier
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* LE CONSTAT */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-10 md:p-14 border-l-4 border-amber-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Le Constat</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Les jeunes consomment des images toute la journée — films, séries, réseaux sociaux — mais ne comprennent jamais comment elles sont fabriquées.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Ils voient le résultat, jamais le processus.
            </p>
            <p className="text-2xl text-white font-bold">
              Banlieuwood les fait passer de <span className="gradient-text">spectateur à créateur</span>.
            </p>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES DÉVELOPPÉES */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que développe <span className="gradient-text">le programme</span>
            </h2>
            <p className="text-xl text-gray-400">6 compétences transversales</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map((comp, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center mb-6 shadow-glow`}>
                  <comp.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{comp.title}</h3>
                <p className="text-gray-400 leading-relaxed">{comp.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 italic text-lg max-w-3xl mx-auto">
              "Le cinéma est le prétexte. Les compétences développées vont bien au-delà du domaine artistique."
            </p>
          </div>
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comment ça se <span className="gradient-text">passe</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapes.map((etape, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 hover-lift border-t-4 border-amber-500 animate-scale-in relative" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-6xl font-bold text-white/10 absolute top-4 right-4">{etape.number}</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6 shadow-glow">
                  <etape.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">{etape.title}</h3>
                <p className="text-gray-400 text-sm">{etape.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LES FORMULES */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les <span className="gradient-text">Formules</span>
            </h2>
            <p className="text-xl text-gray-400">Adaptables à votre contexte</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: 1,
                title: 'Découverte',
                modules: 'Modules 1 à 5',
                tournage: 'Non',
                desc: 'De l\'observation à la construction d\'une histoire collective.',
                color: 'from-blue-500 to-cyan-500',
                icon: Sparkles,
              },
              {
                number: 2,
                title: 'Création',
                modules: 'Modules 1 à 8',
                tournage: 'Oui (rôle fixe)',
                desc: 'Le parcours complet jusqu\'au film.',
                color: 'from-amber-500 to-orange-500',
                icon: BookOpen,
              },
              {
                number: 3,
                title: 'Production',
                modules: 'Modules 1 à 8',
                tournage: 'Oui (rotation)',
                desc: 'Le parcours complet avec rotation des rôles.',
                color: 'from-red-500 to-orange-500',
                icon: Camera,
              },
            ].map((formule, i) => (
              <div key={i} className="glass-strong rounded-3xl p-8 hover-lift border-2 border-white/10 hover:border-amber-500 transition-all animate-scale-in relative overflow-hidden" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${formule.color}`}></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${formule.color} flex items-center justify-center shadow-glow`}>
                    <formule.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 uppercase font-bold">Formule {formule.number}</span>
                    <h3 className="text-2xl font-bold">{formule.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{formule.desc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                    <span className="text-gray-400">Modules</span>
                    <span className="text-white font-bold">{formule.modules}</span>
                  </div>
                  <div className="flex items-center justify-between bg-black/30 p-3 rounded-lg">
                    <span className="text-gray-400">Tournage</span>
                    <span className="text-white font-bold">{formule.tournage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Adaptable au temps scolaire ou périscolaire',
              'Compatible avec les projets d\'établissement',
              'S\'inscrit dans l\'Éducation Artistique et Culturelle (EAC)',
              'Finançable par les collectivités territoriales',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 glass-card p-4 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ÉTABLISSEMENTS */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Questions <span className="gradient-text">Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden border border-white/10">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                  </div>
                )}
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
              Agréments & <span className="gradient-text">Reconnaissances</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: 'Jeunesse & Éducation Populaire', numero: 'JEP-93-2016-042', delivrePar: 'Préfecture de Seine-Saint-Denis', color: 'from-blue-500 to-blue-600' },
              { icon: CheckCircle, title: 'Convention Ville de Saint-Denis', numero: 'CONV-2023-CULT-089', delivrePar: 'Service Culture & Jeunesse', color: 'from-green-500 to-green-600' },
              { icon: Award, title: 'Lauréat Fonds DRAC', numero: 'Île-de-France', delivrePar: 'Direction Régionale des Affaires Culturelles', color: 'from-purple-500 to-purple-600' },
            ].map((agrement, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 hover-lift border-t-4 border-amber-500 animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agrement.color} flex items-center justify-center mb-6 shadow-glow`}>
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

      {/* ARGUMENTAIRE */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi <span className="gradient-text">ce programme</span> ?
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { title: 'Éducation Artistique et Culturelle', desc: 'S\'inscrit dans les programmes EAC reconnus par le ministère.' },
              { title: 'Projets interdisciplinaires', desc: 'Compatible avec les semaines thématiques et projets de classe.' },
              { title: 'Financements accessibles', desc: 'Finançable par les collectivités territoriales et appels à projets culturels.' },
              { title: 'Transversal', desc: 'Les enseignants peuvent l\'utiliser pour travailler l\'oral, l\'écrit et le collectif.' },
            ].map((point, i) => (
              <div key={i} className="glass-card rounded-xl p-6 flex items-start gap-4 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white mb-1">{point.title}</h4>
                  <p className="text-gray-400 text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 italic text-lg">
              "La créativité n'est pas réservée à une élite."
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-2 border-amber-500/30">
            <Building2 className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Organisez un programme cinéma dans <span className="gradient-text">votre établissement</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Contactez-nous pour discuter de votre projet et adapter notre programme à vos besoins.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="btn-primary text-xl py-5 px-8 shadow-glow-primary flex items-center gap-3"
              >
                Nous contacter
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
