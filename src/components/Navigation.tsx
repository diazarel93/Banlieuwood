import { Film, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'Le Projet' },
    { path: '/deroulement', label: 'Notre Méthode' },
    { path: '/ateliers', label: 'Ateliers' },
    { path: '/films', label: 'Films' },
    { path: '/reussites', label: 'Impact' },
    { path: '/institutions', label: 'Institutions' },
    { path: '/partenaires', label: 'Partenaires' },
    { path: '/faq', label: 'FAQ' },
    { path: '/soutenir', label: 'Soutenir', highlight: true },
  ];

  const mobileLinks = [
    ...links,
    { path: '/gouvernance', label: 'Gouvernance' },
    { path: '/labels', label: 'Labels & Agréments' },
    { path: '/documentation', label: 'Documentation' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="scroll-progress" style={{ transform: 'scaleX(0)' }}></div>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 text-lg lg:text-xl font-bold group"
            >
              <div className="relative">
                <Film className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500 animate-float" strokeWidth={1.5} />
                <div className="absolute inset-0 blur-lg bg-amber-500/30 animate-glow-pulse"></div>
              </div>
              <span className="hidden sm:inline logo-font text-glow">BANLIEUWOOD</span>
              <span className="sm:hidden logo-font text-glow">BW</span>
            </Link>

            <div className="hidden lg:flex gap-6 items-center text-sm">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold transition-all whitespace-nowrap relative group ${
                    link.highlight
                      ? 'btn-primary px-6 py-3 rounded-xl'
                      : isActive(link.path)
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {!link.highlight && (
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-300 ${
                      isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-2 space-y-2 animate-slide-up">
              {mobileLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left font-semibold transition-all py-4 px-5 rounded-xl ${
                    link.highlight
                      ? 'btn-primary text-center'
                      : isActive(link.path)
                      ? 'text-amber-400 glass-card'
                      : 'text-gray-300 hover:text-white glass hover:glass-strong'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
