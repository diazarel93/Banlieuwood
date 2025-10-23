import { Heart, Euro, Camera, MapPin, Truck, Coffee, Users, Handshake, Building2, Trophy, CheckCircle, Star, Sparkles, ArrowRight, Gift, Wrench, Home, Utensils, Bus, Laptop, Headphones, Video, MessageCircle, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export default function Soutenir() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    support_type: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('donations')
        .insert([
          {
            donor_name: formData.name,
            donor_email: formData.email,
            message: `Type: ${formData.support_type}\nTéléphone: ${formData.phone}\nDétails: ${formData.details}`,
            status: 'pending'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', support_type: '', details: '' });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const urgentNeeds = [
    {
      icon: Camera,
      title: '3 Caméras en panne',
      description: '15 jeunes en liste d\'attente',
      type: 'Matériel',
      bgImage: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Session Octobre',
      description: '7 places à financer : 350€',
      type: 'Budget',
      bgImage: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Truck,
      title: 'Tournage Créteil',
      description: 'Transport 12 jeunes le 15/11',
      type: 'Logistique',
      bgImage: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const supportOptions = [
    {
      category: 'Financier',
      icon: Euro,
      color: 'from-amber-500 to-orange-500',
      bgImage: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg',
      options: [
        { item: 'Don ponctuel', impact: '20€ = 1 jeune équipé pendant 1 atelier' },
        { item: 'Don mensuel', impact: '50€/mois = 1 formation complète sur l\'année' },
        { item: 'Mécénat entreprise', impact: 'Déduction 60% + visibilité sur nos films' },
        { item: 'Financement projet', impact: 'Budget d\'un court-métrage : 2000€' }
      ]
    },
    {
      category: 'Matériel',
      icon: Camera,
      color: 'from-blue-500 to-cyan-500',
      bgImage: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
      options: [
        { item: 'Caméras & objectifs', impact: 'Pro, semi-pro ou amateur : tout nous aide' },
        { item: 'Micros & son', impact: 'HF, perches, enregistreurs' },
        { item: 'Lumières', impact: 'Projecteurs, réflecteurs, diffuseurs' },
        { item: 'Montage', impact: 'Ordis, disques durs, licences logiciels' }
      ]
    },
    {
      category: 'Lieux & Espaces',
      icon: MapPin,
      color: 'from-green-500 to-emerald-500',
      bgImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      options: [
        { item: 'Lieux de tournage', impact: 'Apparts, bureaux, commerces, espaces' },
        { item: 'Salles de formation', impact: 'Pour ateliers et répétitions' },
        { item: 'Salle de montage', impact: 'Espace calme avec wifi' },
        { item: 'Projection', impact: 'Cinéma, auditorium pour avant-premières' }
      ]
    },
    {
      category: 'Logistique',
      icon: Truck,
      color: 'from-purple-500 to-pink-500',
      bgImage: 'https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg',
      options: [
        { item: 'Transport', impact: 'Minibus, véhicule pour 12-15 personnes' },
        { item: 'Repas', impact: 'Buffet tournage, lunch boxes' },
        { item: 'Hébergement', impact: 'Pour tournages hors Paris' },
        { item: 'Stockage matériel', impact: 'Espace sécurisé pour équipement' }
      ]
    },
    {
      category: 'Compétences',
      icon: Users,
      color: 'from-red-500 to-orange-500',
      bgImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      options: [
        { item: 'Intervention pro', impact: 'Masterclass réal, scénario, montage, son' },
        { item: 'Mentorat', impact: 'Suivi individuel d\'un jeune talent' },
        { item: 'Expertise technique', impact: 'Juridique, compta, communication' },
        { item: 'Réseau', impact: 'Stages, jobs, opportunités' }
      ]
    },
    {
      category: 'Services',
      icon: Wrench,
      color: 'from-indigo-500 to-blue-500',
      bgImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      options: [
        { item: 'Post-production', impact: 'Étalonnage, mixage, VFX' },
        { item: 'Impression & com', impact: 'Flyers, affiches, goodies' },
        { item: 'Diffusion', impact: 'Relais festival, presse, réseaux' },
        { item: 'IT & web', impact: 'Hébergement, dev, maintenance' }
      ]
    }
  ];

  const realImpact = [
    {
      amount: '20€',
      impact: '1 jeune équipé',
      detail: 'Matériel pour 1 participant pendant 1 atelier',
      story: '"Ma première fois derrière une vraie caméra pro" - Amir, 14 ans',
      bgImage: 'https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      amount: '50€',
      impact: 'Formation 3 mois',
      detail: 'Accompagnement personnalisé complet',
      story: '"J\'ai appris plus en 3 mois qu\'en 3 ans" - Sarah',
      bgImage: 'https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      amount: '100€',
      impact: '1 film produit',
      detail: 'Court-métrage professionnel de A à Z',
      story: '"Notre film a fait 50K vues et 3 prix" - Équipe La Cité',
      bgImage: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      color: 'from-amber-500 to-orange-500'
    },
    {
      amount: '250€',
      impact: 'Atelier équipé',
      detail: '15 jeunes formés avec matériel pro',
      story: '"12 de mes élèves travaillent dans l\'audiovisuel" - Jordan',
      bgImage: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Jeunes Formés', description: 'Depuis 2015' },
    { icon: Video, number: '30+', label: 'Films Primés', description: 'Festivals nationaux' },
    { icon: Trophy, number: '85%', label: 'Continuent', description: 'Dans l\'audiovisuel' },
    { icon: Heart, number: '100%', label: 'Gratuit', description: 'Accessible à tous' }
  ];

  const fiscalAdvantages = [
    {
      type: 'Particuliers',
      reduction: '66% de réduction',
      example: 'Don de 100€ = 34€ après impôt',
      detail: 'Reçu fiscal automatique'
    },
    {
      type: 'Entreprises',
      reduction: '60% de réduction',
      example: 'Don de 1000€ = 400€ après impôt',
      detail: 'Mécénat déductible'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg"
            alt="Soutenir"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            <span className="text-red-400 font-bold">Urgence : 3 caméras en panne</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Tout Soutien <span className="gradient-text">Compte</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Don, matériel, lieux, transport, compétences, réseau.
          </p>

          <p className="text-xl text-white font-semibold mb-8 max-w-4xl animate-fade-in stagger-delay-3">
            Il y a 100 façons de nous aider. Dis-nous la tienne.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in stagger-delay-4">
            <a
              href="#formulaire"
              className="btn-primary text-lg py-4 px-8 shadow-glow-primary flex items-center gap-3"
            >
              <Heart className="w-5 h-5" />
              Je Veux Aider
            </a>
            <a
              href="#options"
              className="glass-card text-white font-bold text-lg py-4 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
            >
              Voir Toutes les Options
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {urgentNeeds.map((need, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group hover-lift"
              >
                <div className="absolute inset-0">
                  <img
                    src={need.bgImage}
                    alt={need.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${need.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                </div>
                <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 animate-pulse"></div>
                <div className="relative p-6">
                  <div className="w-12 h-12 bg-amber-500/20 backdrop-blur rounded-full flex items-center justify-center mb-4">
                    <need.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="text-xs uppercase font-bold text-amber-400 mb-2">{need.type}</div>
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{need.title}</h3>
                  <p className="text-gray-100 drop-shadow">{need.description}</p>
                  <div className="mt-3 inline-block">
                    <span className="text-amber-400 text-sm font-bold">URGENT</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="options" className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">6 Façons</span> de Nous Aider
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choisis celle qui te correspond. Ou invente la tienne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((category, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden group border-2 border-white/10 hover:border-amber-500/50 transition-all hover-lift"
              >
                <div className="absolute inset-0">
                  <img
                    src={category.bgImage}
                    alt={category.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-85`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
                </div>

                <div className="relative p-8">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-glow border border-white/30">
                    <category.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">{category.category}</h3>

                  <div className="space-y-4">
                    {category.options.map((option, idx) => (
                      <div key={idx} className="bg-black/30 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                        <div className="font-bold text-white mb-1 drop-shadow">{option.item}</div>
                        <div className="text-sm text-gray-200 drop-shadow">{option.impact}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              L'Impact <span className="gradient-text">Réel</span>
            </h2>
            <p className="text-xl text-gray-300">
              Chaque contribution a un impact direct et mesurable.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-10 h-10 text-amber-500 mx-auto mb-4 animate-float" />
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="font-bold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {realImpact.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group border-2 border-amber-500/20 hover:border-amber-500/40 transition-all"
              >
                <div className="absolute inset-0">
                  <img
                    src={item.bgImage}
                    alt={item.impact}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-70`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                </div>

                <div className="relative p-8">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-5xl font-bold text-white drop-shadow-2xl mb-2">{item.amount}</div>
                      <div className="text-2xl font-bold text-white drop-shadow-lg">{item.impact}</div>
                    </div>
                    <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30">
                      <CheckCircle className="w-7 h-7 text-green-400" />
                    </div>
                  </div>

                  <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-transparent mb-6"></div>

                  <p className="text-white/90 backdrop-blur-sm bg-black/20 p-4 rounded-xl mb-4 drop-shadow">{item.detail}</p>

                  <div className="bg-gradient-to-r from-amber-500/20 to-transparent backdrop-blur-sm p-4 rounded-xl border-l-4 border-amber-500">
                    <p className="text-white italic drop-shadow">
                      {item.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Avantages Fiscaux</span>
            </h2>
            <p className="text-xl text-gray-300">
              Votre don vous coûte moins que vous ne le pensez.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {fiscalAdvantages.map((adv, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-8 border-2 border-green-500/30"
              >
                <div className="text-2xl font-bold text-white mb-3">{adv.type}</div>
                <div className="text-3xl font-bold text-green-500 mb-4">{adv.reduction}</div>
                <div className="text-xl text-gray-300 mb-3">{adv.example}</div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{adv.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formulaire" className="py-24 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 border-2 border-amber-500/30">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl font-bold mb-4">
                Comment Veux-Tu <span className="gradient-text">Nous Aider</span> ?
              </h2>
              <p className="text-xl text-gray-300">
                Dis-nous ce que tu peux apporter. On trouve ensemble la meilleure façon.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-500/10 border-2 border-green-500 rounded-xl text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="text-xl font-bold text-green-500">Merci !</p>
                <p className="text-gray-300">On te recontacte sous 48h max.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-500/10 border-2 border-red-500 rounded-xl text-center">
                <p className="text-red-500 font-bold">Erreur. Réessaye ou contacte-nous directement.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-bold mb-2">Ton Nom / Entreprise</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border-2 border-white/20 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="Prénom Nom / Nom de l'entreprise"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border-2 border-white/20 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-bold mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/50 border-2 border-white/20 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-bold mb-2">Type de Soutien</label>
                <select
                  required
                  value={formData.support_type}
                  onChange={(e) => setFormData({ ...formData, support_type: e.target.value })}
                  className="w-full bg-black/50 border-2 border-white/20 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">-- Choisis --</option>
                  <option value="don_financier">Don Financier</option>
                  <option value="materiel">Prêt/Don de Matériel</option>
                  <option value="lieux">Mise à dispo de Lieux</option>
                  <option value="logistique">Logistique (Transport, Repas...)</option>
                  <option value="competences">Compétences / Mentorat</option>
                  <option value="services">Services (Post-prod, Com...)</option>
                  <option value="autre">Autre (à préciser)</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-bold mb-2">Détails</label>
                <textarea
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  rows={6}
                  className="w-full bg-black/50 border-2 border-white/20 rounded-xl px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                  placeholder="Décris ce que tu peux apporter : montant, type de matériel, dates dispo, compétences, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-xl py-5 px-8 shadow-glow-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Heart className="w-6 h-6" />
                    Envoyer Ma Proposition
                  </>
                )}
              </button>

              <p className="text-center text-gray-400 text-sm">
                On te recontacte sous 48h pour discuter de la meilleure façon de collaborer.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 text-center border-2 border-amber-500/30">
            <Sparkles className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions Sur Le <span className="gradient-text">Soutien</span> ?
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Pas sûr de comment aider ? Hésite sur le type de soutien ? Discutons-en.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="btn-primary text-xl py-5 px-8 shadow-glow-primary flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Nous Contacter
              </Link>
              <Link
                to="/partenaires"
                className="glass-card text-white font-bold text-xl py-5 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
              >
                <Building2 className="w-6 h-6" />
                Devenir Partenaire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
