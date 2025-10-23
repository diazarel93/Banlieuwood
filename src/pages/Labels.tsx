import { Award, Shield, CheckCircle, Star, Trophy, Stamp, ExternalLink, FileCheck } from 'lucide-react';

export default function Labels() {
  const agrements = [
    {
      icon: Shield,
      title: 'Agréé Jeunesse & Éducation Populaire',
      numero: 'JEP-93-2016-042',
      delivrePar: 'Préfecture de Seine-Saint-Denis',
      date: 'Mars 2016',
      duree: 'Renouvelé tous les 5 ans',
      description: 'Cet agrément reconnaît notre engagement dans l\'éducation populaire et la formation des jeunes. Il nous permet de recevoir des subventions publiques et de conventionner avec les collectivités.',
      avantages: [
        'Éligible aux financements FDVA',
        'Conventionnement avec collectivités',
        'Reconnaissance expertise jeunesse',
        'Accès dispositifs Jeunesse & Sports'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Partenaire Éducation Nationale',
      numero: 'En cours d\'instruction',
      delivrePar: 'Rectorat de Créteil',
      date: 'Dossier déposé janvier 2024',
      duree: '3 ans renouvelables',
      description: 'L\'agrément Éducation Nationale nous permettra d\'intervenir officiellement dans les établissements scolaires sur le temps scolaire et de co-construire des projets pédagogiques validés.',
      avantages: [
        'Intervention temps scolaire',
        'Co-construction programmes EAC',
        'Référencement académique',
        'Formations certifiantes'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Conventionné Ville de Saint-Denis',
      numero: 'CONV-2023-CULT-089',
      delivrePar: 'Service Culture & Jeunesse',
      date: 'Janvier 2023',
      duree: 'Convention triennale 2023-2025',
      description: 'Convention pluriannuelle d\'objectifs avec la Ville de Saint-Denis pour la mise en œuvre de nos actions culturelles et éducatives sur le territoire communal.',
      avantages: [
        'Subvention annuelle garantie',
        'Mise à disposition de locaux',
        'Visibilité communication municipale',
        'Partenariat événements ville'
      ],
      color: 'from-green-500 to-green-600'
    }
  ];

  const certifications = [
    {
      icon: FileCheck,
      title: 'Qualiopi (En cours)',
      organisme: 'Certificateur AFNOR',
      description: 'Certification qualité des organismes de formation. Dossier en cours d\'instruction.',
      statut: 'audit-prevu',
      color: 'amber'
    },
    {
      icon: Trophy,
      title: 'Lauréat Fonds DRAC',
      organisme: 'Ministère de la Culture',
      description: 'Soutien financier annuel dans le cadre de l\'Éducation Artistique et Culturelle',
      statut: 'actif',
      color: 'blue'
    },
    {
      icon: Star,
      title: 'Membre Réseau CRAJEP',
      organisme: 'Comité Régional Associations Jeunesse',
      description: 'Adhésion au réseau régional des acteurs de l\'éducation populaire',
      statut: 'actif',
      color: 'orange'
    }
  ];

  const reconnaissances = [
    {
      titre: 'Prix de l\'Innovation Sociale 2022',
      organisateur: 'Conseil Départemental 93',
      description: 'Récompense pour l\'impact de nos actions sur l\'insertion professionnelle des jeunes',
      annee: 2022
    },
    {
      titre: 'Lauréat Appel à Projets "Jeunesse & Citoyenneté"',
      organisateur: 'Préfecture Île-de-France',
      description: 'Sélection parmi 200 candidatures pour un projet d\'ateliers en quartiers prioritaires',
      annee: 2023
    },
    {
      titre: 'Trophée Associations Exemplaires',
      organisateur: 'Ville de Saint-Denis',
      description: 'Reconnaissance de l\'engagement associatif et de la qualité de nos actions',
      annee: 2021
    },
    {
      titre: 'Mention Spéciale du Jury - Festival Courts en Betton',
      organisateur: 'Festival National',
      description: 'Pour notre court-métrage "L\'Interrogatoire" réalisé avec nos jeunes',
      annee: 2021
    }
  ];

  const partenairesInstitutionnels = [
    {
      nom: 'DRAC Île-de-France',
      logo: 'https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg',
      type: 'Ministère Culture',
      soutien: 'Financier',
      depuis: 2017
    },
    {
      nom: 'CNC - Centre National Cinéma',
      logo: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      type: 'Établissement Public',
      soutien: 'Financier & Technique',
      depuis: 2019
    },
    {
      nom: 'Conseil Départemental 93',
      logo: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg',
      type: 'Collectivité',
      soutien: 'Subvention',
      depuis: 2016
    },
    {
      nom: 'Région Île-de-France',
      logo: 'https://images.pexels.com/photos/8815931/pexels-photo-8815931.jpeg',
      type: 'Collectivité',
      soutien: 'Projets Jeunesse',
      depuis: 2018
    },
    {
      nom: 'CAF de Seine-Saint-Denis',
      logo: 'https://images.pexels.com/photos/6803514/pexels-photo-6803514.jpeg',
      type: 'Organisme Social',
      soutien: 'Financement Actions',
      depuis: 2016
    },
    {
      nom: 'Agence Nationale Cohésion Territoires',
      logo: 'https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg',
      type: 'État - Politique Ville',
      soutien: 'QPV',
      depuis: 2020
    }
  ];

  const garantiesQualite = [
    {
      icon: CheckCircle,
      title: 'Gouvernance Démocratique',
      description: 'Association loi 1901 avec CA et AG régulières'
    },
    {
      icon: CheckCircle,
      title: 'Comptes Certifiés',
      description: 'Bilan annuel certifié par expert-comptable'
    },
    {
      icon: CheckCircle,
      title: 'Équipe Qualifiée',
      description: 'Formateurs diplômés et professionnels du cinéma'
    },
    {
      icon: CheckCircle,
      title: 'Évaluation Continue',
      description: 'Questionnaires satisfaction et suivi participants'
    },
    {
      icon: CheckCircle,
      title: 'Assurance Responsabilité',
      description: 'Couverture complète RC professionnelle'
    },
    {
      icon: CheckCircle,
      title: 'Respect Normes Sécurité',
      description: 'Locaux conformes ERP, matériel aux normes CE'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Award className="w-5 h-5 text-amber-500" />
            <span className="text-amber-500 font-bold">Labels & Agréments</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Une Structure <span className="gradient-text">Reconnue et Labellisée</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Nos agréments officiels et certifications garantissent la qualité, la sécurité et le professionnalisme de nos actions
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Agréments Officiels</h2>
            <p className="text-xl text-gray-400">Reconnus par les autorités publiques</p>
          </div>

          <div className="space-y-8">
            {agrements.map((agrement, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl overflow-hidden border-2 border-white/10 hover:border-amber-500/50 transition-all hover-lift"
              >
                <div className="md:flex">
                  <div className={`md:w-64 bg-gradient-to-br ${agrement.color} p-8 flex flex-col items-center justify-center text-center`}>
                    <agrement.icon className="w-20 h-20 text-white mb-4" strokeWidth={1.5} />
                    <h3 className="text-2xl font-bold text-white">{agrement.title}</h3>
                  </div>

                  <div className="flex-1 p-8">
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Numéro d'agrément</p>
                        <p className="font-mono font-bold text-lg text-amber-500">{agrement.numero}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Délivré par</p>
                        <p className="font-semibold text-white">{agrement.delivrePar}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Date d'obtention</p>
                        <p className="font-semibold text-white">{agrement.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Durée</p>
                        <p className="font-semibold text-white">{agrement.duree}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">{agrement.description}</p>

                    <div>
                      <p className="font-bold mb-3 text-amber-500">Ce que cet agrément nous permet :</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {agrement.avantages.map((avantage, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{avantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Adhésions</h2>
            <p className="text-xl text-gray-400">Nos labels qualité et appartenances à des réseaux</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`glass-strong rounded-2xl p-8 text-center hover-lift border-t-4 ${
                  cert.color === 'amber' ? 'border-amber-500' :
                  cert.color === 'blue' ? 'border-blue-500' :
                  'border-orange-500'
                }`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${
                  cert.color === 'amber' ? 'from-amber-500 to-amber-600' :
                  cert.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  'from-orange-500 to-orange-600'
                } flex items-center justify-center`}>
                  <cert.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{cert.organisme}</p>
                <p className="text-gray-300 leading-relaxed mb-4">{cert.description}</p>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  cert.statut === 'actif'
                    ? 'bg-green-500/20 text-green-500 border border-green-500'
                    : 'bg-amber-500/20 text-amber-500 border border-amber-500'
                }`}>
                  {cert.statut === 'actif' ? 'Actif' : 'En cours'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Prix & Reconnaissances</h2>
            <p className="text-xl text-gray-400">Notre travail récompensé par nos pairs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {reconnaissances.map((prix, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 hover-lift border-l-4 border-amber-500"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-7 h-7 text-black" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{prix.titre}</h3>
                      <span className="bg-amber-500/20 text-amber-500 px-3 py-1 rounded-full text-xs font-bold">
                        {prix.annee}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm font-semibold mb-2">{prix.organisateur}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{prix.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Partenaires Institutionnels</h2>
            <p className="text-xl text-gray-400">Soutenus par les acteurs publics majeurs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partenairesInstitutionnels.map((partenaire, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl overflow-hidden hover-lift group"
              >
                <div className="aspect-video overflow-hidden bg-gray-800">
                  <img
                    src={partenaire.logo}
                    alt={partenaire.nom}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{partenaire.nom}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full text-xs font-semibold">
                      {partenaire.type}
                    </span>
                    <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                      {partenaire.soutien}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">Partenaire depuis {partenaire.depuis}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 glass-strong rounded-2xl p-8 text-center border-2 border-blue-500/30">
            <Stamp className="w-16 h-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Confiance Institutionnelle</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Être soutenu depuis plusieurs années par la DRAC, le CNC, le Département et la Région témoigne
              de la qualité reconnue de nos actions et de notre gestion rigoureuse.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Garanties Qualité</h2>
            <p className="text-xl text-gray-400">Notre engagement pour un service irréprochable</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {garantiesQualite.map((garantie, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover-lift border-2 border-white/10 hover:border-green-500/50 transition-all"
              >
                <garantie.icon className="w-10 h-10 text-green-500 mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-2">{garantie.title}</h3>
                <p className="text-gray-400 text-sm">{garantie.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center border-2 border-amber-500/30">
            <Award className="w-20 h-20 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Travailler Avec Une Structure Agréée</h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-4 mb-8">
              <p>
                Nos agréments et certifications vous garantissent :
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Conformité légale</strong> pour vos conventions et financements publics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Qualité pédagogique</strong> reconnue et évaluée</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Sécurité juridique</strong> avec assurances et normes respectées</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Transparence financière</strong> avec comptes certifiés</span>
                </li>
              </ul>
            </div>
            <a
              href="/institutions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
            >
              Demander un partenariat
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
