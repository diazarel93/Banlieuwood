import { Film, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/programme', label: 'Le Programme' },
    { path: '/films', label: 'Films' },
    { path: '/etablissements', label: 'Établissements' },
    { path: '/about', label: 'À Propos' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 text-lg lg:text-xl font-bold group"
            >
              <Film className="w-6 h-6 lg:w-7 lg:h-7 text-amber-500" strokeWidth={1.5} />
              <span className="hidden sm:inline logo-font">BANLIEUWOOD</span>
              <span className="sm:hidden logo-font">BW</span>
            </Link>

            <div className="hidden lg:flex gap-6 items-center text-sm">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold transition-all whitespace-nowrap relative group ${
                    isActive(link.path)
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
              <Link
                to="/soutenir"
                className="btn-primary px-5 py-2.5 text-sm font-semibold rounded-lg inline-flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Soutenir
              </Link>
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
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left font-semibold transition-all py-4 px-5 rounded-xl ${
                    isActive(link.path)
                      ? 'text-amber-400 bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/soutenir"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center btn-primary font-semibold py-4 px-5 rounded-xl mt-2"
              >
                <Heart className="w-4 h-4 inline mr-2" />
                Soutenir
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
