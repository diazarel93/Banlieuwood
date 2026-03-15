import { Film, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Film className="w-24 h-24 text-amber-500" strokeWidth={1} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-amber-500">?</span>
            </div>
          </div>
        </div>

        <h1 className="text-8xl font-bold mb-4 text-amber-500">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Page introuvable</h2>
        <p className="text-xl text-gray-300 mb-12 font-light">
          Oups ! Cette page n'existe pas ou a été déplacée. Mais ne vous inquiétez pas, nos ateliers sont toujours là !
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </Link>
          <Link
            to="/programme"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
          >
            <Film className="w-5 h-5" />
            Le Programme
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4">Vous cherchez peut-être :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/films" className="text-amber-500 hover:text-amber-400 transition-colors">
              Nos Films
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/etablissements" className="text-amber-500 hover:text-amber-400 transition-colors">
              Établissements
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/about" className="text-amber-500 hover:text-amber-400 transition-colors">
              À Propos
            </Link>
            <span className="text-gray-700">•</span>
            <Link to="/contact" className="text-amber-500 hover:text-amber-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
