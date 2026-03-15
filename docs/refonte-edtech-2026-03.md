# Refonte Banlieuwood — Intégration Plateforme EdTech

**Date :** Mars 2026
**Contexte :** Banlieuwood évolue d'ateliers cinéma physiques vers un programme pédagogique structuré (8 modules) avec outil numérique (tablettes). Le site doit refléter cette double identité : ateliers grand public + plateforme pour établissements scolaires.

---

## Structure du site : 6 pages

| Page | Route | Ancienne route | Rôle |
|------|-------|----------------|------|
| Home | `/` | `/` | Vitrine double public (jeunes + établissements) |
| Le Programme | `/programme` | `/ateliers` | Parcours 8 modules + 3 formules |
| Films | `/films` | `/films` | Filmographie + talents (inchangé structurellement) |
| Établissements | `/etablissements` | `/institutions` | Page B2B écoles/mairies/collectivités |
| À Propos | `/about` | `/about` | Vision + histoire + équipe + principes + agréments |
| Contact | `/contact` | `/contact` | Formulaire double public |

**Note :** `/ateliers` et `/institutions` redirigent vers les nouvelles routes.

**Navigation :** `Accueil | Le Programme | Films | Établissements | À Propos | Contact`

---

## Phase 1 — HOME `/`

### Hero
- Tagline : **"Amener le cinéma en bas de chez vous"** (conservée)
- Sous-tagline : **"Un programme pédagogique en 8 modules. Du regard à la réalisation."** (nouveau)
- Pastille : `Ateliers 100% gratuits • Formation pro • 12-25 ans` → transformer en `8 modules • Outil numérique • De spectateur à créateur`
- 2 CTAs :
  - "Découvrir le programme" → `/programme`
  - "Nos films" → `/films`

### Section Stats (existante, modifiée)
Passer de 3 à 4 stats :
| Stat | Valeur | Sous-texte |
|------|--------|-----------|
| Jeunes formés | 500+ | De 12 à 25 ans |
| Continuent dans l'audiovisuel | 85% | Étude interne 2023 |
| Prix en festivals | 15+ | Reconnaissance nationale |
| Modules pédagogiques | 8 | Du regard à la réalisation |

### Nouveau bloc — "Le Parcours" (après Stats)
Mini-timeline horizontale avec les 8 étapes en icônes :
```
Observer → Comprendre → Imaginer → Clarifier → Construire → Écrire → Visualiser → Produire
```
Chaque étape = icône + titre + 1 ligne de description.
CTA sous la timeline : "Découvrir le programme complet" → `/programme`

### Nouveau bloc — "Pour qui ?" (après Le Parcours)
2 colonnes :
- **Colonne gauche — "Tu as 12-25 ans ?"**
  - "Rejoins un atelier et crée ton premier film."
  - CTA : "Voir les ateliers" → `/programme`
- **Colonne droite — "Vous êtes un établissement ?"**
  - "Organisez un programme cinéma dans votre école."
  - CTA : "En savoir plus" → `/etablissements`

### Citation (nouveau bloc, après "Pour qui ?")
> "Tout le monde peut apprendre à raconter une histoire."
— Manifeste Banlieuwood

### Films Preview (existant, conservé tel quel)
3 cartes : Voir la Mer, Tic-Tac, L'Interrogatoire.

### Teaser vidéo (existant, conservé tel quel)

### CTA final (existant, simplifié)
Garder le CTA unique "Voir les ateliers disponibles" mais ajouter en dessous :
"Vous êtes un établissement ? [Contactez-nous](/etablissements)"

---

## Phase 2 — LE PROGRAMME `/programme` (ex-Ateliers)

### Hero
- Titre : **"Crée Ton Film"** (conservé)
- Sous-titre : **"Un parcours en 8 modules. De l'observation à la réalisation."** (nouveau)
- Pastille : `8 modules • Outil numérique • Tablettes`

### Section "Le Parcours en 8 Modules" (remplace "Notre Méthode" 4 étapes)
Cards ou timeline avec pour chaque module :

