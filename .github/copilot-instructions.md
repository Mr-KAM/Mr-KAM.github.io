# Copilot Instructions - Portfolio Mr-KAM

## Vue d'ensemble du projet

Ce projet est un site portfolio personnel **statique** hébergé sur **GitHub Pages** (`Mr-KAM.github.io`). Il présente les compétences, formations, réalisations et coordonnées de Anicet Cyrille KAMBOU, ingénieur agronome, développeur et enseignant-chercheur.

### Architecture

- **Type de site** : Single-page application (SPA) statique
- **Structure** : HTML monolithique ([index.html](index.html)) avec CSS inline et JavaScript vanilla en fin de fichier
- **Stack technique** :
  - HTML5 sémantique
  - **Tailwind CSS** via CDN (styles utility-first)
  - **Font Awesome 6.4.0** pour les icônes
  - **Google Fonts** (Poppins) pour la typographie
  - JavaScript vanilla (pas de framework, pas de build)

### Organisation des fichiers

```
index.html              # Fichier principal unique (1176 lignes)
static/
  ├── doc/              # CVs au format PDF
  ├── img profile/      # Photo de profil (moi.jpg)
  └── img crea/         # Screenshots de projets (organisés par catégorie)
      ├── applications/
      ├── cartes/
      ├── packages et framework/
      └── tableau de bord/
```

**Note importante** : Les dossiers `static/css/` et `static/js/` sont vides. Tout le CSS et JS est intégré dans [index.html](index.html).

## Conventions de code spécifiques

### Style CSS

1. **Tailwind utility-first** : Utiliser les classes Tailwind pour le styling principal
   - Couleurs : `bg-gray-900`, `text-amber-500`, `hover:bg-amber-600`
   - Spacing : système de padding/margin standard Tailwind
   
2. **CSS custom dans `<style>` (lignes 10-57)** :
   - Classes réutilisables : `.hero-gradient`, `.timeline-line`, `.timeline-dot`, `.project-overlay`
   - **Pattern important** : Effets hover avec `.transition-all` et transformations

   Exemple :
   ```css
   .project-card:hover {
       transform: translateY(-5px);
   }
   ```

### Structure HTML

1. **Sections avec IDs** : Chaque section principale a un `id` pour la navigation d'ancrage
   - `#accueil`, `#apropos`, `#competences`, `#formations`, `#realisations`, `#cv`, `#blog`, `#contact`

2. **Navigation responsive** :
   - Menu desktop : `class="hidden md:flex"`
   - Menu mobile : `id="mobile-menu"` (togglé par JavaScript)

3. **Cards avec hover effects** :
   - Compétences : `.hover:border-amber-500 border border-transparent`
   - Projets : `.project-card` avec `.project-overlay` (opacity 0 → 1 au hover)

### JavaScript (lignes ~1000-1176)

Tout le JavaScript est en fin de fichier, dans un seul `<script>` tag. Fonctionnalités :

1. **Toggle menu mobile** :
   ```js
   document.getElementById('menu-toggle').addEventListener('click', () => { ... })
   ```

2. **Filtres de projets** :
   - Boutons : `class="filter-btn"` avec `data-filter="all|web|mobile|design|other"`
   - Cards projets : `data-category="web|mobile|design|other"`
   - **Pattern** : Afficher/masquer avec `display: none/block`

3. **Smooth scroll** :
   - Liens d'ancrage : `a[href^="#"]`
   - Offset de 80px pour le header fixe

4. **Back to top button** :
   - Apparaît après scroll > 300px
   - Classes toggle : `opacity-0 invisible` ↔ `opacity-100 visible`

## Workflows critiques

### Ajout d'une nouvelle réalisation/projet

1. **HTML** : Dupliquer une div `.project-card` existante (lignes ~410-450)
2. **Attributs à modifier** :
   - `data-category="web|mobile|design|other"` pour le filtrage
   - Image : `src="static/img crea/[categorie]/nom-image.jpg"`
   - Tags technos : spans avec `class="bg-gray-700 text-xs py-1 px-2 rounded"`
3. **Nouvelle image** : Placer dans `static/img crea/` (sous-dossiers par catégorie)

### Modification du contenu "À propos"

- Section `#apropos` (lignes ~153-182)
- Texte biographique dans les balises `<p class="text-gray-300 mb-6">`

### Ajout d'une compétence

- Section `#competences` (lignes ~186-275)
- **Pattern** : Card avec icône Font Awesome dans `.bg-amber-500` circle
- Classes : `.hover:transform hover:-translate-y-1` pour l'effet hover

### Mise à jour des CVs

1. Remplacer les PDFs dans `static/doc/`
2. Mettre à jour les liens (section `#cv`, lignes ~540-712)
3. Boutons de téléchargement : liens `<a href="static/doc/...">` avec icône `.fa-download`

## Points d'attention

### Déploiement GitHub Pages

- **Pas de build** : Commiter directement [index.html](index.html)
- **CDN dependencies** : Vérifier que Tailwind/Font Awesome CDN sont accessibles
- **Chemins images** : Utiliser chemins relatifs (`static/img profile/moi.jpg`)

### Responsive design

- Breakpoint principal : `md:` (768px+)
- **Pattern commun** : `flex flex-col md:flex-row` pour layouts stack → side-by-side

### Accessibilité

- Utiliser des balises sémantiques (`<header>`, `<section>`, `<article>`)
- Ajouter `alt` à toutes les images
- Navigation keyboard-friendly (smooth scroll fonctionne avec Enter)

### Performance

- **Images** : Optimiser les images dans `static/img crea/` (actuellement placeholders)
- **CDN caching** : Tailwind/Font Awesome chargés depuis CDN (pas de bundle local)

## Intégrations externes

- **GitHub** : https://github.com/Mr-KAM
- **LinkedIn** : https://www.linkedin.com/in/kambou-anicet-cyrille-ing-agro-dev-data/
- **Email** : `email@exemple.com` (placeholder à remplacer, lignes 593-594, 905-907)
- **Réseaux sociaux** : Liens dans section hero (lignes 126-137) - certains sont des placeholders `href="#"`

## Bogues connus / Améliorations potentielles

1. **Formulaire de contact** : Non fonctionnel (pas de backend, section `#contact`)
2. **Blog** : Articles avec placeholders, pas de système de contenu dynamique
3. **Bouton "Voir plus de projets"** : Simule un chargement avec `setTimeout` (ligne ~1172)
4. **Images projets** : Utilisent `/api/placeholder/600/400` (à remplacer par vraies images)

## Ressources clés

- [README.md](README.md) : Documentation minimale du projet
- `static/doc/` : CVs téléchargeables (2 versions disponibles)
- Tailwind CSS docs : https://tailwindcss.com/docs
- Font Awesome icons : https://fontawesome.com/icons
