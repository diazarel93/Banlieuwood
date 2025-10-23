# 📸 GUIDE : METTRE DES IMAGES DE FOND DANS LES CARDS

**Date :** 23 octobre 2024
**Page :** Institutions - Section "Les Problèmes Qu'On Peut Traiter"

---

## ✅ CE QUI A ÉTÉ FAIT

Les 6 cards de problèmes ont maintenant des **images de fond** au lieu de couleurs unies.

**Structure :**
```
┌─────────────────────────────┐
│ [Photo en fond]             │
│ + Overlay coloré (80%)      │
│ + Gradient noir en bas      │
│   ┌─────────────────────┐   │
│   │ [Icône blanche]     │   │
│   │ Titre               │   │
│   │ Description         │   │
│   │ "Voir la solution →"│   │
│   └─────────────────────┘   │
└─────────────────────────────┘
```

---

## 🎨 IMAGES ACTUELLES

### **1. Harcèlement Scolaire**
- **URL :** `https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg`
- **Description :** Jeunes en conflit
- **Couleur overlay :** Rouge-Orange (`from-red-500 to-orange-500`)

### **2. Réseaux Sociaux**
- **URL :** `https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg`
- **Description :** Smartphone & réseaux
- **Couleur overlay :** Bleu-Cyan (`from-blue-500 to-cyan-500`)

### **3. Décrochage Scolaire**
- **URL :** `https://images.pexels.com/photos/6209236/pexels-photo-6209236.jpeg`
- **Description :** Jeune seul démotivé
- **Couleur overlay :** Violet-Rose (`from-purple-500 to-pink-500`)

### **4. Prévention Délinquance**
- **URL :** `https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg`
- **Description :** Encadrement jeunes
- **Couleur overlay :** Ambre-Jaune (`from-amber-500 to-yellow-500`)

### **5. Santé Mentale**
- **URL :** `https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg`
- **Description :** Bien-être mental
- **Couleur overlay :** Vert-Émeraude (`from-green-500 to-emerald-500`)

### **6. Inégalités d'Accès**
- **URL :** `https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg`
- **Description :** Diversité égalité
- **Couleur overlay :** Indigo-Bleu (`from-indigo-500 to-blue-500`)

---

## 🔧 COMMENT CHANGER UNE IMAGE

### **Fichier à modifier :** `src/pages/Institutions.tsx`

### **Ligne 80-145 :** Array `challenges`

**Exemple pour "Harcèlement Scolaire" :**

```typescript
{
  icon: AlertTriangle,
  title: 'Harcèlement Scolaire',
  problem: 'Climat dégradé, violence entre élèves',
  solution: 'Création de films sur le harcèlement...',
  results: '[TODO: Résultats mesurés]',
  color: 'from-red-500 to-orange-500',
  bgColor: 'bg-red-500/10',
  bgImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg' // ← CHANGER ICI
}
```

### **Étapes :**

1. **Trouve une image Pexels** (ou autre)
2. **Copie l'URL** de l'image
3. **Remplace** la valeur de `bgImage: 'URL-ICI'`
4. **Sauvegarde** le fichier
5. **Rebuild** : `npm run build`

---

## 🎯 IDÉES D'IMAGES PAR THÈME

### **Harcèlement Scolaire**
**Mots-clés Pexels :**
- "bullying students"
- "conflict teenagers"
- "school fight"
- "angry young people"

**Exemples d'URL :**
```
https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg
https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg
https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg
```

---

### **Réseaux Sociaux**
**Mots-clés Pexels :**
- "smartphone teenager"
- "social media"
- "phone addiction"
- "young people phone"

**Exemples d'URL :**
```
https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg
https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg
https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg
```

---

### **Décrochage Scolaire**
**Mots-clés Pexels :**
- "sad student"
- "bored teenager"
- "school dropout"
- "tired young person"

