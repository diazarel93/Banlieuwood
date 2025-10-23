import { Sparkles, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function StickyCtaButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();

  const hideOnPages = ['/ateliers', '/contact', '/dons'];
  const shouldShow = !hideOnPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!shouldShow || isHidden) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative group">
        <button
          onClick={() => setIsHidden(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-800 z-10"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        <Link
          to="/ateliers"
          className="flex items-center gap-2 md:gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-4 md:px-6 py-3 md:py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse flex-shrink-0" />
          <div>
            <div className="text-xs md:text-sm leading-tight">Inscription Gratuite</div>
            <div className="text-xs font-normal opacity-90 hidden sm:block">Places limitées</div>
          </div>
        </Link>

        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
