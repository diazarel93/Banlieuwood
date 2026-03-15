import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string;
}

const BASE_URL = 'https://banlieuwood.fr';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const PAGE_SEO_DATA: Record<string, SEOProps> = {
  '/': {
    title: 'Banlieuwood | Programme Pédagogique Cinéma pour Jeunes 12-25 ans',
    description: 'Programme cinéma en 8 modules pour jeunes de 12 à 25 ans. Outil numérique, ateliers gratuits, de spectateur à créateur. Saint-Denis (93).',
    keywords: 'programme cinéma, formation audiovisuelle, école cinéma banlieue, 8 modules, outil numérique, Saint-Denis',
  },
  '/programme': {
    title: 'Le Programme | 8 Modules Cinéma | Banlieuwood',
    description: 'Parcours pédagogique en 8 modules : observer, comprendre, imaginer, clarifier, construire, écrire, visualiser, produire. 3 formules adaptées.',
    keywords: 'programme cinéma, 8 modules, formation réalisation, atelier cinéma gratuit, Carte Talent',
  },
  '/films': {
    title: 'Films Réalisés | Court-Métrages des Jeunes de Banlieuwood',
    description: 'Regardez les court-métrages réalisés par nos jeunes talents : fictions, documentaires, clips. Plus de 18 films créés depuis 2015.',
    keywords: 'court métrage jeunes, films banlieue, documentaire quartiers, création audiovisuelle',
  },
  '/about': {
    title: 'À Propos | Banlieuwood — Programme Cinéma & Plateforme EdTech',
    description: 'Découvrez Banlieuwood : notre vision, nos principes pédagogiques, notre équipe et nos agréments. Association loi 1901 à Saint-Denis depuis 2015.',
    keywords: 'association cinéma, plateforme edtech, principes pédagogiques, quartiers populaires, égalité des chances',
  },
  '/etablissements': {
    title: 'Établissements | Programme Cinéma pour Écoles & Collectivités | Banlieuwood',
    description: '8 modules interactifs pour développer créativité, expression et coopération. Agréé Jeunesse & Éducation Populaire. Outil numérique sur tablettes.',
    keywords: 'programme cinéma école, éducation artistique culturelle, intervention scolaire, collectivité locale, EAC',
  },
  '/contact': {
    title: 'Contact | Nous Joindre | Banlieuwood',
    description: 'Contactez-nous pour toute question : inscription, partenariat, presse. Nous sommes à Saint-Denis (93).',
    keywords: 'contact banlieuwood, nous joindre, inscription programme, Saint-Denis',
  },
};

export default function SEO({ title, description, keywords, ogImage, canonicalPath }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const pagePath = location.pathname;
    const pageData = PAGE_SEO_DATA[pagePath] || PAGE_SEO_DATA['/'];

    const finalTitle = title || pageData.title;
    const finalDescription = description || pageData.description;
    const finalKeywords = keywords || pageData.keywords;
    const finalOgImage = ogImage || DEFAULT_OG_IMAGE;
    const finalCanonical = canonicalPath || `${BASE_URL}${pagePath}`;

    document.title = finalTitle;

    updateMetaTag('name', 'description', finalDescription);
    updateMetaTag('name', 'keywords', finalKeywords);
    updateMetaTag('property', 'og:title', finalTitle);
    updateMetaTag('property', 'og:description', finalDescription);
    updateMetaTag('property', 'og:url', finalCanonical);
    updateMetaTag('property', 'og:image', finalOgImage);
    updateMetaTag('name', 'twitter:title', finalTitle);
    updateMetaTag('name', 'twitter:description', finalDescription);
    updateMetaTag('name', 'twitter:image', finalOgImage);

    updateCanonical(finalCanonical);
  }, [location, title, description, keywords, ogImage, canonicalPath]);

  return null;
}

function updateMetaTag(attr: string, attrValue: string, content?: string) {
  if (!content) return;

  let element = document.querySelector(`meta[${attr}="${attrValue}"]`);

  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

function updateCanonical(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]');

  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
}
