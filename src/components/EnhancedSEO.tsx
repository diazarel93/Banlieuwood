import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  keywords?: string;
}

const BASE_URL = 'https://banlieuwood.fr';
const DEFAULT_IMAGE = 'https://i.vimeocdn.com/video/2116522126-c1af68ec6fd856b8cd6eed98aa5bb3515ca7d7dcb6a6dd2d083e9b8855387fc7-d_1280?region=us';

const pageMetadata: Record<string, { title: string; description: string; keywords: string; breadcrumb: string }> = {
  '/': {
    title: 'Banlieuwood | Atelier Cinéma Gratuit Jeunes 12-25 ans | Saint-Denis 93',
    description: 'Programme cinéma en 8 modules 100% gratuit pour jeunes de 12 à 25 ans. Outil numérique sur tablettes, ateliers encadrés par des pros. De spectateur à créateur. Saint-Denis (93).',
    keywords: 'atelier cinéma gratuit, formation audiovisuelle jeunes, programme cinéma 8 modules, école cinéma banlieue, outil numérique pédagogique, éducation à l\'image, Saint-Denis, Seine-Saint-Denis 93, Île-de-France, cinéma quartiers populaires',
    breadcrumb: 'Accueil'
  },
  '/programme': {
    title: 'Programme 8 Modules Cinéma Gratuit | Banlieuwood',
    description: 'Parcours pédagogique cinéma en 8 modules : observer, comprendre, imaginer, clarifier, construire, écrire, visualiser, produire. 3 formules adaptées collège, lycée, structures jeunesse.',
    keywords: 'programme pédagogique cinéma, parcours 8 modules cinéma, formation réalisation film gratuite, atelier audiovisuel collège lycée, apprendre le cinéma gratuitement, outil numérique tablette, éducation artistique culturelle cinéma',
    breadcrumb: 'Programme'
  },
  '/films': {
    title: 'Films Réalisés par les Jeunes | Banlieuwood',
    description: 'Courts et longs métrages réalisés par les jeunes de Banlieuwood depuis 2015. Films primés en festivals, diffusés sur Amazon Prime Video. Fictions, documentaires, clips.',
    keywords: 'court métrage jeunes banlieue, films réalisés par des jeunes, festival film jeunesse, Amazon Prime Video, création audiovisuelle quartiers, cinéma social, films primés festival',
    breadcrumb: 'Films'
  },
  '/about': {
    title: 'À Propos | Banlieuwood — Association Cinéma Saint-Denis',
    description: 'Association loi 1901 à Saint-Denis depuis 2015. 500+ jeunes formés, 30+ films produits. Notre équipe de professionnels du cinéma et notre vision.',
    keywords: 'association cinéma quartiers populaires, formation audiovisuelle gratuite, programme éducation image, association loi 1901 Saint-Denis, cinéma social éducation, histoire Banlieuwood, Adrian Younsi',
    breadcrumb: 'À Propos'
  },
  '/etablissements': {
    title: 'Programme Cinéma pour Écoles et Collectivités | Banlieuwood',
    description: 'Programme cinéma clé en main pour établissements scolaires. 8 modules interactifs, outil numérique sur tablettes. Éligible EAC, PEAC, Pass Culture, Politique de la Ville.',
    keywords: 'intervention cinéma établissement scolaire, programme EAC cinéma, PEAC cinéma, Pass Culture, atelier audiovisuel collège lycée, Politique de la Ville, Cité Éducative, DRAC, CLAS, PRE, socle commun, atelier cinéma Seine-Saint-Denis 93',
    breadcrumb: 'Établissements'
  },
  '/contact': {
    title: 'Contact | Inscription Atelier Cinéma | Banlieuwood',
    description: 'Contactez Banlieuwood : inscription atelier cinéma, organiser un programme dans votre école, devenir partenaire. Réponse sous 48h. Saint-Denis (93).',
    keywords: 'contacter Banlieuwood, inscription atelier cinéma gratuit, organiser atelier cinéma école, Saint-Denis Seine-Saint-Denis 93',
    breadcrumb: 'Contact'
  },
  '/soutenir': {
    title: 'Soutenir Banlieuwood | Don Déductible d\'Impôts | Mécénat',
    description: 'Soutenez Banlieuwood : don déductible à 66%, mécénat entreprise (60% IS), bénévolat, don en nature. Association 100% bénévole, chaque euro va aux ateliers.',
    keywords: 'don association cinéma, mécénat entreprise audiovisuel, soutenir association jeunesse, don déductible impôts, bénévolat cinéma, reçu fiscal',
    breadcrumb: 'Soutenir'
  },
  '/mentions-legales': {
    title: 'Mentions Légales | Banlieuwood',
    description: 'Mentions légales du site banlieuwood.fr. Association loi 1901 déclarée en préfecture de Seine-Saint-Denis.',
    keywords: 'mentions légales Banlieuwood, association loi 1901, Saint-Denis',
    breadcrumb: 'Mentions légales'
  }
};

