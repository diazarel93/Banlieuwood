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
    title: 'Banlieuwood | Atelier Cinéma Gratuit pour Jeunes 12-25 ans | Formation Audiovisuelle',
    description: 'Formation cinéma 100% gratuite pour jeunes de 12 à 25 ans. Ateliers audiovisuels, réalisation de films, montage vidéo. Devenez réalisateur sans diplôme. Saint-Denis (93).',
    keywords: 'atelier cinéma gratuit, formation audiovisuelle gratuite, école cinéma banlieue, apprendre le cinéma, Saint-Denis',
  },
  '/ateliers': {
    title: 'Ateliers Cinéma Gratuits | Inscription Formation Audiovisuelle Jeunes',
    description: 'Rejoignez nos ateliers cinéma 100% gratuits : écriture, réalisation, tournage, montage. Ouvert aux 12-25 ans, tous niveaux. Inscrivez-vous maintenant !',
    keywords: 'inscription atelier cinéma, cours vidéo gratuit, formation réalisation, atelier montage, rejoindre formation audiovisuelle',
  },
  '/films': {
    title: 'Films Réalisés | Court-Métrages des Jeunes de Banlieuwood',
    description: 'Regardez les court-métrages réalisés par nos jeunes talents : fictions, documentaires, clips. Plus de 18 films créés depuis 2015.',
    keywords: 'court métrage jeunes, films banlieue, documentaire quartiers, création audiovisuelle',
  },
  '/about': {
    title: 'À Propos | Banlieuwood — École de Cinéma Gratuite',
    description: 'Découvrez Banlieuwood : notre mission, notre équipe, nos agréments. Association loi 1901 à Saint-Denis formant les jeunes au cinéma depuis 2015.',
    keywords: 'association cinéma, école gratuite, quartiers populaires, culture audiovisuelle, égalité des chances',
  },
  '/institutions': {
    title: 'Institutions & Partenaires | Banlieuwood',
    description: 'Écoles, mairies, collectivités : découvrez nos interventions en milieu scolaire et nos partenariats institutionnels. Agréé Jeunesse & Éducation Populaire.',
    keywords: 'partenariat scolaire, intervention cinéma école, éducation artistique culturelle, collectivité locale',
  },
  '/contact': {
    title: 'Contact | Nous Joindre | Banlieuwood',
    description: 'Contactez-nous pour toute question : inscription, partenariat, presse. Nous sommes à Saint-Denis (93).',
    keywords: 'contact banlieuwood, nous joindre, inscription atelier, Saint-Denis',
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
