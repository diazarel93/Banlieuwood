import { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, User, Mail, Phone, Calendar, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  location: string;
  workshop: string;
  motivation: string;
}

const STEPS = [
  { id: 1, title: 'Qui es-tu ?', icon: User },
  { id: 2, title: 'Comment te contacter ?', icon: Mail },
  { id: 3, title: 'Ton projet', icon: Calendar }
];

export default function MultiStepForm({ onClose }: { onClose?: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    workshop: '',
    motivation: ''
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('workshop_bookings')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          age: parseInt(formData.age),
          location: formData.location,
          workshop_type: formData.workshop,
          motivation: formData.motivation,
          status: 'pending'
        }]);

      if (error) throw error;

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.name.trim() !== '' && formData.age.trim() !== '';
    }
    if (currentStep === 2) {
      return formData.email.trim() !== '' && formData.phone.trim() !== '';
    }
    if (currentStep === 3) {
      return formData.workshop.trim() !== '' && formData.motivation.trim() !== '';
    }
    return false;
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-24 h-24 text-green-500 animate-scale-in" />
        </div>
        <h3 className="text-4xl font-bold mb-4 gradient-text">Inscription envoyée ! 🎉</h3>
        <p className="text-xl text-gray-300 mb-6">
          Bienvenue dans l'aventure Banlieuwood
        </p>
        <div className="glass-strong rounded-2xl p-6 max-w-md mx-auto mb-8">
          <h4 className="font-bold text-white mb-4">Prochaines étapes :</h4>
          <ul className="text-left space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">1.</span>
              <span>Tu vas recevoir un email de confirmation dans les prochaines minutes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">2.</span>
              <span>Notre équipe te contactera sous 48h pour finaliser ton inscription</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-500 font-bold">3.</span>
              <span>On te donnera toutes les infos pratiques (dates, lieu, matériel)</span>
            </li>
          </ul>
        </div>
        <button
          onClick={onClose}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-xl transition-all duration-300"
        >
          Fermer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {STEPS.map((step) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className={`flex items-center gap-2 ${step.id < STEPS.length ? 'flex-1' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                  currentStep >= step.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black'
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {currentStep > step.id ? '✓' : step.id}
                </div>
                <span className={`hidden md:block text-sm font-semibold ${
                  currentStep >= step.id ? 'text-white' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
              {step.id < STEPS.length && (
                <div className={`h-1 flex-1 mx-4 rounded transition-all duration-300 ${
                  currentStep > step.id ? 'bg-amber-500' : 'bg-gray-700'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <div className="animate-fade-in space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-8 h-8 text-amber-500" />
              Parle-nous de toi
            </h3>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Ton prénom et nom *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Ex: Mohamed Dupont"
                required
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Ton âge *
                </label>
                <input
                  type="number"
                  min="12"
                  max="25"
                  value={formData.age}
                  onChange={(e) => updateField('age', e.target.value)}
                  placeholder="Ex: 17"
                  required
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                />
                <p className="text-xs text-gray-500 mt-1">Entre 12 et 25 ans</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Ton quartier / ville
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    placeholder="Ex: Paris 19ème"
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Contact Info */}
        {currentStep === 2 && (
          <div className="animate-fade-in space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8 text-amber-500" />
              Comment te contacter ?
            </h3>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Ton email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="ton-email@exemple.com"
                required
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Ton téléphone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="06 12 34 56 78"
                  required
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Pour te confirmer les détails de l'atelier</p>
            </div>
          </div>
        )}

        {/* Step 3: Workshop Selection */}
        {currentStep === 3 && (
          <div className="animate-fade-in space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-amber-500" />
              Quel atelier t'intéresse ?
            </h3>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Type d'atelier *
              </label>
              <select
                value={formData.workshop}
                onChange={(e) => updateField('workshop', e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white focus:border-amber-500 focus:outline-none transition-colors"
              >
                <option value="">-- Choisis un atelier --</option>
                <option value="decouverte">Atelier Découverte (2-5 jours)</option>
                <option value="trimestriel">Atelier Trimestriel (3 mois)</option>
                <option value="semestriel">Atelier Semestriel (6 mois)</option>
                <option value="long">Long Métrage (1-2 ans)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Pourquoi veux-tu rejoindre Banlieuwood ? *
              </label>
              <textarea
                value={formData.motivation}
                onChange={(e) => updateField('motivation', e.target.value)}
                placeholder="Dis-nous ce qui te motive, tes rêves, ce que tu veux apprendre..."
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"
              ></textarea>
              <p className="text-xs text-gray-500 mt-1">Quelques mots suffisent, sois authentique !</p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentStep === 1
                ? 'opacity-0 pointer-events-none'
                : 'glass-strong hover:bg-white/20 text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Retour
          </button>

          {currentStep < STEPS.length ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Continuer
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed() || isSubmitting}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Envoi...' : '🎉 Valider mon inscription'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
