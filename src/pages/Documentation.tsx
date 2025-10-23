import { FileText, Download, FolderOpen, File, BookOpen, Briefcase, Users, Building2, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  file_url: string;
  file_size: string;
  file_type: string;
  downloads_count: number;
  published_date: string;
  for_audience: string;
}

export default function Documentation() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('published', true)
        .order('published_date', { ascending: false });

      if (error) throw error;
      setDocuments(data || []);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (docId: string) => {
    try {
      const { error } = await supabase.rpc('increment_download_count', {
        doc_id: docId
      });
      if (error) console.error('Error incrementing download count:', error);
    } catch (error) {
      console.error('Error tracking download:', error);
    }
  };

  const handleDownloadDoc = async (fileName: string) => {
    if (!fileName) {
      alert('Document pas encore disponible');
      return;
    }

    try {
      const { data, error } = await supabase.storage
        .from('documents')
        .download(fileName);

      if (error) {
        console.error('Error downloading:', error);
        alert('Erreur lors du téléchargement. Le document n\'est peut-être pas encore disponible.');
        return;
      }

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error:', error);
      alert('Erreur lors du téléchargement');
    }
  };

  const categories = [
    { id: 'all', name: 'Tous les documents', icon: FolderOpen },
    { id: 'institutionnel', name: 'Documents Institutionnels', icon: Building2 },
    { id: 'pedagogique', name: 'Pédagogique', icon: BookOpen },
    { id: 'juridique', name: 'Juridique & Administratif', icon: FileText },
    { id: 'rapports', name: 'Rapports & Bilans', icon: Briefcase },
    { id: 'communication', name: 'Communication', icon: Users }
  ];

  const staticDocuments = [
    {
      category: 'institutionnel',
      title: 'Plaquette Institutionnelle 2024',
      description: 'Présentation complète de Banlieuwood : mission, actions, chiffres clés, équipe',
      fileSize: '2.1 MB',
      fileType: 'PDF',
      audience: 'Institutions, Partenaires',
      icon: Building2,
      color: 'blue',
      fileName: 'plaquette-institutionnelle-2024.pdf'
    },
    {
      category: 'institutionnel',
      title: 'Offre Établissements Scolaires',
      description: 'Catalogue des ateliers pour collèges et lycées : formats, tarifs, modalités',
      fileSize: '1.5 MB',
      fileType: 'PDF',
      audience: 'Chefs d\'établissement, Professeurs',
      icon: BookOpen,
      color: 'amber',
      fileName: 'offre-etablissements-scolaires.pdf'
    },
    {
      category: 'institutionnel',
      title: 'Offre Collectivités & MJC',
      description: 'Nos programmes pour mairies, conseils, centres sociaux et MJC',
      fileSize: '1.3 MB',
      fileType: 'PDF',
      audience: 'Élus, Services Jeunesse',
      icon: Building2,
      color: 'green',
      fileName: 'offre-collectivites-mjc.pdf'
    },
    {
      category: 'institutionnel',
      title: 'Grille Tarifaire Institutions',
      description: 'Tarifs détaillés par format d\'atelier et durée d\'intervention',
      fileSize: '350 KB',
      fileType: 'PDF',
      audience: 'Décideurs',
      icon: FileText,
      color: 'amber',
      fileName: 'grille-tarifaire-institutions.pdf'
    },
    {
      category: 'juridique',
      title: 'Statuts de l\'Association',
      description: 'Statuts complets enregistrés en Préfecture (version à jour 2024)',
      fileSize: '245 KB',
      fileType: 'PDF',
      audience: 'Public, Partenaires',
      icon: FileText,
      color: 'blue'
    },
    {
      category: 'juridique',
      title: 'Modèle Convention Partenariat',
      description: 'Modèle type de convention de partenariat institution-Banlieuwood',
      fileSize: '180 KB',
      fileType: 'PDF',
      audience: 'Institutions',
      icon: FileText,
      color: 'purple'
    },
    {
      category: 'juridique',
      title: 'Assurance Responsabilité Civile',
      description: 'Attestation RC professionnelle en cours de validité',
      fileSize: '120 KB',
      fileType: 'PDF',
      audience: 'Partenaires',
      icon: FileText,
      color: 'green'
    },
    {
      category: 'rapports',
      title: 'Rapport d\'Activités 2023',
      description: 'Bilan complet : actions menées, publics touchés, résultats, témoignages',
      fileSize: '3.2 MB',
      fileType: 'PDF',
      audience: 'Public, Partenaires, Financeurs',
      icon: Briefcase,
      color: 'blue'
    },
    {
      category: 'rapports',
      title: 'Comptes Annuels Certifiés 2023',
      description: 'Bilan financier certifié par expert-comptable',
      fileSize: '890 KB',
      fileType: 'PDF',
      audience: 'Financeurs, Adhérents',
      icon: Briefcase,
      color: 'green'
    },
    {
      category: 'rapports',
      title: 'Budget Prévisionnel 2025',
      description: 'Projections financières et plan d\'action pour l\'année à venir',
      fileSize: '520 KB',
      fileType: 'PDF',
      audience: 'Financeurs, CA',
      icon: Briefcase,
      color: 'amber'
    },
    {
      category: 'rapports',
      title: 'Procès-Verbal AG 2024',
      description: 'Compte-rendu Assemblée Générale ordinaire du 15 mars 2024',
      fileSize: '420 KB',
      fileType: 'PDF',
      audience: 'Adhérents, Public',
      icon: Briefcase,
      color: 'purple'
    },
    {
      category: 'pedagogique',
      title: 'Fiche Pédagogique Atelier Découverte',
      description: 'Déroulé détaillé, objectifs pédagogiques, compétences visées',
      fileSize: '680 KB',
      fileType: 'PDF',
      audience: 'Enseignants, Animateurs',
      icon: BookOpen,
      color: 'purple'
    },
    {
      category: 'pedagogique',
      title: 'Fiche Pédagogique Atelier Trimestriel',
      description: 'Programme des 12 séances, progression, livrables attendus',
      fileSize: '920 KB',
      fileType: 'PDF',
      audience: 'Enseignants, Animateurs',
      icon: BookOpen,
      color: 'purple'
    },
    {
      category: 'pedagogique',
      title: 'Guide de l\'Encadrant',
      description: 'Conseils et bonnes pratiques pour accompagner un groupe en atelier',
      fileSize: '1.1 MB',
      fileType: 'PDF',
      audience: 'Enseignants, Animateurs, Éducateurs',
      icon: BookOpen,
      color: 'blue'
    },
    {
      category: 'pedagogique',
      title: 'Référentiel Compétences Acquises',
      description: 'Liste des compétences techniques et transversales développées',
      fileSize: '450 KB',
      fileType: 'PDF',
      audience: 'Enseignants, Institutions',
      icon: BookOpen,
      color: 'green'
    },
    {
      category: 'communication',
      title: 'Dossier de Presse 2024',
      description: 'Kit presse : communiqué, visuels HD, contacts médias',
      fileSize: '4.5 MB',
      fileType: 'PDF',
      audience: 'Journalistes, Médias',
      icon: Users,
      color: 'amber'
    },
    {
      category: 'communication',
      title: 'Logo & Charte Graphique',
      description: 'Logos en différents formats + charte d\'utilisation',
      fileSize: '2.8 MB',
      fileType: 'ZIP',
      audience: 'Partenaires',
      icon: Users,
      color: 'blue'
    },
    {
      category: 'communication',
      title: 'Photos Libres de Droits',
      description: 'Banque d\'images HD de nos ateliers (usage presse autorisé)',
      fileSize: '15 MB',
      fileType: 'ZIP',
      audience: 'Presse, Partenaires',
      icon: Users,
      color: 'purple'
    }
  ];

  const filteredDocs = staticDocuments.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600',
      amber: 'from-amber-500 to-amber-600',
      orange: 'from-orange-500 to-orange-600',
      green: 'from-green-500 to-green-600'
    };
    return colors[color] || colors.amber;
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <FolderOpen className="w-5 h-5 text-amber-500" />
            <span className="text-amber-500 font-bold">Documentation</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Bibliothèque</span> Documentaire
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
            Téléchargez librement tous nos documents : plaquettes, rapports, fiches pédagogiques, modèles de conventions
          </p>

          <div className="max-w-2xl mx-auto glass-strong rounded-2xl p-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-black border-2 border-gray-700 focus:border-amber-500 rounded-xl text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-glow'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {selectedCategory === 'all' ? 'Tous les documents' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-400">
              {filteredDocs.length} document{filteredDocs.length > 1 ? 's' : ''}
            </p>
          </div>

          {filteredDocs.length === 0 ? (
            <div className="text-center py-20">
              <FileText className="w-20 h-20 text-gray-600 mx-auto mb-4" />
              <p className="text-xl text-gray-400">Aucun document trouvé</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredDocs.map((doc, index) => (
                <div
                  key={index}
                  className="glass-strong rounded-2xl p-6 text-left group border-2 border-white/10 relative"
                >
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${getColorClasses(doc.color)} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <doc.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{doc.description}</p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                          {doc.fileType}
                        </span>
                        <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold">
                          {doc.fileSize}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">Pour : {doc.audience}</p>
                        <button
                          onClick={() => handleDownloadDoc(doc.fileName || '')}
                          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                        >
                          <Download className="w-4 h-4" />
                          <span className="text-sm">Télécharger</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center border-2 border-amber-500/30">
            <File className="w-20 h-20 text-amber-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Besoin d'un Document Spécifique ?</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Vous ne trouvez pas le document que vous cherchez ? Vous avez besoin d'informations complémentaires
              ou d'un document personnalisé pour votre projet ?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
              >
                Nous contacter
              </a>
              <a
                href="/institutions"
                className="inline-flex items-center gap-2 glass-strong hover:bg-white/20 text-white font-semibold px-10 py-4 text-lg rounded-xl transition-all duration-300 border border-white/20"
              >
                Demander un partenariat
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold mb-4 text-blue-500">Conditions d'utilisation</h3>
            <div className="text-gray-300 text-sm leading-relaxed space-y-2">
              <p>
                <strong>Documents libres de téléchargement :</strong> Tous les documents présents sur cette page sont téléchargeables
                gratuitement pour consultation, information ou usage dans le cadre d'un projet avec Banlieuwood.
              </p>
              <p>
                <strong>Usage commercial :</strong> Toute reproduction ou diffusion à des fins commerciales est interdite sans autorisation
                écrite préalable de Banlieuwood.
              </p>
              <p>
                <strong>Photos & visuels :</strong> Les photos libres de droits sont utilisables par la presse et nos partenaires avec
                mention obligatoire "© Banlieuwood".
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