**Exemples d'URL :**
```
https://images.pexels.com/photos/6209236/pexels-photo-6209236.jpeg
https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg
https://images.pexels.com/photos/8500776/pexels-photo-8500776.jpeg
```

---

### **Prévention Délinquance**
**Mots-clés Pexels :**
- "youth program"
- "mentor teenager"
- "community center"
- "youth workshop"

**Exemples d'URL :**
```
https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg
https://images.pexels.com/photos/8500313/pexels-photo-8500313.jpeg
https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg
```

---

### **Santé Mentale**
**Mots-clés Pexels :**
- "mental health young"
- "therapy teenager"
- "meditation youth"
- "wellbeing student"

**Exemples d'URL :**
```
https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg
https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg
https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg
```

---

### **Inégalités d'Accès**
**Mots-clés Pexels :**
- "diverse students"
- "multicultural education"
- "equality youth"
- "inclusive group"

**Exemples d'URL :**
```
https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg
https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg
https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg
```

---

## 🎨 PERSONNALISER LES OVERLAYS

### **Structure actuelle :**

```tsx
{/* Overlay gradient coloré (80% opacité) */}
<div className={`absolute inset-0 bg-gradient-to-br ${challenge.color} opacity-80`}></div>

{/* Overlay noir dégradé en bas */}
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
```

### **Options de personnalisation :**

#### **1. Changer l'opacité de la couleur**
```tsx
// Plus opaque (image moins visible)
opacity-90   // 90%
opacity-95   // 95%

// Moins opaque (image plus visible)
opacity-70   // 70%
opacity-60   // 60%
opacity-50   // 50%
```

#### **2. Changer la direction du gradient**
```tsx
bg-gradient-to-br  // Top-left → Bottom-right (actuel)
bg-gradient-to-tr  // Bottom-left → Top-right
bg-gradient-to-r   // Gauche → Droite
bg-gradient-to-b   // Haut → Bas
```

#### **3. Changer l'intensité du noir en bas**
```tsx
// Plus sombre
from-black via-black/70 to-transparent

// Plus léger
from-black/70 via-black/30 to-transparent

// Très léger
from-black/50 via-black/20 to-transparent
```

---

## 🖼️ UTILISER TES PROPRES PHOTOS

### **Option 1 : Via Supabase Storage**

1. **Upload photo** dans Supabase Storage
2. **Copie l'URL publique**
3. **Utilise dans `bgImage`**

```typescript
bgImage: 'https://votre-supabase.co/storage/v1/object/public/medias/harcelement.jpg'
```

---

### **Option 2 : Via public/images/**

1. **Ajoute photo** dans `/public/images/`
2. **Référence relative**

```typescript
bgImage: '/images/harcelement.jpg'
```

---

### **Option 3 : URL externe (Pexels, Unsplash, etc.)**

```typescript
bgImage: 'https://images.pexels.com/photos/XXXXX/pexels-photo-XXXXX.jpeg'
```

---

## 📐 TAILLES RECOMMANDÉES

### **Format idéal :**
- **Ratio :** 3:4 (portrait) ou 4:3 (paysage)
- **Largeur :** 800-1200px
- **Hauteur :** 600-900px
- **Poids :** < 500 KB

### **Format Pexels :**
Pour optimiser, ajoute des paramètres à l'URL :

```
?auto=compress&cs=tinysrgb&w=800&h=600
```

**Exemple complet :**
```
https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600
```

---

## 🎭 EFFETS VISUELS EXISTANTS

### **Hover effects :**
1. **Image zoom** : Scale 110% au hover
2. **Titre change couleur** : Blanc → Ambre-300
3. **Flèche se décale** : Translate-x
4. **Icône scale** : 100% → 110%

### **Animations :**
- **Entrée** : `animate-scale-in` avec delay 0.05s
- **Transition** : `duration-300` smooth
- **Image** : `duration-500` pour le zoom

---

## 🔄 EXEMPLE COMPLET DE MODIFICATION

