import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  role: string;
  videoUrl?: string;
  vimeoId?: string;
  thumbnail: string;
  quote: string;
  achievement: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mohamed',
    age: 19,
    location: 'Paris 19ème',
    role: 'Réalisateur',
    vimeoId: '515298131',
    thumbnail: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
    quote: "Banlieuwood a changé ma vie. J'ai découvert ma passion et aujourd'hui je vis de ma passion.",
    achievement: 'Court-métrage sélectionné à Cannes Junior'
  },
  {
    id: 2,
    name: 'Sarah',
    age: 21,
    location: 'Saint-Denis',
    role: 'Chef opératrice',
    vimeoId: '515298131',
    thumbnail: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    quote: "Avant j'étais invisible. Maintenant je fais des images qui comptent.",
    achievement: 'Stage chez Canal+ et plusieurs productions'
  },
  {
    id: 3,
    name: 'Karim',
    age: 23,
    location: 'Bobigny',
    role: 'Scénariste',
    vimeoId: '515298131',
    thumbnail: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    quote: "Ils ont cru en moi quand personne n'y croyait. Maintenant c'est mon tour d'inspirer.",
    achievement: 'Long métrage en préparation (budget 25K€)'
  },
  {
    id: 4,
    name: 'Inès',
    age: 18,
    location: 'Montreuil',
    role: 'Monteuse',
    vimeoId: '515298131',
    thumbnail: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    quote: "Le montage, c'est comme raconter une histoire avec des émotions.",
    achievement: '3 films montés, école de cinéma en vue'
  }
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const current = testimonials[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-amber-500/5 via-transparent to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ils ont vécu <span className="gradient-text">l'expérience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Écoute les témoignages authentiques de ceux qui ont transformé leur vie grâce au cinéma
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
              {!isPlaying ? (
                <>
                  <img
                    src={current.thumbnail}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-glow">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </button>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center font-bold">
                        {current.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{current.name}, {current.age} ans</h3>
                        <p className="text-sm text-gray-300">{current.role} • {current.location}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  src={`https://player.vimeo.com/video/${current.vimeoId}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prev}
                className="glass-strong p-3 rounded-full hover:bg-white/20 transition-all"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsPlaying(false);
                    }}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-8 h-3 bg-amber-500 rounded-full'
                        : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
                    }`}
                    aria-label={`Témoignage ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={next}
                className="glass-strong p-3 rounded-full hover:bg-white/20 transition-all"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-16 h-16 text-amber-500/20" />
              <blockquote className="relative text-2xl md:text-3xl font-light text-white leading-relaxed italic pl-8">
                "{current.quote}"
              </blockquote>
            </div>

            <div className="glass-strong rounded-2xl p-6 border border-amber-500/30">
              <h4 className="text-amber-500 font-semibold mb-2">Son parcours :</h4>
              <p className="text-gray-300 text-lg">{current.achievement}</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-500 mb-1">
                  {testimonials.length}
                </div>
                <div className="text-sm text-gray-400">Témoignages</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-amber-500 mb-1">100%</div>
                <div className="text-sm text-gray-400">Authentiques</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/ateliers"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
              >
                Rejoins-les maintenant
                <Play className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnails Gallery */}
        <div className="grid grid-cols-4 gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setCurrentIndex(index);
                setIsPlaying(false);
              }}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-amber-500 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.thumbnail}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Play className="w-8 h-8 text-white" fill="white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                <p className="text-white text-xs font-semibold truncate">{testimonial.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
