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
const OG_IMAGE = 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us';
const DEFAULT_OG_IMAGE = OG_IMAGE;

const PAGE_SEO_DATA: Record<string, SEOProps> = {
  '/': {
    title: 'Banlieuwood | Atelier Cinéma Gratuit Jeunes 12-25 ans | Saint-Denis 93',
    description: 'Programme cinéma en 8 modules 100% gratuit pour jeunes de 12 à 25 ans. Outil numérique sur tablettes, ateliers encadrés par des pros. De spectateur à créateur. Saint-Denis (93).',
    keywords: 'atelier cinéma gratuit, formation audiovisuelle jeunes, programme cinéma 8 modules, école cinéma banlieue, outil numérique pédagogique, éducation à l\'image, atelier réalisation film, court métrage jeunes, Saint-Denis, Seine-Saint-Denis 93, Île-de-France, cinéma quartiers populaires, formation gratuite audiovisuel',
  },
  '/programme': {
    title: 'Programme 8 Modules Cinéma Gratuit | Banlieuwood',
    description: 'Parcours pédagogique cinéma en 8 modules : observer, comprendre, imaginer, clarifier, construire, écrire, visualiser, produire. 3 formules adaptées collège, lycée, structures jeunesse.',
    keywords: 'programme pédagogique cinéma, parcours 8 modules cinéma, formation réalisation film gratuite, atelier audiovisuel collège lycée, apprendre le cinéma gratuitement, formule découverte création production, outil numérique tablette, éducation artistique culturelle cinéma, atelier scénario, atelier tournage, atelier montage',
  },
  '/films': {
    title: 'Films Réalisés par les Jeunes | Banlieuwood',
    description: 'Courts et longs métrages réalisés par les jeunes de Banlieuwood depuis 2015. Films primés en festivals, diffusés sur Amazon Prime Video. Fictions, documentaires, clips.',
    keywords: 'court métrage jeunes banlieue, films réalisés par des jeunes, festival film jeunesse, Amazon Prime Video, création audiovisuelle quartiers, cinéma social, films primés festival, long métrage jeunes, documentaire quartiers populaires, Voir la Mer film, Tic Tac film',
  },
  '/about': {
    title: 'À Propos | Banlieuwood — Association Cinéma Saint-Denis',
    description: 'Association loi 1901 à Saint-Denis depuis 2015. 500+ jeunes formés, 30+ films produits. Notre équipe de professionnels du cinéma et notre vision.',
    keywords: 'association cinéma quartiers populaires, formation audiovisuelle gratuite, programme éducation image, association loi 1901 Saint-Denis, cinéma social éducation, histoire Banlieuwood, équipe Banlieuwood, Adrian Younsi, cinéma banlieue Seine-Saint-Denis',
  },
  '/etablissements': {
    title: 'Programme Cinéma pour Écoles et Collectivités | Banlieuwood',
    description: 'Programme cinéma clé en main pour établissements scolaires. 8 modules interactifs, outil numérique sur tablettes. Éligible EAC, PEAC, Pass Culture, Politique de la Ville.',
    keywords: 'intervention cinéma établissement scolaire, programme EAC cinéma, atelier audiovisuel collège lycée, éducation artistique culturelle, PEAC cinéma, parcours éducation image, Politique de la Ville cinéma, atelier cinéma école gratuit, programme scolaire audiovisuel, Pass Culture part collective, Cité Éducative, socle commun compétences cinéma, CLAS cinéma, PRE Réussite Éducative, DRAC Île-de-France, atelier cinéma Seine-Saint-Denis 93',
  },
  '/contact': {
    title: 'Contact | Inscription Atelier Cinéma | Banlieuwood',
    description: 'Contactez Banlieuwood : inscription atelier cinéma, organiser un programme dans votre école, devenir partenaire. Réponse sous 48h. Saint-Denis (93).',
    keywords: 'contacter Banlieuwood, inscription atelier cinéma gratuit, organiser atelier cinéma école, partenariat cinéma jeunesse, Saint-Denis Seine-Saint-Denis 93, contact association cinéma',
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
