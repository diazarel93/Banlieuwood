import { Film, Mail, Phone, User, MessageSquare, CheckCircle, XCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

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
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

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
            Vous souhaitez participer à un atelier, diffuser un film ou soutenir nos projets ? Écrivez-nous.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 md:p-12 space-y-6 rounded-lg animate-scale-in">
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
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                placeholder="Votre message..."
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
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>
          </form>

          <div className="mt-12 bg-gray-900 p-8 text-center rounded-lg">
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