| # | Module | Titre court | Description (1 phrase) | Icône |
|---|--------|------------|------------------------|-------|
| 1 | Observer | Apprendre à regarder | Découvrir que chaque regard raconte une histoire différente | Eye |
| 2 | Comprendre | La mécanique d'une scène | Personnage + intention + obstacle + changement | Clapperboard |
| 3 | Imaginer | Le "Et si..." | Générer des idées d'histoire à partir d'images | Lightbulb |
| 4 | Clarifier | Du flou au pitch | Transformer une idée en proposition claire en 30 secondes | Target |
| 5 | Construire | L'histoire collective | Assembler les idées individuelles en un récit commun | Users |
| 6 | Écrire | Le scénario | Compléter, améliorer, renforcer le scénario collectif | Pencil |
| 7 | Visualiser | La mise en scène | Découvrir la grammaire visuelle du cinéma (plans, cadrage) | Camera |
| 8 | Produire | L'équipe de tournage | Former une vraie équipe de cinéma, distribuer les rôles | Film |

### Section "L'Outil Numérique" (nouveau)
- Chaque élève utilise une **tablette**
- L'outil structure les exercices, collecte les idées, organise les votes collectifs
- **30% numérique / 70% échanges humains**
- L'outil ne remplace jamais le facilitateur — il accompagne
- Entre les séances, l'outil génère automatiquement les contenus pour la séance suivante (scénarios, cartes narratives, storyboards)

### Section "3 Formules" (remplace les 4 anciens formats)

| Formule | Nom | Modules | Tournage | Public cible | Description |
|---------|-----|---------|----------|-------------|-------------|
| **1** | Découverte | 1 à 5 | Non | Collèges, centres culturels | De l'observation à la construction d'une histoire collective. Idéal pour une première expérience. |
| **2** | Création | 1 à 8 | Oui (rôle fixe) | Collèges, lycées | Le parcours complet jusqu'au film. Chaque élève garde un rôle pendant le tournage. |
| **3** | Production | 1 à 8 | Oui (rotation) | Lycées, structures jeunesse | Le parcours complet avec rotation des rôles sur plusieurs demi-journées de tournage. |

### Section "La Carte Talent" (nouveau)
À la fin du parcours, chaque élève reçoit une **carte personnalisée** (style Pokémon/FIFA) qui met en valeur ses forces créatives.

6 profils possibles :
- 🎭 L'Imaginatif — Invente des histoires facilement
- 👁️ L'Observateur — Repère les détails que personne ne voit
- 📖 Le Narrateur — Sait raconter et structurer une histoire
- 🎬 Le Metteur en scène — A l'œil pour la composition visuelle
- 🎭 L'Acteur — S'exprime naturellement devant la caméra
- 📋 L'Organisateur — Coordonne, planifie, structure l'équipe

*"La carte ne contient jamais de faiblesse — seulement des forces et des pistes à explorer."*

### Section "Pourquoi Rejoindre" (existante, réécrite)
4 raisons reformulées :
1. **Tu apprends en faisant** — Pas de cours théoriques. Tu crées dès le premier module.
2. **Tu travailles en équipe** — Le cinéma est un art collectif. Tu écoutes, tu proposes, tu construis.
3. **Tu découvres ton potentiel** — Acteur, scénariste, réalisateur, technicien ? Tu testes tout.
4. **Tu repars avec un film** — Et une Carte Talent qui montre tes forces créatives.

### CTA final (existant, conservé)

### Éléments retirés :
- Les 4 sessions fictives avec places restantes (faux contenu)
- Les données placeholder (dates, disponibilités)
- La section "Tout est Gratuit" → intégrée plus sobrement

---

## Phase 3 — ÉTABLISSEMENTS `/etablissements` (ex-Institutions)

### Page entièrement réécrite — Orientation B2B

### Hero
- Titre : **"Un programme cinéma pour votre établissement"**
- Sous-titre : **"8 modules interactifs pour développer créativité, expression et coopération."**
- Pastille : `Agréé Jeunesse & Éducation Populaire • Éducation Artistique et Culturelle`
- CTA : "Organiser un atelier" → scroll vers contact ou `/contact`

### Section "Le Constat"
> Les jeunes consomment des images toute la journée — films, séries, réseaux sociaux — mais ne comprennent jamais comment elles sont fabriquées. Ils voient le résultat, jamais le processus. Banlieuwood les fait passer de spectateur à créateur.

### Section "Ce que développe le programme" (6 compétences transversales)
Cards avec icônes :
1. **Créativité & Imagination** — Inventer des histoires, générer des idées
2. **Expression orale** — Pitcher, argumenter, défendre une idée
3. **Écoute & Coopération** — Travailler en équipe, accepter les compromis
4. **Structuration des idées** — Organiser sa pensée, construire un récit
5. **Confiance en soi** — Oser proposer, découvrir ses forces
6. **Éducation à l'image** — Comprendre comment une image transmet une émotion

