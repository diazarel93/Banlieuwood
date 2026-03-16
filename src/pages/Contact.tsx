import { Film, Mail, Phone, User, MessageSquare, CheckCircle, XCircle, Building2, Users, Briefcase } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

type ProfileType = 'jeune' | 'etablissement' | 'autre';

export default function Contact() {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    age: '',
    etablissement: '',
    fonction: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const profiles: { type: ProfileType; icon: typeof User; label: string; desc: string }[] = [
    { type: 'jeune', icon: Users, label: 'Je suis un jeune (12-25 ans)', desc: 'Je veux rejoindre un atelier' },
    { type: 'etablissement', icon: Building2, label: 'Je représente un établissement', desc: 'École, mairie, collectivité' },
    { type: 'autre', icon: Briefcase, label: 'Autre', desc: 'Partenaire, presse, bénévole' },
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Le nom doit contenir au moins 2 caractères';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (formData.phone && !/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    if (profile === 'jeune' && formData.age && (parseInt(formData.age) < 12 || parseInt(formData.age) > 25)) {
      newErrors.age = 'Âge entre 12 et 25 ans';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const messageWithContext = [
        `[Profil: ${profile === 'jeune' ? 'Jeune' : profile === 'etablissement' ? 'Établissement' : 'Autre'}]`,
        profile === 'jeune' && formData.age ? `Âge: ${formData.age}` : '',
        profile === 'etablissement' && formData.etablissement ? `Établissement: ${formData.etablissement}` : '',
        profile === 'etablissement' && formData.fonction ? `Fonction: ${formData.fonction}` : '',
        '',
        formData.message
      ].filter(Boolean).join('\n');

      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: messageWithContext
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', age: '', etablissement: '', fonction: '' });
      setProfile(null);

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center animate-fade-in">
            <Mail className="w-12 h-12 text-amber-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in stagger-delay-1">Contactez-nous</h1>
          <p className="text-xl text-gray-300 font-light animate-fade-in stagger-delay-2">
            Rejoindre le programme, organiser un atelier dans votre école ou devenir partenaire ? Écrivez-nous.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* PROFILE SELECTOR */}
          {!profile && (
            <div className="mb-12 animate-fade-in">
              <p className="text-center text-lg text-gray-300 mb-8">Vous êtes :</p>
              <div className="grid md:grid-cols-3 gap-4">
                {profiles.map((p) => (
                  <button
                    key={p.type}
                    onClick={() => setProfile(p.type)}
                    className="bg-gray-900 rounded-2xl p-6 text-center hover-lift border border-gray-800 hover:border-amber-500/50 transition-all group"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <p.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-white mb-1 text-sm">{p.label}</h3>
                    <p className="text-gray-400 text-xs">{p.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {profile && (
            <>
              <div className="mb-8 flex items-center gap-4">
                <button
                  onClick={() => setProfile(null)}
                  className="text-amber-500 hover:text-amber-400 text-sm font-bold transition-colors"
                >
                  ← Changer de profil
                </button>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300 text-sm">
                  {profiles.find(p => p.type === profile)?.label}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="bg-gray-900 p-8 md:p-12 space-y-6 rounded-2xl animate-scale-in">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                    <User className="w-4 h-4 inline mr-2" />
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full bg-black border ${errors.name ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors`}
                    placeholder="Votre nom"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {profile === 'jeune' && (
                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold mb-2 text-gray-300">
                      Âge
                    </label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="12"
                      max="25"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full bg-black border ${errors.age ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors`}
                      placeholder="Ton âge"
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                  </div>
                )}

                {profile === 'etablissement' && (
                  <>
                    <div>
                      <label htmlFor="etablissement" className="block text-sm font-semibold mb-2 text-gray-300">
                        <Building2 className="w-4 h-4 inline mr-2" />
                        Établissement
                      </label>
                      <input
                        type="text"
                        id="etablissement"
                        name="etablissement"
                        value={formData.etablissement}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Nom de l'établissement"
                      />
                    </div>
                    <div>
                      <label htmlFor="fonction" className="block text-sm font-semibold mb-2 text-gray-300">
                        Fonction
                      </label>
                      <input
                        type="text"
                        id="fonction"
                        name="fonction"
                        value={formData.fonction}
                        onChange={handleChange}
                        className="w-full bg-black border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="Votre fonction (directeur, enseignant, CPE...)"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors`}
                    placeholder="votre.email@exemple.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-300">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Téléphone {profile === 'etablissement' ? '*' : ''}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required={profile === 'etablissement'}
                    className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 rounded-lg focus:outline-none focus:border-amber-500 transition-colors`}
                    placeholder="06 12 34 56 78"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full bg-black border ${errors.message ? 'border-red-500' : 'border-gray-700'} text-white px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors resize-none rounded-lg`}
                    placeholder={
                      profile === 'jeune' ? 'Dis-nous ce qui t\'intéresse, ton niveau, tes disponibilités...' :
                      profile === 'etablissement' ? 'Décrivez votre projet : nombre d\'élèves, niveau, période souhaitée...' :
                      'Votre message...'
                    }
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-900/30 border border-green-500 text-green-200 px-4 py-3 rounded-lg flex items-center gap-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message envoyé avec succès ! Nous vous répondrons bientôt.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded-lg flex items-center gap-3 animate-fade-in">
                    <XCircle className="w-5 h-5" />
                    <span>Une erreur est survenue. Veuillez réessayer.</span>
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 text-lg rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </div>
              </form>
            </>
          )}

          <div className="mt-12 bg-gray-900 p-8 text-center rounded-2xl">
            <div className="mb-4">
              <Film className="w-10 h-10 text-amber-500 mx-auto mb-2" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold mb-4">Coordonnées directes</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <Mail className="w-4 h-4 inline mr-2 text-amber-500" />
                <a href="mailto:contact@banlieuwood.fr" className="hover:text-amber-500 transition-colors">
                  contact@banlieuwood.fr
                </a>
              </p>
              <p className="text-sm mt-4">
                Banlieuwood<br />
                10 rue Frazier, Saint-Denis<br />
                Association loi 1901
              </p>
              <div className="flex gap-4 mt-4 justify-center">
                <a href="https://vimeo.com/user95348584" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Vimeo</a>
                <a href="https://www.instagram.com/banlieuwood/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Instagram</a>
                <a href="https://www.facebook.com/banlieuwood" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
