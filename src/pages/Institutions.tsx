import { Building2, Shield, Users, ArrowRight, CheckCircle, Lightbulb, Award, ChevronDown, Tablet, Camera, MessageSquare, Heart, Mic, Eye, Puzzle, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Institutions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useScrollReveal();

  const competences = [
    { icon: Lightbulb, title: 'Créativité & Imagination', desc: 'Inventer des histoires, générer des idées' },
    { icon: Mic, title: 'Expression orale', desc: 'Pitcher, argumenter, défendre une idée' },
    { icon: Users, title: 'Écoute & Coopération', desc: 'Travailler en équipe, accepter les compromis' },
    { icon: Puzzle, title: 'Structuration des idées', desc: 'Organiser sa pensée, construire un récit' },
    { icon: Heart, title: 'Confiance en soi', desc: 'Oser proposer, découvrir ses forces' },
    { icon: Eye, title: 'Éducation à l\'image', desc: 'Comprendre comment une image transmet une émotion' },
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
    <div className="min-h-screen bg-black text-white pt-20" ref={scrollRef}>
      {/* HERO — style sobre, fond uni */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-5 py-2 rounded-full mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm">Association loi 1901 • Saint-Denis (93)</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in stagger-delay-1">
            Un programme cinéma<br />pour <span className="text-blue-400">votre établissement</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl leading-relaxed animate-fade-in stagger-delay-2">
            Vos élèves consomment des images toute la journée, mais ne comprennent jamais comment elles sont fabriquées. On les fait passer de spectateur à créateur.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in stagger-delay-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/25"
            >
              Organiser un atelier
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/programme"
              className="inline-flex items-center gap-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Voir le programme
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO — atelier en action */}
      <section className="px-4 py-12 bg-black border-y border-gray-800">
        <div className="max-w-6xl mx-auto" data-reveal>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img src="/images/groupe-jeunes.webp" alt="Groupe de jeunes participants aux ateliers cinéma Banlieuwood à Saint-Denis (93) — programme gratuit pour collèges et lycées" className="w-full h-full object-cover object-[100%_20%]" width={640} height={480} loading="lazy" />
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img src="/images/atelier-camera.webp" alt="Professionnel du cinéma encadrant un jeune participant lors d'un atelier caméra — intervention Banlieuwood en établissement scolaire" className="w-full h-full object-cover object-[100%_30%]" width={640} height={480} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ILS NOUS ONT FAIT CONFIANCE */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto" data-reveal>
          <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-8 text-center">Établissements partenaires</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Collège Grands Champs', city: 'Poissy (78)', film: 'L\'Interrogatoire, Silence Moteur Action' },
              { name: 'Collège Blaise Pascal', city: 'Plaisir (78)', film: 'Délégué des Tas' },
              { name: 'Établissements scolaires', city: 'Aubervilliers (93)', film: 'Snap peut nuire à votre santé' },
            ].map((partner, i) => (
              <div key={i} className="border border-gray-800 rounded-xl p-6 hover:border-blue-500/20 transition-colors" data-reveal data-reveal-delay={String(i * 80)}>
                <p className="text-white font-bold mb-1">{partner.name}</p>
                <p className="text-blue-400 text-sm mb-3">{partner.city}</p>
                <p className="text-gray-500 text-xs">Films réalisés : {partner.film}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm text-center mt-6">
            + établissements à Rosny-sous-Bois (93), Créteil (94), Roissy-en-Brie (77), Saint-Denis (93)
          </p>
        </div>
      </section>

      {/* COMPÉTENCES — liste horizontale avec trait bleu */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">Compétences transversales</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ce que développe le programme
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Le cinéma est le prétexte. Les compétences développées vont bien au-delà du domaine artistique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {competences.map((comp, i) => (
              <div key={i} className="flex items-start gap-5 group animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <comp.icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{comp.title}</h3>
                  <p className="text-gray-400">{comp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE — stepper horizontal */}
      <section className="py-24 px-4 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">Déroulement</p>
            <h2 className="text-4xl md:text-5xl font-bold">Comment ça se passe</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {[
              { number: '1', title: 'Un intervenant vient chez vous', desc: 'Formateur Banlieuwood certifié', icon: Users },
              { number: '2', title: 'Chaque élève a une tablette', desc: 'Outil interactif dédié', icon: Tablet },
              { number: '3', title: '30% numérique, 70% humain', desc: 'L\'outil accompagne, le facilitateur anime', icon: MessageSquare },
              { number: '4', title: 'Un film collectif', desc: 'Résultat visible du parcours', icon: Camera },
            ].map((step, i) => (
              <div key={i} className="relative px-6 py-8 text-center group">
                {/* Connecting line */}
                {i < 3 && <div className="hidden md:block absolute top-[52px] left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-blue-500/40 to-blue-500/10"></div>}

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                    <span className="text-blue-400 font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm leading-snug">{step.title}</h3>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULES — tableau comparatif (pas des cards) */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">Nos offres</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Les Formules</h2>
            <p className="text-gray-400 text-lg">Adaptables à votre contexte et votre temps disponible.</p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-gray-800">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th className="px-6 py-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Formule</th>
                  <th className="px-6 py-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Modules</th>
                  <th className="px-6 py-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Tournage</th>
                  <th className="px-6 py-5 text-gray-400 font-medium text-sm uppercase tracking-wider">Public cible</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Découverte', modules: '1 à 5', tournage: 'Non', public: 'Collèges, centres culturels', desc: 'Première expérience cinéma' },
                  { name: 'Création', modules: '1 à 8', tournage: 'Oui (rôle fixe)', public: 'Collèges, lycées', desc: 'Parcours complet jusqu\'au film' },
                  { name: 'Production', modules: '1 à 8', tournage: 'Oui (rotation)', public: 'Lycées, structures jeunesse', desc: 'Rotation des rôles sur le tournage' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-800/50 hover:bg-gray-900/50 transition-colors">
                    <td className="px-6 py-5">
                      <div>
                        <span className="font-bold text-white text-lg">{row.name}</span>
                        <p className="text-gray-500 text-sm mt-1">{row.desc}</p>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20">{row.modules}</span>
                    </td>
                    <td className="px-6 py-5 text-gray-300">{row.tournage}</td>
                    <td className="px-6 py-5 text-gray-400 text-sm">{row.public}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {[
              { name: 'Découverte', modules: '1 à 5', tournage: 'Non', public: 'Collèges, centres culturels', desc: 'Première expérience cinéma' },
              { name: 'Création', modules: '1 à 8', tournage: 'Oui (rôle fixe)', public: 'Collèges, lycées', desc: 'Parcours complet' },
              { name: 'Production', modules: '1 à 8', tournage: 'Oui (rotation)', public: 'Lycées, structures jeunesse', desc: 'Rotation des rôles' },
            ].map((row, i) => (
              <div key={i} className="border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-white text-xl mb-1">{row.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{row.desc}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">Modules</span><span className="text-blue-300">{row.modules}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Tournage</span><span className="text-gray-300">{row.tournage}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Public</span><span className="text-gray-400">{row.public}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
              'Adaptable au temps scolaire ou périscolaire',
              'S\'inscrit dans l\'Éducation Artistique et Culturelle (EAC)',
              'Compatible avec les projets d\'établissement',
              'Finançable par les collectivités territoriales',
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CADRE INSTITUTIONNEL — PEAC, socle commun, dispositifs */}
      <section className="py-24 px-4 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">Cadre institutionnel</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">S'inscrit dans les dispositifs officiels</h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Notre programme est conçu pour répondre aux cadres de l'Éducation Nationale et des collectivités territoriales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PEAC */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-blue-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white text-lg">PEAC</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Parcours d'Éducation Artistique et Culturelle — les 3 piliers sont couverts :
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Rencontres</strong> — avec des professionnels du cinéma en activité</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Pratiques</strong> — écriture, jeu d'acteur, tournage, post-production</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Connaissances</strong> — analyse d'image, narration, grammaire cinématographique</span>
                </li>
              </ul>
            </div>

            {/* Socle commun */}
            <div className="border border-gray-800 rounded-xl p-8 hover:border-blue-500/20 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white text-lg">Socle commun</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Contribue à 3 domaines du socle commun de compétences :
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Domaine 1</strong> — Langages : expression orale, argumentation, pitch</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Domaine 3</strong> — Citoyenneté : coopération, écoute, vivre-ensemble</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300"><strong className="text-white">Domaine 5</strong> — Culture : éducation à l'image, création artistique</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dispositifs et financements */}
          <div className="mt-8 border border-gray-800 rounded-xl p-8 hover:border-blue-500/20 transition-colors">
            <h3 className="font-bold text-white text-lg mb-6">Dispositifs et financements éligibles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-blue-400 font-bold text-sm mb-3">Éducation Nationale</p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• EAC / PEAC</li>
                  <li>• Pass Culture (part collective)</li>
                  <li>• Projets d'établissement</li>
                  <li>• Cité Éducative</li>
                  <li>• Contrat Local d'Accompagnement (CLAS)</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-400 font-bold text-sm mb-3">Collectivités territoriales</p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• Politique de la Ville / Contrat de Ville</li>
                  <li>• Conseil Départemental (93)</li>
                  <li>• Conseil Régional Île-de-France</li>
                  <li>• Mairie / Intercommunalité</li>
                  <li>• Programme de Réussite Éducative (PRE)</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-400 font-bold text-sm mb-3">Autres financements</p>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• DRAC Île-de-France</li>
                  <li>• FDVA (Fonds de Vie Associative)</li>
                  <li>• CAF 93</li>
                  <li>• Fondations privées</li>
                  <li>• Mécénat d'entreprise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — style ligne, pas accordion cards */}
      <section className="py-24 px-4 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold">Questions fréquentes</h2>
          </div>

          <div className="divide-y divide-gray-800">
            {faqItems.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-lg font-medium text-gray-200 pr-4 group-hover:text-white transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="pb-6 animate-fade-in">
                    <p className="text-gray-400 leading-relaxed pl-0">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CADRE — honnête et clair */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-3">Notre cadre</p>
            <h2 className="text-4xl md:text-5xl font-bold">Garanties & engagements</h2>
          </div>

          <div className="space-y-4">
            {[
              { icon: Shield, title: 'Association loi 1901', desc: 'Déclarée en préfecture de Seine-Saint-Denis — gestion désintéressée et transparente' },
              { icon: CheckCircle, title: 'Programme structuré et éprouvé', desc: '8 modules testés depuis 2015, plus de 500 jeunes formés, 30+ films produits' },
              { icon: Award, title: 'Intervenants professionnels', desc: 'Encadrement par des professionnels du cinéma et de l\'audiovisuel en activité' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL — sobre, pro */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Organisez un programme cinéma<br />dans votre établissement
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et adapter notre programme à vos besoins.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold px-10 py-5 text-xl rounded-xl transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/25"
          >
            Nous contacter
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
