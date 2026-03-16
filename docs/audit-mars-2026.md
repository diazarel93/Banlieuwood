# Audit Complet Banlieuwood — Mars 2026

## Références design analysées

| Référence | Ce qu'ils font mieux |
|-----------|---------------------|
| **A24** | Minimalisme radical — les films parlent d'eux-mêmes, zéro décoration |
| **MUBI** | Animation de texte cinématique dans le hero, typographie dramatique |
| **Ghetto Film School** | Identité visuelle unique (métaphore du gaffer tape = DIY filmmaking) |
| **Girls Who Code** | Design segmenté par audience (jeunes / profs / donateurs) |
| **Sundance** | Couleur accent utilisée uniquement sur les états interactifs |
| **Reel Works** | Bold mission statement en hero, editorial documentary feel |
| **826 National** | Rotating word animation, interactive student work filter |
| **Inner-City Arts** | Orange accent + neutrals, parallax hero |
| **La Fémis** | Une seule couleur institutionnelle forte (rouge) |
| **MasterClass** | Dark + warm accent + cinematic photography |

---

## Problèmes critiques (cassés en production)

### 1. Assets manquants
- `public/icon-192.png` — référencé dans index.html et manifest.json, n'existe pas
- `public/icon-512.png` — référencé dans manifest.json, n'existe pas
- `public/og-image.jpg` — référencé dans index.html OG tags et SEO.tsx, n'existe pas
- `public/twitter-image.jpg` — référencé dans index.html, n'existe pas
- `public/logo.png` — référencé dans index.html JSON-LD, n'existe pas
- `public/screenshot1.png` — référencé dans manifest.json, n'existe pas
- `public/images/ateliers/`, `public/images/films/`, `public/images/team/` — répertoires vides
- **Impact** : Partage social cassé, PWA cassée, SEO dégradé

### 2. Google Analytics fictif
- `index.html` ligne 12 : `G-XXXXXXXXXX` est un placeholder
- Charge le script gtag pour rien — bandwidth gaspillée, zéro analytics
- **Action** : Supprimer ou remplacer par le vrai ID

### 3. WhatsApp fictif + dark patterns
- Numéro fictif `33600000000` dans `WhatsAppButton.tsx`
- Faux badge notification "1" (ligne 80) — il n'y a pas de message non lu
- Faux statut "En ligne" (ligne 29-30) — ce n'est pas un live chat
- Animation `animate-ping` permanente — anxiogène
- **Impact** : Perte de confiance, inapproprié pour une asso travaillant avec des jeunes 12-25 ans
- **Action** : Supprimer le composant WhatsApp ou mettre le vrai numéro sans dark patterns

### 4. Domaines canoniques conflictuels
- `index.html` canonical : `https://banlieuwood.vercel.app/`
- `SEO.tsx` BASE_URL : `https://banlieuwood.fr`
- `EnhancedSEO.tsx` URL : `https://banlieuwood.vercel.app`
- `robots.txt` Sitemap : `https://banlieuwood.com/sitemap.xml`
- `sitemap.xml` URLs : `https://banlieuwood.com/*`
- **Impact** : Google voit 3 sites différents — catastrophique pour le SEO
- **Action** : Unifier sur un seul domaine

### 5. Copyright 2025
- `Footer.tsx` ligne 69 : `© 2025 Banlieuwood`
- On est en mars 2026
- **Action** : Corriger en 2026

### 6. Deux composants SEO qui se battent
- `SEO.tsx` (manipulation DOM directe) et `EnhancedSEO.tsx` (react-helmet-async) sont rendus simultanément dans `App.tsx`
- Ils se battent pour le contrôle de `<title>` et des meta tags
- `EnhancedSEO.tsx` nécessite `HelmetProvider` — pas de preuve qu'il est wrappé dans App.tsx
- **Action** : Garder un seul composant SEO

### 7. Sitemap avec routes mortes
- `/deroulement`, `/reussites`, `/partenaires`, `/faq`, `/dons`, `/ateliers` (redirige vers `/programme`)
- Google crawle ces URLs et obtient des 404 ou des pages blanches
- **Action** : Nettoyer le sitemap pour ne garder que les routes actives

