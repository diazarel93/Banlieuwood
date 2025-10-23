import { Quote, Play, Star } from 'lucide-react';
import { useState } from 'react';
import VideoPlayer from './VideoPlayer';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  avatar: string;
  quote: string;
  achievement: string;
  year: string;
  vimeoId?: string;
  thumbnail?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Yasmine K.',
    age: 22,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    quote: 'Banlieuwood a changé ma vie. De simple participante, je suis devenue réalisatrice professionnelle. Aujourd\'hui je travaille pour France Télévisions.',
    achievement: 'Réalisatrice TV',
    year: 'Promo 2019',
    rating: 5,
    vimeoId: '515298131',
    thumbnail: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=800'
  },
  {
    id: '2',
    name: 'Malik D.',
    age: 24,
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?w=400',
    quote: 'J\'avais jamais touché une caméra. 6 mois plus tard, mon court-métrage a remporté le prix du public au festival de Cannes Junior. Incroyable.',
    achievement: 'Chef Opérateur',
    year: 'Promo 2020',
    rating: 5
  },
  {
    id: '3',
    name: 'Leila M.',
    age: 19,
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?w=400',
    quote: 'Grâce à Banlieuwood, j\'ai été acceptée à la FEMIS. Les compétences techniques et le portfolio que j\'ai développés ici ont fait toute la différence.',
    achievement: 'Étudiante FEMIS',
    year: 'Promo 2021',
    rating: 5
  },
  {
    id: '4',
    name: 'Ibrahim S.',
    age: 23,
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?w=400',
    quote: 'Le montage, c\'était mon truc. Maintenant je monte des pubs pour des grandes marques. Tout a commencé dans cette asso.',
    achievement: 'Monteur Freelance',
    year: 'Promo 2018',
    rating: 5
  }
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <span className="text-amber-500 font-bold">4.9/5 - 250+ avis</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ils Ont <span className="gradient-text">Réussi</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            De jeunes des quartiers à professionnels du cinéma : découvrez leurs parcours inspirants
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-strong rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {testimonial.vimeoId && (
                  <button
                    onClick={() => setSelectedVideo(testimonial)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="glass-strong p-4 rounded-full shadow-glow-strong">
                      <Play className="w-10 h-10 text-amber-500" />
                    </div>
                  </button>
                )}

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                  <p className="text-amber-500 font-semibold text-sm">{testimonial.achievement}</p>
                </div>
              </div>

              <div className="p-6">
                <Quote className="w-8 h-8 text-amber-500/30 mb-3" />
                <p className="text-gray-300 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{testimonial.year}</span>
                  <span className="text-gray-500">{testimonial.age} ans</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-strong p-8 md:p-12 rounded-2xl text-center border-2 border-amber-500/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Et Toi, C'est Pour Quand ?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Rejoins les 500+ jeunes qui ont transformé leur passion en carrière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ateliers"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow"
            >
              Rejoindre un atelier
            </a>
            <a
              href="/reussites"
              className="inline-flex items-center gap-2 glass hover:bg-white/10 text-white font-semibold px-10 py-4 text-lg rounded-xl transition-all duration-300 border border-white/20"
            >
              Voir toutes les réussites
            </a>
          </div>
        </div>
      </div>

      {selectedVideo && (
        <VideoPlayer
          videos={[
            {
              title: `Témoignage ${selectedVideo.name}`,
              vimeoId: selectedVideo.vimeoId!,
              thumbnail: selectedVideo.thumbnail!
            }
          ]}
          currentIndex={0}
          onClose={() => setSelectedVideo(null)}
          onVideoChange={() => {}}
        />
      )}
    </section>
  );
}
