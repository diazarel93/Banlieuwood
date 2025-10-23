import { useState, useEffect } from 'react';
import { X, Mail, CheckCircle, Gift } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user already subscribed or dismissed
    const dismissed = localStorage.getItem('newsletter_dismissed');
    const subscribed = localStorage.getItem('newsletter_subscribed');

    if (dismissed || subscribed) return;

    // Show popup on exit intent (mouse leaving viewport)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasInteracted) {
        setIsVisible(true);
        setHasInteracted(true);
      }
    };

    // Also show after 30 seconds if still on page
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsVisible(true);
        setHasInteracted(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasInteracted]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter_dismissed', 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, subscribed_at: new Date().toISOString() }]);

      if (error) throw error;

      setIsSuccess(true);
      localStorage.setItem('newsletter_subscribed', 'true');

      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error: any) {
      if (error.code === '23505') {
        alert('Cet email est déjà inscrit à notre newsletter !');
      } else {
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative glass-strong rounded-3xl p-8 md:p-12 max-w-2xl w-full border-2 border-amber-500/30 shadow-2xl animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <>
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Gift className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ne rate aucune <span className="gradient-text">nouvelle session</span> !
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Reçois en avant-première les dates, places disponibles et surprises exclusives
              </p>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="glass rounded-xl p-4">
                  <div className="text-2xl mb-2">🎬</div>
                  <div className="text-sm font-semibold text-amber-500">Sessions en avant-première</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="text-2xl mb-2">🎁</div>
                  <div className="text-sm font-semibold text-amber-500">Contenus exclusifs</div>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-semibold text-amber-500">Places prioritaires</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton-email@exemple.com"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Inscription...' : "🔥 Je m'inscris gratuitement"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                ✓ Gratuit • ✓ Désabonnement en 1 clic • ✓ Pas de spam, promis
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-20 h-20 text-green-500 animate-scale-in" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">C'est fait ! 🎉</h3>
            <p className="text-xl text-gray-300 mb-4">
              Tu fais maintenant partie de la communauté Banlieuwood
            </p>
            <p className="text-gray-400">
              Vérifie ta boîte mail (et tes spams) pour confirmer ton inscription
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
