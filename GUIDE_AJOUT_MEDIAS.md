# 📸 GUIDE : OÙ AJOUTER DES PHOTOS/VIDÉOS SUR LE SITE

**Date :** 23 octobre 2024
**Objectif :** Identifier TOUS les endroits où tu peux mettre des médias avec les composants existants

---

## 🎯 COMPOSANTS DISPONIBLES

Tu as **5 composants média** déjà créés :

### 1. **MediaGallery** 📷
**Ce qu'il fait :**
- Affiche une grille de photos
- Clique sur une photo → lightbox plein écran
- Navigue entre les photos (← →)
- Charge les photos depuis Supabase

**Comment l'utiliser :**
```tsx
<MediaGallery
  pageLocation="home"     // Page où afficher
  category="gallery"      // Catégorie des photos
  columns={3}            // Nombre de colonnes (2, 3, ou 4)
/>
```

**Paramètres :**
- `pageLocation` : `"home"`, `"ateliers"`, `"about"`, `"films"`, `"institutions"`, etc.
- `category` : `"gallery"`, `"hero"`, `"team"`, `"behind-scenes"`, etc.
- `columns` : `2`, `3`, ou `4`

---

### 2. **VideoHeroBackground** 🎬
**Ce qu'il fait :**
- Vidéo Vimeo en arrière-plan du hero
- Overlay semi-transparent
- Contenu par-dessus

**Comment l'utiliser :**
```tsx
<VideoHeroBackground
  vimeoId="515298131"
  posterImage="https://url-image.jpg"
>
  {/* Ton contenu hero ici */}
  <h1>Titre</h1>
</VideoHeroBackground>
```

---

### 3. **VideoTestimonials** 🎥
**Ce qu'il fait :**
- Grid de témoignages vidéo
- Thumbnails cliquables
- Player vidéo Vimeo

**Comment l'utiliser :**
```tsx
<VideoTestimonials />
```
Les vidéos sont définies dans le composant.

---

### 4. **BeforeAfterStories** 🔄
**Ce qu'il fait :**
- Transformations avant/après
- Slider interactif
- Photos de profil

**Comment l'utiliser :**
```tsx
<BeforeAfterStories />
```
Les stories sont définies dans le composant.

---

### 5. **VideoPlayer** ▶️
**Ce qu'il fait :**
- Player vidéo Vimeo en modal
- Navigation entre vidéos
- Fermeture ESC

**Comment l'utiliser :**
```tsx
const [showVideo, setShowVideo] = useState(false);

<VideoPlayer
  videos={[{ title: "Film", vimeoId: "123", thumbnail: "url" }]}
  currentIndex={0}
  onClose={() => setShowVideo(false)}
  onVideoChange={(index) => {}}
/>
```

---

## 📄 OÙ AJOUTER DES MÉDIAS PAR PAGE

### **1. HOME** (`/`)

#### ✅ Déjà utilisé :
- **VideoHeroBackground** : Vidéo hero en fond
- **BeforeAfterStories** : Transformations
- **VideoTestimonials** : Témoignages vidéo
- **MediaGallery** : Galerie ateliers (section "Ça Se Passe Comment")

#### 🆕 Tu peux ajouter :

**Après le hero (ligne ~108)** :
```tsx
{/* Photos d'ambiance générale */}
<section className="py-12 px-4 bg-black">
  <MediaGallery pageLocation="home" category="ambiance" columns={4} />
</section>
```

**Dans section "Pourquoi Banlieuwood" (ligne ~145)** :
```tsx
{/* Photos équipe/formateurs */}
<div className="mt-16">
  <h3 className="text-2xl font-bold text-center mb-8">Notre Équipe</h3>
  <MediaGallery pageLocation="home" category="team" columns={4} />
</div>
```

**Dans section "Films" (ligne ~225)** :
```tsx
{/* Visuels supplémentaires films */}
<div className="mt-12">
  <MediaGallery pageLocation="home" category="films-stills" columns={3} />
</div>
```

**Avant le CTA final (ligne ~308)** :
```tsx
{/* Photos événements/moments forts */}
<section className="py-16 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-12">
      Nos <span className="gradient-text">Moments Forts</span>
    </h3>
    <MediaGallery pageLocation="home" category="highlights" columns={3} />
  </div>
</section>
```

---

### **2. ATELIERS** (`/ateliers`)

