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
  image: 'http://banlieuwood.fr/wp-content/uploads/2021/03/TEASER.png',
  keywords: 'programme cinéma, 8 modules, formation gratuite, jeunes banlieue, outil numérique, plateforme edtech, court métrage, long métrage',
  siteName: 'Banlieuwood',
  url: 'https://banlieuwood.vercel.app'
};

const pageMetadata: Record<string, { title: string; description: string; keywords?: string }> = {
  '/': {
    title: 'Banlieuwood - Le Cinéma en Bas de Chez Toi',
    description: 'Programme cinéma en 8 modules avec outil numérique. De spectateur à créateur. Ateliers gratuits pour les 12-25 ans.',
    keywords: 'programme cinéma, 8 modules, formation jeunes, banlieue, outil numérique, de spectateur à créateur'
  },
  '/programme': {
    title: 'Le Programme - 8 Modules Cinéma - Banlieuwood',
    description: 'Parcours pédagogique en 8 modules : observer, comprendre, imaginer, clarifier, construire, écrire, visualiser, produire. 3 formules adaptées.',
    keywords: 'programme cinéma, 8 modules, formation réalisation, Carte Talent, outil numérique'
  },
  '/films': {
    title: 'Nos Films - Banlieuwood',
    description: 'Découvre les courts et longs métrages réalisés par les jeunes de Banlieuwood. Films primés en festivals et reconnus nationalement.',
    keywords: 'court métrage, long métrage, films jeunes, cinéma banlieue, festival film'
  },
  '/about': {
    title: 'À Propos - Banlieuwood',
    description: "L'histoire de Banlieuwood : notre vision, nos principes pédagogiques, notre équipe et nos agréments.",
    keywords: 'association cinéma, plateforme edtech, principes pédagogiques, banlieue Paris'
  },
  '/etablissements': {
    title: 'Établissements - Programme Cinéma pour Écoles - Banlieuwood',
    description: '8 modules interactifs pour développer créativité, expression et coopération. Agréé Jeunesse & Éducation Populaire.',
    keywords: 'programme cinéma école, éducation artistique culturelle, intervention scolaire, EAC'
  },
  '/contact': {
    title: 'Contact - Banlieuwood',
    description: 'Contactez-nous pour rejoindre notre programme, poser vos questions ou devenir partenaire.',
    keywords: 'contact banlieuwood, inscription programme, devenir partenaire'
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
    "foundingDate": "2010",
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
    "description": "Ateliers de cinéma gratuits pour les jeunes de 12 à 25 ans",
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
        "addressLocality": "Saint-Denis",
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
      </Helmet>
    </>
  );
}
