/**
 * Prerender script — generates static HTML per route at build time.
 * No Puppeteer needed. Injects per-page meta tags + text content
 * so AI crawlers (GPTBot, ClaudeBot, PerplexityBot) see real HTML.
 *
 * Run: node scripts/prerender.mjs (after vite build)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://banlieuwood.fr';

// ── Per-page SEO data ──────────────────────────────────────────
const pages = {
  '/': {
    title: 'Banlieuwood | Atelier Cinéma Gratuit Jeunes 12-25 ans | Saint-Denis 93',
    description: 'Programme cinéma en 8 modules 100% gratuit pour jeunes de 12 à 25 ans. Outil numérique sur tablettes, ateliers encadrés par des pros. De spectateur à créateur. Saint-Denis (93).',
    keywords: 'atelier cinéma gratuit, formation audiovisuelle jeunes, programme cinéma 8 modules, école cinéma banlieue, outil numérique pédagogique, éducation à l\'image, Saint-Denis, Seine-Saint-Denis 93, Île-de-France, cinéma quartiers populaires',
    content: `
      <h1>Banlieuwood — Atelier Cinéma Gratuit pour Jeunes 12-25 ans</h1>
      <p>Programme cinéma en 8 modules, 100% gratuit, encadré par des professionnels du cinéma. De spectateur à créateur.</p>
      <h2>Nos chiffres</h2>
      <ul>
        <li>500+ jeunes formés depuis 2015</li>
        <li>85% continuent dans l'audiovisuel</li>
        <li>15+ prix en festivals</li>
      </ul>
      <h2>Nos films</h2>
      <p>Courts et longs métrages réalisés par les jeunes : Voir la Mer (3 prix en festivals), Tic Tac (Amazon Prime Video), L'Interrogatoire, et plus de 30 films produits.</p>
      <h2>Pour qui ?</h2>
      <ul>
        <li>Jeunes de 12 à 25 ans — aucun prérequis, 100% gratuit</li>
        <li>Établissements scolaires — programme clé en main, éligible EAC, PEAC, Pass Culture</li>
        <li>Professionnels du cinéma — rejoignez l'aventure en tant que bénévole</li>
      </ul>
      <h2>Ils nous ont fait confiance</h2>
      <p>Collège Grands Champs (78), Collège Blaise Pascal (78), Ville de Saint-Denis (93), Ville de Rosny-sous-Bois (93), Collège Albert Camus (93), Collège Jean Moulin (93)</p>
      <h2>Banlieuwood : association cinéma à Saint-Denis depuis 2015</h2>
      <p>Banlieuwood est une association loi 1901 fondée en 2015 à Saint-Denis (Seine-Saint-Denis, 93), en Île-de-France. Notre mission : rendre le cinéma accessible aux jeunes de 12 à 25 ans issus des quartiers populaires, à travers des ateliers cinéma 100% gratuits.</p>
      <p>Notre programme pédagogique en 8 modules couvre l'ensemble du processus de création cinématographique : observation, écriture de scénario, jeu d'acteur, tournage, montage et diffusion. Chaque participant utilise un outil numérique interactif sur tablette.</p>
      <p>Depuis 2015, plus de 500 jeunes ont été formés et 30 films ont été produits, dont le long-métrage Tic Tac (Amazon Prime Video) et Voir la Mer (3 prix en festivals). 85% des participants poursuivent dans l'audiovisuel.</p>
      <p>Nous intervenons dans les établissements scolaires (collèges, lycées) et structures jeunesse d'Île-de-France. Programme éligible EAC, PEAC, Pass Culture, Politique de la Ville, Cité Éducative.</p>
      <p>Association 100% bénévole. Dons déductibles à 66%. Contact : contact@banlieuwood.fr</p>
    `
  },
  '/films': {
    title: 'Films Réalisés par les Jeunes | Banlieuwood',
    description: 'Courts et longs métrages réalisés par les jeunes de Banlieuwood depuis 2015. Films primés en festivals, diffusés sur Amazon Prime Video. Fictions, documentaires, clips.',
    keywords: 'court métrage jeunes banlieue, films réalisés par des jeunes, festival film jeunesse, Amazon Prime Video, création audiovisuelle quartiers, cinéma social, films primés festival',
    content: `
      <h1>Films réalisés par les jeunes de Banlieuwood</h1>
      <p>Plus de 30 films produits depuis 2015 — courts métrages, longs métrages, documentaires, clips. Réalisés par des jeunes de 12 à 25 ans des quartiers populaires.</p>
      <h2>Filmographie</h2>
      <ul>
        <li>Voir la Mer (2021) — Court-métrage fiction, 3 prix en festivals, Rosny-sous-Bois (93)</li>
        <li>Tic Tac (2019) — Long-métrage fiction, Amazon Prime Video, 22 jeunes participants, Saint-Denis (93)</li>
        <li>L'Interrogatoire (2024) — Court-métrage fiction, Saint-Denis (93)</li>
        <li>Les Derniers (2024) — Court-métrage fiction, thriller psychologique, Saint-Denis (93)</li>
        <li>La Bête Humaine (2023) — Court-métrage fiction, adaptation contemporaine, Saint-Denis (93)</li>
        <li>L'Envol (2023) — Court-métrage fiction, drame social, quartiers populaires (93)</li>
        <li>Le Grand Saut (2022) — Court-métrage fiction, drame social, Rosny-sous-Bois (93)</li>
        <li>Crescendo (2022) — Court-métrage fiction, comédie dramatique, Croissy-sur-Seine (78)</li>
        <li>Déraciné (2022) — Court-métrage fiction, drame familial, Rosny-sous-Bois (93)</li>
        <li>Respire (2023) — Court-métrage fiction, drame intime, quartiers populaires (93)</li>
        <li>Welcome (2023) — Court-métrage fiction, récit d'accueil, collège partenaire (78)</li>
        <li>Et plus encore...</li>
      </ul>
      <p>Association loi 1901 basée à Saint-Denis (93). Contact : contact@banlieuwood.fr</p>
    `
  },
  '/programme': {
    title: 'Programme 8 Modules Cinéma Gratuit | Banlieuwood',
    description: 'Parcours pédagogique cinéma en 8 modules : observer, comprendre, imaginer, clarifier, construire, écrire, visualiser, produire. 3 formules adaptées collège, lycée, structures jeunesse.',
    keywords: 'programme pédagogique cinéma, parcours 8 modules cinéma, formation réalisation film gratuite, atelier audiovisuel collège lycée, apprendre le cinéma gratuitement, outil numérique tablette, éducation artistique culturelle cinéma',
    content: `
      <h1>Programme cinéma en 8 modules — Banlieuwood</h1>
      <p>Un parcours pédagogique complet, de l'observation à la réalisation. Encadré par des professionnels du cinéma. 100% gratuit.</p>
      <h2>Les 8 modules</h2>
      <ol>
        <li>Observer — Apprendre à regarder, chaque regard raconte une histoire différente</li>
        <li>Comprendre — La mécanique d'une scène : personnage + intention + obstacle + changement</li>
        <li>Imaginer — Le "Et si..." : générer des idées d'histoire à partir d'images</li>
        <li>Clarifier — Du flou au pitch : transformer une idée en proposition claire en 30 secondes</li>
        <li>Construire — L'histoire collective : assembler les idées en un récit commun</li>
        <li>Écrire — Le scénario : compléter, améliorer, renforcer le récit collectif</li>
        <li>Visualiser — La mise en scène : découvrir la grammaire visuelle du cinéma</li>
        <li>Produire — L'équipe de tournage : distribuer les rôles, former une vraie équipe de cinéma</li>
      </ol>
      <h2>3 formules</h2>
      <ul>
        <li>Découverte (modules 1 à 5) — Collèges, centres culturels</li>
        <li>Création (modules 1 à 8, tournage avec rôle fixe) — Collèges, lycées</li>
        <li>Production (modules 1 à 8, rotation des rôles) — Lycées, structures jeunesse</li>
      </ul>
      <h2>L'outil numérique</h2>
      <p>Chaque élève utilise une tablette avec notre outil interactif dédié. 30% numérique, 70% humain. L'outil ne remplace jamais le facilitateur.</p>
      <p>100% gratuit. Matériel fourni. Aucun prérequis. Contact : contact@banlieuwood.fr</p>
    `
  },
  '/about': {
    title: 'À Propos | Banlieuwood — Association Cinéma Saint-Denis',
    description: 'Association loi 1901 à Saint-Denis depuis 2015. 500+ jeunes formés, 30+ films produits. Notre équipe de professionnels du cinéma et notre vision.',
    keywords: 'association cinéma quartiers populaires, formation audiovisuelle gratuite, programme éducation image, association loi 1901 Saint-Denis, cinéma social éducation, histoire Banlieuwood, Adrian Younsi',
    content: `
      <h1>À propos de Banlieuwood — Le cinéma des quartiers</h1>
      <p>Depuis 2015 à Saint-Denis. Former des jeunes au cinéma. Produire des films. Créer des opportunités.</p>
      <h2>Notre histoire</h2>
      <p>2015. Tout commence avec une idée simple : amener le cinéma directement dans les quartiers. Créée par des professionnels du cinéma, Banlieuwood part d'un constat : les jeunes des quartiers ont du talent, mais zéro accès aux métiers de l'audiovisuel.</p>
      <ul>
        <li>500+ jeunes formés</li>
        <li>30+ films produits</li>
        <li>85% continuent en audiovisuel (étude interne 2023)</li>
      </ul>
      <h2>Moments clés</h2>
      <ul>
        <li>2015 — Premiers ateliers à Saint-Denis avec 12 jeunes</li>
        <li>2017 — Production de courts-métrages avec des collèges partenaires</li>
        <li>2019 — Tic Tac, long-métrage avec 22 jeunes, diffusé sur Amazon Prime Video</li>
        <li>2021 — "Voir la Mer" remporte 3 prix en festivals</li>
        <li>2023 — 11 films réalisés, plus de 200 jeunes formés</li>
        <li>2024 — Développement du parcours pédagogique en 8 modules</li>
        <li>2025 — Lancement de la plateforme interactive sur tablettes</li>
      </ul>
      <h2>L'équipe</h2>
      <ul>
        <li>Adrian YOUNSI — Président & Fondateur, professionnel de l'audiovisuel depuis 2015</li>
        <li>Wadi LAADAM — Producteur</li>
        <li>Anwar LAADAM — Producteur</li>
        <li>Romain NDIAYE CHANSAREL — Producteur</li>
        <li>Sandrine FELQUIN — Rédactrice en Chef</li>
        <li>Alice VALETTE — Rédactrice en Chef</li>
      </ul>
      <h2>Notre statut</h2>
      <p>Association loi 1901, déclarée en préfecture de Seine-Saint-Denis. Gestion désintéressée, 100% bénévole. Dons déductibles d'impôts à 66%.</p>
      <p>Contact : contact@banlieuwood.fr</p>
    `
  },
  '/etablissements': {
    title: 'Programme Cinéma pour Écoles et Collectivités | Banlieuwood',
    description: 'Programme cinéma clé en main pour établissements scolaires. 8 modules interactifs, outil numérique sur tablettes. Éligible EAC, PEAC, Pass Culture, Politique de la Ville.',
    keywords: 'intervention cinéma établissement scolaire, programme EAC cinéma, PEAC cinéma, Pass Culture, atelier audiovisuel collège lycée, Politique de la Ville, Cité Éducative, DRAC, CLAS, PRE, socle commun, atelier cinéma Seine-Saint-Denis 93',
    content: `
      <h1>Programme cinéma pour écoles et collectivités — Banlieuwood</h1>
      <p>Programme clé en main pour établissements scolaires. 8 modules interactifs avec outil numérique sur tablettes. Encadré par des professionnels du cinéma.</p>
      <h2>Éligibilité</h2>
      <p>Éligible EAC (Éducation Artistique et Culturelle), PEAC, Pass Culture (part collective), Politique de la Ville, Contrats de Ville, dispositifs Cité Éducative, CLAS, Programme de Réussite Éducative, DRAC Île-de-France.</p>
      <h2>Compétences du socle commun</h2>
      <ul>
        <li>Expression écrite et orale — scénario, pitch, direction d'acteurs</li>
        <li>Travail en équipe — rôles de tournage, coordination</li>
        <li>Esprit critique — analyse d'image, choix narratifs</li>
        <li>Créativité et initiative — de l'idée au film</li>
        <li>Numérique — tablettes, outil interactif</li>
      </ul>
      <h2>Établissements partenaires</h2>
      <ul>
        <li>Collège Grands Champs, Poissy (78) — "Crescendo" (2022)</li>
        <li>Collège Blaise Pascal, Villemoisson-sur-Orge (91) — "Welcome" (2023)</li>
        <li>Collège Albert Camus, Rosny-sous-Bois (93) — "Voir la Mer" (2021), "Le Grand Saut" (2022)</li>
      </ul>
      <h2>FAQ</h2>
      <p>Les élèves ont-ils besoin d'expérience en cinéma ? Non, le programme est conçu pour des débutants complets.</p>
      <p>Quel matériel est nécessaire ? Tout est fourni par Banlieuwood : tablettes, caméra, matériel son.</p>
      <p>Le programme est-il éligible à l'EAC et au PEAC ? Oui. Il couvre les 3 piliers : Rencontres, Pratiques, Connaissances.</p>
      <p>Contact : contact@banlieuwood.fr</p>
    `
  },
  '/contact': {
    title: 'Contact | Inscription Atelier Cinéma | Banlieuwood',
    description: 'Contactez Banlieuwood : inscription atelier cinéma, organiser un programme dans votre école, devenir partenaire. Réponse sous 48h. Saint-Denis (93).',
    keywords: 'contacter Banlieuwood, inscription atelier cinéma gratuit, organiser atelier cinéma école, Saint-Denis Seine-Saint-Denis 93',
    content: `
      <h1>Contactez Banlieuwood</h1>
      <p>Pour s'inscrire à un atelier, organiser un programme dans votre école, ou devenir partenaire.</p>
      <h2>Coordonnées</h2>
      <ul>
        <li>Email : contact@banlieuwood.fr</li>
        <li>Adresse : Saint-Denis (93200), Île-de-France</li>
      </ul>
      <p>Réponse sous 48h. Association loi 1901.</p>
      <h2>Questions fréquentes</h2>
      <p><strong>C'est vraiment gratuit ?</strong> Oui, 100% gratuit. Les ateliers, le matériel et l'encadrement sont entièrement pris en charge par l'association.</p>
      <p><strong>Qui peut participer ?</strong> Les jeunes de 12 à 25 ans, sans aucun prérequis. Pas besoin d'expérience en cinéma.</p>
      <p><strong>Comment s'inscrire ?</strong> Remplissez le formulaire ou envoyez un email à contact@banlieuwood.fr. On vous recontacte sous 48h.</p>
      <p><strong>Où se déroulent les ateliers ?</strong> À Saint-Denis (93) et dans les établissements scolaires partenaires en Île-de-France.</p>
      <p><strong>Je suis enseignant ?</strong> Notre programme est éligible EAC, PEAC, Pass Culture. Contactez-nous pour organiser un atelier dans votre établissement.</p>
    `
  },
  '/soutenir': {
    title: 'Soutenir Banlieuwood | Don Déductible d\'Impôts | Mécénat',
    description: 'Soutenez Banlieuwood : don déductible à 66%, mécénat entreprise (60% IS), bénévolat, don en nature. Association 100% bénévole, chaque euro va aux ateliers.',
    keywords: 'don association cinéma, mécénat entreprise audiovisuel, soutenir association jeunesse, don déductible impôts, bénévolat cinéma, reçu fiscal',
    content: `
      <h1>Soutenir Banlieuwood</h1>
      <p>Association 100% bénévole. Aucun salarié, aucune rémunération des dirigeants. Chaque euro va directement aux ateliers et aux films.</p>
      <h2>Don financier</h2>
      <p>Déductible à 66% de l'impôt sur le revenu. Reçu fiscal (Cerfa n°11580*04) délivré automatiquement.</p>
      <h2>Mécénat entreprise</h2>
      <p>Déduction de 60% de l'IS. Partenariats sur-mesure : financement d'ateliers, matériel, locaux, mécénat de compétences.</p>
      <h2>Bénévolat & dons en nature</h2>
      <p>Matériel audiovisuel, compétences, locaux, logistique. Rejoignez l'aventure.</p>
      <p>Faire un don sur HelloAsso : https://www.helloasso.com/associations/banlieuwood</p>
      <p>Contact : contact@banlieuwood.fr</p>
    `
  },
  '/mentions-legales': {
    title: 'Mentions Légales | Banlieuwood',
    description: 'Mentions légales du site banlieuwood.fr. Association loi 1901 déclarée en préfecture de Seine-Saint-Denis.',
    keywords: 'mentions légales Banlieuwood, association loi 1901, Saint-Denis',
    content: `
      <h1>Mentions légales — Banlieuwood</h1>
      <p>Association loi 1901 déclarée en préfecture de Seine-Saint-Denis.</p>
      <p>Siège social : Saint-Denis (93200). Email : contact@banlieuwood.fr</p>
      <p>Directeur de la publication : Adrian YOUNSI, Président.</p>
    `
  }
};

// ── Build ──────────────────────────────────────────────────────
const baseHtml = readFileSync(join(DIST, 'index.html'), 'utf-8');
let count = 0;

for (const [route, data] of Object.entries(pages)) {
  let html = baseHtml;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${data.title}</title>`
  );

  // Replace meta[name="title"]
  html = html.replace(
    /<meta name="title" content="[^"]*" \/>/,
    `<meta name="title" content="${data.title}" />`
  );

  // Replace meta[name="description"]
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${esc(data.description)}" />`
  );

  // Replace meta[name="keywords"]
  html = html.replace(
    /<meta name="keywords" content="[^"]*" \/>/,
    `<meta name="keywords" content="${esc(data.keywords)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${BASE_URL}${route === '/' ? '/' : route}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${BASE_URL}${route}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${esc(data.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${esc(data.description)}" />`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*" \/>/,
    `<meta name="twitter:url" content="${BASE_URL}${route}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${esc(data.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${esc(data.description)}" />`
  );

  // Inject content inside <div id="root"> for crawlers
  // React's createRoot will replace this on hydration
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${data.content.trim()}</div>`
  );

  // Write to dist/<route>/index.html
  const dir = route === '/' ? DIST : join(DIST, route.slice(1));
  if (route !== '/') mkdirSync(dir, { recursive: true });

  const outFile = join(dir, 'index.html');
  writeFileSync(outFile, html, 'utf-8');
  count++;
}

console.log(`Prerendered ${count} pages.`);

function esc(s) {
  return s.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