#### ✅ Actuellement : Aucun média

#### 🆕 Tu peux ajouter :

**Après le hero** :
```tsx
{/* Hero avec vidéo background */}
<VideoHeroBackground
  vimeoId="ID-VIDEO-ATELIER"
  posterImage="https://image-atelier.jpg"
>
  <h1>Nos Ateliers</h1>
  <p>Description...</p>
</VideoHeroBackground>
```

**Section "Nos Ateliers en Images"** :
```tsx
<section className="py-24 px-4 bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Les Ateliers <span className="gradient-text">en Images</span>
    </h2>
    <MediaGallery pageLocation="ateliers" category="sessions" columns={3} />
  </div>
</section>
```

**Section "Matériel & Équipement"** :
```tsx
<section className="py-16 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-8">Notre Matériel Pro</h3>
    <MediaGallery pageLocation="ateliers" category="equipment" columns={4} />
  </div>
</section>
```

**Section "Témoignages"** :
```tsx
<VideoTestimonials />
```

---

### **3. FILMS** (`/films`)

#### ✅ Actuellement : Système de vidéos existant

#### 🆕 Tu peux ajouter :

**Hero vidéo** :
```tsx
<VideoHeroBackground
  vimeoId="ID-MEILLEUR-FILM"
  posterImage="https://poster-film.jpg"
>
  <h1>Nos Créations</h1>
</VideoHeroBackground>
```

**Behind the scenes** :
```tsx
<section className="py-24 px-4 bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Dans les <span className="gradient-text">Coulisses</span>
    </h2>
    <MediaGallery pageLocation="films" category="behind-scenes" columns={3} />
  </div>
</section>
```

**Photos plateaux de tournage** :
```tsx
<section className="py-16 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-8">Sur le Plateau</h3>
    <MediaGallery pageLocation="films" category="plateau" columns={4} />
  </div>
</section>
```

---

### **4. ABOUT** (`/a-propos`)

#### ✅ Actuellement : Aucun média

#### 🆕 Tu peux ajouter :

**Hero avec photo fondateur** :
```tsx
<VideoHeroBackground
  vimeoId="ID-VIDEO-HISTOIRE"
  posterImage="https://photo-fondateur.jpg"
>
  <h1>Notre Histoire</h1>
</VideoHeroBackground>
```

**Section équipe** :
```tsx
<section className="py-24 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      L'<span className="gradient-text">Équipe</span>
    </h2>
    <MediaGallery pageLocation="about" category="team" columns={4} />
  </div>
</section>
```

**Timeline photos** :
```tsx
<section className="py-16 px-4 bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-8">10 Ans d'Histoire</h3>
    <MediaGallery pageLocation="about" category="timeline" columns={3} />
  </div>
</section>
```

---

### **5. INSTITUTIONS** (`/institutions`)

#### ✅ Actuellement : 1 photo statique

#### 🆕 Tu peux ajouter :

**Hero vidéo** :
```tsx
<VideoHeroBackground
  vimeoId="ID-VIDEO-INSTITUTIONS"
  posterImage="https://institutions.jpg"
>
  <h1>Pour les Institutions</h1>
</VideoHeroBackground>
```

**Section "Nos Interventions"** :
```tsx
<section className="py-24 px-4 bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Nos <span className="gradient-text">Interventions</span>
    </h2>
    <MediaGallery pageLocation="institutions" category="interventions" columns={3} />
  </div>
</section>
```

**Photos partenaires** :
```tsx
<section className="py-16 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-8">Ils Nous Font Confiance</h3>
    <MediaGallery pageLocation="institutions" category="partners-action" columns={4} />
  </div>
</section>
```

---

### **6. REUSSITES** (`/reussites`)

#### ✅ Actuellement : Aucun média

#### 🆕 Tu peux ajouter :

**Hero vidéo compilation** :
```tsx
<VideoHeroBackground
  vimeoId="ID-COMPILATION-REUSSITES"
  posterImage="https://reussites.jpg"
>
  <h1>Leurs Réussites</h1>
</VideoHeroBackground>
```

**BeforeAfter stories** :
```tsx
<BeforeAfterStories />
```

**Galerie diplômés** :
```tsx
<section className="py-24 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Nos <span className="gradient-text">Alumni</span>
    </h2>
    <MediaGallery pageLocation="reussites" category="alumni" columns={4} />
  </div>
</section>
```