### 8. Images HTTP (mixed content)
- `Home.tsx` : `http://banlieuwood.fr/wp-content/uploads/2021/03/TEASER.png`
- `Home.tsx` : `http://banlieuwood.fr/wp-content/uploads/2021/03/vintage-film-projector-and-film-screening-1.jpg`
- `EnhancedSEO.tsx` : OG image en HTTP
- **Impact** : Bloqué par les navigateurs sur HTTPS, dépendance à l'ancien WordPress qui peut tomber
- **Action** : Remplacer par des URLs Vimeo CDN ou locales

### 9. Date de fondation conflictuelle
- Contenu du site partout : "Depuis 2015"
- `EnhancedSEO.tsx` ligne 71 : `"foundingDate": "2010"`
- **Action** : Corriger en 2015

---

## Problèmes design (pour atteindre le world-class)

### 10. Monotonie amber-500
- Une seule couleur accent (`#f59e0b`) utilisée pour : titres, stats, CTAs, labels, hover, focus, scrollbar, sélection
- Aucune palette secondaire (à part blue-400 sur la page Institutions)
- **Recommandation** : Ajouter 1-2 couleurs secondaires utilisées ponctuellement

### 11. Sections toutes identiques
- Pattern répétitif : label amber uppercase → titre bold → texte gray-400 → contenu
- Alternance `bg-black` / `bg-gray-950` à peine perceptible
- Aucune section ne rompt avec une image full-bleed, une grande citation, ou un changement de couleur dramatique
- **Recommandation** : Varier les formats visuels entre les sections

### 12. CTAs quasi-identiques sur 4 pages
- Home : "Prêt à commencer ?"
- Films : "Crée ton film"
- About : "Vous voulez participer ?"
- Ateliers : "Prêt à commencer ?"
- Même layout, même style, même structure
- **Recommandation** : Varier les CTA ou les supprimer sur certaines pages

### 13. Zéro photo réelle hors films
- Pas de photos d'ateliers en action, de tournages, de behind-the-scenes
- `public/images/` est vide
- Pour une association cinéma/visuelle, c'est une opportunité manquée
- **Recommandation** : Ajouter des photos réelles (ou utiliser les thumbnails Vimeo comme proxy)

### 14. Pas d'identité visuelle unique
- A24 a son minimalisme, GFS a le gaffer tape, Banlieuwood n'a rien de distinctif
- **Recommandation** : Développer une métaphore visuelle (pellicule + urbain, clap avec code postal 93...)

### 15. Playfair Display chargé pour rien
- 3 graisses (700, 800, 900) chargées (~60KB)
- À peine visible sur fond noir, dominé par Bebas Neue et Inter
- **Action** : Supprimer Playfair Display, garder Bebas Neue + Inter

### 16. Contact page incohérente
- Pas de `useScrollReveal` (seule page sans)
- Utilise `bg-gradient-to-b` alors que les autres pages utilisent des backgrounds plats
- Animations `animate-fade-in` au chargement au lieu de scroll-triggered
- **Action** : Aligner le style de Contact avec les autres pages

### 17. 14 tailles de texte distinctes
- De `text-xs` à `text-9xl` en passant par tout
- Un système typographique discipliné en utilise 5-7 max
- **Recommandation** : Réduire le nombre de tailles utilisées

### 18. Film grid = divs cliquables, pas buttons
- `Films.tsx` utilise `<div onClick={...}>` au lieu de `<button>`
- Inaccessible au clavier (pas focusable, pas de réponse à Enter/Space)
- **Action** : Remplacer par `<button>`

### 19. YouTube thumbnails basse résolution
- 3 films utilisent `hqdefault.jpg` (480x360)
- Les films Vimeo utilisent `_d_1280` — incohérence de qualité
- **Action** : Utiliser `maxresdefault.jpg` pour YouTube

---

## Problèmes techniques secondaires

### 20. Stats dupliquées entre pages
- "500+ jeunes formés" et "85% continuent" sur Home ET About
- "15+ prix" sur Home vs "3 prix" sur Films
- **Action** : Extraire les stats dans un fichier partagé

