import { Play, ArrowRight, Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const [playVideo, setPlayVideo] = useState(false);
  const scrollRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-black text-white pt-20" ref={scrollRef}>
      {/* HERO — éditorial, pas marketing */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto" data-reveal>
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-6">Depuis 2015 à Saint-Denis</p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-[1.05]">
            Le cinéma<br />
            <span className="text-amber-500">des quartiers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Former des jeunes au cinéma. Produire des films. Créer des opportunités.
          </p>
        </div>
      </section>

      {/* NOTRE HISTOIRE — narratif, pas grille */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16" data-reveal>
            <div className="md:col-span-3">
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <span className="text-amber-500 font-bold text-3xl">2015.</span> Tout commence avec une idée simple :
                  <span className="text-white font-semibold"> amener le cinéma directement dans les quartiers.</span>
                </p>
                <p>
                  Créée par des professionnels du cinéma,
                  Banlieuwood part d'un constat : les jeunes des quartiers ont du talent,
                  mais zéro accès aux métiers de l'audiovisuel.
                </p>
                <p>
                  Le cinéma, ça s'apprend par la pratique. Pas en regardant des tutos.
                  En faisant. Avec du vrai matos. Encadré par des pros.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col justify-center gap-6">
              <div>
                <div className="text-4xl font-bold text-white logo-font">500+</div>
                <p className="text-gray-500 text-sm">jeunes formés</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white logo-font">30+</div>
                <p className="text-gray-500 text-sm">films produits</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white logo-font">85%</div>
                <p className="text-gray-500 text-sm">continuent en audiovisuel</p>
                <p className="text-gray-600 text-xs mt-1">Étude interne 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO — pleine largeur */}
      <section className="px-4 pb-12 bg-black">
        <div className="max-w-6xl mx-auto" data-reveal>
          <div className="aspect-[21/9] rounded-xl overflow-hidden">
            <img
              src="/images/equipe-toit.webp"
              alt="L'équipe Banlieuwood sur un toit à Saint-Denis (93) — professionnels du cinéma encadrant les ateliers gratuits pour les jeunes"
              className="w-full h-full object-cover object-[50%_30%]"
              width={960}
              height={540}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* VIDÉO — pleine largeur */}
      <section className="px-4 pb-20 bg-black">
        <div className="max-w-6xl mx-auto" data-reveal>
          {!playVideo ? (
            <div
              className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <img
                src="https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us"
                alt="Tournage Banlieuwood"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-black ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-bold text-2xl">Banlieuwood en 2 minutes</p>
              </div>
            </div>
          ) : (
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://player.vimeo.com/video/1161231299?autoplay=1"
                title="Banlieuwood - Présentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>
      </section>

      {/* PARCOURS — timeline simple */}
      <section className="py-20 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-reveal>
            Les moments clés
          </h2>

          <div className="space-y-0">
            {[
              { year: '2015', text: 'Premiers ateliers à Saint-Denis avec 12 jeunes' },
              { year: '2017', text: 'Production de courts-métrages avec des collèges partenaires' },
              { year: '2019', text: 'Tic Tac — long-métrage avec 22 jeunes, diffusé sur Amazon Prime Video' },
              { year: '2021', text: '"Voir la Mer" remporte 3 prix en festivals' },
              { year: '2023', text: '11 films réalisés, plus de 200 jeunes formés' },
              { year: '2024', text: 'Développement du parcours pédagogique en 8 modules' },
              { year: '2025', text: 'Lancement de la plateforme interactive sur tablettes' },
            ].map((m, i) => (
              <div
                key={i}
                className="flex gap-6 py-6 border-b border-gray-800/50 last:border-0"
                data-reveal
                data-reveal-delay={String(i * 60)}
              >
                <span className="text-amber-500 font-bold text-lg w-16 flex-shrink-0">{m.year}</span>
                <p className="text-gray-300 text-lg">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'ÉQUIPE — liste simple */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-reveal>L'équipe</h2>
          <p className="text-gray-400 mb-12" data-reveal>Les professionnels qui encadrent les ateliers</p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { name: 'Adrian YOUNSI', role: 'Président & Fondateur', bio: 'Professionnel de l\'audiovisuel, à l\'origine du projet depuis 2015' },
              { name: 'Wadi LAADAM', role: 'Producteur', bio: 'Production et coordination des tournages' },
              { name: 'Anwar LAADAM', role: 'Producteur', bio: 'Production et développement de projets' },
              { name: 'Romain NDIAYE CHANSAREL', role: 'Producteur', bio: 'Production et encadrement des ateliers' },
              { name: 'Sandrine FELQUIN', role: 'Rédactrice en Chef', bio: 'Écriture scénaristique et accompagnement narratif' },
              { name: 'Alice VALETTE', role: 'Rédactrice en Chef', bio: 'Écriture et direction artistique éditoriale' },
            ].map((member, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 border-b border-gray-800/50"
                data-reveal
                data-reveal-delay={String(i * 50)}
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-500 font-bold text-sm">
                    {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold">{member.name}</p>
                  <p className="text-amber-500/70 text-sm">{member.role}</p>
                  <p className="text-gray-600 text-xs">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATUT — honnête et clair */}
      <section className="py-20 px-4 bg-gray-950 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-reveal>
            Notre statut
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-5" data-reveal>
              <Shield className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-white font-semibold">Association loi 1901</p>
                <p className="text-gray-500 text-sm">Déclarée en préfecture de Seine-Saint-Denis</p>
              </div>
            </div>
            <div className="flex items-start gap-5" data-reveal data-reveal-delay="80">
              <CheckCircle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-white font-semibold">Gestion désintéressée</p>
                <p className="text-gray-500 text-sm">100% bénévole — chaque euro va aux ateliers et aux films</p>
              </div>
            </div>
            <div className="flex items-start gap-5" data-reveal data-reveal-delay="160">
              <Award className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-white font-semibold">Dons déductibles d'impôts</p>
                <p className="text-gray-500 text-sm">Réduction de 66% sur l'impôt sur le revenu pour les donateurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOUTENIR — résumé avec renvoi */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-reveal>Soutenir Banlieuwood</h2>
          <p className="text-gray-400 mb-8" data-reveal>Association 100% bénévole — chaque euro va aux ateliers</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Don financier', desc: 'Déductible à 66% de l\'IR. Reçu fiscal délivré.' },
              { title: 'Mécénat entreprise', desc: 'Déduction 60% de l\'IS. Partenariats sur-mesure.' },
              { title: 'Bénévolat & dons en nature', desc: 'Matériel, compétences, locaux, logistique.' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 rounded-xl p-6" data-reveal data-reveal-delay={String(i * 80)}>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" data-reveal>
            <Link
              to="/soutenir"
              className="text-amber-500 font-bold inline-flex items-center gap-2 hover:gap-3 transition-all text-lg"
            >
              Toutes les façons de nous soutenir <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — minimal */}
      <section className="py-32 px-4 bg-gray-950 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center" data-reveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vous voulez participer ?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Jeune, établissement ou pro — on a une place pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programme"
              className="group btn-primary inline-flex items-center justify-center gap-3 px-10 py-5 text-lg"
            >
              Le programme
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 text-white border border-white/20 hover:border-white/40 font-medium px-10 py-5 text-lg rounded-xl transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}