**Témoignages vidéo** :
```tsx
<VideoTestimonials />
```

---

### **7. PARTENAIRES** (`/partenaires`)

#### ✅ Actuellement : Logos statiques

#### 🆕 Tu peux ajouter :

**Photos événements partenaires** :
```tsx
<section className="py-24 px-4 bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Événements <span className="gradient-text">Communs</span>
    </h2>
    <MediaGallery pageLocation="partenaires" category="events" columns={3} />
  </div>
</section>
```

**Photos conventions signées** :
```tsx
<section className="py-16 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-8">Nos Conventions</h3>
    <MediaGallery pageLocation="partenaires" category="conventions" columns={4} />
  </div>
</section>
```

---

### **8. DEROULEMENT** (`/deroulement`)

#### ✅ Actuellement : Timeline texte

#### 🆕 Tu peux ajouter :

**Vidéo explication** :
```tsx
<VideoHeroBackground
  vimeoId="ID-VIDEO-DEROULEMENT"
  posterImage="https://deroulement.jpg"
>
  <h1>Comment Ça Marche ?</h1>
</VideoHeroBackground>
```

**Photos chaque étape** :
```tsx
<section className="py-24 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Chaque <span className="gradient-text">Étape</span>
    </h2>
    <MediaGallery pageLocation="deroulement" category="steps" columns={3} />
  </div>
</section>
```

---

### **9. CONTACT** (`/contact`)

#### ✅ Actuellement : Formulaire

#### 🆕 Tu peux ajouter :

**Photo locaux/studio** :
```tsx
<section className="py-16 px-4 bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-8">Nos Locaux</h3>
    <MediaGallery pageLocation="contact" category="location" columns={3} />
  </div>
</section>
```

---

## 🎨 EXEMPLES CONCRETS D'INTÉGRATION

### **Exemple 1 : Ajouter galerie "Coulisses" sur page Films**

**Fichier :** `src/pages/Films.tsx`

**Avant la section "Tous nos films" (ligne ~120)** :
```tsx
{/* NOUVELLE SECTION : Behind the Scenes */}
<section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block mb-6 glass px-6 py-2 rounded-full">
        <p className="text-amber-500 font-bold text-sm uppercase tracking-wide">
          Coulisses
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Dans les <span className="gradient-text">Coulisses</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Découvrez l'envers du décor de nos tournages
      </p>
    </div>

    <MediaGallery
      pageLocation="films"
      category="behind-scenes"
      columns={3}
    />
  </div>
</section>
```

---

### **Exemple 2 : Hero vidéo sur page Ateliers**

**Fichier :** `src/pages/Ateliers.tsx`

**Remplacer le hero actuel (lignes ~40-80)** :
```tsx
import VideoHeroBackground from '../components/VideoHeroBackground';

{/* Hero avec vidéo background */}
<VideoHeroBackground
  vimeoId="515298131"
  posterImage="https://images.pexels.com/photos/7234403/pexels-photo-7234403.jpeg"
>
  <div className="flex items-center justify-center h-full">
    <div className="text-center px-4 max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
        Nos <span className="gradient-text">Ateliers</span>
      </h1>
      <p className="text-2xl md:text-3xl mb-8 animate-fade-in stagger-delay-1">
        Formation cinéma gratuite pour les 12-25 ans
      </p>
      <a
        href="#inscription"
        className="btn-primary text-lg py-4 px-8 shadow-glow-primary animate-fade-in stagger-delay-2"
      >
        S'inscrire Maintenant
      </a>
    </div>
  </div>
</VideoHeroBackground>
```

---

### **Exemple 3 : Galerie équipe sur page À Propos**

**Fichier :** `src/pages/About.tsx`

**Ajouter après la section "Notre Histoire" (ligne ~100)** :
```tsx
{/* Section Équipe */}
<section className="py-24 px-4 bg-black">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block mb-6 glass px-6 py-2 rounded-full">
        <p className="text-amber-500 font-bold text-sm uppercase tracking-wide">
          L'Équipe
        </p>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Qui Sommes-<span className="gradient-text">Nous</span> ?
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Des professionnels passionnés au service des jeunes
      </p>
    </div>

    <MediaGallery
      pageLocation="about"
      category="team"
      columns={4}
    />
  </div>
</section>
```

