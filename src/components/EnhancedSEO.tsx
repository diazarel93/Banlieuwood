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
  title: 'Banlieuwood - Ateliers Cinéma Gratuits pour les 12-25 ans',
  description: 'Apprends le cinéma gratuitement avec Banlieuwood ! Ateliers de réalisation, production de films et formation professionnelle pour les jeunes de 12 à 25 ans en banlieue parisienne.',
  image: 'http://banlieuwood.fr/wp-content/uploads/2021/03/TEASER.png',
  keywords: 'atelier cinéma, formation gratuite, jeunes banlieue, réalisation film, école cinéma Paris, production audiovisuelle, court métrage, long métrage',
  siteName: 'Banlieuwood',
  url: 'https://banlieuwood.fr'
};

const pageMetadata: Record<string, { title: string; description: string; keywords?: string }> = {
  '/': {
    title: 'Banlieuwood - Le Cinéma en Bas de Chez Toi',
    description: 'Découvre les ateliers cinéma 100% gratuits de Banlieuwood. Formation professionnelle, réalisation de films et développement de talents pour les 12-25 ans.',
    keywords: 'atelier cinéma gratuit, formation jeunes, banlieue, cinéma quartier, réalisation film gratuit'
  },
  '/ateliers': {
    title: 'Nos Ateliers Cinéma - Banlieuwood',
    description: 'Choisis ton atelier : découverte (2-5 jours), trimestriel (3 mois), semestriel (6 mois) ou long métrage (1-2 ans). Tous niveaux, 100% gratuit.',
    keywords: 'atelier cinéma, formation réalisation, cours gratuit cinéma, stage audiovisuel, école cinéma gratuite'
  },
  '/films': {
    title: 'Nos Films - Banlieuwood',
    description: 'Découvre les courts et longs métrages réalisés par les jeunes de Banlieuwood. Films primés en festivals et reconnus nationalement.',
    keywords: 'court métrage, long métrage, films jeunes, cinéma banlieue, festival film'
  },
  '/about': {
    title: 'À Propos - Banlieuwood',
    description: "L'histoire de Banlieuwood : notre mission, nos valeurs et notre engagement pour démocratiser le cinéma dans les quartiers.",
    keywords: 'association cinéma, action culturelle, banlieue Paris, inclusion sociale cinéma'
  },
  '/contact': {
    title: 'Contact - Banlieuwood',
    description: 'Contacte-nous pour rejoindre nos ateliers, poser tes questions ou devenir partenaire. Réponse rapide garantie !',
    keywords: 'contact banlieuwood, inscription atelier, devenir partenaire, questions formation'
  },
  '/dons': {
    title: 'Faire un Don - Banlieuwood',
    description: 'Soutiens Banlieuwood et aide-nous à former plus de jeunes aux métiers du cinéma. Chaque don compte !',
    keywords: 'don association, soutenir banlieuwood, mécénat cinéma, financement participatif'
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

  const eventStructuredData = location.pathname === '/ateliers' ? {
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
