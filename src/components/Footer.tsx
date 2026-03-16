import { Film, Video, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/programme', label: 'Le Programme' },
    { path: '/films', label: 'Films' },
    { path: '/etablissements', label: 'Établissements' },
    { path: '/about', label: 'À Propos' },
    { path: '/soutenir', label: 'Soutenir' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Video, label: 'Vimeo', href: 'https://vimeo.com/user95348584' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/banlieuwood/' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/banlieuwood' },
  ];

  return (
    <footer className="py-16 px-4 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-2xl font-bold hover:text-amber-500 transition-colors mb-4"
          >
            <Film className="w-8 h-8 text-amber-500" strokeWidth={1.5} />
            <span className="logo-font">BANLIEUWOOD</span>
          </Link>
          <p className="text-gray-400 mb-2">
            Amener le cinéma en bas de chez vous. Des ateliers pour les jeunes de 12 à 25 ans.
          </p>
          <p className="text-gray-500 text-sm mb-2">Association loi 1901</p>
          <p className="text-gray-500 text-sm mb-1">10 rue Frazier, Saint-Denis</p>
          <a href="mailto:contact@banlieuwood.fr" className="text-gray-500 text-sm hover:text-amber-500 transition-colors">
            contact@banlieuwood.fr
          </a>
          <div className="flex gap-4 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center text-gray-400 hover:text-black transition-all"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-center text-gray-400 text-sm space-y-2">
            <p>&copy; {new Date().getFullYear()} Banlieuwood — Tous droits réservés.</p>
            <Link to="/mentions-legales" className="text-gray-500 hover:text-gray-300 transition-colors text-xs">
              Mentions légales & Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