*"Le cinéma est le prétexte. Les compétences développées vont bien au-delà du domaine artistique."*

### Section "Comment ça se passe"
4 étapes visuelles :
1. **Un intervenant vient dans votre établissement** — Formateur Banlieuwood certifié
2. **Chaque élève utilise une tablette** — Outil interactif qui structure l'expérience
3. **30% numérique, 70% échanges humains** — L'outil accompagne, le facilitateur anime
4. **Le film collectif** — Résultat visible d'un parcours de création

### Section "Les Formules" (même tableau que Programme)
+ Précisions pour les établissements :
- Adaptable au temps scolaire ou périscolaire
- Compatible avec les projets d'établissement
- S'inscrit dans l'Éducation Artistique et Culturelle (EAC)
- Finançable par les collectivités territoriales

### Section "FAQ Établissements"
Accordion avec 8 questions (issues du doc 05) :
1. "Les élèves ont-ils besoin d'expérience en cinéma ?" → Non, le programme est conçu pour des débutants complets.
2. "Certains élèves risquent-ils de rester passifs ?" → Le dispositif encourage la participation de tous via des activités interactives et des rôles variés.
3. "Quel matériel est nécessaire ?" → Léger et accessible. L'essentiel est fourni par Banlieuwood.
4. "Quelle durée prévoir ?" → Modulable. De quelques séances (Formule 1) à un programme complet (Formule 3).
5. "C'est purement artistique ?" → Non. Le programme développe des compétences transversales : expression, argumentation, écoute, coopération.
6. "Un élève doit-il apparaître dans le film ?" → Non. Certains préfèrent l'écriture, la technique ou l'organisation. Toutes les formes de participation sont valorisées.
7. "Quel est l'intérêt pédagogique pour l'établissement ?" → Un projet concret qui mobilise les élèves autour de la création collective. Développe l'engagement, la coopération et l'initiative.
8. "Pourquoi choisir Banlieuwood ?" → Un programme structuré, progressif et ludique. 8 modules testés. Un outil numérique dédié. Des intervenants formés.

### Section "Agréments & Reconnaissances"
(Reprise de About) :
- Agréé Jeunesse & Éducation Populaire (JEP-93-2016-042)
- Convention Ville de Saint-Denis (CONV-2023-CULT-089)
- Lauréat Fonds DRAC Île-de-France

### Section "Argumentaire institutionnel" (issu du doc 04)
Points clés en accordéon ou liste :
- S'inscrit dans les programmes d'Éducation Artistique et Culturelle (EAC)
- Compatible avec les semaines thématiques et projets interdisciplinaires
- Finançable par les collectivités territoriales et appels à projets culturels
- Les enseignants peuvent l'utiliser pour travailler l'oral, l'écrit et le collectif

### CTA final
- Titre : **"Organisez un programme cinéma dans votre établissement"**
- 2 boutons :
  - "Nous contacter" → `/contact`
  - "Télécharger la brochure" → (futur PDF)

---

## Phase 4 — À PROPOS `/about`

### Ajouts aux sections existantes :

### Nouvelle section "Notre Vision" (après le hero, avant les stats)
> "Nous croyons que tout le monde peut apprendre à raconter une histoire. La narration n'est pas réservée à quelques spécialistes."

> "Banlieuwood est né d'un constat : les jeunes des quartiers ont du talent, mais zéro accès aux métiers de l'audiovisuel. Notre mission : démocratiser la création artistique."

### Enrichir "Notre Histoire" (timeline existante)
Ajouter 2 jalons récents :
- **2024** : "Programme 8 modules" — Développement du parcours pédagogique structuré et de l'outil numérique
- **2025** : "Plateforme EdTech" — Lancement de la plateforme interactive sur tablettes pour les établissements scolaires

### Nouvelle section "Nos Principes" (après Valeurs, avant Équipe)
5 principes condensés (des 10 principes pédagogiques) :
1. **Apprendre par l'expérience** — Les élèves ne sont pas spectateurs. Ils observent, imaginent, proposent et construisent ensemble.
2. **Le jeu comme moteur** — Les modules sont conçus comme des défis créatifs, pas comme des exercices scolaires.
3. **L'implication plutôt que la performance** — Pas de notes, pas de compétition. Ce qui compte : participer, proposer, s'engager.
4. **Un espace bienveillant** — Les erreurs font partie du processus créatif. Aucune idée n'est mauvaise.
5. **Le processus compte autant que le résultat** — Les étapes de création sont aussi importantes que le film final.

