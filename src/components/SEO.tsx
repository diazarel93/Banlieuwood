import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalPath?: string;
}

const BASE_URL = 'https://banlieuwood.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

const PAGE_SEO_DATA: Record<string, SEOProps> = {
  '/': {
    title: 'Banlieuwood | Atelier Cinéma Gratuit pour Jeunes 12-25 ans | Formation Audiovisuelle',
    description: 'Formation cinéma 100% gratuite pour jeunes de 12 à 25 ans. Ateliers audiovisuels, réalisation de films, montage vidéo. Devenez réalisateur sans diplôme. Saint-Denis (93).',
    keywords: 'atelier cinéma gratuit, formation audiovisuelle gratuite, école cinéma banlieue, apprendre le cinéma, Saint-Denis',
  },
  '/about': {
    title: 'Le Projet Banlieuwood | École de Cinéma Gratuite pour Jeunes des Quartiers',
    description: 'Découvrez Banlieuwood, association qui forme gratuitement les jeunes de 12 à 25 ans au cinéma. Notre mission : démocratiser l\'accès à la culture audiovisuelle.',
    keywords: 'association cinéma, école gratuite, quartiers populaires, culture audiovisuelle, égalité des chances',
  },
  '/ateliers': {
    title: 'Ateliers Cinéma Gratuits | Inscription Formation Audiovisuelle Jeunes',
    description: 'Rejoignez nos ateliers cinéma 100% gratuits : écriture, réalisation, tournage, montage. Ouvert aux 12-25 ans, tous niveaux. Inscrivez-vous maintenant !',
    keywords: 'inscription atelier cinéma, cours vidéo gratuit, formation réalisation, atelier montage, rejoindre formation audiovisuelle',
  },
  '/deroulement': {
    title: 'Notre Méthode | La Méthode Pédagogique Banlieuwood Cinéma',
    description: 'Découvrez notre méthode pédagogique unique en 4 étapes : masterclass & écriture, tournage professionnel, post-production complète, diffusion en salle. Formation du scénario à la projection.',
    keywords: 'méthode formation cinéma, pédagogie audiovisuelle, apprendre réalisation, processus création film, masterclass cinéma',
  },
  '/films': {
    title: 'Films Réalisés | Court-Métrages des Jeunes de Banlieuwood',
    description: 'Regardez les court-métrages réalisés par nos jeunes talents : fictions, documentaires, clips. Plus de 150 films créés depuis 2012.',
    keywords: 'court métrage jeunes, films banlieue, documentaire quartiers, création audiovisuelle',
  },
  '/reussites': {
    title: 'Impact et Réussites | Témoignages des Anciens de Banlieuwood',
    description: '87% d\'insertion professionnelle, 250+ jeunes formés. Découvrez les parcours inspirants de nos anciens devenus professionnels du cinéma.',
    keywords: 'témoignages formation cinéma, réussite jeunes banlieue, insertion professionnelle audiovisuel, devenir réalisateur',
  },
  '/partenaires': {
    title: 'Nos Partenaires | Institutions et Entreprises qui Soutiennent Banlieuwood',
    description: 'Ville de Saint-Denis, DRAC Île-de-France, Canal+, France Télévisions... Découvrez nos partenaires qui croient en notre mission.',
    keywords: 'partenaires cinéma, soutiens institutionnels, sponsors formation audiovisuelle',
  },
  '/faq': {
    title: 'FAQ | Questions Fréquentes sur les Ateliers Cinéma Banlieuwood',
    description: 'Comment s\'inscrire ? C\'est vraiment gratuit ? Quel matériel ? Réponses à toutes vos questions sur nos formations cinéma gratuites.',
    keywords: 'inscription gratuite cinéma, comment participer atelier, questions formation audiovisuelle',
  },
  '/dons': {
    title: 'Soutenir Banlieuwood | Dons, Bénévolat, Partenariats',
    description: 'Soutenez notre mission : don financier, bénévolat, don de matériel, prêt de salles, co-création. Toutes les formes de soutien comptent !',
    keywords: 'don association cinéma, bénévolat audiovisuel, soutenir jeunes quartiers, partenariat culturel',
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
