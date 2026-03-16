import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

const defaultMeta = {
  title: 'Banlieuwood - Programme Cinéma en 8 Modules pour les 12-25 ans',
  description: 'Programme pédagogique cinéma en 8 modules avec outil numérique. De spectateur à créateur. Ateliers gratuits pour les jeunes de 12 à 25 ans.',
  image: 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us',
  keywords: 'programme cinéma, 8 modules, formation gratuite, jeunes banlieue, outil numérique, plateforme edtech, court métrage, long métrage',
  siteName: 'Banlieuwood',
  url: 'https://banlieuwood.fr'
};

const pageMetadata: Record<string, { title: string; description: string; keywords?: string }> = {
  '/': {
    title: 'Banlieuwood — Atelier Cinéma Gratuit Jeunes 12-25 ans | Saint-Denis 93',
    description: 'Programme cinéma en 8 modules 100% gratuit pour jeunes de 12 à 25 ans. Outil numérique, ateliers encadrés par des pros du cinéma. Saint-Denis (93).',
    keywords: 'atelier cinéma gratuit, formation audiovisuelle jeunes, programme cinéma 8 modules, école cinéma banlieue, outil numérique pédagogique, éducation à l\'image, Saint-Denis, Seine-Saint-Denis 93, Île-de-France, cinéma quartiers populaires'
  },
  '/programme': {
    title: 'Programme 8 Modules Cinéma Gratuit — Banlieuwood',
    description: 'Parcours pédagogique cinéma en 8 modules. 3 formules adaptées collège, lycée, structures jeunesse. Outil numérique sur tablettes inclus.',
    keywords: 'programme pédagogique cinéma, parcours 8 modules, formation réalisation film gratuite, atelier audiovisuel collège lycée, apprendre le cinéma, éducation artistique culturelle cinéma'
  },
  '/films': {
    title: 'Films Réalisés par les Jeunes — Banlieuwood',
    description: 'Courts et longs métrages réalisés par les jeunes de Banlieuwood. Films primés en festivals, diffusés sur Amazon Prime Video.',
    keywords: 'court métrage jeunes banlieue, films réalisés par des jeunes, festival film jeunesse, Amazon Prime Video, création audiovisuelle quartiers, cinéma social'
  },
  '/about': {
    title: 'À Propos — Banlieuwood | Association Cinéma Saint-Denis',
    description: 'Association loi 1901 à Saint-Denis depuis 2015. 500+ jeunes formés, 30+ films produits. Équipe de professionnels du cinéma.',
    keywords: 'association cinéma quartiers populaires, formation audiovisuelle gratuite, programme éducation image, association loi 1901 Saint-Denis, cinéma banlieue'
  },
  '/etablissements': {
    title: 'Programme Cinéma pour Écoles et Collectivités — Banlieuwood',
    description: 'Programme cinéma clé en main pour établissements scolaires. Éligible EAC, PEAC, Pass Culture, Politique de la Ville. Outil numérique sur tablettes.',
    keywords: 'intervention cinéma établissement scolaire, programme EAC cinéma, PEAC cinéma, Pass Culture, atelier audiovisuel collège lycée, Politique de la Ville, Cité Éducative, socle commun, DRAC, CLAS, PRE'
  },
  '/contact': {
    title: 'Contact — Inscription Atelier Cinéma | Banlieuwood',
    description: 'Contactez Banlieuwood pour inscription, partenariat ou organiser un programme cinéma dans votre école. Réponse sous 48h. Saint-Denis (93).',
    keywords: 'contacter Banlieuwood, inscription atelier cinéma gratuit, organiser atelier cinéma école, Saint-Denis 93'
  }
};

export default function EnhancedSEO({ title, description, image, type = 'website', keywords }: SEOProps) {
  const location = useLocation();
  const pageMeta = pageMetadata[location.pathname] || {};

  const metaTitle = title || pageMeta.title || defaultMeta.title;
  const metaDescription = description || pageMeta.description || defaultMeta.description;
  const metaImage = image || defaultMeta.image;
  const metaKeywords = keywords || pageMeta.keywords || defaultMeta.keywords;
  const canonicalUrl = `${defaultMeta.url}${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Banlieuwood",
    "url": defaultMeta.url,
    "logo": defaultMeta.image,
    "description": defaultMeta.description,
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Saint-Denis",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://www.facebook.com/banlieuwood",
      "https://www.instagram.com/banlieuwood",
      "https://www.youtube.com/banlieuwood"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "contact@banlieuwood.fr"
    }
  };

  const eventStructuredData = location.pathname === '/programme' ? {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": "Ateliers Cinéma Banlieuwood",
    "description": "Ateliers de cinéma gratuits pour les jeunes de 12 à 25 ans. 8 modules pédagogiques avec outil numérique sur tablettes.",
    "organizer": {
      "@type": "Organization",
      "name": "Banlieuwood",
      "url": defaultMeta.url
    },
    "location": {
      "@type": "Place",
      "name": "Banlieuwood",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "10 rue Frazier",
        "addressLocality": "Saint-Denis",
        "postalCode": "93200",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  } : null;

  const faqStructuredData = location.pathname === '/etablissements' ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Les élèves ont-ils besoin d'expérience en cinéma ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Non, le programme est conçu pour des débutants complets. Aucun prérequis technique ou artistique." }
      },
      {
        "@type": "Question",
        "name": "Quel matériel est nécessaire pour l'atelier cinéma ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Léger et accessible. L'essentiel est fourni par Banlieuwood : tablettes avec outil numérique dédié, caméra, matériel son." }
      },
      {
        "@type": "Question",
        "name": "Quelle durée prévoir pour un programme cinéma en classe ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Modulable. De quelques séances avec la Formule Découverte (modules 1 à 5) à un programme complet avec tournage avec la Formule Création ou Production (modules 1 à 8)." }
      },
      {
        "@type": "Question",
        "name": "Le programme est-il éligible à l'EAC et au PEAC ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oui. Le programme couvre les 3 piliers du PEAC : Rencontres avec des professionnels du cinéma, Pratiques artistiques (écriture, tournage, montage) et Connaissances (analyse d'image, grammaire cinématographique). Il est également éligible au Pass Culture (part collective), aux Contrats de Ville et aux dispositifs Cité Éducative." }
      },
      {
        "@type": "Question",
        "name": "Comment financer un atelier cinéma dans un établissement scolaire ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Plusieurs dispositifs sont mobilisables : EAC/PEAC, Pass Culture (part collective), Politique de la Ville, Conseil Départemental, Conseil Régional Île-de-France, DRAC, FDVA, CAF/CLAS, Programme de Réussite Éducative. Nous accompagnons les établissements dans le montage des dossiers." }
      },
      {
        "@type": "Question",
        "name": "Pourquoi choisir Banlieuwood pour un atelier cinéma ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Un programme structuré en 8 modules, testés depuis 2015. Un outil numérique interactif sur tablettes. Des intervenants professionnels du cinéma. Plus de 500 jeunes formés et 30 films produits." }
      }
    ]
  } : null;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={defaultMeta.siteName} />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />

        {/* Additional Meta */}
        <meta name="author" content="Banlieuwood" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        {eventStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(eventStructuredData)}
          </script>
        )}
        {faqStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(faqStructuredData)}
          </script>
        )}
      </Helmet>
    </>
  );
}