### **Avant :**
```typescript
{
  icon: AlertTriangle,
  title: 'Harcèlement Scolaire',
  problem: 'Climat dégradé, violence entre élèves',
  solution: 'Création de films sur le harcèlement...',
  results: '[TODO: Résultats mesurés]',
  color: 'from-red-500 to-orange-500',
  bgColor: 'bg-red-500/10',
  bgImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg'
}
```

### **Après (nouvelle image) :**
```typescript
{
  icon: AlertTriangle,
  title: 'Harcèlement Scolaire',
  problem: 'Climat dégradé, violence entre élèves',
  solution: 'Création de films sur le harcèlement...',
  results: '[TODO: Résultats mesurés]',
  color: 'from-red-500 to-orange-500',
  bgColor: 'bg-red-500/10',
  bgImage: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg?auto=compress&w=800' // ← NOUVELLE IMAGE
}
```

---

## 🚀 AUTRES ENDROITS OÙ AJOUTER DES IMAGES DE FOND

### **1. Page Home - Section "Ce que tu gagnes vraiment"**

**Fichier :** `src/pages/Home.tsx`

**Lignes ~128-180** : Les 4 cards avec icônes orange

**Actuellement :**
```tsx
<div className="glass-card rounded-2xl p-8 hover-lift...">
```

**Tu peux transformer en :**
```tsx
<div className="relative rounded-2xl overflow-hidden group">
  {/* Image de fond */}
  <div className="absolute inset-0">
    <img src="URL-IMAGE" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/80 to-orange-500/80"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
  </div>

  {/* Contenu */}
  <div className="relative p-8 hover-lift">
    {/* Contenu actuel */}
  </div>
</div>
```

---

### **2. Page Ateliers - Formats d'ateliers**

**Fichier :** `src/pages/Ateliers.tsx`

Les cards "Atelier Découverte", "Atelier Intensif", etc.

**Même principe :**
- Ajoute `bgImage` dans les données
- Wrap dans un container avec image de fond
- Overlay gradient

---

### **3. Page Films - Cards de films**

**Fichier :** `src/pages/Films.tsx`

Les thumbnails de films peuvent avoir un effet hover avec fond changeant.

---

## 💡 CONSEILS

### **✅ DO**
- Utiliser des images **haute qualité** (min 800px)
- Garder une **cohérence visuelle** entre les 6 cards
- Tester le **contraste texte/fond** (lisibilité)
- Optimiser les images (compression, format WebP si possible)

### **❌ DON'T**
- Images trop lourdes (> 1 MB)
- Images floues ou pixelisées
- Overlay trop transparent (texte illisible)
- Couleurs qui clashent avec le reste du site

---

## 📊 PERFORMANCE

### **Impact actuel :**
- **+6 images** chargées (800px chacune ~200-400 KB)
- **Total ajouté :** ~1.5-2 MB
- **Lazy loading :** Automatique (browser natif)
- **Hover effect :** Performant (GPU-accelerated)

### **Optimisations possibles :**
1. **WebP format** : -30% poids
2. **Lazy loading explicite** : `loading="lazy"`
3. **Responsive images** : `srcset` pour mobile
4. **CDN** : Utiliser Pexels CDN (déjà fait)

---

## ✅ RÉSUMÉ

**Ce qui a été ajouté :**
- ✅ Images de fond sur les 6 cards "Problèmes"
- ✅ Overlay gradient coloré (conserve l'identité visuelle)
- ✅ Overlay noir en bas (lisibilité texte)
- ✅ Effet hover zoom image
- ✅ Icône sur fond semi-transparent avec blur

**Pour changer une image :**
1. Ouvre `src/pages/Institutions.tsx`
2. Ligne 80-145 : Array `challenges`
3. Change `bgImage: 'URL-ICI'`
4. `npm run build`

**Build :** ✅ Compile sans erreurs (43.37 kB)

---

**Tu veux que j'ajoute des images de fond sur d'autres sections ?**
