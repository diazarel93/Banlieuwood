import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, TrendingUp, Film } from 'lucide-react';

interface Story {
  name: string;
  age: number;
  location: string;
  before: {
    image?: string;
    situation: string;
    quote: string;
  };
  after: {
    image?: string;
    situation: string;
    achievement: string;
    quote: string;
  };
  stats: {
    icon: any;
    label: string;
    value: string;
  }[];
}

const stories: Story[] = [
  {
    name: 'Mohamed',
    age: 17,
    location: 'Paris 19ème',
    before: {
      situation: 'Lycéen sans projet précis',
      quote: "Je passais mes journées à traîner dans le quartier, je savais pas quoi faire de ma vie."
    },
    after: {
      situation: 'Réalisateur & monteur',
      achievement: 'Son court-métrage sélectionné à Cannes Junior',
      quote: "Banlieuwood m'a ouvert les yeux. Aujourd'hui je prépare une école de cinéma et j'ai tourné 3 films."
    },
    stats: [
      { icon: Film, label: 'Films réalisés', value: '3' },
      { icon: Award, label: 'Sélections festivals', value: '2' },
      { icon: TrendingUp, label: 'Progression', value: '+500%' }
    ]
  },
  {
    name: 'Sarah',
    age: 19,
    location: 'Saint-Denis',
    before: {
      situation: 'En recherche d\'emploi',
      quote: "Après le bac, je ne trouvais rien. Je me sentais invisible."
    },
    after: {
      situation: 'Chef opératrice',
      achievement: 'Stage chez Canal+ et formations continues',
      quote: "J'ai découvert ma passion pour l'image. Aujourd'hui je travaille sur des vrais plateaux."
    },
    stats: [
      { icon: Film, label: 'Projets pro', value: '7' },
      { icon: Award, label: 'Certifications', value: '3' },
      { icon: TrendingUp, label: 'Réseau', value: '+50 contacts' }
    ]
  },
  {
    name: 'Karim',
    age: 22,
    location: 'Bobigny',
    before: {
      situation: 'Petits boulots sans perspectives',
      quote: "Je galérais à joindre les deux bouts, aucune formation, aucun diplôme."
    },
    after: {
      situation: 'Scénariste-réalisateur',
      achievement: 'Long métrage en préparation',
      quote: "Banlieuwood a cru en moi quand personne n'y croyait. Maintenant c'est moi qui inspire d'autres jeunes."
    },
    stats: [
      { icon: Film, label: 'Scénarios écrits', value: '5' },
      { icon: Award, label: 'Prix obtenus', value: '1' },
      { icon: TrendingUp, label: 'Budget levé', value: '25K€' }
    ]
  }
];

export default function BeforeAfterStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const story = stories[currentIndex];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setShowAfter(false);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setShowAfter(false);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            De <span className="gradient-text">la cité</span> au <span className="gradient-text">grand écran</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvre les parcours inspirants de jeunes comme toi qui ont transformé leur vie grâce au cinéma
          </p>
        </div>

        {/* Story Card */}
        <div className="relative">
          <div className="glass-strong rounded-3xl overflow-hidden border border-amber-500/30">
            {/* Toggle Button */}
            <div className="flex bg-black/50">
              <button
                onClick={() => setShowAfter(false)}
                className={`flex-1 py-4 font-bold text-lg transition-all duration-300 ${
                  !showAfter ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                😔 Avant
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`flex-1 py-4 font-bold text-lg transition-all duration-300 ${
                  showAfter ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                🚀 Après
              </button>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="mb-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white">
                  {story.name.charAt(0)}
                </div>
                <h3 className="text-3xl font-bold mb-2">{story.name}, {story.age} ans</h3>
                <p className="text-gray-400">{story.location}</p>
              </div>

              {/* Before/After Content */}
              <div className="min-h-[300px]">
                {!showAfter ? (
                  <div className="animate-fade-in">
                    <div className="text-center mb-6">
                      <span className="inline-block px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-semibold mb-4">
                        {story.before.situation}
                      </span>
                    </div>
                    <blockquote className="text-2xl text-gray-300 italic text-center leading-relaxed">
                      "{story.before.quote}"
                    </blockquote>
                  </div>
                ) : (
                  <div className="animate-fade-in">
                    <div className="text-center mb-6">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-full text-sm font-bold mb-2">
                        {story.after.situation}
                      </span>
                      <p className="text-green-400 font-semibold">
                        ✨ {story.after.achievement}
                      </p>
                    </div>
                    <blockquote className="text-2xl text-white italic text-center leading-relaxed mb-8">
                      "{story.after.quote}"
                    </blockquote>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {story.stats.map((stat, index) => (
                        <div key={index} className="glass rounded-xl p-4 text-center">
                          <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-amber-500 mb-1">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevStory}
              className="glass-strong p-4 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Histoire précédente"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setShowAfter(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-amber-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Histoire ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextStory}
              className="glass-strong p-4 rounded-full hover:bg-white/20 transition-all duration-300"
              aria-label="Histoire suivante"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-2xl text-white mb-6">
            Et toi, quelle sera <span className="gradient-text font-bold">ton histoire</span> ?
          </p>
          <a
            href="/ateliers"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-10 py-5 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
          >
            Commencer mon parcours
          </a>
        </div>
      </div>
    </section>
  );
}
