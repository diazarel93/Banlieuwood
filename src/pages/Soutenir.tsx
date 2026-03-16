import { Heart, ArrowRight, Users, Building2, Gift, CheckCircle, ChevronDown, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HELLOASSO_URL = 'https://www.helloasso.com/associations/banlieuwood';

export default function Soutenir() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useScrollReveal();

  const faqItems = [
    {
      q: 'Mon don est-il déductible des impôts ?',
      a: 'En tant qu\'association d\'intérêt général à gestion désintéressée, Banlieuwood est éligible à la déduction fiscale. Votre don est déductible à 66% de l\'impôt sur le revenu (dans la limite de 20% du revenu imposable). Un reçu fiscal (Cerfa n°11580*04) vous est délivré.'
    },
    {
      q: 'Comment effectuer un don ?',
      a: 'Directement en ligne via HelloAsso (paiement sécurisé, reçu fiscal automatique). Vous pouvez aussi nous contacter à contact@banlieuwood.fr pour un don par virement ou chèque.'
    },
    {
      q: 'Puis-je faire un don en nature ?',
      a: 'Oui. Nous acceptons les dons de matériel audiovisuel (caméras, micros, éclairages, tablettes), de locaux pour les ateliers, ou de compétences (bénévolat de compétences). Contactez-nous pour en discuter.'
    },
    {
      q: 'Mon entreprise peut-elle soutenir Banlieuwood ?',
      a: 'Oui, via le mécénat d\'entreprise. Déduction de 60% de l\'impôt sur les sociétés (dans la limite de 0,5% du CA HT). Nous proposons des partenariats sur-mesure : financement d\'ateliers, mise à disposition de matériel ou de locaux, mécénat de compétences.'
    },
    {
      q: 'À quoi sert mon don concrètement ?',
      a: 'L\'association est 100% bénévole — aucun salarié, aucune rémunération des dirigeants. Chaque euro finance directement les ateliers : matériel, transport des jeunes vers les lieux de tournage, logistique des séances.'
    },
    {
      q: 'Comment devenir bénévole ?',
      a: 'Envoyez-nous un message via le formulaire de contact en précisant vos compétences et disponibilités. Nous recherchons des bénévoles pour l\'encadrement des ateliers, la logistique des tournages, la communication et l\'administration.'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20" ref={scrollRef}>
      {/* HERO */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto" data-reveal>
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-6">Soutenir Banlieuwood</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1.05]">
            Donnez une caméra<br />
            <span className="text-amber-500">à un jeune</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed mb-10">
            Chaque don finance directement les ateliers. L'association est 100% bénévole — aucun salarié, aucune rémunération.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={HELLOASSO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-lg"
            >
              <Heart className="w-5 h-5" />
              Faire un don
              <ExternalLink className="w-4 h-4 opacity-60" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 text-white border border-white/20 hover:border-white/40 font-medium px-10 py-5 text-lg rounded-xl transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
          <p className="text-gray-600 text-xs mt-4">Paiement sécurisé via HelloAsso — Reçu fiscal automatique</p>
        </div>
      </section>

      {/* IMPACT — ce que finance un don */}
      <section className="py-20 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-reveal>Votre don en action</h2>
          <p className="text-gray-400 mb-12" data-reveal>100% affecté aux ateliers et aux films — gestion totalement bénévole</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { amount: '50 €', impact: 'Transport d\'un groupe de jeunes vers un lieu de tournage', after: '17 € après déduction fiscale' },
              { amount: '150 €', impact: 'Matériel et logistique d\'une journée d\'atelier complète', after: '51 € après déduction fiscale' },
              { amount: '500 €', impact: 'Un cycle complet d\'ateliers pour un groupe de 15 jeunes', after: '170 € après déduction fiscale' },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-800 rounded-xl p-8 hover:border-amber-500/30 transition-colors"
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <div className="text-4xl font-bold text-amber-500 mb-4 logo-font">{item.amount}</div>
                <p className="text-gray-300 mb-4">{item.impact}</p>
                <p className="text-amber-500/70 text-sm font-medium">{item.after}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 text-center" data-reveal>
            <p className="text-amber-200">
              <strong className="text-amber-500">66% de déduction fiscale</strong> — Un don de 100 € ne vous coûte que 34 €
            </p>
          </div>
        </div>
      </section>

      {/* 4 FAÇONS DE SOUTENIR */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-reveal>Comment nous soutenir</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-xl p-8 hover:border-amber-500/30 transition-colors" data-reveal>
              <Heart className="w-8 h-8 text-amber-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">Don financier</h3>
              <p className="text-gray-400 mb-4">
                Par virement ou chèque. Déductible à 66% de l'impôt sur le revenu (particuliers) ou 60% de l'IS (entreprises).
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Don ponctuel ou régulier
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Reçu fiscal Cerfa n°11580*04
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  100% affecté au programme
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:border-amber-500/30 transition-colors" data-reveal data-reveal-delay="80">
              <Building2 className="w-8 h-8 text-amber-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">Mécénat d'entreprise</h3>
              <p className="text-gray-400 mb-4">
                Déduction de 60% de l'IS (dans la limite de 0,5% du CA HT). Partenariats sur-mesure.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Financement d'ateliers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Mécénat de compétences
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Mise à disposition de matériel ou locaux
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:border-amber-500/30 transition-colors" data-reveal data-reveal-delay="160">
              <Gift className="w-8 h-8 text-amber-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">Don en nature</h3>
              <p className="text-gray-400 mb-4">
                Matériel audiovisuel, tablettes, locaux pour les ateliers et tournages.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Caméras, micros, éclairages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Tablettes pour les ateliers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Espaces pour les tournages
                </li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-xl p-8 hover:border-amber-500/30 transition-colors" data-reveal data-reveal-delay="240">
              <Users className="w-8 h-8 text-amber-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3">Bénévolat</h3>
              <p className="text-gray-400 mb-4">
                Rejoignez l'équipe. Encadrement, logistique, communication, administration.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Encadrement des ateliers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Logistique des tournages
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500/60 flex-shrink-0" />
                  Communication et réseaux sociaux
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCE */}
      <section className="py-20 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-reveal>Transparence</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: '100%', label: 'bénévole', desc: 'Aucun salarié — chaque euro va au programme' },
              { number: '500+', label: 'jeunes formés', desc: 'Depuis la création en 2015' },
              { number: '30+', label: 'films produits', desc: 'Courts et longs métrages' },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-reveal data-reveal-delay={String(i * 80)}>
                <div className="text-4xl font-bold text-amber-500 mb-2 logo-font">{stat.number}</div>
                <p className="text-white font-semibold">{stat.label}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4" data-reveal>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Association loi 1901</p>
                <p className="text-gray-500 text-sm">Déclarée en préfecture de Seine-Saint-Denis</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Gestion désintéressée</p>
                <p className="text-gray-500 text-sm">Aucune rémunération des dirigeants — bénévolat total</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Intérêt général</p>
                <p className="text-gray-500 text-sm">Ateliers gratuits, ouverts à tous les jeunes de 12 à 25 ans sans condition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ DONS */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-reveal>Questions fréquentes</h2>

          <div className="divide-y divide-gray-800">
            {faqItems.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-lg font-medium text-gray-200 pr-4 group-hover:text-white transition-colors">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="pb-6 animate-fade-in">
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 bg-gray-950 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <Heart className="w-12 h-12 text-amber-500 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à nous soutenir ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Un don, un partenariat, du bénévolat — chaque geste compte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={HELLOASSO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-lg"
            >
              <Heart className="w-5 h-5" />
              Faire un don
              <ExternalLink className="w-4 h-4 opacity-60" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 text-white border border-white/20 hover:border-white/40 font-medium px-10 py-5 text-lg rounded-xl transition-all duration-300"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            Paiement sécurisé via HelloAsso • Reçu fiscal automatique • <a href="mailto:contact@banlieuwood.fr" className="text-amber-500/70 hover:text-amber-500 transition-colors">contact@banlieuwood.fr</a>
          </p>
        </div>
      </section>
    </div>
  );
}