### 21. 4 528 lignes de code mort (pages)
- 10 fichiers dans `src/pages/` sans routes : Blog, BlogPost, Deroulement, Documentation, FAQ, Labels, Partenaires, Soutenir, Gouvernance, Reussites
- Stratégie MUTE intentionnelle — les fichiers restent pour réactivation future

### 22. 15 composants inutilisés
- BeforeAfterStories, CountdownTimer, LiveCounter, LiveImpact, LoadingScreen, MediaGallery, MultiStepForm, NewsletterPopup, ShareButtons, SocialProofNotification, StickyCtaButton, Testimonials, TrustBadges, VideoSection, VideoTestimonials
- Noms révélateurs de patterns growth-hacking inappropriés

### 23. Pas d'Error Boundary
- Si une page lazy-loaded crash, l'app entière devient un écran blanc
- `<Suspense>` pour le loading mais pas de `<ErrorBoundary>` pour les erreurs

### 24. Manifest PWA — shortcuts cassés
- `/ateliers` redirige vers `/programme`
- `/blog` n'a pas de route
- **Action** : Corriger les shortcuts

### 25. Vimeo iframe chargé à chaque visite Home
- `VideoHeroBackground.tsx` charge player.vimeo.com systématiquement
- Sur mobile : bandwidth gaspillée, vidéo qui ne s'autoplay probablement pas
- **Recommandation** : Poster image par défaut, iframe uniquement sur interaction

### 26. Pas d'images responsives
- Toutes les images à résolution `_1280` sans `srcset` ni `sizes`
- Sur mobile (375px), on télécharge des images 1280px
- **Action** : Ajouter srcset ou au minimum des tailles adaptées

### 27. Pas de `fetchpriority="high"` sur l'image LCP
- Films hero (Tic Tac) est l'élément LCP sans indication de priorité

---

## Problèmes d'accessibilité

### 28. Contraste insuffisant
- `text-gray-500` sur `bg-black` : ~4.5:1 — limite WCAG AA
- `text-amber-500/40` (opacité 40%) : très faible contraste, utilisé pour les numéros de modules
- `text-gray-600` sur Films (labels catégories) : ~3.3:1 — échoue WCAG AA

### 29. Pas de lien "Skip to content"
- Les utilisateurs clavier doivent tabber à travers toute la navigation

### 30. Menu mobile pas focus-trapped
- Quand le menu mobile s'ouvre, le focus n'est pas piégé dedans
- Manque `role="dialog"` et `aria-expanded` sur le bouton toggle

### 31. VideoPlayer sans labels accessibles
- Boutons skip forward/backward sans `aria-label`
- Bouton close sans label descriptif

### 32. `frameBorder` déprécié
- Utilisé dans VideoHeroBackground.tsx, About.tsx (ancien), VideoPlayer.tsx
- Attribut HTML déprécié — utiliser CSS `border: none`

---

## Problèmes mineurs

### 33. package.json nom générique
- `"name": "vite-react-typescript-starter"` → devrait être `"banlieuwood"`

### 34. .DS_Store dans public/
- Fichiers macOS déployés en production — fuite d'info sur la structure des répertoires

### 35. Pas d'animation sur l'accordéon FAQ (Institutions)
- Les items FAQ apparaissent/disparaissent instantanément
- Incohérent avec les scroll-reveal utilisés partout ailleurs

### 36. Données films hardcodées dans le composant
- 18 films avec métadonnées complètes hardcodés dans Films.tsx
- Devrait être extrait dans un fichier data ou fetché depuis Supabase

### 37. Erreur Supabase silencieusement avalée
- `Home.tsx` : le `catch` fait un `console.error` et continue
- En production, on ne saura jamais si Supabase est down

---

## Résumé par priorité

| Priorité | Issues | Effort |
|----------|--------|--------|
| **P0 — Cassé en prod** | #1-9 | Faible |
| **P1 — Design monotone** | #10-16, #19 | Moyen |
| **P2 — Accessibilité** | #17-18, #28-32 | Moyen |
| **P3 — Performance** | #25-27 | Moyen |
| **P4 — Nettoyage** | #20, #23-24, #33-37 | Faible |
| **P5 — Vision premium** | #13-14 (photos, identité) | Nécessite du contenu réel |