// ── Per-page structured data ────────────────────────────────────

function getBreadcrumbSchema(pathname: string, pageName: string) {
  const items: { name: string; item?: string }[] = [
    { name: 'Accueil', item: `${BASE_URL}/` }
  ];
  if (pathname !== '/') {
    items.push({ name: pageName, item: `${BASE_URL}${pathname}` });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": it.name,
      "item": it.item
    }))
  };
}

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Atelier Cinéma Gratuit — Programme en 8 Modules",
  "description": "Formation complète en réalisation cinématographique : observation, écriture de scénario, tournage, montage, diffusion. 100% gratuit pour jeunes de 12 à 25 ans à Saint-Denis (93).",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Banlieuwood",
    "url": BASE_URL
  },
  "educationalCredentialAwarded": "Attestation de participation",
  "audience": {
    "@type": "EducationalAudience",
    "audienceType": "Jeunes 12-25 ans"
  },
  "isAccessibleForFree": true,
  "numberOfCredits": 8,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "onsite",
    "location": {
      "@type": "Place",
      "name": "Saint-Denis et établissements scolaires partenaires",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Saint-Denis",
        "postalCode": "93200",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
      }
    }
  }
};

const videoSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Tic Tac — Long-métrage Banlieuwood",
    "description": "Long-métrage de fiction réalisé avec 22 jeunes des quartiers populaires de Saint-Denis (93). Distribué sur Amazon Prime Video.",
    "thumbnailUrl": DEFAULT_IMAGE,
    "uploadDate": "2019-01-01",
    "contentUrl": "https://vimeo.com/1161235536",
    "embedUrl": "https://player.vimeo.com/video/1161235536",
    "publisher": { "@type": "Organization", "name": "Banlieuwood", "url": BASE_URL },
    "inLanguage": "fr"
  },
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Voir la Mer — Court-métrage primé 3 fois",
    "description": "Court-métrage de fiction primé 3 fois en festivals. Réalisé avec des jeunes de Rosny-sous-Bois (93).",
    "thumbnailUrl": "https://i.vimeocdn.com/video/2116522335-2c12cb492e9e4cb23457fcdd53b991e25580890117f6af4a11812961a39c55bf-d_1280?region=us",
    "uploadDate": "2021-01-01",
    "contentUrl": "https://vimeo.com/1161235634",
    "embedUrl": "https://player.vimeo.com/video/1161235634",
    "publisher": { "@type": "Organization", "name": "Banlieuwood", "url": BASE_URL },
    "inLanguage": "fr",
    "award": "3 prix en festivals"
  }
];

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  "name": "Ateliers Cinéma Banlieuwood — Programme en 8 Modules",
  "description": "Ateliers de cinéma gratuits pour les jeunes de 12 à 25 ans. 8 modules pédagogiques avec outil numérique sur tablettes. Encadré par des professionnels du cinéma.",
  "organizer": {
    "@type": "Organization",
    "name": "Banlieuwood",
    "url": BASE_URL
  },
  "location": {
    "@type": "Place",
    "name": "Saint-Denis et établissements partenaires",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Saint-Denis",
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
  },
  "isAccessibleForFree": true
};

const etablissementsFaq = [
  { name: "Les élèves ont-ils besoin d'expérience en cinéma ?", text: "Non, le programme est conçu pour des débutants complets. Aucun prérequis technique ou artistique." },
  { name: "Quel matériel est nécessaire pour l'atelier cinéma ?", text: "Tout est fourni par Banlieuwood : tablettes avec outil numérique dédié, caméra, matériel son. L'établissement n'a rien à acheter." },
  { name: "Quelle durée prévoir pour un programme cinéma en classe ?", text: "Modulable. De quelques séances avec la Formule Découverte (modules 1 à 5) à un programme complet avec tournage avec la Formule Création ou Production (modules 1 à 8)." },
  { name: "Le programme est-il éligible à l'EAC et au PEAC ?", text: "Oui. Le programme couvre les 3 piliers du PEAC : Rencontres avec des professionnels du cinéma, Pratiques artistiques (écriture, tournage, montage) et Connaissances (analyse d'image, grammaire cinématographique). Il est également éligible au Pass Culture (part collective), aux Contrats de Ville et aux dispositifs Cité Éducative." },
  { name: "Comment financer un atelier cinéma dans un établissement scolaire ?", text: "Plusieurs dispositifs sont mobilisables : EAC/PEAC, Pass Culture (part collective), Politique de la Ville, Conseil Départemental, Conseil Régional Île-de-France, DRAC, FDVA, CAF/CLAS, Programme de Réussite Éducative. Nous accompagnons les établissements dans le montage des dossiers." },
  { name: "Pourquoi choisir Banlieuwood pour un atelier cinéma ?", text: "Un programme structuré en 8 modules, testés depuis 2015. Un outil numérique interactif sur tablettes. Des intervenants professionnels du cinéma. Plus de 500 jeunes formés et 30 films produits." },
];

