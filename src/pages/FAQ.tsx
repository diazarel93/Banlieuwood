import { HelpCircle, ChevronDown, MessageCircle, Users, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Inscription',
      icon: Users,
      questions: [
        {
          q: "Qui peut participer ?",
          a: "12-25 ans. Zéro prérequis. Tu veux faire du cinéma ? Tu viens. Motivation > Expérience."
        },
        {
          q: "Je n'ai jamais touché une caméra, c'est grave ?",
          a: "80% de nos jeunes non plus au début. C'est fait pour ça. Tu apprends sur le tas, encadré par des pros."
        },
        {
          q: "Comment je m'inscris ?",
          a: "Formulaire sur la page Ateliers. On te rappelle sous 48h max pour confirmer ta place."
        },
        {
          q: "C'est payant ?",
          a: "Non. 100% gratuit. Matériel fourni. Formation offerte. Zéro frais."
        },
        {
          q: "Combien de places ?",
          a: "12-20 places selon l'atelier. Pour un vrai suivi perso. Les places partent vite."
        },
        {
          q: "Je peux venir avec des potes ?",
          a: "Oui, et c'est même cool. Mentionne-le dans ton inscription."
        }
      ]
    },
    {
      category: 'Les Ateliers',
      icon: Sparkles,
      questions: [
        {
          q: "Ça dure combien de temps ?",
          a: "2 jours à 2 ans. Découverte (2-5j), Trimestriel (3 mois), Semestriel (6 mois), Long métrage (1-2 ans). À toi de choisir."
        },
        {
          q: "J'ai besoin de mon matos ?",
          a: "Non. On fournit tout : caméras, micros, ordis, logiciels. Tu amènes juste ta tête."
        },
        {
          q: "Qu'est-ce que j'apprends ?",
          a: "Tous les métiers : scénario, réal, cadre, montage, son, acting. Tu tournes sur plusieurs postes pour trouver ton truc."
        },
        {
          q: "Il y a des pros qui viennent ?",
          a: "Oui. Masterclass régulières avec réalisateurs, chefs op, monteurs. Visites de studios. Avant-premières."
        },
        {
          q: "J'habite loin, c'est possible ?",
          a: "Principalement Saint-Denis/93. Mais si t'es motivé et loin, contacte-nous, on peut voir."
        }
      ]
    },
    {
      category: 'Après l\'Atelier',
      icon: HelpCircle,
      questions: [
        {
          q: "J'ai un papier à la fin ?",
          a: "Oui. Attestation de participation. Valorisable pour écoles, stages, CV. Certains ateliers = certif pro."
        },
        {
          q: "Vous aidez à trouver du boulot ?",
          a: "Oui. Réseau de pros. Stages. Formations. Premiers jobs. 85% de nos anciens continuent dans l'audiovisuel."
        },
        {
          q: "Les films vont en festival ?",
          a: "Oui. On envoie nos meilleurs. Plusieurs ont gagné des prix. Reconnaissance réelle du travail."
        },
        {
          q: "Je peux mettre le film dans mon book ?",
          a: "Carrément. Le film est à vous. Tu l'utilises pour candidatures, portfolio, ce que tu veux."
        },
        {
          q: "On reste en contact après ?",
          a: "Oui. Réseau d'anciens. Tu peux revenir, participer à d'autres projets. On lâche personne."
        }
      ]
    },
    {
      category: 'Pratique',
      icon: MessageCircle,
      questions: [
        {
          q: "Ça se passe où ?",
          a: "Saint-Denis. Nos locaux + partenaires (centres sociaux, MJC). Tournages dans les quartiers, espaces urbains."
        },
        {
          q: "Je rate une session, c'est mort ?",
          a: "Non. On comprend. L'équipe te brief, tu rattrapes. Pas de stress."
        },
        {
          q: "Mes parents peuvent venir ?",
          a: "Pour les mineurs : réunion d'info avec parents. Ils sont invités à la projection finale en salle."
        },
        {
          q: "Comment je vous contacte ?",
          a: "Page Contact. Email. Ou tu passes. On répond toujours vite."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
            alt="Questions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2 rounded-full mb-6 animate-fade-in">
            <MessageCircle className="w-5 h-5 text-amber-500" />
            <span className="text-amber-400 font-bold">FAQ</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in stagger-delay-1">
            Tes <span className="gradient-text">Questions</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl leading-relaxed animate-fade-in stagger-delay-2">
            Réponses directes. Sans détours. Sans bullshit.
          </p>

          <p className="text-xl text-white font-semibold mb-8 max-w-4xl animate-fade-in stagger-delay-3">
            Tout ce que tu dois savoir avant de te lancer.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 animate-scale-in" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-glow">
                  <category.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl font-bold">{category.category}</h2>
              </div>

              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = categoryIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div
                      key={qIndex}
                      className="glass-strong rounded-2xl overflow-hidden border-2 border-white/10 hover:border-amber-500 transition-all"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                      >
                        <span className="font-bold text-lg pr-4 text-white">{faq.q}</span>
                        <ChevronDown
                          className={`w-6 h-6 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-5 text-gray-300 leading-relaxed text-lg border-t border-white/10 pt-4">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="glass-strong rounded-3xl p-12 md:p-16 text-center border-2 border-amber-500/30">
            <MessageCircle className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Encore Des <span className="gradient-text">Questions</span> ?
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              On répond à tout. Rapidement. Sans langue de bois.
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
                to="/ateliers"
                className="glass-card text-white font-bold text-xl py-5 px-8 rounded-xl border-2 border-white/20 hover:border-amber-500 transition-all hover-lift flex items-center gap-3"
              >
                <Users className="w-6 h-6" />
                Voir les Ateliers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