### Nouvelle section "L'Écosystème" (après Principes)
Schéma en 3 couches :
1. **Plateforme technologique** — L'outil numérique qui structure les ateliers
2. **Partenaires pédagogiques** — Banlieuwood et les structures qui créent les parcours
3. **Utilisateurs** — Écoles, enseignants, élèves

*"L'association Banlieuwood est le premier partenaire pédagogique de la plateforme, spécialisé en narration audiovisuelle."*

### Sections conservées sans changement :
- Équipe (6 membres avec initiales)
- Agréments
- FAQ grand public
- CTA final

---

## Phase 5 — FILMS `/films`

### Changement mineur :

- **Ajouter une phrase de contexte** sous le titre "Nos Films" :
  > "Chaque film est le résultat de notre parcours en 8 modules. De l'idée au tournage, tout est créé par les jeunes."

- **Aucun autre changement structurel**

---

## Phase 6 — CONTACT `/contact`

### Ajout d'un sélecteur de profil

En haut du formulaire, un sélecteur :
- **"Je suis un jeune (12-25 ans)"** → Formulaire simplifié (Nom, Âge, Email, Message)
- **"Je représente un établissement"** → Formulaire enrichi (Nom, Établissement, Fonction, Email, Téléphone, Message)
- **"Autre (partenaire, presse, bénévole)"** → Formulaire standard actuel

Le formulaire s'adapte selon la sélection.

---

## Phase 7 — Navigation + Footer + SEO

### Navigation
```
Accueil | Le Programme | Films | Établissements | À Propos | Contact
```

### Footer
Mêmes 6 liens. Garder adresse, email, réseaux sociaux, "Association loi 1901".

### SEO
Mettre à jour les metadata pour `/programme` et `/etablissements`.
Ajouter des redirections `/ateliers` → `/programme` et `/institutions` → `/etablissements`.

### NotFound
Mettre à jour les liens suggérés : Le Programme, Films, Établissements, Contact.

---

## Phase 8 — Éléments transversaux

### Vocabulaire à adopter partout :
- "Programme pédagogique" au lieu de juste "ateliers"
- "8 modules" comme marqueur récurrent
- "De spectateur à créateur" comme fil rouge
- "Outil numérique" / "tablettes" quand on parle de la méthode
- Garder "gratuit" UNIQUEMENT pour les ateliers grand public jeunes

### Citations à placer sur le site :
- *"Tout le monde peut apprendre à raconter une histoire."* — Home + About
- *"Les histoires peuvent venir de partout, y compris de leur propre environnement."* — Programme
- *"La créativité n'est pas réservée à une élite."* — Établissements
- *"Il suffit parfois d'un moment, d'un groupe et d'un cadre pour que les idées apparaissent."* — About

---

## Éléments notés mais NON intégrés (à discuter)

1. **Pricing** — Aucun prix n'apparaît dans les documents. Il faudra décider si on affiche des tarifs sur la page Établissements ou si c'est "sur devis".
2. **Brochure PDF** — Le doc 03 (Brochure) pourrait devenir un PDF téléchargeable depuis la page Établissements. Pas encore créé.
3. **Roadmap produit (V1→V4)** — Les docs mentionnent 4 versions de la plateforme sur 5 ans. On ne les met pas sur le site public (trop interne), mais ça pourrait aller dans un dossier partenaire.
4. **Métaphore de l'arbre** — Le doc ADN Visuel propose un arbre comme métaphore centrale (racines=idées, tronc=structure, branches=scènes, fruits=film). Pas intégré visuellement pour l'instant.
5. **Formation des intervenants** — Les docs mentionnent un programme de formation des facilitateurs. Pourrait devenir une page dédiée `/devenir-intervenant` plus tard.
6. **Communauté d'élèves créateurs** — Vision long terme : un espace en ligne pour partager les films entre écoles. Pas pour maintenant.
7. **Extension à d'autres disciplines** — Les docs mentionnent musique, théâtre, écriture, animation. Le site pourrait en parler dans la vision long terme, mais pas comme offre actuelle.
8. **Dossier de subvention** — Le doc 01 (Partenariats) est un template pour demandes de subvention. Pas pour le site mais utile en interne.
9. **Guide de formation intervenants** — Le doc 03 (Pédagogie) est un manuel complet. Pourrait devenir une ressource interne, pas publique.
10. **WhatsApp placeholder** — Le numéro dans WhatsAppButton.tsx est toujours `33600000000`. À remplacer par le vrai numéro.