---

## 📊 RÉCAPITULATIF : TOUTES LES POSSIBILITÉS

| Page | Composant | Où l'ajouter | Catégorie suggérée |
|------|-----------|--------------|-------------------|
| **Home** | MediaGallery | ✅ Déjà (ateliers) | `gallery` |
| | MediaGallery | Après hero | `ambiance` |
| | MediaGallery | Section équipe | `team` |
| | MediaGallery | Section films | `films-stills` |
| | MediaGallery | Avant CTA final | `highlights` |
| | VideoHeroBackground | ✅ Déjà | Hero |
| | BeforeAfterStories | ✅ Déjà | Stories |
| | VideoTestimonials | ✅ Déjà | Témoignages |
| **Ateliers** | VideoHeroBackground | Hero | - |
| | MediaGallery | Ateliers en images | `sessions` |
| | MediaGallery | Matériel | `equipment` |
| | VideoTestimonials | Témoignages | - |
| **Films** | VideoHeroBackground | Hero | - |
| | MediaGallery | Coulisses | `behind-scenes` |
| | MediaGallery | Plateaux | `plateau` |
| **About** | VideoHeroBackground | Hero histoire | - |
| | MediaGallery | Équipe | `team` |
| | MediaGallery | Timeline | `timeline` |
| **Institutions** | VideoHeroBackground | Hero | - |
| | MediaGallery | Interventions | `interventions` |
| | MediaGallery | Partenaires action | `partners-action` |
| **Réussites** | VideoHeroBackground | Hero | - |
| | BeforeAfterStories | Stories | - |
| | MediaGallery | Alumni | `alumni` |
| | VideoTestimonials | Témoignages | - |
| **Partenaires** | MediaGallery | Événements | `events` |
| | MediaGallery | Conventions | `conventions` |
| **Déroulement** | VideoHeroBackground | Hero | - |
| | MediaGallery | Étapes | `steps` |
| **Contact** | MediaGallery | Locaux | `location` |

**TOTAL : 30+ endroits possibles pour ajouter des médias !**

---

## 🚀 COMMENT AJOUTER DES PHOTOS/VIDÉOS

### **Méthode 1 : Via MediaManager (Admin)**

1. Va sur `/media-manager`
2. Upload une photo
3. Remplis :
   - **Page** : Ex: `home`, `ateliers`, `films`
   - **Catégorie** : Ex: `gallery`, `team`, `behind-scenes`
   - **Position** : Ordre d'affichage
   - **Active** : Oui

4. Les photos s'affichent automatiquement sur la page !

---

### **Méthode 2 : Directement dans Supabase**

1. Va dans **Table `media_library`**
2. Insère une ligne :
   ```sql
   INSERT INTO media_library (
     page_location,
     category,
     media_type,
     title,
     file_url,
     alt_text,
     position,
     is_active
   ) VALUES (
     'ateliers',
     'sessions',
     'photo',
     'Atelier tournage',
     'https://url-photo.jpg',
     'Jeunes en tournage',
     1,
     true
   );
   ```

---

## 💡 CONSEILS

### **Nommage des catégories :**
```
gallery         → Galerie générale
team            → Photos équipe
behind-scenes   → Coulisses
equipment       → Matériel
sessions        → Sessions ateliers
alumni          → Diplômés
events          → Événements
plateau         → Tournages
timeline        → Chronologie
interventions   → Interventions institutions
highlights      → Moments forts
```

### **Tailles recommandées :**
- **Hero background** : 1920x1080px
- **Galerie 3 colonnes** : 1200x800px
- **Galerie 4 colonnes** : 800x600px
- **Portraits équipe** : 600x800px

### **Formats acceptés :**
- JPG, PNG, WebP
- Poids max : 2 MB par photo

---

## ✅ ACTIONS IMMÉDIATES

**Ce que tu peux faire maintenant :**

1. ✅ **MediaGallery sur Home** → Déjà actif
2. 🆕 **MediaGallery sur Ateliers** → Ajouter `sessions` + `equipment`
3. 🆕 **MediaGallery sur Films** → Ajouter `behind-scenes`
4. 🆕 **MediaGallery sur About** → Ajouter `team`
5. 🆕 **VideoHeroBackground sur Ateliers** → Remplacer hero actuel

**Tu veux que j'en ajoute un en particulier ?**
