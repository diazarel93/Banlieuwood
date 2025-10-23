import { Building2, Shield, Users, BookOpen, ArrowRight, CheckCircle, FileText, TrendingUp, AlertTriangle, Heart, Target, Smartphone, UserX, Scale, GraduationCap, Briefcase, ThumbsUp, Quote, Star, Award, Play } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

export default function Institutions() {
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    institution_name: '',
    institution_type: '',
    contact_name: '',
    contact_role: '',
    email: '',
    phone: '',
    city: '',
    project_description: '',
    participants_count: '',
    preferred_format: '',
    budget_range: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('institutional_partnerships')
        .insert([
          {
            institution_name: formData.institution_name,
            institution_type: formData.institution_type,
            contact_name: formData.contact_name,
            contact_role: formData.contact_role,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            project_description: formData.project_description,
            participants_count: formData.participants_count ? parseInt(formData.participants_count) : null,
            preferred_format: formData.preferred_format || null,
            budget_range: formData.budget_range || null,
            timeline: formData.timeline || null,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        institution_name: '',
        institution_type: '',
        contact_name: '',
        contact_role: '',
        email: '',
        phone: '',
        city: '',
        project_description: '',
        participants_count: '',
        preferred_format: '',
        budget_range: '',
        timeline: ''
      });
    } catch (error) {
      console.error('Error submitting partnership request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  // [TODO: VOUS DEVEZ ajouter les sources pour TOUS les chiffres ci-dessous]
  // Ex: "85% de présence" → sur quelle cohorte ? quelle année ? quelle méthodo ?
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Harcèlement Scolaire',
      problem: 'Climat dégradé, violence entre élèves',
      solution: 'Création de films sur le harcèlement : les jeunes racontent, jouent, filment. Expression des émotions par l\'image.',
      results: '[TODO: Ajouter résultats mesurés avec source - ex: questionnaire avant/après sur cohorte X]',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-500/10',
      bgImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg' // Jeunes en conflit
    },
    {
      icon: Smartphone,
      title: 'Réseaux Sociaux',
      problem: 'Cyberharcèlement, désinformation, surexposition',
      solution: 'Éducation aux médias par la pratique : créer du contenu, analyser les images, comprendre la manipulation.',
      results: '[TODO: Résultats mesurés avec source]',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      bgImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg' // Smartphone & réseaux
    },
    {
      icon: UserX,
      title: 'Décrochage Scolaire',
      problem: 'Absentéisme, démotivation, jeunes déconnectés',
      solution: 'Projet collectif sur plusieurs mois : présence obligatoire, rôles distribués, film à finir = motivation.',
      results: '[TODO: Taux de présence mesuré sur cohorte X + comparaison avec assiduité en classe]',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      bgImage: 'https://images.pexels.com/photos/6209236/pexels-photo-6209236.jpeg' // Jeune seul démotivé
    },
    {
      icon: Shield,
      title: 'Prévention Délinquance',
      problem: 'Comportements à risque, désœuvrement',
      solution: 'Ateliers en commissariat, EPM, quartiers sensibles. Encadrement strict, projet structurant.',
      results: '[TODO: Partenariats actifs - ajouter noms précis : Commissariat de X, EPM de Y, Convention signée le Z]',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      bgImage: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg' // Encadrement jeunes
    },
    {
      icon: Heart,
      title: 'Santé Mentale',
      problem: 'Anxiété, mal-être adolescent',
      solution: 'Canal d\'expression créatif : les jeunes racontent leur histoire par le film. Valorisation, confiance.',
      results: '[TODO: Résultats questionnaire bien-être avant/après]',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      bgImage: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg' // Bien-être mental
    },
    {
      icon: Scale,
      title: 'Inégalités d\'Accès',
      problem: 'Fracture culturelle, autocensure, déterminisme',
      solution: '100% gratuit : matériel fourni, formateurs pro, aucun coût pour les familles.',
      results: 'Gratuité totale, aucune exclusion financière',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      bgImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' // Diversité égalité
    }
  ];

  const alignments = [
    {
      institution: 'Éducation Nationale',
      icon: GraduationCap,
      priorities: [
        'Parcours d\'Éducation Artistique et Culturelle (PEAC)',
        'Éducation aux médias et à l\'information (EMI)',
        'Lutte contre le décrochage scolaire',
        'Développement des compétences transversales',
        'Ouverture culturelle et égalité des chances'
      ],
      alignment: 'Nos ateliers s\'inscrivent parfaitement dans le socle commun et les programmes EAC, validables dans Parcours Avenir et parcours culturels.'
    },
    {
      institution: 'Politique de la Ville',
      icon: Building2,
      priorities: [
        'Cohésion sociale dans les QPV',
        'Prévention de la délinquance',
        'Insertion professionnelle des jeunes',
        'Animation des quartiers prioritaires',
        'Valorisation image des territoires'
      ],
      alignment: 'Intervention directe dans les quartiers prioritaires, création d\'opportunités, amélioration du vivre-ensemble et de l\'image territoriale.'
    },
    {
      institution: 'Jeunesse & Sports',
      icon: Users,
      priorities: [
        'Engagement citoyen des jeunes',
        'Pratiques culturelles accessibles',
        'Développement de projets collectifs',
        'Soutien aux initiatives jeunesse',
        'Animation temps périscolaire'
      ],
      alignment: 'Projets collectifs structurants, développement de l\'autonomie, pratique artistique régulière et encadrée professionnellement.'
    },
    {
      institution: 'Culture & Patrimoine',
      icon: BookOpen,
      priorities: [
        'Démocratisation culturelle',
        'Éducation artistique pour tous',
        'Soutien à la création',
        'Formation aux métiers culturels',
        'Rayonnement territorial'
      ],
      alignment: 'Formation artistique de qualité, production d\'œuvres diffusées, révélation de talents, contribution au dynamisme culturel local.'
    }
  ];

  const proofPoints = [
    { metric: '500+', label: 'Jeunes formés depuis 2015', icon: Users },
    { metric: '85%', label: 'Taux insertion professionnelle', icon: TrendingUp },
    { metric: '30+', label: 'Partenariats institutionnels actifs', icon: Briefcase },
    { metric: '15+', label: 'Prix & distinctions obtenus', icon: ThumbsUp }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
            alt="Formation professionnelle"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Building2 className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold">Partenariats Institutionnels</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Pour les Institutions<br />
            <span className="gradient-text">& Collectivités</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-3xl leading-relaxed animate-fade-in stagger-delay-2">
            Vous cherchez des solutions pour le harcèlement, le décrochage, l'insertion ?
          </p>

          <p className="text-xl text-white font-semibold mb-12 max-w-3xl animate-fade-in stagger-delay-3">
            On intervient dans vos établissements avec des ateliers cinéma sur mesure.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="btn-primary text-lg py-4 px-8 shadow-glow-primary flex items-center gap-3"
            >
              Découvrir nos Solutions
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="glass-card text-white font-bold text-lg py-4 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
            >
              Demander un Rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {proofPoints.map((point, i) => (
              <div key={i} className="glass-strong rounded-xl p-6 text-center border-t-4 border-amber-500 hover-lift animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <point.icon className="w-10 h-10 text-amber-500 mx-auto mb-3 animate-float" strokeWidth={1.5} />
                <div className="text-4xl font-bold gradient-text mb-2">{point.metric}</div>
                <p className="text-sm text-gray-400">{point.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="glass-strong rounded-2xl p-8 border-l-4 border-amber-500">
              <h2 className="text-3xl font-bold mb-6">Pourquoi Nous ?</h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">10 ans d'expérience terrain</p>
                    <p className="text-sm">Quartiers prioritaires Seine-Saint-Denis, milieu fermé, établissements sensibles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Équipe 100% professionnelle</p>
                    <p className="text-sm">Vidéastes en activité, formés pédagogie, habilités sécurité</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Résultats mesurables</p>
                    <p className="text-sm">Bilans chiffrés, questionnaires avant/après, attestations compétences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">Clé en main</p>
                    <p className="text-sm">Matériel fourni, assurances, encadrement sécurisé, production garantie</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg"
                alt="Jeunes en atelier cinéma"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-amber-500 flex items-center justify-center shadow-glow">
                  <Play className="w-10 h-10 text-black ml-1" fill="black" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-2xl font-bold text-white mb-2">Voir nos Ateliers en Action</p>
                <p className="text-gray-200">Immersion dans un atelier avec collégiens de Saint-Denis</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-6 text-center hover-lift border-2 border-green-500/30">
              <Star className="w-12 h-12 text-green-500 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2 text-white">Partenaire Police Nationale</h3>
              <p className="text-sm text-gray-400">Interventions préventives en commissariats et actions conjointes</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center hover-lift border-2 border-blue-500/30">
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2 text-white">Agréé Éducation Nationale</h3>
              <p className="text-sm text-gray-400">Habilitation complète, validation PEAC et parcours culturels</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center hover-lift border-2 border-purple-500/30">
              <Shield className="w-12 h-12 text-purple-500 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-2 text-white">Intervention EPM</h3>
              <p className="text-sm text-gray-400">Ateliers en établissements pénitentiaires pour mineurs</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 glass px-6 py-2 rounded-full">
              <p className="text-amber-500 font-bold text-sm uppercase tracking-wide">Solutions Sur Mesure</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Les Problèmes Qu'On <span className="gradient-text">Peut Traiter</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cliquez sur une carte pour voir notre approche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div
                key={i}
                className={`glass-strong rounded-2xl overflow-hidden transition-all duration-300 animate-scale-in ${
                  expandedChallenge === i ? 'md:col-span-2 lg:col-span-3' : 'hover-lift cursor-pointer'
                }`}
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setExpandedChallenge(expandedChallenge === i ? null : i)}
              >
                {expandedChallenge === i ? (
                  /* VERSION EXPANDÉE - Détails complets */
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className={`md:col-span-5 p-8 ${challenge.bgColor} border-r-4 border-amber-500 relative`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedChallenge(null);
                        }}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                      >
                        <span className="text-white text-xl">×</span>
                      </button>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-6 shadow-glow`}>
                        <challenge.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{challenge.title}</h3>
                      <p className="text-amber-500 font-bold mb-2 text-sm uppercase tracking-wide">Problématique</p>
                      <p className="text-gray-300 text-lg leading-relaxed">{challenge.problem}</p>
                    </div>

                    <div className="md:col-span-7 p-8 bg-black/30">
                      <p className="text-amber-500 font-bold mb-3 text-sm uppercase tracking-wide">Notre Approche</p>
                      <p className="text-white text-lg leading-relaxed mb-6">{challenge.solution}</p>

                      <div className="glass-card rounded-xl p-6 border-l-4 border-amber-500">
                        <div className="flex items-start gap-3">
                          <TrendingUp className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">Résultats</p>
                            <p className="text-white text-base">{challenge.results}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-3">
                        <a
                          href="#contact"
                          className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-3 px-6 rounded-xl transition-all text-center"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Demander un Devis
                        </a>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedChallenge(null);
                          }}
                          className="glass-card text-white font-semibold py-3 px-6 rounded-xl border border-white/20 hover:border-amber-500 transition-all"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* VERSION COMPACTE - Aperçu avec image de fond */
                  <div className="relative group overflow-hidden rounded-2xl">
                    {/* Image de fond */}
                    <div className="absolute inset-0">
                      <img
                        src={challenge.bgImage}
                        alt={challenge.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-80`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    </div>

                    {/* Contenu */}
                    <div className="relative p-6">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      <div className={`w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow border border-white/30`}>
                        <challenge.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-300 transition-colors drop-shadow-lg">{challenge.title}</h3>

                      <p className="text-gray-100 text-sm mb-4 line-clamp-2 drop-shadow">{challenge.problem}</p>

                      <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Voir la solution</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm mb-4">Vous avez un enjeu spécifique ?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 glass-card text-amber-400 hover:text-amber-300 font-bold px-8 py-4 text-lg rounded-xl transition-all duration-300 border-2 border-amber-500/30 hover:border-amber-500 hover-lift"
            >
              Parlons de Votre Projet
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Target className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 font-bold">Ce Qu'ils Recherchent</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Compatible Avec <span className="gradient-text">Vos Priorités</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">Nos ateliers répondent aux objectifs de :</p>
          </div>

          <div className="glass-strong rounded-2xl p-8 mb-12 border-2 border-amber-500/30">
            <div className="flex items-start gap-4">
              <Quote className="w-12 h-12 text-amber-500 flex-shrink-0" />
              <div>
                <p className="text-xl md:text-2xl text-white leading-relaxed italic mb-4">
                  "Dans un contexte où les enjeux de cohésion sociale, d'insertion professionnelle et d'éducation citoyenne sont prioritaires,
                  Banlieuwood apporte une réponse concrète et mesurable."
                </p>
                <p className="text-amber-500 font-bold">Nos actions s'inscrivent dans 4 cadres institutionnels majeurs</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {alignments.map((alignment, i) => (
              <div key={i} className="glass-strong rounded-2xl p-8 border-2 border-white/10 hover:border-amber-500/50 transition-all hover-lift animate-scale-in group" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-glow">
                    <alignment.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold">{alignment.institution}</h3>
                </div>

                <div className="mb-6">
                  <p className="text-amber-500 font-bold text-sm mb-3 uppercase tracking-wide flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Leurs Priorités
                  </p>
                  <ul className="space-y-2">
                    {alignment.priorities.map((priority, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Target className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{priority}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card rounded-xl p-5 border-l-4 border-green-500 bg-green-500/5">
                  <p className="text-xs text-green-400 mb-2 font-bold uppercase flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Notre Réponse Concrète
                  </p>
                  <p className="text-white leading-relaxed font-semibold">{alignment.alignment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6">
              <Quote className="w-5 h-5 text-amber-500" />
              <span className="text-amber-400 font-bold">Témoignages Institutionnels</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Témoignages <span className="gradient-text">Partenaires</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">⚠️ Section à remplacer par vrais témoignages (voir code source)</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            <div className="glass-strong rounded-2xl p-8 hover-lift border-l-4 border-blue-500 animate-scale-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  PC
                </div>
                <div>
                  <p className="font-bold text-lg">Commandant P. Courtois</p>
                  <p className="text-sm text-blue-400">Police Nationale - Prévention</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-blue-500/30 mb-3" />
              <p className="text-gray-300 leading-relaxed italic mb-4">
                "Travailler avec Banlieuwood nous permet d'aller au-delà de la répression. Les jeunes découvrent une voie positive et structurante. On observe un vrai changement de comportement."
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 hover-lift border-l-4 border-green-500 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-xl">
                  MD
                </div>
                <div>
                  <p className="font-bold text-lg">Marie Dupont</p>
                  <p className="text-sm text-green-400">Principale Collège R.E.P+</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-green-500/30 mb-3" />
              <p className="text-gray-300 leading-relaxed italic mb-4">
                "Une réponse concrète au décrochage scolaire. Les élèves les plus en difficulté retrouvent motivation et confiance. Le projet cinéma crée un déclic."
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 hover-lift border-l-4 border-purple-500 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  AL
                </div>
                <div>
                  <p className="font-bold text-lg">Ahmed Leroy</p>
                  <p className="text-sm text-purple-400">Chargé Mission Jeunesse - Ville</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-purple-500/30 mb-3" />
              <p className="text-gray-300 leading-relaxed italic mb-4">
                "Banlieuwood répond exactement à nos objectifs de cohésion sociale. Les résultats sont mesurables : baisse des tensions, jeunes impliqués, familles rassurées."
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 border-2 border-amber-500/30">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Formats d'Intervention</h2>
              <p className="text-xl text-gray-400">Adaptables à vos contraintes budgétaires et calendaires</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 glass rounded-xl">
                <div className="text-4xl font-bold text-amber-500 mb-2">1 jour - 1 semaine</div>
                <p className="text-white font-bold mb-2">Interventions Ponctuelles</p>
                <p className="text-sm text-gray-400">Ateliers découverte, stages vacances, événements</p>
                <p className="text-xs text-gray-500 mt-3">À partir de 500€</p>
              </div>

              <div className="text-center p-6 glass rounded-xl border-2 border-amber-500">
                <div className="text-4xl font-bold text-amber-500 mb-2">3 mois</div>
                <p className="text-white font-bold mb-2">Projets Trimestriels</p>
                <p className="text-sm text-gray-400">Séances hebdo, production court-métrage</p>
                <p className="text-xs text-gray-500 mt-3">À partir de 2000€</p>
              </div>

              <div className="text-center p-6 glass rounded-xl">
                <div className="text-4xl font-bold text-amber-500 mb-2">1 an</div>
                <p className="text-white font-bold mb-2">Partenariats Annuels</p>
                <p className="text-sm text-gray-400">Programme sur mesure, formation équipes</p>
                <p className="text-xs text-gray-500 mt-3">Sur devis personnalisé</p>
              </div>
            </div>

            <div className="bg-amber-500/10 border-2 border-amber-500 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ce Qui Est Toujours Inclus</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Matériel professionnel</p>
                    <p className="text-sm text-gray-300">Caméras, micros, lumières, logiciels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Intervenants qualifiés</p>
                    <p className="text-sm text-gray-300">Professionnels diplômés en activité</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Production garantie</p>
                    <p className="text-sm text-gray-300">Films réalisés, diffusables, archivés</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Assurances & RC</p>
                    <p className="text-sm text-gray-300">Couverture complète</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Bilan pédagogique</p>
                    <p className="text-sm text-gray-300">Rapport détaillé, évaluation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white mb-1">Restitution publique</p>
                    <p className="text-sm text-gray-300">Projection, visibilité partenaires</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
            alt="Équipe jeunes tournage"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 glass-card px-5 py-3 rounded-full mb-8">
              <Heart className="w-6 h-6 text-red-500 animate-pulse" />
              <span className="text-white font-bold text-lg">Ils Comptent Sur Nous</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Prêt à Faire <span className="gradient-text">La Différence</span> ?
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8">
              Chaque jour, des jeunes attendent qu'on leur donne leur chance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-strong rounded-2xl p-6 border-2 border-amber-500/30">
              <div className="text-5xl font-bold gradient-text mb-2">48h</div>
              <p className="text-white font-bold mb-1">Réponse rapide</p>
              <p className="text-sm text-gray-400">Devis personnalisé sous 2 jours</p>
            </div>
            <div className="glass-strong rounded-2xl p-6 border-2 border-amber-500/30">
              <div className="text-5xl font-bold gradient-text mb-2">100%</div>
              <p className="text-white font-bold mb-1">Sur mesure</p>
              <p className="text-sm text-gray-400">Projet adapté à vos objectifs</p>
            </div>
            <div className="glass-strong rounded-2xl p-6 border-2 border-amber-500/30">
              <div className="text-5xl font-bold gradient-text mb-2">0€</div>
              <p className="text-white font-bold mb-1">Premier RDV</p>
              <p className="text-sm text-gray-400">Rencontre gratuite sans engagement</p>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-8 border-2 border-green-500/50 bg-green-500/5 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <p className="text-2xl font-bold text-white">Aucun risque, que des bénéfices</p>
            </div>
            <p className="text-lg text-gray-300">
              Nous vous accompagnons de A à Z : montage dossier, recherche financement, mise en œuvre terrain, évaluation résultats.
            </p>
          </div>

          <a
            href="#formulaire"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold text-xl px-12 py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow-strong"
          >
            <FileText className="w-6 h-6" />
            Lancer Mon Projet Maintenant
            <ArrowRight className="w-6 h-6" />
          </a>

          <p className="text-gray-400 text-sm mt-6">
            Ou appelez-nous directement : <span className="text-white font-bold">06 12 34 56 78</span>
          </p>
        </div>
      </section>

      <section id="formulaire" className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Formulaire de Contact</h2>
            <p className="text-xl text-gray-400">Décrivez votre projet, nous construisons ensemble la solution</p>
          </div>

          <div className="glass-strong rounded-3xl p-8 md:p-12 border-2 border-amber-500/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nom de l'institution *</label>
                  <input
                    type="text"
                    required
                    value={formData.institution_name}
                    onChange={(e) => setFormData({ ...formData, institution_name: e.target.value })}
                    placeholder="Ex: Collège Marie Curie"
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Type d'institution *</label>
                  <select
                    required
                    value={formData.institution_type}
                    onChange={(e) => setFormData({ ...formData, institution_type: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionner</option>
                    <option value="college">Collège</option>
                    <option value="lycee">Lycée</option>
                    <option value="ecole">École primaire</option>
                    <option value="mairie">Mairie / Service Jeunesse</option>
                    <option value="conseil">Conseil Départemental</option>
                    <option value="mjc">MJC / Centre Social</option>
                    <option value="prevention">Service Prévention</option>
                    <option value="association">Association</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Votre nom *</label>
                  <input
                    type="text"
                    required
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    placeholder="Prénom Nom"
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Votre fonction *</label>
                  <input
                    type="text"
                    required
                    value={formData.contact_role}
                    onChange={(e) => setFormData({ ...formData, contact_role: e.target.value })}
                    placeholder="Ex: Principal, Chargé de mission..."
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ville *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Ex: Saint-Denis"
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Public cible (nombre estimé)</label>
                  <input
                    type="number"
                    value={formData.participants_count}
                    onChange={(e) => setFormData({ ...formData, participants_count: e.target.value })}
                    placeholder="Ex: 25 jeunes"
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Format souhaité</label>
                  <select
                    value={formData.preferred_format}
                    onChange={(e) => setFormData({ ...formData, preferred_format: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  >
                    <option value="">À définir ensemble</option>
                    <option value="ponctuel">Intervention ponctuelle (1j-1sem)</option>
                    <option value="trimestriel">Projet trimestriel (3 mois)</option>
                    <option value="annuel">Partenariat annuel (1 an)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Échéance souhaitée</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionner</option>
                    <option value="urgent">Urgent (moins d'1 mois)</option>
                    <option value="1-3mois">1 à 3 mois</option>
                    <option value="rentree">Prochaine rentrée scolaire</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Budget envisagé (facultatif)</label>
                <select
                  value={formData.budget_range}
                  onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors"
                >
                  <option value="">À définir / Sur devis</option>
                  <option value="<500">Moins de 500€</option>
                  <option value="500-1000">500€ - 1000€</option>
                  <option value="1000-2500">1000€ - 2500€</option>
                  <option value="2500-5000">2500€ - 5000€</option>
                  <option value=">5000">Plus de 5000€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Décrivez votre projet et vos objectifs *</label>
                <textarea
                  required
                  value={formData.project_description}
                  onChange={(e) => setFormData({ ...formData, project_description: e.target.value })}
                  rows={6}
                  placeholder="Contexte, problématiques ciblées (harcèlement, décrochage, insertion...), public concerné, objectifs pédagogiques, contraintes éventuelles..."
                  className="w-full px-4 py-3 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-lg text-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-gray-700 disabled:to-gray-800 text-black disabled:text-gray-500 font-bold px-8 py-5 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow-strong disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <FileText className="w-5 h-5" />
                    Envoyer la Demande
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="glass-strong p-4 rounded-xl border-2 border-green-500/50">
                  <p className="text-green-500 font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Demande reçue ! Nous vous recontactons sous 48h avec une proposition personnalisée.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="glass-strong p-4 rounded-xl border-2 border-red-500/50">
                  <p className="text-red-500 font-semibold">
                    Erreur lors de l'envoi. Contactez-nous directement : partenariats@banlieuwood.com
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>Contact direct : <span className="text-white font-semibold">06 12 34 56 78</span> - <span className="text-white font-semibold">partenariats@banlieuwood.com</span></p>
          </div>
        </div>
      </section>
    </div>
  );
}
