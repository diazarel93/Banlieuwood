import { Users, Shield, FileText, Download, TrendingUp, CheckCircle, ExternalLink, Award } from 'lucide-react';

export default function Gouvernance() {
  const bureau = [
    {
      role: 'Président',
      name: 'Adrian YOUNSI',
      bio: 'Fondateur et président de Banlieuwood, cinéaste passionné par la transmission et l\'éducation populaire',
      photo: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
    }
  ];

  const conseilAdministration: string[] = [];

  const equipePermamente = [
    {
      poste: 'Producteur',
      name: 'WADI LAADAM',
      description: 'Production, coordination projets audiovisuels, développement contenus',
      photo: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
    },
    {
      poste: 'Producteur',
      name: 'ANWAR LAADAM',
      description: 'Production, gestion technique, encadrement tournages',
      photo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg'
    },
    {
      poste: 'Producteur',
      name: 'ROMAIN NDIAYE CHANSAREL',
      description: 'Production, développement partenariats, coordination ateliers',
      photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg'
    },
    {
      poste: 'Rédactrice en Chef',
      name: 'SANDRINE FELQUIN',
      description: 'Rédaction, création contenus, scénarisation projets',
      photo: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg'
    },
    {
      poste: 'Rédactrice en Chef',
      name: 'ALICE VALETTE',
      description: 'Rédaction, coordination éditoriale, développement narratifs',
      photo: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg'
    }
  ];

  const documentsOfficiel = [
    {
      icon: FileText,
      title: 'Statuts de l\'Association',
      description: 'Statuts enregistrés en Préfecture, version à jour 2024',
      file: 'statuts-banlieuwood-2024.pdf',
      size: '245 KB'
    },
    {
      icon: FileText,
      title: 'Rapport d\'Activités 2023',
      description: 'Bilan complet des actions, chiffres clés, témoignages',
      file: 'rapport-activites-2023.pdf',
      size: '3.2 MB'
    },
    {
      icon: FileText,
      title: 'Comptes Annuels Certifiés 2023',
      description: 'Bilan financier certifié par expert-comptable',
      file: 'comptes-certifies-2023.pdf',
      size: '890 KB'
    },
    {
      icon: FileText,
      title: 'Procès-Verbal AG 2024',
      description: 'Compte-rendu Assemblée Générale ordinaire du 15 mars 2024',
      file: 'pv-ag-2024.pdf',
      size: '420 KB'
    },
    {
      icon: FileText,
      title: 'Budget Prévisionnel 2025',
      description: 'Projections financières et plan d\'action pour l\'année à venir',
      file: 'budget-previsionnel-2025.pdf',
      size: '520 KB'
    }
  ];

  const bilanFinancier = {
    annee: 2023,
    produits: {
      subventionsPubliques: 65000,
      conventionsEtablissements: 28000,
      donsParticuliers: 12000,
      prestationsPrivees: 8000,
      autres: 2000
    },
    charges: {
      salaires: 72000,
      achatsEquipements: 15000,
      locaux: 8000,
      communication: 5000,
      deplacements: 3000,
      autres: 12000
    }
  };

  const totalProduits = Object.values(bilanFinancier.produits).reduce((a, b) => a + b, 0);
  const totalCharges = Object.values(bilanFinancier.charges).reduce((a, b) => a + b, 0);
  const resultat = totalProduits - totalCharges;

  const indicateursImpact = [
    { label: 'Jeunes accompagnés en 2023', value: '156', icon: Users },
    { label: 'Heures de formation dispensées', value: '2 400h', icon: TrendingUp },
    { label: 'Établissements partenaires', value: '18', icon: Award },
    { label: 'Taux de satisfaction moyen', value: '96%', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-green-500 font-bold">Transparence & Gouvernance</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Une Association <span className="gradient-text">Transparente et Démocratique</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Découvrez qui nous sommes, comment nous fonctionnons et comment nous utilisons vos contributions et les fonds publics
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {indicateursImpact.map((indicateur, index) => (
              <div key={index} className="glass-strong rounded-xl p-6 text-center hover-lift border border-green-500/30">
                <indicateur.icon className="w-10 h-10 text-green-500 mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl font-bold text-white mb-2">{indicateur.value}</div>
                <div className="text-sm text-gray-400">{indicateur.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Informations Légales</h2>
            <p className="text-xl text-gray-400">Notre identité officielle</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 text-green-500">Statut Juridique</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="font-semibold text-white">Association loi 1901</span></p>
                <p><span className="text-gray-400">Déclarée en Préfecture</span></p>
                <p className="text-sm">Date création : 12 septembre 2015</p>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 text-green-500">Coordonnees</h3>
              <div className="space-y-3 text-gray-300">
                <p>10 rue Frazier, Saint-Denis</p>
                <p>
                  <a href="mailto:contact@banlieuwood.fr" className="text-green-400 hover:underline">
                    contact@banlieuwood.fr
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 text-green-500">Agréments</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Jeunesse & Éducation Populaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Éducation Nationale (en cours)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Conventionné Ville de Saint-Denis</span>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 text-green-500">Siège Social</h3>
              <div className="text-gray-300">
                <p className="font-semibold text-white mb-2">Banlieuwood</p>
                <p>10 rue Frazier</p>
                <p>93200 Saint-Denis</p>
                <p className="mt-3 text-sm text-gray-400">contact@banlieuwood.fr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Le Bureau Exécutif</h2>
            <p className="text-xl text-gray-400">Élus en Assemblée Générale pour 3 ans</p>
          </div>

          <div className="flex justify-center max-w-md mx-auto">
            {bureau.map((membre, index) => (
              <div key={index} className="glass-strong rounded-2xl overflow-hidden hover-lift group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={membre.photo}
                    alt={membre.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-black text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                    {membre.role}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{membre.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{membre.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">L'Équipe</h2>
            <p className="text-xl text-gray-400">Les piliers de Banlieuwood</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {equipePermamente.map((membre, index) => (
              <div key={index} className="glass-strong rounded-2xl overflow-hidden hover-lift group flex">
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden">
                  <img
                    src={membre.photo}
                    alt={membre.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="text-green-500 text-sm font-bold mb-1">{membre.poste}</div>
                  <h3 className="text-xl font-bold mb-2">{membre.name}</h3>
                  <p className="text-gray-400 text-sm">{membre.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bilan Financier {bilanFinancier.annee}</h2>
            <p className="text-xl text-gray-400">Transparence totale sur l'utilisation des fonds</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-strong rounded-2xl p-8 border-t-4 border-green-500">
              <h3 className="text-2xl font-bold mb-6 text-green-500 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Produits (Recettes)
              </h3>
              <div className="space-y-4">
                {Object.entries(bilanFinancier.produits).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-700">
                    <span className="text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-bold text-white">{value.toLocaleString('fr-FR')} €</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 text-xl font-bold">
                  <span className="text-green-500">TOTAL PRODUITS</span>
                  <span className="text-green-500">{totalProduits.toLocaleString('fr-FR')} €</span>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-2xl p-8 border-t-4 border-amber-500">
              <h3 className="text-2xl font-bold mb-6 text-amber-500 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Charges (Dépenses)
              </h3>
              <div className="space-y-4">
                {Object.entries(bilanFinancier.charges).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-700">
                    <span className="text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-bold text-white">{value.toLocaleString('fr-FR')} €</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 text-xl font-bold">
                  <span className="text-amber-500">TOTAL CHARGES</span>
                  <span className="text-amber-500">{totalCharges.toLocaleString('fr-FR')} €</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`glass-strong rounded-2xl p-8 text-center border-4 ${resultat >= 0 ? 'border-green-500' : 'border-red-500'}`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-300">Résultat de l'exercice {bilanFinancier.annee}</h3>
            <div className={`text-5xl font-bold ${resultat >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {resultat >= 0 ? '+' : ''}{resultat.toLocaleString('fr-FR')} €
            </div>
            <p className="text-gray-400 mt-4">
              {resultat >= 0
                ? 'Excédent réinvesti dans le développement de nos actions'
                : 'Déficit couvert par les réserves associatives'}
            </p>
          </div>

          <div className="mt-8 glass p-6 rounded-xl border-l-4 border-blue-500">
            <h3 className="font-bold text-lg mb-3 text-blue-500 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Contrôle & Certification
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Nos comptes sont certifiés chaque année par le cabinet d'expertise comptable <strong>Audit & Conseil</strong>
              (agrément n° 12345). Nous sommes également contrôlés régulièrement par nos financeurs publics (DRAC, Ville,
              Département) dans le cadre de nos conventions pluriannuelles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Documents Officiels</h2>
            <p className="text-xl text-gray-400">Téléchargez librement nos documents de référence</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {documentsOfficiel.map((doc, index) => (
              <a
                key={index}
                href="/documentation"
                className="glass-strong rounded-2xl p-6 hover-lift text-left group border-2 border-white/10 hover:border-green-500/50 transition-all block"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <doc.icon className="w-7 h-7 text-black" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-green-500 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-mono">{doc.size}</span>
                      <div className="flex items-center gap-2 text-green-500 font-semibold">
                        <Download className="w-4 h-4" />
                        <span className="text-sm">Télécharger PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 glass-strong rounded-2xl p-8 text-center border-2 border-green-500/30">
            <ExternalLink className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Registre National des Associations</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Retrouvez toutes nos informations officielles sur le site du Journal Officiel des Associations
            </p>
            <a
              href="https://www.journal-officiel.gouv.fr/pages/associations-recherche/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Consulter notre fiche officielle
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Engagement Transparence</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Banlieuwood s'engage à une transparence totale sur son fonctionnement, sa gouvernance et l'utilisation
            des fonds qui lui sont confiés. Tout adhérent ou partenaire peut demander à consulter nos documents
            comptables et administratifs. Nous publions chaque année un rapport d'activités détaillé.
          </p>
          <div className="glass p-6 rounded-xl inline-block">
            <p className="text-gray-400 mb-2">Questions sur notre gouvernance ?</p>
            <a href="/contact" className="text-green-500 font-bold text-lg hover:underline">
              Contactez-nous
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
