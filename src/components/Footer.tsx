import { Film, Video, Instagram, Facebook, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/films', label: 'Nos Films' },
    { path: '/ateliers', label: 'Ateliers' },
    { path: '/deroulement', label: 'Notre Methode' },
    { path: '/reussites', label: 'Reussites' },
    { path: '/institutions', label: 'Institutions' },
    { path: '/partenaires', label: 'Partenaires' },
    { path: '/gouvernance', label: 'Gouvernance' },
    { path: '/labels', label: 'Labels' },
    { path: '/documentation', label: 'Documentation' },
    { path: '/dons', label: 'Faire un don' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'A propos' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Video, label: 'Vimeo', href: 'https://vimeo.com/user95348584' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/banlieuwood/' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/banlieuwood' },
  ];

  const handleNewsletterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: 'Inscription Newsletter',
            email: email,
            message: 'Demande d\'inscription a la newsletter'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setEmail('');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting newsletter:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="py-16 px-4 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-2xl font-bold hover:text-amber-500 transition-colors mb-4"
            >
              <Film className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
              <span className="logo-font">BANLIEUWOOD</span>
            </Link>
            <p className="text-gray-400 mb-2">
              Amener le cinema en bas de chez vous. Des ateliers pour les jeunes de 12 a 25 ans.
            </p>
            <p className="text-gray-500 text-sm mb-2">Association loi 1901</p>
            <p className="text-gray-500 text-sm mb-1">10 rue Frazier, Saint-Denis</p>
            <a href="mailto:contact@banlieuwood.fr" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">
              contact@banlieuwood.fr
            </a>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 hover:bg-amber-500 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Restez informe de nos prochains ateliers et evenements.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail className="w-5 h-5" />
              </button>
            </form>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm mt-2">Inscription reussie !</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm mt-2">Erreur, reessayez.</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2025 Banlieuwood — Tous droits reserves.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