const contactFaq = [
  { name: "Les ateliers cinéma Banlieuwood sont-ils vraiment gratuits ?", text: "Oui, 100% gratuit. Les ateliers, le matériel et l'encadrement sont entièrement pris en charge par l'association Banlieuwood. Aucun frais d'inscription." },
  { name: "Qui peut participer aux ateliers cinéma ?", text: "Les jeunes de 12 à 25 ans, sans aucun prérequis. Pas besoin d'expérience en cinéma, pas besoin de matériel. On accueille tous les niveaux, tous les profils." },
  { name: "Comment s'inscrire à un atelier cinéma Banlieuwood ?", text: "Remplissez le formulaire de contact ou envoyez un email à contact@banlieuwood.fr. On vous recontacte sous 48h pour discuter des prochaines dates et disponibilités." },
  { name: "Où se déroulent les ateliers cinéma ?", text: "À Saint-Denis (93) et dans les établissements scolaires partenaires en Île-de-France : collèges, lycées et structures jeunesse." },
  { name: "Comment organiser un atelier cinéma dans mon établissement scolaire ?", text: "Contactez-nous via le formulaire. Notre programme est éligible EAC, PEAC, Pass Culture (part collective), Politique de la Ville. Nous accompagnons les établissements dans le montage du dossier de financement." },
];

const soutenirFaq = [
  { name: "Mon don à Banlieuwood est-il déductible des impôts ?", text: "Oui. Votre don est déductible à 66% de l'impôt sur le revenu (dans la limite de 20% du revenu imposable). Un reçu fiscal (Cerfa n°11580*04) vous est délivré automatiquement." },
  { name: "Comment effectuer un don à Banlieuwood ?", text: "Par HelloAsso (paiement sécurisé en ligne) ou par virement/chèque. Contactez-nous à contact@banlieuwood.fr pour les coordonnées." },
  { name: "Mon entreprise peut-elle soutenir Banlieuwood via le mécénat ?", text: "Oui, via le mécénat d'entreprise. Déduction de 60% de l'impôt sur les sociétés (dans la limite de 0,5% du CA HT). Partenariats sur-mesure : financement d'ateliers, mise à disposition de matériel ou de locaux, mécénat de compétences." },
  { name: "À quoi sert mon don concrètement ?", text: "L'association est 100% bénévole — aucun salarié, aucune rémunération des dirigeants. Chaque euro finance directement les ateliers : matériel, transport des jeunes vers les lieux de tournage, logistique des séances." },
  { name: "Puis-je faire un don en nature à Banlieuwood ?", text: "Oui. Nous acceptons les dons de matériel audiovisuel (caméras, micros, éclairages, tablettes), de locaux pour les ateliers, ou de compétences (bénévolat de compétences)." },
];

export default function EnhancedSEO({ title, description, image, type = 'website', keywords }: SEOProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const pageMeta = pageMetadata[pathname];

  const metaTitle = title || pageMeta?.title || pageMetadata['/'].title;
  const metaDescription = description || pageMeta?.description || pageMetadata['/'].description;
  const metaImage = image || DEFAULT_IMAGE;
  const metaKeywords = keywords || pageMeta?.keywords || pageMetadata['/'].keywords;
  const canonicalUrl = `${BASE_URL}${pathname === '/' ? '/' : pathname}`;
  const breadcrumbName = pageMeta?.breadcrumb || 'Accueil';

  // Per-page structured data
  const breadcrumbSchema = getBreadcrumbSchema(pathname, breadcrumbName);

  const faqItems = pathname === '/etablissements' ? etablissementsFaq
    : pathname === '/soutenir' ? soutenirFaq
    : pathname === '/contact' ? contactFaq
    : null;

  const faqSchema = faqItems ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(q => ({
      "@type": "Question",
      "name": q.name,
      "acceptedAnswer": { "@type": "Answer", "text": q.text }
    }))
  } : null;

  return (
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
      <meta property="og:site_name" content="Banlieuwood" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional Meta */}
      <meta name="author" content="Banlieuwood" />
      <meta name="robots" content="index, follow" />

      {/* BreadcrumbList — per page */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Course — only on /programme */}
      {pathname === '/programme' && (
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      )}

      {/* EducationEvent — only on /programme */}
      {pathname === '/programme' && (
        <script type="application/ld+json">
          {JSON.stringify(eventSchema)}
        </script>
      )}

      {/* VideoObject — only on /films */}
      {pathname === '/films' && videoSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* FAQPage — on /etablissements and /soutenir */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
}
